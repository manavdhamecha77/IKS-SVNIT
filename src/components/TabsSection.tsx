"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

// Gallery images populated with all 41 images
const galleryImages = Array.from({ length: 41 }).map((_, i) => ({
  src: `/images/image${i + 1}.png`,
  alt: `Gallery Image ${i + 1}`
}));

const phdAreas = [
  {
    title: "Absolute Intelligence",
    color: "from-blue-600 to-indigo-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Health and Wellbeing",
    color: "from-emerald-500 to-teal-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Ancient Scriptures and Modern Research",
    color: "from-amber-500 to-orange-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Integrative studies on the Levels of Existence",
    color: "from-indigo-600 to-violet-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "Scientific Studies on Yoga and Meditation",
    color: "from-rose-500 to-pink-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.828a5 5 0 117.07 0m-4.242-4.242a1 1 0 111.414 0" />
      </svg>
    )
  },
  {
    title: "Shrimad Bhagvad Gita in Current Context",
    color: "from-orange-500 to-red-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Singularity and Artificial Intelligence: Evolutionary Awakening",
    color: "from-slate-600 to-slate-800",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Intelligent Integration of Education and Science in Light of Madhyasth Darshan",
    color: "from-cyan-500 to-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "Vedantic Science and Life Management",
    color: "from-yellow-500 to-amber-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

export default function TabsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [galleryPage, setGalleryPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [imagesPerPage, setImagesPerPage] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      setImagesPerPage(window.innerWidth < 768 ? 4 : 8);
      setGalleryPage(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const nextGallery = useCallback(() => {
    setGalleryPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevGallery = useCallback(() => {
    setGalleryPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.05 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const SectionTitle = ({ children, gradient, subtitle }: { children: React.ReactNode, gradient: string, subtitle?: string }) => (
    <div className="mb-12 relative">
      <div className={`w-20 h-1.5 rounded-full bg-gradient-to-r ${gradient} mb-4`} />
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">
        {children}
      </h2>
      {subtitle && <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{subtitle}</p>}
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-[#fcfdfd] py-24">
      <div className={`max-w-6xl mx-auto px-6 relative transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>

        {/* ─── Objectives ─── */}
        <div id="objectives" className="mb-32 scroll-mt-32">
          <SectionTitle gradient="from-blue-600 to-indigo-600" subtitle="Our Core Goals">Objectives</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Technical hub for Ph.D. research in ancient indigenous knowledge and ancient wisdom.",
              "Disseminate knowledge for innovations and diverse societal applications.",
              "Offer credit and non-credit courses for holistic student growth.",
              "Spread wellness-focused knowledge to the global general public."
            ].map((obj, i) => (
              <div key={i} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 flex gap-6 items-start hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 font-black flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <p className="text-slate-600 text-lg font-medium leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Vision & Mission ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div id="vision" className="scroll-mt-32 p-10 bg-white rounded-[3rem] border-2 border-blue-50 shadow-xl relative overflow-hidden flex flex-col justify-center group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
            <SectionTitle gradient="from-blue-600 to-blue-400">Vision</SectionTitle>
            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed relative z-10">
              Establishing SVNIT Surat as a global frontier leader in disseminating <span className="text-blue-600 font-black">Indian Knowledge Systems</span> for Holistic Education, rooted in the philosophy of <span className="italic leading-loose">‘Vasudhaiv Kutumbakam’</span>.
            </p>
          </div>

          <div id="mission" className="scroll-mt-32 p-10 bg-white rounded-[3rem] border-2 border-amber-100 shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-50 rounded-tl-full pointer-events-none" />
            <SectionTitle gradient="from-blue-600 to-indigo-600">Mission</SectionTitle>
            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
              Facilitating a journey from <span className="text-blue-600 font-black">Head to Heart</span> by integrating profound ancient wisdom with modern education for integrated advancement.
            </p>
          </div>
        </div>

        {/* ─── Courses ───
        <div id="courses" className="mb-32 scroll-mt-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <SectionTitle gradient="from-emerald-500 to-teal-500" subtitle="Educational Programs">Courses</SectionTitle>
              <p className="text-slate-600 text-xl font-medium leading-relaxed mb-8">
                Taught jointly by invited eminent experts and SVNIT faculty, providing students a rare opportunity for deep interactive engagement.
              </p>
              <button className="px-8 py-3 bg-blue-700 text-white font-black rounded-full hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20">VIEW CATALOG</button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              <div className="aspect-square relative overflow-hidden rounded-[2rem] border border-emerald-100 shadow-xl group">
                <Image 
                  src="/images/image16.png" 
                  alt="SVNIT Course Gallery 1" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-[2rem] border border-teal-100 shadow-xl group">
                <Image 
                  src="/images/image17.png" 
                  alt="SVNIT Course Gallery 2" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 delay-150" 
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* ─── Ph.D. Programme ─── */}
        <div id="phd" className="mb-32 scroll-mt-32">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 px-6">
            <SectionTitle gradient="from-blue-700 to-amber-500" subtitle="Research Hub">Ph.D. Programme</SectionTitle>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-12">Academic Excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 items-stretch">
            {phdAreas.map((area, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg md:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 hover:-translate-y-2 border border-slate-100"
              >
                {/* 1. Dynamic Background Image with Depth */}
                <div className="relative h-32 md:h-56 overflow-hidden">
                  <Image 
                    src={`/images/image${18 + (i % 23)}.png`} 
                    alt={area.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.color} mix-blend-multiply opacity-20`} />
                </div>

                {/* 2. Content Section (Grows to Fill Space) */}
                <div className="flex-1 p-5 md:p-10 flex flex-col">
                  {/* Floating Icon */}
                  <div className={`-mt-10 md:-mt-20 relative z-20 w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-gradient-to-br ${area.color} p-2.5 md:p-4 text-white shadow-xl shadow-blue-500/10 mb-4 md:mb-8 group-hover:rotate-6 transition-transform`}>
                    {area.icon}
                  </div>
                  
                  {/* Title Area */}
                  <div className="flex-1">
                    <h4 className="text-[14px] md:text-2xl font-black text-slate-900 leading-tight tracking-tight mb-4 group-hover:text-blue-600 transition-colors">
                      {area.title}
                    </h4>
                  </div>
                  
                  {/* Footer Decoration */}
                  <div className="mt-auto">
                    <div className={`h-1.5 w-10 bg-gradient-to-r ${area.color} rounded-full group-hover:w-full transition-all duration-700`} />
                    <p className="text-[9px] font-black uppercase tracking-[0.35em] text-slate-300 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Academic Excellence
                    </p>
                  </div>
                </div>

                {/* Subtle Glow (Hover) */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-[2rem] md:rounded-[3rem] pointer-events-none transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* ─── Gallery ─── */}
        {/* <div id="gallery" className="mb-32 scroll-mt-32">
          <div className="flex items-end justify-between mb-12">
            <SectionTitle gradient="from-rose-500 to-pink-500" subtitle="Moments & Memories">Gallery</SectionTitle>
            <div className="flex gap-4 mb-12">
              <button onClick={prevGallery} className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-rose-500 hover:text-rose-500 transition-all font-black">←</button>
              <button onClick={nextGallery} className="w-12 h-12 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-slate-400 hover:border-rose-500 hover:text-rose-500 transition-all font-black">→</button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.slice(galleryPage * imagesPerPage, (galleryPage + 1) * imagesPerPage).map((img, i) => (
              <div key={i} className="aspect-square relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-[10px] font-black uppercase tracking-widest">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* ─── Advisors ─── */}
        <div id="advisors" className="scroll-mt-32">
          <SectionTitle gradient="from-amber-500 to-orange-500" subtitle="Academic Council">Advisors</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-40 h-40 rounded-full bg-slate-100 border-4 border-white shadow-xl mb-6 overflow-hidden relative group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                </div>
                <div className="h-4 w-32 bg-slate-200 rounded-full mb-2 animate-pulse" />
                <div className="h-3 w-24 bg-slate-100 rounded-full animate-pulse delay-100" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
