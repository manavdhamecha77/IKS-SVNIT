"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

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
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMenuOpen) {
      // Show first then animate
      gsap.set(mobileMenuRef.current, { display: "flex" });
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(mobileMenuRef.current, { display: "none" });
        }
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="relative min-h-screen bg-[#fcfdfd] font-sans overflow-hidden">

      {/* ─── Navigation (Initial Navbar Restored) ─── */}
      {/* ─── Navigation (Commented Out per Request) ───
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between
        ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}
      >
        ...
      </header>
      */}

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
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-snug md:leading-tight mb-8"> भारतीय ज्ञान परंपरा एवं <br className="hidden md:block" />
              <span className="transition-colors duration-1000 ease-in-out" style={{ color: accentColor }}> समग्र शिक्षा केन्द्र</span>
            </h1>

            <div className="h-1 w-40 bg-slate-100 rounded-full mb-8" />
            <h2 className="text-xl md:text-2xl text-slate-500 font-bold uppercase tracking-[0.2em] max-w-4xl mx-auto leading-relaxed">
              Centre for Indian Knowledge Systems <br className="hidden md:block" />
              <span 
                className="transition-colors duration-1000 ease-in-out opacity-80"
                style={{ color: accentColor }}
              >& Holistic Education welcomes you</span>
            </h2>
            <p className="mt-8 text-blue-600 font-black tracking-widest uppercase text-sm animate-pulse"></p>
            {/* SVNIT Logo Added Here */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 animate-in fade-in zoom-in duration-1000">
              <Image src="/logo/svnit.png" alt="SVNIT Logo" fill className="object-contain" />
            </div>
          </div>
        </div>

      </div>

      

      {/* ─── Carousel Section (DYNAMIC PHOTOGRAPHS) ─── */}
      <section className={`relative max-w-[95vw] 2xl:max-w-7xl mx-auto px-2 md:px-6 mb-24 transition-all duration-1000 delay-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
        <div className="relative aspect-[4/5] md:aspect-[3/2] rounded-3xl overflow-hidden bg-slate-50 shadow-2xl border border-slate-100 group">
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

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[100%] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/20 rounded-tr-[100%] pointer-events-none -z-10" />

      

    </div>
  );
}