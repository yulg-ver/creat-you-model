
import React, { useState, useCallback, DragEvent } from 'react';
import { UploadIcon } from './Icons';

interface ImageUploaderProps {
  onImageUpload: (base64: string, mimeType: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleFile = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
        onImageUpload(result, file.type);
      };
      reader.readAsDataURL(file);
    }
  }, [onImageUpload]);

  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleFile(event.target.files[0]);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      handleFile(event.dataTransfer.files[0]);
    }
  }, [handleFile]);

  return (
    <div className="w-full">
      <label
        htmlFor="image-upload"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center w-full aspect-square rounded-lg border-2 border-dashed border-gray-600 cursor-pointer transition-colors duration-300 ${
          isDragging ? 'border-indigo-500 bg-gray-700' : 'hover:border-gray-500 hover:bg-gray-800'
        }`}
      >
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-lg" />
        ) : (
          <div className="text-center text-gray-400 p-4">
            <UploadIcon />
            <p className="mt-2 font-semibold">Click to upload or drag & drop</p>
            <p className="text-xs">PNG, JPG, WEBP, etc.</p>
          </div>
        )}
        <input
          id="image-upload"
          name="image-upload"
          type="file"
          className="sr-only"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};
