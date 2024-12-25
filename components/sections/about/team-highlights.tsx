"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    year: "2023",
    title: "Best Tattoo Studio",
    organization: "City Art Awards",
  },
  {
    year: "2022",
    title: "Innovation in Tattooing",
    organization: "International Tattoo Convention",
  },
  {
    year: "2021",
    title: "Community Excellence",
    organization: "Local Business Awards",
  },
];

export function TeamHighlights() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Recognition</h2>
          <p className="text-muted-foreground">Our achievements and milestones</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6">
                <Badge className="mb-4 bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
                  {achievement.year}
                </Badge>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.organization}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}