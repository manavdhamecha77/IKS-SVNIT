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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="relative min-h-screen flex flex-col font-sans">
      
      {/* 1. Header / Navbar (Sticky & Glassmorphism) */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between
        ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent text-white"}`}
      >
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/logo/svnit.png"
              alt="SVNIT Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden md:block">
            <p className={`font-bold text-sm tracking-widest uppercase transition-colors ${isScrolled ? "text-blue-900" : "text-white"}`}>
              SVNIT Surat
            </p>
            <p className={`text-[10px] font-medium opacity-80 uppercase transition-colors ${isScrolled ? "text-blue-600" : "text-white/80"}`}>
              Centre for IKS & Holistic Education
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95
              ${isScrolled 
                ? (activeTab === tab.id ? "text-blue-600" : "text-gray-600 hover:text-blue-500") 
                : (activeTab === tab.id ? "text-amber-400" : "text-white/80 hover:text-white")}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <button className="lg:hidden p-2 rounded-full border border-current opacity-70">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* 2. Hero Body with Hexagonal Background Grid */}
      <section className="relative flex-grow min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        
        {/* Hexagonal Grid Layer */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 scale-110 -rotate-12 translate-x-[-10%] translate-y-[-10%]">
            {Array.from({ length: 48 }).map((_, i) => (
              <div 
                key={i} 
                className={`hexagon aspect-[0.86] w-full bg-gradient-to-br transition-all duration-1000 animate-pulse-soft
                ${i % 7 === 0 ? "from-amber-400 to-orange-500 scale-90" : 
                  i % 5 === 0 ? "from-blue-500 to-indigo-700" : 
                  i % 3 === 0 ? "from-slate-700 to-slate-800" : "from-slate-800 to-slate-900"}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Randomly place images in some hexagons */}
                {i % 11 === 0 && (
                  <div className="w-full h-full opacity-60 mix-blend-overlay">
                    <div className="w-full h-full bg-gray-500" /> {/* Placeholder for image */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse stagger-5" />

        {/* Content Overlay */}
        <div className="relative z-10 max-w-6xl px-6 py-32 text-center flex flex-col items-center">
          
          <div className="inline-block mb-6 animate-fade-in-up">
            <p className="text-amber-400 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-2 drop-shadow-sm">
              Welcome to the Centre of Excellence
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1] animate-fade-in-up stagger-1">
            <span className="block text-amber-50 rounded-lg px-4 py-2 border border-white/10 backdrop-blur-sm bg-white/5 mb-4">
              भारतीय ज्ञान परंपरा एवं समग्र शिक्षा केन्द्र
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Centre for Indian Knowledge Systems and Holistic Education
            </span>
          </h1>

          <p className="text-blue-100/90 text-lg md:text-2xl font-medium max-w-3xl mb-12 leading-relaxed animate-fade-in-up stagger-2">
            Pioneering the synthesis of <span className="text-amber-300 font-bold">Ancient Wisdom</span> and <span className="text-blue-300 font-bold">Modern Science</span> for the next generation of global citizens.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up stagger-3">
            <button 
              onClick={() => document.getElementById('objectives')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-amber-500 text-blue-950 font-black rounded-full hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2 group"
            >
              EXPLORE OUR MISSION
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold border border-white/20 rounded-full hover:bg-white/20 hover:scale-105 active:scale-95 transition-all"
            >
              VIEW GALLERY
            </button>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <p className="text-[10px] text-white font-bold tracking-widest uppercase">Scroll Down</p>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>

      </section>

      {/* 3. Subtle Transition to Content */}
      <div className="h-24 bg-gradient-to-b from-slate-900 to-white" />
    </div>
  );
}