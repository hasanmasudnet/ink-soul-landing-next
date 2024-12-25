"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Share2, Users } from "lucide-react";

const benefits = [
  {
    icon: <Gift className="w-8 h-8 text-[#FFD700]" />,
    title: "Get $50 Off",
    description: "Receive a $50 discount on your next tattoo session",
  },
  {
    icon: <Users className="w-8 h-8 text-[#FFD700]" />,
    title: "Friend Benefits",
    description: "Your friend gets 15% off their first session",
  },
  {
    icon: <Share2 className="w-8 h-8 text-[#FFD700]" />,
    title: "Easy Sharing",
    description: "Share your unique referral code via email or social media",
  },
];

export function ReferralProgramSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Refer & Earn</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share the artistry with friends and family. Both you and your referrals get rewarded!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 text-center h-full">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
            Get Your Referral Code
          </Button>
        </div>
      </div>
    </section>
  );
}