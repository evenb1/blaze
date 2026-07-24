"use client";

import { ChevronRight, Sparkles, Flame, Activity } from "lucide-react";
import { useEffect, useState } from "react";

const STATS = [
  { value: "3 MIN", label: "Walk-in ready" },
  { value: "20 MIN", label: "Delivery prep" },
  { value: "#1", label: "In Hurlingham" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#F5F0EB] overflow-hidden pt-32 pb-16">

      {/* ── BACKGROUND WATERMARKS & TEXTURES ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Large diagonal background text */}
        <div
          className="absolute left-[-2%] top-[8%] font-display leading-none tracking-[0.05em] opacity-[0.04] text-transparent hidden lg:block"
          style={{
            fontSize: "clamp(180px, 25vw, 320px)",
            WebkitTextStroke: "3px #BA1B21",
            transform: "rotate(-6deg)",
          }}
        >
          BLAZE
        </div>

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(186,27,33,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── MAIN CONTENT GRID ─────────────────────────────────────── */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT PANEL: THE MANIFESTO & ACTIONS (6 Columns) ───────── */}
          <div 
            className={`lg:col-span-6 space-y-8 transition-all duration-700 ease-out
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Live Indicator Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
             
              
              <div className="inline-flex items-center gap-1.5 bg-[#FCDB4E] text-[#171717] font-display text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-xl font-bold">
                <Flame size={12} fill="currentColor" /> HURLED FRESH DAILY
              </div>
            </div>

            {/* Heavy Statement Typography */}
            <h1 className="font-display leading-[0.85] tracking-tight text-left">
              <span className="block text-[#171717] text-[56px] sm:text-[76px] lg:text-[92px]">
                ONE FLAME.
              </span>
              <span
                className="inline-block bg-[#BA1B21] text-white px-5 py-1.5 my-1.5 transform -rotate-1 rounded-2xl text-[46px] sm:text-[66px] lg:text-[82px] tracking-wide shadow-md"
              >
                ONE BOX.
              </span>
              <span className="block text-[#171717] text-[56px] sm:text-[76px] lg:text-[92px]">
                ZERO WAIT.
              </span>
            </h1>

            {/* Descriptive Pitch */}
            <p className="font-body text-[#171717]/65 text-[16px] md:text-[18px] leading-[1.7] max-w-[520px]">
              Flame-licked peri-peri or ultra-crispy fried chicken. Heavy seasoned fries. 
              Ice-cold soda. Our legendary signature dip. Boxed up and ready before you finish checking in.
            </p>

            {/* High-Contrast Interactive Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#menu"
                className="flex items-center justify-center gap-2.5 bg-[#BA1B21] hover:bg-[#171717] text-white font-display text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(186,27,33,0.25)] w-full sm:w-auto"
              >
                <Sparkles size={14} fill="currentColor" />
                VIEW PROMOS
              </a>
              
              <a
                href="/Blaze Menu_New_IV.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-[#171717] bg-white hover:bg-[#FCDB4E] text-[#171717] font-display text-[12px] tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-all duration-200 w-full sm:w-auto"
              >
                FULL PRINT MENU <ChevronRight size={14} strokeWidth={2} />
              </a>
            </div>

            {/* Integrated Sleek Stats Dashboard */}
            <div className="pt-8 border-t border-[#171717]/10 max-w-[520px]">
              <div className="grid grid-cols-3 gap-6">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="space-y-1">
                    <div className="font-display text-2xl sm:text-3xl text-[#BA1B21] tracking-tight">
                      {value}
                    </div>
                    <div className="font-body text-[#171717]/40 text-[9px] sm:text-[10px] tracking-widest uppercase font-medium">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT PANEL: THE MASSIVE CULTURE HERO FRAME (6 Columns) ── */}
          <div 
            className={`lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0 transition-all duration-700 delay-200 ease-out w-full lg:max-w-[none] max-w-[550px] mx-auto
              ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Background Solid Color Character Offset */}
            <div className="absolute inset-0 bg-[#FCDB4E] rounded-[3rem] transform rotate-2 translate-x-3 translate-y-3 scale-98 pointer-events-none shadow-md" />
            
            {/* The Main Massive Hero Image Frame */}
            <div className="relative w-full aspect-[4/5] lg:aspect-[1/1] xl:aspect-[4/5] bg-[#171717] rounded-[3rem] border-4 border-white overflow-hidden shadow-2xl group">
              
              {/* Overlay Street Tag */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-[#171717] px-4 py-2 rounded-xl font-display text-[10px] tracking-[0.2em] uppercase z-20 shadow-sm flex items-center gap-2 border border-[#171717]/5">
                <Activity size={12} className="text-[#BA1B21]" />
                BLAZE_CULT_9053
              </div>

              {/* Core Culture Image Asset */}
              <img 
                src="/culture/IMG_9053.jpg" 
                alt="Blaze Street Culture Scene" 
                className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.96] transition-transform duration-700 group-hover:scale-103"
              />

              {/* Bottom Visual Tape Details */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 pt-16 flex items-end justify-between">
                <div className="font-display text-[11px] tracking-widest text-white/50 uppercase">
                  {"/// HURLINGHAM DROP INDEX // 2026"}
                </div>
                <div className="text-sm">🔥</div>
              </div>
            </div>

            {/* Bottom-right sharp corner edge frame accents */}
            <div className="absolute -bottom-4 -right-4 w-[25%] h-[4px] bg-[#BA1B21] z-20 hidden lg:block" />
            <div className="absolute -bottom-4 -right-4 w-[4px] h-[18%] bg-[#BA1B21] z-20 hidden lg:block" />
          </div>

        </div>
      </div>

      {/* Structural bottom border strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#BA1B21] z-20" />
    </section>
  );
}