import image_fc4c2d6cfb8d8e98a7717873f6d785a1e5b880e7 from '@/assets/fc4c2d6cfb8d8e98a7717873f6d785a1e5b880e7.png';
import image_f82377ba58d74186f1a05e52302988a3b22aba9e from '@/assets/f82377ba58d74186f1a05e52302988a3b22aba9e.png';
import heroImage from '@/assets/Homepage.png';
// cricketBall import removed as it's unused

// Archive images for decade thumbnails
import img_1859_team from '@/assets/decades/1850s/1859_part1_image4.jpg';
import img_1892_team from '@/assets/decades/1890s/1892_part1_image9.jpg';
import img_1906_1stxi from '@/assets/decades/1900s/1906_part1_image14.jpg';
import img_1910_1stxi from '@/assets/decades/1910s/1910_part1_image20.jpg';
import img_1921_team from '@/assets/decades/1920s/1921_part1_image47.jpg';
import img_1937_centenary from '@/assets/decades/1930s/1937_part1_image1.jpg';
import img_1947_mcc from '@/assets/decades/1940s/1947_part1_image58.jpg';
import img_1951_team from '@/assets/decades/1950s/1951_part1_image65.jpg';
import img_1966_team from '@/assets/decades/1960s/1966_part2_image1.jpg';
import img_1970_pavilion from '@/assets/decades/1970s/1970_part2_image2.jpg';
import img_1982_team from '@/assets/decades/1980s/1982_part2_image12.jpg';
import img_1993_champions from '@/assets/decades/1990s/1993_part2_image22.jpg';
import img_2004_champions from '@/assets/decades/2000s/2004_part2_image43.jpg';
import img_2016_squad from '@/assets/decades/2010s/2016_part3_image2.jpg';
import img_2022_blueteam from '@/assets/decades/2020s/2022_part3_image63.jpg';
import img_1999_journey from '@/assets/ultra_denoised_cricket.jpg';
import img_2021_community from '@/assets/decades/2020s/2021_part3_image48.jpeg';
import img_decades from '@/assets/ChatGPT Image Apr 5, 2026, 10_32_11 AM.png';
import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight, ArrowUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Bowl to Scroll Component
function BowlToScroll({ onInteract }: { onInteract: () => void }) {
  const [isBowling, setIsBowling] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const triggerBowl = () => {
    if (isBowling) return;
    
    setIsBowling(true);
    // Trigger immediately to ensure it works on first click
    onInteract();
    
    // Reset the bowling state after animation completes so ball can be clicked again
    setTimeout(() => {
      setIsBowling(false);
    }, 400); // Slightly longer than the 0.35s animation duration
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-10 z-20 flex flex-col items-center pointer-events-none">
      <div
        className="cursor-pointer select-none flex flex-col items-center gap-4 pointer-events-auto"
        style={{
          transform: isBowling 
            ? 'translateY(120vh)' 
            : isPressed 
              ? 'translateY(10px) scale(0.95)' 
              : 'translateY(0)',
          transition: isBowling 
            ? 'transform 0.35s cubic-bezier(0.4, 0.0, 0.6, 1), opacity 0.15s ease-out' 
            : 'transform 0.12s ease-out',
          opacity: isBowling ? 0 : 1,
        }}
        onClick={triggerBowl}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* Cricket Ball in Circle */}
        <div 
          className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-2 border-white bg-transparent shadow-xl flex items-center justify-center overflow-hidden transition-all duration-200"
          style={{
            animation: isBowling ? 'none' : 'bounce 1s infinite',
            borderColor: isPressed ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 1)',
            boxShadow: isPressed 
              ? '0 10px 25px rgba(0, 0, 0, 0.3)' 
              : '0 20px 50px rgba(0, 0, 0, 0.5)',
          }}
        >
          <ImageWithFallback
            src={image_fc4c2d6cfb8d8e98a7717873f6d785a1e5b880e7}
            alt="Cricket Ball"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        
        {/* Text and Arrow */}
        <div 
          className="flex flex-col items-center gap-2"
          style={{
            opacity: isBowling ? 0 : 1,
            transform: isBowling ? 'translateY(-20px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
          }}
        >
          <p className="font-['Helvetica',sans-serif] text-sm md:text-base text-white/80 whitespace-nowrap drop-shadow-lg">
            Click Here
          </p>
          <p className="font-['Helvetica',sans-serif] font-bold text-xl md:text-2xl text-white whitespace-nowrap drop-shadow-lg">
            Bowl to Scroll
          </p>
          <ArrowUp className="w-7 h-7 md:w-8 md:h-8 text-white animate-pulse rotate-180 drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
}

