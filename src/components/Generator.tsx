"use client";
import { useRef } from "react";
import { useResponse } from "@/lib/useResponse";
import { useCopyText } from "@/lib/useCopyText";

export default function Generator() {
  const { response, handleGenerate } = useResponse();
  const outputRef = useRef<HTMLOutputElement | null>(null);
  const { handleCopy } = useCopyText(outputRef);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div
        className="flex flex-row justify-center items-center gap-4 
                    px-4 py-2 text-2xl text-center text-zinc-100 bg-zinc-500/20 border rounded-lg border-zinc-300/20"
      >
        <output ref={outputRef}>{response}</output>
        <button
          onClick={handleCopy}
          className="px-2 py-1 text-xs bg-zinc-500/20 border rounded-lg border-zinc-300/20"
        >
          Copy
        </button>
      </div>
      <button
        onClick={handleGenerate}
        className="px-2 py-1 text-base text-center text-zinc-100 bg-zinc-500/20 border rounded-lg border-zinc-300/20"
      >
        Generate
      </button>
    </div>
  );
}
