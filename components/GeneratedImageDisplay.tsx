import React from 'react';
import { DollPlaceholderIcon, DownloadIcon } from './Icons';

interface GeneratedImageDisplayProps {
  image: string | null;
  isLoading: boolean;
  error: string | null;
  loadingMessage: string;
}

const LoadingSpinner: React.FC = () => (
  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-400"></div>
);

export const GeneratedImageDisplay: React.FC<GeneratedImageDisplayProps> = ({
  image,
  isLoading,
  error,
  loadingMessage
}) => {
  const handleDownload = () => {
    if (!image) return;
    const link = document.createElement('a');
    link.href = image;
    const mimeType = image.substring(image.indexOf(':') + 1, image.indexOf(';'));
    const extension = mimeType.split('/')[1] || 'png';
    link.download = `dollify-me-creation.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full aspect-square bg-gray-900 rounded-lg flex items-center justify-center p-4 border border-gray-700 relative overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-20 text-center transition-opacity duration-300">
          <LoadingSpinner />
          <p className="text-lg font-semibold text-indigo-300">{loadingMessage}</p>
        </div>
      )}
      {error && !isLoading && (
        <div className="text-center text-red-400">
          <p className="font-bold">Generation Failed</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}
      {!image && !isLoading && !error && (
        <div className="text-center text-gray-500">
          <DollPlaceholderIcon />
          <p className="mt-2 font-medium">Your creation appears here</p>
        </div>
      )}
      {image && !isLoading && (
         <>
            <img src={image} alt="Generated doll" className="w-full h-full object-contain rounded-lg animate-fade-in" />
            <button
                onClick={handleDownload}
                aria-label="Download generated image"
                className="absolute top-3 right-3 z-10 flex items-center bg-gray-900/70 text-white font-semibold py-2 px-3 rounded-lg backdrop-blur-sm border border-gray-600 hover:bg-indigo-600/80 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
            >
                <DownloadIcon />
                Download
            </button>
         </>
      )}
       <style>{`
          @keyframes fade-in {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
              animation: fade-in 0.5s ease-in-out;
          }
      `}</style>
    </div>
  );
};