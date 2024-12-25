"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const artists = [
  {
    name: "Alex Rivers",
    specialty: "Black & Grey Realism",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop",
    experience: "8 years",
  },
  {
    name: "Sarah Chen",
    specialty: "Japanese Traditional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    experience: "12 years",
  },
];

export function ArtistsSection() {
  return (
    <section id="artists" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Our Artists</h2>
          <p className="text-muted-foreground">Meet our talented team of tattoo artists</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {artists.map((artist) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{artist.name}</h3>
                  <p className="text-muted-foreground mb-2">{artist.specialty}</p>
                  <p className="text-sm">{artist.experience} of experience</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}