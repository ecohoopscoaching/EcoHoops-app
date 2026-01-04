
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Basic response function using gemini-flash-lite-latest for speed
export const generateFastResponse = async (userMessage: string): Promise<string> => {
  // Correctly using process.env.API_KEY directly and using recommended model name
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-lite-latest',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    // Correctly accessing .text property
    return response.text || "I missed that pass. Try again.";
  } catch (error) {
    console.error("Fast Response Error:", error);
    return "The fast break failed. Try again later.";
  }
};

// Complex reasoning response using gemini-3-pro-preview with thinking budget
export const generateDeepResponse = async (userMessage: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 32768 },
      }
    });
    return response.text || "Deep analysis failed.";
  } catch (error) {
    console.error("Deep Response Error:", error);
    return "The deep set play was broken up.";
  }
};

// Image Generation using gemini-3-pro-image-preview
export const generateImage = async (prompt: string, size: "1K" | "2K" | "4K"): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: { parts: [{ text: prompt }] },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: size
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};

// Image Editing using gemini-2.5-flash-image
export const editImage = async (base64Image: string, mimeType: string, prompt: string): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { inlineData: { data: base64Image, mimeType: mimeType } },
          { text: prompt }
        ]
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Edit Error:", error);
    return null;
  }
};

// Video Analysis using gemini-3-pro-preview
export const analyzeVideoInfo = async (prompt: string, videoBase64?: string, mimeType?: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const parts: any[] = [{ text: prompt }];
    if (videoBase64 && mimeType) {
      parts.push({ inlineData: { data: videoBase64, mimeType: mimeType } });
    }
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: { parts: parts }
    });
    return response.text || "No analysis available.";
  } catch (error) {
    console.error("Video Analysis Error:", error);
    return "Film study was interrupted.";
  }
};