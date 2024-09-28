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
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-center justify-center gap-8">
        <label htmlFor="lowercase">a-z</label>
        <input type="checkbox" id="lowercase" checked={selLowercase} onChange={() => setSelLowercase(!selLowercase)} />
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <label htmlFor="uppercase">A-Z</label>
        <input type="checkbox" id="uppercase" checked={selUppercase} onChange={() => setSelUppercase(!selUppercase)} />
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <label htmlFor="numbers">0-9</label>
        <input type="checkbox" id="numbers" checked={selNumbers} onChange={() => setSelNumbers(!selNumbers)} />
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <label htmlFor="specialChars">!@#$%^&*</label>
        <input type="checkbox" id="specialChars" checked={selSpecial} onChange={() => setSelSpecial(!selSpecial)} />
      </div>
      <div className="flex flex-row items-center justify-center gap-8">
        <label htmlFor="length">Length</label>
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            type="range"
            min="5"
            max="128"
            value={selLength}
            id="length"
            onChange={(e) => setSelLength(Number(e.target.value))}
          />
          <span>{selLength}</span>
        </div>
      </div>
    </div>
  );
}
