import { create } from "zustand";

type SettingsStateType = {
  selLowercase: boolean;
  selUppercase: boolean;
  selNumbers: boolean;
  selSpecial: boolean;
  selLength: number;
  setSelLowercase: (value: boolean) => void;
  setSelUppercase: (value: boolean) => void;
  setSelNumbers: (value: boolean) => void;
  setSelSpecial: (value: boolean) => void;
  setSelLength: (value: number) => void;
};

export const useSettingsStore = create<SettingsStateType>((set) => ({
  // default values
  selLowercase: true,
  selUppercase: false,
  selNumbers: true,
  selSpecial: false,
  selLength: 12,
  // setters
  setSelLowercase: (value: boolean) => set({ selLowercase: value }),
  setSelUppercase: (value: boolean) => set({ selUppercase: value }),
  setSelNumbers: (value: boolean) => set({ selNumbers: value }),
  setSelSpecial: (value: boolean) => set({ selSpecial: value }),
  setSelLength: (value: number) => set({ selLength: value }),
}));
