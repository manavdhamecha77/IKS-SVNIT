"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const photographs = [
  { src: null as string | null, alt: "Photograph 1" },
  { src: null as string | null, alt: "Photograph 2" },
  { src: null as string | null, alt: "Photograph 3" },
  { src: null as string | null, alt: "Photograph 4" },
  { src: null as string | null, alt: "Photograph 5" },
  { src: null as string | null, alt: "Photograph 6" },
  { src: null as string | null, alt: "Photograph 7" },
  { src: null as string | null, alt: "Photograph 8" },
];

const tabs = [
  { id: "objectives", label: "Objectives" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "courses", label: "Courses" },
  { id: "phd", label: "Ph.D. Programme" },
  { id: "gallery", label: "Gallery" },
  { id: "advisors", label: "Advisors" },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("objectives");
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => {
      let next;
      do {
        next = Math.floor(Math.random() * photographs.length);
      } while (next === prev);
      return next;
    });
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  // Handle intersection observer to auto-highlight tabs on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative pt-24 pb-12 bg-white flex flex-col items-center text-center px-4">
      {/* 1. Sanskrit Title (Red) */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#e11d48] mb-6 tracking-wide animate-fade-in">
        भारतीय ज्ञान परंपरा एवं समग्र शिक्षा केन्द्र
      </h1>

      {/* 2. English Title (Blue) */}
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#2563eb] mb-10 max-w-4xl leading-tight animate-fade-in stagger-1">
        Centre for Indian Knowledge Systems and Holistic Education welcomes you.
      </h2>

      {/* 3. Logo */}
      <div className="mb-10 animate-fade-in stagger-2">
        <Image
          src="/logo/svnit.png"
          alt="SVNIT Logo"
          width={128}
          height={128}
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </div>

      {/* 4. Dynamic Photographs Carousel */}
      <div className="w-full max-w-5xl mb-12 animate-fade-in stagger-4">
        {/* <p className="text-blue-500 font-bold text-lg mb-6 tracking-widest uppercase">
          DYNAMIC PHOTOGRAPHS
        </p> */}
        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group translate-z-0">
          {photographs.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
            >
              {img.src ? (
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-300">
                  <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photographs.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/40"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* 5. TABS (Links with Scroll Sync) */}
      <div className="mb-8 animate-fade-in stagger-3 sticky top-0 py-4 bg-white/90 backdrop-blur-sm z-40 w-full">
        {/* <p className="text-blue-500 font-bold text-lg mb-4 tracking-widest uppercase border-b-2 border-blue-100 inline-block px-4">
          TABS
        </p> */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-2 max-w-7xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`
                text-sm md:text-lg font-extrabold transition-all duration-300 tracking-wider whitespace-nowrap
                ${activeTab === tab.id 
                  ? "text-[#2563eb] border-b-2 border-[#2563eb] pb-1 scale-105" 
                  : "text-gray-400 hover:text-[#2563eb]"
                }
              `}
            >
              {tab.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* 6. Intro Paragraph */}
      <div className="max-w-4xl animate-fade-in stagger-5 mb-12">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium italic">
          The Centre for Indian Knowledge Systems and Holistic Education is a multidisciplinary hub for research on all aspects of Indian Knowledge Systems.
        </p>
      </div>

      {/* 7. Instructions */}
      <div className="text-green-600 font-medium text-sm md:text-base animate-pulse">
        <p>All blue headings below will be different sections.</p>
        <p>Click labels above to jump to sections exactly, or scroll freely ok?</p>
      </div>
    </section>
  );
}