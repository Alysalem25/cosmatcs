"use client";

import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center glass-dark"
    >
      <div className="text-2xl font-serif tracking-widest text-deep-black">
        LUMIÈRE
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-sans tracking-widest text-deep-black/80">
        {["SKINCARE", "FRAGRANCE", "STORY", "BOUTIQUE"].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-champagne transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
      
      <button className="text-sm font-sans tracking-widest hover:text-champagne transition-colors">
        CART (0)
      </button>
    </motion.nav>
  );
}
