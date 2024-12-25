"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    rating: 5,
    text: "Incredible experience! The artists are true professionals and the studio is immaculate.",
    date: "March 2024",
  },
  {
    name: "Jane Smith",
    rating: 5,
    text: "Best tattoo experience ever. They took my idea and made it even better than I imagined.",
    date: "February 2024",
  },
];

export function ReferralsSection() {
  return (
    <section id="referrals" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Client Stories</h2>
          <p className="text-muted-foreground">What our clients say about us</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.text}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}