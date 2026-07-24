"use client";

import { MessageCircle, FileText, ArrowUpRight, Sparkles, Flame, Camera } from "lucide-react";

const WA_NUMBER = "254140687777";

const TOP_CULTURE = [
  { src: "/culture/IMG_8653.jpg", tag: "NBO_LIVE" },
  { src: "/culture/IMG_8881.jpg", tag: "BLOCK_HEAT" },
  { src: "/culture/IMG_9130.jpg", tag: "LINE_SPEED" },
];

const MID_CULTURE = [
  { src: "/culture/IMG_8954.jpg", tag: "HURLINGHAM_HQ" },
  { src: "/culture/IMG_9063.jpg", tag: "CREW_ENERGY" },
];

const PROMO_IMAGES = [
  { src: "/promos/IMG_1478.jpg", alt: "Weekly Drop 1", msg: "Hey Blaze! I want to claim the promo from image 1478 🔥" },
  { src: "/promos/IMG_1479.jpg", alt: "Weekly Drop 2", msg: "Hey Blaze! I want to claim the promo from image 1479 🔥" },
  { src: "/promos/img123.JPG", alt: "Weekly Drop 3", msg: "Hey Blaze! I want to claim the promo from image 123 🔥" },
];

const SIGNATURE_DISHES = [
  {
    id: 1,
    title: "TRIPLE TREAT COMBO",
    desc: "3pc crispy chicken, regular chips, 500ml soda. The full Blaze experience in one box.",
    price: "Ksh 750",
    image: "/product/3piecemeal.jpg",
    tag: "Fan Favorite",
  },
  {
    id: 2,
    title: "CRISPY BIRD BURGER",
    desc: "Crispy chicken fillet, lettuce, tomato, classic mayo on a toasted bun. Simple done right.",
    price: "Ksh 750",
    image: "/product/chickenburger.jpg",
    tag: "Signature",
  },
  {
    id: 3,
    title: "PERI PERI CHICKEN PIZZA",
    desc: "Marinated peri peri chicken, mozzarella cheese, oregano. Heat meets cheese.",
    price: "From Ksh 900",
    image: "/product/pizza.jpg",
    tag: "Hot Right Now",
  },
  {
    id: 4,
    title: "SUPREME BUCKET",
    desc: "12 pieces of crispy chicken, jumbo chips, coleslaw salad and a 2L soda. Built for the table.",
    price: "Ksh 3,500",
    image: "/product/supremebucket.jpg",
    tag: "Feast Mode",
  },
];

