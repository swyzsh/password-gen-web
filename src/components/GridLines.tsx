"use client";
import { useEffect, useState } from "react";

export default function GridLines() {
  const [elementsByHeight, setElementsByHeight] = useState<number>(0);
  const [elementsByWidth, setElementsByWidth] = useState<number>(0);

  useEffect(() => {
    const calculateNumElementsByHeight = () => {
      const elementHeight = 1;
      const gap = 16;
      const totalHeightPerElement = elementHeight + gap;
      const numberOfElements = Math.floor(window.innerHeight / totalHeightPerElement);
      setElementsByHeight(numberOfElements);
    };

    const calculateNumElementsByWidth = () => {
      const elementWidth = 1;
      const gap = 16;
      const totalWidthPerElement = elementWidth + gap;
      const numberOfElements = Math.floor(window.innerWidth / totalWidthPerElement);
      setElementsByWidth(numberOfElements);
    };

    calculateNumElementsByHeight();
    calculateNumElementsByWidth();

    window.addEventListener("resize", calculateNumElementsByHeight);
    window.addEventListener("resize", calculateNumElementsByWidth);

    return () => {
      window.removeEventListener("resize", calculateNumElementsByHeight);
      window.addEventListener("resize", calculateNumElementsByWidth);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-50">
      <div className="absolute top-0 left-0 w-full h-full py-2 flex flex-col gap-4 z-0">
        {Array.from({ length: elementsByHeight }).map((_, i) => (
          <div key={i} className="w-full h-0 border-t border-stone-500/30"></div>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full px-2 flex flex-row gap-4 z-0">
        {Array.from({ length: elementsByWidth }).map((_, i) => (
          <div key={i} className="w-0 h-full border-l border-stone-500/30"></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(28,28,28,0.9)_0%,_rgba(9,9,11,0.9)_100%)] z-10" />
    </div>
  );
}
