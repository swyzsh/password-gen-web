"use client";
import { useSettingsStore } from "@/lib/settingsStore";
import { Switch } from "@headlessui/react";

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
          <Switch
            id="lowercase"
            checked={selLowercase}
            onChange={() => setSelLowercase(!selLowercase)}
            className="group inline-flex h-4 w-8 items-center rounded-full bg-stone-700 transition data-[checked]:bg-slate-600"
          >
            <span className="size-3 translate-x-1 rounded-full bg-slate-300 transition group-data-[checked]:translate-x-4" />
          </Switch>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-4 px-4 py-2 transition-all
                     border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
        >
          <label htmlFor="uppercase">A-Z</label>
          <Switch
            id="uppercase"
            checked={selUppercase}
            onChange={() => setSelUppercase(!selUppercase)}
            className="group inline-flex h-4 w-8 items-center rounded-full bg-stone-700 transition data-[checked]:bg-slate-600"
          >
            <span className="size-3 translate-x-1 rounded-full bg-slate-300 transition group-data-[checked]:translate-x-4" />
          </Switch>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-4 px-4 py-2 transition-all
                     border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
        >
          <label htmlFor="numbers">0-9</label>
          <Switch
            id="numbers"
            checked={selNumbers}
            onChange={() => setSelNumbers(!selNumbers)}
            className="group inline-flex h-4 w-8 items-center rounded-full bg-stone-700 transition data-[checked]:bg-slate-600"
          >
            <span className="size-3 translate-x-1 rounded-full bg-slate-300 transition group-data-[checked]:translate-x-4" />
          </Switch>
        </div>
        <div
          className="flex flex-row items-center justify-center gap-4 px-4 py-2 transition-all
                     border rounded-lg border-gray-900 bg-gray-950/20 hover:border-gray-800"
        >
          <label htmlFor="specialChars">!@#$%^&*</label>
          <Switch
            id="specialChars"
            checked={selSpecial}
            onChange={() => setSelSpecial(!selSpecial)}
            className="group inline-flex h-4 w-8 items-center rounded-full bg-stone-700 transition data-[checked]:bg-slate-600"
          >
            <span className="size-3 translate-x-1 rounded-full bg-slate-300 transition group-data-[checked]:translate-x-4" />
          </Switch>
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
            type="range"
            min="5"
            max="128"
            value={selLength}
            id="length"
            onChange={(e) => setSelLength(Number(e.target.value))}
            style={{
              background: `linear-gradient(90deg, #475569 ${((selLength - 5) / 123) * 100}%, #44403c ${
                ((selLength - 5) / 123) * 100
              }%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
