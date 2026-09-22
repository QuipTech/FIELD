"use client";

import { useEffect, useState } from "react";

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}

const FADE_DURATION = 500;

export const TypewriterHeading = ({
  text,
  className,
  speed = 35,
  startDelay = FADE_DURATION,
}: TypewriterHeadingProps) => {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(0);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCharCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <h1 className={className} aria-label={text}>
      <span className="inline-block animate-fadeIn opacity-0" aria-hidden="true">
        {text.slice(0, charCount)}
        <span className="inline-block w-[2px] translate-y-[0.08em] animate-blink bg-current align-middle">
          &nbsp;
        </span>
      </span>
    </h1>
  );
};
