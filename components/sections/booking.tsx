"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
          <h2 className="font-pacifico text-4xl mb-4">Schedule a Consultation</h2>
          <p className="text-muted-foreground">Let's discuss your creative project and bring your vision to life</p>
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
              <Label htmlFor="service">Service Type</Label>
              <Select>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="design">Graphic Design</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="illustration">Illustration</SelectItem>
                  <SelectItem value="tattoo">Tattoo Design</SelectItem>
                  <SelectItem value="web">Web Design</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">Project Description</Label>
              <Textarea
                id="project"
                placeholder="Tell us about your project and what you're looking to achieve"
                className="min-h-[100px]"
              />
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

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select>
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">$500 - $1,000</SelectItem>
                  <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                  <SelectItem value="large">$5,000 - $10,000</SelectItem>
                  <SelectItem value="enterprise">$10,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90">
              Schedule Consultation
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              We'll get back to you within 24 hours to confirm your consultation and discuss your project in detail.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
}