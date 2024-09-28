import Generator from "@/components/Generator";
import Navigation from "@/components/Navigation";
import { Boxes } from "@/components/background-boxes";

export default function Home() {
  return (
    <div className="m-0 p-6 h-screen overflow-x-hidden overflow-y-auto flex flex-col justify-start">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(28,28,28,0.9)_0%,_rgba(9,9,11,0.9)_100%)] pointer-events-none z-10" />

      <div
        className="z-20 relative mt-auto mb-4 ml-auto mr-auto h-1/3 w-8/12 max-2xl:w-9/12 max-xl:w-10/12 max-lg:w-11/12 max-md:w-full overflow-hidden
                      border border-stone-700/30 rounded-lg flex flex-col justify-center items-center"
      >
        <Boxes />
        <h1 className="z-30 p-6 text-[64px] max-md:text-[48px] text-center font-iosevkaMedium">Pass Gen</h1>
      </div>

      <div
        className="mt-4 mb-auto ml-auto mr-auto w-8/12 max-2xl:w-9/12 max-xl:w-10/12 max-lg:w-11/12 max-md:w-full 
                   p-6 border border-zinc-300/20 rounded-lg backdrop-blur-md z-50"
      >
        <Generator />
        <Navigation />
      </div>
    </div>
  );
}
