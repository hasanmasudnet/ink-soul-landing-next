"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredWork = [
  {
    title: "Japanese Dragon",
    style: "Traditional Japanese",
    image: "https://images.unsplash.com/photo-1542727365-19732a80dcfd?q=80&w=1000&auto=format&fit=crop",
    artist: "Sarah Chen",
  },
  {
    title: "Geometric Wolf",
    style: "Modern Geometric",
    image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1000&auto=format&fit=crop",
    artist: "Alex Rivers",
  },
];

export function FeaturedWorkSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Featured Work</h2>
          <p className="text-muted-foreground">Our latest masterpieces</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredWork.map((work) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{work.style}</Badge>
                    <span className="text-sm text-muted-foreground">by {work.artist}</span>
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