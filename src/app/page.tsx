import Generator from "@/components/Generator";
import FlickeringGrid from "@/components/FlickeringGrid";

export default function Home() {
  return (
    <div className="m-0 p-8 max-md:p-4 h-screen overflow-x-hidden overflow-y-auto flex flex-col justify-start">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(30,41,59,0.5)_0%,_rgba(10,10,10,1.0)_100%)] pointer-events-none z-10" />
      <div
        className="z-20 relative mt-auto mb-4 max-md:mb-2 ml-auto mr-auto h-52 max-md:h-56 w-8/12 max-2xl:w-9/12 max-xl:w-10/12 max-lg:w-11/12 max-md:w-full overflow-hidden
                      border border-gray-900 rounded-lg flex flex-col justify-center items-center backdrop-blur-md"
      >
        <FlickeringGrid
          className="z-0 absolute inset-0 size-full"
          squareSize={2}
          gridGap={6}
          color="#6b7280"
          maxOpacity={0.5}
          flickerChance={0.1}
          width={1920}
          height={1080}
        />
        <h1 className="z-30 pointer-events-none text-[64px] max-md:text-[48px] text-center font-helveticaMedium">
          Pass Gen
        </h1>
      </div>

      <div
        className="mt-4 max-md:mt-2 mb-auto ml-auto mr-auto w-8/12 max-2xl:w-9/12 max-xl:w-10/12 max-lg:w-11/12 max-md:w-full 
                   p-8 max-md:p-4 border border-gray-900 rounded-lg backdrop-blur-md z-50"
      >
        <Generator />
      </div>
    </div>
  );
}
