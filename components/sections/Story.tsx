"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";

export function Story() {
  return (
    <div id="story" className="w-full relative z-10 pointer-events-none">
      {/* Spacer to allow scrolling while hero is pinned in page.tsx */}
      <div className="h-[50vh]" />
      
      {/* Scene 1 */}
      <section className="min-h-screen flex items-center px-8 md:px-24">
        <div className="max-w-xl text-left pointer-events-auto">
          <p className="text-blush tracking-widest font-sans text-sm mb-4">01. ORIGIN</p>
          <AnimatedText 
            text="Born from the rarest botanicals." 
            className="text-4xl md:text-6xl font-serif text-deep-black leading-tight mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-deep-black/70 font-sans text-lg font-light leading-relaxed"
          >
            We traveled to the edge of the world to source ingredients that redefine rejuvenation. 
            A blend of science and nature, distilled into pure luxury.
          </motion.p>
        </div>
      </section>

      {/* Scene 2 */}
      <section className="min-h-screen flex items-center justify-end px-8 md:px-24">
        <div className="max-w-xl text-right pointer-events-auto">
          <p className="text-blush tracking-widest font-sans text-sm mb-4">02. CRAFT</p>
          <AnimatedText 
            text="Crafted for the elite." 
            className="text-4xl md:text-6xl font-serif text-deep-black leading-tight mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-deep-black/70 font-sans text-lg font-light leading-relaxed"
          >
            Every drop is a testament to uncompromising quality. 
            Housed in hand-polished glass, designed to catch the light and your imagination.
          </motion.p>
        </div>
      </section>

      {/* Scene 3 */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-24">
        <div className="max-w-3xl text-center pointer-events-auto glass-dark p-12 rounded-2xl">
          <p className="text-blush tracking-widest font-sans text-sm mb-4">03. ESSENCE</p>
          <AnimatedText 
            text="Your aura, magnified." 
            className="text-4xl md:text-6xl font-serif text-deep-black leading-tight mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-deep-black/70 font-sans text-lg font-light leading-relaxed"
          >
            Experience the transformation. LUMIÈRE is not just a cosmetic, it is an awakening.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
