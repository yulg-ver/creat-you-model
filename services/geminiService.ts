import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateDollImage(base64ImageData: string, mimeType: string, pose: string): Promise<string> {
  const model = 'gemini-2.5-flash-image-preview';

  const prompt = `Transform the person in this image into a highly realistic, 1/6 scale commercial doll.
The doll should be in the following pose: ${pose}.
Place the doll in a real-world environment, like a modern, well-lit studio or a stylish room.
The doll should have lifelike textures for its skin, hair, and clothing.
Around the doll, add a sleek, technological-style robotic arm, as if it's involved in the 3D printing or final assembly of the doll.
In the background, clearly visible behind the doll, there should be a computer monitor displaying the user interface of Blender 3D modeling software.
The Blender screen should show a 3D wireframe or partially textured model of the very doll being generated, as if it's in the process of being created.
The overall style should be that of a high-end product photograph for a collectible doll, blending artistry with technology.`;
  
  try {
    const response = await ai.models.generateContent({
      model,
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    if (response.candidates && response.candidates.length > 0) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64ImageBytes = part.inlineData.data;
          const imageMimeType = part.inlineData.mimeType;
          return `data:${imageMimeType};base64,${base64ImageBytes}`;
        }
      }
    }
    
    throw new Error("The AI did not return an image. Please try a different photo or prompt.");

  } catch (error) {
    console.error("Error generating image with Gemini API:", error);
    if (error instanceof Error) {
        // More specific error handling could be added here based on API error codes
        if (error.message.includes('API key not valid')) {
            throw new Error('The configured API key is invalid. Please check your configuration.');
        }
    }
    throw new Error("Failed to generate doll image. The AI may be experiencing issues or the request was blocked.");
  }
}
