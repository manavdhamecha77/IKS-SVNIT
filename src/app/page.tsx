// app/page.tsx
"use client";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import TabsSection from "@/components/TabsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <main className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <HeroSection />
        <TabsSection />
        <Footer />
      </main>
    </>
  );
}