import React from 'react';

export const CubeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-indigo-400"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 16l-8 -4.5l-8 4.5" />
    <path d="M3 16v-5.5l8 -4.5l8 4.5v5.5" />
    <path d="M12 20.5v-9" />
    <path d="M21 16l-8 4.5" />
    <path d="M3 16l8 4.5" />
  </svg>
);

export const UploadIcon: React.FC = () => (
  <svg
    className="w-10 h-10 text-gray-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 16"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
    />
  </svg>
);

export const SparklesIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
        <path d="M8 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
        <path d="M12 10a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2" />
        <path d="M12 4v-2" />
        <path d="M12 22v-2" />
        <path d="M22 12h-2" />
        <path d="M4 12h-2" />
        <path d="M19.778 19.778l-1.414 1.414" />
        <path d="M5.636 5.636l-1.414 1.414" />
        <path d="M19.778 4.222l-1.414 -1.414" />
        <path d="M5.636 18.364l-1.414 -1.414" />
    </svg>
);

export const DollPlaceholderIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-16 w-16 text-gray-600"
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="7" r="3" />
        <path d="M12 10v4" />
        <path d="M10 12h4" />
        <path d="M10 16l-1 5" />
        <path d="M14 16l1 5" />
        <path d="M5 12h-2" />
        <path d="M12 5v-2" />
        <path d="M21 12h-2" />
    </svg>
);

export const DownloadIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <polyline points="7 11 12 16 17 11" />
        <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
);

export const PoseIcon: React.FC = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 text-gray-300" 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke="currentColor" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="5" r="1" />
        <path d="M12 12v-6" />
        <path d="M12 12l-3 -2" />
        <path d="M12 12l3 -2" />
        <path d="M12 12l-1 5h2" />
    </svg>
);
