"use client";
import { useState, useRef } from "react";

const generate = (): string => {
  return "generatedpass";
};

export default function Generator() {
  const [response, setResponse] = useState<string>("Click generate to begin");
  const outputRef = useRef<HTMLOutputElement | null>(null);

  const handleGenerate = (): void => {
    setResponse(generate);
  };

  const handleCopy = async () => {
    const element = outputRef.current;
    if (!element) {
      console.error("Output element not present");
      return;
    }

    const textToCopy = element.innerText;
    try {
      // Try the modern Clipboard API first (if supported)
      navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Password copied!");
    } catch (err) {
      console.error("Error copying text: ", err);
      // Fallback: Legacy
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Password copied!");
    }
  };

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
