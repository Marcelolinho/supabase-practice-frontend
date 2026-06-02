"use client";

import { useRef } from "react";
import { Upload } from "lucide-react";

type ImageDropzoneProps = {
  file: File | null;
  onFileChange: (file: File | null) => void;
};

export default function ImageDropzone({ file, onFileChange }: ImageDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const openPicker = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    onFileChange(selected);
  };

  return (
    <button
      type="button"
      onClick={openPicker}
      className="flex min-h-[120px] flex-1 flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-neutral-300 bg-white/50 px-4 py-6 text-center transition hover:border-green-400 hover:bg-white/70 focus-visible:border-green-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/60"
    >
      <Upload className="h-6 w-6 text-neutral-500" aria-hidden="true" />
      <span className="text-sm text-neutral-600">
        {file ? (
          <span className="font-medium text-neutral-900">{file.name}</span>
        ) : (
          "Click to select an image"
        )}
      </span>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </button>
  );
}
