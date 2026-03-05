"use client";

import React from "react";
// On utilise le chemin relatif direct pour éviter les bugs de cache comme tout à l'heure
import { useAudio } from "../../context/AudioContext";

export const AudioToggle = () => {
  const { isAudioEnabled, toggleAudio, playHover } = useAudio();

  return (
    <button
      onClick={toggleAudio}
      onMouseEnter={playHover}
      className={`relative overflow-hidden flex items-center gap-2 px-3 py-1 border-[1px] text-[10px] md:text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
        isAudioEnabled
          ? "border-cyan-500 text-cyan-600 bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          : "border-slate-300 text-slate-500 hover:border-slate-400 hover:text-slate-700"
      }`}
    >
      {/* Petit indicateur visuel (point clignotant quand actif) */}
      <span
        className={`w-1.5 h-1.5 rounded-full ${isAudioEnabled ? "bg-cyan-500 animate-pulse" : "bg-slate-300"}`}
      ></span>

      <span>AUDIO : {isAudioEnabled ? "ON" : "OFF"}</span>
    </button>
  );
};
