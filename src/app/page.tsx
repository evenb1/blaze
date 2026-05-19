import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Ticker from "../../components/Ticker";
import BestSellers from "../../components/BestSellers";
import About from "../../components/About";
import OrderCTA from "../../components/OrderCTA";
import DeliverySection from "../../components/DeliverySection";
import TestimonialsSection from "../../components/TestimonialsSection";
import Footer from "../../components/Footer";

import FindUs from "../../components/Findus";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Ticker />
 
      {/* Signature dishes */}
      <BestSellers />
 

 
      {/* About / brand story */}
      <About />
 

 
      {/* How ordering works */}
      <DeliverySection />
 
      {/* Big WhatsApp CTA */}
      <OrderCTA />
 
      {/* Social proof */}
      <TestimonialsSection />
 
      {/* Map + hours */}
      <FindUs />
 
      <Footer />
 
      {/* Scroll to top */}
      <button className="fixed bottom-8 right-8 bg-[#BA1B21] hover:bg-[#9a1419] text-white w-12 h-12 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-200 z-50 flex items-center justify-center font-display text-[18px]">
        ↑
      </button>
    </main>
  );
}
 