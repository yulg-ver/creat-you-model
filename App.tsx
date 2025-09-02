
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { GeneratedImageDisplay } from './components/GeneratedImageDisplay';
import { Footer } from './components/Footer';
import { generateDollImage } from './services/geminiService';
import { SparklesIcon } from './components/Icons';

const loadingMessages = [
  "Initializing digital clay...",
  "Consulting with virtual doll artisans...",
  "Rendering lifelike textures...",
  "Setting up the Blender scene...",
  "Polishing the final product...",
  "Almost ready for the photoshoot...",
];

export default function App() {
  const [uploadedImage, setUploadedImage] = useState<{ base64: string; mimeType: string } | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string>(loadingMessages[0]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      interval = setInterval(() => {
        setLoadingMessage(prev => {
          const currentIndex = loadingMessages.indexOf(prev);
          const nextIndex = (currentIndex + 1) % loadingMessages.length;
          return loadingMessages[nextIndex];
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleImageUpload = useCallback((base64: string, mimeType: string) => {
    setUploadedImage({ base64, mimeType });
    setGeneratedImage(null);
    setError(null);
  }, []);

  const handleGenerateClick = useCallback(async () => {
    if (!uploadedImage) {
      setError("Please upload an image first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    setLoadingMessage(loadingMessages[0]);

    try {
      // The base64 string from FileReader includes the data URL prefix, which we need to remove.
      const base64Data = uploadedImage.base64.split(',')[1];
      const result = await generateDollImage(base64Data, uploadedImage.mimeType);
      setGeneratedImage(result);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An unknown error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [uploadedImage]);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col text-gray-200 font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="w-full flex flex-col gap-6 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white">1. Upload Your Photo</h2>
              <p className="text-gray-400 mt-1">Provide a clear portrait for the best results.</p>
            </div>
            <ImageUploader onImageUpload={handleImageUpload} />
            <button
              onClick={handleGenerateClick}
              disabled={!uploadedImage || isLoading}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <SparklesIcon />
                  Dollify Me
                </>
              )}
            </button>
          </div>
          <div className="w-full flex flex-col gap-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
             <div className="text-center">
              <h2 className="text-2xl font-bold text-white">2. Your AI Creation</h2>
              <p className="text-gray-400 mt-1">Your 1/6 scale doll will appear here.</p>
            </div>
            <GeneratedImageDisplay
              image={generatedImage}
              isLoading={isLoading}
              error={error}
              loadingMessage={loadingMessage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
