
import React from 'react';
import { CubeIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
            <CubeIcon />
            <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Dollify Me <span className="text-indigo-400">AI</span>
            </h1>
        </div>
      </div>
    </header>
  );
};
