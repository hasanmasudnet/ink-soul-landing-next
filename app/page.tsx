import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/sections/hero";
import { ArtistsSection } from "@/components/sections/artists";
import { DesignersSection } from "@/components/sections/designers";
import { FeaturedWorkSection } from "@/components/sections/featured-work";
import { TattooStylesSection } from "@/components/sections/tattoo-styles";
import { PricingSection } from "@/components/sections/pricing";
import { ReferralProgramSection } from "@/components/sections/referral-program";
import { ReferralsSection } from "@/components/sections/referrals";
import { BookingSection } from "@/components/sections/booking";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      <HeroSection />
      <FeaturedWorkSection />
      <TattooStylesSection />
      <ArtistsSection />
      <DesignersSection />
      <PricingSection />
      <ReferralProgramSection />
      <ReferralsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}