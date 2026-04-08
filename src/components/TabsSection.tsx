"use client";

import { useState } from "react";

const phdAreas = [
  "Absolute Intelligence",
  "Health and Wellbeing",
  "Ancient Scriptures and Modern Research",
  "Integrative Studies on the Levels of Existence",
  "Scientific Studies on Yoga and Meditation",
  "Shrimad Bhagvad Gita in Current Context",
  "Singularity and Artificial Intelligence: Evolutionary Awakening",
  "Intelligent Integration of Education and Science in Light of Madhyasth Darshan",
  "Vedantic Science and Life Management"
];

const tabs = [
  { id: "objectives", label: "Objectives" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "courses", label: "Courses" },
  { id: "phd", label: "Ph.D. Programme" },
  { id: "advisors", label: "Advisors" }
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState("objectives");

  return (
    <>
      {/* ORNATE DIVIDER */}
      <div className="text-center py-12 bg-light-sand overflow-hidden" id="about">
        <svg viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[320px] max-w-[90vw] inline-block">
          <line x1="0" y1="20" x2="120" y2="20" stroke="#C8501A" strokeWidth="0.75" strokeOpacity="0.5"/>
          <circle cx="150" cy="20" r="6" fill="none" stroke="#C8501A" strokeWidth="1.2"/>
          <circle cx="150" cy="20" r="2.5" fill="#C8501A" fillOpacity="0.5"/>
          <circle cx="130" cy="20" r="2" fill="#D4A017" fillOpacity="0.5"/>
          <circle cx="170" cy="20" r="2" fill="#D4A017" fillOpacity="0.5"/>
          <line x1="200" y1="20" x2="320" y2="20" stroke="#C8501A" strokeWidth="0.75" strokeOpacity="0.5"/>
          <path d="M140 20 L150 12 L160 20 L150 28 Z" stroke="#D4A017" strokeWidth="0.75" fill="none" opacity="0.6"/>
        </svg>
      </div>

      {/* ABOUT STRIP */}
      <div className="bg-light-sand px-[8vw] py-8 flex flex-wrap items-center gap-12 pb-16">
        <svg className="w-20 h-20 object-contain shrink-0" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="36" stroke="#0C1B3A" strokeWidth="1.5"/>
          <circle cx="40" cy="40" r="28" stroke="#D4A017" strokeWidth="0.75" strokeDasharray="4 3"/>
          <path d="M40 16 L43 30 L40 28 L37 30 Z" fill="#C8501A" opacity="0.8"/>
          <path d="M40 64 L43 50 L40 52 L37 50 Z" fill="#C8501A" opacity="0.8"/>
          <path d="M16 40 L30 37 L28 40 L30 43 Z" fill="#C8501A" opacity="0.8"/>
          <path d="M64 40 L50 37 L52 40 L50 43 Z" fill="#C8501A" opacity="0.8"/>
          <circle cx="40" cy="40" r="8" fill="none" stroke="#0C1B3A" strokeWidth="1.5"/>
          <circle cx="40" cy="40" r="3" fill="#D4A017"/>
        </svg>
        <p className="font-cormorant text-[clamp(1.1rem,2vw,1.4rem)] font-normal leading-[1.7] text-text-mid flex-1 min-w-[260px]">
          The <strong className="text-deep-navy font-semibold">Centre for Indian Knowledge Systems and Holistic Education</strong> is a multidisciplinary hub for research on all aspects of Indian Knowledge Systems — rooted at SVNIT Surat, reaching the world.
        </p>
      </div>

      {/* TABS SECTION */}
      <section className="py-20 px-[8vw] bg-ivory" id="tabs-section">
        <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-saffron mb-2.5 flex items-center gap-2.5 before:content-[''] before:w-6 before:h-[1px] before:bg-saffron">
          Discover
        </p>

        <nav className="flex flex-nowrap sm:flex-wrap gap-0 border-b border-warm-brown/20 mb-12 overflow-x-auto sm:overflow-visible no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-jost text-[0.8rem] font-medium tracking-[0.1em] uppercase py-[0.9rem] px-6 relative transition-colors whitespace-nowrap 
                ${activeTab === tab.id ? 'text-saffron' : 'text-text-light hover:text-text-dark'}
              `}
            >
              {tab.label}
              <span className={`absolute -bottom-[1px] left-0 right-0 h-[2px] bg-saffron transition-transform duration-250 ${activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
          ))}
        </nav>

        <div className="animate-fade-in-up">
          {/* OBJECTIVES */}
          {activeTab === "objectives" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                "To offer a unique technical hub for research on India's scientific and cultural heritage, leading to the Doctoral Degree — Ph.D. in Indigenous Knowledge and Ancient Wisdom.",
                "To disseminate Indigenous knowledge for better perception, innovations and diverse societal applications across disciplines and communities.",
                "To design and offer credit and non-credit courses related to IKS for Holistic Education — fostering overall growth and wellbeing of stakeholders.",
                "To serve the society by spreading Indigenous knowledge to the global general public for overall wellness and harmonious living."
              ].map((obj, i) => (
                <div key={i} className="bg-white border border-warm-brown/10 p-6 sm:p-8 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(12,27,58,0.08)] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-saffron flex items-start gap-4 sm:gap-6">
                  <span className="font-cormorant text-[3.5rem] font-bold leading-none text-saffron/30 shrink-0 mt-1">0{i + 1}</span>
                  <p className="text-[0.95rem] leading-[1.7] text-text-mid relative z-10">{obj}</p>
                </div>
              ))}
            </div>
          )}

          {/* VISION */}
          {activeTab === "vision" && (
            <div className="max-w-[720px] bg-deep-navy p-10 sm:p-14 relative overflow-hidden">
              <span className="font-cormorant text-[14rem] leading-none font-bold text-gold/10 absolute -top-8 left-8 pointer-events-none">"</span>
              <p className="font-cormorant text-[clamp(1.1rem,2.5vw,1.5rem)] font-light italic leading-[1.8] text-ivory/90 relative z-10">
                To establish <strong className="text-gold not-italic font-semibold">SVNIT Surat</strong> as a frontier leader in disseminating Indian Knowledge Systems for Holistic Education — with the aspiration of harmony with existence and the feeling of <strong className="text-gold not-italic font-semibold">Vasudhaiv Kutumbakam</strong>.
              </p>
            </div>
          )}

          {/* MISSION */}
          {activeTab === "mission" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="font-cormorant text-[1.8rem] font-semibold text-deep-navy mb-5 leading-[1.3]">Facilitating the Journey from Head to Heart</h3>
                <p className="text-[0.95rem] leading-[1.8] text-text-mid mb-4">
                  Disseminating the profound ancient indigenous wisdom and integrating them into modern education for holistic advancement.
                </p>
                <p className="text-[0.95rem] leading-[1.8] text-text-mid mb-4">
                  The Centre proposes to offer courses taught jointly by eminent experts invited from various parts of the country, along with faculty members from SVNIT Surat — providing students with a rare opportunity to listen to and interact with experts.
                </p>
              </div>
              <div className="bg-saffron text-[#FAF7F0] p-8 relative">
                <span className="text-[4rem] leading-none opacity-15 absolute bottom-4 right-4">☀</span>
                <p className="font-cormorant text-[1.2rem] italic leading-[1.7]">
                  "Integrating profound ancient indigenous wisdom with modern education for complete human advancement — in harmony with the cosmos."
                </p>
              </div>
            </div>
          )}

          {/* COURSES */}
          {activeTab === "courses" && (
            <div>
              <div className="bg-gold/10 border-l-[3px] border-gold p-5 mb-8 text-[0.9rem] text-text-mid leading-[1.7]">
                The Centre offers both <strong className="font-semibold">credit courses</strong> and <strong className="font-semibold">non-credit courses</strong> related to Indian Knowledge Systems, taught jointly by eminent experts from across India and SVNIT Surat faculty.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[
                  { type: "Credit", name: "Indian Knowledge Systems & Holistic Education" },
                  { type: "Credit", name: "Yoga, Meditation & Scientific Studies" },
                  { type: "Non-Credit", name: "Vedantic Science & Life Management" },
                  { type: "Non-Credit", name: "Health, Wellbeing & Ancient Wisdom" },
                  { type: "Open", name: "Wellness Knowledge for the General Public" }
                ].map((course, i) => (
                  <div key={i} className="bg-deep-navy p-7 hover:bg-[#162850] transition-colors">
                    <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold font-medium mb-2">{course.type}</p>
                    <p className="font-cormorant text-[1.05rem] text-ivory/90 leading-[1.5]">{course.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PHD */}
          {activeTab === "phd" && (
            <div>
              <p className="text-[0.8rem] text-text-light italic mb-6">Broad Research Areas include (but are not limited to)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {phdAreas.map((area, i) => (
                  <div key={i} className="group border border-warm-brown/15 p-6 bg-white flex items-start gap-3 hover:bg-deep-navy hover:border-transparent transition-all cursor-default">
                    <div className="w-[6px] h-[6px] rounded-full bg-saffron mt-2 shrink-0 group-hover:bg-gold transition-colors"></div>
                    <p className="text-[0.9rem] leading-[1.5] text-text-dark group-hover:text-[#FAF7F0] transition-colors">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ADVISORS */}
          {activeTab === "advisors" && (
            <div className="font-cormorant text-[1.2rem] italic text-text-light p-12 border border-dashed border-warm-brown/30 text-center">
              Advisor profiles to be added here.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
