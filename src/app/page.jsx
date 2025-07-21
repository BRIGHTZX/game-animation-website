"use client";
import AboutSection from "@/components/AboutSection";
import CardSection from "@/components/CardSection";
import FeaturesSection from "@/components/FeaturesSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import PoweredBySection from "@/components/PoweredBySection";
import StorySection from "@/components/StorySection";
import TextChangeColorSection from "@/components/TextChangeColorSection";
import UpdateSection from "@/components/UpdateSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import useLenisScroll from "@/hooks/useLenis";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useLenisScroll();
  return (
    <div>
      <PageLoader isLoading={isLoading} />
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
        <FooterSection />
      </main>
    </div>
  );
}
