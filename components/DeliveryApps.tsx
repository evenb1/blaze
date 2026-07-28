"use client";

import { ChevronRight, Bike, Sparkles } from "lucide-react";
import Image from "next/image";

const PLATFORMS = [
  {
    name: "Uber Eats",
    url: "https://www.ubereats.com/store-browse-uuid/54aa809a-1ebe-5807-a324-045d816f72a5?diningMode=DELIVERY",
    accentColor: "#06C167", // Uber Green
    logoPath: "/uber-eats.png",
    label: "LAUNCH UBER EATS",
  },
  {
    name: "Bolt Food",
    url: "https://food.bolt.eu/en/320/p/652608-blaze?utm_source=share_provider&utm_medium=product&utm_content=menu_header",
    accentColor: "#ffffff", // Bolt Green
    logoPath: "/bolt-food.png",
    label: "LAUNCH BOLT FOOD",
  },
  {
    name: "Glovo",
    url: "https://glovo.go.link/open?link_type=store&store_id=593329&adjust_t=s321jkn",
    accentColor: "#FFC244", // Glovo Yellow
    logoPath: "/glovo.png",
    label: "LAUNCH GLOVO",
  },
];

export default function DeliveryApps() {
  return (
    <section id="find-us" className="relative bg-[#F5F0EB] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      
      {/* ── BACKGROUND WATERMARKS & TEXTURES (Consistent with Hero) ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        <div
          className="absolute right-[-2%] bottom-[5%] font-display leading-none tracking-[0.05em] opacity-[0.04] text-transparent hidden lg:block"
          style={{
            fontSize: "clamp(180px, 25vw, 320px)",
            WebkitTextStroke: "3px #BA1B21",
            transform: "rotate(-6deg)",
          }}
        >
          DELIVERY
        </div>

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(186,27,33,0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">

        {/* ── HEADER BLOCK ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-1.5 bg-[#FCDB4E] text-[#171717] font-display text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-xl font-bold shadow-sm">
                <Bike size={12} fill="currentColor" /> HITTING NAIROBI WIDE
              </div>
            </div>
            
            <h2 className="font-display leading-[0.85] tracking-tight text-left">
              <span className="block text-[#171717] text-[46px] sm:text-[66px] lg:text-[76px]">
                ORDER ON YOUR
              </span>
              <span className="inline-block bg-[#BA1B21] text-white px-5 py-1.5 my-1.5 transform -rotate-1 rounded-2xl text-[38px] sm:text-[56px] lg:text-[66px] tracking-wide shadow-md">
                FAVORITE APP.
              </span>
            </h2>
          </div>
          
          <p className="font-body text-[#171717]/65 text-[16px] leading-[1.7] max-w-[420px] lg:text-right">
            Can't make it to the Hurlingham counter? Get the entire box lineup broadcasted straight to your door via our official platform partners.
          </p>
        </div>

        {/* ── CARD DISPLAY GRID (Using Hero's Layered Offset Style) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 max-w-[1200px] mx-auto">
          {PLATFORMS.map((p) => (
            <div key={p.name} className="relative group w-full max-w-[380px] mx-auto aspect-[4/3] sm:aspect-[1.3/1]">
              
              {/* Backing offset shadow card matching Hero design */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] transform rotate-2 translate-x-2 translate-y-2 scale-98 pointer-events-none shadow-md opacity-80 group-hover:rotate-1 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" 
                style={{ backgroundColor: p.accentColor }}
              />

              {/* Front Content Card */}
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 border-4 border-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-xl transition-transform duration-300 group-hover:-translate-y-1 overflow-hidden"
                style={{ backgroundColor: `${p.accentColor}1A` }}
              >
                {/* Visual Ambient Light glow matching platform color */}
                <div 
                  className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-30 blur-3xl pointer-events-none"
                  style={{ backgroundColor: p.accentColor }}
                />

                {/* Sourced Local Image Asset Container */}
                <div className="relative z-10 flex items-center justify-start h-24 w-full">
                  <Image
                    src={p.logoPath}
                    alt={`${p.name} Brand Identity`}
                    width={220}
                    height={90}
                    className="object-contain max-h-20 w-auto filter brightness-100"
                    priority
                  />
                </div>

                {/* Action Row */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#171717]/10">
                  <span className="font-display text-[#171717]/60 text-[10px] tracking-[0.2em] uppercase font-medium group-hover:text-[#171717] transition-colors duration-200">
                    {p.label}
                  </span>
                  
                  <div className="bg-[#171717] text-white w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </div>
                </div>
              </a>

            </div>
          ))}
        </div>

       

      </div>

      {/* Structural bottom border strip to blend into the footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#BA1B21] z-20" />
    </section>
  );
}