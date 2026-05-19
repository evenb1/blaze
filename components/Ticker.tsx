import { Flame } from "lucide-react";

const ITEMS = [
  "THE BLAZE BOX",
  "3-MIN WALK-IN",
  "FLAME DELIVERED",
  "HURLINGHAM'S FASTEST",
  "ONE TRICK. EXCELLENCE.",
  "ORDER ON WHATSAPP",
];

// Duplicate for seamless loop
const REPEATED = [...ITEMS, ...ITEMS, ...ITEMS];

export default function Ticker() {
  return (
    <div className="bg-[#FCDB4E] overflow-hidden py-3.5 select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {REPEATED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 font-display text-[#171717] text-[13px] tracking-[0.22em] mr-12"
          >
            {item}
            <Flame size={11} color="#BA1B21" strokeWidth={2.5} aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}