export function Footer() {
  return (
    <footer className="bg-[#1a472a] text-white pt-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Club Information */}
        <div className="text-center pb-12">
          <p className="font-['Georgia',serif] text-xl mb-3">
            Sutton Coldfield Cricket Club
          </p>
          <p className="font-['Georgia',serif] text-base opacity-80">
            Celebrating Over 180 Years of Cricket Excellence
          </p>
        </div>
        
        {/* Designer Credit */}
        <div className="border-t border-white/20 pt-5 md:pt-6 pb-0 bg-[#0d1f14] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="max-w-6xl mx-auto pb-5 md:pb-6 px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              {/* Left: Designer Info */}
              <div className="text-center md:text-left">
                <p className="font-['Helvetica',sans-serif] text-xs uppercase tracking-widest opacity-40 mb-2 letter-spacing-wide">
                  Website Design & Development
                </p>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 justify-center md:justify-start">
                  <p className="font-['Helvetica',sans-serif] font-bold text-base text-white opacity-60">
                    John Bell
                  </p>
                  <span className="hidden md:inline opacity-30">|</span>
                  <p className="font-['Helvetica',sans-serif] text-xs opacity-60 mt-1 md:mt-0">
                    Graphic Design: Branding, Print & Web
                  </p>
                </div>
              </div>
              
              {/* Right: Contact Info */}
              <div className="flex flex-row items-center gap-2 md:gap-4 text-xs w-full md:w-auto justify-center md:justify-start flex-wrap">
                <a 
                  href="mailto:johnpbell7@gmail.com" 
                  className="font-['Helvetica',sans-serif] hover:text-white transition-colors opacity-60 hover:opacity-100 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">johnpbell7@gmail.com</span>
                </a>
                <span className="opacity-30">|</span>
                <a 
                  href="tel:+447428728780" 
                  className="font-['Helvetica',sans-serif] hover:text-white transition-colors opacity-60 hover:opacity-100 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  07428 728780
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
