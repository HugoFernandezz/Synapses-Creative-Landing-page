import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PRICING_TIERS, FAQ_ITEMS, PROCESS_STEPS } from '../constants';

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Eres "Synaptico", el asistente de ventas experto de la agencia Synapses Creative.
Tu tono es profesional, innovador, breve y persuasivo.
Tu objetivo es ayudar a los visitantes a entender nuestros servicios de Fotografía con IA y guiarlos hacia una compra.

INFORMACIÓN DE LA EMPRESA:
- Servicio: Transformamos fotos de producto amateur en fotos profesionales usando IA.
- Público: Pequeños negocios, marcas de ropa, joyas, cosmética.
- Ventaja: Más barato y rápido que contratar modelos y estudios.

PRECIOS:
${PRICING_TIERS.map(t => `- ${t.name}: ${t.price} (${t.description})`).join('\n')}

CÓMO FUNCIONA:
1. Suben fotos. 2. Generamos con IA. 3. Entrega en 48h.

FAQ CONOCIDA:
${FAQ_ITEMS.map(f => `P: ${f.question} R: ${f.answer}`).join('\n')}

SI TE PREGUNTAN POR UNA DEMO:
Diles que pueden ver la galería en la página, pero que estarías encantado de agendar una llamada con un humano.

SI NO SABES LA RESPUESTA:
Invítalos a contactar a hello@synapses.creative
`;

export const initializeChat = (): Chat | null => {
  if (!API_KEY) {
    console.warn("Gemini API Key missing");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    return "Lo siento, mi conexión neuronal está en mantenimiento (Falta API Key). Por favor contáctanos por email.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Disculpa, no pude procesar eso correctamente.";
  } catch (error) {
    console.error("Error sending message to Gemini", error);
    return "Hubo un error de conexión. Por favor intenta de nuevo.";
  }
};