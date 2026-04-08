"use client";

const footerLinks = [
  { id: "objectives", label: "Objectives" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "courses", label: "Courses" },
  { id: "phd", label: "Ph.D. Programme" },
  { id: "advisors", label: "Advisors" },
];

export default function Footer() {
  return (
    <>
      {/* PHOTO STRIP */}
      <div className="h-[320px] bg-deep-navy relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/85 to-saffron/40 z-10" />
        <div className="relative z-20 text-center px-8">
          <h2 className="font-cormorant text-[clamp(1.8rem,4vw,3rem)] font-light italic text-[#FAF7F0] leading-[1.4] mb-2 border-none">
            Ancient Wisdom, <strong className="font-bold text-gold not-italic">Modern Vision</strong>
          </h2>
          <p className="text-[0.9rem] text-ivory/65 tracking-[0.1em] uppercase">
            Vasudhaiv Kutumbakam — The World is One Family
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#080F1F] text-[#FAF7F0]/55 px-[8vw] pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 pb-10 border-b border-white/5">
          <div className="flex flex-col">
            <h3 className="font-cormorant text-[1.2rem] font-semibold text-[#FAF7F0] mb-1.5">
              Centre for Indian Knowledge Systems
            </h3>
            <p className="text-[0.7rem] tracking-[0.12em] uppercase text-gold/70">
              & Holistic Education · Sardar Vallabhbhai National Institute of Technology Surat
            </p>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-[0.7rem] tracking-[0.15em] uppercase text-gold mb-4">Navigate</h4>
            <ul className="flex flex-col gap-2 list-none">
              {footerLinks.map((link) => (
                <li 
                  key={link.id} 
                  className="text-[0.82rem] cursor-pointer transition-colors hover:text-[#FAF7F0]" 
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-[0.7rem] tracking-[0.15em] uppercase text-gold mb-4">Institute</h4>
            <ul className="flex flex-col gap-2 list-none">
              <li className="text-[0.82rem]">SVNIT Surat</li>
              <li className="text-[0.82rem]">Ichchhanath, Surat</li>
              <li className="text-[0.82rem]">Gujarat, 395007</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-6 text-[0.75rem] flex-wrap gap-2 text-gold">
          <span>© {new Date().getFullYear()} Center For IKSHE, SVNIT, Surat.</span>
          <span>सा विद्या या विमुक्तये</span>
        </div>
      </footer>
    </>
  );
}
