"use client";

import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Vedic Sciences",
    color: "from-amber-400 to-orange-500",
    desc: "Exploring the mathematical, astronomical, and scientific contributions embedded in ancient Indian texts and scriptures.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Holistic Education",
    color: "from-blue-500 to-indigo-600",
    desc: "An integrated approach combining intellectual, physical, emotional, and spiritual growth for complete personality development.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Yoga & Wellness",
    color: "from-emerald-400 to-teal-600",
    desc: "Research and practice of Yoga, Ayurveda, and traditional wellness systems backed by contemporary scientific validation.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Cultural Heritage",
    color: "from-rose-400 to-rose-600",
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
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-50" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-50/40 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-amber-50/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Branding Title */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-xl shadow-slate-900/10">
            About the Centre
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
            Bridging <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Ancient Wisdom</span> <br/>
            with <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">Modern Science</span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed italic">
            &ldquo;Integrating India&apos;s timeless intellectual traditions into contemporary education to foster a multidisciplinary hub of excellence.&rdquo;
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-4`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{pillar.title}</h4>
              <p className="text-slate-500 text-base leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Statistics Block */}
        <div className="relative p-12 md:p-20 bg-slate-950 rounded-[4rem] text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.05),transparent)] pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-3 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="h-1 w-12 bg-amber-500 mx-auto rounded-full mb-4 opacity-50" />
                <p className="text-blue-100/60 font-black text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
