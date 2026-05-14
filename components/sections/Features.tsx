"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "24H Hydration",
    description: "Deep moisture locking technology that keeps your skin glowing all day.",
    icon: "💧"
  },
  {
    title: "Vegan Formula",
    description: "Cruelty-free, purely botanical ingredients sourced sustainably.",
    icon: "🌿"
  },
  {
    title: "Dermatologist Tested",
    description: "Safe for all skin types, clinically proven to enhance elasticity.",
    icon: "✨"
  }
];

export function Features() {
  return (
    <section id="skincare" className="relative z-20 py-32 px-8 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-deep-black mb-4">The Science of Beauty</h2>
          <div className="w-24 h-[1px] bg-champagne mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-2xl text-center group transition-all duration-300 hover:border-champagne/50 hover:bg-white/10"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-champagne mb-4">{feature.title}</h3>
              <p className="text-deep-black/70 font-sans font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
