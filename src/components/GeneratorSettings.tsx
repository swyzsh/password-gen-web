"use client";
import { useSettingsStore } from "@/lib/settingsStore";

export default function GeneratorSettings() {
  const {
    selLowercase,
    selUppercase,
    selNumbers,
    selSpecial,
    selLength,
    setSelUppercase,
    setSelLowercase,
    setSelNumbers,
    setSelSpecial,
    setSelLength,
  } = useSettingsStore();

  return (
    <div className="text-sm flex flex-col items-stretch justify-center gap-4 max-md:gap-2">
      <div className="grid grid-cols-4 grid-rows-1 gap-4 max-md:grid-cols-2 max-md:grid-rows-2 max-md:gap-2">
        <div
          className="flex flex-row items-center justify-center gap-4 px-4 py-2 transition-all
                     border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
        >
          <label htmlFor="lowercase">a-z</label>
          <input
            type="checkbox"
            id="lowercase"
            checked={selLowercase}
            onChange={() => setSelLowercase(!selLowercase)}
          />
        </div>
        <div
          className="flex flex-row items-center justify-center gap-4 px-4 py-2 transition-all
                     border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
        >
          <label htmlFor="uppercase">A-Z</label>
          <input
            type="checkbox"
            id="uppercase"
            checked={selUppercase}
            onChange={() => setSelUppercase(!selUppercase)}
          />
        </div>
        <div
          className="flex flex-row items-center justify-center gap-4 px-4 py-2 transition-all
                     border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
        >
          <label htmlFor="numbers">0-9</label>
          <input type="checkbox" id="numbers" checked={selNumbers} onChange={() => setSelNumbers(!selNumbers)} />
        </div>
        <div
          className="flex flex-row items-center justify-center gap-4 px-4 py-2 transition-all
                     border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
        >
          <label htmlFor="specialChars">!@#$%^&*</label>
          <input type="checkbox" id="specialChars" checked={selSpecial} onChange={() => setSelSpecial(!selSpecial)} />
        </div>
      </div>

      <div
        className="flex flex-row self-center max-md:self-stretch items-center justify-center gap-2 px-4 py-2 transition-all 
                      border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
      >
        <label htmlFor="length">Length:</label>
        <div className="flex flex-row items-center justify-center gap-4">
          <span>{selLength}</span>
          <input
            className=""
            type="range"
            min="5"
            max="128"
            value={selLength}
            id="length"
            onChange={(e) => setSelLength(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
