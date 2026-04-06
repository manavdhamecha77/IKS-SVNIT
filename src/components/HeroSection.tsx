"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = Array.from({ length: 41 }, (_, i) => ({
  id: i + 1,
  image: `/images/image${i + 1}.png`,
}));

const tabs = [
  { id: "about", label: "About" },
  { id: "objectives", label: "Objectives" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "phd", label: "Ph.D. Programme" },
  { id: "advisors", label: "Advisors" },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [accentColor, setAccentColor] = useState("#1d4ed8");

  const accentColors = [
    "#1e40af", // blue-800
    "#4338ca", // indigo-700
    "#b45309", // amber-700
    "#047857", // emerald-700
    "#be185d", // pink-700
    "#6d28d9", // violet-700
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const colorInterval = setInterval(() => {
      setAccentColor(accentColors[Math.floor(Math.random() * accentColors.length)]);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(slideInterval);
      clearInterval(colorInterval);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen bg-[#fcfdfd] font-sans overflow-hidden">

      {/* ─── Navigation (Initial Navbar Restored) ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between
        ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}
      >
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-110">
            <div className="absolute inset-0 bg-blue-600/5 rounded-full scale-150 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Image src="/logo/svnit.png" alt="SVNIT" fill className="object-contain relative z-10" />
          </div>
          <div className="border-l-2 border-slate-200 pl-4 py-1">
            <p className="font-black text-[10px] md:text-xs tracking-[0.25em] uppercase text-slate-900 leading-none mb-1.5">SVNIT SURAT</p>
            <p className="text-[9px] font-black text-blue-600 uppercase tracking-widest leading-none">Centre for IKSHE</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" })}
              className="text-[10px] font-black tracking-[0.25em] text-slate-500 hover:text-blue-700 transition-all relative group/nav"
            >
              {tab.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover/nav:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`lg:hidden relative z-[60] w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none transition-all rounded-full
          ${!isScrolled && !isMenuOpen ? "bg-white/20 backdrop-blur-md border border-white/30" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-slate-900" : (isScrolled ? "bg-slate-900" : "bg-slate-900")}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : (isScrolled ? "bg-slate-900" : "bg-slate-900")}`} />
          <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-slate-900" : (isScrolled ? "bg-slate-900" : "bg-slate-900")}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[55] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setIsMenuOpen(false);
                document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg font-black uppercase tracking-[0.3em] text-slate-900 hover:text-blue-600 transition-all"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      {/* ─── Decorative Corner Brackets (Institutional Look) ─── */}
      <div className="absolute top-24 md:top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-slate-200 pointer-events-none opacity-50" />
      <div className="absolute top-24 md:top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-slate-200 pointer-events-none opacity-50" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-slate-200 pointer-events-none opacity-50" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-slate-200 pointer-events-none opacity-50" />

      {/* ─── Hero Title Section ─── */}
      <div className="relative pt-40 md:pt-48 pb-12 px-6 text-center z-10 max-w-6xl mx-auto">

        {/* Main Headings */}
        <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="flex flex-col items-center">
            <div className="w-24 h-2 rounded-full bg-blue-600 mb-8 blur-[0.5px] animate-pulse" />
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-snug md:leading-tight mb-4"> भारतीय ज्ञान परंपरा एवं <br className="hidden md:block" />
              <span className="transition-colors duration-1000 ease-in-out" style={{ color: accentColor }}> समग्र शिक्षा केन्द्र</span>
            </h1>
            <div className="h-1 w-40 bg-slate-100 rounded-full mb-8" />
            <h2 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-[0.2em] max-w-4xl mx-auto leading-relaxed">
              Centre for Indian Knowledge Systems <br className="hidden md:block" />
              <span 
                className="transition-colors duration-1000 ease-in-out opacity-80"
                style={{ color: accentColor }}
              >& Holistic Education</span>
            </h2>
          </div>
        </div>

      </div>

      {/* ─── Carousel Section (DYNAMIC PHOTOGRAPHS) ─── */}
      <section className={`relative max-w-[95vw] 2xl:max-w-7xl mx-auto px-2 md:px-6 mb-24 transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
        <div className="relative aspect-[4/5] md:aspect-[3/2] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-50 shadow-[0_25px_60px_rgba(0,0,0,0.2)] border-[8px] md:border-[16px] border-white group">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${currentSlide === index ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={slide.image}
                alt={`Slide ${slide.id}`}
                fill
                className="object-scale-down"
                priority={index === 0}
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
          ))}

          {/* Carousel Buttons */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl text-white border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-blue-900 shadow-xl z-20"
          >
            <span className="text-xl font-bold">←</span>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl text-white border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-blue-900 shadow-xl z-20"
          >
            <span className="text-xl font-bold">→</span>
          </button>


        </div>
      </section>

      {/* ─── Intro Text Area (ABOUT) ─── */}
      <section id="about" className={`max-w-4xl mx-auto px-6 pb-32 text-center transition-all duration-1000 delay-900 scroll-mt-32 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-[3.5rem] -rotate-1 opacity-50 group-hover:rotate-0 transition-all duration-700" />
          <div className="relative bg-white p-10 md:p-14 rounded-[3rem] border-2 border-slate-50 shadow-xl shadow-blue-900/5">
            <p className="text-slate-700 text-xl md:text-2xl font-semibold leading-relaxed text-left border-l-8 border-blue-600 pl-10">
              The <span className="text-blue-600 font-black">Centre for Indian Knowledge Systems and Holistic Education</span> is a multidisciplinary hub dedicated to bridging ancient wisdom with contemporary research.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <button
            onClick={() => document.getElementById('objectives')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-14 py-6 bg-slate-900 text-white font-black rounded-full hover:bg-blue-600 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(30,41,59,0.2)] active:scale-95 flex items-center gap-6 mx-auto group"
          >
            <span className="tracking-[0.2em] uppercase text-sm">Explore More</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[100%] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/20 rounded-tr-[100%] pointer-events-none -z-10" />

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left text-[8px] font-black tracking-[1em] text-slate-200 pointer-events-none px-12">
        Established at SVNIT, Surat
      </div>

    </div>
  );
}