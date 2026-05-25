"use client";

import { MessageCircle, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const WA_NUMBER = "254700000000"; // 🔁 Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order 🔥")}`;

const STATS = [
  { value: "3 MIN", label: "Walk-in ready" },
  { value: "20 MIN", label: "Delivery prep" },
  { value: "#1", label: "In Hurlingham" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-[#F5F0EB] overflow-hidden">

      {/* ── BACKGROUND WATERMARKS ─────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>

        {/* Large diagonal BLAZE repeats — red outline */}
        {["BLAZE", "BLAZE", "BLAZE", "BLAZE"].map((word, i) => (
          <div
            key={`wm-${i}`}
            className="absolute font-display leading-none tracking-[0.15em] whitespace-nowrap"
            style={{
              fontSize: "clamp(100px, 20vw, 240px)",
              WebkitTextStroke: "1.5px rgba(186,27,33,0.08)",
              color: "transparent",
              top: `${i * 26 - 5}%`,
              left: i % 2 === 0 ? "-3%" : "15%",
              transform: "rotate(-8deg)",
            }}
          >
            {word}
          </div>
        ))}

        {/* Secondary smaller words — gold outline, opposite diagonal */}
        {["FAST", "FRESH", "YOURS", "FLAME"].map((word, i) => (
          <div
            key={`wm2-${i}`}
            className="absolute font-display leading-none tracking-[0.2em] whitespace-nowrap"
            style={{
              fontSize: "clamp(40px, 7vw, 96px)",
              WebkitTextStroke: "1px rgba(252,219,78,0.18)",
              color: "transparent",
              top: `${10 + i * 22}%`,
              right: `${-2 + (i % 2) * 8}%`,
              transform: "rotate(6deg)",
            }}
          >
            {word}
          </div>
        ))}

        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(186,27,33,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ── LEFT PANEL ─────────────────────────────────────────────────── */}
      <div className="relative flex flex-col justify-center w-full lg:w-[45%] px-12 md:px-16 pt-32 pb-16 lg:pt-0 lg:pb-0 min-h-[60vh] lg:min-h-screen">

        {/* Red left accent bar */}
        <div className="absolute left-0 top-[20%] bottom-[20%] w-[3px] bg-[#BA1B21]" />

        {/* Content */}
        <div
          className={`relative z-10 pl-2 transition-all duration-700 ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <div className="w-8 h-px bg-[#BA1B21]" />
            <span className="font-display text-[#BA1B21] text-[12px] tracking-[0.35em]">
              HURLINGHAM, NAIROBI
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display leading-[0.88] tracking-wide">
            <span className="block text-[#171717]" style={{ fontSize: "clamp(54px, 7vw, 100px)" }}>
              ONE FLAME.
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(54px, 7vw, 100px)",
                WebkitTextStroke: "2px #BA1B21",
                color: "transparent",
              }}
            >
              ONE BOX.
            </span>
            <span className="block text-[#171717]" style={{ fontSize: "clamp(54px, 7vw, 100px)" }}>
              ZERO WAIT.
            </span>
          </h1>

          {/* Body */}
          <p className="font-body text-[#171717]/55 text-[16px] md:text-[17px] leading-[1.8] max-w-[420px] mt-7 mb-10">
            Peri-peri or fried chicken. Seasoned fries. Soda. Our signature sauce.
            Ready before you finish walking over.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-[#BA1B21] hover:bg-[#9a1419] text-white font-display text-[13px] tracking-[0.2em] px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(186,27,33,0.35)]"
            >
              <MessageCircle size={16} strokeWidth={2} />
              ORDER ON WHATSAPP
            </a>
            <a
              href="/blazemenu.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 border border-[#171717]/20 hover:border-[#BA1B21] text-[#171717]/55 hover:text-[#BA1B21] font-display text-[13px] tracking-[0.2em] px-8 py-4 rounded-xl transition-all duration-200"
            >
              VIEW MENU <ChevronRight size={15} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-0 border-t border-[#171717]/10 pt-7">
            {STATS.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex-1 ${i < STATS.length - 1 ? "border-r border-[#171717]/10 pr-6 mr-6" : ""}`}
              >
                <div className="font-display text-[#BA1B21] leading-none mb-2" style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>
                  {value}
                </div>
                <div className="font-body text-[#171717]/40 text-[12px] tracking-[0.15em] uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ──────────────────────────────────────────────── */}
      <div className="relative flex-1 flex items-center justify-start">



        {/* Chicken cutout — shifted left via negative margin */}
        <img
          src="/hero.png"
          alt="Blaze signature chicken"
          className="w-full h-auto block -translate-y-2 -ml-10"
        />

        {/* Red corner accents */}
        <div className="absolute bottom-0 right-0 w-[35%] h-[3px] bg-[#BA1B21] z-20" />
        <div className="absolute bottom-0 right-0 w-[3px] h-[25%] bg-[#BA1B21] z-20" />
      </div>
    </section>
  );
}