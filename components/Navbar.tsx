"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const WA_NUMBER = "254700000000"; // 🔁 Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order 🔥")}`;
const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Find Us", href: "#find-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-350 ease-out
          ${scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/blaze.png"
            alt="Blaze"
            width={110}
            height={40}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`font-display text-[13px] tracking-[0.22em] transition-colors duration-200 hover:text-[#BA1B21]
                text-[#171717]`}
            >
              {label.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Right CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#BA1B21] hover:bg-[#9a1419] text-white font-display text-[12px] tracking-[0.2em] px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_16px_rgba(186,27,33,0.4)]"
          >
            <MessageCircle size={14} strokeWidth={2} />
            ORDER NOW
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className={`md:hidden p-1.5 transition-colors ${scrolled ? "text-[#171717]" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#171717] flex flex-col justify-center px-8 transition-all duration-300 md:hidden
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="mb-12">
          <Image src="/blaze.png" alt="Blaze" width={120} height={44} className="object-contain" />
        </div>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="font-display text-[42px] tracking-widest text-white/70 hover:text-[#FCDB4E] py-4 border-b border-white/8 transition-colors leading-tight"
          >
            {label.toUpperCase()}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-10 flex items-center justify-center gap-3 bg-[#BA1B21] text-white font-display text-[14px] tracking-[0.2em] px-6 py-4 rounded-xl"
        >
          <MessageCircle size={18} /> ORDER ON WHATSAPP
        </a>
      </div>
    </>
  );
}