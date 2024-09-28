import { useState } from "react";
import getPassword from "./getPassword";

type TypeResponse = { response: string; handleGenerate: () => void };

export function useResponse(): TypeResponse {
  const [response, setResponse] = useState<string>("Click generate to begin");

  const handleGenerate = (): void => {
    setResponse(getPassword);
  };

  return { response, handleGenerate };
}
