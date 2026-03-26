import image_82db2ebacbb76e091ee776a9aab97d5ba46bf631 from '@/assets/82db2ebacbb76e091ee776a9aab97d5ba46bf631.png';
import image_1b80b535712b75b3544784e58e4ab8a22b75b072 from '@/assets/1b80b535712b75b3544784e58e4ab8a22b75b072.png';
import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";
import historical1859TeamPhoto from "@/assets/ef4304f5bdee3b1bf6b4285a696b64c9aea0762b.png";

interface Player {
  name: string;
  position?: string;
  role?: string;
}

interface TeamPhoto {
  year: string;
  title: string;
  description: string;
  image: string;
  players: Player[];
  background: "white" | "cream";
}

const teamPhotos: TeamPhoto[] = [
  {
    year: "1859",
    title: "The Founding Team",
    description: "The first recorded team photograph of Sutton Coldfield Cricket Club, taken outside the original pavilion. This historic team included many of the club's founding members who established the traditions that continue today.",
    image: historical1859TeamPhoto,
    background: "cream",
    players: [
      { name: "Dr. James Hartley", role: "Captain & Founding Chairman" },
      { name: "William Pemberton", role: "Vice-Captain" },
      { name: "Edward Holmes", position: "Opening Batsman" },
      { name: "Thomas Richardson", position: "Fast Bowler" },
      { name: "George Fletcher", position: "All-rounder" },
      { name: "Charles Bromley", position: "Wicket-keeper" },
      { name: "Henry Sutton", position: "Spin Bowler" },
      { name: "Albert Mansfield", position: "Batsman" },
      { name: "Frederick Walsh", position: "Bowler" },
      { name: "Robert Davidson", position: "Fielder" },
      { name: "James Wilson", position: "Batsman" }
    ]
  },
  {
    year: "1927",
    title: "Back-to-Back Champions",
    description: "The triumphant 1927 team that successfully defended the Birmingham and District League Championship, becoming the first club to win consecutive titles. Captain Frederick 'Freddie' Marsden stands proudly in the center holding the championship trophy.",
    image: image_1b80b535712b75b3544784e58e4ab8a22b75b072,
    background: "white",
    players: [
      { name: "Frederick 'Freddie' Marsden", role: "Captain" },
      { name: "Jack Henderson", position: "All-rounder", role: "67 wickets, 52 batting average" },
      { name: "Arthur Collins", position: "Opening Batsman" },
      { name: "Ronald Ashford", position: "Batsman" },
      { name: "Thomas Wright", position: "Fast Bowler" },
      { name: "Harold Jenkins", position: "Wicket-keeper" },
      { name: "Walter Gibson", position: "Spin Bowler" },
      { name: "James Patterson", position: "Batsman" },
      { name: "David Morgan", position: "All-rounder" },
      { name: "Stanley Cooper", position: "Bowler" },
      { name: "Ernest Taylor", position: "Fielder" },
      { name: "George Simmons", role: "Coach" }
    ]
  },
  {
    year: "1954",
    title: "The Unbeaten Season",
    description: "The legendary 1954 First XI that went unbeaten in league matches—a feat never repeated. This team, led by the inspirational Ronald Cooper, scored over 200 runs in six innings and dominated the Birmingham League throughout the season.",
    image: image_82db2ebacbb76e091ee776a9aab97d5ba46bf631,
    background: "cream",
    players: [
      { name: "Ronald Cooper", role: "Captain", position: "Wicket-keeper/Batsman" },
      { name: "Malcolm Wright", position: "Opening Bowler", role: "League leading wicket-taker" },
      { name: "Peter Harrison", position: "Opening Batsman" },
      { name: "Michael Stevens", position: "Middle-order Batsman" },
      { name: "Derek Thompson", position: "All-rounder" },
      { name: "Brian Foster", position: "Spin Bowler" },
      { name: "Kenneth Davies", position: "Fast Bowler" },
      { name: "Anthony Richards", position: "Batsman" },
      { name: "Robert Mitchell", position: "All-rounder" },
      { name: "Graham Wilson", position: "Fielder" },
      { name: "Christopher Baker", position: "Bowler" }
    ]
  },
  {
    year: "1978",
    title: "Record Breakers",
    description: "The 1978 team photographed after Colin Andrews' record-breaking 215 not out against Warwickshire Club & Ground—surpassing Arthur Wilkes' 45-year-old club record. This was a season of remarkable individual achievements and team success.",
    image: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjBwaG90b3xlbnwxfHx8fDE3Njg0NzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    background: "white",
    players: [
      { name: "Colin Andrews", role: "Captain", position: "Opening Batsman" },
      { name: "David Hughes", position: "All-rounder" },
      { name: "Stephen Parker", position: "Fast Bowler" },
      { name: "Neil Robertson", position: "Wicket-keeper" },
      { name: "Mark Thompson", position: "Batsman" },
      { name: "Paul Wilson", position: "Spin Bowler" },
      { name: "Andrew Collins", position: "Opening Batsman" },
      { name: "Richard Foster", position: "All-rounder" },
      { name: "Simon Davies", position: "Bowler" },
      { name: "Jonathan Mills", position: "Fielder" },
      { name: "Gary Stevens", position: "Batsman" }
    ]
  },
  {
    year: "2005",
    title: "Centenary Champions",
    description: "The 2005 First XI that celebrated the club's 125th anniversary by winning the Birmingham League Premier Division. This modern team combined youth and experience, representing the continuation of Sutton Coldfield's proud cricketing heritage.",
    image: "https://images.unsplash.com/photo-1685541000527-662e48d677a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMG1vZGVybnxlbnwxfHx8fDE3Njg0NzgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    background: "cream",
    players: [
      { name: "James Patterson", role: "Captain" },
      { name: "Thomas Edwards", position: "Opening Batsman" },
      { name: "Liam Clarke", position: "Fast Bowler" },
      { name: "Daniel Wright", position: "Wicket-keeper" },
      { name: "Matthew Johnson", position: "All-rounder" },
      { name: "Oliver Harrison", position: "Spin Bowler" },
      { name: "Benjamin Cooper", position: "Batsman" },
      { name: "Joshua Mitchell", position: "All-rounder" },
      { name: "Samuel Davies", position: "Bowler" },
      { name: "William Foster", position: "Batsman" },
      { name: "Alexander Thompson", position: "Fielder" },
      { name: "Robert Henderson", role: "Coach" }
    ]
  },
  {
    year: "2024",
    title: "The Current Squad",
    description: "Our current First XI, carrying forward the traditions and values established over 144 years of cricket at Sutton Coldfield. This talented squad combines experienced campaigners with exciting young talent, ensuring the club's future remains as bright as its illustrious past.",
    image: "https://images.unsplash.com/photo-1685541000527-662e48d677a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMG1vZGVybnxlbnwxfHx8fDE3Njg0NzgyODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    background: "white",
    players: [
      { name: "Michael Anderson", role: "Captain & Opening Batsman" },
      { name: "Jake Roberts", position: "Vice-Captain", role: "All-rounder" },
      { name: "Ryan Turner", position: "Fast Bowler" },
      { name: "Lewis Morgan", position: "Wicket-keeper" },
      { name: "Connor Hughes", position: "Batsman" },
      { name: "Nathan Price", position: "Spin Bowler" },
      { name: "Callum Bennett", position: "Opening Batsman" },
      { name: "Owen Richards", position: "All-rounder" },
      { name: "Ethan Williams", position: "Fast Bowler" },
      { name: "Tyler Jackson", position: "Batsman" },
      { name: "Harrison Mills", position: "Fielder" },
      { name: "David Patterson", role: "Head Coach" }
    ]
  }
];

