"use client";

import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

const WA_NUMBER = "254700000000"; // 🔁 Replace with real number
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hey Blaze! I'd like to order 🔥")}`;

const HOURS = [
  { days: "Monday – Friday", hours: "7:00 AM – 11:00 PM" },
  { days: "Saturday", hours: "8:00 AM – 12:00 AM" },
  { days: "Sunday", hours: "9:00 AM – 10:00 PM" },
];

export default function FindUs() {
  return (
    <section id="find-us" className="bg-[#0D0D0D] py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#BA1B21]" />
            <span className="font-display text-[#BA1B21] text-[12px] tracking-[0.35em]">
              COME SEE US
            </span>
          </div>
          <h2 className="font-display text-[clamp(40px,5.5vw,72px)] leading-[0.9] tracking-wide text-white">
            FIND US AT
            <br />
            <span style={{ WebkitTextStroke: "2px #FCDB4E", color: "transparent" }}>
              HURLINGHAM
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-white/8 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.30013692249946!2d36.79908156272749!3d-1.2931378852588433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1100657f5339%3A0x37e936169803f20a!2sBy%20The%20Garden!5e0!3m2!1sen!2ske!4v1779138353409!5m2!1sen!2ske"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blaze location — Hurlingham, Nairobi"
            />
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-6">

            {/* Address card */}
            <div className="bg-[#141414] border border-white/6 rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="bg-[#BA1B21] rounded-xl p-3 shrink-0 mt-0.5">
                  <MapPin size={20} color="white" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-display text-[#FCDB4E] text-[13px] tracking-[0.25em] mb-2">
                    ADDRESS
                  </div>
                  <div className="font-body text-white text-[17px] leading-relaxed">
                    By The Garden, Hurlingham
                    <br />
                    <span className="text-white/45 text-[15px]">Nairobi, Kenya</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/yourlink"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-[#BA1B21] hover:text-[#FCDB4E] font-display text-[11px] tracking-[0.2em] transition-colors"
                  >
                    <Navigation size={12} /> GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-[#141414] border border-white/6 rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="bg-[#171717] border border-white/10 rounded-xl p-3 shrink-0 mt-0.5">
                  <Clock size={20} color="#FCDB4E" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="font-display text-[#FCDB4E] text-[13px] tracking-[0.25em] mb-4">
                    HOURS
                  </div>
                  <div className="flex flex-col gap-3">
                    {HOURS.map(({ days, hours }) => (
                      <div key={days} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                        <span className="font-body text-white/45 text-[14px]">{days}</span>
                        <span className="font-body text-white text-[14px]">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Order CTA card */}
            <div className="bg-[#BA1B21] rounded-2xl p-7 flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="font-display text-[#FCDB4E] text-[16px] tracking-widest mb-1">
                  ORDER DIRECT
                </div>
                <div className="font-body text-white/70 text-[14px]">
                  Skip the queue — WhatsApp us now.
                </div>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-[#171717] hover:bg-[#0a0a0a] text-[#FCDB4E] font-display text-[12px] tracking-[0.2em] px-6 py-3.5 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                <MessageCircle size={15} strokeWidth={2} />
                WHATSAPP US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}