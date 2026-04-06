"use client";
import Image from "next/image";

const footerLinks = [
  { id: "objectives", label: "Objectives" },
  { id: "vision", label: "Vision" },
  { id: "mission", label: "Mission" },
  { id: "courses", label: "Courses" },
  { id: "phd", label: "Ph.D. Programme" },
  { id: "gallery", label: "Gallery" },
  { id: "advisors", label: "Advisors" },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden border-t border-white/5 flex flex-col items-center text-center px-4">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600 opacity-30" />
      <div className="absolute -top-24 left-1/2 -translateX-1/2 w-[1000px] h-[500px] bg-blue-500/5 rounded-[100%] blur-[120px] pointer-events-none" />

      {/* 1. Logo & Branding */}
      <div className="mb-12 flex flex-col items-center">
        <div className="relative w-20 h-20 md:w-28 md:h-28 mb-8 hover:scale-110 transition-transform duration-500 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-10" />
          <Image
            src="/logo/svnit.png"
            alt="SVNIT Logo"
            fill
            className="object-contain"
          />
        </div>
        
        <h2 className="text-white text-xl md:text-3xl font-black tracking-tight mb-4 max-w-4xl leading-tight">
          भारतीय ज्ञान परंपरा एवं समग्र शिक्षा केन्द्र
        </h2>
        <p className="text-blue-200/60 font-bold text-sm md:text-lg tracking-widest uppercase mb-12">
          Centre for Indian Knowledge Systems & Holistic Education
        </p>
      </div>

      {/* 2. Divider */}
      <div className="w-16 h-px bg-white/10 mb-12" />

      {/* 3. Navigation Links */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-20 max-w-5xl">
        {footerLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-xs font-bold text-white/40 hover:text-amber-400 border-b border-transparent hover:border-amber-400/50 transition-all uppercase tracking-[0.2em]"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* 4. Bottom Legal / Copyright Area */}
      <div className="w-full max-w-7xl pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 px-10">
        <p className="text-white/20 text-[10px] md:text-xs font-medium tracking-widest uppercase">
          &copy; {new Date().getFullYear()} CENTRE FOR IKS, SVNIT SURAT.
        </p>
        <div className="flex gap-8">
          <p className="text-white/20 text-[10px] md:text-xs font-medium tracking-widest uppercase hover:text-white/40 cursor-pointer transition-colors">Privacy Policy</p>
          <p className="text-white/20 text-[10px] md:text-xs font-medium tracking-widest uppercase hover:text-white/40 cursor-pointer transition-colors">SVNIT Official</p>
          <p className="text-white/20 text-[10px] md:text-xs font-medium tracking-widest uppercase hover:text-white/40 cursor-pointer transition-colors">Contact Us</p>
        </div>
      </div>

      {/* Ambient Corners */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />
      
    </footer>
  );
}
