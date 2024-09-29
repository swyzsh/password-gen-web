"use client";

export default function ShillFooter() {
  function openGithub() {
    window.open("https://github.com/swyzsh", "_blank");
  }

  return (
    <div className="z-50 fixed bottom-0 left-0 w-screen p-3 flex flex-row justify-center items-center gap-2 backdrop-blur-sm">
      <span className="text-xs">Made with love, by Swyzsh:</span>
      <button
        className="px-2 py-1 text-xs text-center bg-gray-950/20 border border-gray-500 rounded-md"
        onClick={openGithub}
      >
        Github
      </button>
    </div>
  );
}
