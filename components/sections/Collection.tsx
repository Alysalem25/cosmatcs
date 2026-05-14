"use client";

import { motion } from "framer-motion";

const products = [
  { name: "Radiance Serum", price: "$120", gradient: "from-blush to-champagne" },
  { name: "Night Elixir", price: "$150", gradient: "from-purple-900 to-rose-gold" },
  { name: "Aura Essence", price: "$95", gradient: "from-pearl to-nude" },
  { name: "Velvet Cream", price: "$110", gradient: "from-champagne to-rose-gold" },
  { name: "Luminous Oil", price: "$85", gradient: "from-yellow-900 to-blush" },
  { name: "Cellular Eye Flow", price: "$130", gradient: "from-blue-900 to-purple-900" }
];

export function Collection() {
  return (
    <section id="boutique" className="relative z-20 py-32 px-8 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-deep-black mb-4">The Collection</h2>
            <div className="w-24 h-[1px] bg-blush" />
          </div>
          <button className="hidden md:block text-sm font-sans tracking-widest text-deep-black hover:text-champagne transition-colors pb-2 border-b border-transparent hover:border-champagne">
            VIEW ALL
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`w-full aspect-[4/5] rounded-xl mb-6 overflow-hidden relative bg-gradient-to-br ${product.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}>
                {/* Simulated product glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Overlay for Add to Cart */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-deep-black font-sans tracking-widest text-sm border border-deep-black/30 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    QUICK ADD
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="text-lg font-serif text-deep-black group-hover:text-champagne transition-colors">{product.name}</h3>
                <p className="text-deep-black/60 font-sans">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="text-sm font-sans tracking-widest text-deep-black hover:text-champagne transition-colors border border-deep-black/30 px-8 py-4 rounded-full">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
