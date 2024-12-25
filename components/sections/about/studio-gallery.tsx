"use client";

import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop",
    alt: "Studio entrance",
  },
  {
    url: "https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?q=80&w=2070&auto=format&fit=crop",
    alt: "Tattoo workspace",
  },
  {
    url: "https://images.unsplash.com/photo-1613070120286-98b11cdb9ae6?q=80&w=2070&auto=format&fit=crop",
    alt: "Art wall",
  },
];

export function StudioGallery() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Our Studio</h2>
          <p className="text-muted-foreground">Take a peek inside our creative space</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-video relative overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}