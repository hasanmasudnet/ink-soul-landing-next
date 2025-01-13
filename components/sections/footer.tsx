import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-pacifico text-xl mb-4">Creative Soul</h3>
            <p className="text-muted-foreground max-w-md">
              Transforming ideas into exceptional creative works. We specialize in bringing your vision to life through expert craftsmanship and innovative design.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-primary">Services</Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-primary">Portfolio</Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-primary">Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <address className="text-muted-foreground not-italic space-y-2">
              <p>123 Creative Avenue</p>
              <p>Design District</p>
              <p>
                <a href="mailto:hello@creativesoul.com" className="hover:text-primary">
                  hello@creativesoul.com
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-primary">
                  (555) 123-4567
                </a>
              </p>
            </address>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 6pm<br />
                Saturday: By appointment<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p> {new Date().getFullYear()} Creative Soul Studio. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            {" • "}
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}