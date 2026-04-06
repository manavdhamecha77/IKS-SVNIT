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
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-gray-100 flex flex-col items-center text-center px-4">
      {/* 1. Sanskrit Title (Match skeleton color) */}
      <h1 className="text-xl md:text-3xl font-bold text-[#e11d48] mb-4 tracking-wide">
        भारतीय ज्ञान परंपरा एवं समग्र शिक्षा केन्द्र
      </h1>

      {/* 2. English Title (Match skeleton color) */}
      <h2 className="text-lg md:text-2xl font-bold text-[#2563eb] mb-10 max-w-4xl leading-tight">
        Centre for Indian Knowledge Systems and Holistic Education
      </h2>

      {/* 3. Logo (Smaller for Footer) */}
      <div className="mb-10">
        <Image
          src="/logo/svnit.png"
          alt="SVNIT Logo"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20 object-contain"
        />
      </div>

      {/*
      <p className="text-gray-400 font-extrabold text-xs md:text-sm tracking-[0.3em] uppercase mb-12">
        SVNIT Surat
      </p> */}

      {/* 5. Minimal Navigation (Quick Links) */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {footerLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => {
              document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors uppercase tracking-widest"
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* 6. Legal / Copyright Strip */}
      <div className="w-full pt-12 border-t border-gray-50">
        <p className="text-gray-300 text-[10px] md:text-xs font-semibold tracking-[0.1em] uppercase">
          &copy; {new Date().getFullYear()} Centre for Indian Knowledge Systems for Holistic Education, SVNIT Surat. All rights reserved.
        </p>
      </div>

      {/* Subtle decorative blurs at the bottom corners */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-50/50 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-red-50/50 blur-[100px] pointer-events-none" />
    </footer>
  );
}
