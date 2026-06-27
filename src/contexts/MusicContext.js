import { createContext, useContext } from "react";

export const MusicContext = createContext();

export const useMusic = () => {
  const contextValue = useContext(MusicContext);
  if (!contextValue) {
    throw new Error("useMusic must be used inside of MusicProvider");
  }
  return contextValue;
};
