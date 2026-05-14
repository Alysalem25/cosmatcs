"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";

export function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col items-center justify-center pointer-events-none z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-champagne/10 via-transparent to-deep-black/80" />
      
      <div className="flex flex-col items-center justify-center text-center px-4 pt-32">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-blush tracking-[0.3em] text-sm md:text-base font-sans uppercase mb-6"
        >
          The New Standard of Beauty
        </motion.p>
        
        <AnimatedText 
          text="LUMIÈRE ÉTERNELLE" 
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-deep-black font-bold tracking-wider mb-8 drop-shadow-2xl text-gradient"
          delay={0.8}
        />
        
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pointer-events-auto px-8 py-4 glass text-deep-black font-sans tracking-widest text-sm hover:bg-white/10 transition-colors border-champagne/30"
        >
          DISCOVER THE ESSENCE
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-sans tracking-widest text-deep-black/50 uppercase">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-pearl/50 to-transparent" />
      </motion.div>
    </section>
  );
}
