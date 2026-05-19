import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    handle: "@sarahj_eats",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    text: "Hands down the best grilled burger I've had in Birmingham. The patty was incredibly juicy, and whatever that secret sauce is... I need it by the gallon!"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    handle: "@marcus_t",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    text: "Fast delivery and the fries were actually still crispy when they arrived. The Taco Supreme is a hidden gem on their menu. Highly recommend!"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    handle: "@elenaphoto",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    text: "The quality of the ingredients really shows. You can tell they don't cut corners. It's my go-to Friday night takeout spot now."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-[#0F0F0F] py-24 px-8 overflow-hidden font-sans">
      
      {/* Background Watermark */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 rotate-[10deg] pointer-events-none select-none">
        <h2 className="text-[120px] lg:text-[180px] font-black text-white/[0.02] leading-none uppercase text-right">
          REVIEWS<br />REVIEWS<br />REVIEWS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <span className="text-[#FFC222] font-black tracking-widest text-sm uppercase mb-4">
          CUSTOMER FEEDBACK
        </span>
        <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-16 text-center">
          WHAT OUR <span className="text-[#007D48]">CLIENTS</span> SAY
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 relative group hover:border-[#007D48] transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-[#007D48]/10 transition-colors duration-300" />
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FFC222] text-[#FFC222]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-[15px] leading-relaxed mb-8 font-medium">
                "{review.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-[#007D48] transition-colors"
                />
                <div>
                  <h4 className="text-white font-bold text-sm uppercase">{review.name}</h4>
                  <span className="text-gray-500 text-xs">{review.handle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;