"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const mobileSlides = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  image: `/images/mobile/image${i}.png`,
}));

const desktopSlides = Array.from({ length: 11 }, (_, i) => ({
  id: i,
  image: `/images/desktop/image${i}.png`,
}));

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile,     setIsMobile] = useState(false);

  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  return (
    <section className="min-h-[100svh] bg-deep-navy grid grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.8]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <div className="order-2 md:order-1 flex flex-col items-center justify-center md:items-start md:justify-center text-center md:text-left h-full px-[6vw] md:px-[5vw] py-12 md:py-16 relative z-10 w-full min-w-0 overflow-hidden">

        {/* Top Logo Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-auto pb-12 animate-fade-in-up">
          <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
            <Image src="/logo/svnit.png" alt="SVNIT Logo" fill className="object-contain" />
          </div>
          <h2 className="text-[#FAF7F0] font-cormorant text-[1.6rem] md:text-4xl font-bold tracking-wide opacity-95 leading-snug md:mt-2 max-w-[320px] md:max-w-none">
            Sardar Vallabhbhai National <br className="md:hidden" />Institute of Technology, Surat
          </h2>
        </div>

        <div className="mb-auto flex flex-col items-center md:items-start max-w-[360px] md:max-w-none mx-auto md:mx-0">

          <h1 className="font-cormorant text-[2.2rem] md:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[1.15] text-[#FAF7F0] mb-5">
            भारतीय ज्ञान परंपरा एवं <br className="md:hidden" />समग्र शिक्षा केन्द्र
          </h1>

          <p className="font-cormorant text-[1.25rem] sm:text-[1.5rem] md:text-[clamp(1.8rem,3vw,2.5rem)] font-light italic text-[#FAF7F0]/90 leading-[1.4] mb-8">
            Centre for <span className="text-saffron not-italic">Indian Knowledge Systems</span> <br className="md:hidden" />
            <span className="text-saffron not-italic">&amp; Holistic Education</span> welcomes you
          </p>

          <p className="mb-8 w-full max-w-full whitespace-normal md:whitespace-nowrap text-center font-cormorant text-[clamp(0.85rem,1.15vw,1.2rem)] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] leading-[1.4] text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-shift drop-shadow-[0_2px_10px_rgba(12,27,58,0.35)] break-words">
            BHARATIYA KNOWLEDGE SYSTEMS AND HOLISTIC EDUCATION
          </p>

          <a href="#about" className="inline-flex self-center md:self-start items-center justify-center gap-2 bg-saffron text-[#FAF7F0] px-8 py-3 text-[0.8rem] font-medium tracking-[0.1em] uppercase hover:bg-[#A8401A] hover:translate-x-1 transition-all w-max after:content-['→']">
            Explore More
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2 relative overflow-hidden h-[320px] md:h-full md:min-h-[100svh] px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-8">
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
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
      </div>
    </section>
  );
}
