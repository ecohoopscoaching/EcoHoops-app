
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Zap, BrainCircuit } from 'lucide-react';
import { generateFastResponse, generateDeepResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const CoachChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [isDepthMode, setIsDepthMode] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Yo! I'm the EcoHoops AI Assistant. Ask me about our 'Play, Learn, Grow' philosophy. Switch to 'Depth Mode' if you want me to really analyze the science of the game.", 
      timestamp: Date.now() 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    let responseText;
    if (isDepthMode) {
      responseText = await generateDeepResponse(input);
    } else {
      responseText = await generateFastResponse(input);
    }

    const botMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-ecoBlack py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-ecoNavy/50 border-2 border-white rounded-none overflow-hidden shadow-[12px_12px_0px_0px_rgba(151,179,210,1)] flex flex-col h-[75vh] relative">
        <div className="tape w-32 h-6 -top-2 left-1/3"></div>

        {/* Chat Header */}
        <div className="bg-ecoNavy p-6 border-b-4 border-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
             <div className="bg-white p-2 rounded-none transform -rotate-3">
               <Bot className="h-6 w-6 text-ecoNavy" />
             </div>
             <div>
               <h3 className="text-white font-display font-bold text-2xl uppercase tracking-tighter">Coach Analyst AI</h3>
               <p className="text-ecoBaby text-xs font-mono uppercase tracking-widest">Play, Learn, Grow</p>
             </div>
          </div>
          
          <div className="flex items-center gap-2 bg-black/40 p-1 rounded-sm">
            <button 
              onClick={() => setIsDepthMode(false)}
              className={`flex items-center gap-1 px-3 py-1 text-xs font-bold uppercase transition-all ${!isDepthMode ? 'bg-ecoBaby text-ecoNavy' : 'text-gray-500'}`}
            >
              <Zap size={14} /> Fast
            </button>
            <button 
              onClick={() => setIsDepthMode(true)}
              className={`flex items-center gap-1 px-3 py-1 text-xs font-bold uppercase transition-all ${isDepthMode ? 'bg-ecoYellow text-ecoNavy' : 'text-gray-500'}`}
            >
              <BrainCircuit size={14} /> Depth
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-noise">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-none border-2 border-white flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-ecoNavy' : 'bg-ecoBaby'
                }`}>
                  {msg.role === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-ecoNavy" />}
                </div>
                
                <div className={`p-4 shadow-md ${
                  msg.role === 'user' 
                    ? 'bg-ecoNavy text-white border-l-4 border-white' 
                    : 'bg-white text-gray-900 border-r-4 border-ecoNavy'
                }`}>
                  <p className="text-sm leading-relaxed font-sans">{msg.text}</p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex w-full justify-start">
               <div className="flex flex-row items-start gap-3">
                 <div className="bg-ecoBaby w-8 h-8 border-2 border-white flex items-center justify-center">
                   <Bot className="h-4 w-4 text-ecoNavy" />
                 </div>
                 <div className="bg-white p-4 border-r-4 border-ecoNavy flex items-center shadow-lg">
                   <Loader2 className="h-4 w-4 text-ecoNavy animate-spin mr-3" />
                   <span className="text-ecoNavy font-display font-bold uppercase text-xs italic">
                     {isDepthMode ? "Calculating Deep Tactical Response..." : "Thinking fast..."}
                   </span>
                 </div>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-ecoNavy p-6 border-t-4 border-white">
          <form onSubmit={handleSend} className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isDepthMode ? "Ask a complex tactical question..." : "Quick question about the lab?"}
              className="flex-1 bg-black/40 border-2 border-white/20 text-white px-4 py-3 focus:outline-none focus:border-ecoBaby transition-all font-sans"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-white text-ecoNavy px-8 py-3 font-display font-bold text-xl uppercase hover:bg-ecoBaby transition-all shadow-[4px_4px_0px_0px_#97b3d2] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
          {isDepthMode && (
            <div className="mt-2 text-[10px] text-ecoYellow font-mono uppercase tracking-widest flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-ecoYellow rounded-full animate-pulse"></div>
              Engaging Pro Reasoning Model (32k Thinking Budget)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Fixed: Added missing default export
export default CoachChat;