export default function BestSellers() {
  return (
    <section id="menu" className="bg-[#FAF7F2] text-[#171717] py-24 md:py-32 relative overflow-hidden">
      
      {/* ── BACKGROUND WATERMARKS & TEXTURES ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Upper Background Watermark */}
        <div
          className="absolute right-[-8%] top-[4%] font-display leading-none tracking-[0.05em] opacity-[0.04] text-transparent hidden lg:block"
          style={{
            fontSize: "clamp(160px, 22vw, 340px)",
            WebkitTextStroke: "3px #BA1B21",
            transform: "rotate(-4deg)",
          }}
        >
          CULTURE
        </div>

        {/* Mid-Section Background Watermark */}
        <div
          className="absolute left-[-5%] top-[38%] font-display leading-none tracking-[0.05em] opacity-[0.04] text-transparent hidden lg:block"
          style={{
            fontSize: "clamp(160px, 22vw, 340px)",
            WebkitTextStroke: "3px #171717",
            transform: "rotate(5deg)",
          }}
        >
          LINEUP
        </div>

        {/* Lower Promos Background Watermark */}
        <div
          className="absolute right-[-3%] bottom-[8%] font-display leading-none tracking-[0.05em] opacity-[0.05] text-transparent hidden lg:block"
          style={{
            fontSize: "clamp(160px, 24vw, 360px)",
            WebkitTextStroke: "3px #BA1B21",
            transform: "rotate(-6deg)",
          }}
        >
          DROPS
        </div>

        {/* Soft Organic Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#BA1B21]/4 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-[#FCDB4E]/6 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── PART 1: TOP CULTURE SNAPSHOTS (High-Aspect Showcase) ────── */}
        <div className="mb-32">
          <div className="flex flex-col gap-3 mb-12 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#BA1B21] font-display text-[10px] tracking-[0.25em] uppercase px-4 py-1.5 rounded-full self-start font-bold border border-[#171717]/5 shadow-sm">
              <Flame size={12} fill="currentColor" /> KITCHEN IDENTITY
            </div>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.0] text-[#171717]">
              CULTURE FIRST. <br />FLAVOR FOLLOWS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOP_CULTURE.map((snap, i) => (
              <div 
                key={i} 
                className={`overflow-hidden rounded-[2rem] bg-zinc-100 group relative shadow-sm transition-transform duration-500 hover:-translate-y-1
                  ${i === 1 ? "md:translate-y-6" : ""}`}
              >
                <img
                  src={snap.src}
                  alt={snap.tag}
                  className="w-full aspect-[3/4.2] object-cover filter contrast-[1.01] transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#171717] font-display text-[9px] tracking-widest font-bold px-3 py-1.5 rounded-xl border border-black/5 shadow-sm">
                  // {snap.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: THE SIGNATURE LINEUP (Premium Balanced Cards) ──── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[#171717]/10 pb-8">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#BA1B21] block mb-2 font-bold">
              CRAVABLE CLASSICS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#171717]">
              THE SIGNATURE LINEUP
            </h2>
          </div>

          <a
            href="/Blaze Menu_New_IV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#171717] hover:bg-[#BA1B21] text-white font-display text-xs tracking-widest uppercase px-7 py-4 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5 font-bold"
          >
            <FileText size={14} />
            VIEW FULL MENU 
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-36">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-[2rem] p-4 shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between border border-[#171717]/5"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#FAF7F2] relative mb-5">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#171717] font-display text-[9px] tracking-wide px-3 py-1 rounded-full font-bold shadow-sm border border-black/5">
                    {dish.tag}
                  </span>
                </div>

                <div className="px-2 space-y-1.5">
                  <h3 className="font-display text-base tracking-tight text-[#171717] uppercase">
                    {dish.title}
                  </h3>
                  <span className="text-[#BA1B21] font-display text-sm block font-bold">
                    {dish.price}
                  </span>
                  <p className="font-body text-gray-500 text-xs leading-relaxed line-clamp-3 pt-1">
                    {dish.desc}
                  </p>
                </div>
              </div>

              <div className="px-2 pt-6">
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hey Blaze! I'd like to order the ${dish.title} 🔥`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#FAF7F2] hover:bg-[#BA1B21] text-[#171717] hover:text-white font-display text-xs tracking-wider py-3.5 rounded-xl font-bold transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  ORDER ON WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── PART 3: MID EXPERIENCE SECTION (Full Height Lifestyle Display) ── */}
        <div className="mb-36">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Full height natural display */}
            <div className="md:col-span-7 group relative overflow-hidden rounded-[2rem] shadow-sm">
              <div className="absolute top-4 left-4 bg-[#171717] text-white px-3 py-1.5 rounded-xl font-display text-[9px] tracking-widest uppercase font-bold z-10">
                // {MID_CULTURE[0].tag}
              </div>
              <img 
                src={MID_CULTURE[0].src} 
                alt={MID_CULTURE[0].tag} 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-102 rounded-[2rem]"
              />
            </div>

            {/* Right Column: Context Headline + Second Full Height Asset */}
            <div className="md:col-span-5 flex flex-col justify-between gap-12">
              <div className="space-y-4 md:pl-4">
                <div className="flex items-center gap-2 text-[#BA1B21]">
                  <Camera size={14} />
                  <span className="font-display text-[10px] tracking-widest uppercase font-bold">FIELD INDEX 2026</span>
                </div>
                <h3 className="font-display text-3xl tracking-tight uppercase text-[#171717]">
                  FAST LINES, REAL PEOPLE.
                </h3>
                <p className="font-body text-gray-500 text-sm leading-relaxed max-w-md">
                  We built our counter layout around rapid acceleration, keeping wait times low so you can get back out to the block without missing a beat.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-[2rem] shadow-sm">
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[#171717] px-3 py-1.5 rounded-xl font-display text-[9px] tracking-widest uppercase font-bold z-10 shadow-sm border border-black/5">
                  #{MID_CULTURE[1].tag}
                </div>
                <img 
                  src={MID_CULTURE[1].src} 
                  alt={MID_CULTURE[1].tag} 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-102 rounded-[2rem]"
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── PART 4: DESIGNER PROMOS SHOWCASE (Full Image, Square Edges) ── */}
        <div className="relative pt-4">
          <div className="flex items-center justify-between gap-6 mb-12 border-b border-[#171717]/10 pb-6">
            <div className="flex items-center gap-2.5">
              <Sparkles size={18} className="text-[#BA1B21]" />
              <h3 className="font-display text-3xl text-[#171717] uppercase tracking-tight">
                WEEKLY SPECIAL DROPS
              </h3>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-[#171717]/40 hidden sm:inline">
              [ DIRECT DESIGNER RELEASES ]
            </span>
          </div>

          {/* Clean, uncropped, zero-radius flyer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {PROMO_IMAGES.map((promo, idx) => (
              <div key={idx} className="group flex flex-col bg-transparent">
                
                {/* Promo Image Container - Pure uncropped layout with no rounded corners */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(promo.msg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-transparent overflow-hidden shadow-sm"
                >
                  <img
                    src={promo.src}
                    alt={promo.alt}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </a>

                {/* Direct High-Contrast Action Button */}
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(promo.msg)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2.5 w-full bg-[#BA1B21] hover:bg-[#171717] text-white font-display text-xs tracking-widest uppercase py-4 font-bold transition-all duration-300 shadow-sm rounded-xl"
                >
                  <MessageCircle size={14} />
                  ORDER NOW
                  <ArrowUpRight size={14} strokeWidth={2.5} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}