import React from 'react';
import Link from 'next/link';
import { MessageSquare, Disc } from 'lucide-react';
import Image from 'next/image';

const WA_NUMBER = "254140687777";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order 🔥")}`;

const CulturePage = () => {
  return (
    <div className="bg-[#171717] text-[#F5F0EB] min-h-screen antialiased selection:bg-[#BA1B21] selection:text-white pb-0 font-body overflow-x-hidden">

      {/* HEADER */}
      <header className="w-full border-b border-white/10 px-6 py-5 flex justify-between items-center z-50 relative bg-[#171717]">
        <Link
          href="/"
          className="font-display tracking-tighter uppercase text-xl text-[#F5F0EB] inline-flex items-center gap-2 group"
        >
          <span className="text-[#BA1B21] group-hover:-translate-x-1 transition-transform inline-block">←</span>
          Back to Home
        </Link>
        <span className="text-[10px] uppercase tracking-[0.3em] font-display text-white/40 hidden sm:inline">
          VOL. 01 // HURLINGHAM // BLAZE X HIUNI STUDIOS
        </span>
        <a
          href={WA_LINK}
          className="bg-[#F5F0EB] text-[#171717] px-5 py-2 rounded-full uppercase text-xs tracking-wider font-display font-bold hover:bg-[#BA1B21] hover:text-white transition-colors"
        >
          ORDER NOW
        </a>
      </header>

      {/* HERO */}
      <section className="relative w-full pt-12 lg:pt-20 px-6 border-b border-white/10 pb-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 relative z-10">
            <span className="text-[#BA1B21] font-display text-xs uppercase tracking-[0.4em] block mb-4">
              BLAZE X HIUNI STUDIOS // VOL. 01
            </span>
            <h1 className="font-display uppercase tracking-tighter text-[13vw] sm:text-[11vw] lg:text-[9vw] leading-[0.8] text-white">
              FAST FOOD<span className="text-[#BA1B21]">.</span><br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #F5F0EB' }}>SLOW MOMENTS</span>
            </h1>
          </div>

          <div className="lg:col-span-5 relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
            <img
              src="/culture/IMG_8638.jpg"
              alt="Hurlingham Street Culture"
              className="w-full h-full object-cover contrast-[1.15] brightness-95 object-center"
            />
            <div className="absolute bottom-4 left-4 text-white text-[10px] tracking-widest font-display uppercase bg-[#BA1B21] px-3 py-1.5">
              // HURLINGHAM, NAIROBI
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10">
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit space-y-4">
          <span className="text-[#BA1B21] font-display text-xs uppercase tracking-widest block">// THE STORY</span>
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-gray-200 leading-tight">
            Blaze isn't just fuel for busy hours. It's the background noise of late-night conversations in Hurlingham.
          </p>
        </div>

        <div className="lg:col-span-5 lg:col-start-6 text-gray-400 text-lg space-y-6 font-body leading-relaxed">
          <p>
            <span className="text-6xl font-display text-[#BA1B21] float-left mr-3 mt-1 leading-none uppercase">H</span>
            urlingham moves fast. Traffic crawls, phones buzz, the grind never slows down. But inside the walls of a Blaze box, time behaves differently. We built Blaze to be modern fast food — but what grew around it is pure community, raw street energy, and something that feels like home.
          </p>
          <p>
            This series, shot in collaboration with <strong className="text-white">Hiuni Studios</strong>, strips away the polish. It captures the smoke, the oil, the laughter, the heavy Nairobi air, and the beautiful tension between fast food and slow, unforgettable moments.
          </p>
        </div>
      </section>

      {/* DUAL ASYMMETRIC */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-3">
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_8954.jpg" alt="Hurlingham street" className="w-full h-full object-cover contrast-110 brightness-90" />
            </div>
            <span className="text-[10px] font-display text-white/30 uppercase tracking-widest block">// THE STREETS OUTSIDE</span>
          </div>
          <div className="lg:col-span-5 lg:mt-24 space-y-4">
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_8969.jpg" alt="Blaze culture" className="w-full h-full object-cover brightness-95" />
            </div>
            <span className="text-[10px] font-display text-white/30 uppercase tracking-widest block">// ALWAYS MOVING</span>
          </div>
        </div>
      </section>

      {/* TRIPTYCH */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="flex flex-col mb-12">
          <span className="text-xs font-display uppercase text-[#BA1B21] tracking-widest">// THE PEOPLE</span>
          <h3 className="font-display text-3xl uppercase tracking-tighter">FACES OF THE BLOCK</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-3 space-y-2">
            <div className="aspect-[3/4] overflow-hidden border border-white/5 relative group bg-zinc-900">
              <img src="/culture/IMG_8653.jpg" alt="Culture" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-display text-white/30 block">// IN THE MOMENT</span>
          </div>

          <div className="md:col-span-4 md:mt-20 space-y-2">
            <div className="aspect-[4/5] overflow-hidden border border-white/5 relative group bg-zinc-900">
              <img src="/culture/IMG_8881.jpg" alt="Culture" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-display text-white/30 block">// TREASURE</span>
          </div>

          <div className="md:col-span-5 space-y-2">
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 relative group bg-zinc-900 shadow-xl">
              <img src="/culture/IMG_8762.jpg" alt="Culture" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-display text-[#FCDB4E] uppercase tracking-wider block">// THE MAIN CHARACTER</span>
          </div>
        </div>
      </section>

      {/* PULL QUOTE 1 */}
      <section className="py-20 bg-[#FCDB4E] text-[#171717] border-y border-white/10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-none max-w-4xl">
            "IF THE PERI-PERI SAUCE ISN'T STAINING YOUR FINGERS, ARE YOU EVEN IN HURLINGHAM?"
          </h2>
          <span className="text-xs uppercase font-display tracking-widest bg-[#171717] text-white px-4 py-2 shrink-0">
            OVERHEARD AT BLAZE
          </span>
        </div>
      </section>

      {/* SPREAD BLOCK 2 */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase font-display tracking-widest text-[#BA1B21] block">// THE BOX</span>
            <h3 className="font-display text-5xl uppercase tracking-tight text-white leading-none">
              THE RHYTHM OF THE BOX
            </h3>
            <p className="text-gray-400 text-base leading-relaxed font-body">
              We pack everything into the walls of the Blaze Box — but the moment it opens on a car bonnet outside the shop, it becomes something else entirely. A reason to stay. A reason to come back.
            </p>
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/10 bg-zinc-900 mt-6 shadow-lg">
              <img src="/culture/IMG_9130.jpg" alt="Blaze box close up" className="w-full h-full object-cover contrast-110" />
            </div>
            <span className="text-[10px] font-display text-white/30 block">// THE DETAILS MATTER</span>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="w-full aspect-[3/4] overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
              <img
                src="/culture/IMG_9053.jpg"
                alt="Culture portrait"
                className="w-full h-full object-cover contrast-105 brightness-95"
              />
            </div>
            <div className="w-full flex justify-between text-[10px] font-display text-white/40 uppercase tracking-wider pt-3">
              <span>// HURLINGHAM FACES</span>
              <span className="text-[#FCDB4E]">BLAZE X HIUNI STUDIOS</span>
            </div>
          </div>
        </div>
      </section>

      {/* GRAYSCALE TRIPTYCH */}
      <section className="bg-[#0D0D0D] text-[#F5F0EB] py-32 px-6 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-white/10 pb-6">
            <h3 className="font-display text-5xl lg:text-7xl uppercase tracking-tighter">UP CLOSE</h3>
            <span className="text-xs tracking-widest text-[#FCDB4E] font-display">// THE FOOD, RAW</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden  contrast-125 hover:grayscale-0 transition-all duration-500 border border-white/10 bg-zinc-950">
                <img src="/culture/IMG_9063.jpg" alt="Food close up" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-400 font-display tracking-wide">// THE ATMOSPHERE</p>
            </div>

            <div className="space-y-4 md:mt-12">
              <div className="aspect-[3/4] overflow-hidden  contrast-125 hover:grayscale-0 transition-all duration-500 border border-white/10 bg-zinc-950">
                <img src="/culture/IMG_9071.jpg" alt="Food close up" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-400 font-display tracking-wide">// THE HEAT</p>
            </div>

            <div className="space-y-4 md:mt-24">
              <div className="aspect-[3/4] overflow-hidden  contrast-125 hover:grayscale-0 transition-all duration-500 border border-white/10 bg-zinc-950">
                <img src="/culture/IMG_9088.jpg" alt="Atmosphere" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-gray-400 font-display tracking-wide">// THE CRUNCH</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERMISSION */}
      <section className="w-full border-b border-white/10 py-24 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
            <div className="aspect-[3/4] border border-white/10 overflow-hidden bg-zinc-900">
              <img src="/culture/IMG_9103.jpg" alt="Atmosphere" className="w-full h-full object-cover contrast-110" />
            </div>
            <span className="text-[10px] font-display text-white/30 uppercase tracking-widest">// ON THE SIDELINES</span>
          </div>

          <div className="lg:col-span-6 min-h-[50vh] flex flex-col justify-between p-8 bg-[#1F1F1F] text-[#F5F0EB] border border-white/5 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 opacity-5 font-display text-[12vw] select-none pointer-events-none tracking-tighter uppercase leading-none">
              BLAZE
            </div>
            <span className="text-[10px] tracking-[0.5em] font-display text-white/40 uppercase block">THE REAL ONES KNOW</span>
            <div className="space-y-4 max-w-sm relative z-10 my-12">
              <span className="text-[#FCDB4E] text-3xl font-display uppercase tracking-tighter block">
                "NO CORPORATE ENERGY HERE."
              </span>
              <p className="text-sm text-gray-400 leading-relaxed font-body">
                Built for the late-night crowd, the afternoon rush, the studio sessions, and everyone grinding across the block.
              </p>
            </div>
            <span className="text-xs font-display text-[#BA1B21] block tracking-widest">// HURLINGHAM BUILT. STREET APPROVED.</span>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-4 justify-between">
            <div className="aspect-[3/4] w-full border border-white/10 overflow-hidden bg-zinc-900 shadow-xl">
              <img src="/culture/IMG_9185.jpg" alt="Atmosphere" className="w-full h-full object-cover contrast-115 brightness-95" />
            </div>
            <span className="text-[10px] font-display text-white/30 uppercase tracking-widest text-right">// OFF THE CLOCK</span>
          </div>
        </div>
      </section>

      {/* MOSAIC */}
      <section className="px-6 py-24 max-w-[1400px] mx-auto border-b border-white/10 relative">
        <div className="flex flex-col mb-16">
          <span className="text-xs font-display uppercase text-[#BA1B21] tracking-widest">// THE FULL PICTURE</span>
          <h3 className="font-display text-4xl uppercase tracking-tighter">THE BIGGER LOOK</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8 group relative space-y-3">
            <div className="w-full aspect-[16/10] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              <img src="/culture/IMG_9213.jpg" alt="Wide shot" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex justify-between items-center text-[10px] font-display text-white/30 tracking-wider">
              <span>// THE WIDE ANGLE</span>
              <span className="text-[#FCDB4E]">BLAZE X HIUNI STUDIOS</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8 lg:mt-16">
            <div className="space-y-2">
              <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-zinc-900">
                <img src="/culture/IMG_9220.jpg" alt="Detail" className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-display text-white/30 block">// CAUGHT IN BETWEEN</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-4 space-y-2 order-2 lg:order-1">
            <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_9244.jpg" alt="Detail" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-display text-white/30 block">// STREET LEVEL</span>
          </div>

          <div className="lg:col-span-4 space-y-2 order-3">
            <div className="aspect-[1/1] w-full overflow-hidden border border-white/10 bg-zinc-900">
              <img src="/culture/IMG_9003.jpg" alt="Culture" className="w-full h-full object-cover contrast-115" />
            </div>
            <span className="text-[10px] font-display text-white/30 block">// YUM AND YUM</span>
          </div>

          <div className="lg:col-span-4 lg:-mt-32 space-y-2 order-1 lg:order-3">
            <div className="aspect-[3/4] w-full overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              <img src="/culture/IMG_9259.jpg" alt="Culture portrait" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-display text-[#BA1B21] uppercase tracking-widest block">// THE STANDOUT</span>
          </div>
        </div>
      </section>

      {/* PULL QUOTE 2 */}
      <section className="max-w-[1000px] mx-auto text-center py-24 px-6">
        <span className="text-4xl text-[#BA1B21] font-display block mb-4">"</span>
        <blockquote className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-none">
          "KANAIRO RULES APPLY: THE BEST STORIES ARE TOLD AFTER 10 PM OVER AN OPEN BLAZE BOX."
        </blockquote>
      </section>

      {/* FINALE */}
      <section className="max-w-[1400px] mx-auto px-6 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-b border-white/5 py-16 bg-zinc-950/20">
        <div className="lg:col-span-5 space-y-4">
          <div className="w-8 h-8 rounded-full border border-[#BA1B21] flex items-center justify-center">
            <Disc size={12} className="text-[#BA1B21] animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <span className="text-xs uppercase font-display text-[#FCDB4E] tracking-[0.3em] block">
            // THAT'S THE CULTURE
          </span>
          <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tighter text-white leading-tight">
            HURLINGHAM DOESN'T STOP.
          </h3>
          <p className="text-gray-400 text-sm font-body leading-relaxed">
            Neither do we. The box keeps coming. The flame stays lit. Come through.
          </p>
        </div>

        <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-xl aspect-[3/4] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <img
              src="/culture/IMG_9366.jpg"
              alt="Final shot"
              className="w-full h-full object-cover contrast-110 brightness-95 object-center"
            />
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-4xl mx-auto text-center px-6 pb-32">
        <h4 className="font-display text-4xl sm:text-6xl uppercase tracking-tighter text-white">
          THE SPICE STAYS ON YOUR MIND.
        </h4>
        <p className="text-gray-400 text-lg font-body mt-4 mb-12 max-w-xl mx-auto">
          When the box goes empty and the soda's down to ice, the feeling stays. You know where to find us.
        </p>

        <div className="bg-[#BA1B21] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-left shadow-2xl">
          <div className="absolute right-[-10%] top-[-30%] text-[24rem] font-display text-black/10 select-none pointer-events-none uppercase">
            BOX
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div>
              <span className="text-[#FCDB4E] font-display text-xs uppercase tracking-widest block mb-2">HUNGRY IN HURLINGHAM?</span>
              <h5 className="font-display text-3xl sm:text-4xl uppercase tracking-tight leading-none">
                SKIP THE APPS.<br />WHATSAPP US DIRECTLY.
              </h5>
            </div>
            <a
              href={WA_LINK}
              className="bg-[#FCDB4E] text-[#171717] font-display tracking-wide uppercase text-sm px-8 py-5 rounded-full inline-flex items-center gap-3 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-xl hover:bg-white shrink-0"
            >
              <MessageSquare size={18} />
              ORDER NOW
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 bg-[#0F0F0F] text-gray-500 text-xs font-display px-6 py-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <Image src="/blaze.png" alt="Blaze" width={110} height={40} className="object-contain" />
            <p className="max-w-xs text-[11px] text-gray-500 leading-relaxed uppercase font-body">
              © 2026 Blaze Fast Food. Hurlingham, Nairobi. All rights reserved.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-white/60 text-[10px] uppercase tracking-widest block">// PHOTOS IN THIS SERIES</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[9px] text-gray-600 font-body">
              {["IMG_8638", "IMG_8653", "IMG_8762", "IMG_8881", "IMG_8954", "IMG_8969",
                "IMG_9003", "IMG_9053", "IMG_9063", "IMG_9071", "IMG_9088", "IMG_9103",
                "IMG_9130", "IMG_9185", "IMG_9213", "IMG_9220", "IMG_9244", "IMG_9259", "IMG_9366"].map((img) => (
                <span key={img}>{img}</span>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <span className="text-white/60 text-[10px] uppercase tracking-widest block">// FIND US</span>
            <p className="text-[11px] text-gray-500 uppercase tracking-tight leading-normal font-body">
              BY THE GARDEN, HURLINGHAM<br />
              NAIROBI, KENYA<br /><br />
              SHOT BY HIUNI STUDIOS
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default CulturePage;