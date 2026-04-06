// components/TabsSection.tsx
"use client";

import { useEffect, useState, useRef, useCallback } from "react";

// You can fill this array with all 30+ image filenames
const galleryImages = Array.from({ length: 32 }).map((_, i) => ({
  src: null as string | null, // e.g., `/gallery/img-${i+1}.jpg`
  alt: `Gallery Image ${i + 1}`
}));

export default function TabsSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const SectionWrapper = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <div id={id} className="py-12 md:py-20 border-b border-gray-100 last:border-0 scroll-mt-20">
      {children}
    </div>
  );

  return (
    <section ref={sectionRef} className="bg-white">
      <div className={`max-w-4xl mx-auto px-6 relative transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>

        {/* ─── Objectives ─── */}
        <SectionWrapper id="objectives">
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-8 tracking-wide">Objectives</h2>
          <ul className="list-disc pl-6 space-y-6 text-gray-700 text-lg leading-relaxed font-medium">
            <li>To offer a unique technical hub for research on India&apos;s scientific and cultural heritage leading to the Doctoral Degree – Ph. D. in the relevant area of Indigenous Knowledge and Ancient Wisdom</li>
            <li>To disseminate Indigenous knowledge for better perception, innovations and societal applications</li>
            <li>To design and offer credit courses and non-credit courses related to IKS for Holistic Education for overall growth and wellbeing of the stakeholders</li>
            <li>To serve the society by spreading the Indigenous knowledge to the general public for overall wellness</li>
          </ul>
        </SectionWrapper>

        {/* ─── Vision ─── */}
        <SectionWrapper id="vision">
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-8 tracking-wide">Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
              To establish SVNIT Surat as a frontier leader in disseminating Indian Knowledge Systems for Holistic Education with aspiration of harmony with the existence with the feeling of &lsquo;Vasudhaiv Kutumbakam&rsquo; 
            </p>
            <div className="aspect-video md:aspect-square bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-300">
              {/* <img src="/vision-img.jpg" className="w-full h-full object-cover rounded-2xl" /> */}
              <span>Vision Image</span>
            </div>
          </div>
        </SectionWrapper>

        {/* ─── Mission ─── */}
        <SectionWrapper id="mission">
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-8 tracking-wide">Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 aspect-video md:aspect-square bg-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-300">
              {/* <img src="/mission-img.jpg" className="w-full h-full object-cover rounded-2xl" /> */}
              <span>Mission Image</span>
            </div>
            <div className="order-1 md:order-2 p-8 bg-yellow-50 rounded-2xl border border-yellow-100 shadow-sm">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                Facilitating the journey from head to heart by <span className="bg-yellow-200/50 px-1">disseminating the profound ancient indigenous wisdom</span> for integrating them to the modern education for holistic advancement
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* ─── Courses ─── */}
        <SectionWrapper id="courses">
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-8 tracking-wide">Courses</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium mb-8">
            The centre proposes to offer courses (credit courses as well as non-credit courses) to be taught jointly by eminent experts invited from various parts of the country, along with few faculty members from SVNIT Surat which will provide students with a rare opportunity to listen to and interact with experts.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-300 text-xs">Course Image 1</div>
             <div className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-300 text-xs">Course Image 2</div>
          </div>
        </SectionWrapper>

        {/* ─── Ph.D. Programme ─── */}
        <SectionWrapper id="phd">
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-4 tracking-wide underline underline-offset-8">Ph. D. Programme</h2>
          <p className="text-gray-900 font-bold text-xl mb-8">Broad Research Areas include (but not limited to)</p>
          <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg font-medium">
            <li>Absolute Intelligence</li>
            <li>Health and <span className="bg-yellow-200/50 px-1 decoration-red-500">Wellbeing</span></li>
            <li>Ancient Scriptures and Modern Research</li>
            <li className="bg-yellow-100/40 inline-block px-1">Integrative studies on the Levels of Existence</li>
            <li className="bg-yellow-100/40 inline-block px-1">Scientific Studies on Yoga and Meditation</li>
            <li><span className="decoration-red-500 underline underline-offset-4 decoration-wavy">Shrimad Bhagvad Gita</span> in Current Context</li>
            <li>Singularity and Artificial Intelligence: Evolutionary Awakening</li>
            <li className="bg-yellow-100/40 inline-block px-1">Intelligent Integration of Education and Science in Light of Madhyasth Darshan</li>
            <li className="bg-yellow-100/40 inline-block px-1">Vedantic Science and Life Management</li>
          </ul>
        </SectionWrapper>

        {/* ─── Gallery (Grid with Slider) ─── */}
        <SectionWrapper id="gallery">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#3b82f6] tracking-wide">Gallery</h2>
              <p className="text-gray-400 text-sm italic font-medium mt-1 uppercase tracking-wider">A visual journey</p>
            </div>
            {/* Gallery Navigation */}
            <div className="flex gap-2">
              <button 
                onClick={prevGallery}
                className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-400"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextGallery}
                className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-400"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700"
            >
              {galleryImages.slice(galleryPage * imagesPerPage, (galleryPage + 1) * imagesPerPage).map((img, i) => (
                <div 
                  key={i} 
                  className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all group flex items-center justify-center animate-fade-in"
                >
                  {img.src ? (
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  ) : (
                    <div className="flex flex-col items-center">
                      <svg className="w-6 h-6 text-gray-300 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Photo {galleryPage * imagesPerPage + i + 1}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button 
                key={i}
                onClick={() => setGalleryPage(i)}
                className={`h-1.5 rounded-full transition-all ${i === galleryPage ? "w-8 bg-blue-500" : "w-2 bg-gray-200 hover:bg-gray-300"}`}
              />
            ))}
          </div>
        </SectionWrapper>

        {/* ─── Advisors ─── */}
        <SectionWrapper id="advisors">
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-8 tracking-wide">Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-100 border-2 border-gray-100" />
                <div className="h-4 w-20 bg-gray-100 rounded" />
                <div className="h-3 w-16 bg-gray-50 rounded" />
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
