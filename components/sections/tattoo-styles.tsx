"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const styles = [
  {
    name: "Realism",
    description: "Photorealistic designs with incredible detail and shading",
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Traditional",
    description: "Bold lines and vibrant colors in classic American style",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Watercolor",
    description: "Fluid, artistic designs mimicking watercolor paintings",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1000&auto=format&fit=crop",
  },
];

export function TattooStylesSection() {
  return (
    <section id="styles" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Tattoo Styles</h2>
          <p className="text-muted-foreground">Explore our diverse range of tattoo styles</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {styles.map((style) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{style.name}</h3>
                  <p className="text-muted-foreground mb-4">{style.description}</p>
                  <Button 
                    className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book This Style
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}