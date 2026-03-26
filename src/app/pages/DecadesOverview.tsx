import { Link, useNavigate } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { useState, useEffect, useRef } from "react";
import bannerImage from "@/assets/46b1b5438f7230b782958ef739cc53489cee10a2.png";

const decades = [
  {
    id: "1880s",
    title: "Foundations Before Formation",
    years: "1837-1847",
    description: "Cricket takes root in Sutton Coldfield before the club's formal founding",
    image: "https://images.unsplash.com/photo-1677679122801-42ac74545507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMDE4ODBzJTIwdmljdG9yaWFufGVufDF8fHx8MTc2ODU3Mzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1837"
  },
  {
    id: "1890s",
    title: "The First Fifty Years",
    years: "1847-1899",
    description: "Foundations, faith, and the forming of a club through Victorian challenges",
    image: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjB2aWN0b3JpYW58ZW58MXx8fHwxNzY4NDY2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1847"
  },
  {
    id: "1900s",
    title: "The Turn of the Century",
    years: "1900-1909",
    description: "Cricket blossoms in the new century",
    image: "https://images.unsplash.com/photo-1687742909721-cb8dc3361e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwdmludGFnZXxlbnwxfHx8fDE3Njg1NzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1900"
  },
  {
    id: "1910s",
    title: "The Great War Era",
    years: "1910-1919",
    description: "Cricket through challenging times",
    image: "https://images.unsplash.com/photo-1596807996038-612df413be5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd29ybGQlMjB3YXIlMjBzb2xkaWVyc3xlbnwxfHx8fDE3Njg1NzM5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1910"
  },
  {
    id: "1920s",
    title: "The Golden Resurgence",
    years: "1920-1929",
    description: "Renewal, growth, and sporting distinction after WWI",
    image: "https://images.unsplash.com/photo-1660978692407-a7863eebe395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd2lja2V0cyUyMHN0dW1wc3xlbnwxfHx8fDE3Njg1NzQ2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1920"
  },
  {
    id: "1930s",
    title: "The Thirties",
    years: "1930-1939",
    description: "Continued growth and excellence",
    image: "https://images.unsplash.com/photo-1677785643764-179393bc3842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmFsbCUyMGdyYXNzfGVufDF8fHx8MTc2ODU3NDY0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1930"
  },
  {
    id: "1940s",
    title: "Second World War",
    years: "1940-1949",
    description: "Resilience during the war years",
    image: "https://images.unsplash.com/photo-1701766993323-cc05898df2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBjbHViaG91c2V8ZW58MXx8fHwxNzY4NTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1940"
  },
  {
    id: "1950s",
    title: "Post-War Revival",
    years: "1950-1959",
    description: "The club rebuilds and thrives",
    image: "https://images.unsplash.com/photo-1589475201212-e0c77aa2d670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYm91bmRhcnklMjByb3BlfGVufDF8fHx8MTc2ODU3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1950"
  },
  {
    id: "1960s",
    title: "The Swinging Sixties",
    years: "1960-1969",
    description: "A decade of transformation",
    image: "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGl0Y2glMjBmaWVsZHxlbnwxfHx8fDE3Njg1NzQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1960"
  },
  {
    id: "1970s",
    title: "The Seventies",
    years: "1970-1979",
    description: "Expansion and modernization",
    image: "https://images.unsplash.com/photo-1692859415442-94eabe7a7488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ2xvdmVzJTIwcGFkc3xlbnwxfHx8fDE3Njg1NzQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1970"
  },
  {
    id: "1980s",
    title: "The Eighties",
    years: "1980-1989",
    description: "Competitive cricket at its finest",
    image: "https://images.unsplash.com/photo-1714449349503-ea9b1d6ed9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc2NvcmVib2FyZHxlbnwxfHx8fDE3Njg1NzQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1980"
  },
  {
    id: "1990s",
    title: "The Nineties",
    years: "1990-1999",
    description: "Approaching the millennium",
    image: "https://images.unsplash.com/photo-1568290925324-9d30cded4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGZpZWxkfGVufDF8fHx8MTc2ODU3NDY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/1990"
  },
  {
    id: "2000s",
    title: "The New Millennium",
    years: "2000-2009",
    description: "Cricket enters the 21st century",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0dGluZyUyMGFjdGlvbnxlbnwxfHx8fDE3Njg1NjUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/2000"
  },
  {
    id: "2010s",
    title: "The Twenty-Tens",
    years: "2010-2019",
    description: "A new era of success",
    image: "https://images.unsplash.com/photo-1743342875460-366f386a364a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYm93bGluZyUyMHNwZWVkfGVufDF8fHx8MTc2ODU3NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/decades/2010"
  },
  {
    id: "2020s",
    title: "The Twenty-Twenties",
    years: "2020-Present",
    description: "Our current chapter continues",
    image: "https://images.unsplash.com/photo-1722661840554-568357f77b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3Vuc2V0JTIwZ3JvdW5kfGVufDF8fHx8MTc2ODU3NDY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
            Explore over 140 years of cricket history at Sutton Coldfield Cricket Club. From our humble beginnings in 1880 to the thriving club we are today, each decade tells a unique story of triumph, resilience, and community spirit. Click on any era below to discover the players, matches, and moments that shaped our legacy.
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
                <p className="font-['Proxima_Nova',sans-serif] text-sm text-white/90 mt-1">
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
              <p className="font-['Proxima_Nova',sans-serif] text-sm uppercase tracking-wide text-white transition-colors">
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