// Utility functions for audio operations
export function setAudioVolume(audioElement: HTMLAudioElement | null, volume: number) {
  if (audioElement) {
    audioElement.volume = Math.max(0, Math.min(1, volume));
  }
}

export function toggleAudioMute(audioElement: HTMLAudioElement | null) {
  if (audioElement) {
    audioElement.muted = !audioElement.muted;
    return audioElement.muted;
  }
  return false;
}

export async function playAudio(audioElement: HTMLAudioElement | null): Promise<boolean> {
  if (!audioElement) return false;
  
  try {
    await audioElement.play();
    return true;
  } catch (error) {
    console.error('Failed to play audio:', error);
    return false;
  }
}