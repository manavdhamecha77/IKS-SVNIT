"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleTabChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveTab(customEvent.detail);
    };
    window.addEventListener('changeTab', handleTabChange);
    return () => window.removeEventListener('changeTab', handleTabChange);
  }, []);

  return (
    <>
      {/* ORNATE DIVIDER */}
      <div className="text-center py-12 bg-light-sand overflow-hidden" id="about">
        <svg viewBox="0 0 320 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[320px] max-w-[90vw] inline-block">
          <line x1="0" y1="20" x2="120" y2="20" stroke="#C8501A" strokeWidth="0.75" strokeOpacity="0.5" />
          <circle cx="150" cy="20" r="6" fill="none" stroke="#C8501A" strokeWidth="1.2" />
          <circle cx="150" cy="20" r="2.5" fill="#C8501A" fillOpacity="0.5" />
          <circle cx="130" cy="20" r="2" fill="#D4A017" fillOpacity="0.5" />
          <circle cx="170" cy="20" r="2" fill="#D4A017" fillOpacity="0.5" />
          <line x1="200" y1="20" x2="320" y2="20" stroke="#C8501A" strokeWidth="0.75" strokeOpacity="0.5" />
          <path d="M140 20 L150 12 L160 20 L150 28 Z" stroke="#D4A017" strokeWidth="0.75" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* ABOUT STRIP */}
      <div className="bg-light-sand px-[8vw] pt-4 pb-12 flex justify-center text-center">
        <p className="font-cormorant text-[clamp(1.1rem,2vw,1.4rem)] font-normal leading-[1.7] text-text-mid max-w-4xl mx-auto">
          The <strong className="text-deep-navy font-semibold">Centre for Indian Knowledge Systems and Holistic Education</strong> is a multidisciplinary hub for research on all aspects of Indian Knowledge Systems.
        </p>
      </div>

      {/* TABS SECTION */}
      <section className="py-20 px-[8vw] bg-ivory" id="tabs-section">
        {/* <p className="text-[0.9rem] sm:text-[1rem] font-medium tracking-[0.2em] uppercase text-saffron mb-4">
          Discover
        </p> */}

        <nav className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-y-2 sm:gap-y-0 border-b border-warm-brown/20 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-jost text-[0.9rem] xs:text-[1rem] sm:text-[1rem] font-medium tracking-tight sm:tracking-[0.1em] py-3 sm:py-[0.9rem] px-1 sm:px-6 relative transition-colors text-center flex items-center justify-center
                ${activeTab === tab.id ? 'text-saffron' : 'text-text-light hover:text-text-dark'}
              `}
            >
              <span className="leading-tight sm:leading-normal">{tab.label}</span>
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
                "To design and offer credit and non-credit courses related to IKS for Holistic Education fostering overall growth and wellbeing of stakeholders.",
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
          {/* VISION */}
          {activeTab === "vision" && (
            <div className="max-w-[720px] md:mx-auto md:text-center bg-deep-navy p-10 sm:p-14 relative overflow-hidden">
              <span className="font-cormorant text-[14rem] leading-none font-bold text-gold/10 absolute -top-8 left-8 md:left-1/2 md:-translate-x-1/2 pointer-events-none">"</span>
              <p className="font-cormorant text-[clamp(1.1rem,2.5vw,1.5rem)] font-light italic leading-[1.8] text-ivory/90 relative z-10">
                To establish <strong className="text-gold not-italic font-semibold">SVNIT Surat</strong> as a frontier leader in disseminating Indian Knowledge Systems for Holistic Education with the aspiration of harmony with existence and the feeling of <strong className="text-gold not-italic font-semibold">Vasudhaiv Kutumbakam</strong>.
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
              </div>
              <div className="bg-saffron text-[#FAF7F0] p-8 relative">
                <span className="text-[4rem] leading-none opacity-15 absolute bottom-4 right-4">☀</span>
                <p className="font-cormorant text-[1.2rem] italic leading-[1.7]">
                  "Integrating profound ancient indigenous wisdom with modern education for complete human advancement in harmony with the cosmos."
                </p>
              </div>
            </div>
          )}

          {/* COURSES */}
          {activeTab === "courses" && (
            <div className="md:mx-auto bg-white border border-warm-brown/10 p-8 sm:p-10 relative overflow-hidden transition-all text-text-mid leading-[1.8] text-[0.95rem] sm:text-[1rem] max-w-4xl">
              <span className="absolute top-0 left-0 w-[4px] h-full bg-saffron"></span>
              The centre proposes to offer courses (credit courses as well as non-credit courses) to be taught jointly by eminent experts invited from various parts of the country, along with few faculty members from SVNIT Surat which will provide students with a rare opportunity to listen to and interact with experts.
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
