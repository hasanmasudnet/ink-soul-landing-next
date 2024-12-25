"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Palette className="h-6 w-6" />
            <span className="font-pacifico text-xl">Ink & Soul</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/about"
            className="transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/#styles"
            className="transition-colors hover:text-primary"
          >
            Styles
          </Link>
          <Link
            href="/#pricing"
            className="transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/#referrals"
            className="transition-colors hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            onClick={() => scrollToSection("booking")}
            className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}