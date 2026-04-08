"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = Array.from({ length: 41 }, (_, i) => ({
  id: i + 1,
  image: `/images/image${i + 1}.png`,
}));

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="min-h-[100svh] bg-deep-navy grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.8]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <div className="flex flex-col justify-center px-[6vw] md:pl-[8vw] md:pr-[5vw] pt-28 pb-16 relative z-10">
        <div className="font-jost text-[0.72rem] font-medium tracking-[0.2em] uppercase text-gold mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-gold inline-block"></span> SVNIT Surat
        </div>
        
        <p className="font-cormorant text-[clamp(2rem,4vw,3.2rem)] font-light italic text-ivory/50 leading-[1.4] mb-4">
          भारतीय ज्ञान परंपरा एवं समग्र शिक्षा केन्द्र
        </p>
        
        <h1 className="font-cormorant text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.15] text-[#FAF7F0] mb-7">
          Centre for <em className="text-saffron not-italic">Indian Knowledge</em> Systems &amp; Holistic Education
        </h1>
        
        <a href="#tabs-section" className="inline-flex items-center gap-2 bg-saffron text-[#FAF7F0] px-8 py-3 text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:bg-[#A8401A] hover:translate-x-1 transition-all w-max after:content-['→']">
          Explore More
        </a>
      </div>

      <div className="relative overflow-hidden h-[280px] md:h-auto">
        <div className="absolute inset-y-0 left-0 w-[120px] z-10 bg-gradient-to-r from-deep-navy to-transparent pointer-events-none"></div>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${currentSlide === index ? "opacity-50" : "opacity-0"}`}
            style={{ filter: "sepia(30%)" }}
          >
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}