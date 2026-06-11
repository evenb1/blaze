import React from 'react';
import Link from 'next/link';
import { MessageSquare, ArrowLeft, Disc, Eye, Layers } from 'lucide-react';

const CulturePage = () => {
  return (
    <div className="bg-[#171717] text-[#F5F0EB] min-h-screen antialiased selection:bg-[#BA1B21] selection:text-white pb-0 font-sans overflow-x-hidden">
      
      {/* --- EDITORIAL HEADER: DIRECTIONAL BACK-TO-HOME --- */}
      <header className="w-full border-b border-white/10 px-6 py-5 flex justify-between items-center z-50 relative bg-[#171717]">
        <Link 
          href="/" 
          className="font-black tracking-tighter uppercase text-xl text-[#F5F0EB] inline-flex items-center gap-2 group"
        >
          <span className="text-[#BA1B21] group-hover:-translate-x-1 transition-transform inline-block">←</span>
          BLAZE<span className="text-[#BA1B21]">.</span>
        </Link>
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 hidden sm:inline">
          VOL. 01 // HURLINGHAM CHRONICLES // ARCHIVE SOURCE
        </span>
        <a 
          href="https://wa.me/yourphone" 
          className="bg-[#F5F0EB] text-[#171717] px-5 py-2 rounded-full uppercase text-xs tracking-wider font-mono font-bold hover:bg-[#BA1B21] hover:text-white transition-colors"
        >
          ORDER DISPATCH
        </a>
      </header>

      {/* --- HERO SECTION: DARK ASYMMETRY --- */}
      <section className="relative w-full pt-12 lg:pt-20 px-6 border-b border-white/10 pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-7 relative z-10">
            <span className="text-[#BA1B21] font-mono text-xs uppercase tracking-[0.4em] block mb-4">
              [ CULTURAL LOOKBOOK // VOL. 01 ]
            </span>
            <h1 className="font-sans font-black uppercase tracking-tighter text-[13vw] sm:text-[11vw] lg:text-[9vw] leading-[0.8] text-white">
              FAST FOOD<span className="text-[#BA1B21]">.</span><br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #F5F0EB' }}>SLOW MOMENTS</span>
            </h1>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
            <img 
              src="/culture/IMG_8638.jpg" 
              alt="Hurlingham Street Culture" 
              className="w-full h-full object-cover filter contrast-115 brightness-95 object-center"
            />
            <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest font-mono uppercase bg-[#BA1B21] px-3 py-1.5">
              SCENE STUDY // FRONT PIECE
            </div>
          </div>

        </div>
      </section>

      {/* --- EDITORIAL INTRO COLUMN --- */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10">
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-4">
          <span className="text-[#BA1B21] font-mono text-xs uppercase tracking-widest block">// DOCUMENT ARCHIVE</span>
          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-gray-200 leading-tight font-light">
            Blaze isn’t just fuel for busy hours. It’s the background noise of deep late-night talk in Hurlingham.
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-6 text-gray-400 text-lg space-y-6 font-normal leading-relaxed">
          <p>
            <span className="text-6xl font-black text-[#BA1B21] float-left mr-3 mt-1 leading-none uppercase">H</span>
            urlingham moves fast. Traffic crawls, phones buzz, the grind never slows down. But inside the parameters of a box, time behaves differently. We created Blaze to be modern fast food, but the ecosystem that grew around it is pure community, raw street energy, and collective breath.
          </p>
          <p>
            This series, created in collaboration with the visual poets at <strong className="text-white">Hiuni Studios</strong>, strips away the commercial polish. It captures the smoke, the oil, the laughter, the heavy Nairobi air, and the beautiful friction between fast food and slow, unforgettable moments.
          </p>
        </div>
      </section>

      {/* --- DUAL ASYMMETRIC OVERLAY (8954 TALL EXTENSION & 8969) --- */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-3">
            {/* Added severe height configuration via aspect-4/5 to prevent cutoff */}
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_8954.jpg" alt="Atmospheric street capture" className="w-full h-full object-cover filter contrast-110 brightness-90" />
            </div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">// EXPOSURE LAYER // THE RUNWAY FRAME</span>
          </div>
          <div className="lg:col-span-5 lg:mt-24 space-y-4">
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_8969.jpg" alt="Street environment study" className="w-full h-full object-cover filter brightness-95" />
            </div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">// EXPOSURE LAYER // TRANSIT SEGMENT</span>
          </div>
        </div>
      </section>

      {/* --- SPREAD BLOCK 1: TRIPTYCH STAGGER WITH ENHANCED IMG_8881 VIEWPORT --- */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="flex flex-col mb-12">
          <span className="text-xs font-mono uppercase text-[#BA1B21] tracking-widest">// CHRONICLE STREAM</span>
          <h3 className="text-3xl font-black uppercase tracking-tighter">THE FIELD BLENDS</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-3 space-y-2">
            <div className="aspect-[3/4] overflow-hidden border border-white/5 relative group bg-zinc-900">
              <img src="/culture/IMG_8653.jpg" alt="Culture capture" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-mono text-white/30 block">// SYSTEM PRINT A</span>
          </div>

          <div className="md:col-span-4 md:mt-20 space-y-2">
            <div className="aspect-[4/5] overflow-hidden border border-white/5 relative group bg-zinc-900">
              <img src="/culture/IMG_8762.jpg" alt="Culture capture" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-mono text-white/30 block">// SYSTEM PRINT B</span>
          </div>

          {/* Upgraded layout scale allocation to md:col-span-5 & aspect-4/5 for maximum size presence */}
          <div className="md:col-span-5 space-y-2">
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 relative group bg-zinc-900 shadow-xl">
              <img src="/culture/IMG_8881.jpg" alt="Culture capture" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-mono text-[#FCDB4E] uppercase tracking-wider block font-bold">// SYSTEM MASTER FRAME [SCALE ENHANCED]</span>
          </div>
        </div>
      </section>

      {/* --- PULL QUOTE 1: STARK TWITTER ROW --- */}
      <section className="py-20 my-0 bg-[#FCDB4E] text-[#171717] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none max-w-4xl">
            "IF THE PERI-PERI SAUCE ISN'T STAINING YOUR FINGERS, ARE YOU EVEN IN HURLINGHAM?"
          </h2>
          <span className="text-xs uppercase font-mono tracking-widest bg-[#171717] text-white px-4 py-2 shrink-0">
            OVERHEARD AT BLAZE
          </span>
        </div>
      </section>

      {/* --- SPREAD BLOCK 2: IMG_9130 ENHANCEMENT & TIGHT-FIT COVER IMG_9053 --- */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Swapped IMG_9130 to this position, maximized vertical framing scale */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-[#BA1B21] block">CHAPTER II // AMBIENT MATRICES</span>
            <h3 className="font-sans font-black text-5xl uppercase tracking-tight text-white leading-none">
              THE RHYTHM OF THE BOX
            </h3>
            <p className="text-gray-400 text-base leading-relaxed">
              We pack fried mastery inside the cardboard walls of the Blaze Box, but the moment it opens on a car bonnet outside the shop, it becomes a social anchor. Continuous street frequency.
            </p>
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-zinc-900 mt-6 shadow-lg">
              <img src="/culture/IMG_9130.jpg" alt="Atmospheric layout visual" className="w-full h-full object-cover filter contrast-110" />
            </div>
            <span className="text-[10px] font-mono text-white/30 block">// DISPATCH DETAIL CLOSE-UP</span>
          </div>

          {/* Adjusted grid container configuration to fill layout boundaries tightly */}
          <div className="lg:col-span-7 w-full">
            <div className="w-full aspect-[3/4] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
              <img 
                src="/culture/IMG_9053.jpg" 
                alt="Lookbook portrait true edge scale" 
                className="w-full h-full object-cover filter contrast-105 brightness-95" 
              />
            </div>
            <div className="w-full flex justify-between text-[10px] font-mono text-white/40 uppercase tracking-wider pt-3">
              <span>EDITORIAL COUPLING // AIR PROFILE</span>
              <span className="text-[#FCDB4E]">[ SECURED FULL-COVER CANVAS ]</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- THE MID-PAGE PRINT-MAGAZINE INVERSION (CHARCOAL SPREAD) --- */}
      <section className="bg-[#0D0D0D] text-[#F5F0EB] py-32 px-6 my-0 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-white/10 pb-6">
            <h3 className="text-5xl lg:text-7xl font-sans font-black uppercase tracking-tighter">THE CORE</h3>
            <span className="text-xs tracking-widest text-[#FCDB4E] font-mono">// PRODUCT SPECS INDEXED</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500 border border-white/10 bg-zinc-950">
                <img src="/culture/IMG_9063.jpg" alt="Product close up" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-400 font-mono tracking-wide">// ANCHOR SPECIMEN // TEXTURE STUDY</p>
            </div>

            <div className="space-y-4 md:mt-12">
              <div className="aspect-[3/4] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500 border border-white/10 bg-zinc-950">
                <img src="/culture/IMG_9071.jpg" alt="Product close up" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-400 font-mono tracking-wide">// ANCHOR SPECIMEN // GEOMETRY LINE</p>
            </div>

            <div className="space-y-4 md:mt-24">
              <div className="aspect-[3/4] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500 border border-white/10 bg-zinc-950">
                <img src="/culture/IMG_9088.jpg" alt="Atmosphere close up" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-400 font-mono tracking-wide">// ANCHOR SPECIMEN // DENSITY FOCUS</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- PRESERVED INTERMISSION ROW: SWAPPED HIGH STAGGER FOR IMG_9003 --- */}
      <section className="w-full border-b border-white/10 py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
            <div className="aspect-[3/4] border border-white/10 overflow-hidden bg-zinc-900">
              <img src="/culture/IMG_9103.jpg" alt="Atmosphere segment" className="w-full h-full object-cover filter contrast-110" />
            </div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">// PERIPHERAL VIEW CUT</span>
          </div>

          <div className="lg:col-span-6 min-h-[50vh] flex flex-col justify-between p-8 bg-[#1F1F1F] text-[#F5F0EB] border border-white/5 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 opacity-5 font-black text-[12vw] select-none pointer-events-none tracking-tighter uppercase leading-none">
              PANEL
            </div>
            <span className="text-[10px] tracking-[0.5em] font-mono text-white/40 uppercase block">INTERMISSION REGISTRY</span>
            <div className="space-y-4 max-w-sm relative z-10 my-12">
              <span className="text-[#FCDB4E] text-3xl font-black uppercase tracking-tighter block">
                "NO CORPORATE SPEECHES."
              </span>
              <p className="text-sm text-gray-400 leading-relaxed font-mono">
                We design meals for the nocturnal grid, the afternoon sprints, the studio drop-ins, and the creative engine houses across the block.
              </p>
            </div>
            <span className="text-xs font-mono text-[#BA1B21] block tracking-widest">// STAYS STREET TRADITION.</span>
          </div>

          {/* Placed IMG_9003 directly in this structural terminal block, amplified spatial height scaling */}
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
            <div className="aspect-[3/4] w-full border border-white/10 overflow-hidden bg-zinc-900 shadow-xl">
              <img src="/culture/IMG_9185.jpg" alt="Atmosphere segment" className="w-full h-full object-cover filter contrast-115 brightness-95" />
            </div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest text-right">// EXTENDED SIDE FRAME [HEIGHT COMPENSATED]</span>
          </div>

        </div>
      </section>

      {/* --- REDESIGN: FINAL GRID BLENDS AS AN ASYMMETRIC BRUTALIST MOSAIC --- */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10 relative">
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono uppercase text-[#BA1B21] tracking-widest">// EDITORIAL RE-COMPOSITION GRID</span>
          <h3 className="text-4xl font-black uppercase tracking-tighter">THE OVERLAP UNIONS</h3>
        </div>

        {/* Asymmetric Tier 1 Layout Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          {/* Panoramic Epicenter Master Component */}
          <div className="lg:col-span-8 group relative space-y-3">
            <div className="w-full aspect-[16/10] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              <img src="/culture/IMG_9213.jpg" alt="Master structural view" className="w-full h-full object-cover object-center filter tracking-tight" />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-white/30 tracking-wider">
              <span>MOSAIC COMPONENT AR-1 // HORIZON</span>
              <span className="text-[#FCDB4E]">CULTURE SPREAD DECK EXCERPT</span>
            </div>
          </div>

          {/* Staggered Vertical Double Array */}
          <div className="lg:col-span-4 space-y-8 lg:mt-16">
            <div className="space-y-2">
              <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-zinc-900">
                <img src="/culture/IMG_9220.jpg" alt="Detail capture side alpha" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-mono text-white/30 block">// SUBSIDIARY RUNWAY PROFILE C</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Tier 2 Layout Architecture (Overlaps and Splits) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-4 space-y-2 order-2 lg:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_9244.jpg" alt="Detail capture side beta" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-mono text-white/30 block">// SUBSIDIARY RUNWAY PROFILE D</span>
          </div>

          <div className="lg:col-span-4 space-y-2 order-3">
            <div className="aspect-[1/1] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_9003.jpg" alt="Complementary tonal panel" className="w-full h-full object-cover filter  contrast-115" />
            </div>
            <span className="text-[10px] font-mono text-white/30 block">// TONAL INTERCEPT CUT</span>
          </div>

          <div className="lg:col-span-4 lg:-mt-32 space-y-2 order-1 lg:order-3">
            <div className="aspect-[3/4] w-full overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              <img src="/culture/IMG_9259.jpg" alt="Detail capture focal" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-mono text-[#BA1B21] uppercase font-bold tracking-widest block">// MOSAIC FOCUS MATRIX OVERVIEW</span>
          </div>
        </div>
      </section>

      {/* --- PULL QUOTE 2: GRITTY NAIROBI TWITTER FLAVOR --- */}
      <section className="max-w-[1000px] mx-auto text-center py-24 px-6">
        <span className="text-4xl text-[#BA1B21] font-bold block mb-4">“</span>
        <blockquote className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
          "KANAIRO RULES APPLY: THE BEST STORIES ARE TOLD AFTER 10 PM OVER AN OPEN BLAZE BOX."
        </blockquote>
      </section>

      {/* --- REDESIGN: TRUE PORTRAIT FINALE BLEED FOR IMG_9366 --- */}
      <section className="max-w-[1400px] mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-b border-white/5 py-16 bg-zinc-950/20">
        
        <div className="lg:col-span-5 space-y-4">
          <div className="w-8 h-8 rounded-full border border-[#BA1B21] flex items-center justify-center">
            <Disc size={12} className="text-[#BA1B21] animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <span className="text-xs uppercase font-mono text-[#FCDB4E] tracking-[0.3em] block">
            // METROPOLIS TERMINUS BOUNDARY
          </span>
          <h3 className="font-sans font-black text-4xl sm:text-5xl uppercase tracking-tighter text-white leading-tight">
            THE SYSTEM ARCHIVE IS COMPLETE.
          </h3>
          <p className="text-gray-400 text-sm font-mono leading-relaxed">
            The layout components align, the raw street textures lock flush, and the framework holds steady inside the city grid lines.
          </p>
        </div>

        {/* Restored true vertical presentation aspect ratio layout for IMG_9366 */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-xl aspect-[3/4] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <img 
              src="/culture/IMG_9366.jpg" 
              alt="True format vertical atmosphere conclusion" 
              className="w-full h-full object-cover filter contrast-110 brightness-95 object-center" 
            />
          </div>
        </div>

      </section>

      {/* --- CLOSING EDITORIAL AND WHATSAPP CTA --- */}
      <section className="max-w-4xl mx-auto text-center px-6 pb-32">
        <h4 className="font-sans font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white">
          THE SPICE STAYS ON YOUR MIND.
        </h4>
        <p className="text-gray-400 text-lg mt-4 mb-12 max-w-xl mx-auto">
          When the box goes empty and the soda drops to ice, the atmosphere remains. Tap into the frequency.
        </p>

        {/* Dynamic Editorial CTA Box */}
        <div className="bg-[#BA1B21] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-left shadow-2xl group">
          <div className="absolute right-[-10%] top-[-30%] text-[24rem] font-black text-black/10 select-none pointer-events-none uppercase">
            BOX
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div>
              <span className="text-[#FCDB4E] font-mono text-xs uppercase tracking-widest block mb-2">HUNGRY IN HURLINGHAM?</span>
              <h5 className="text-3xl sm:text-4xl font-sans font-black uppercase tracking-tight leading-none">
                SKIP THE APP BUREAUCRACY.<br />WHATSAPP US DIRECTLY.
              </h5>
            </div>
            <a 
              href="https://wa.me/yourphone" 
              className="bg-[#FCDB4E] text-[#171717] font-black tracking-wide uppercase text-sm px-8 py-5 rounded-full inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-xl hover:bg-white shrink-0 font-mono"
            >
              <MessageSquare size={18} className="fill-current" />
              DISPATCH MY BOX
            </a>
          </div>
        </div>
      </section>

      {/* --- INTEGRATED EDITORIAL PRINT DIRECTORY FOOTER --- */}
      <footer className="w-full border-t border-white/10 bg-[#0F0F0F] text-gray-500 text-xs font-mono px-6 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          <div className="space-y-4">
            <span className="text-white font-black text-xl tracking-tighter uppercase block">
              BLAZE<span className="text-[#BA1B21]">.</span>
            </span>
            <p className="max-w-xs text-[11px] text-gray-500 leading-relaxed uppercase">
              All rights reserved © 2026. Custom layout engine engineered for alternative street distributions and independent visual records.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-white text-[10px] uppercase tracking-widest block font-bold text-white/60">// FRAME MANIFEST INTEGRATION CATALOG (19/19)</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] text-gray-600">
              <span>PLATE 01 // OVERVIEW</span>
              <span>PLATE 02 // STAGE RANGER</span>
              <span>PLATE 03 // AMBIENT LINE</span>
              <span>PLATE 04 // DETAIL RADIAL</span>
              <span>PLATE 05 // SYSTEM MATRX A</span>
              <span>PLATE 06 // SYSTEM MATRX B</span>
              <span>PLATE 07 // TRANSIT PORTAL</span>
              <span>PLATE 08 // TRUE PORTRAIT</span>
              <span>PLATE 09 // CRUNCH ENTRY A</span>
              <span>PLATE 10 // CRUNCH ENTRY B</span>
              <span>PLATE 11 // CRUNCH ENTRY C</span>
              <span>PLATE 12 // INTERM LEFT</span>
              <span>PLATE 13 // AMBIENT RUNWAY</span>
              <span>PLATE 14 // INTERM RIGHT</span>
              <span>PLATE 15 // MOSAIC HORIZON</span>
              <span>PLATE 16 // SIDEWAY AXIS A</span>
              <span>PLATE 17 // SIDEWAY AXIS B</span>
              <span>PLATE 18 // MOSAIC UNIONS</span>
              <span className="col-span-2">PLATE 19 // VERTICAL FINALE RENDER</span>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <span className="text-white text-[10px] uppercase tracking-widest block font-bold text-white/60">// ENGINE INDEX</span>
            <p className="text-[10px] text-gray-500 uppercase tracking-tight leading-normal">
              DISTRIBUTION DIRECTORY: HIUNI-STU // SYSTEM PRODUCTION PLATFORM ONLINE <br />
              SURFACE MATRIX: HURLINGHAM OUTLET REGION, NAIROBI
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default CulturePage;