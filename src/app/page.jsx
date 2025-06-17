"use client";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import useLenisScroll from "@/hooks/useLenis";

export default function Home() {
  useLenisScroll();
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="h-screen w-screen overflow-x-hidden bg-black" />
    </main>
  );
}
