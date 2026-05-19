import { Zap, Flame, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: <Zap size={24} color="#BA1B21" strokeWidth={2} />,
    title: "Speed is the product",
    desc: "3-minute walk-in. 20-minute delivery. We photobomb your selfie before it focuses.",
  },
  {
    icon: <Flame size={24} color="#BA1B21" strokeWidth={2} />,
    title: "Built for Hurlingham",
    desc: "Matatu energy. Street culture. Your neighbourhood's own fast-food landmark.",
  },
  {
    icon: <Clock size={24} color="#BA1B21" strokeWidth={2} />,
    title: "Order your way",
    desc: "Walk in, WhatsApp us directly, or hit the delivery apps. You pick the lane.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image collage */}
        <div className="relative h-[480px] lg:h-[560px]">
          {/* Main image */}
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
            alt="Blaze food close-up"
            className="absolute top-0 left-0 w-[72%] h-[74%] object-cover rounded-2xl"
          />
          {/* Secondary image */}
          <img
            src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=600&auto=format&fit=crop"
            alt="Blaze chicken"
            className="absolute bottom-0 right-0 w-[58%] h-[52%] object-cover rounded-2xl border-4 border-white"
          />
          {/* Red stat badge */}
          <div className="absolute bottom-[22%] left-[4%] z-10 bg-[#BA1B21] rounded-xl px-5 py-4 shadow-[0_8px_32px_rgba(186,27,33,0.35)]">
            <div className="font-display text-[#FCDB4E] text-[30px] leading-none">3 MIN</div>
            <div className="font-body text-white/75 text-[11px] tracking-widest uppercase mt-1.5">
              walk-in ready
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="font-display text-[#BA1B21] text-[11px] tracking-[0.3em] block mb-4">
            ABOUT BLAZE
          </span>
          <h2 className="font-display text-[clamp(42px,5vw,68px)] leading-[0.92] tracking-wide text-[#171717] mb-6">
            FAST. FRESH.
            <br />
            <span className="text-[#BA1B21]">YOURS.</span>
          </h2>
          <p className="font-body text-[#555] text-[16px] leading-[1.8] mb-10">
            Blaze was built for Nairobi&apos;s fast-paced urban lifestyle. No 40-item menus.
            No waiting forever. We chose one hero product and perfected it — so every
            single Blaze Box you get is exactly as good as the last one.
          </p>

          <div className="flex flex-col gap-8">
            {FEATURES.map((f, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-[#F5F0EB] rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <div className="font-display text-[#171717] text-[14px] tracking-widest mb-1.5">
                    {f.title.toUpperCase()}
                  </div>
                  <div className="font-body text-[#666] text-[14px] leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}