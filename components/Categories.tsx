"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBasket, Star } from "lucide-react";

const products = [
  { id: 1, name: "Whopper Burger King", price: 12.39, rating: 5, img: "/images/burger.png", desc: "Facere rerum ad sunt qui qui. Ab et itaque et. Sint minus deleniti est placea..." },
  { id: 2, name: "Taco Supreme", price: 8.32, rating: 5, img: "/images/taco.png", desc: "Voluptatum in molestiae dolores aliquam aliquam fugit. Veritatis voluptatem ipsa..." },
  { id: 3, name: "Subway Melt", price: 6.90, rating: 5, img: "/images/subway.png", desc: "Repellat magnam soluta explicabo ut quidem. Facilis et quibusdam eaque..." },
  { id: 4, name: "Spicy Chicken Sandwich", price: 5.90, rating: 5, img: "/images/chicken.png", desc: "Fuga sed voluptate molestiae unde perspiciatis. Maxime nemo tempora et..." },
];

export default function BestSellers() {
  return (
    <section className="py-24 bg-[#f8f7f4]">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black uppercase text-[#1a1a1a]">Best Selling Dishes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow relative group"
            >
              <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition">
                <Heart size={20} />
              </button>
              
              <div className="h-48 flex items-center justify-center mb-4">
                <img src={item.img} alt={item.name} className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              <h3 className="font-bold text-lg uppercase mb-2 line-clamp-1">{item.name}</h3>
              
              <div className="flex text-[#f3a633] mb-3">
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-500 text-xs mb-6 line-clamp-2">{item.desc}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-black text-[#d24646]">${item.price.toFixed(2)}</span>
                <button className="bg-[#42804c] hover:bg-[#34663c] text-white p-2 rounded-md transition">
                  <ShoppingBasket size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
