
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 mt-8">
      <div className="container mx-auto px-4 py-4 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dollify Me AI. All rights reserved.</p>
        <p className="text-sm">Powered by Google Gemini.</p>
      </div>
    </footer>
  );
};
