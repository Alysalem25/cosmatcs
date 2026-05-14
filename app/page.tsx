"use client";

import { useEffect, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import Scene from "@/components/canvas/Scene";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Features } from "@/components/sections/Features";
import { Collection } from "@/components/sections/Collection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const scrollProgress = useScrollProgress();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pin the 3D scene while scrolling through the Story section
    if (sceneContainerRef.current) {
      const pinTrigger = ScrollTrigger.create({
        trigger: sceneContainerRef.current,
        start: "top top",
        end: "+=300%", // Pin for 3x viewport height (matches Story section height)
        pin: true,
        pinSpacing: false,
        id: "scene-pin",
      });

      return () => {
        pinTrigger.kill();
      };
    }
  }, []);

  return (
    <main ref={containerRef} className="relative w-full">
      {/* 3D Canvas Background Container - Pinned via GSAP */}
      <div 
        ref={sceneContainerRef}
        className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none z-0"
      >
        <Scene scrollProgress={scrollProgress} />
      </div>

      {/* Sections overlaying the 3D scene */}
      <Hero />
      <Story />
      
      {/* Sections below the 3D scene */}
      <div className="relative z-20 bg-deep-black mt-[50vh]">
        <Features />
        <Collection />
        <Footer />
      </div>
    </main>
  );
}
