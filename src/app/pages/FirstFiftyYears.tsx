import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function FirstFiftyYears() {
  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      <MenuBar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1703229702362-ae76aace387c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMGhpc3RvcmljYWx8ZW58MXx8fHwxNzY4ODE5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Historic cricket"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <h1 className="font-['Archivo_Black',sans-serif] text-5xl md:text-7xl mb-6">
              The First Fifty Years
            </h1>
            <p className="font-['Georgia',serif] text-xl md:text-2xl max-w-2xl mx-auto">
              1847–1896: The founding, growth, and golden jubilee of Sutton Coldfield Cricket Club
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link
          to="/decades"
          className="inline-flex items-center gap-2 text-[#8B1538] hover:text-[#6d1029] transition-colors font-['Helvetica',sans-serif] font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Through the Decades
        </Link>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Introduction */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-['Archivo_Black',sans-serif] text-4xl text-[#8B1538] mb-6">
                The Foundation
              </h2>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800 mb-6">
                The Sutton Coldfield Cricket Club was formally founded in 1847 by Rev. William Kirkpatrick Riland Bedford, during a period when organised sport was increasingly promoted as a force for physical health, moral improvement, and social unity.
              </p>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800 mb-6">
                From the outset, the club reflected Victorian ideals of recreation, discipline, and community engagement. Rev. Bedford's vision was to establish a cricket club open to men of all classes, supported by modest subscriptions.
              </p>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                Cricket was already being played informally in Rectory Park and Sutton Park before 1847, laying the foundations for what would become one of the region's most enduring sporting institutions.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759733845137-5eb942436f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmllbGQlMjBwYXZpbGlvbnxlbnwxfHx8fDE3Njg4MTk0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Historic cricket pavilion"
                className="w-full h-auto"
              />
              <div className="border-b border-[#d9c9ca] py-3 mt-4">
                <p className="font-['Georgia',serif] text-sm text-[#4a4a4a]">
                  The early days of cricket at Rectory Park
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline of Key Events */}
        <section className="mb-20">
          <h2 className="font-['Archivo_Black',sans-serif] text-4xl text-[#8B1538] mb-12">
            Key Milestones
          </h2>
          
          <div className="space-y-12">
            {/* 1847 */}
            <div className="border-l-4 border-[#8B1538] pl-8">
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#1a472a] mb-3">
                1847 – The Club is Founded
              </h3>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                On 27 July 1847, Rev. Bedford issued a circular proposing the formation of a cricket club. The club was established with inclusive membership and low subscription fees, with early matches played in Sutton Park.
              </p>
            </div>

            {/* 1850 */}
            <div className="border-l-4 border-[#8B1538] pl-8">
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#1a472a] mb-3">
                1850 – Establishment at Rectory Park
              </h3>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                Following concerns over the future use of Sutton Park, Rev. Bedford laid out a permanent cricket ground on the Rectory Glebes, offering it to the club at nominal cost. This move secured the club's future and established Rectory Park as its home.
              </p>
            </div>

            {/* 1856 */}
            <div className="border-l-4 border-[#8B1538] pl-8">
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#1a472a] mb-3">
                1856 – Revival and the Free Foresters
              </h3>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                After a period of inactivity, Rev. Bedford issued a renewed appeal emphasising cricket's physical and moral benefits. The club was successfully revived, and in the same year, Bedford founded the Free Foresters Cricket Club, whose ethos aligned closely with Sutton's values.
              </p>
            </div>

            {/* 1863 */}
            <div className="border-l-4 border-[#8B1538] pl-8">
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#1a472a] mb-3">
                1863 – National Recognition
              </h3>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                The Free Foresters presented Rev. Bedford with a silver salver in recognition of his long service and friendship. The salver is now displayed in the Long Room at Lord's Cricket Ground—a lasting testament to Bedford's contribution to cricket.
              </p>
            </div>

            {/* 1869 */}
            <div className="border-l-4 border-[#8B1538] pl-8">
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#1a472a] mb-3">
                1869 – Restoration After Decline
              </h3>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                Rev. Bedford returned after a three-year absence to find the club struggling. Together with his son, he led a revival effort, re-laying the square and erecting a small dressing pavilion known as 'The Shed'.
              </p>
            </div>

            {/* 1890 */}
            <div className="border-l-4 border-[#8B1538] pl-8">
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#1a472a] mb-3">
                1890 – The New Pavilion
              </h3>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                Members approved the construction of a permanent pavilion at Rectory Park. Funded through subscriptions and fundraising events, the pavilion was completed in under four months at a cost of £100, transforming the club's facilities.
              </p>
            </div>

            {/* 1896 */}
            <div className="border-l-4 border-[#8B1538] pl-8">
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#1a472a] mb-3">
                1896 – The Golden Jubilee
              </h3>
              <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
                The club celebrated its Golden Jubilee, marking fifty years since its formation. The occasion was commemorated with a special match and presentations to surviving founder members, including Rev. Bedford. By this time, the club was firmly established, financially stable, and widely respected.
              </p>
            </div>
          </div>
        </section>

        {/* Rev. Bedford's Legacy */}
        <section className="mb-20 bg-white p-12 border-l-8 border-[#8B1538]">
          <h2 className="font-['Archivo_Black',sans-serif] text-4xl text-[#8B1538] mb-6">
            The Legacy of Rev. W.K.R. Bedford
          </h2>
          <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800 mb-6">
            Rev. William Kirkpatrick Riland Bedford's influence shaped the club for nearly six decades. His vision of an inclusive cricket club, open to all classes and supported by the community, established principles that endure to this day.
          </p>
          <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800 mb-6">
            Beyond Sutton Coldfield, Bedford's founding of the Free Foresters Cricket Club in 1856 demonstrated his commitment to the spirit of cricket—fellowship, fair play, and the joy of the game. The silver salver presented to him in 1863, now at Lord's, stands as national recognition of his contribution.
          </p>
          <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800">
            When Rev. Bedford passed away in 1905 at the age of 78, he left behind a thriving club with permanent facilities, a strong fixture list, and a reputation for excellence. His founding vision had become reality.
          </p>
        </section>

        {/* WW1 Service Roll of Honour */}
        <section className="mb-20">
          <h2 className="font-['Archivo_Black',sans-serif] text-4xl text-[#8B1538] mb-6">
            Thirty-Nine Served in WW1
          </h2>
          <p className="font-['Georgia',serif] text-lg leading-relaxed text-gray-800 mb-8">
            Members of Sutton Coldfield Cricket Club who served in the Great War, 1914-1918
          </p>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto bg-white border-2 border-[#8B1538]">
            <table className="w-full">
              <thead className="bg-[#8B1538] text-white">
                <tr>
                  <th className="font-['Helvetica',sans-serif] text-left py-4 px-6 font-semibold">Names</th>
                  <th className="font-['Helvetica',sans-serif] text-left py-4 px-6 font-semibold">Initials</th>
                  <th className="font-['Helvetica',sans-serif] text-left py-4 px-6 font-semibold">Military Services</th>
                  <th className="font-['Helvetica',sans-serif] text-left py-4 px-6 font-semibold">Outcome of the Great War</th>
                </tr>
              </thead>
              <tbody className="font-['Georgia',serif]">
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Abrahall</td>
                  <td className="py-3 px-6">S E</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Barton</td>
                  <td className="py-3 px-6">A</td>
                  <td className="py-3 px-6">South Staffs Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Britton</td>
                  <td className="py-3 px-6">L C</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Browne</td>
                  <td className="py-3 px-6">H J</td>
                  <td className="py-3 px-6">Public School Battalion</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Chapman</td>
                  <td className="py-3 px-6">F</td>
                  <td className="py-3 px-6">Royal Field Artillery</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Chopping</td>
                  <td className="py-3 px-6">R B C</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in conflict 28 Aug 16</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Clarke</td>
                  <td className="py-3 px-6">F B</td>
                  <td className="py-3 px-6">North Staffordshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Crockford</td>
                  <td className="py-3 px-6">L C</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Crockford</td>
                  <td className="py-3 px-6">E B</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Davies</td>
                  <td className="py-3 px-6">H</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Etchells</td>
                  <td className="py-3 px-6">T</td>
                  <td className="py-3 px-6">Manchester Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Evans</td>
                  <td className="py-3 px-6">J R L</td>
                  <td className="py-3 px-6">Worcester Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Felton</td>
                  <td className="py-3 px-6">J H</td>
                  <td className="py-3 px-6">10 bt Royal Warwickshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in conflict 10 Apr 18</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Gateley</td>
                  <td className="py-3 px-6">A J</td>
                  <td className="py-3 px-6">Liverpool Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Grove</td>
                  <td className="py-3 px-6">P A</td>
                  <td className="py-3 px-6">South Staffs Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in conflict 4 Oct 17</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Hadley</td>
                  <td className="py-3 px-6">A</td>
                  <td className="py-3 px-6">Royal Engineers</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Hall</td>
                  <td className="py-3 px-6">N</td>
                  <td className="py-3 px-6">South Staffordshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Hallewell-Rogers</td>
                  <td className="py-3 px-6">E</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Died 3 Jul 16</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Homer</td>
                  <td className="py-3 px-6">C R</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Jenkins</td>
                  <td className="py-3 px-6">D</td>
                  <td className="py-3 px-6">Bengali Patiala Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Lilly</td>
                  <td className="py-3 px-6">A J</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in conflict 2 Mar 17</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Malkin</td>
                  <td className="py-3 px-6">W</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Marwick</td>
                  <td className="py-3 px-6">E B</td>
                  <td className="py-3 px-6">2nd Signal Co, Royal Engineers</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Died of Pneumonia 9 Nov 18</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Norton</td>
                  <td className="py-3 px-6">J H</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Oxford</td>
                  <td className="py-3 px-6">F S</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Parkes</td>
                  <td className="py-3 px-6">O</td>
                  <td className="py-3 px-6">Royal Navy</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Parsons</td>
                  <td className="py-3 px-6">S E</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in conflict 14 Apr 18</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Pearson</td>
                  <td className="py-3 px-6">E L</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Pochin</td>
                  <td className="py-3 px-6">H</td>
                  <td className="py-3 px-6">South Staffordshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Preedy</td>
                  <td className="py-3 px-6">L J</td>
                  <td className="py-3 px-6">4th bt Royal Warwickshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in conflict 31 Mar 18</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Ray</td>
                  <td className="py-3 px-6">J C</td>
                  <td className="py-3 px-6">South African Artillery</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Simpson</td>
                  <td className="py-3 px-6">W B</td>
                  <td className="py-3 px-6">Rifle Brigade</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in action 10 July 1916</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Shenton</td>
                  <td className="py-3 px-6">H E</td>
                  <td className="py-3 px-6">14th bt Royal Warwickshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Died of Wounds 27 Aug 17</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Sturgess</td>
                  <td className="py-3 px-6">F H</td>
                  <td className="py-3 px-6">South Staffordshire Reg</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Pneumonia effects of gas 15 Apr 19</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Tabb</td>
                  <td className="py-3 px-6">E J</td>
                  <td className="py-3 px-6">Royal Warwickshire Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Wakefield</td>
                  <td className="py-3 px-6">A E</td>
                  <td className="py-3 px-6">1/7th bt Worcestershire Regiment</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Killed in conflict 17 Aug 17</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Whillier</td>
                  <td className="py-3 px-6">E C</td>
                  <td className="py-3 px-6">Essex Reg</td>
                  <td className="py-3 px-6"></td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Wilson-Browne</td>
                  <td className="py-3 px-6">R M</td>
                  <td className="py-3 px-6">RFC 21st Squadron</td>
                  <td className="py-3 px-6 text-[#8B1538] font-semibold">Wounded & Died a POW 21 Jul 16</td>
                </tr>
                <tr className="hover:bg-[#f8f6f3] transition-colors">
                  <td className="py-3 px-6">Yates</td>
                  <td className="py-3 px-6">J H</td>
                  <td className="py-3 px-6">R A M C</td>
                  <td className="py-3 px-6"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {[
              { name: "Abrahall", initials: "S E", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Barton", initials: "A", service: "South Staffs Reg", outcome: "" },
              { name: "Britton", initials: "L C", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Browne", initials: "H J", service: "Public School Battalion", outcome: "" },
              { name: "Chapman", initials: "F", service: "Royal Field Artillery", outcome: "" },
              { name: "Chopping", initials: "R B C", service: "Royal Warwickshire Reg", outcome: "Killed in conflict 28 Aug 16" },
              { name: "Clarke", initials: "F B", service: "North Staffordshire Reg", outcome: "" },
              { name: "Crockford", initials: "L C", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Crockford", initials: "E B", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Davies", initials: "H", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Etchells", initials: "T", service: "Manchester Reg", outcome: "" },
              { name: "Evans", initials: "J R L", service: "Worcester Reg", outcome: "" },
              { name: "Felton", initials: "J H", service: "10 bt Royal Warwickshire Reg", outcome: "Killed in conflict 10 Apr 18" },
              { name: "Gateley", initials: "A J", service: "Liverpool Reg", outcome: "" },
              { name: "Grove", initials: "P A", service: "South Staffs Reg", outcome: "Killed in conflict 4 Oct 17" },
              { name: "Hadley", initials: "A", service: "Royal Engineers", outcome: "" },
              { name: "Hall", initials: "N", service: "South Staffordshire Reg", outcome: "" },
              { name: "Hallewell-Rogers", initials: "E", service: "Royal Warwickshire Reg", outcome: "Died 3 Jul 16" },
              { name: "Homer", initials: "C R", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Jenkins", initials: "D", service: "Bengali Patiala Reg", outcome: "" },
              { name: "Lilly", initials: "A J", service: "Royal Warwickshire Reg", outcome: "Killed in conflict 2 Mar 17" },
              { name: "Malkin", initials: "W", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Marwick", initials: "E B", service: "2nd Signal Co, Royal Engineers", outcome: "Died of Pneumonia 9 Nov 18" },
              { name: "Norton", initials: "J H", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Oxford", initials: "F S", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Parkes", initials: "O", service: "Royal Navy", outcome: "" },
              { name: "Parsons", initials: "S E", service: "Royal Warwickshire Reg", outcome: "Killed in conflict 14 Apr 18" },
              { name: "Pearson", initials: "E L", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Pochin", initials: "H", service: "South Staffordshire Reg", outcome: "" },
              { name: "Preedy", initials: "L J", service: "4th bt Royal Warwickshire Reg", outcome: "Killed in conflict 31 Mar 18" },
              { name: "Ray", initials: "J C", service: "South African Artillery", outcome: "" },
              { name: "Simpson", initials: "W B", service: "Rifle Brigade", outcome: "Killed in action 10 July 1916" },
              { name: "Shenton", initials: "H E", service: "14th bt Royal Warwickshire Reg", outcome: "Died of Wounds 27 Aug 17" },
              { name: "Sturgess", initials: "F H", service: "South Staffordshire Reg", outcome: "Pneumonia effects of gas 15 Apr 19" },
              { name: "Tabb", initials: "E J", service: "Royal Warwickshire Reg", outcome: "" },
              { name: "Wakefield", initials: "A E", service: "1/7th bt Worcestershire Regiment", outcome: "Killed in conflict 17 Aug 17" },
              { name: "Whillier", initials: "E C", service: "Essex Reg", outcome: "" },
              { name: "Wilson-Browne", initials: "R M", service: "RFC 21st Squadron", outcome: "Wounded & Died a POW 21 Jul 16" },
              { name: "Yates", initials: "J H", service: "R A M C", outcome: "" }
            ].map((person, index) => (
              <div key={index} className="bg-white border-2 border-[#8B1538] p-5">
                <div className="mb-3 pb-3 border-b border-gray-200">
                  <h3 className="font-['Helvetica',sans-serif] text-lg font-semibold text-[#8B1538]">
                    {person.name}
                  </h3>
                  <p className="font-['Georgia',serif] text-sm text-gray-600 mt-1">
                    Initials: {person.initials}
                  </p>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="font-['Helvetica',sans-serif] text-xs uppercase tracking-wide text-gray-500 mb-1">
                      Military Service
                    </p>
                    <p className="font-['Georgia',serif] text-sm text-gray-800">
                      {person.service}
                    </p>
                  </div>
                  {person.outcome && (
                    <div>
                      <p className="font-['Helvetica',sans-serif] text-xs uppercase tracking-wide text-gray-500 mb-1">
                        Outcome
                      </p>
                      <p className="font-['Georgia',serif] text-sm text-[#8B1538] font-semibold">
                        {person.outcome}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-16">
          <h2 className="font-['Archivo_Black',sans-serif] text-3xl text-[#8B1538] mb-6">
            Explore More of Our History
          </h2>
          <p className="font-['Georgia',serif] text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Continue your journey through the decades and discover how the club evolved from these foundations into the institution it is today.
          </p>
          <Link
            to="/decades"
            className="inline-flex items-center gap-3 bg-[#8B1538] text-white px-10 py-5 font-['Helvetica',sans-serif] font-semibold text-lg hover:bg-[#6d1029] transition-all duration-300"
          >
            View All Decades
          </Link>
        </section>

        {/* Navigation Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous - Back to 1837 */}
            <Link
              to="/decades/1837"
              className="group border-2 border-[#8B1538] p-8 hover:bg-[#8B1538] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <ArrowLeft className="w-6 h-6 text-[#8B1538] group-hover:text-white transition-colors" />
                <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-[#8B1538] group-hover:text-white transition-colors">
                  Previous Era
                </p>
              </div>
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#8B1538] group-hover:text-white transition-colors">
                Foundations Before Formation
              </h3>
              <p className="font-['Georgia',serif] text-gray-600 group-hover:text-white/90 transition-colors mt-2">
                1837-1847
              </p>
            </Link>

            {/* Next - 1900s */}
            <Link
              to="/decades/1900"
              className="group border-2 border-white bg-[#8B1538] hover:bg-[#6d0f2a] p-8 transition-colors"
            >
              <div className="flex items-center justify-end gap-3 mb-3">
                <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-white transition-colors text-right">
                  Next Era
                </p>
                <ArrowLeft className="w-6 h-6 text-white transition-colors rotate-180" />
              </div>
              <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-white transition-colors text-right">
                The Turn of the Century
              </h3>
              <p className="font-['Georgia',serif] text-white/90 transition-colors mt-2 text-right">
                1900-1909
              </p>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}