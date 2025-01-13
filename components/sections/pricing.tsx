"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic Package",
    price: "199+",
    features: [
      "Initial Consultation",
      "Basic Design Concept",
      "One Revision Round",
      "Digital Files Included",
    ],
  },
  {
    name: "Professional",
    price: "499+",
    features: [
      "Extended Consultation",
      "Custom Design Work",
      "Three Revision Rounds",
      "Premium Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "999+",
    features: [
      "Full Project Management",
      "Unlimited Revisions",
      "Priority Support",
      "Full Rights Transfer",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Investment Plans</h2>
          <p className="text-muted-foreground">Flexible pricing for your creative needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={`p-6 ${pkg.featured ? 'border-[#FFD700] border-2' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2">${pkg.price}</div>
                  <p className="text-muted-foreground">Starting price</p>
                </div>
                <ul className="space-y-4 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#FFD700]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                  Book Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}