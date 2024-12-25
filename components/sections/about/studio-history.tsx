"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function StudioHistory() {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-pacifico text-5xl mb-4">Our Story</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A decade of dedication to the art of tattooing
          </p>
        </motion.div>

        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1559066653-edfd1e6bbbd5?q=80&w=2070&auto=format&fit=crop"
                alt="Studio interior"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Founded in 2014</h2>
              <p className="text-muted-foreground mb-6">
                Ink & Soul began with a vision to create more than just a tattoo studio – we wanted to build a sanctuary where art meets skin, where stories are told through ink, and where every client becomes part of our extended family.
              </p>
              <p className="text-muted-foreground">
                Over the years, we've grown from a small studio with two artists to a renowned establishment featuring some of the most talented artists in the industry, all while maintaining our commitment to quality, creativity, and client satisfaction.
              </p>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}