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
    color: "bg-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Health and Wellbeing",
    color: "bg-emerald-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Ancient Scriptures and Modern Research",
    color: "bg-amber-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Integrative Studies on the Levels of Existence",
    color: "bg-indigo-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "Scientific Studies on Yoga and Meditation",
    color: "bg-rose-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.828a5 5 0 117.07 0m-4.242-4.242a1 1 0 111.414 0" />
      </svg>
    )
  },
  {
    title: "Shrimad Bhagvad Gita in Current Context",
    color: "bg-orange-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Singularity and Artificial Intelligence: Evolutionary Awakening",
    color: "bg-slate-700",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Intelligent Integration of Education and Science in Light of Madhyasth Darshan",
    color: "bg-cyan-600",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "Vedantic Science and Life Management",
    color: "bg-yellow-500",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

export default function TabsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("objectives");
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
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">
        {children}
      </h2>
      {subtitle && <p className="text-slate-400 font-bold tracking-widest text-xs">{subtitle}</p>}
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-[#fcfdfd] py-12">
      <div className={`max-w-6xl mx-auto px-6 relative transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>

        {/* ─── Introductory Text ─── */}
        <div className="text-center mb-16">
          <p className="text-slate-700 text-xl md:text-2xl font-semibold leading-relaxed max-w-4xl mx-auto">
            The <span className="text-blue-600 font-black">Centre for Indian Knowledge Systems and Holistic Education</span> is a multidisciplinary hub for research on all aspects of Indian Knowledge Systems.
          </p>
        </div>

        {/* ─── Tab Navigation ─── */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 pb-4 border-b border-slate-100 sticky top-0 bg-[#fcfdfd]/80 backdrop-blur-md z-40">
          {[
            { id: "objectives", label: "Objectives" },
            { id: "vision", label: "Vision" },
            { id: "mission", label: "Mission" },
            { id: "courses", label: "Courses" },
            { id: "phd", label: "Ph.D. Programme" },
            { id: "advisors", label: "Advisors" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300
                ${activeTab === tab.id 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105" 
                  : "bg-white text-slate-500 hover:text-blue-600 hover:bg-blue-50 border border-slate-100"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── Objectives ─── */}
        {activeTab === "objectives" && (
          <div id="objectives" className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SectionTitle gradient="from-blue-600 to-indigo-600">Objectives</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Technical hub for Ph.D. research in ancient indigenous knowledge and ancient wisdom.",
                "Disseminate knowledge for innovations and diverse societal applications.",
                "Offer credit and non-credit courses for holistic student growth.",
                "Spread wellness-focused knowledge to the global general public."
              ].map((obj, i) => (
                <div key={i} className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 flex gap-6 items-start hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 font-black flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Vision & Mission ─── */}
        {activeTab === "vision" && (
          <div id="vision" className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SectionTitle gradient="from-blue-600 to-blue-400">Vision</SectionTitle>
            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed max-w-4xl">
              Establishing SVNIT Surat as a global frontier leader in disseminating{" "}
              <span className="text-blue-600 font-black">Indian Knowledge Systems</span> for Holistic Education, rooted in the philosophy of{" "}
              <span className="font-kurale italic text-slate-900 drop-shadow-none">
                ‘Vasudhaiva Kutumbakam’
              </span>.
            </p>
          </div>
        )}

        {activeTab === "mission" && (
          <div id="mission" className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SectionTitle gradient="from-blue-600 to-indigo-600">Mission</SectionTitle>
            <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed max-w-4xl">
              Facilitating a journey from <span className="text-blue-600 font-black">Head to Heart</span> by integrating profound ancient wisdom with modern education for integrated advancement.
            </p>
          </div>
        )}

        {/* ─── Courses & Expert Interaction ─── */}
        {activeTab === "courses" && (
          <div id="courses" className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SectionTitle gradient="from-blue-700 to-indigo-600">Academic Courses</SectionTitle>
            <p className="text-slate-700 text-xl md:text-2xl font-semibold leading-relaxed max-w-4xl">
              The centre proposes to offer <span className="text-blue-600 font-black">courses (credit as well as non-credit)</span> to be taught jointly by <span className="text-blue-900">eminent experts invited from various parts of the country</span>, along with faculty members from SVNIT Surat, providing students a rare opportunity for deep interactive engagement.
            </p>
          </div>
        )}

        {/* ─── Ph.D. Programme ─── */}
        {activeTab === "phd" && (
          <div id="phd" className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col mb-12 px-4 md:px-6">
              <SectionTitle gradient="from-blue-700 to-amber-500" subtitle="Broad Research Areas include (but not limited to)">Ph.D. Programme</SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {phdAreas.map((area, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-600/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="flex-1 p-10 flex flex-col relative z-10">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 leading-snug tracking-tight group-hover:text-blue-700 transition-colors">
                        {area.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Advisors ─── */}
        {activeTab === "advisors" && (
          <div id="advisors" className="mb-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SectionTitle gradient="from-amber-500 to-orange-500">Advisors</SectionTitle>
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
        )}

      </div>
    </section>
  );
}
