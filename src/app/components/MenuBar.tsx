import { useState } from "react";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "@/app/components/CustomLink";
import imgSutton1 from "@/assets/2c5265c6ea22021caad3fdfd90e59c1f5680e024.png";

interface MenuBarProps {
  isScrolled?: boolean;
}

export function MenuBar({ isScrolled = false }: MenuBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDecadesOpen, setIsDecadesOpen] = useState(false);
  const [expandedDecade, setExpandedDecade] = useState<string | null>(null);

  const decades = [
    { name: "Foundations Before Formation", years: "1837-1847" },
    { name: "The First Fifty Years", years: "1847-1899" },
    { name: "The Turn of the Century", years: "1900-1909" },
    { name: "The Great War Era", years: "1910-1919", hasObituary: true },
    { name: "The Roaring Twenties", years: "1920-1929" },
    { name: "The Thirties", years: "1930-1939" },
    { name: "Second World War", years: "1940-1949" },
    { name: "Post-War Revival", years: "1950-1959" },
    { name: "The Swinging Sixties", years: "1960-1969" },
    { name: "The Seventies", years: "1970-1979" },
    { name: "The Eighties", years: "1980-1989" },
    { name: "The Nineties", years: "1990-1999" },
    { name: "The New Millennium", years: "2000-2009" },
    { name: "The Twenty-Tens", years: "2010-2019" },
    { name: "The Twenty-Twenties", years: "2020-Present" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsDecadesOpen(false);
      setExpandedDecade(null);
    }
  };

  const toggleDecades = () => {
    setIsDecadesOpen(!isDecadesOpen);
  };

  const toggleDecadeDropdown = (decadeName: string) => {
    setExpandedDecade(expandedDecade === decadeName ? null : decadeName);
  };

  return (
    <>
      {/* Menu Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
      >
        <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          {/* Logo Section */}
          <Link to="/" className="flex gap-[12px] items-center hover:opacity-80 transition-opacity">
            <div className="h-[45px] w-[47px] shrink-0 flex items-center justify-center">
              <img 
                alt="Sutton Coldfield Cricket Club Logo" 
                className="w-full h-full object-contain scale-95 -translate-y-1" 
                src={imgSutton1} 
              />
            </div>
            <div className="flex flex-col justify-center text-[#181d27] font-['Archivo',sans-serif] md:translate-y-[2px]">
              {/* Mobile: Two lines */}
              <div className="md:hidden">
                <p className="font-extrabold leading-none text-[16px] text-[rgb(0,0,0)] translate-y-[1px]">Sutton Coldfield</p>
                <p className="font-bold leading-none text-[16px] text-[rgb(25,25,25)]">Cricket Club</p>
              </div>
              {/* Desktop: One line */}
              <p className="hidden md:block text-2xl leading-tight">
                <span className="font-bold font-['Archivo']">Sutton Coldfield </span>
                <span className="font-normal text-[rgb(0,0,0)]">Cricket Club</span>
              </p>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
              <path 
                d="M3 12H21M3 6H21M3 18H21" 
                stroke="black" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300"
          onClick={toggleMenu}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-[#f8f6f3] z-[70] shadow-2xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } w-full md:w-[400px]`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-300 font-['Helvetica',sans-serif]">
          <h2 className="text-2xl font-bold text-[#8B1538]">Menu</h2>
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Content */}
        <nav className="overflow-y-auto h-[calc(100%-88px)] font-['Helvetica',sans-serif]">
          <ul className="p-6 space-y-2">
            {/* Home */}
            <li>
              <Link
                to="/"
                className="block py-3 px-4 text-lg transition-colors text-gray-800 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>

            {/* Our Journey Timeline */}
            <li>
              <Link
                to="/journey"
                className="block py-3 px-4 text-lg transition-colors text-gray-800 font-medium"
                onClick={toggleMenu}
              >
                Our Journey Timeline
              </Link>
            </li>

            {/* Through the Decades with Dropdown */}
            <li>
              <button
                onClick={toggleDecades}
                className="w-full flex items-center justify-between py-3 px-4 text-lg transition-colors text-gray-800 font-medium hover:bg-gray-100 rounded"
              >
                <span>Through the Decades</span>
                {isDecadesOpen ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              
              {/* Dropdown menu */}
              {isDecadesOpen && (
                <ul className="ml-4 mt-2 space-y-1">
                  <li className="pb-2 border-b border-gray-200">
                    <Link
                      to="/decades"
                      className="block py-2 px-4 text-base text-[#8B1538] font-semibold hover:bg-gray-100 rounded transition-colors"
                      onClick={toggleMenu}
                    >
                      View All Decades
                    </Link>
                  </li>
                  {decades.map((decade, index) => (
                    <li key={index}>
                      {decade.hasObituary ? (
                        <>
                          <div className="flex items-center w-full py-2 px-4 text-base text-gray-700 hover:bg-gray-100 rounded transition-colors">
                            <Link
                              to={`/decades/${decade.years.split('-')[0]}`}
                              className="flex-1"
                              onClick={toggleMenu}
                            >
                              <span className="font-medium">{decade.name}</span>
                              <span className="text-sm text-gray-500 ml-2">({decade.years})</span>
                            </Link>
                            <button
                              onClick={() => toggleDecadeDropdown(decade.name)}
                              className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors"
                              aria-label="Toggle obituaries"
                            >
                              {expandedDecade === decade.name ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                          
                          {expandedDecade === decade.name && (
                            <div className="ml-4 mt-1 space-y-1">
                              <Link
                                to="/obituaries"
                                className="block py-2 px-4 text-sm text-[#8B1538] hover:bg-gray-100 rounded transition-colors italic"
                                onClick={toggleMenu}
                              >
                                View War Obituaries
                              </Link>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={`/decades/${decade.years.split('-')[0]}`}
                          className="block py-2 px-4 text-base text-gray-700 hover:bg-gray-100 rounded transition-colors"
                          onClick={toggleMenu}
                        >
                          <span className="font-medium">{decade.name}</span>
                          <span className="text-sm text-gray-500 ml-2">({decade.years})</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* The Teams Through Time */}
            <li>
              <Link
                to="/teams"
                className="block py-3 px-4 text-lg transition-colors text-gray-800 font-medium"
                onClick={toggleMenu}
              >
                Meet the Teams
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}