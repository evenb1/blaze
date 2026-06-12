"use client";

import { MessageCircle, FileText, ArrowUpRight, Sparkles } from "lucide-react";

const WA_NUMBER = "254140687777";

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

const SIGNATURE_DEALS = [
  {
    name: "Blaze Double Flame",
    days: "TUE & THUR",
    desc: "2 Medium Pizzas for Ksh 1,200 or 2 Large Pizzas for Ksh 1,500.",
    msg: "Hey Blaze! I want the Double Flame deal 🔥",
  },
  {
    name: "Mega Monday Burger",
    days: "EVERY MON",
    desc: "2 Chicken Burgers or 2 Beef Burgers for Ksh 900 each.",
    msg: "Hey Blaze! I want the Mega Monday Burger deal 🔥",
  },
  {
    name: "Family Saver",
    days: "SAT & SUN",
    desc: "Medium pizza, 6 chicken pieces, 1.25L soda for Ksh 2,200.",
    msg: "Hey Blaze! I want the Family Saver deal 🔥",
  },
];

export default function BestSellers() {
  return (
    <section id="menu" className="bg-[#FAF7F2] text-[#171717] py-24 md:py-32 relative overflow-hidden">

      {/* Soft radial glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#BA1B21]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[#171717]/5 pb-8">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.3em] text-[#BA1B21] block mb-2">
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
            className="inline-flex items-center gap-2.5 bg-[#171717] hover:bg-[#BA1B21] text-white font-display text-xs tracking-widest uppercase px-6 py-4 rounded-full transition-all duration-300 shadow-sm self-start md:self-auto"
          >
            <FileText size={14} />
            VIEW FULL MENU 
          </a>
        </div>

        {/* Dish cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {SIGNATURE_DISHES.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#FAF7F2] relative mb-5">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#171717] font-display text-[10px] tracking-wide px-2.5 py-1 rounded-full shadow-sm">
                    {dish.tag}
                  </span>
                </div>

                <div className="px-2 space-y-2">
                  <h3 className="font-display text-base tracking-tight text-[#171717]">
                    {dish.title}
                  </h3>
                  <span className="text-[#BA1B21] font-display text-sm block">
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
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#FAF7F2] hover:bg-[#BA1B21] text-[#171717] hover:text-white font-display text-xs tracking-wide py-3.5 rounded-2xl transition-all duration-300"
                >
                  <MessageCircle size={14} />
                  ORDER ON WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Deals */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-[#171717]/5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={16} className="text-[#BA1B21]" />
            <span className="font-display text-xs uppercase tracking-widest text-[#BA1B21]">
              WEEKLY SPECIAL OFFERS
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-[#171717] mb-12">
            DEALS & PROMOS
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SIGNATURE_DEALS.map((deal) => (
              <div
                key={deal.name}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] transition-colors duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-display text-base text-[#171717]">
                      {deal.name.toUpperCase()}
                    </h4>
                    <span className="bg-[#BA1B21]/10 text-[#BA1B21] font-display text-[10px] tracking-wider px-2.5 py-1 rounded-full shrink-0">
                      {deal.days}
                    </span>
                  </div>
                  <p className="font-body text-gray-500 text-xs leading-relaxed">
                    {deal.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(deal.msg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-display text-xs text-[#171717] hover:text-[#BA1B21] transition-colors duration-200"
                  >
                    CLAIM DEAL
                    <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}