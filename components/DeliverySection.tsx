import { MessageCircle, Timer, MapPin, PackageCheck } from "lucide-react";

const WA_NUMBER = "254700000000"; // 🔁 Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order a Blaze Box 🔥")}`;

const FEATURES = [
  {
    icon: <Timer size={32} color="white" strokeWidth={1.5} />,
    title: "20-MIN DELIVERY PREP",
    desc: "We start the moment you message us.",
  },
  {
    icon: <MessageCircle size={32} color="white" strokeWidth={1.5} />,
    title: "ORDER ON WHATSAPP",
    desc: "Direct DM. No apps, no commission, no nonsense.",
  },
  {
    icon: <PackageCheck size={32} color="white" strokeWidth={1.5} />,
    title: "WALK-IN IN 3 MINS",
    desc: "Step in, step out. The fastest lunch break in Hurlingham.",
  },
];

const DELIVERY_APPS = ["Uber Eats", "Bolt Food", "Glovo"];

export default function DeliverySection() {
  return (
    <section className="bg-[#171717] py-24 md:py-32 px-6 md:px-12 overflow-hidden relative">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-start overflow-hidden pointer-events-none select-none">
        <span
          className="font-display text-[22vw] text-white/[0.025] leading-none tracking-widest whitespace-nowrap"
          aria-hidden
        >
          BLAZE BLAZE BLAZE
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=500&auto=format&fit=crop"
                alt="Fast delivery"
                className="w-full h-[420px] object-cover object-center opacity-80"
              />
            </div>
            {/* Gold badge overlay */}
            <div className="absolute -bottom-5 -right-4 bg-[#FCDB4E] rounded-2xl px-6 py-5 shadow-2xl">
              <div className="font-display text-[#171717] text-[32px] leading-none">20 MIN</div>
              <div className="font-body text-[#171717]/60 text-[11px] tracking-widest uppercase mt-1.5">
                delivery ready
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <span className="font-display text-[#FCDB4E] text-[11px] tracking-[0.3em] block mb-4">
              HOW IT WORKS
            </span>
            <h2 className="font-display text-[clamp(42px,5vw,68px)] leading-[0.92] tracking-wide text-white mb-6">
              YOUR BLAZE BOX,
              <br />
              <span className="text-[#FCDB4E]">ON THE WAY.</span>
            </h2>
            <p className="font-body text-white/45 text-[16px] leading-[1.8] mb-10 max-w-lg">
              Message us directly on WhatsApp, skip the commission, and get your box faster than any app can promise.
            </p>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="border border-dashed border-white/20 hover:border-white/50 hover:bg-white/5 rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 cursor-default"
                >
                  {f.icon}
                  <div>
                    <div className="font-display text-white text-[12px] tracking-widest mb-1">
                      {f.title}
                    </div>
                    <div className="font-body text-white/40 text-[12px] leading-snug">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-[#BA1B21] hover:bg-[#9a1419] text-white font-display text-[13px] tracking-[0.18em] px-7 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle size={16} />
                ORDER ON WHATSAPP
              </a>
              <div className="flex flex-col">
                <span className="font-body text-white/30 text-[11px] uppercase tracking-widest mb-1">
                  Also on
                </span>
                <div className="flex gap-2 flex-wrap">
                  {DELIVERY_APPS.map((app) => (
                    <span
                      key={app}
                      className="font-body text-white/50 text-[12px] border border-white/15 rounded px-2.5 py-1"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}