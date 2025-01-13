"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Palette } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      scrollToSection(id);
    }
  };

  if (!mounted) {
    return null;
  }

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
        <div className="mr-4 md:mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <Palette className="h-6 w-6" />
            <span className="font-pacifico text-xl">Ink & Soul</span>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/about"
            className="transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/#services"
            className="transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/#portfolio"
            className="transition-colors hover:text-primary"
          >
            Portfolio
          </Link>
          <Link
            href="/#pricing"
            className="transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/#testimonials"
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
            className="hidden md:inline-flex bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
          >
            Book Consultation
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] pr-0 [&>button]:hidden"
            >
              <div className="flex justify-between items-center pb-4 mb-4">
                <SheetTitle className="font-pacifico text-xl">Menu</SheetTitle>
                <SheetClose asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-transparent"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/about"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => handleNavClick('/about')}
                >
                  About
                </Link>
                <Link
                  href="/#services"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => handleNavClick('/#services')}
                >
                  Services
                </Link>
                <Link
                  href="/#portfolio"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => handleNavClick('/#portfolio')}
                >
                  Portfolio
                </Link>
                <Link
                  href="/#pricing"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => handleNavClick('/#pricing')}
                >
                  Pricing
                </Link>
                <Link
                  href="/#testimonials"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => handleNavClick('/#testimonials')}
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => handleNavClick('/contact')}
                >
                  Contact
                </Link>
                <Button
                  onClick={() => scrollToSection("booking")}
                  className="w-full bg-[#FFD700] text-black hover:bg-[#FFD700]/90"
                >
                  Book Consultation
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}