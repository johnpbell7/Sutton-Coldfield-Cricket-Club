import { useEffect, useRef, useState } from "react";
import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { PhotoViewer } from "@/app/components/PhotoViewer";
import {
  rectoryParkHero,
  rectoryParkIntro,
  rectoryParkSections,
  rectoryParkMoments,
  rectoryParkQuote,
} from "@/app/data/rectoryPark";

/**
 * Rectory Park — the history of the ground rather than the cricket.
 *
 * Laid out in the same style as a decade page: a hero, an introduction, then
 * alternating sections of prose and photographs, a list of the moments that
 * mattered, and a closing quotation.
 */
export default function RectoryPark() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [viewing, setViewing] = useState<number | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) => new Set(prev).add(i));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const open = viewing !== null ? rectoryParkSections[viewing] : null;

  return (
    <div className="min-h-screen bg-white">
      <MenuBar />

      {/* Hero */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden mt-[73px]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[#1c1c1c]"
          style={{ backgroundImage: `url(${rectoryParkHero.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] md:h-[180px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180">
            <path d="M0 180H1920V0L0 180Z" fill="white" />
          </svg>
        </div>
        <div className="relative h-full flex flex-col justify-end pb-32 md:pb-40 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-['Helvetica',sans-serif] text-sm md:text-base drop-shadow-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home page
              </Link>
            </div>
            <p className="font-['Georgia',serif] text-lg md:text-xl text-white/90 mb-2">
              {rectoryParkHero.years}
            </p>
            <h1 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
              {rectoryParkHero.title}
            </h1>
            <p className="font-['Georgia',serif] text-xl md:text-2xl text-white/95 max-w-3xl">
              {rectoryParkHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        ref={(el) => (refs.current[0] = el)}
        data-index={0}
        className={`bg-white py-16 md:py-24 -mt-px transition-all duration-700 ease-out ${
          visible.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-['Georgia',serif] text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
            {rectoryParkIntro.large}
          </p>
          <p className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-700">
            {rectoryParkIntro.body}
          </p>
        </div>
      </section>

      {/* Sections */}
      {rectoryParkSections.map((section, index) => (
        <div
          key={index}
          ref={(el) => (refs.current[index + 1] = el as HTMLElement | null)}
          data-index={index + 1}
          className={`transition-all duration-700 ease-out ${
            visible.has(index + 1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative h-[80px] md:h-[120px] -mb-px">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
              <path
                d={section.background === "cream" ? "M0 120H1920V0L0 120Z" : "M0 0H1920V120L0 0Z"}
                fill={section.background === "cream" ? "#f8f6f3" : "white"}
              />
            </svg>
          </div>

          <section
            className={`${section.background === "cream" ? "bg-[#f8f6f3]" : "bg-white"} py-14 md:py-20 -mt-px`}
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                {section.image && (
                  <div
                    className={`md:col-span-5 order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                  >
                    <button
                      type="button"
                      onClick={() => setViewing(index)}
                      aria-label={`Enlarge ${section.title}`}
                      className="group block w-full cursor-zoom-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[#8B1538]"
                    >
                      <ImageWithFallback
                        src={section.image}
                        alt={section.title}
                        loading="lazy"
                        className="w-full h-auto object-contain bg-[#f4f1ec] transition-opacity group-hover:opacity-90"
                      />
                    </button>
                    {section.imageCaption && (
                      <div className="border-b border-[#d9c9ca] py-3 mt-4">
                        <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                          {section.imageCaption}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div
                  className={`${section.image ? "md:col-span-7" : "md:col-span-12"} order-2 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-[#8B1538] mb-3">
                    {section.period}
                  </p>
                  <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-6 leading-tight">
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-800 mb-6"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* Key moments */}
      <div className="relative h-[80px] md:h-[120px] -mb-px">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
          <path d="M0 120H1920V0L0 120Z" fill="#1a472a" />
        </svg>
      </div>
      <section className="bg-[#1a472a] py-16 md:py-24 -mt-px">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-white mb-10 md:mb-14">
            The Ground, Year by Year
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {rectoryParkMoments.map((m, i) => (
              <div key={i} className="bg-white/10 p-6 md:p-8 backdrop-blur-sm">
                <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-white/70 mb-2">
                  {m.year}
                </p>
                <h3 className="font-['Archivo_Black',sans-serif] text-xl md:text-2xl text-white mb-2">
                  {m.title}
                </h3>
                <p className="font-['Georgia',serif] text-base md:text-lg text-white/90 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#f8f6f3] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <blockquote className="text-center">
            <p className="font-['Georgia',serif] text-2xl md:text-3xl italic text-[#8B1538] leading-relaxed mb-6">
              “{rectoryParkQuote.text}”
            </p>
            <footer className="font-['Helvetica',sans-serif] text-base md:text-lg text-gray-700">
              — {rectoryParkQuote.author}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Where next */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch">
            <Link
              to="/journey"
              className="flex items-center justify-center gap-3 bg-white hover:bg-[#8B1538] text-[#8B1538] hover:text-white border-2 border-[#8B1538] px-10 py-5 font-['Helvetica',sans-serif] text-lg font-semibold transition-colors w-full md:w-auto"
            >
              View Our Journey Timeline
            </Link>
            <Link
              to="/decades"
              className="flex items-center justify-center gap-3 bg-[#8B1538] hover:bg-[#6B0F2A] text-white px-10 py-5 font-['Helvetica',sans-serif] text-lg font-semibold transition-colors w-full md:w-auto"
            >
              Explore Through the Decades
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {open?.image && (
        <PhotoViewer
          src={open.image}
          alt={open.title}
          caption={open.imageCaption}
          onClose={() => setViewing(null)}
        />
      )}
    </div>
  );
}
