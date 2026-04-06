// components/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Vedic Sciences",
    desc: "Exploring the mathematical, astronomical, and scientific contributions embedded in ancient Indian texts and scriptures.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Holistic Education",
    desc: "An integrated approach combining intellectual, physical, emotional, and spiritual growth for complete personality development.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Yoga & Wellness",
    desc: "Research and practice of Yoga, Ayurveda, and traditional wellness systems backed by contemporary scientific validation.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Cultural Heritage",
    desc: "Preservation and propagation of India's rich cultural heritage — arts, literature, philosophy, and language traditions.",
  },
];

const stats = [
  { value: "10+", label: "Research Areas" },
  { value: "50+", label: "Scholars" },
  { value: "25+", label: "Publications" },
  { value: "5+", label: "National Collaborations" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-orange-50 blur-3xl pointer-events-none opacity-60" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-50 blur-3xl pointer-events-none opacity-60" />

      {/* Decorative mandala-inspired pattern */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.04]">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#f97316" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="160" stroke="#f97316" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="130" stroke="#f97316" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke="#f97316" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="70" stroke="#f97316" strokeWidth="0.5" />
          {/* Radial lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={200 + 70 * Math.cos(angle)}
                y1={200 + 70 * Math.sin(angle)}
                x2={200 + 190 * Math.cos(angle)}
                y2={200 + 190 * Math.sin(angle)}
                stroke="#f97316"
                strokeWidth="0.5"
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span className="text-orange-600 text-xs font-semibold tracking-widest uppercase">
              About the Centre
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Bridging{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Ancient Wisdom
            </span>{" "}
            with Modern Science
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            The Centre of Excellence for Indian Knowledge Systems &amp; Holistic Education
            at SVNIT Surat is a pioneering initiative dedicated to the systematic study,
            research and propagation of India&apos;s timeless intellectual traditions.
            Established with the vision of integrating ancient wisdom into contemporary
            education, it serves as a multidisciplinary hub fostering holistic development.
          </p>
        </div>

        {/* Vision & Mission cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20 transition-all duration-700 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>

          {/* Vision */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:shadow-orange-100/50">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-orange-100/40 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a globally recognized centre for research, education, and
                outreach in Indian Knowledge Systems, fostering an ecosystem where
                ancient wisdom and modern science converge for the holistic advancement
                of humanity.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg hover:shadow-amber-100/50">
            <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-amber-100/40 pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To conduct cutting-edge research, develop academic programmes,
                and create awareness about the rich intellectual heritage of India
                through interdisciplinary collaboration, bridging traditional
                knowledge systems with contemporary scientific methodology.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className={`mb-16 md:mb-20 transition-all duration-700 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h3 className="text-center text-lg font-semibold text-gray-800 mb-8">
            <span className="text-orange-500">Core</span> Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md hover:shadow-orange-100/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-amber-100 text-orange-500 flex items-center justify-center mb-4 group-hover:from-orange-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{pillar.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50/80 to-amber-50/80 border border-orange-100/60"
              >
                <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="inline-flex flex-col items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100">
            <p className="text-orange-500 text-lg md:text-xl font-semibold italic">
              &ldquo;तमसो मा ज्योतिर्गमय&rdquo;
            </p>
            <p className="text-gray-400 text-xs tracking-widest uppercase">
              From darkness, lead me to light
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
