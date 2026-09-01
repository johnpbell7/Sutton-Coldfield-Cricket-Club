// Correct photo assets from club archive — decade folders
import image_hero from '@/assets/decades/1940s/1946_part1_image57.jpeg';

// Historical photos extracted from club archives — organized by decade

import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";

import { teamPhotos, type TeamPhoto } from '@/app/data/teamPhotos';


export default function MeetTheTeams() {
  // Rosters open independently. Sharing one slot meant that opening a roster
  // closed whichever was open above it, and the page jumped as that content
  // collapsed — often carrying the names you had just asked for off screen.
  const [expandedTeams, setExpandedTeams] = useState<Set<number>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /** Open or close one roster. The names unfold beneath the button pressed. */
  const toggleTeam = (index: number) => {
    setExpandedTeams((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) setVisibleSections((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    Object.values(sectionRefs.current).forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MenuBar />

      {/* Hero */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden mt-[73px]">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[#1c1c1c]"
          style={{ backgroundImage: `url(${image_hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] md:h-[180px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180">
            <path d="M0 180H1920V0L0 180Z" fill="white" />
          </svg>
        </div>
        <div className="relative h-full flex flex-col justify-end pb-32 md:pb-40 px-6">
          <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-4">
              <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-['Helvetica',sans-serif] text-sm md:text-base">
                <ArrowLeft className="w-4 h-4" />
                Back to Home page
              </Link>
            </div>
            <h1 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
              Meet the Teams
            </h1>
            <p className="font-['Georgia',serif] text-xl md:text-2xl text-white/95 max-w-3xl">
              Celebrating the Players Who Built Our Legacy
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        className="bg-white py-16 md:py-24 -mt-px"
        ref={(el) => (sectionRefs.current['intro'] = el)}
        data-section-id="intro"
      >
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${visibleSections.has('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-['Georgia',serif] text-xl md:text-2xl leading-relaxed text-gray-800">
            From the earliest surviving photograph of 1859 to the 2022 team that rewrote Rectory Park's batting records, these photographs capture over 165 years of Sutton Coldfield Cricket Club. Behind every team picture is a story — of seasons won and narrowly missed, of players who gave their summers to this club, and of the friendships that outlasted the cricket.
          </p>
        </div>
      </section>

      {/* Team Photos */}
      {teamPhotos.map((team, index) => (
        <div key={index}>
          {index > 0 && (
            <div className="relative h-[80px] md:h-[120px] -mb-px">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
                <path
                  d={team.background === "cream" ? "M0 120H1920V0L0 120Z" : "M0 0H1920V120L0 0Z"}
                  fill={team.background === "cream" ? "#f8f6f3" : "white"}
                />
              </svg>
            </div>
          )}

          <section
            className={`${team.background === "cream" ? "bg-[#f8f6f3]" : "bg-white"} py-16 md:py-20 -mt-px`}
            ref={(el) => (sectionRefs.current[`team-${index}`] = el)}
            data-section-id={`team-${index}`}
          >
            <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${visibleSections.has(`team-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block bg-[#8B1538] text-white px-6 py-2 mb-6">
                <p className="font-['Helvetica',sans-serif] text-lg md:text-xl font-bold">{team.year}</p>
              </div>

              <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-6 leading-tight">
                {team.title}
              </h2>

              <p className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-800 mb-8 max-w-4xl">
                {team.description}
              </p>

              <div className="mb-8">
                <ImageWithFallback
                  src={team.image}
                  alt={`${team.title} - ${team.year}`}
                  className="w-full h-auto object-contain bg-[#f4f1ec]"
                />
                <div className="border-b border-[#d9c9ca] py-3 mt-4">
                  <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                    Sutton Coldfield Cricket Club, {team.year}
                  </p>
                  <p className="font-['Georgia',serif] text-sm text-[#9b9b9b]">Club Archives</p>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => toggleTeam(index)}
                  aria-expanded={expandedTeams.has(index)}
                  className="w-full md:w-auto bg-[#8B1538] hover:bg-[#6d1029] text-white px-8 py-4 font-['Helvetica',sans-serif] text-base md:text-lg font-semibold transition-colors mb-6"
                >
                  {expandedTeams.has(index) ? "Hide Player Names" : "View Player Names"}
                </button>

                {expandedTeams.has(index) && (
                  <div className="bg-white/50 p-6 md:p-8 border-l-4 border-[#8B1538]">
                    <h3 className="font-['Archivo_Black',sans-serif] text-2xl md:text-3xl text-[#1a472a] mb-6">
                      Team Roster
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {team.players.map((player, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3 py-2">
                          <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <p className={`font-['Georgia',serif] text-lg md:text-xl font-semibold ${player.name === 'No names recorded' ? 'text-gray-400 italic' : 'text-gray-900'}`}>
                              {player.name}
                            </p>
                            {player.role && (
                              <p className="font-['Georgia',serif] text-base text-[#8B1538] italic">
                                {player.role}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* Final Quote */}
      <div className="relative h-[80px] md:h-[120px] -mb-px">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
          <path d="M0 120H1920V0L0 120Z" fill="#f8f6f3" />
        </svg>
      </div>

      <section
        className="bg-[#f8f6f3] py-16 md:py-24 -mt-px"
        ref={(el) => (sectionRefs.current['quote'] = el)}
        data-section-id="quote"
      >
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${visibleSections.has('quote') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-center">
            <p className="font-['Georgia',serif] text-2xl md:text-4xl italic text-[#8B1538] leading-relaxed mb-8">
              "These photographs remind us that cricket is more than a game — it is about the people, the friendships, and the shared memories that bind generations together."
            </p>
            <footer className="font-['Helvetica',sans-serif] text-lg md:text-xl text-gray-700">
              — Sutton Coldfield Cricket Club, Club History
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Navigation */}
      <div className="relative h-[50px] md:h-[80px] -mb-px">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
          <path d="M0 120H1920V0L0 120Z" fill="white" />
        </svg>
      </div>

      <section
        className="bg-white py-12 md:py-16 -mt-px"
        ref={(el) => (sectionRefs.current['back-button'] = el)}
        data-section-id="back-button"
      >
        <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${visibleSections.has('back-button') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
