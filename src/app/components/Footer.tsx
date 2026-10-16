// The slim designer banner links to John's site (a followed link: it's the backlink).
const JB_SITE = 'https://jbdesignagency.co.uk/';
const JB_ENQUIRY =
  'mailto:jb.designagency89@gmail.com?subject=' +
  encodeURIComponent('New website enquiry (via Sutton Coldfield Cricket Club)') +
  '&body=' +
  encodeURIComponent("Hi John,\r\n\r\nI saw the Sutton Coldfield Cricket Club site and I'd like to talk about a website for my business.\r\n\r\n");

function JbMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="jbcT" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff58a" /><stop offset="1" stopColor="#ffe94a" /></linearGradient>
        <linearGradient id="jbcS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#f5c400" /><stop offset="1" stopColor="#e2a400" /></linearGradient>
      </defs>
      <rect x="1.5" y="1.5" width="45" height="45" rx="10.5" fill="url(#jbcS)" stroke="#18181a" strokeWidth="1.6" />
      <rect x="5" y="3.6" width="38" height="36.4" rx="8" fill="url(#jbcT)" stroke="#e9b400" strokeWidth="0.8" />
      <path d="M37.9 29.29Q37.9 32.2 35.87 33.9Q33.83 35.61 30.2 35.61H17.4Q13.73 35.61 11.52 33.64Q9.3 31.67 9.3 27.84H14.92Q14.92 29.29 15.52 30.03Q16.11 30.78 17.24 30.78Q18.26 30.78 18.82 30.12Q19.38 29.46 19.38 28.2V12.39H29.83Q33.37 12.39 35.37 14.01Q37.37 15.63 37.37 18.41Q37.37 20.46 36.3 21.82Q35.22 23.17 33.44 23.7Q35.45 24.13 36.68 25.7Q37.9 27.27 37.9 29.29ZM25.04 21.78H28.74Q30.13 21.78 30.87 21.17Q31.62 20.56 31.62 19.37Q31.62 18.18 30.87 17.55Q30.13 16.92 28.74 16.92H25.04ZM32.18 28.53Q32.18 27.31 31.37 26.61Q30.56 25.92 29.14 25.92H25.04V31.04H29.2Q30.63 31.04 31.4 30.4Q32.18 29.75 32.18 28.53Z" fill="#18181a" transform="translate(24 21.8) scale(0.92) translate(-23.6 -24)" />
    </svg>
  );
}

// Slim JB Design Agency banner along the bottom of every footer (here and in App.tsx).
export function DesignerCredit() {
  return (
    <div className="bg-[#18181a] text-[#fafaf8] font-['Helvetica',sans-serif] text-[13.5px] leading-snug relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3.5 md:py-3 flex flex-col md:flex-row items-center justify-between gap-2.5 md:gap-6 text-center md:text-left">
        <a
          href={JB_SITE}
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-2.5 text-[#a3a3a0] no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff04d] rounded"
        >
          <JbMark className="w-6 h-6 flex-none" />
          <span>Designed &amp; built by <b className="font-semibold text-[#fafaf8] group-hover:underline underline-offset-[3px]">JB Design Agency</b></span>
        </a>
        <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2">
          <span className="font-medium">Like this site? Let’s build yours.</span>
          <a
            href={JB_ENQUIRY}
            className="inline-flex items-center gap-1.5 min-h-9 px-4 rounded-full bg-[#fff04d] text-[#18181a] font-semibold whitespace-nowrap no-underline transition hover:-translate-y-px hover:shadow-[0_6px_18px_rgb(255_240_77/0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff04d] motion-reduce:transition-none"
          >
            Start a project
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

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

        <DesignerCredit />
      </div>
    </footer>
  );
}
