"use client";
import Image from "next/image";

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
      <div className="h-[320px] bg-deep-navy relative flex items-center justify-center group overflow-hidden">
        
        {/* Dynamic Image Grid Background */}
        <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 w-full h-full">
          {[14, 15, 12, 18].map((num, idx) => (
            <div key={idx} className="relative w-full h-full overflow-hidden">
              <Image 
                src={`/images/image${num}.png`} 
                alt="SVNIT Hub" 
                fill 
                className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[10000ms] ease-out opacity-60"
              />
            </div>
          ))}
        </div>

        {/* Strong Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#080F1F]/95 via-deep-navy/85 to-saffron/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-deep-navy/60 z-10" />

        <div className="relative z-20 text-center px-8">
          <h2 className="font-cormorant text-[clamp(1.8rem,4vw,3rem)] font-light italic text-[#FAF7F0] leading-[1.4] mb-2 border-none drop-shadow-md">
            Ancient Wisdom, <strong className="font-bold text-gold not-italic">Modern Vision</strong>
          </h2>
          <p className="text-[0.9rem] text-ivory/80 tracking-[0.1em] drop-shadow-sm font-semibold flex items-center justify-center gap-2">
            <span className="normal-case text-[1.3rem] tracking-wider text-gold/90 mt-1" style={{ fontFamily: "'Samarkan', sans-serif" }}>Vasudhaiva Kutumbakam</span> <span className="font-sans font-medium opacity-80 uppercase">— One World Family</span>
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#080F1F] text-[#FAF7F0]/55 px-[8vw] pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-[2.5fr_1fr_1fr] gap-x-6 gap-y-10 md:gap-12 pb-10 border-b border-white/5">
          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-5">
              <Image src="/logo/svnit.png" alt="SVNIT Logo" fill className="object-contain" />
            </div>
            <h3 className="font-cormorant text-[1.4rem] font-semibold text-[#FAF7F0] mb-3 leading-snug">
              Centre for Indian Knowledge Systems<br />
              & Holistic Education
            </h3>
            <p className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.12em] uppercase text-gold/70 leading-relaxed max-w-[280px] sm:max-w-[340px]">
              Sardar Vallabhbhai National Institute of Technology, Surat
            </p>
          </div>
          
          <div className="flex flex-col mt-2 md:mt-0">
            <h4 className="text-[0.7rem] tracking-[0.15em] uppercase text-gold mb-5">Navigate</h4>
            <ul className="flex flex-col gap-3 list-none">
              {footerLinks.map((link) => (
                <li 
                  key={link.id} 
                  className="text-[0.82rem] cursor-pointer transition-colors hover:text-[#FAF7F0] w-max" 
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('changeTab', { detail: link.id }));
                    document.getElementById('tabs-section')?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col mt-2 md:mt-0">
            <h4 className="text-[0.7rem] tracking-[0.15em] uppercase text-gold mb-5">Institute</h4>
            <ul className="flex flex-col gap-3 list-none">
              <li className="text-[0.82rem] leading-relaxed">SVNIT Campus<br/>Ichchhanath, Surat<br/>Gujarat, 395007</li>
              <li>
                <a href="https://svnit.ac.in" target="_blank" rel="noreferrer" className="text-[0.82rem] transition-colors hover:text-[#FAF7F0] w-max border-b border-transparent hover:border-[#FAF7F0]">
                  svnit.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-6 text-[0.7rem] uppercase tracking-wider flex-wrap gap-4 text-gold/60">
          <span>© {new Date().getFullYear()} Center For IKSHE, SVNIT, Surat.</span>
        </div>
      </footer>
    </>
  );
}
