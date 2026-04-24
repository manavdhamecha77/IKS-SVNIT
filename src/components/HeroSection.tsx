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
    <section className="min-h-[100svh] bg-deep-navy flex flex-col relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.8]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A017' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      <header className="relative z-10 bg-deep-navy border-b-4 border-saffron px-4 sm:px-6 md:px-10 lg:px-14 py-4 md:py-5">
        <div className="mx-auto max-w-[1800px] min-h-[92px] md:min-h-[112px] grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 sm:gap-6">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0">
            <Image src="/logo/logo.png" alt="IKS Logo" fill className="object-contain" priority />
          </div>
          <div className="flex flex-col items-center justify-center text-center text-[#FAF7F0] leading-tight h-full">
            <p className="font-cormorant text-[0.82rem] sm:text-[1.08rem] md:text-[1.6rem] lg:text-[1.9rem] font-semibold tracking-[0.05em] sm:tracking-[0.07em] uppercase">
              CENTRE FOR INDIAN KNOWLEDGE SYSTEMS AND HOLISTIC EDUCATION
            </p>
            <p className="font-cormorant text-[0.62rem] sm:text-[0.86rem] md:text-[1.15rem] lg:text-[1.3rem] font-semibold tracking-[0.04em] sm:tracking-[0.05em] uppercase mt-1">
              SARDAR VALLABHBHAI NATIONAL INSTITUTE OF TECHNOLOGY, SURAT
            </p>
          </div>
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0">
            <Image src="/logo/svnit.png" alt="SVNIT Logo" fill className="object-contain" priority />
          </div>
        </div>
      </header>

      <div className="relative z-10 grid flex-1 grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] min-h-0">
        <div className="order-2 md:order-1 flex flex-col items-center justify-center text-center h-full px-[6vw] md:px-[5vw] py-12 md:py-16 relative z-10 w-full min-w-0 overflow-hidden">
          <div className="flex flex-col items-center justify-center max-w-[560px] mx-auto">
            <h1 className="font-cormorant text-[2.45rem] sm:text-[2.8rem] md:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[1.08] text-[#FAF7F0] mb-4 text-center md:text-center">
              भारतीय ज्ञान परंपरा एवं <br />
              समग्र शिक्षा केन्द्र
            </h1>

            <p className="font-cormorant text-[1.35rem] sm:text-[1.55rem] md:text-[clamp(1.8rem,3vw,2.5rem)] font-light italic text-[#FAF7F0]/90 leading-[1.28] mb-6">
              Centre for <span className="text-saffron not-italic">Indian Knowledge Systems</span> <br className="md:hidden" />
              <span className="text-saffron not-italic">&amp; Holistic Education</span> welcomes you
            </p>

            <p className="mb-6 w-full max-w-full whitespace-normal md:whitespace-nowrap text-center font-cormorant text-[1.08rem] sm:text-[1.2rem] md:text-[clamp(0.85rem,1.15vw,1.2rem)] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.16em] leading-[1.22] text-transparent bg-clip-text bg-[length:300%_300%] animate-gradient-shift drop-shadow-[0_2px_10px_rgba(12,27,58,0.35)] break-words">
              BHARATIYA KNOWLEDGE SYSTEMS <br />
              AND HOLISTIC EDUCATION
            </p>

            <a href="#about" className="inline-flex self-center md:self-start items-center justify-center gap-2 bg-saffron text-[#FAF7F0] px-6 py-2.5 text-[0.7rem] sm:text-[0.8rem] font-medium tracking-[0.08em] sm:tracking-[0.1em] uppercase hover:bg-[#A8401A] hover:translate-x-1 transition-all w-max mt-4 after:content-['→']">
              Explore More
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative overflow-hidden h-[320px] md:h-full md:min-h-0 px-4 sm:px-6 md:px-8 lg:px-12 py-4 md:py-8">
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
      </div>
    </section>
  );
}
