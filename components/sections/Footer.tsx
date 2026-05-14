"use client";

export function Footer() {
  return (
    <footer className="relative z-20 bg-white pt-32 pb-12 px-8 overflow-hidden">
      {/* Background blurred monogram */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden">
        <span className="text-[40vw] font-serif leading-none">L</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif text-deep-black tracking-widest mb-6">LUMIÈRE</h2>
            <p className="text-deep-black/50 font-sans font-light max-w-sm mb-8">
              The intersection of botanical purity and clinical efficacy. Experience the luxury of transformation.
            </p>
            <div className="flex gap-6">
              {['Instagram', 'TikTok', 'Pinterest'].map((social) => (
                <a key={social} href="#" className="text-sm font-sans tracking-wider text-deep-black hover:text-champagne transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-sans tracking-widest text-champagne mb-6 uppercase">Explore</h3>
            <ul className="space-y-4">
              {['Skincare', 'Fragrance', 'Gifts', 'Boutiques'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-deep-black/70 hover:text-deep-black transition-colors font-sans font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-sans tracking-widest text-champagne mb-6 uppercase">Service</h3>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping & Returns', 'FAQ', 'Track Order'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-deep-black/70 hover:text-deep-black transition-colors font-sans font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-deep-black/40 font-sans text-xs mb-4 md:mb-0">
            © {new Date().getFullYear()} Lumière Cosmetics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-deep-black/40 hover:text-deep-black/80 font-sans text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-deep-black/40 hover:text-deep-black/80 font-sans text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
