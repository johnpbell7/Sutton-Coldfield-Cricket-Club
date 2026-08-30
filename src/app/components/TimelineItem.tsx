import { Link } from "@/app/components/CustomLink";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/app/components/ui/sheet";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import svgPaths from "@/imports/svg-sp3yg7d05h";

interface TimelineItemProps {
  year: string;
  title: string;
  shortDescription: string;
  yearOverview?: string;
  keyEvents?: string[];
  closingSummary?: string;
  fullDescription?: string; // Keep as optional fallback for backward compatibility
  images: string[];
  position: "left" | "right";
  location?: string;
  imageCaption?: string;
  video?: string;
  backgroundImage?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  isVisible: boolean;
}

export function TimelineItem({
  year,
  title,
  shortDescription,
  yearOverview,
  keyEvents,
  closingSummary,
  fullDescription,
  images,
  position,
  location = "Sutton Coldfield Cricket Ground",
  imageCaption,
  video,
  backgroundImage,
  isOpen,
  onOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  isVisible,
}: TimelineItemProps) {
  // Calculate decade for the button
  const getDecadeInfo = (yearString: string) => {
    const yearNum = parseInt(yearString);
    
    // The two nineteenth-century pages are not decades: one covers the years
    // before the club was formed, the other its first fifty years.
    if (yearNum < 1847) {
      return {
        url: '/decades/1837',
        label: `Before the Club, 1837-1847`
      };
    }

    if (yearNum >= 1847 && yearNum < 1900) {
      return {
        url: '/decades/1847',
        label: `The First Fifty Years, 1847-1899`
      };
    }
    
    if (yearNum >= 1900 && yearNum < 1910) {
      return {
        url: '/decades/1900',
        label: `1900's Overview`
      };
    }
    
    if (yearNum >= 1910 && yearNum < 1920) {
      return {
        url: '/decades/1910',
        label: `1910's Overview`
      };
    }
    
    if (yearNum >= 1920 && yearNum < 1930) {
      return {
        url: '/decades/1920',
        label: `1920's Overview`
      };
    }
    
    if (yearNum >= 1930 && yearNum < 1940) {
      return {
        url: '/decades/1930',
        label: `1930's Overview`
      };
    }
    
    if (yearNum >= 1940 && yearNum < 1950) {
      return {
        url: '/decades/1940',
        label: `1940's Overview`
      };
    }
    
    if (yearNum >= 1950 && yearNum < 1960) {
      return {
        url: '/decades/1950',
        label: `1950's Overview`
      };
    }
    
    if (yearNum >= 1960 && yearNum < 1970) {
      return {
        url: '/decades/1960',
        label: `1960's Overview`
      };
    }
    
    if (yearNum >= 1970 && yearNum < 1980) {
      return {
        url: '/decades/1970',
        label: `1970's Overview`
      };
    }
    
    if (yearNum >= 1980 && yearNum < 1990) {
      return {
        url: '/decades/1980',
        label: `1980's Overview`
      };
    }
    
    if (yearNum >= 1990 && yearNum < 2000) {
      return {
        url: '/decades/1990',
        label: `1990's Overview`
      };
    }
    
    if (yearNum >= 2000 && yearNum < 2010) {
      return {
        url: '/decades/2000',
        label: `2000's Overview`
      };
    }
    
    if (yearNum >= 2010 && yearNum < 2020) {
      return {
        url: '/decades/2010',
        label: `2010's Overview`
      };
    }
    
    if (yearNum >= 2020) {
      return {
        url: '/decades/2020',
        label: `2020's Overview`
      };
    }
    
    // Fallback
    const decade = Math.floor(yearNum / 10) * 10;
    return {
      url: `/decades/${decade}`,
      label: `${decade}'s Overview`
    };
  };

  const decadeInfo = getDecadeInfo(year);

  return (
    <>
      <div 
        className={`relative flex items-start gap-8 mb-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ willChange: isVisible ? 'auto' : 'opacity, transform' }}
      >
        {/* Timeline line container - always centered */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <button
            onClick={() => onOpen()}
            className="w-4 h-4 rounded-full bg-[#2c5aa0] border-2 border-white shadow-sm hover:scale-125 transition-transform cursor-pointer z-10"
            aria-label={`View details for ${title}`}
          />
        </div>

        {/* Image - always on the left */}
        <div className="w-[calc(50%-1rem)] flex justify-end pr-2 md:pr-8">
          <button
            onClick={() => onOpen()}
            className="hover:opacity-80 transition-opacity cursor-pointer"
          >
            {images[0] ? (
              <ImageWithFallback
                src={images[0]}
                alt={title}
                className="w-40 h-28 object-cover"
              />
            ) : (
              <div
                className="w-40 h-28 flex items-center justify-center border border-dashed border-neutral-300 bg-neutral-50 text-neutral-400 text-center px-2"
                aria-label="No image available for this entry"
              >
                <span className="text-[11px] leading-tight tracking-wide uppercase">
                  No image
                  <br />
                  available
                </span>
              </div>
            )}
          </button>
        </div>

        {/* Text content - always on the right */}
        <div className="w-[calc(50%-1rem)] pl-2 md:pl-8">
          <button
            onClick={() => onOpen()}
            className="block text-left hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <div className="flex flex-col gap-1">
              {/* Date */}
              <p className="text-sm text-gray-500 font-['Georgia',serif]">
                {year}
              </p>
              
              {/* Location */}
              <p className="text-xs text-gray-600 uppercase tracking-wider font-['Georgia',serif] font-semibold">
                {location}
              </p>
              
              {/* Title */}
              <h3 className="text-lg leading-snug mt-1 group-hover:underline font-['Georgia',serif]">
                {title}
              </h3>
              
              {/* Read more */}
              <p className="text-xs text-[#8B1538] mt-1 font-['Georgia',serif] underline">
                Read more
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent 
          side="bottom" 
          className="h-screen w-screen max-w-none p-0 border-none bg-gradient-to-b from-[rgba(255,255,255,0)] via-white to-white overflow-y-auto"
        >
          {/* Visually hidden accessibility elements */}
          <SheetTitle className="sr-only">{title}</SheetTitle>
          <SheetDescription className="sr-only">{shortDescription}</SheetDescription>
          
          {/* Close button - top right */}
          <button 
            onClick={onClose}
            className="fixed md:absolute top-0 right-0 w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-[#4a4a4a] flex items-center justify-center z-50 hover:bg-[#3a3a3a] transition-colors"
            style={{ paddingTop: 'max(0px, env(safe-area-inset-top))' }}
            aria-label="Close"
          >
            <div className="w-[14px] h-[14px] md:w-[17.5px] md:h-[17.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2343 16.2332">
                <g>
                  <path d={svgPaths.p460200} fill="white" stroke="white" strokeWidth="1.16667" />
                </g>
              </svg>
            </div>
          </button>

          {/* Diagonal white triangle at top */}
          <div className="absolute top-0 left-0 right-0 h-[180px] md:h-[336px] pointer-events-none">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 336">
              <path d="M0 336H1920V0L0 336Z" fill="white" />
            </svg>
          </div>

          {/* White background section */}
          <div className="absolute bg-white left-0 right-0 top-[180px] md:top-[336px] min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-336px)]">
            {/* Navigation - previous/next - hidden on mobile */}
            <div className="flex absolute right-4 top-[-20px] items-start justify-between w-[180px] border-b border-[rgba(34,34,34,0.3)] pb-px md:right-[60px] md:top-[-25px] md:w-[240px]">
              <button 
                onClick={onPrevious}
                disabled={!hasPrevious}
                className={`flex items-center transition-opacity ${hasPrevious ? 'opacity-50 hover:opacity-100' : 'opacity-20 cursor-not-allowed'}`}
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                <div className="px-1">
                  <p className="font-['Georgia',serif] font-medium text-sm md:text-base text-[#222] leading-relaxed">
                    previous
                  </p>
                </div>
              </button>
              <button 
                onClick={onNext}
                disabled={!hasNext}
                className={`flex items-center transition-opacity ${hasNext ? 'opacity-50 hover:opacity-100' : 'opacity-20 cursor-not-allowed'}`}
              >
                <div className="px-1">
                  <p className="font-['Georgia',serif] font-medium text-sm md:text-base text-[#222] leading-relaxed text-right">
                    next
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Content container */}
            <div className="max-w-[1270px] mx-auto px-4 md:px-4">
              {/* Header section - CENTERED */}
              <div className="max-w-[900px] mx-auto pt-[30px] md:pt-[50px] pb-0 relative">
                {/* Title */}
                <div className="mb-4 md:mb-5">
                  <h2 
                    className="font-['Archivo_Black',sans-serif] font-bold text-4xl md:text-6xl leading-tight text-[#8B1538]" 
                    aria-hidden="true"
                  >
                    {title}
                  </h2>
                </div>

                {/* Date and location */}
                <div className="flex gap-[10px] items-start opacity-50">
                  <p className="font-['Georgia',serif] font-normal text-sm md:text-base text-[#222] leading-relaxed">
                    {year}
                  </p>
                  <p className="font-['Georgia',serif] font-semibold text-sm md:text-base text-[#222] leading-relaxed uppercase">
                    {location}
                  </p>
                </div>
              </div>

              {/* Body content section - CENTERED */}
              <div className="max-w-[900px] mx-auto pt-[30px] md:pt-[50px]">
                {/* Structured content */}
                {(yearOverview || keyEvents || closingSummary) ? (
                  <div className="font-['Georgia',serif] space-y-8 md:space-y-12">
                    {/* Hero Image - Main background image above everything */}
                    {backgroundImage && (
                      <div className="space-y-2">
                        <ImageWithFallback
                          src={backgroundImage} 
                          alt="Sutton Coldfield Cricket Club team photo" 
                          className="w-full h-[400px] md:h-[600px] object-cover object-[center_70%]"
                        />
                        <div className="pt-1">
                          <p className="font-['Georgia',serif] text-sm leading-relaxed text-[#4a4a4a]">
                            {imageCaption || `${title}, ${year}.`}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Year Overview */}
                    {yearOverview && (
                      <div>
                        <h3 className="font-['Archivo_Black',sans-serif] text-2xl md:text-3xl text-[#8B1538] mb-4 md:mb-6">
                          Year Overview
                        </h3>
                        <p className="font-light text-base md:text-lg leading-relaxed text-[#222]">
                          {yearOverview}
                        </p>
                      </div>
                    )}


                    {/* Key Events */}
                    {keyEvents && keyEvents.length > 0 && (
                      <div className="bg-[#f8f6f3] p-6 md:p-8 border-l-4 border-[#8B1538]">
                        <h3 className="font-['Archivo_Black',sans-serif] text-xl md:text-2xl text-[#8B1538] mb-4 md:mb-6">
                          Key Events
                        </h3>
                        <div className={keyEvents.length > 5 ? "grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-3" : "space-y-3"}>
                          {keyEvents.map((event, idx) => (
                            <div key={idx} className="flex gap-3">
                              <span className="text-[#8B1538] font-bold flex-shrink-0 text-lg">•</span>
                              <p className="font-['Georgia',serif] text-sm md:text-base leading-relaxed text-[#222]">
                                {event}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Closing Summary */}
                    {closingSummary && (
                      <div className="bg-[#1a472a] p-6 md:p-8">
                        <h3 className="font-['Archivo_Black',sans-serif] text-xl md:text-2xl text-white mb-4 md:mb-6">
                          Summary
                        </h3>
                        <p className="font-['Georgia',serif] text-sm md:text-base leading-relaxed text-white italic font-medium">
                          {closingSummary}
                        </p>
                      </div>
                    )}

                    {/* Video section */}
                    {video && (
                      <div>
                        <video
                          src={video}
                          controls
                          autoPlay
                          muted
                          playsInline
                          className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain bg-black"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Fallback for old format */}
                    {backgroundImage && (
                      <div className="mb-8 md:mb-12">
                        <ImageWithFallback
                          src={backgroundImage} 
                          alt="Sutton Coldfield Cricket Club team photo" 
                          className="w-full h-[300px] md:h-[400px] object-cover"
                        />
                      </div>
                    )}

                    <div className="font-['Georgia',serif] text-base md:text-lg leading-relaxed text-[#222] space-y-4 md:space-y-5">
                      {fullDescription && fullDescription.split('\\n\\n').map((paragraph, idx) => (
                        <p key={idx} className="font-light">{paragraph}</p>
                      ))}
                    </div>

                    {video && (
                      <div className="mt-8 md:mt-12">
                        <video
                          src={video}
                          controls
                          autoPlay
                          muted
                          playsInline
                          className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain bg-black"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                  </>
                )}

                {/* Action Buttons at bottom */}
                <div className="mt-8 md:mt-10 pb-12 md:pb-16">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-4">
                    {/* Back to Timeline Button */}
                    <button 
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white hover:bg-[#8B1538] text-[#8B1538] hover:text-white border-2 border-[#8B1538] hover:border-white px-6 md:px-10 py-3 md:py-4 font-['Helvetica',sans-serif] font-semibold text-base md:text-lg transition-colors w-full md:w-auto"
                    >
                      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                      Back to Timeline
                    </button>
                    
                    {/* Go to Overview Button */}
                    <Link 
                      to={decadeInfo.url}
                      className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#8B1538] hover:bg-[#6d0f2a] text-white px-6 md:px-10 py-3 md:py-4 font-['Helvetica',sans-serif] font-semibold text-base md:text-lg transition-colors w-full md:w-auto"
                    >
                      {decadeInfo.label}
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}