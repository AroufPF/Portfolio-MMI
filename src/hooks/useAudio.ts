// Hook pour déclencher les sons facilement
import { useAudioContext } from "../context/AudioContext";

export function useAudio() {
  const { play } = useAudioContext();
  return play;
}