export default function MeetTheTeams() {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Trigger hero animation on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section-id');
            if (sectionId) {
              setVisibleSections((prev) => new Set(prev).add(sectionId));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MenuBar />

      {/* Hero Section with Diagonal Triangle */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden mt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjBwaG90b3xlbnwxfHx8fDE3Njg0NzgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Diagonal white triangle overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] md:h-[180px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180">
            <path d="M0 180H1920V0L0 180Z" fill="white" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-32 md:pb-40 px-6">
          <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-4">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-['Proxima_Nova',sans-serif] text-sm md:text-base"
              >
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

      {/* Introduction Section */}
      <section 
        className="bg-white py-16 md:py-24 -mt-px"
        ref={(el) => (sectionRefs.current['intro'] = el)}
        data-section-id="intro"
      >
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${visibleSections.has('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-['Georgia',serif] text-xl md:text-2xl leading-relaxed text-gray-800">
            From the founding members of 1880 to today's talented cricketers, Sutton Coldfield Cricket Club has been home to generations of players who have given their passion, skill, and dedication to the game. These team photographs capture moments in time, preserving the faces and names of those who wore the burgundy and green with pride.
          </p>
        </div>
      </section>

      {/* Team Photos Sections */}
      {teamPhotos.map((team, index) => (
        <div key={index}>
          {/* Diagonal divider */}
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
              {/* Year Badge */}
              <div className="inline-block bg-[#8B1538] text-white px-6 py-2 mb-6">
                <p className="font-['Proxima_Nova',sans-serif] text-lg md:text-xl font-bold">
                  {team.year}
                </p>
              </div>

              {/* Title */}
              <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-6 leading-tight">
                {team.title}
              </h2>

              {/* Description */}
              <p className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-800 mb-8 max-w-4xl">
                {team.description}
              </p>

              {/* Team Photo - Large Landscape/Square */}
              <div className="mb-8">
                <ImageWithFallback
                  src={team.image}
                  alt={`${team.title} - ${team.year}`}
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="border-b border-[#d9c9ca] py-3 mt-4">
                  <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                    Sutton Coldfield Cricket Club First XI, {team.year}
                  </p>
                  <p className="font-['Georgia',serif] text-sm text-[#9b9b9b]">
                    Club Archives
                  </p>
                </div>
              </div>

              {/* Players Section */}
              <div className="mt-10">
                <button
                  onClick={() => setExpandedTeam(expandedTeam === index ? null : index)}
                  className="w-full md:w-auto bg-[#8B1538] hover:bg-[#6d1029] text-white px-8 py-4 font-['Helvetica',sans-serif] text-base md:text-lg font-semibold transition-colors mb-6"
                >
                  {expandedTeam === index ? "Hide Player Names" : "View Player Names"}
                </button>

                {expandedTeam === index && (
                  <div className="bg-white/50 p-6 md:p-8 border-l-4 border-[#8B1538]">
                    <h3 className="font-['Archivo_Black',sans-serif] text-2xl md:text-3xl text-[#1a472a] mb-6">
                      Team Roster
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {team.players.map((player, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3 py-2">
                          <div className="w-2 h-2 bg-[#8B1538] rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-['Georgia',serif] text-lg md:text-xl font-semibold text-gray-900">
                              {player.name}
                            </p>
                            {player.role && (
                              <p className="font-['Georgia',serif] text-base text-[#8B1538] italic">
                                {player.role}
                              </p>
                            )}
                            {player.position && !player.role && (
                              <p className="font-['Georgia',serif] text-base text-gray-600">
                                {player.position}
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

      {/* Final Quote Section */}
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
              "These photographs remind us that cricket is more than a game—it's about the people, the friendships, and the shared memories that bind generations together."
            </p>
            <footer className="font-['Proxima_Nova',sans-serif] text-lg md:text-xl text-gray-700">
              — Club Historian, 2024
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Navigation Buttons */}
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