// Lazy Loading Component for Sections
function LazySection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Start loading 100px before section enters viewport
        threshold: 0.01, // Trigger as soon as section is barely visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={className}>
      <div 
        className={`transition-opacity duration-700 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </section>
  );
}

// Fade-in animation component for text and content blocks
function FadeIn({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.2,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showBowl, setShowBowl] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Only show bowl if at the very top (within 10px)
      if (hasInteracted && window.scrollY <= 10) {
        setShowBowl(true);
      } else if (window.scrollY > 10) {
        setShowBowl(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasInteracted]);

  const handleBowlInteract = () => {
    setHasInteracted(true);
    setShowBowl(false);
    
    // Wait for content to render before scrolling
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (contentRef.current) {
          const targetPosition = contentRef.current.offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; // Slightly longer for smoother feel
          let start: number | null = null;

          // Smoother easing function
          const easeInOutQuad = (t: number): number => {
            return t < 0.5 
              ? 2 * t * t 
              : 1 - Math.pow(-2 * t + 2, 2) / 2;
          };

          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutQuad(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
        }
      }, 100); // Small delay to ensure DOM has updated
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <MenuBar />
      
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        <div className="relative h-full flex items-center px-6 z-10">
          <div className="absolute inset-0 flex items-center px-8 md:px-12 pb-32 md:pb-40 animate-[slideInMobile_1s_ease-out] md:animate-[slideInLeft_1s_ease-out]">
            <div className="max-w-7xl mx-auto w-full">
              <h1 className="font-['Archivo_Black',sans-serif] text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none max-w-4xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                Over 180 Years of Cricket Excellence
              </h1>
              <p className="font-['Georgia',serif] text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                The story of Sutton Coldfield Cricket Club
              </p>
            </div>
          </div>
        </div>
        
        {/* Bowl to Scroll Component */}
        {showBowl && (
          <BowlToScroll onInteract={handleBowlInteract} />
        )}
      </section>

      {/* Content sections - only show after interaction */}
      {hasInteracted && (
        <div ref={contentRef}>
          {/* Large Image + Text Section */}
          <LazySection className="bg-white">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-[500px] md:h-[700px]">
                <ImageWithFallback
                  src={img_1999_journey}
                  alt="Our Journey"
                  className="w-full h-full object-cover" style={{objectPosition: '45% center'}}
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="flex items-center bg-[#f8f6f3] px-8 md:px-16 py-16 md:py-20">
                <div className="max-w-xl">
                  <FadeIn>
                    <h2 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl text-[#8B1538] mb-8 leading-tight">
                      Our Journey
                    </h2>
                  </FadeIn>
                  <FadeIn delay={200}>
                    <p className="font-['Georgia',serif] text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
                      From humble beginnings in 1880 to a thriving modern club, explore the remarkable timeline of Sutton Coldfield Cricket Club. Discover the moments, matches, and members that shaped our legacy.
                    </p>
                  </FadeIn>
                  <FadeIn delay={400}>
                    <Link
                      to="/journey"
                      className="inline-flex items-center gap-3 bg-[#8B1538] text-white px-10 py-5 font-['Helvetica',sans-serif] font-semibold text-lg hover:bg-[#6d1029] transition-all duration-300 group"
                    >
                      Explore Timeline
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </FadeIn>
                </div>
              </div>
            </div>
          </LazySection>

          {/* Full Width Image Section */}
          <LazySection className="relative py-16 md:py-24">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${img_2021_community})`
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="relative flex items-center justify-center px-6">
              <div className="text-center max-w-3xl">
                <FadeIn>
                  <h2 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl text-white mb-6 leading-tight">
                    A Legacy Built on Community
                  </h2>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="font-['Georgia',serif] text-xl md:text-2xl text-white/95 leading-relaxed">
                    More than just a cricket club—we are a family bound by tradition and passion for the game
                  </p>
                </FadeIn>
              </div>
            </div>
          </LazySection>

          {/* Decades Section - Image Right */}
          <LazySection className="bg-white relative overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Content */}
              <div className="flex items-center bg-white px-8 md:px-16 py-16 md:py-20">
                <div className="max-w-xl">
                  <FadeIn>
                    <h2 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl text-[#8B1538] mb-8 leading-tight">
                      Through the Decades
                    </h2>
                  </FadeIn>
                  <FadeIn delay={200}>
                    <p className="font-['Georgia',serif] text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
                      Journey through 14 decades of cricket history. From the Victorian era to the present day, each period tells a unique story of triumph, resilience, and evolution.
                    </p>
                  </FadeIn>
                  <FadeIn delay={400}>
                    <Link
                      to="/decades"
                      className="inline-flex items-center gap-3 bg-[#8B1538] text-white px-10 py-5 font-['Helvetica',sans-serif] font-semibold text-lg hover:bg-[#6d1029] transition-all duration-300 group"
                    >
                      View All Decades
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </FadeIn>
                </div>
              </div>
              {/* Image */}
              <div className="h-[500px] md:h-[700px]">
                <ImageWithFallback
                  src={img_decades}
                  alt="Through the Decades"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </LazySection>

          {/* Quote Section */}
          <LazySection className="bg-[#1a472a] py-16 md:py-24">
            <div className="max-w-5xl mx-auto px-6">
              <blockquote className="text-center">
                <FadeIn>
                  <p className="font-['Georgia',serif] text-3xl md:text-5xl italic text-white leading-relaxed mb-12">
                    "Cricket is more than just a game; it's a tradition that binds generations together."
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <footer className="font-['Helvetica',sans-serif] text-xl text-white/90">
                    Club President, 1920
                  </footer>
                </FadeIn>
              </blockquote>
            </div>
          </LazySection>

          {/* Three Column Feature Section */}
          <LazySection className="bg-white">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-[500px] md:h-[700px]">
                <ImageWithFallback
                  src={image_f82377ba58d74186f1a05e52302988a3b22aba9e}
                  alt="Teams Through Time"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="flex items-center bg-white px-8 md:px-16 py-16 md:py-20">
                <div className="max-w-xl">
                  <FadeIn>
                    <h2 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl text-[#8B1538] mb-8 leading-tight">
                      Teams Through Time
                    </h2>
                  </FadeIn>
                  <FadeIn delay={200}>
                    <p className="font-['Georgia',serif] text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
                      Meet the heroes who wore our colors and created unforgettable memories. From legendary captains to emerging talents, discover the players who shaped Sutton Coldfield Cricket Club.
                    </p>
                  </FadeIn>
                  <FadeIn delay={400}>
                    <Link
                      to="/teams"
                      className="inline-flex items-center gap-3 bg-[#8B1538] text-white px-10 py-5 font-['Helvetica',sans-serif] font-semibold text-lg hover:bg-[#6d1029] transition-all duration-300 group"
                    >
                      Meet the Legends
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </FadeIn>
                </div>
              </div>
            </div>
          </LazySection>

          {/* Jump to a Decade Section */}
          <LazySection className="bg-[#f8f6f3] pt-16 md:pt-24 pb-16 md:pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-['Archivo_Black',sans-serif] text-4xl md:text-5xl text-[#8B1538] mb-10 text-center">
                Jump to a Decade
              </h2>
              
              {/* Horizontal Scrolling Container */}
              <div className="relative">
                <div className="overflow-x-scroll pb-6 decade-scroll" style={{ 
                  scrollbarWidth: 'auto',
                  scrollbarColor: '#9ca3af #e5e7eb'
                }}>
                  <style dangerouslySetInnerHTML={{__html: `
                    .decade-scroll {
                      scrollbar-width: auto;
                      scrollbar-color: #9ca3af #e5e7eb;
                    }
                    .decade-scroll::-webkit-scrollbar {
                      height: 20px;
                      -webkit-appearance: none;
                    }
                    .decade-scroll::-webkit-scrollbar-track {
                      background: #e5e7eb;
                      border-radius: 10px;
                      margin: 0 20px;
                    }
                    .decade-scroll::-webkit-scrollbar-thumb {
                      background: #9ca3af;
                      border-radius: 10px;
                      min-width: 50px;
                    }
                    .decade-scroll::-webkit-scrollbar-thumb:hover {
                      background: #6b7280;
                    }
                  `}} />
                  <div className="flex gap-6 min-w-min">
                    {[
                      {
                        id: "1880s",
                        title: "Foundations Before Formation",
                        years: "1837-1847",
                        image: img_1859_team,
                        link: "/decades/1837"
                      },
                      {
                        id: "1890s",
                        title: "The First Fifty Years",
                        years: "1847-1899",
                        image: img_1892_team,
                        link: "/decades/1847"
                      },
                      {
                        id: "1900s",
                        title: "The Turn of the Century",
                        years: "1900-1909",
                        image: img_1906_1stxi,
                        link: "/decades/1900"
                      },
                      {
                        id: "1910s",
                        title: "The Great War Era",
                        years: "1910-1919",
                        image: img_1910_1stxi,
                        link: "/decades/1910"
                      },
                      {
                        id: "1920s",
                        title: "The Roaring Twenties",
                        years: "1920-1929",
                        image: img_1921_team,
                        link: "/decades/1920"
                      },
                      {
                        id: "1930s",
                        title: "The Thirties",
                        years: "1930-1939",
                        image: img_1937_centenary,
                        link: "/decades/1930"
                      },
                      {
                        id: "1940s",
                        title: "Second World War",
                        years: "1940-1949",
                        image: img_1947_mcc,
                        link: "/decades/1940"
                      },
                      {
                        id: "1950s",
                        title: "Post-War Revival",
                        years: "1950-1959",
                        image: img_1951_team,
                        link: "/decades/1950"
                      },
                      {
                        id: "1960s",
                        title: "The Swinging Sixties",
                        years: "1960-1969",
                        image: img_1966_team,
                        link: "/decades/1960"
                      },
                      {
                        id: "1970s",
                        title: "The Seventies",
                        years: "1970-1979",
                        image: img_1970_pavilion,
                        link: "/decades/1970"
                      },
                      {
                        id: "1980s",
                        title: "The Eighties",
                        years: "1980-1989",
                        image: img_1982_team,
                        link: "/decades/1980"
                      },
                      {
                        id: "1990s",
                        title: "The Nineties",
                        years: "1990-1999",
                        image: img_1993_champions,
                        link: "/decades/1990"
                      },
                      {
                        id: "2000s",
                        title: "The New Millennium",
                        years: "2000-2009",
                        image: img_2004_champions,
                        link: "/decades/2000"
                      },
                      {
                        id: "2010s",
                        title: "The Twenty-Tens",
                        years: "2010-2019",
                        image: img_2016_squad,
                        link: "/decades/2010"
                      },
                      {
                        id: "2020s",
                        title: "The Twenty-Twenties",
                        years: "2020-Present",
                        image: img_2022_blueteam,
                        link: "/decades/2020"
                      }
                    ].map((decade) => (
                      <Link
                        key={decade.id}
                        to={decade.link}
                        className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative flex-shrink-0 w-[280px] md:w-[320px] h-80"
                      >
                        <ImageWithFallback
                          src={decade.image}
                          alt={decade.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:from-black/50" />
                        
                        {/* Angled red overlay - appears on hover */}
                        <div 
                          className="absolute bottom-0 left-0 right-0 h-32 bg-[#8B1538] transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                          style={{
                            clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)'
                          }}
                        />

                        {/* Title and Years - slide up on hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-300 group-hover:-translate-y-8">
                          <h3 className="font-['Archivo_Black',sans-serif] text-3xl font-bold text-white">
                            {decade.title}
                          </h3>
                          <p className="font-['Helvetica',sans-serif] text-sm text-white/90 mt-1">
                            {decade.years}
                          </p>
                        </div>

                        {/* Explore text - revealed on hover */}
                        <div className="absolute bottom-6 left-6 right-6 flex items-center text-white transition-opacity duration-300 z-0 opacity-0 group-hover:opacity-100">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                          <span className="font-['Helvetica',sans-serif] text-base font-semibold">
                            Explore this decade
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </LazySection>
        </div>
      )}

      {/* Footer - only show after interaction */}
      {hasInteracted && (
        <Footer />
      )}
    </div>
  );
}