"use client";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import useLenisScroll from "@/hooks/useLenis";

export default function Home() {
  useLenisScroll();
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  );
}
