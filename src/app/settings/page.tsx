import GeneratorSettings from "@/components/GeneratorSettings";
import Navigation from "@/components/Navigation";

export default function Settings() {
  return (
    <div className="m-8 h-[calc(100vh-4rem)] overflow-x-hidden overflow-y-auto border border-pink-600">
      <div>Settings</div>
      <GeneratorSettings />
      <Navigation />
    </div>
  );
}
