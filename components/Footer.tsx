import { Flame, MessageCircle, Camera, Share2 } from "lucide-react";
import Image from "next/image";

const WA_NUMBER = "254700000000"; // 🔁 Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order a Blaze Box 🔥")}`;

const HOURS = [
  ["Mon – Fri", "7:00 AM – 11:00 PM"],
  ["Saturday", "8:00 AM – 12:00 AM"],
  ["Sunday", "9:00 AM – 10:00 PM"],
];

const LINKS = ["The Blaze Box", "Order on WhatsApp", "Find Us in Hurlingham", "Work With Us"];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-10 px-6 md:px-12">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
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
            
            </div>
            <p className="font-body text-white/30 text-[14px] leading-relaxed mb-6">
              One Flame. Fast. Fresh. Yours. Hurlingham&apos;s fastest, loudest, most shareable dining destination.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: <Camera size={15} />, href: "#" },
                { icon: <Share2 size={15} />, href: "#" },
                { icon: <MessageCircle size={15} />, href: WA_LINK },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 hover:border-[#BA1B21] hover:bg-[#BA1B21] flex items-center justify-center text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-display text-[#FCDB4E] text-[11px] tracking-[0.3em] mb-5">
              QUICK LINKS
            </div>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-white/35 hover:text-white text-[14px] transition-colors duration-150"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <div className="font-display text-[#FCDB4E] text-[11px] tracking-[0.3em] mb-5">
              HOURS
            </div>
            <div className="space-y-3">
              {HOURS.map(([day, hrs]) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="font-body text-white/30 text-[13px]">{day}</span>
                  <span className="font-body text-white/70 text-[13px]">{hrs}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Order direct */}
          <div>
            <div className="font-display text-[#FCDB4E] text-[11px] tracking-[0.3em] mb-5">
              ORDER DIRECT
            </div>
            <p className="font-body text-white/30 text-[14px] leading-relaxed mb-5">
              Skip the app commissions. Order on WhatsApp and we handle the rest.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#BA1B21] hover:bg-[#9a1419] text-white font-display text-[12px] tracking-[0.2em] px-5 py-3 rounded-lg transition-all duration-200"
            >
              <MessageCircle size={14} /> WHATSAPP US
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-body text-white/20 text-[12px]">
            © 2026 Blaze Fast Food. Hurlingham, Nairobi.
          </span>
          <span className="font-display text-white/15 text-[11px] tracking-[0.25em]">
            ONE FLAME — FAST. FRESH. YOURS.
          </span>
        </div>
      </div>
    </footer>
  );
}