"use client";

import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/sections/footer";
import { StudioHistory } from "@/components/sections/about/studio-history";
import { CoreValues } from "@/components/sections/about/core-values";
import { StudioGallery } from "@/components/sections/about/studio-gallery";
import { TeamHighlights } from "@/components/sections/about/team-highlights";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MainNav />
      <StudioHistory />
      <CoreValues />
      <StudioGallery />
      <TeamHighlights />
      <Footer />
    </main>
  );
}