"use client";
import AboutSection from "@/components/AboutSection";
import CardSection from "@/components/CardSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PoweredBySection from "@/components/PoweredBySection";
import StorySection from "@/components/StorySection";
import TextChangeColorSection from "@/components/TextChangeColorSection";
import UpdateSection from "@/components/UpdateSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import useLenisScroll from "@/hooks/useLenis";

export default function Home() {
  useLenisScroll();
  return (
    <main className="w-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <StorySection />
      <PoweredBySection />
      <WhoWeAreSection />
      <CardSection />
      <TextChangeColorSection />
      <UpdateSection />
    </main>
  );
}
