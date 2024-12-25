"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Palette, Shield, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: <Palette className="w-8 h-8 text-[#FFD700]" />,
    title: "Artistic Excellence",
    description: "We push the boundaries of creativity while maintaining the highest standards of technical execution.",
  },
  {
    icon: <Shield className="w-8 h-8 text-[#FFD700]" />,
    title: "Safety First",
    description: "Our studio maintains hospital-grade sterilization protocols to ensure your safety and peace of mind.",
  },
  {
    icon: <Heart className="w-8 h-8 text-[#FFD700]" />,
    title: "Client-Centered",
    description: "Your vision and comfort are our top priorities throughout the entire tattooing process.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-[#FFD700]" />,
    title: "Innovation",
    description: "We continuously evolve our techniques and styles to stay at the forefront of tattoo artistry.",
  },
];

export function CoreValues() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Our Values</h2>
          <p className="text-muted-foreground">The principles that guide our craft</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}