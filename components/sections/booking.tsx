"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <section id="booking" className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-pacifico text-4xl mb-4">Book Your Session</h2>
          <p className="text-muted-foreground">Start your tattoo journey with us</p>
        </motion.div>

        <Card className="max-w-2xl mx-auto p-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>

            <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
              Request Appointment
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}