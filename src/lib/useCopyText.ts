import { MutableRefObject } from "react";
type elementRefType = MutableRefObject<HTMLElement | null>;

export function useCopyText(elementRef: elementRefType) {
  const handleCopy = async () => {
    const element = elementRef.current;
    if (!element) {
      console.error("Copy element not present");
      return;
    }

    const textToCopy = element.innerText;
    try {
      // Try the modern Clipboard API first (if supported)
      navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      //alert("Password copied!");
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
      //alert("Password copied!");
    }
  };

  return { handleCopy };
}
