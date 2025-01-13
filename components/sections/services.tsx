"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Palette, 
  Scissors, 
  Sparkles, 
  Heart, 
  Flower2, 
  Gem,
  Crown,
} from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Bridal Makeover",
    description: "Complete bridal transformation including makeup, hair styling, and pre-bridal skincare packages for your special day."
  },
  {
    icon: Palette,
    title: "Custom Tattoos",
    description: "Professional custom tattoo designs tailored to your vision, from small pieces to full sleeves and body art."
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert haircuts, coloring, and styling services for all hair types. Transform your look with our skilled stylists."
  },
  {
    icon: Sparkles,
    title: "Beauty Treatments",
    description: "Comprehensive beauty services including facials, makeup, and skincare treatments for a radiant appearance."
  },
  {
    icon: Heart,
    title: "Nail Care",
    description: "Professional manicures, pedicures, and nail art services. Express yourself with beautiful, healthy nails."
  },
  {
    icon: Flower2,
    title: "Spa Services",
    description: "Relaxing spa treatments including massages, body wraps, and aromatherapy for complete rejuvenation."
  },
  {
    icon: Gem,
    title: "Beauty Packages",
    description: "Customized beauty packages combining multiple services for special occasions or complete makeovers."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From stunning tattoos to complete beauty transformations, we offer a comprehensive range
            of professional services to help you look and feel your best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
