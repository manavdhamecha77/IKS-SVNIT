"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  { 
    id: 1, 
    title: "Vedic Science", 
    image: null, 
    color: "bg-blue-600",
    text: "Ancient Wisdom for Modern Innovations" 
  },
  { 
    id: 2, 
    title: "Holistic Health", 
    image: null, 
    color: "bg-amber-500",
    text: "Synthesizing Yoga & Contemporary Wellness" 
  },
  { 
    id: 3, 
    title: "Global Leadership", 
    image: null, 
    color: "bg-emerald-600",
    text: "Disseminating Indian Knowledge Systems Globally" 
  },
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col overflow-hidden bg-white">
      
      {/* 1. Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between
        ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-xl" : "bg-transparent"}`}
      >
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image src="/logo/svnit.png" alt="SVNIT" fill className="object-contain" />
          </div>
          <div>
            <p className="font-black text-xs md:text-sm tracking-widest uppercase text-blue-900">SVNIT SURAT</p>
            <p className="text-[10px] font-bold text-blue-600 uppercase opacity-70">Centre for IKS</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" })}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-blue-600 transition-colors"
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      {/* 2. Main Hero Content & Vertical Carousel Background */}
      <div className="relative flex-grow flex items-center pt-24">
        
        {/* Background Vertical Rectangles Grid */}
        <div className="absolute inset-0 z-0 grid grid-cols-3 md:grid-cols-6 h-full w-full gap-2 p-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-2xl transition-all duration-1000 ease-out
              ${(i + currentSlide) % 3 === 0 ? "h-full" : "h-3/4 self-center"}
              ${i % 2 === 0 ? "bg-slate-50" : "bg-blue-50/50"}`}
            >
              {/* Vertical Image frame placeholder */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/60" />
              <div className="absolute bottom-4 left-0 right-0 text-center opacity-10">
                <p className="text-[8px] font-black uppercase tracking-widest text-blue-900">Research Frame {i+1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-3 mb-6 bg-blue-600/10 px-4 py-2 rounded-full border border-blue-100 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">In pursuit of excellence</p>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black text-slate-950 mb-8 leading-[1.05] tracking-tighter">
              भारतीय ज्ञान परंपरा <br/>
              <span className="text-blue-700">CENTRE FOR IKS</span>
            </h1>
            
            <p className="max-w-xl text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-10">
              SVNIT Surat established the Centre for Indian Knowledge Systems and Holistic Education to bridge timeless wisdom with futuristic discovery.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('phd')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-blue-700 text-white font-black rounded-2xl hover:bg-blue-900 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
              >
                JOIN RESEARCH
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white text-blue-700 border-2 border-blue-100 font-black rounded-2xl hover:bg-blue-50 transition-all active:scale-95"
              >
                OUR WORK
              </button>
            </div>
          </div>

          {/* Vertical Carousel Feature Frame (Wider, Original Height, with Left Gap) */}
          <div className="flex-[1.6] w-full max-w-4xl aspect-[1.3] md:ml-16 relative group perspective-1000 hidden md:block">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform" />
            <div className="absolute inset-0 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 transform group-hover:-translate-y-4">
              {/* Vertical Image Slide */}
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay z-10" />
                <div className="absolute bottom-12 left-10 right-10 z-20 text-white">
                  <p className="text-amber-400 font-black text-xs tracking-widest uppercase mb-4">{slides[currentSlide].title}</p>
                  <h3 className="text-3xl font-black mb-4 leading-tight">{slides[currentSlide].text}</h3>
                  <div className="flex gap-2">
                    {slides.map((_, i) => (
                      <div key={i} className={`h-1 rounded-full transition-all duration-500 ${currentSlide === i ? "w-8 bg-amber-400" : "w-2 bg-white/30"}`} />
                    ))}
                  </div>
                </div>
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-950 flex items-center justify-center opacity-50">
                  <span className="text-white/20 text-8xl font-black">IKS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator overlay */}
      <div className="absolute bottom-10 left-12 hidden lg:flex flex-col items-center gap-4 opacity-30">
        <div className="w-px h-24 bg-gradient-to-b from-blue-700 to-transparent" />
        <p className="rotate-90 origin-left text-[10px] font-black tracking-widest text-blue-900 ml-1 translate-y-8">DISCOVER</p>
      </div>

    </div>
  );
}