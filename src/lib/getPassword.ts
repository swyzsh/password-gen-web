import { useSettingsStore } from "@/lib/settingsStore";
import combinations from "@/lib/combinations.json";
import getRand from "./getRand";

//---------- Randomizer ----------//
type randomizerType = {
  length: number;
  params: string[];
};

export function randomizePass({ length, params }: randomizerType): string {
  let arr: string[] = [];
  const randomNumber = getRand();

  for (let i = 0; i < length; i++) {
    const rand = randomNumber.next().value as number;
    const element = params[Math.floor(rand * params.length)];
    arr.push(element);
  }

  const result = arr.join("");
  return result;
}
//--------------------------------//

export default function getPassword(): string {
  const { selLowercase, selUppercase, selNumbers, selSpecial, selLength } = useSettingsStore.getState();
  const passLength = selLength;
  const genParams: string[] = [];

  const optionsMap: { [key: string]: boolean } = {
    lowercase: selLowercase,
    uppercase: selUppercase,
    numbers: selNumbers,
    special: selSpecial,
  };

  const combinationMap: { [key: string]: string[] } = {
    lowercase: combinations.lowercaseAtoZ,
    uppercase: combinations.capitalAtoZ,
    numbers: combinations.zeroToNine,
    special: combinations.specialChars,
  };

  Object.keys(optionsMap).forEach((key) => {
    if (optionsMap[key]) {
      genParams.push(...combinationMap[key]);
    }
  });

  if (genParams.length === 0) {
    alert("Please select at least one option from /settings to begin");
    return "Click generate to begin";
  }

  const password = randomizePass({ length: passLength, params: genParams });
  return password;
}
