import { useState } from "react";
import getPassword from "./getPassword";

type useResponseType = { response: string; handleGenerate: () => void };

export function useResponse(): useResponseType {
  const [response, setResponse] = useState<string>("Click generate to begin");

  const handleGenerate = (): void => {
    setResponse(getPassword);
  };

  return { response, handleGenerate };
}
