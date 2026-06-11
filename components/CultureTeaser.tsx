import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CultureTeaser = () => {
  return (
    <div className="bg-[#171717] text-[#F5F0EB] antialiased font-sans overflow-x-hidden">
      
      {/* --- TEASER PART 1: THE MONOLITH NARRATIVE --- */}
      <section className="py-24 px-6 sm:px-12 max-w-[1400px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Bold Editorial Premise */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#BA1B21] block font-bold">
              THE HURLINGHAM LOOKBOOK // VOLUME 01
            </span>
            
            <h2 className="font-black uppercase tracking-tighter text-[8vw] sm:text-[6vw] lg:text-[4.5vw] leading-[0.85] text-white">
              FAST FOOD.<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px #F5F0EB' }}>SLOW MOMENTS.</span>
            </h2>
            
            <p className="font-serif text-xl sm:text-2xl text-gray-400 font-light max-w-xl leading-snug">
              Hurlingham moves fast. Traffic crawls, phones buzz, the grind never slows down. But inside a box of Blaze, time behaves a little differently. 
            </p>

            <div className="pt-4">
              <Link 
                href="/culture" 
                className="inline-flex items-center gap-4 bg-[#BA1B21] text-white font-mono font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-full hover:bg-[#FCDB4E] hover:text-[#171717] transition-all duration-300 shadow-xl"
              >
                OPEN CULTURAL ARCHIVE
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Block: Hero Image Canvas */}
          <div className="lg:col-span-5 relative w-full aspect-[3/4] border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden group">
            <img 
              src="/culture/IMG_8638.jpg" 
              alt="Hurlingham Street Scene" 
              className="w-full h-full object-cover filter contrast-115 brightness-90 transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute bottom-4 left-4 bg-[#171717]/90 border border-white/10 px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase">
              SHOT 01 // HIUNI STUDIOS
            </div>
          </div>

        </div>
      </section>

      {/* --- TEASER PART 2: THE MAGAZINE FILM STRIP --- */}
      <section className="bg-[#0F0F0F] py-20 border-t border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          
          {/* Section Divider Heading */}
          <div className="flex justify-between items-baseline mb-12 border-b border-white/5 pb-4">
            <span className="text-xs font-mono uppercase text-white/40 tracking-widest">VISUAL SELECTIONS</span>
            <span className="text-[10px] font-mono uppercase text-[#FCDB4E] tracking-wider">NAIROBI, LATE FREQUENCY</span>
          </div>

          {/* Clean Editorial Multi-Image Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Image 01 */}
            <div className="space-y-3 group cursor-pointer">
              <div className="aspect-[3/4] w-full overflow-hidden border border-white/5 bg-zinc-950 grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                <img src="/culture/IMG_8653.jpg" alt="Lookbook frame" className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase px-1">
                SELECTION 02
              </div>
            </div>

            {/* Image 02 */}
            <div className="space-y-3 group cursor-pointer md:pt-8">
              <div className="aspect-[3/4] w-full overflow-hidden border border-white/5 bg-zinc-950 grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                <img src="/culture/IMG_8762.jpg" alt="Lookbook frame" className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase px-1">
                SELECTION 05
              </div>
            </div>

            {/* Image 03 */}
            <div className="space-y-3 group cursor-pointer">
              <div className="aspect-[3/4] w-full overflow-hidden border border-white/5 bg-zinc-950 grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                <img src="/culture/IMG_9053.jpg" alt="Lookbook frame" className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase px-1">
                SELECTION 08
              </div>
            </div>

            {/* Image 04 */}
            <div className="space-y-3 group cursor-pointer md:pt-8">
              <div className="aspect-[3/4] w-full overflow-hidden border border-white/5 bg-zinc-950 grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                <img src="/culture/IMG_9063.jpg" alt="Lookbook frame" className="w-full h-full object-cover" />
              </div>
              <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase px-1">
                SELECTION 11
              </div>
            </div>

          </div>

          {/* Navigation Bait */}
          <div className="mt-16 text-center">
            <Link 
              href="/culture" 
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50 hover:text-[#FCDB4E] transition-colors group"
            >
              <span>EXPLORE ALL 19 SPREADS</span>
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CultureTeaser;