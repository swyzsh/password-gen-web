// Pass gen
// Options:
// Length (adjustable MAX pass lenght option to gen)
// Min Lenght (the lower band for random)

import { useSettingsStore } from "@/lib/settingsStore";
import combinations from "@/lib/combinations.json";

export default function getPassword(): string {
  const { selLowercase, selUppercase, selNumbers, selSpecial, selLength } = useSettingsStore.getState();
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

  console.log("Selected Params: ", genParams);
  //const passLength = selLength;

  return "generatedpass";
}
