"use client";
import { useRef } from "react";
import { useResponse } from "@/lib/useResponse";
import { useCopyText } from "@/lib/useCopyText";
import GeneratorSettings from "./GeneratorSettings";

export default function Generator() {
  const { response, handleGenerate } = useResponse();
  const outputRef = useRef<HTMLOutputElement | null>(null);
  const { handleCopy } = useCopyText(outputRef);

  return (
    <div className="flex flex-col items-stretch justify-center gap-4 max-md:gap-2">
      <div className="flex flex-row justify-center items-stretch gap-4 max-md:gap-2">
        <div
          className="w-full flex flex-row items-stretch justify-between gap-4 max-md:gap-2 rounded-lg border border-gray-900 bg-gray-950/20 
                        px-4 py-2 text-gray-300"
        >
          <output ref={outputRef} className="text-lg max-lg:text-base max-md:text-sm text-start break-all">
            {response}
          </output>
          <button
            onClick={handleCopy}
            className="px-2 py-1 text-sm max-lg:text-xs rounded-lg border border-gray-900 bg-gray-900/80 hover:border-gray-800 transition-all"
          >
            Copy
          </button>
        </div>
        <button
          onClick={handleGenerate}
          className="font-vt323Regular tracking-wide px-4 text-2xl max-lg:text-xl max-md:text-lg text-gray-300 inline-flex animate-shimmer items-center justify-center rounded-lg border border-gray-900 hover:border-gray-800
                     bg-[linear-gradient(110deg,#03071233,45%,#1e2631,55%,#03071233)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-0 "
        >
          Generate
        </button>
      </div>
      <GeneratorSettings />
    </div>
  );
}
