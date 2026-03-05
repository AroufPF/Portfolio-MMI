"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Howl } from "howler";

type AudioContextType = {
  isAudioEnabled: boolean;
  toggleAudio: () => void;
  playHover: () => void;
  playClick: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(false);
  const [sounds, setSounds] = useState<{
    hover: Howl | null;
    click: Howl | null;
  }>({ hover: null, click: null });

  useEffect(() => {
    const hoverSound = new Howl({
      src: ["/sounds/ui-hover-tic.mp3"],
      volume: 0.1,
    });
    const clickSound = new Howl({
      src: ["/sounds/ui-click-mech.mp3"],
      volume: 0.3,
    });
    // Utiliser un micro-task pour éviter le setState synchrone
    Promise.resolve().then(() =>
      setSounds({ hover: hoverSound, click: clickSound }),
    );
    return () => {
      hoverSound.unload();
      clickSound.unload();
    };
  }, []);

  const toggleAudio = () => {
    setIsAudioEnabled((prev: boolean) => !prev);
    if (!isAudioEnabled && sounds.click) {
      sounds.click.play();
    }
  };
  const playHover = () => {
    if (isAudioEnabled && sounds.hover) sounds.hover.play();
  };
  const playClick = () => {
    if (isAudioEnabled && sounds.click) sounds.click.play();
  };

  return (
    <AudioContext.Provider
      value={{ isAudioEnabled, toggleAudio, playHover, playClick }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error(
      "useAudio doit être utilisé à l'intérieur d'un AudioProvider",
    );
  }
  return context;
};
