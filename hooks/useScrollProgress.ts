"use client";

import { useEffect, useRef } from "react";

export function useScrollProgress() {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      scrollProgress.current = currentScroll / totalScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollProgress;
}
