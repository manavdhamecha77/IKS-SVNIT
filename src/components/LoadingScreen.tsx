// components/LoadingScreen.tsx
"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 400);
    const t2 = setTimeout(() => setPhase("out"), 2200);
    const t3 = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-white transition-opacity duration-700
        ${phase === "out" ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="max-w-3xl flex flex-col items-center text-center px-6 transition-all duration-700 animate-fade-in-up">
        
        {/* 1. Sanskrit Title (Match skeleton color) */}
        <h2 className="text-[#e11d48] text-xl md:text-3xl font-bold mb-4 tracking-wide">
          भारतीय ज्ञान परंपरा एवं समग्र शिक्षा केन्द्र
        </h2>

        {/* 2. English Title (Match skeleton color) */}
        <h1 className="text-[#2563eb] text-lg md:text-2xl font-bold mb-10 max-w-lg leading-relaxed">
          Centre for Indian Knowledge Systems and Holistic Education
        </h1>

        {/* 3. Logo Placeholder (Animated) */}
        <div className="relative mb-8">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-green-500 flex items-center justify-center bg-green-50/20 shadow-xl shadow-green-100/50">
            <span className="text-green-600 font-extrabold text-sm md:text-base">Logo</span>
          </div>
          {/* Pulsing ring around logo */}
          <div className="absolute inset-[-6px] rounded-full border border-green-200 animate-ping opacity-20" />
        </div>

        {/* 4. SVNIT Surat Label */}
        <p className="text-gray-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-12">
          SVNIT Surat
        </p>

        {/* 5. Minimal Progress Indicator */}
        <div className="w-40 h-px bg-gray-100 overflow-hidden relative">
          <div
            className={`
              h-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400
              transition-all duration-[2200ms] ease-out
              ${phase === "in" ? "w-0" : "w-full"}
            `}
          />
        </div>
      </div>
    </div>
  );
}