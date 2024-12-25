"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto px-4 text-center"
      >
        <h1 className="font-pacifico text-5xl md:text-7xl mb-6 text-white">
          Where Art Meets Skin
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience the perfect blend of artistry and professionalism at Ink & Soul Tattoo Studio
        </p>
        <Button
          onClick={scrollToBooking}
          size="lg"
          className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 text-lg px-8"
        >
          Book Your Session
        </Button>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-white/80"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}