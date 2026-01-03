
import { GoogleGenAI } from "@google/genai";
import { ABU_CONTEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askAbuAI = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: `You are an AI representative for Abu Metha. Use the following context to answer questions: ${ABU_CONTEXT}. 
        Keep your tone professional, visionary, and inspiring, but also modern and accessible for a Gen-Z audience. 
        If a question is not about Abu Metha's career or vision, politely steer back to his work. 
        Always mention his commitment to Nagaland and its youth.`,
        temperature: 0.7,
        topP: 0.95,
        tools: [{ googleSearch: {} }]
      },
    });

    return {
      text: response.text || "I'm sorry, I couldn't process that. Please try asking again about Abu Metha's vision.",
      grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks || []
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Connection lost to Abu's digital consciousness. Please try again later!",
      grounding: []
    };
  }
};
