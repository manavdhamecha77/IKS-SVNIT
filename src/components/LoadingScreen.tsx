"use client";

import Image from "next/image";
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
        bg-[#fcfdfd] transition-all duration-1000 ease-in-out
        ${phase === "out" ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"}
      `}
    >
      <div className="max-w-4xl flex flex-col items-center text-center px-6 transition-all duration-1000">
        
        {/* 1. Sanskrit Title */}
        <h2 className="text-slate-900/80 text-2xl md:text-4xl font-bold mb-4 tracking-widest animate-pulse-soft">
          भारतीय ज्ञान परंपरा एवं समग्र शिक्षा केन्द्र
        </h2>

        {/* 2. English Title */}
        <h1 className="text-slate-900 text-lg md:text-2xl font-black mb-16 tracking-[0.2em] uppercase opacity-40">
          Centre for Indian Knowledge Systems
        </h1>

        {/* 3. Central Logo with Glowing Rings */}
        <div className="relative mb-20 animate-float">
          <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-white shadow-[0_20px_50px_rgba(37,99,235,0.15)] overflow-hidden border-4 border-white">
            <Image
              src="/logo/svnit.png"
              alt="SVNIT Logo"
              width={144}
              height={144}
              className="w-[80%] h-[80%] object-contain relative z-10"
            />
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent" />
          </div>
          
          {/* Animated Rings */}
          <div className="absolute inset-[-10px] rounded-full border-2 border-blue-600/20 animate-ping" />
          <div className="absolute inset-[-30px] rounded-full border border-indigo-500/10 animate-pulse-soft" />
          <div className="absolute inset-[-50px] rounded-full border border-blue-400/5 animate-pulse" />
        </div>

        {/* 4. SVNIT Surat Label */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-blue-600 font-black text-sm md:text-base tracking-[0.5em] uppercase">
            SVNIT SURAT
          </p>
          
          {/* 5. Custom Progress Loader */}
          <div className="w-64 h-2 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/50 shadow-inner">
            <div
              className={`
                h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600
                transition-all duration-[2200ms] ease-out shadow-[0_0_15px_rgba(37,99,235,0.3)]
                ${phase === "in" ? "w-0" : "w-full"}
              `}
            />
          </div>
        </div>

      </div>

      {/* Background Ambience */}
      <Image 
        src="/images/image1.png" 
        alt="Loading Background" 
        fill 
        className="object-cover opacity-[0.06] pointer-events-none" 
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-soft" />
    </div>
  );
}