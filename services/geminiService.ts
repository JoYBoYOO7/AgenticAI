import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Ensure API_KEY is set in environment

export const generateChatResponse = async (
  userMessage: string,
  contextData: string
): Promise<string> => {
  try {
    if (!apiKey) {
      return "I'm sorry, but I can't connect to the AI service right now (Missing API Key). However, I can tell you that this system uses autonomous agents to resolve financial discrepancies.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const systemInstruction = `
      You are the AI Assistant for "Agentic AI for Intelligent Business Process Automation".
      Your goal is to explain how the system works to business users.
      
      Key Concepts:
      1. Process Mining: We ingest ERP logs to visualize the "as-is" workflow.
      2. Predictive Analytics: We score transactions for risk and forecast bottlenecks.
      3. Agentic AI: You are an autonomous agent that fixes issues (e.g., missing POs, price mismatches) via RPA/APIs.
      
      Context Data from the current dashboard state:
      ${contextData}
      
      Keep answers concise, professional, and focused on the value of automation.
      If asked about specific transaction IDs referenced in the context, analyze them.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently experiencing high traffic. Please try again later.";
  }
};
