import { Link, useNavigate } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { useState, useEffect, useRef } from "react";
import bannerImage from "@/assets/ui/page-banner.png";

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

const decades = [
  {
    id: "1880s",
    title: "Foundations Before Formation",
    years: "1837-1847",
    description: "Cricket takes root in Sutton Coldfield before the club's formal founding",
    image: img_1859_team,
    link: "/decades/1837"
  },
  {
    id: "1890s",
    title: "The First Fifty Years",
    years: "1847-1899",
    description: "Foundations, faith, and the forming of a club through Victorian challenges",
    image: img_1892_team,
    link: "/decades/1847"
  },
  {
    id: "1900s",
    title: "The Turn of the Century",
    years: "1900-1909",
    description: "Cricket blossoms in the new century",
    image: img_1906_1stxi,
    link: "/decades/1900"
  },
  {
    id: "1910s",
    title: "The Great War Era",
    years: "1910-1919",
    description: "Cricket through challenging times",
    image: img_1910_1stxi,
    link: "/decades/1910"
  },
  {
    id: "1920s",
    title: "The Golden Resurgence",
    years: "1920-1929",
    description: "Renewal, growth, and sporting distinction after WWI",
    image: img_1921_team,
    link: "/decades/1920"
  },
  {
    id: "1930s",
    title: "The Thirties",
    years: "1930-1939",
    description: "Continued growth and excellence",
    image: img_1937_centenary,
    link: "/decades/1930"
  },
  {
    id: "1940s",
    title: "Second World War",
    years: "1940-1949",
    description: "Resilience during the war years",
    image: img_1947_mcc,
    link: "/decades/1940"
  },
  {
    id: "1950s",
    title: "Post-War Revival",
    years: "1950-1959",
    description: "The club rebuilds and thrives",
    image: img_1951_team,
    link: "/decades/1950"
  },
  {
    id: "1960s",
    title: "The Swinging Sixties",
    years: "1960-1969",
    description: "A decade of transformation",
    image: img_1966_team,
    link: "/decades/1960"
  },
  {
    id: "1970s",
    title: "The Seventies",
    years: "1970-1979",
    description: "Expansion and modernization",
    image: img_1970_pavilion,
    link: "/decades/1970"
  },
  {
    id: "1980s",
    title: "The Eighties",
    years: "1980-1989",
    description: "Competitive cricket at its finest",
    image: img_1982_team,
    link: "/decades/1980"
  },
  {
    id: "1990s",
    title: "The Nineties",
    years: "1990-1999",
    description: "Approaching the millennium",
    image: img_1993_champions,
    link: "/decades/1990"
  },
  {
    id: "2000s",
    title: "The New Millennium",
    years: "2000-2009",
    description: "Cricket enters the 21st century",
    image: img_2004_champions,
    link: "/decades/2000"
  },
  {
    id: "2010s",
    title: "The Twenty-Tens",
    years: "2010-2019",
    description: "A new era of success",
    image: img_2016_squad,
    link: "/decades/2010"
  },
  {
    id: "2020s",
    title: "The Twenty-Twenties",
    years: "2020-Present",
    description: "Our current chapter continues",
    image: img_2022_blueteam,
    link: "/decades/2020"
  }
];

export default function DecadesOverview() {
  const navigate = useNavigate();
  const [clickedCard, setClickedCard] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleCardClick = (e: React.MouseEvent, decadeId: string, link: string) => {
    // Only intercept on mobile/tablet (below lg breakpoint)
    if (window.innerWidth < 1024) {
      e.preventDefault();
      setClickedCard(decadeId);
      
      // Navigate after animation completes (increased delay for smoother experience)
      setTimeout(() => {
        navigate(link);
      }, 600);
    }
    // On desktop, let the Link work normally
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute('data-section');
            if (section) {
              setVisibleSections((prev) => new Set([...prev, section]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const currentRef = cardRefs.current[clickedCard || ''];
    if (currentRef) {
      currentRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [clickedCard]);

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      <MenuBar />
      
      {/* Hero Banner */}
      <div 
        className="relative h-[400px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="font-['Archivo_Black',sans-serif] text-5xl md:text-7xl text-white text-center px-4">
            Through the Decades
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div 
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Our Journey in Time</h2>
          <p className="font-['Georgia',serif] text-lg md:text-xl text-gray-700 leading-relaxed">
            Explore over 175 years of cricket history at Sutton Coldfield Cricket Club. From the club's formation in 1847 — on a ground where cricket was already being played a decade earlier — to the thriving club we are today, each decade tells a unique story of triumph, resilience, and community spirit. Click on any era below to discover the players, matches, and moments that shaped our legacy.
          </p>
        </div>

        {/* Decades Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {decades.map((decade, index) => (
            <Link
              key={decade.id}
              to={decade.link}
              className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative h-80"
              onClick={(e) => handleCardClick(e, decade.id, decade.link)}
              ref={(el) => {
                cardRefs.current[decade.id] = el;
              }}
            >
              <img
                src={decade.image}
                alt={decade.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:from-black/50" />
              
              {/* Angled red overlay - appears on hover (desktop), slides up on click (mobile/tablet) */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-32 bg-[#8B1538] transition-transform duration-300 ${
                  clickedCard === decade.id ? 'translate-y-0' : 'translate-y-full'
                } md:translate-y-full md:group-hover:translate-y-0`}
                style={{
                  clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)'
                }}
              />

              {/* Title and Years - slide up on hover (desktop) or click (mobile/tablet) */}
              <div className={`absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-300 ${
                clickedCard === decade.id ? '-translate-y-8' : ''
              } md:translate-y-0 md:group-hover:-translate-y-8`}>
                <h3 className="font-['Archivo_Black',sans-serif] text-3xl font-bold text-white">
                  {decade.title}
                </h3>
                <p className="font-['Helvetica',sans-serif] text-sm text-white/90 mt-1">
                  {decade.years}
                </p>
              </div>

              {/* Explore/Entering text - revealed on hover (desktop) or click (mobile/tablet) */}
              <div className={`absolute bottom-6 left-6 right-6 flex items-center text-white transition-opacity duration-300 z-0 ${
                clickedCard === decade.id ? 'opacity-100' : 'opacity-0'
              } md:opacity-0 md:group-hover:opacity-100`}>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="font-['Helvetica',sans-serif] text-base font-semibold">
                  <span className="lg:hidden">Entering this decade</span>
                  <span className="hidden lg:inline">Explore this decade</span>
                </span>
              </div>
            </Link>
          ))}
          
          {/* Our Journey Timeline Link Block */}
          <Link
            to="/journey"
            className="group bg-[#8B1538] border-2 border-[#8B1538] p-8 hover:bg-[#6d1029] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 relative h-80 flex flex-col justify-center"
          >
            <div className="flex items-center justify-end gap-3 mb-4">
              <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-white transition-colors">
                Our Journey
              </p>
              <svg className="w-6 h-6 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="font-['Archivo_Black',sans-serif] text-3xl text-white transition-colors text-right leading-tight mb-3">
              Complete Timeline
            </h3>
            <p className="font-['Georgia',serif] text-lg text-white/90 transition-colors text-right">
              1880-2026
            </p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}