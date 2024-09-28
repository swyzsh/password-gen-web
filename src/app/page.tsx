import Generator from "@/components/Generator";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="m-0 p-6 h-screen overflow-x-hidden overflow-y-auto flex flex-col justify-start">
      <h1 className="p-6 text-3xl text-center mt-auto mb-6">Pass Gen</h1>

      <div
        className="mt-6 mb-auto ml-auto mr-auto w-8/12 max-2xl:w-9/12 max-xl:w-10/12 max-lg:w-11/12 max-md:w-full 
                   p-6 border border-zinc-300/20 rounded-2xl "
      >
        <Generator />
        <Navigation />
      </div>
    </div>
  );
}
