"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const designers = [
  {
    name: "Emma Wright",
    specialty: "Custom Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    style: "Neo-Traditional",
  },
  {
    name: "Marcus Lee",
    specialty: "Digital Art",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    style: "Minimalist",
  },
];

export function DesignersSection() {
  return (
    <section id="designers" className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Our Designers</h2>
          <p className="text-muted-foreground">Expert designers bringing your ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {designers.map((designer) => (
            <motion.div
              key={designer.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{designer.name}</h3>
                  <p className="text-muted-foreground mb-2">{designer.specialty}</p>
                  <p className="text-sm">Style: {designer.style}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}