"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Bridal Makeover",
    category: "Bridal Beauty",
    image: "/images/portfolio/bridal-makeup.jpg",
  },
  {
    title: "Custom Sleeve Tattoo",
    category: "Tattoo Art",
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Modern Hair Styling",
    category: "Hair Design",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Professional Makeup",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Fine Line Tattoo",
    category: "Tattoo Art",
    image: "https://images.unsplash.com/photo-1612459284970-e8f027596582?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    title: "Spa & Wellness",
    category: "Beauty Treatment",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Our Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of stunning transformations and artistic works.
            From bridal makeovers to tattoos and beauty treatments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.category}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
