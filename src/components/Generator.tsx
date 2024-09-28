"use client";
import { useRef } from "react";
import { useResponse } from "@/lib/useResponse";
import { useCopyText } from "@/lib/useCopyText";

export default function Generator() {
  const { response, handleGenerate } = useResponse();
  const outputRef = useRef<HTMLOutputElement | null>(null);
  const { handleCopy } = useCopyText(outputRef);

  return (
    <div className="flex flex-col items-stretch justify-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-row items-center justify-center gap-4 rounded-lg border border-zinc-300/20 bg-zinc-500/20 px-4 py-2 text-center text-2xl text-zinc-100">
          <output ref={outputRef} className="text-center break-all">
            {response}
          </output>
          <button
            onClick={handleCopy}
            className="rounded-lg border border-zinc-300/20 bg-zinc-500/20 px-2 py-1 text-xs"
          >
            Copy
          </button>
        </div>

        <button
          onClick={handleGenerate}
          className="self-center rounded-lg border border-zinc-300/20 bg-zinc-500/20 px-2 py-1 text-center text-base text-zinc-100"
        >
          Generate
        </button>
      </div>
    </div>
  );
}
