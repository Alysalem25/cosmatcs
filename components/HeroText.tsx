"use client";

import { motion } from "framer-motion";

type Props = {
  scrollProgress: React.MutableRefObject<number>;
};

export default function HeroText({ scrollProgress }: Props) {
  const progress = scrollProgress.current;
  
  return (
    <div className="text-center pointer-events-none select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: progress < 0.3 ? 1 - progress * 2 : 0,
          y: progress < 0.3 ? 0 : -30 
        }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#8b3a4a] tracking-[0.2em] mb-4 font-playfair">
          LUXE BLOOM
        </h1>
        <p className="text-sm md:text-base text-[#a85a6a] tracking-[0.4em] uppercase font-cormorant">
          Eau de Parfum
        </p>
      </motion.div>
      
      <motion.p
        className="mt-8 text-xs text-[#c97a8a] tracking-widest font-cormorant"
        initial={{ opacity: 0 }}
        animate={{ opacity: progress < 0.2 ? 0.7 : 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Scroll to unveil
      </motion.p>
    </div>
  );
}