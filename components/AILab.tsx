
import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Video, Wand2, Loader2, Download, AlertCircle } from 'lucide-react';
import { generateImage, editImage, analyzeVideoInfo } from '../services/geminiService';

const AILab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit' | 'video'>('generate');
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // For Editing
  const [editFile, setEditFile] = useState<File | null>(null);
  const [editPreview, setEditPreview] = useState<string | null>(null);

  const checkApiKey = async () => {
    if (typeof window.aistudio !== 'undefined') {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        return true; // Proceed assuming success after dialog open
      }
    }
    return true;
  };

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setError(null);
    try {
      await checkApiKey();
      const result = await generateImage(prompt, size);
      if (result) setResultImage(result);
      else setError("Failed to generate image.");
    } catch (e: any) {
      if (e.message?.includes("Requested entity was not found")) {
        window.aistudio.openSelectKey();
      }
      setError("Error occurred during generation.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!editFile || !prompt) return;
    setIsLoading(true);
    setError(null);
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = (reader.result as string).split(',')[1];
        const result = await editImage(base64, editFile.type, prompt);
        if (result) setResultImage(result);
        else setError("Failed to edit image.");
        setIsLoading(false);
      };
      reader.readAsDataURL(editFile);
    } catch (e) {
      setError("Error occurred during editing.");
      setIsLoading(false);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setEditFile(file);
      setEditPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-ecoBlack text-white py-24 px-4 relative overflow-hidden">
      {/* Background Court Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Lab court background" />
      </div>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ecoNavy rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-ecoBaby rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-4" style={{ textShadow: '4px 4px 0px #001c52' }}>
            THE <span className="text-ecoBaby">AI LAB</span>
          </h1>
          <p className="font-scribble text-ecoYellow text-2xl -rotate-1">Play + Learn + Grow</p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'generate', label: 'Generator', icon: ImageIcon, model: 'Gemini 3 Pro' },
            { id: 'edit', label: 'Editor', icon: Wand2, model: 'Gemini 2.5 Flash' },
            { id: 'video', label: 'Film Analyst', icon: Video, model: 'Gemini 3 Pro' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id as any); setResultImage(null); setError(null); }}
              className={`flex flex-col items-center px-8 py-4 border-2 transition-all transform hover:-translate-y-1 ${
                activeTab === tab.id ? 'bg-white text-ecoBlack border-white -rotate-1 shadow-[6px_6px_0px_0px_rgba(151,179,210,1)]' : 'bg-transparent border-white/20 text-gray-400'
              }`}
            >
              <tab.icon className="h-6 w-6 mb-2" />
              <span className="font-display font-bold uppercase text-lg">{tab.label}</span>
              <span className="text-[10px] opacity-60 font-mono">{tab.model}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-ecoNavy/30 border-2 border-white p-8 relative">
            <div className="tape w-24 h-6 -top-3 left-10"></div>
            
            {activeTab === 'generate' && (
              <div className="space-y-6">
                <div>
                  <label className="block font-display font-bold uppercase mb-2 tracking-wide">Image Concept</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. A robotic basketball player dunking a hologram ball in a street court..."
                    className="w-full bg-black/40 border-2 border-white/20 p-4 font-sans text-white focus:border-ecoBaby outline-none h-32"
                  />
                </div>
                <div>
                  <label className="block font-display font-bold uppercase mb-2 tracking-wide">Resolution</label>
                  <div className="flex gap-4">
                    {['1K', '2K', '4K'].map((s) => (
                      <button 
                        key={s}
                        onClick={() => setSize(s as any)}
                        className={`flex-1 py-2 font-bold font-mono border-2 ${size === s ? 'bg-ecoBaby text-ecoNavy border-ecoBaby' : 'border-white/20 hover:border-white'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2 font-mono uppercase">Note: 2K/4K requires paid project API key.</p>
                </div>
                <button 
                  onClick={handleGenerate}
                  disabled={isLoading || !prompt}
                  className="w-full bg-white text-ecoBlack py-4 font-display font-bold text-2xl uppercase hover:bg-ecoBaby transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles />}
                  Manifest Image
                </button>
              </div>
            )}

            {activeTab === 'edit' && (
              <div className="space-y-6">
                <div>
                  <label className="block font-display font-bold uppercase mb-2 tracking-wide">Source Photo</label>
                  <input type="file" accept="image/*" onChange={onFileChange} className="hidden" id="edit-file" />
                  <label htmlFor="edit-file" className="block w-full border-2 border-dashed border-white/20 p-8 text-center cursor-pointer hover:border-ecoBaby transition-colors">
                    {editPreview ? (
                      <img src={editPreview} className="max-h-40 mx-auto" />
                    ) : (
                      <div className="text-gray-400 font-scribble">Drop image here or click to browse</div>
                    )}
                  </label>
                </div>
                <div>
                  <label className="block font-display font-bold uppercase mb-2 tracking-wide">Adjustment Prompt</label>
                  <textarea 
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. Add a gritty vintage film filter and spray paint 'CHAOS' in the background..."
                    className="w-full bg-black/40 border-2 border-white/20 p-4 font-sans text-white focus:border-ecoBaby outline-none h-24"
                  />
                </div>
                <button 
                  onClick={handleEdit}
                  disabled={isLoading || !editFile || !prompt}
                  className="w-full bg-white text-ecoBlack py-4 font-display font-bold text-2xl uppercase hover:bg-ecoBaby transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 />}
                  Apply Remix
                </button>
              </div>
            )}

            {activeTab === 'video' && (
              <div className="space-y-6">
                 <div className="bg-ecoRed/20 p-4 border-l-4 border-ecoRed">
                   <p className="text-sm font-sans font-bold">The Film Analyst understands motion. Describe a play or upload a clip for deep strategic insight.</p>
                 </div>
                 <textarea 
                    placeholder="Analyze the pick and roll spacing in the 4th quarter..."
                    className="w-full bg-black/40 border-2 border-white/20 p-4 font-sans text-white focus:border-ecoBaby outline-none h-48"
                  />
                  <div className="border-2 border-dashed border-white/20 p-8 text-center text-gray-500 font-display uppercase text-sm">
                    Video Upload Coming Soon
                  </div>
                  <button className="w-full bg-white text-ecoBlack py-4 font-display font-bold text-2xl uppercase opacity-50 cursor-not-allowed">
                    Run Analysis
                  </button>
              </div>
            )}
            
            {error && (
              <div className="mt-4 p-4 bg-ecoRed/20 border-l-4 border-ecoRed flex items-center gap-3 text-sm font-bold">
                <AlertCircle className="h-5 w-5" />
                {error}
              </div>
            )}
          </div>

          {/* Result Panel */}
          <div className="lg:col-span-7 relative">
             <div className="aspect-square lg:aspect-[4/3] bg-black/50 border-4 border-white overflow-hidden relative group">
                {isLoading ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-ecoNavy/80 z-20">
                     <div className="w-20 h-20 border-t-4 border-ecoBaby rounded-full animate-spin mb-4"></div>
                     <span className="font-display text-2xl uppercase tracking-widest animate-pulse">Processing Lab Data...</span>
                  </div>
                ) : resultImage ? (
                  <>
                    <img src={resultImage} className="w-full h-full object-contain" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <a href={resultImage} download="ecohoops-lab-result.png" className="bg-white text-ecoBlack p-3 block shadow-lg hover:bg-ecoBaby">
                          <Download />
                       </a>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white/10 p-12 text-center">
                    <Sparkles size={120} />
                    <p className="mt-4 font-display text-4xl uppercase font-bold opacity-30">Waiting for instructions</p>
                    <p className="font-scribble text-sm mt-2">The results will manifest here.</p>
                  </div>
                )}
             </div>
             <div className="absolute -bottom-12 -left-4 font-scribble text-ecoYellow text-xl -rotate-2 hidden lg:block">RAW LABORATORY OUTPUT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fixed: Added missing default export
export default AILab;