import { MessageCircle } from "lucide-react";

const WA_NUMBER = "254700000000"; // 🔁 Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order a Blaze Box 🔥")}`;

export default function OrderCTA() {
  return (
    <section className="bg-[#BA1B21] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background wordmark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display text-[22vw] text-black/[0.07] tracking-[0.2em] whitespace-nowrap leading-none"
          aria-hidden
        >
          BLAZE
        </span>
      </div>

      <div className="max-w-[900px] mx-auto relative z-10 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-black/20 rounded-full px-4 py-2 mb-10">
          <div className="w-2 h-2 rounded-full bg-[#FCDB4E] animate-pulse" />
          <span className="font-body text-[#FCDB4E] text-[12px] tracking-[0.2em] uppercase">
            We&apos;re open now
          </span>
        </div>

        <h2 className="font-display text-[clamp(52px,8vw,104px)] leading-[0.88] tracking-wide text-white mb-6">
          SKIP THE LINE.
          <br />
          <span className="text-[#FCDB4E]">HIT ORDER.</span>
        </h2>

        <p className="font-body text-white/65 text-[17px] leading-[1.75] max-w-[500px] mx-auto mb-12">
          DM us on WhatsApp. Tell us your combo — peri-peri or fried. We&apos;ll have it
          ready before you get here.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-[#FCDB4E] hover:bg-white text-[#171717] font-display text-[16px] tracking-[0.2em] px-10 py-5 rounded-xl shadow-[0_4px_28px_rgba(0,0,0,0.25)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-200"
        >
          <MessageCircle size={22} />
          ORDER ON WHATSAPP
        </a>

        {/* Delivery app tags */}
        <div className="flex justify-center gap-3 mt-10 flex-wrap">
          {["Uber Eats", "Bolt Food", "Glovo"].map((app) => (
            <span
              key={app}
              className="font-body text-white/50 text-[12px] border border-white/20 rounded-md px-4 py-2 tracking-wide"
            >
              Also on {app}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}