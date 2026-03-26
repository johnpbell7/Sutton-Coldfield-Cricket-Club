import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import svgPaths from "@/imports/svg-ni9qtb6i07";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <MenuBar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1677679122801-42ac74545507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjAxODgwc3xlbnwxfHx8fDE3Njg0Mjc3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Historic Sutton Coldfield Cricket Club"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Section 1: The Foundation - White background */}
      <section className="relative bg-white">
        {/* Diagonal white triangle at top */}
        <div className="absolute top-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none z-10">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 336">
            <path d="M0 336H1920V0L0 336Z" fill="white" />
          </svg>
        </div>

        <div className="relative pt-[100px] md:pt-[180px] pb-[80px]">
          <div className="max-w-[1270px] mx-auto px-4 md:px-6">
            {/* Text content - offset to the right */}
            <div className="md:pl-[440px] mb-[60px] md:mb-[80px]">
              <h2 className="font-['Georgia',serif] font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-[#8B1538] mb-[20px]">
                A Legacy Since 1880
              </h2>
              <div className="font-['Georgia',serif] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#222] space-y-5">
                <p>
                  In the spring of 1880, twelve cricket enthusiasts gathered at the local town hall in Sutton Coldfield and decided to form what would become one of the region's most prestigious cricket clubs. The founding members included local business owners, teachers, and cricket lovers who shared a vision of creating a community centered around the gentleman's game.
                </p>
                <p>
                  The first practice sessions were held on a borrowed field in Sutton Park, with members bringing their own equipment and even marking the pitch themselves. Despite humble beginnings, the club's dedication to excellence and sportsmanship quickly attracted attention from the local Sutton Coldfield community.
                </p>
              </div>
            </div>

            {/* Image with caption on the left */}
            <div className="relative md:pl-[440px]">
              <div className="relative w-full md:w-[364px]">
                <img
                  src="https://images.unsplash.com/photo-1701766993323-cc05898df2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBoaXN0b3JpYyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODQyNzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Historic cricket pavilion"
                  className="w-full h-auto object-cover"
                />
                {/* Caption - below on mobile, left on desktop */}
                <div className="mt-4 md:mt-0 md:absolute md:left-[-440px] md:top-0 md:w-[280px] border-b border-[#d9c9ca] py-[10px]">
                  <p className="font-['Georgia',serif] text-[15px] md:text-[17.7px] leading-[26px] md:leading-[30px] text-[#4a4a4a]">
                    The founding members at their first meeting, Sutton Coldfield, 1880.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The First Pavilion - Cream/Beige background */}
      <section className="relative">
        {/* Background color */}
        <div className="absolute inset-0 bg-[#f8f6f3] -z-10" />
        
        {/* Diagonal transition from white to beige at top */}
        <div className="absolute top-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 348">
            <path d="M0 348L1920 0L1920 348L0 348Z" fill="#f8f6f3" />
          </svg>
        </div>

        {/* Diagonal transition from beige to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 348">
            <path d="M0 0L1920 348L1920 0L0 0Z" fill="white" />
          </svg>
        </div>

        <div className="relative pt-[100px] md:pt-[200px] pb-[100px] md:pb-[200px]">
          <div className="max-w-[1270px] mx-auto px-4 md:px-6">
            {/* Text content */}
            <div className="md:pl-[440px] mb-[60px] md:mb-[80px]">
              <h2 className="font-['Georgia',serif] font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-[#8B1538] mb-[20px]">
                The First Pavilion
              </h2>
              <div className="font-['Georgia',serif] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#222] space-y-5">
                <p>
                  After eight years of operating from temporary structures, the club raised funds to construct its first purpose-built pavilion in 1888. The elegant building featured changing rooms, a tea room, and a members' lounge with panoramic views of the playing field.
                </p>
                <p>
                  Local architect Thomas Whitmore designed the structure in the Victorian style, incorporating red brick and timber framing. The pavilion was officially opened by the Warwickshire captain in a ceremony attended by over 200 members and supporters.
                </p>
              </div>
            </div>

            {/* Image with caption */}
            <div className="relative md:pl-[440px]">
              <div className="relative w-full md:w-[364px]">
                <img
                  src="https://images.unsplash.com/photo-1764926125989-ae0acf67fbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwYWVyaWFsfGVufDF8fHx8MTc2ODQyNzcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cricket ground aerial view"
                  className="w-full h-auto object-cover"
                />
                <div className="mt-4 md:mt-0 md:absolute md:left-[-440px] md:top-0 md:w-[280px] border-b border-[#d9c9ca] py-[10px]">
                  <p className="font-['Georgia',serif] text-[15px] md:text-[17.7px] leading-[26px] md:leading-[30px] text-[#4a4a4a]">
                    The original pavilion under construction, Sutton Park, 1888.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Victorian Era - Light Green background */}
      <section className="relative">
        {/* Background color - lighter tint of club green */}
        <div className="absolute inset-0 bg-[rgba(26,71,42,0.08)] -z-10" />
        
        {/* Diagonal transition from white to green at top */}
        <div className="absolute top-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 348">
            <path d="M0 348L1920 0L1920 348L0 348Z" fill="rgba(26,71,42,0.08)" />
          </svg>
        </div>

        {/* Diagonal transition from green to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 348">
            <path d="M0 0L1920 348L1920 0L0 0Z" fill="white" />
          </svg>
        </div>

        <div className="relative pt-[100px] md:pt-[200px] pb-[100px] md:pb-[200px]">
          <div className="max-w-[1270px] mx-auto px-4 md:px-6">
            {/* Text content */}
            <div className="md:pl-[440px] mb-[60px] md:mb-[80px]">
              <h2 className="font-['Georgia',serif] font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-[#8B1538] mb-[20px]">
                Victorian Era Expansion
              </h2>
              <div className="font-['Georgia',serif] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#222] space-y-5">
                <p>
                  The 1896 season marked significant growth for Sutton Coldfield Cricket Club during the height of the Victorian era. Membership doubled to over 100 active players, and the club introduced a second team to accommodate the increased interest.
                </p>
                <p>
                  This period saw cricket become an integral part of Sutton Coldfield's social fabric, with matches drawing crowds of several hundred spectators. The club also established traditions that continue today, including the annual President's Match and the end-of-season celebration dinner.
                </p>
              </div>
            </div>

            {/* Image with caption */}
            <div className="relative md:pl-[440px]">
              <div className="relative w-full md:w-[364px]">
                <img
                  src="https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMHZpbnRhZ2UlMjBhY3Rpb248ZW58MXx8fHwxNzY4NDI3NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Victorian era cricket"
                  className="w-full h-auto object-cover"
                />
                <div className="mt-4 md:mt-0 md:absolute md:left-[-440px] md:top-0 md:w-[280px] border-b border-[#d9c9ca] py-[10px]">
                  <p className="font-['Georgia',serif] text-[15px] md:text-[17.7px] leading-[26px] md:leading-[30px] text-[#4a4a4a]">
                    Cricket in the Victorian era, Sutton Park, 1896.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Turn of Century - Light Red/Pink background */}
      <section className="relative">
        {/* Background color - light tint of club red */}
        <div className="absolute inset-0 bg-[rgba(139,21,56,0.06)] -z-10" />
        
        {/* Diagonal transition from white to pink at top */}
        <div className="absolute top-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 348">
            <path d="M0 348L1920 0L1920 348L0 348Z" fill="rgba(139,21,56,0.06)" />
          </svg>
        </div>

        {/* Diagonal transition from pink to white at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 348">
            <path d="M0 0L1920 348L1920 0L0 0Z" fill="white" />
          </svg>
        </div>

        <div className="relative pt-[100px] md:pt-[200px] pb-[100px] md:pb-[200px]">
          <div className="max-w-[1270px] mx-auto px-4 md:px-6">
            {/* Text content */}
            <div className="md:pl-[440px] mb-[60px] md:mb-[80px]">
              <h2 className="font-['Georgia',serif] font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-[#8B1538] mb-[20px]">
                A New Century Begins
              </h2>
              <div className="font-['Georgia',serif] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#222] space-y-5">
                <p>
                  To celebrate both the dawn of the 20th century and the club's 20th anniversary, Sutton Coldfield Cricket Club organized a spectacular three-day festival in June 1900. The event featured exhibition matches, social gatherings, and a grand dinner at the Three Tuns Hotel.
                </p>
                <p>
                  Former players returned from across the country to participate, including several who had played in the club's first season. A commemorative photograph was taken with all 150 attendees, and the club commissioned a special trophy to honor founding members.
                </p>
              </div>
            </div>

            {/* Image with caption */}
            <div className="relative md:pl-[440px]">
              <div className="relative w-full md:w-[364px]">
                <img
                  src="https://images.unsplash.com/photo-1611859683790-efeb80110c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY2x1YiUyMGNlbGVicmF0aW9uJTIwdGVhbXxlbnwxfHx8fDE3Njg0Mjc3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Century celebration"
                  className="w-full h-auto object-cover"
                />
                <div className="mt-4 md:mt-0 md:absolute md:left-[-440px] md:top-0 md:w-[280px] border-b border-[#d9c9ca] py-[10px]">
                  <p className="font-['Georgia',serif] text-[15px] md:text-[17.7px] leading-[26px] md:leading-[30px] text-[#4a4a4a]">
                    The grand century celebration gathering, Sutton Coldfield, 1900.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: The Journey Continues - Final White section */}
      <section className="relative bg-white">
        {/* Diagonal white triangle at top */}
        <div className="absolute top-0 left-0 right-0 h-[150px] md:h-[300px] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 336">
            <path d="M0 336H1920V0L0 336Z" fill="white" />
          </svg>
        </div>

        <div className="relative pt-[100px] md:pt-[180px] pb-[80px]">
          <div className="max-w-[1270px] mx-auto px-4 md:px-6">
            <div className="md:pl-[440px]">
              <h2 className="font-['Georgia',serif] font-bold text-[28px] md:text-[36px] leading-[36px] md:leading-[44px] text-[#8B1538] mb-[20px]">
                The Journey Continues
              </h2>
              <div className="font-['Georgia',serif] text-[16px] md:text-[18px] leading-[26px] md:leading-[30px] text-[#222] space-y-5">
                <p>
                  From those humble beginnings in 1880 to today, Sutton Coldfield Cricket Club has remained a cornerstone of our community. Through two world wars, economic challenges, and changing times, our commitment to cricket excellence and community spirit has never wavered.
                </p>
                <p>
                  Today, we continue to welcome players of all ages and abilities, maintaining the traditions established by our founders while embracing modern cricket. Our story is far from over – it's being written every day by our members, volunteers, and supporters who keep the spirit of cricket alive in Sutton Coldfield.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}