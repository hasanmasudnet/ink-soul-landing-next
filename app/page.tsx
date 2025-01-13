import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { PortfolioSection } from "@/components/sections/portfolio";
import { PricingSection } from "@/components/sections/pricing";
import { ReferralsSection } from "@/components/sections/referrals";
import { BookingSection } from "@/components/sections/booking";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ReferralsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}