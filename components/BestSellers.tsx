"use client";

import { Star, MessageCircle, ArrowRight, Tag } from "lucide-react";

const WA_NUMBER = "254700000000"; // 🔁 Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order 🔥")}`;
const DEAL1_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I want the deal from deal 1 🔥")}`;
const DEAL2_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I want the deal from deal 2 🔥")}`;

const DISHES = [
  {
    id: 1,
    title: "PERI-PERI CHICKEN BOX",
    desc: "Our flame-kissed peri-peri chicken, seasoned fries, signature sauce & a cold soda. The original Blaze experience.",
    image: "https://images.unsplash.com/photo-1562802378-063ec186a863?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "FRIED CHICKEN BOX",
    desc: "Shatteringly crispy fried chicken, golden seasoned fries, Blaze sauce & your drink. Simple. Perfect.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "SEASONED FRIES",
    desc: "House spice blend, double-fried for max crunch. The side that always disappears first.",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "BLAZE SAUCE",
    desc: "We won't tell you what's in it. All we'll say is — once you have it, everything else tastes plain.",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=500&auto=format&fit=crop",
  },
];

export default function BestSellers() {
  return (
    <section id="menu" className="relative bg-[#F7F2ED] py-24 md:py-36 overflow-hidden">

      {/* ── Scrolling watermark ── */}
      <div className="absolute top-8 w-full overflow-hidden whitespace-nowrap pointer-events-none select-none">
        <div
          className="inline-block animate-marquee font-display text-[clamp(80px,12vw,140px)] leading-none tracking-widest uppercase"
          style={{ WebkitTextStroke: "1.5px #DDD5CC", color: "transparent" }}
        >
          SIGNATURE DISHES • SIGNATURE DISHES • SIGNATURE DISHES • SIGNATURE DISHES •&nbsp;
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-10 mb-36">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#BA1B21]" />
              <span className="font-display text-[#BA1B21] text-[12px] tracking-[0.35em]">
                WHAT WE DO
              </span>
            </div>
            <h2 className="font-display text-[clamp(40px,5.5vw,72px)] leading-[0.9] tracking-wide text-[#171717]">
              SIGNATURE
              <br />
              <span style={{ WebkitTextStroke: "2px #BA1B21", color: "transparent" }}>
                DISHES
              </span>
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 self-start md:self-auto bg-[#171717] hover:bg-[#BA1B21] text-[#FCDB4E] font-display text-[12px] tracking-[0.2em] px-6 py-3.5 rounded-xl transition-all duration-200"
          >
            ORDER NOW <ArrowRight size={14} />
          </a>
        </div>

        {/* ── Pop-out dish cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-32 mb-24">
          {DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-3xl p-6 pt-24 shadow-sm hover:bg-[#BA1B21] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
            >
              {/* Pop-out food image */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 z-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover rounded-2xl"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              <h3 className="font-display text-[14px] tracking-widest text-[#171717] group-hover:text-white leading-tight mb-3 transition-colors duration-300">
                {dish.title}
              </h3>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} fill="#FCDB4E" color="#FCDB4E" />
                ))}
              </div>

              <p className="font-body text-[#888] text-[13px] leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-300 line-clamp-3">
                {dish.desc}
              </p>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-2 w-full bg-[#BA1B21] group-hover:bg-white text-white group-hover:text-[#BA1B21] font-display text-[11px] tracking-[0.2em] py-3 rounded-xl transition-all duration-300"
              >
                <MessageCircle size={13} strokeWidth={2} />
                ORDER
              </a>
            </div>
          ))}
        </div>

        {/* ── Current Deals ── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#BA1B21]" />
            <span className="font-display text-[#BA1B21] text-[12px] tracking-[0.35em]">
              LIMITED TIME
            </span>
          </div>
          <h3 className="font-display text-[clamp(32px,4vw,56px)] leading-[0.92] tracking-wide text-[#171717] mb-10">
            CURRENT
            <br />
            <span style={{ WebkitTextStroke: "2px #BA1B21", color: "transparent" }}>
              DEALS
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Deal 1 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/deal1.png"
                  alt="Blaze deal 1"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="bg-[#BA1B21]/10 rounded-lg p-2">
                    <Tag size={16} color="#BA1B21" strokeWidth={2} />
                  </div>
                  <span className="font-display text-[#171717] text-[14px] tracking-widest">
                    DEAL OF THE WEEK
                  </span>
                </div>
                <a
                  href={DEAL1_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#BA1B21] hover:bg-[#9a1419] text-white font-display text-[11px] tracking-[0.2em] px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap"
                >
                  <MessageCircle size={13} strokeWidth={2} />
                  GRAB IT
                </a>
              </div>
            </div>

            {/* Deal 2 */}
            <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="/deal2.png"
                  alt="Blaze deal 2"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="bg-[#FCDB4E]/30 rounded-lg p-2">
                    <Tag size={16} color="#9a7800" strokeWidth={2} />
                  </div>
                  <span className="font-display text-[#171717] text-[14px] tracking-widest">
                    COMBO SPECIAL
                  </span>
                </div>
                <a
                  href={DEAL2_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#171717] hover:bg-[#BA1B21] text-[#FCDB4E] font-display text-[11px] tracking-[0.2em] px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap"
                >
                  <MessageCircle size={13} strokeWidth={2} />
                  GRAB IT
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}