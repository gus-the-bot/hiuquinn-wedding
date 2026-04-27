import { useEffect, useRef, useState } from "react";

type Props = { src: string; title?: string };

export default function AudioToggle({ src, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.loop = true;
    el.volume = 0.7;
  }, []);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      try {
        await el.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="none" />
      <button
        type="button"
        aria-label={playing ? `Pause ${title ?? "music"}` : `Play ${title ?? "music"}`}
        title={title}
        onClick={toggle}
        className={`audio-toggle ${playing ? "playing" : ""}`}
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          aria-hidden="true"
        >
          {playing ? (
            <path d="M9 5c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1zm6 0c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1z" />
          ) : (
            <path d="M9 6.3c0-.9.99-1.44 1.73-.95l8.57 5.7a1.14 1.14 0 010 1.9l-8.57 5.7A1.14 1.14 0 019 17.7V6.3z" />
          )}
        </svg>
      </button>
    </>
  );
}
