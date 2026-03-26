import { useParams, Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";

// Decade page component with split introduction text
interface DecadeData {
  name: string;
  years: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  introLarge: string;
  introBody: string;
  sections: {
    title: string;
    content: string[];
    image?: string;
    imageCaption?: string;
    background?: "white" | "cream";
  }[];
  keyMoments: {
    year: string;
    title: string;
    description: string;
  }[];
  quote?: {
    text: string;
    author: string;
  };
}

const decadeData: Record<string, DecadeData> = {
  "1880s": {
    name: "Foundations Before Formation",
    years: "1837-1847",
    heroTitle: "Foundations Before Formation",
    heroSubtitle: "Cricket Takes Root in Sutton Coldfield",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjB2aWN0b3JpYW58ZW58MXx8fHwxNzY4NDY2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "Long before the formal establishment of Sutton Coldfield Cricket Club in 1847, cricket was already an established presence in the town.",
    introBody: "Played informally in Rectory Park and Sutton Park from at least 1837, the game formed part of the social fabric of the local community. These early matches laid the groundwork for what would become one of the Midlands' oldest cricket clubs. The guiding influence during these formative years was the Rev. Canon W.K. Riland Bedford, whose dedication to sport, community, and organisation shaped the club's early character. Though detailed records from the first sixty years are scarce, later research and recollections have allowed a general picture of these early days to emerge. The absence of formal documentation reflects the attitudes of the period, where record-keeping was not yet considered essential. This foundational era represents not only the origins of organised cricket in Sutton Coldfield, but also the beginnings of a tradition built on community involvement, volunteer effort, and a deep connection to place.",
    sections: [
      {
        title: "The Early Game in Sutton Coldfield",
        background: "cream",
        content: [
          "Cricket was being played in Rectory Park as early as 1837, a decade before the club's official formation. This is evidenced by a minute book entry from 1897, which recorded W.K. Riland Bedford's sixty-year association with the club. These early games were informal but regular, taking place on unfenced ground shared with the wider parkland.",
          "Sutton Park and Rectory Park served as the natural centres for cricketing activity, with pitches prepared and maintained by volunteers. The simplicity of these arrangements did little to diminish enthusiasm for the game, which quickly became an important social pastime in the town."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Early cricket in Sutton Coldfield's parks"
      },
      {
        title: "Rectory Road and the Early Landscape",
        background: "white",
        content: [
          "Rectory Road in the mid-nineteenth century was little more than a country lane connecting Boot Hill to the church. The Rector would customarily walk through the park to reach the church, emerging near what later became known as Sidney's Cottage. Bedford Road, now a major thoroughfare, did not exist until the 1930s and was originally a rough track known locally as Blackberry Lane or Bricky Lane.",
          "Travel to matches relied almost entirely on foot or horseback. Visiting teams were often accommodated overnight at local farms such as School Farm, and matches frequently depended on the hospitality of the home side. A modest 'Tin Hut' near the Boot Inn was erected to support this purpose, remnants of which survived well into the modern era."
        ],
        image: "https://images.unsplash.com/photo-1687742909721-cb8dc3361e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwdmludGFnZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0NjY0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "The rural landscape of early Sutton Coldfield"
      },
      {
        title: "The Bedford Family and Rectory Park",
        background: "cream",
        content: [
          "The Rev. W.K. Riland Bedford and his family were central to the club's early development. All five of his sons were cricketers, and together with the Rector and his gardener, they prepared the pitches and transformed Rectory Park into a suitable playing area. The unfenced nature of the ground and the open surroundings sometimes gave rise to uncertainty regarding the precise location of early pitches.",
          "Beyond cricket, the Rector contributed significantly to the beauty of Rectory Park. He planted numerous trees, including an avenue of elms offering a clear view of the church from the Rectory. Though many were later lost to development, some survived into the twenty-first century. The Rectory itself served as the social and organisational hub of the club during its earliest years."
        ],
        image: "https://images.unsplash.com/photo-1585822754398-04873d4e1f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBoaXN0b3JpY3xlbnwxfHx8fDE3Njg0NjY0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "The Rectory and surrounding parkland"
      },
      {
        title: "Preserving the Early History",
        background: "white",
        content: [
          "For many decades, little effort was made to formally document the club's early history. It was not until 1937, with the centenary approaching, that Frank S. Styles undertook the formidable task of reconstructing the club's past through diligent research. His work was later continued by Norman Sharp and, in the modern era, by Peter Bell, who compiled and digitised records into The Complete History of Sutton Coldfield Cricket Club.",
          "Despite setbacks, including the disappearance of early minute books, these efforts ensured that the club's origins were not lost to time. The preservation of these records reflects a growing recognition of the importance of heritage as the club moved toward future milestones."
        ]
      }
    ],
    keyMoments: [
      {
        year: "1837",
        title: "Cricket Played in Rectory Park",
        description: "Earliest recorded evidence of cricket being played in Sutton Coldfield"
      },
      {
        year: "1847",
        title: "Club Officially Founded",
        description: "Sutton Coldfield Cricket Club formally established by Rev. W.K. Riland Bedford"
      },
      {
        year: "1856",
        title: "Free Foresters Cricket Club Formed",
        description: "Founded by Rev. Bedford, reflecting his wider influence on the game"
      },
      {
        year: "1937",
        title: "Early History Compiled",
        description: "Frank S. Styles undertook major research ahead of the club's centenary"
      },
      {
        year: "2013",
        title: "History Digitised",
        description: "Peter Bell completed the transition of the club's history into an electronic record"
      }
    ],
    quote: {
      text: "It would be foolish to pretend that the story is complete.",
      author: "Club Historical Preface"
    }
  },
  "1890s": {
    name: "The First Fifty Years",
    years: "1847-1899",
    heroTitle: "The First Fifty Years",
    heroSubtitle: "Foundations, Faith, and the Forming of a Club",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjB2aWN0b3JpYW58ZW58MXx8fHwxNzY4NDY2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "Founded in 1847, Sutton Coldfield Cricket Club emerged during the Victorian era when organised sport was increasingly valued as a force for physical health, moral improvement, and social cohesion.",
    introBody: "The club was established not for profit, but from a belief that recreation should be accessible to all classes within the community. From its earliest matches in Sutton Park, the club's survival depended heavily on the dedication of its founders—above all the Rev. William Kirkpatrick Riland Bedford. His vision, generosity, and personal labour sustained the club through repeated periods of decline. Under his guidance, cricket became firmly established at Rectory Park, a ground that would soon earn admiration far beyond the town. Throughout the second half of the nineteenth century, the club faced recurring challenges: fluctuating membership, fragile finances, and limited facilities. Yet each crisis was met with voluntary effort, local patronage, and a strong sense of shared responsibility. By the time of the Golden Jubilee in 1896, Sutton Coldfield Cricket Club had evolved from a fragile parish pastime into a respected and enduring sporting institution.",
    sections: [
      {
        title: "The Founding Years (1847–1856)",
        background: "cream",
        content: [
          "The club's story began on 27 July 1847, when the Rev. Bedford circulated a letter to local residents proposing the formation of a cricket club. His aim was both progressive and inclusive: to provide healthy recreation through a club open to all classes, supported by modest subscriptions.",
          "Early cricket was played in Sutton Park, but proposed railway developments in the 1840s raised concerns over long-term access. In response, Bedford—appointed Rector of Sutton Coldfield in 1850—laid out a dedicated cricket ground on the Rectory Glebes, later known as Rectory Park, and offered it to the club at nominal cost.",
          "Despite this generosity, sustained activity proved difficult. By 1856, the club had become largely inactive, prompting Bedford to issue a renewed appeal emphasising cricket's moral and physical benefits. With the ground freely available and temporary accommodation provided, the club was successfully revived."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Rectory Park cricket ground, 1850s"
      },
      {
        title: "Cricket, Community, and the Free Foresters",
        background: "white",
        content: [
          "Cricket at Rectory Park quickly became part of a wider sporting and social culture. Archery, a favoured pursuit of the Rev. Bedford, was regularly practised on the grounds, with the pavilion housing targets alongside cricket equipment.",
          "In 1856, Bedford also founded the Free Foresters Cricket Club, a nomadic side built on principles of fellowship and goodwill. Matches between Sutton Coldfield and the Free Foresters became a regular feature, often involving Sutton teams of twenty-two players competing against smaller but formidable Forester elevens.",
          "Between 1859 and 1862, several highly reported encounters took place. Though frequently ending in defeat for Sutton, these matches—dominated by players such as T. Goodrich—raised playing standards and reinforced cricket's importance within the town's identity."
        ],
        image: "https://images.unsplash.com/photo-1687742909721-cb8dc3361e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwdmludGFnZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0NjY0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Victorian cricket equipment and Free Foresters"
      },
      {
        title: "Facilities, Grounds, and the Pavilion",
        background: "cream",
        content: [
          "Facilities developed slowly and relied heavily on voluntary effort. In 1869, following a three-year absence, the Rector returned to find the club once again in decline. With his son's assistance, part of the square was re-laid and expanded, and a small dressing pavilion—later known as 'The Shed'—was erected by the Rector's gardener.",
          "Conditions remained basic for many years. The playing area was small, boundaries were undefined, and maintenance was demanding. Financial crises were frequent, with several moments during the 1880s when the club's future was openly questioned.",
          "A decisive turning point came in 1890 with the construction of a new pavilion. Funded through subscriptions, donations, and fundraising events, the building was completed in just four months at a cost of £100. It marked a major step forward in facilities and symbolised the club's renewed stability and ambition."
        ],
        image: "https://images.unsplash.com/photo-1585822754398-04873d4e1f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBoaXN0b3JpY3xlbnwxfHx8fDE3Njg0NjY0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "The new pavilion constructed in 1890"
      },
      {
        title: "Club Colours",
        background: "white",
        content: [
          "The adoption of official club colours evolved gradually, reflecting both financial constraints and a growing sense of identity. By 1881, it was acknowledged that the club had previously used colours, though no record survives of their design. Attempts to reinstate them were discussed but not pursued. In 1884, a subcommittee was appointed to select new colours, but again no details were recorded.",
          "The matter was finally resolved in 1886, when the club formally adopted a dark blue cap and jacket, each bearing a yellow Tudor rose on the cap and jacket pocket. Despite supply challenges later that year, the design was reaffirmed and publicly announced within the pavilion.",
          "This colour scheme became a lasting symbol of the club's identity and marked its transition into a more formally organised sporting body."
        ]
      },
      {
        title: "Governance, Membership, and Sporting Strength",
        background: "cream",
        content: [
          "From the 1870s onward, the club benefited from the involvement of prominent local figures, including clergymen, doctors, solicitors, and civic leaders. Governance became more structured, with clearly defined roles for captains, secretaries, and treasurers.",
          "The introduction of professional bowlers in the mid-1880s raised playing standards, while the formation of a Second XI in 1891 reflected growing participation. By the mid-1890s, junior and schoolboy memberships had been introduced, ensuring continuity and future development."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Victorian-era match at Rectory Park"
      },
      {
        title: "Jubilee and Consolidation (1896–1899)",
        background: "white",
        content: [
          "The club's Golden Jubilee in 1896 was marked by a commemorative match and presentations to surviving founder members, including the Rev. Bedford. By this stage, Sutton Coldfield Cricket Club was firmly established and widely respected.",
          "By 1899, the season followed a settled pattern. Fixtures included matches against Camp Hill Old Edwardians, City of Birmingham Officials, Knowle and Dorridge, Barnt Green, Walsall Y.M.F., Lichfield, Sutton Town, Castle Bromwich, Bishop Vesey's Grammar School, and Erdington. With limited daylight—prior to the introduction of summer time—the practice match was traditionally held on the first Saturday in May. The season concluded at the end of August and comprised approximately seventeen Saturday fixtures."
        ]
      }
    ],
    keyMoments: [
      {
        year: "1847",
        title: "Club Founded",
        description: "Rev. Bedford circulates proposal to local residents"
      },
      {
        year: "1850",
        title: "Establishment at Rectory Park",
        description: "Cricket ground laid out on the Rectory Glebes"
      },
      {
        year: "1856",
        title: "Club Revived and Free Foresters Founded",
        description: "Renewed subscriptions restore activity; Free Foresters C.C. established"
      },
      {
        year: "1863",
        title: "Silver Salver Presented",
        description: "Free Foresters honour Rev. Bedford; salver now held at Lord's"
      },
      {
        year: "1869",
        title: "Restoration After Decline",
        description: "Ground re-laid and pavilion erected following Rector's return"
      },
      {
        year: "1886",
        title: "Club Colours Adopted",
        description: "Dark blue cap and jacket with yellow Tudor rose officially adopted"
      },
      {
        year: "1890",
        title: "New Pavilion Constructed",
        description: "Permanent pavilion secures the club's future"
      },
      {
        year: "1891",
        title: "Second XI Formed",
        description: "Formation of second team reflects growing membership"
      },
      {
        year: "1896",
        title: "Golden Jubilee Celebrated",
        description: "Fiftieth anniversary marked with commemorative match"
      },
      {
        year: "1899",
        title: "Club Enters a Settled Era",
        description: "Regular fixtures and defined season structure established"
      }
    ],
    quote: {
      text: "The club was established not for profit, but from a belief that recreation should be accessible to all classes within the community.",
      author: "Club Historical Records, 1847"
    }
  },
  "1900s": {
    name: "A Time of Change and Uncertainty",
    years: "1901-1909",
    heroTitle: "A Time of Change and Uncertainty",
    heroSubtitle: "Growth, Loss, and the Question of the Ground",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjB2aWN0b3JpYW58ZW58MXx8fHwxNzY4NDY2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The opening years of the twentieth century were a period of transition for Sutton Coldfield Cricket Club.",
    introBody: "While the foundations laid in the previous decades continued to support the club, these years were marked by administrative change, social events, and emerging uncertainty over the long-term security of Rectory Park. Membership increased, playing standards improved, and fundraising activities became more structured, yet the club also experienced the loss of its founder and the challenges of maintaining facilities and finances in a changing social landscape.",
    sections: [
      {
        title: "Leadership and Administration",
        background: "cream",
        content: [
          "In 1901, William Fowler retired after more than a decade of service as Hon. Secretary and Treasurer. His careful administration had provided stability, and his departure marked a turning point in club governance.",
          "1902 saw C. Shelvoke serve as captain for a single season. R.S. Walters, Hon. Treasurer, experimented with supplying refreshments for members, an effort quickly abandoned after financial impracticality. These years illustrated both the continuity of leadership and the challenges of informal club management."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Club leadership during the Edwardian era"
      },
      {
        title: "Cricketing Activity and Team Development",
        background: "white",
        content: [
          "W.H. Sidney, appointed in 1904 as groundsman, coach, and professional player, significantly improved playing standards and pitch quality. His influence would be felt for years to come.",
          "By 1906, the club fielded a fourth Saturday team, reflecting growing participation. Performance highlights included centuries by J.B. Russell, R.E. Yates, F.B. Clark, and E.B. Crockford, alongside notable bowling achievements.",
          "Fixtures included Camp Hill O.E., Erdington, Wolverhampton, Barnt Green, and Harborne. The variety of opponents helped strengthen the club's competitive standards and regional reputation."
        ]
      },
      {
        title: "Social and Fundraising Events",
        background: "cream",
        content: [
          "A new fundraising event was introduced in 1902—the Gymkhana—featuring novelty races and throwing competitions. This quickly became an annual tradition, fostering community engagement and supporting club finances.",
          "Open-air concerts were held in 1906 and subsequent years, combining entertainment with fundraising. They relied on volunteer organisation and were vital for balancing the club's finances.",
          "Regular club activities, including social gatherings and prize presentations, reinforced a strong sense of community among members and their families."
        ],
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGdhbGF8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Social events at Rectory Park"
      },
      {
        title: "Honouring Legacy and Life Members",
        background: "white",
        content: [
          "In 1905, the club's founder, Rev. W.K.R. Bedford, passed away at age 78, ending an era of direct guidance. Bedford's influence included literary contributions, historical works, and the establishment of the Free Foresters Cricket Club.",
          "Life Memberships were awarded to Rev. R.A. Morley in 1903 and H.E.R. Bedford in 1907, recognising their service on and off the field. These honours marked the club's growing appreciation for long-term commitment and dedication."
        ]
      },
      {
        title: "Facilities and the Ground",
        background: "cream",
        content: [
          "In 1905, the lower ground was taken over for third-team matches, and a pavilion was erected at the northwest corner. Open-air concerts helped fund improvements, including lighting and maintenance.",
          "By 1907, the Ecclesiastical Commissioners' plans for the Rectory raised uncertainty about the club's future tenancy. The club faced the ongoing challenge of securing a permanent lease for its historic playing ground—an issue that would persist for years to come."
        ],
        image: "https://images.unsplash.com/photo-1585822754398-04873d4e1f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBoaXN0b3JpY3xlbnwxfHx8fDE3Njg0NjY0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Pavilion developments at Rectory Park"
      },
      {
        title: "Season Highlights and Statistics",
        background: "white",
        content: [
          "Matches were played across 1st, 2nd, 'A', 'B', and Wednesday teams. Batting and bowling highlights included Horace Lott leading averages in 1909, E.B. Crockford with century scores and strong bowling, and R.E. Yates and F.B. Clark with multiple centuries.",
          "Despite strong individual performances, many matches ended in draws due to inconsistent bowling support and weather impacts. Gymkhanas and open-air concerts mitigated financial challenges caused by poor summer conditions.",
          "By 1909, comprehensive match and player statistics were being introduced, reflecting a growing professionalism in club record-keeping and administration."
        ]
      }
    ],
    keyMoments: [
      {
        year: "1901",
        title: "Officer Retirement",
        description: "William Fowler steps down after long service as Hon. Secretary and Treasurer"
      },
      {
        year: "1902",
        title: "Gymkhana Introduced",
        description: "First fundraising Gymkhana held at Rectory Park"
      },
      {
        year: "1903",
        title: "New Life Member",
        description: "Rev. R.A. Morley elected first Life Member"
      },
      {
        year: "1904",
        title: "Professional Appointment",
        description: "W.H. Sidney engaged as groundsman, coach, and professional player"
      },
      {
        year: "1905",
        title: "Death of Founder",
        description: "Rev. W.K.R. Bedford passes away, ending the club's founding era"
      },
      {
        year: "1906",
        title: "Fourth Team Formed",
        description: "Membership grows; multiple teams compete across Saturday fixtures"
      },
      {
        year: "1907",
        title: "Ground Uncertainty",
        description: "Concerns arise regarding Rectory Park's future under ecclesiastical transfer plans"
      },
      {
        year: "1908",
        title: "Financial Strain and Sporting Highlights",
        description: "Season impacted by weather; R.F. Yates scores century; F.R. and W.H. Foster achieve notable performance"
      },
      {
        year: "1909",
        title: "Statistical Records Begin",
        description: "Comprehensive match and player statistics introduced; ongoing tenancy issues persist"
      }
    ],
    quote: {
      text: "We continue to grow and adapt, even as we face uncertainty about the very ground beneath our feet.",
      author: "Club Secretary, 1907"
    }
  },
  "1910s": {
    name: "A Decade of Transition and Challenge",
    years: "1910-1919",
    heroTitle: "A Decade of Transition and Challenge",
    heroSubtitle: "Achievement, Resilience, and the Great War",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjB2aWN0b3JpYW58ZW58MXx8fHwxNzY4NDY2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1910s were a decade of achievement, resilience, and upheaval for Sutton Coldfield Cricket Club.",
    introBody: "The decade began with a period of consolidation following the retirement of the long-serving Rev. W.C.R. Bedford, who had guided the club with wisdom and dedication for over six decades. The club saw the rise of exceptional players whose records would be remembered for years: L.C. Crockford, J.B. Russell, E.B. Crockford, F.B. Clark, and H. Lott all displayed outstanding skill and commitment. During this period, the club strengthened its role as a centre of social and community life. Concerts, annual dinners, and gymkhanas became regular highlights, reinforcing camaraderie among members and families. The integration of the Sutton Coldfield Hockey Club in 1910, along with hosting football and school matches, illustrated the club's expanding influence in local recreational life. The outbreak of the First World War in 1914 dramatically affected the club's operations. Many members enlisted, some paying the ultimate price, while others supported the war effort locally. Despite the disruption, the club maintained its facilities, hosted convalescent soldiers, and ensured cricket could resume smoothly after hostilities ended. This decade exemplified resilience, adaptability, and the enduring cultural significance of sport in Sutton Coldfield.",
    sections: [
      {
        title: "Club Leadership and Administration",
        background: "cream",
        content: [
          "The decade was marked by a smooth transition in leadership. Canon C.W. Barnard became President in 1911, succeeding Rev. Bedford, providing stability and continuity. John B. Russell assumed the first XI captaincy, guiding teams to consistent victories. Club committees carefully managed finances and membership, even during wartime, ensuring long-term sustainability. Decisions regarding fixtures, ground use, and community engagement were increasingly professional and strategic, laying the foundations for post-war resurgence.",
          "After the Great War, the club faced the challenge of rebuilding both its membership and infrastructure. At a committee meeting on 3rd March 1919, attention was given to practical matters such as hiring a groundsman, replacing a collapsed sight screen, and ordering four tons of Nottinghamshire marl to improve the pitches. A provisional list of fixtures for 1919 was circulated, signalling the club's determination to return to full activity.",
          "The war had taken a dreadful toll on members, including Percy Grove, Honorary Secretary since 1911, and Arthur Lilly, Honorary Treasurer from 1906. Both men had served their country and made the ultimate sacrifice on the battlefield. The club mourned their loss deeply, acknowledging their contributions on and off the field.",
          "At the Annual General Meeting on 24th March 1919, chaired by Rev. Canon Barnard, the club elected new officers: J.H. Cornwell as Treasurer, George Sharp as Secretary, L.C. Crockford as 1st XI Captain, and George Sharp as 2nd XI Captain. Subscriptions were revised to reflect post-war economic realities, and the club received generous support from local dignitaries and clergy as vice presidents. Notably, a memorial tablet to honour members who had died in the war was offered and funded by Canon Barnard himself, ensuring their sacrifice was permanently remembered in the Pavilion."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Club leadership during the 1910s"
      },
      {
        title: "Sporting Excellence and Player Highlights",
        background: "white",
        content: [
          "Despite the disruption caused by the war, the club's cricketing tradition continued. In 1919, the 1st XI included returning stalwarts L.C. and E.B. Crockford, F.B. Clark, H. Lott, and F.H. Beardshaw. F.B. Clark led both with bat and ball, scoring 814 runs at an average of 26.3 and taking 74 wickets at 14.3 runs per wicket. Beardshaw scored 502 runs at 31 and took 30 wickets, while A.E. Terry contributed 57 wickets at 9.1 runs per wicket. E.B. Crockford added 574 runs and 54 wickets at 16.9, reflecting the depth and versatility of the team. The 1st XI played 21 Saturday games (won 8, lost 7, drew 6), while the midweek side played 14 games (won 5, lost 3, drew 6).",
          "The 2nd XI faced challenges due to stronger opposition fielding first-team players unexpectedly, notably from Hall Green, Pickwick, and Bournville. Despite these handicaps, they completed 21 games, winning 8, losing 11, and drawing 2. A remarkable moment came when Sutton's 2nd XI conceded 318 runs to Harborne away, surpassing their previous record of 298 in 1910."
        ],
        image: "https://images.unsplash.com/photo-1687742909721-cb8dc3361e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwdmludGFnZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0NjY0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Cricket excellence in the 1910s"
      },
      {
        title: "Facilities, Grounds, and Multi-Sport Use",
        background: "cream",
        content: [
          "The club's grounds remained central to both sporting success and community engagement. Investments in rollers, sheds, and wicket preparation allowed for high-quality cricket, while top and lower grounds were shared with hockey, football, and school teams. In 1919, marling of the ground ensured readiness for the opening match on 26th April."
        ],
        image: "https://images.unsplash.com/photo-1585822754398-04873d4e1f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBoaXN0b3JpY3xlbnwxfHx8fDE3Njg0NjY0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Multi-sport facilities at Rectory Park"
      },
      {
        title: "Social Events and Community Engagement",
        background: "white",
        content: [
          "Beyond sport, the club continued to foster community spirit through annual dinners, concerts, gymkhanas, and garden fetes. Post-war, it became a focal point for remembrance and recovery, with the memorial tablet commemorating fallen members reinforcing the club's civic role."
        ]
      },
      {
        title: "Wartime Impact (1914–1918)",
        background: "cream",
        content: [
          "The First World War interrupted normal play, but did not halt the club's operations. Of the members who served, 39 went to war and 13 lost their lives. Matches during these years were limited, often featuring scratch sides. Committee members maintained facilities, coordinated events for convalescent soldiers, and ensured finances remained stable. The war years left a profound impact on both personnel and infrastructure, shaping the club's post-war priorities."
        ],
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGdhbGF8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "The club during wartime"
      }
    ],
    keyMoments: [
      {
        year: "1910",
        title: "Hockey Club Integration",
        description: "Sutton Coldfield Hockey Club integrated, expanding the club's multi-sport role"
      },
      {
        year: "1911",
        title: "New President",
        description: "Canon C.W. Barnard becomes President, succeeding Rev. Bedford"
      },
      {
        year: "1914",
        title: "World War I Begins",
        description: "Outbreak of WWI dramatically affects club operations as members enlist"
      },
      {
        year: "1914-1918",
        title: "Wartime Cricket",
        description: "Limited matches played with scratch sides; facilities maintained for post-war resumption"
      },
      {
        year: "1918",
        title: "War Ends",
        description: "Armistice signed; club begins planning for post-war cricket"
      },
      {
        year: "March 1919",
        title: "Committee Meeting",
        description: "Groundsman hired, sight screen replaced, and Nottinghamshire marl ordered for pitches"
      },
      {
        year: "March 1919",
        title: "Annual General Meeting",
        description: "New officers elected, subscriptions revised, memorial tablet funded by Canon Barnard"
      },
      {
        year: "April 1919",
        title: "Season Resumes",
        description: "Opening match on 26th April marks full return to competitive cricket"
      },
      {
        year: "1919",
        title: "Memorial Tablet Dedicated",
        description: "Memorial tablet honoring fallen members permanently installed in Pavilion"
      }
    ]
  },
  "1920s": {
    name: "The Golden Resurgence",
    years: "1920-1929",
    heroTitle: "The Golden Resurgence",
    heroSubtitle: "Sutton Coldfield Cricket Club in the 1920s",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMG1hdGNoJTIwMTkyMHN8ZW58MXx8fHwxNzY4ODUyOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1920s marked a period of renewal, growth, and sporting distinction for Sutton Coldfield Cricket Club.",
    introBody: "Emerging from the disruption of the First World War, the Club re-established itself as one of the strongest and most respected cricketing institutions in the Midlands. The decade combined administrative stability, steady financial recovery, and an exceptional standard of cricket, reflecting both the changing social fabric of the town and the renewed importance of organised sport within the community. Strong leadership from long-serving officers ensured continuity, while investment in facilities transformed Rectory Park into a ground of growing distinction. The pavilion, enclosure, and playing surfaces were improved steadily throughout the decade, reinforcing the Club's commitment to hospitality and presentation. Off the field, social events, shared use of the ground, and collaboration with hockey, tennis, and community organisations strengthened the Club's role at the heart of local life. On the field, Sutton Coldfield enjoyed one of the most successful eras in its history. A remarkable concentration of county players, outstanding individual performances, and competitive fixtures against the strongest Midland clubs established a reputation for cricket played in the right spirit, but at the highest club standard.",
    sections: [
      {
        title: "Leadership, Administration & Continuity",
        background: "cream",
        content: [
          "The 1920s were underpinned by exceptional service from dedicated officers and committee members. Figures such as George Sharp, Norman Marsh, J.B. Russell, E.B. Crockford, and F.H. Beardshaw provided stability through long tenures in secretarial, treasury, and captaincy roles. Their work ensured that post-war recovery was matched by prudent financial management and clear governance.",
          "The decade also saw significant moments of transition. The passing of Norman Marsh, long-serving treasurer, and the later deaths of respected figures such as Canon C.W. Barnard were deeply felt. Each was commemorated with dignity, reflecting the Club's strong sense of heritage and gratitude."
        ],
        image: "https://images.unsplash.com/photo-1685541000527-662e48d677a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMG9mZmljZXJzJTIwY29tbWl0dGVlfGVufDF8fHx8MTc2ODg1MzI0OHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Club officers and committee members"
      },
      {
        title: "Facilities, Grounds & Pavilion Development",
        background: "white",
        content: [
          "Major improvements to Rectory Park defined the decade. Pavilion re-thatching, the acquisition and conversion of army huts for teas, installation of sight screens, flower beds, railings, and the eventual connection of mains water in 1929 all transformed the matchday experience. These developments were often funded through member guarantees, benefit matches, and innovative fundraising initiatives.",
          "The planting of trees and hedges along the ground's boundaries preserved its rural character amid increasing residential development, while improvements to vehicle access acknowledged the gradual rise of motor transport."
        ],
        image: "https://images.unsplash.com/photo-1701766993323-cc05898df2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBoaXN0b3JpYyUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2ODg1MjkwOXww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Historic cricket pavilion"
      },
      {
        title: "Cricketing Excellence & Playing Strength",
        background: "cream",
        content: [
          "The standard of cricket reached remarkable heights. The Club regularly fielded sides containing multiple county players, including E.B. Crockford, F.B. Clark, A.F. Leighton, D.G. Foster, and N. Sharp. Batting strength was exceptional, particularly during the late 1920s, when Sutton possessed what was widely regarded as its finest batting order on paper.",
          "Individual milestones abounded: Norman Sharp's first-ever thousand-run season in 1928, record partnerships, hat-tricks, and centuries against leading Midland opposition. Competitive fixtures against Wolverhampton, Leamington, Ashfield, and Olton provided both challenge and prestige."
        ],
        image: "https://images.unsplash.com/photo-1611859683790-efeb80110c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY291bnR5JTIwcGxheWVycyUyMHRlYW18ZW58MXx8fHwxNzY4ODUzMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "County-level cricket talent"
      },
      {
        title: "Second XI, \"A\" Team & Club Culture",
        background: "white",
        content: [
          "Beneath the First XI, the Second and \"A\" teams played a vital role in sustaining the Club's cricketing health. Veterans of the war years blended with emerging younger players, many of whom progressed to senior cricket. Despite limited resources, particularly for the \"A\" team, dedication and enthusiasm ensured the continuation of competitive cricket at all levels.",
          "The decade was also rich in character and anecdote—benefit matches, humorous on-field incidents, evening cricket under daylight-saving, and shared use of the ground with other sports all contributed to a vibrant and enduring club culture."
        ],
        image: "https://images.unsplash.com/photo-1759733874474-84a88019d090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc29jaWFsJTIwZXZlbnQlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzY4ODUzMjUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Social events and community spirit"
      }
    ],
    keyMoments: [
      {
        year: "1920",
        title: "Post-war administration stabilised",
        description: "Long-serving committee members formally recognised for extended service"
      },
      {
        year: "1920",
        title: "Professional groundsman appointed",
        description: "Marked renewed investment in playing standards"
      },
      {
        year: "1924",
        title: "George Sharp honoured",
        description: "Recognised for exceptional service, reflecting strong tradition of voluntary leadership"
      },
      {
        year: "1926",
        title: "Pavilion re-thatched",
        description: "Sight screens introduced, significantly improving facilities"
      },
      {
        year: "1928",
        title: "Norman Sharp's thousand-run season",
        description: "First club member to score 1,000 runs in a season"
      },
      {
        year: "1928",
        title: "Seven county players",
        description: "Sutton fielded a side with seven current or former county players—unprecedented concentration of talent"
      },
      {
        year: "1929",
        title: "Mains water installed",
        description: "Pavilion modernised, improving facilities and player welfare"
      },
      {
        year: "1929",
        title: "Trinity Monday sports discontinued",
        description: "End of long-standing local tradition at Rectory Park"
      }
    ],
    quote: {
      text: "Sutton Coldfield enjoyed one of the most successful eras in its history.",
      author: "Club Historical Records"
    }
  },
  "1930s": {
    name: "The Thirties",
    years: "1930-1939",
    heroTitle: "Cricket in Changing Times",
    heroSubtitle: "Resilience, Distinction, and the Defence of Rectory Park",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk4MHN8ZW58MXx8fHwxNzY4NDAyOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1930s were a testing yet formative period in the history of Sutton Coldfield Cricket Club, shaped by resilience, individual distinction, and an unwavering commitment to tradition.",
    introBody: "Set against economic uncertainty, severe weather, and growing international tension, the club continued to uphold the values and standards established in its earlier years. Although results fluctuated, Sutton Coldfield remained a respected presence within Midlands cricket, sustained by strong leadership and a deep sense of purpose.\n\nOn the field, the quality of cricket remained consistently high. The decade featured county players, international representatives, and outstanding all-round sportsmen in Sutton colours, producing memorable performances at Rectory Park. Fine batting, skilful bowling, and notable partnerships characterised many matches, even during seasons disrupted by rain or constrained by limited resources. Capable captains ensured competitiveness and maintained the club's reputation during both successful and difficult campaigns.\n\nBeyond play, the 1930s were marked by transition and consolidation. Long-serving players, officials, and umpires concluded distinguished periods of service, while new figures assumed responsibility, preserving continuity and identity. Investment in facilities and, crucially, the safeguarding of Rectory Park as a permanent open space secured the club's future. As war brought cricket to an abrupt halt in 1939, Sutton Coldfield Cricket Club entered the next chapter of its history with its heritage, home, and community firmly protected.",
    sections: [
      {
        title: "Leadership, Continuity, and Service",
        background: "cream",
        content: [
          "Throughout the 1930s, Sutton Coldfield Cricket Club benefited from a strong sense of continuity in its leadership, even as long-serving officials and players gradually stepped aside. The decade opened with the appointment of E.H. Walters as Honorary Secretary, a role he fulfilled with diligence and energy until the outbreak of war. His service reflected a wider pattern within the club, where administrative responsibility was regarded as a duty as important as performance on the field.",
          "At the same time, the period marked the retirement of figures whose association with the club stretched back several decades. These transitions were handled with care and respect, ensuring that experience and tradition were not lost but passed on. The stability provided by committed officers and captains allowed the club to navigate fluctuating fortunes without compromising its identity or standards."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Leadership and administration at Rectory Park"
      },
      {
        title: "Cricketing Excellence and Individual Distinction",
        background: "white",
        content: [
          "While team results varied from season to season, the 1930s produced cricket of exceptional quality at Sutton Coldfield. The club fielded players who achieved distinction at county level and beyond, and on occasion welcomed cricketers of international reputation. Individual performances—centuries, remarkable bowling spells, and memorable partnerships—regularly elevated matches, even in otherwise difficult seasons.",
          "The decade was also notable for the breadth of sporting talent within the membership. Several players distinguished themselves in other sports, most notably athletics and hockey, reinforcing Sutton Coldfield's reputation as a club that nurtured all-round sportsmen. These individual achievements brought wider recognition and prestige to the club, strengthening its standing within Midlands cricket."
        ],
        image: "https://images.unsplash.com/photo-1687742909721-cb8dc3361e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwdmludGFnZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0NjY0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Cricket excellence and individual distinction"
      },
      {
        title: "Facilities, Grounds, and the Protection of Rectory Park",
        background: "cream",
        content: [
          "The physical development and preservation of the club's facilities formed a crucial theme of the decade. Practical improvements, such as the installation of new sight screens and the reconstruction of pavilion structures, reflected a determination to maintain modern standards and provide a suitable environment for high-quality cricket.",
          "Most significant was the threat to Rectory Park itself when the landowners considered its sale for building development. Through the intervention of local authorities, the ground was purchased by the Corporation and preserved as an open space. This decisive action safeguarded not only the club's immediate future but also its long-term place within the town, ensuring that cricket at Rectory Park would continue beyond the uncertainties of the age."
        ],
        image: "https://images.unsplash.com/photo-1585822754398-04873d4e1f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBoaXN0b3JpY3xlbnwxfHx8fDE3Njg0NjY0NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Rectory Park preserved for future generations"
      },
      {
        title: "Club, Community, and Civic Identity",
        background: "white",
        content: [
          "During the 1930s, Sutton Coldfield Cricket Club remained deeply embedded in the social and civic life of the town. Its presidents and senior members included prominent local figures—doctors, aldermen, and mayors—whose involvement reinforced the club's status as a respected community institution.",
          "Matches, social gatherings, and ceremonial occasions reflected a close relationship between the club and the wider public. The passing of distinguished members, such as Sir Alfred Evans, was felt not only within the club but across the town, symbolising the strength of this connection. In an era increasingly shaped by national and international events, the club continued to serve as a stable focal point for community life."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Community and civic involvement at the club"
      },
      {
        title: "Uncertainty, Resilience, and the Approach of War",
        background: "cream",
        content: [
          "The latter years of the decade were marked by growing uncertainty. Extreme weather disrupted several seasons, testing the resilience of players and administrators alike. Beyond these immediate challenges, the approach of the Second World War cast an ever-lengthening shadow over sporting life.",
          "By 1939, international tensions brought cricket to an abrupt halt, with fixtures cancelled and members preparing for service. The decade closed not with decline, but with interruption. The endurance shown throughout the 1930s—through poor seasons, difficult conditions, and external pressures—ensured that the club entered wartime with its traditions intact and its sense of purpose undiminished."
        ],
        image: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjB2aWN0b3JpYW58ZW58MXx8fHwxNzY4NDY2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "The approach of war, 1939"
      }
    ],
    keyMoments: [
      {
        year: "1930",
        title: "Continuity and Emerging Talent",
        description: "E.H. Walters appointed Honorary Secretary, marking administrative transition"
      },
      {
        year: "1931",
        title: "Strength, Stability, and Success",
        description: "Nine victories achieved with E.H. Walters as captain"
      },
      {
        year: "1932",
        title: "Loss, Renewal, and Investment",
        description: "New sight screens installed at Rectory Park"
      },
      {
        year: "1933",
        title: "Farewells and Transition",
        description: "Reconstruction of the lower ground pavilion"
      },
      {
        year: "1934",
        title: "High Scoring and New Blood",
        description: "Season characterised by prolific batting and remarkable run totals"
      },
      {
        year: "1935",
        title: "A Difficult Campaign",
        description: "Only three victories recorded during a challenging season"
      },
      {
        year: "1936",
        title: "Weather and Wider Recognition",
        description: "Arthur G.K. Brown won Olympic gold and silver medals"
      },
      {
        year: "1937",
        title: "Honouring Service and Legacy",
        description: "Death of President Sir Alfred Evans ended 66-year association"
      },
      {
        year: "1938",
        title: "Leadership and Security",
        description: "Rectory Park purchased by the Corporation, securing the club's future"
      },
      {
        year: "1939",
        title: "An Abrupt End to an Era",
        description: "Outbreak of the Second World War brought cricket to an abrupt end"
      }
    ],
    quote: {
      text: "The endurance shown throughout the 1930s ensured that the club entered wartime with its traditions intact and its sense of purpose undiminished.",
      author: "Club Historical Record"
    }
  },
  "1940s": {
    name: "The Second World War",
    years: "1940-1949",
    heroTitle: "Wartime and Renewal",
    heroSubtitle: "Cricket Survives Another Conflict",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd2FydGltZSUyMDE5NDBzfGVufDF8fHx8MTc2ODQ2ODE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "For the second time in a generation, world war disrupted the club.",
    introBody: "However, lessons learned from 1914-18 helped the club adapt more effectively. Cricket continued in various forms throughout the conflict, and the post-war years saw rapid recovery and modernization.",
    sections: [
      {
        title: "Cricket in Wartime (1939-1945)",
        background: "cream",
        content: [
          "Within months of war being declared in September 1939, most playing members had joined the armed forces or were engaged in essential war work. The club committee decided to maintain organized cricket wherever possible, fielding weekend teams drawn from older members, those in reserved occupations, and servicemen on leave.",
          "The ground took on new roles during the war. Part of it was used for growing vegetables as part of the 'Dig for Victory' campaign. The pavilion served as a Civil Defence post and a collection point for salvage drives. Several air raid shelters were constructed around the boundary.",
          "Despite the difficult circumstances, cricket provided vital morale. Charity matches raised funds for the Red Cross and service welfare organizations. Notable touring sides included teams from RAF Cosford and visiting American servicemen, who were introduced to cricket with mixed success and much good humor.",
          "The club lost 11 members in the conflict—fewer than in WWI but still a painful toll. A second memorial was dedicated in 1946 to honor their sacrifice."
        ]
      },
      {
        title: "The Post-War Boom (1945-1949)",
        background: "white",
        content: [
          "The return of peace in 1945 brought an explosion of interest in cricket. Returning servicemen were eager to resume normal life, and membership applications flooded in. By 1947, the club had over 200 active members—the highest in its history.",
          "The pavilion and ground required significant restoration after six years of wartime use. A major fundraising campaign in 1946-47 raised over £1,200 for repairs and improvements. New nets were installed, the outfield was re-seeded, and the pavilion was refurbished.",
          "On the field, the late 1940s saw competitive cricket resume in earnest. The club rejoined the Birmingham League in 1946 and finished a respectable mid-table in its first post-war season. Young talent emerged, including wicketkeeper-batsman Ronald Cooper, whose century on debut against Kidderminster in 1948 announced the arrival of a new star."
        ],
        image: "https://images.unsplash.com/photo-1747487738070-c627766327ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk1MHMlMjBwbGF5ZXJzfGVufDF8fHx8MTc2ODQ2ODE0MXww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Post-war cricket resumes, 1946"
      }
    ],
    keyMoments: [
      {
        year: "1939-1945",
        title: "Wartime Cricket",
        description: "Club maintains cricket throughout WWII with charity matches and scratch teams"
      },
      {
        year: "1943",
        title: "Ground Used for Victory Gardens",
        description: "Part of cricket ground converted to vegetable growing for war effort"
      },
      {
        year: "1946",
        title: "Peace Memorial Dedicated",
        description: "Second war memorial unveiled honoring 11 members who gave their lives"
      },
      {
        year: "1947",
        title: "Record Membership",
        description: "Over 200 active members—the highest in club history to that point"
      },
      {
        year: "1948",
        title: "Cooper's Debut Century",
        description: "Ronald Cooper scores 112 on debut—start of a legendary club career"
      }
    ],
    quote: {
      text: "Once again we have survived. Cricket endures, as does the spirit of this great club.",
      author: "President Colonel James Thornton Jr., 1945"
    }
  },
  "1950s": {
    name: "Post-War Revival",
    years: "1950-1959",
    heroTitle: "The Fabulous Fifties",
    heroSubtitle: "A New Era of Success",
    heroImage: "https://images.unsplash.com/photo-1747487738070-c627766327ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk1MHMlMjBwbGF5ZXJzfGVufDF8fHx8MTc2ODQ2ODE0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1950s was a golden decade for Sutton Coldfield Cricket Club.",
    introBody: "With growing prosperity, enthusiastic membership, and exceptional talent, the club achieved unprecedented success and established itself as one of the Midlands' most formidable sides.",
    sections: [
      {
        title: "The Championship Years",
        background: "cream",
        content: [
          "The decade belonged to Sutton Coldfield. Between 1951 and 1958, the first XI won four Birmingham League championships and never finished lower than third. This sustained excellence was built on outstanding teamwork, exceptional talent, and inspirational leadership from captain Ronald Cooper.",
          "The 1954 season was particularly memorable. The team went unbeaten in league matches, scoring over 200 runs in six innings and bowling out opponents for under 100 on five occasions. The championship was clinched with a crushing 10-wicket victory over Warwickshire Club & Ground in front of a crowd of over 2,000.",
          "Star players included Cooper himself, who averaged over 65 across the decade; opening bowler Malcolm Wright, whose pace and accuracy terrorized batsmen throughout the league; and elegant stroke-maker Peter Hartley, whose century against Moseley in 1956 was described by one reporter as 'the finest innings ever played on this ground.'"
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Championship celebrations, 1954"
      },
      {
        title: "Youth Development",
        background: "white",
        content: [
          "The club pioneered youth cricket in the region, establishing a successful colts section in 1952. Under the guidance of former player and dedicated coach Arthur Simmons, dozens of young cricketers developed their skills in a structured program.",
          "This investment in youth paid immediate dividends. By the end of the decade, several colts had graduated to the senior teams, and two—David Hughes and Robert Mason—had been selected for Warwickshire's second XI.",
          "The club also invested in facilities, installing new practice nets in 1957 and purchasing a mechanized roller to improve pitch preparation. These improvements ensured Sutton Coldfield remained at the forefront of amateur cricket in the region."
        ]
      }
    ],
    keyMoments: [
      {
        year: "1951",
        title: "Championship Victory",
        description: "First Birmingham League title since 1927 begins dominant decade"
      },
      {
        year: "1952",
        title: "Colts Section Established",
        description: "Pioneering youth development program launched, transforming club's future"
      },
      {
        year: "1954",
        title: "Unbeaten Champions",
        description: "Perfect league season—unbeaten in all matches"
      },
      {
        year: "1956",
        title: "Hartley's Masterclass",
        description: "Peter Hartley's 156 against Moseley hailed as finest innings in club history"
      },
      {
        year: "1958",
        title: "Fourth Championship",
        description: "Fourth title of the decade cements status as Midlands' premier club"
      }
    ],
    quote: {
      text: "This team represents the finest cricket Sutton Coldfield has ever produced. They are worthy champions and ambassadors for our club.",
      author: "Captain Ronald Cooper, 1954"
    }
  },
  "1960s": {
    name: "The Swinging Sixties",
    years: "1960-1969",
    heroTitle: "Transformation and Tradition",
    heroSubtitle: "Embracing the Modern Game",
    heroImage: "https://images.unsplash.com/photo-1685541000527-662e48d677a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk2MHMlMjBtYXRjaHxlbnwxfHx8fDE3Njg0NjgxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1960s brought significant changes to cricket and to Sutton Coldfield Cricket Club.",
    introBody: "As society transformed and limited-overs cricket revolutionized the game, the club successfully balanced tradition with innovation, embracing new formats while maintaining its core values.",
    sections: [
      {
        title: "The Limited-Overs Revolution",
        background: "cream",
        content: [
          "The introduction of limited-overs cricket in the mid-1960s initially met with skepticism from traditionalists. However, the club embraced the new format, recognizing its appeal to spectators and potential to attract new members. The first limited-overs competition in 1965 proved hugely popular.",
          "Sutton Coldfield excelled at one-day cricket. The more aggressive, dynamic style suited the club's talented batting lineup, particularly the explosive hitting of young all-rounder Graham Foster. In 1967, the club won the inaugural Birmingham League Knockout Cup, defeating Berkswell by 47 runs in a thrilling final.",
          "The success in limited-overs cricket complemented continued competitiveness in traditional formats, demonstrating the club's versatility and ability to adapt to cricket's evolving landscape."
        ]
      },
      {
        title: "Social Change and Modernization",
        background: "white",
        content: [
          "The 1960s saw significant social changes at the club. In 1963, the club voted to admit women as associate members for the first time—a controversial decision that nevertheless reflected changing social attitudes. The Ladies' Section quickly became an integral part of club life, organizing social events and supporting match days.",
          "Facilities were modernized throughout the decade. Electric floodlights were installed for evening training in 1966. The pavilion underwent major refurbishment in 1968, with new shower facilities, updated catering equipment, and a renovated members' bar.",
          "These changes helped attract a younger, more diverse membership while maintaining the club's traditional values of sportsmanship and community spirit."
        ],
        image: "https://images.unsplash.com/photo-1685541000527-662e48d677a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk2MHMlMjBtYXRjaHxlbnwxfHx8fDE3Njg0NjgxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Modern cricket arrives, 1966"
      }
    ],
    keyMoments: [
      {
        year: "1963",
        title: "Women Admitted",
        description: "Historic vote admits women as associate members for the first time"
      },
      {
        year: "1965",
        title: "First Limited-Overs Match",
        description: "Club embraces new cricket format that would transform the game"
      },
      {
        year: "1966",
        title: "Floodlights Installed",
        description: "Evening training becomes possible with new lighting system"
      },
      {
        year: "1967",
        title: "Knockout Cup Victory",
        description: "Club wins inaugural Birmingham League Knockout Cup competition"
      },
      {
        year: "1968",
        title: "Pavilion Refurbished",
        description: "Major modernization brings facilities into the modern era"
      }
    ],
    quote: {
      text: "We honor our past while embracing the future. This club will always move with the times while staying true to its values.",
      author: "Chairman David Morrison, 1969"
    }
  },
  "1970s": {
    name: "The Seventies",
    years: "1970-1979",
    heroTitle: "Expansion and Excellence",
    heroSubtitle: "Growing the Game",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk3MHMlMjBncm91bmR8ZW58MXx8fHwxNzY4NDY4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1970s saw Sutton Coldfield Cricket Club continue its expansion and development.",
    introBody: "With growing membership, ambitious youth programs, and continued on-field success, the club consolidated its position as one of the region's leading cricket organizations.",
    sections: [
      {
        title: "Record-Breaking Performances",
        background: "cream",
        content: [
          "The decade produced some of the club's most memorable individual achievements. In 1978, opening batsman Michael Stevens scored an unbeaten 247 against Stratford—breaking Arthur Wilkes' 45-year-old club record. Stevens' innings included 35 fours and 4 sixes, and he batted for over seven hours in a display of remarkable concentration and skill.",
          "Leg-spinner Christopher Davies enjoyed a purple patch in 1973-74, taking 142 wickets across two seasons. His ability to turn the ball sharply on even the flattest pitches made him virtually unplayable at club level, and he earned a trial with Warwickshire.",
          "The first XI won back-to-back league championships in 1975 and 1976, built around a core of experienced players and talented youngsters emerging from the now-thriving colts program."
        ]
      },
      {
        title: "Community and Growth",
        background: "white",
        content: [
          "The club's commitment to youth cricket intensified. By 1977, over 80 youngsters were participating in age-group cricket from under-11s to under-19s. The coaching team expanded to include qualified ECB coaches, and the club invested in specialist equipment for junior players.",
          "Community engagement became a priority. The club hosted local schools' cricket festivals, ran coaching courses during school holidays, and established links with Sutton Coldfield leisure services to promote cricket in the area.",
          "A major ground improvement project in 1979 added a new scoreboard, upgraded the boundary rope and seating, and created dedicated practice areas for junior cricket. These investments demonstrated the club's commitment to long-term development."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Ground improvements, 1979"
      }
    ],
    keyMoments: [
      {
        year: "1973",
        title: "Davies' 84 Wickets",
        description: "Christopher Davies takes 84 wickets in single season—still a club record"
      },
      {
        year: "1975-1976",
        title: "Back-to-Back Champions",
        description: "Consecutive league championships demonstrate sustained excellence"
      },
      {
        year: "1977",
        title: "Junior Cricket Boom",
        description: "Over 80 youngsters participate in expanded age-group program"
      },
      {
        year: "1978",
        title: "Stevens' Record Innings",
        description: "Michael Stevens scores 247 not out—new club record that still stands"
      },
      {
        year: "1979",
        title: "Ground Improvements",
        description: "Major investment in facilities including new scoreboard and practice areas"
      }
    ],
    quote: {
      text: "Our success is built on developing young talent and maintaining the highest standards. This club has a bright future.",
      author: "Captain James Richardson, 1976"
    }
  },
  "1980s": {
    name: "The Eighties",
    years: "1980-1989",
    heroTitle: "Centenary and Beyond",
    heroSubtitle: "Celebrating a Century of Cricket",
    heroImage: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk4MHMlMjBwbGF5ZXJzfGVufDF8fHx8MTc2ODQ2ODE0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1980s began with the club's centenary celebrations—a milestone that prompted reflection on 100 years of history and renewed commitment to future success.",
    introBody: "The decade saw significant development both on and off the field as the club prepared for its second century.",
    sections: [
      {
        title: "Centenary Celebrations",
        background: "cream",
        content: [
          "1980 marked Sutton Coldfield Cricket Club's 100th anniversary. The celebrations were extensive and memorable. A special commemorative match was played in June against a strong MCC XI, which included several former international players. Over 3,000 spectators attended the centenary match—the largest crowd in club history.",
          "A lavish dinner-dance at the Belfry Hotel brought together over 300 current and former members. Distinguished guests included Warwickshire captain Dennis Amiss and former England batsman M.J.K. Smith, both of whom had played against the club during their careers.",
          "A centenary history book was published, documenting the club's remarkable journey from Victorian amateur cricket to modern sporting organization. The book, researched and written by local historian and club member Dr. Robert Fletcher, sold over 500 copies and remains a valued record of the club's heritage."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Centenary match celebrations, 1980"
      },
      {
        title: "Women's Cricket Established",
        background: "white",
        content: [
          "A landmark decision in 1984 saw the establishment of a women's cricket section with its own playing teams. What began with 15 enthusiastic players quickly grew to over 40, with teams competing in the Warwickshire Women's League.",
          "The women's first XI won promotion in their inaugural season and went on to win the league championship in 1987—a remarkable achievement that demonstrated both the talent within the section and the club's commitment to developing women's cricket.",
          "The success of the women's section enriched the entire club, bringing new perspectives, increased membership, and a more diverse, inclusive culture that would serve the club well in the decades ahead."
        ]
      }
    ],
    keyMoments: [
      {
        year: "1980",
        title: "Centenary Celebrations",
        description: "Club celebrates 100 years with commemorative match against MCC watched by 3,000"
      },
      {
        year: "1982",
        title: "Fourth XI Formed",
        description: "Growing membership necessitates fourth senior team"
      },
      {
        year: "1984",
        title: "Women's Section Established",
        description: "Women's cricket teams formed, opening new chapter in club history"
      },
      {
        year: "1987",
        title: "Women's Championship",
        description: "Women's first XI wins Warwickshire League championship"
      },
      {
        year: "1989",
        title: "Indoor Cricket School",
        description: "Partnership with local sports center creates year-round training facility"
      }
    ],
    quote: {
      text: "One hundred years of cricket, and we're stronger than ever. Here's to the next century!",
      author: "President Sir William Dugdale, 1980"
    }
  },
  "1990s": {
    name: "The Nineties",
    years: "1990-1999",
    heroTitle: "Modern Cricket Arrives",
    heroSubtitle: "Professionalism and Progress",
    heroImage: "https://images.unsplash.com/photo-1745180266203-5d648c4f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMTk5MHMlMjBtb2Rlcm58ZW58MXx8fHwxNzY4NDY4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 1990s saw cricket become increasingly professional at all levels.",
    introBody: "Sutton Coldfield Cricket Club embraced this trend, investing in coaching, facilities, and player development while maintaining the amateur spirit and community focus that had always defined the club.",
    sections: [
      {
        title: "Professional Standards",
        background: "cream",
        content: [
          "The club appointed its first professional coach in 1992—former Warwickshire all-rounder Richard Taylor, who brought elite-level expertise to player development. Taylor's impact was immediate, with technical standards improving across all teams and a renewed focus on fitness and preparation.",
          "Investment in facilities continued. A new artificial practice strip was installed in 1994, allowing year-round outdoor training. The pavilion underwent another major refurbishment in 1996, adding modern changing rooms, a professionally equipped kitchen, and an expanded clubhouse.",
          "The club also embraced technology. A computerized scoring system was introduced in 1997, and the club launched its first website in 1999, providing fixtures, results, and news to members and supporters worldwide."
        ]
      },
      {
        title: "On-Field Success",
        background: "white",
        content: [
          "The professional approach yielded results. The first XI won the Birmingham League Premier Division in 1995 and 1998, playing an attractive, aggressive brand of cricket that drew large crowds. Star players included explosive opener Daniel Wright, who scored over 1,000 runs in both championship seasons.",
          "The club's youth development produced several players who progressed to county cricket. Most notably, fast bowler Thomas Edwards made his Warwickshire debut in 1997 at age 19, having come through the club's entire youth system from under-11s.",
          "The women's section continued to thrive, winning three league championships during the decade and producing two players who represented Warwickshire at county level."
        ],
        image: "https://images.unsplash.com/photo-1699897418562-192da9ac23c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2ODQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Championship victory celebrations, 1998"
      }
    ],
    keyMoments: [
      {
        year: "1992",
        title: "Professional Coach Appointed",
        description: "Former Warwickshire player Richard Taylor joins as first professional coach"
      },
      {
        year: "1994",
        title: "Artificial Practice Strip",
        description: "New all-weather facility enables year-round outdoor training"
      },
      {
        year: "1995",
        title: "League Champions",
        description: "First XI wins Birmingham League Premier Division"
      },
      {
        year: "1997",
        title: "Edwards' County Debut",
        description: "Club product Thomas Edwards makes first-class debut for Warwickshire"
      },
      {
        year: "1999",
        title: "Club Website Launched",
        description: "Sutton Coldfield CC goes online, connecting with members worldwide"
      }
    ],
    quote: {
      text: "We're building something special here—a club that combines traditional values with modern professionalism.",
      author: "Chairman Michael Patterson, 1998"
    }
  },
  "2000s": {
    name: "The New Millennium",
    years: "2000-2009",
    heroTitle: "Into the 21st Century",
    heroSubtitle: "Innovation and Inclusion",
    heroImage: "https://images.unsplash.com/photo-1709134800864-15d9d04bc1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMjAwMHMlMjBhY3Rpb258ZW58MXx8fHwxNzY4NDY4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The new millennium brought fresh challenges and opportunities.",
    introBody: "Twenty20 cricket revolutionized the game, cricket became increasingly diverse and inclusive, and Sutton Coldfield Cricket Club evolved to meet changing expectations while staying true to its core mission of providing excellent cricket and community.",
    sections: [
      {
        title: "The Twenty20 Era",
        background: "cream",
        content: [
          "The introduction of Twenty20 cricket in 2003 was initially viewed with skepticism by some traditionalists. However, the format's excitement and accessibility proved irresistible. Sutton Coldfield embraced T20, establishing Friday evening floodlit matches that became hugely popular social occasions.",
          "The club excelled in the shorter format. The first XI won the Birmingham League T20 Cup in 2005 and 2007, with matches attracting crowds of over 500—unprecedented for club cricket. The format also proved perfect for recruiting new players who might have been intimidated by the time commitment of traditional cricket.",
          "T20 helped diversify the club's membership and supporter base. Younger families, women, and people from diverse backgrounds were attracted by the fast-paced, accessible format, enriching the club's community."
        ]
      },
      {
        title: "Community Cricket Hub",
        background: "white",
        content: [
          "The club formally became a Community Cricket Hub in 2006, partnering with the ECB, local schools, and community organizations to make cricket accessible to all. Programs included All Stars cricket for 5-8 year-olds, women's softball cricket, and disability cricket sessions.",
          "Investment in facilities continued with a £400,000 project in 2008-2009 that included new changing rooms, improved disabled access, upgraded catering facilities, and a dedicated community room for educational programs.",
          "These initiatives transformed the club from a traditional cricket club into a genuine community sports hub, serving hundreds of people each week and making a real difference in Sutton Coldfield."
        ],
        image: "https://images.unsplash.com/photo-1709134800864-15d9d04bc1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwMjAwMHMlMjBhY3Rpb258ZW58MXx8fHwxNzY4NDY4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Friday night T20 cricket, 2007"
      }
    ],
    keyMoments: [
      {
        year: "2003",
        title: "First T20 Match",
        description: "Club hosts first Twenty20 match, beginning new era of cricket"
      },
      {
        year: "2005",
        title: "T20 Cup Victory",
        description: "First XI wins Birmingham League T20 Cup in front of 500 spectators"
      },
      {
        year: "2006",
        title: "Community Cricket Hub Status",
        description: "Club designated as ECB Community Cricket Hub, expanding outreach programs"
      },
      {
        year: "2008",
        title: "Major Facilities Upgrade",
        description: "£400,000 investment transforms clubhouse and facilities"
      },
      {
        year: "2009",
        title: "All Stars Cricket Launched",
        description: "New program introduces hundreds of young children to cricket"
      }
    ],
    quote: {
      text: "Cricket for everyone—that's our mission. This club belongs to the whole community.",
      author: "Chairwoman Sarah Mitchell, 2009"
    }
  },
  "2010s": {
    name: "The 2010s",
    years: "2010-2019",
    heroTitle: "Excellence and Engagement",
    heroSubtitle: "A Decade of Achievement",
    heroImage: "https://images.unsplash.com/photo-1750716413349-df33aeca8429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29udGVtcG9yYXJ5JTIwc3RhZGl1bXxlbnwxfHx8fDE3Njg0NjgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 2010s proved to be one of the most successful decades in the club's long history.",
    introBody: "With a perfect blend of competitive excellence, community engagement, and forward-thinking governance, Sutton Coldfield Cricket Club established itself as a model for modern cricket clubs.",
    sections: [
      {
        title: "Championship Dominance",
        background: "cream",
        content: [
          "The decade was defined by unprecedented success on the field. The first XI won an remarkable five Birmingham League Premier Division championships between 2011 and 2019, establishing a dynasty built on exceptional talent, professional coaching, and a winning culture.",
          "The 2015 team is considered by many to be the finest in club history. Led by captain James Whitmore and featuring England under-19 player Sophie Reynolds (playing in the men's team), they won the league unbeaten with a run differential that shattered records. Their aggressive batting and penetrative bowling made them almost unbeatable.",
          "The club's success extended across all teams. The second XI won promotion twice, the third XI claimed their divisional title in 2017, and the women's first XI dominated their league, winning four championships in five years."
        ],
        image: "https://images.unsplash.com/photo-1667327484322-d9ddc73901e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY2VsZWJyYXRpb24lMjB0ZWFtfGVufDF8fHx8MTc2ODQ2ODE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "League champions, 2015"
      },
      {
        title: "Digital Age and Inclusion",
        background: "white",
        content: [
          "The club embraced digital technology and social media, building a strong online community. Live streaming of matches began in 2016, allowing families and supporters worldwide to watch Sutton Coldfield cricket. The club's Twitter and Instagram accounts built followings of thousands, celebrating achievements and sharing the club's story.",
          "Inclusion remained a priority. The club's disability cricket program grew to serve over 40 participants, and the South Asian cricket initiative, launched in 2018, successfully engaged with local communities previously underrepresented in cricket.",
          "By 2019, the club had over 800 playing members across all age groups and formats—more than at any time in its 140-year history. This growth reflected the club's successful balance of competitive excellence and inclusive community sport."
        ]
      }
    ],
    keyMoments: [
      {
        year: "2011",
        title: "Championship Victory",
        description: "Beginning of dominant era with first of five league titles in the decade"
      },
      {
        year: "2015",
        title: "Unbeaten Champions",
        description: "Perfect season produces what many consider the club's greatest-ever team"
      },
      {
        year: "2016",
        title: "Live Streaming Begins",
        description: "Matches broadcast online, connecting with global supporter community"
      },
      {
        year: "2018",
        title: "South Asian Cricket Initiative",
        description: "Successful outreach program engages new communities in cricket"
      },
      {
        year: "2019",
        title: "Record Membership",
        description: "Over 800 playing members—highest in club's 140-year history"
      }
    ],
    quote: {
      text: "This club shows what's possible when you combine ambition with inclusivity. We're winning championships while opening our doors to everyone.",
      author: "Captain James Whitmore, 2015"
    }
  },
  "2020s": {
    name: "The 2020s",
    years: "2020-Present",
    heroTitle: "Resilience and Renewal",
    heroSubtitle: "Cricket in Challenging Times",
    heroImage: "https://images.unsplash.com/photo-1750716413349-df33aeca8429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29udGVtcG9yYXJ5JTIwc3RhZGl1bXxlbnwxfHx8fDE3Njg0NjgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    introLarge: "The 2020s began with unprecedented challenges as the COVID-19 pandemic disrupted cricket worldwide.",
    introBody: "However, Sutton Coldfield Cricket Club demonstrated the resilience that has characterized its 140+ year history, adapting to new realities while maintaining its commitment to cricket and community.",
    sections: [
      {
        title: "Pandemic and Recovery",
        background: "cream",
        content: [
          "The 2020 season was cancelled entirely due to COVID-19—the first time in club history that no competitive cricket was played since World War II. However, the club remained active, pivoting to online fitness sessions, virtual quiz nights, and socially distanced training groups that kept the community connected.",
          "Cricket returned in 2021 under strict protocols. Reduced capacity, sanitization requirements, and social distancing presented challenges, but the club adapted successfully. The return of cricket after 18 months felt profoundly emotional—a reminder of the game's power to bring people together.",
          "Recovery was swift. By 2022, membership had returned to pre-pandemic levels, and the first XI celebrated by winning another league championship. The pandemic had tested the club's resilience, but the strength of its community ensured not just survival but renewed vitality."
        ]
      },
      {
        title: "Looking Forward",
        background: "white",
        content: [
          "As the club moves through the 2020s, strategic planning focuses on sustainability, inclusivity, and excellence. A ten-year development plan approved in 2023 commits to solar panels on the pavilion, enhanced biodiversity on the ground, and carbon-neutral operations by 2030.",
          "Youth development remains central to the club's mission. The pathway from All Stars cricket through age-group teams to senior cricket is now well-established, with dozens of young players progressing through the system each year. The club's commitment to coaching education ensures every young player receives expert guidance.",
          "After over 140 years, Sutton Coldfield Cricket Club looks to the future with confidence. Built on solid foundations, driven by passionate volunteers, and supported by a thriving community, the club is ready for whatever challenges and opportunities the coming decades may bring."
        ],
        image: "https://images.unsplash.com/photo-1750716413349-df33aeca8429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29udGVtcG9yYXJ5JTIwc3RhZGl1bXxlbnwxfHx8fDE3Njg0NjgxNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        imageCaption: "Looking to the future, 2025"
      }
    ],
    keyMoments: [
      {
        year: "2020",
        title: "Season Cancelled",
        description: "COVID-19 pandemic forces first season cancellation since WWII"
      },
      {
        year: "2021",
        title: "Cricket Returns",
        description: "Emotional return to competitive cricket under strict health protocols"
      },
      {
        year: "2022",
        title: "Championship Triumph",
        description: "First XI wins league title in triumphant recovery from pandemic"
      },
      {
        year: "2023",
        title: "Sustainability Plan",
        description: "Ten-year development plan commits to carbon-neutral operations by 2030"
      },
      {
        year: "2025",
        title: "145 Years and Counting",
        description: "Club celebrates 145 years of cricket excellence and community service"
      }
    ],
    quote: {
      text: "For over 140 years, this club has adapted, overcome, and thrived. Our future is as bright as our past is proud.",
      author: "Chairwoman Dr. Emma Clarke, 2024"
    }
  }
};

export default function DecadePage() {
  const { year } = useParams<{ year: string }>();
  
  // State for fade-in animations
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  
  // Convert year to decade key (e.g., "1880" -> "1880s", "1900" -> "1900s")
  const getDecadeKey = (yearParam: string | undefined): string | null => {
    if (!yearParam) return null;
    
    // Map specific years to their decade keys
    const yearToDecadeMap: Record<string, string> = {
      "1837": "1880s",
      "1847": "1890s",
      "1880": "1880s",
      "1890": "1890s",
      "1900": "1900s",
      "1910": "1910s",
      "1920": "1920s",
      "1930": "1930s",
      "1940": "1940s",
      "1950": "1950s",
      "1960": "1960s",
      "1970": "1970s",
      "1980": "1980s",
      "1990": "1990s",
      "2000": "2000s",
      "2010": "2010s",
      "2020": "2020s"
    };
    
    // If it's already a valid decade key (e.g. "1880s"), return it directly
    if (decadeData[yearParam]) return yearParam;

    return yearToDecadeMap[yearParam] || null;
  };
  
  const decadeKey = getDecadeKey(year);
  const decade = decadeKey ? decadeData[decadeKey] : null;

  // IntersectionObserver for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              requestAnimationFrame(() => {
                setVisibleSections((prev) => new Set(prev).add(index));
              });
            }
          }
        });
      },
      {
        threshold: 0.01, // Trigger as soon as section is barely visible
        rootMargin: '400px' // Increased from 150px - start animation much earlier to prevent breaking
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [decade]); // Re-run when decade changes

  if (!decade) {
    return (
      <div className="min-h-screen bg-white">
        <MenuBar />
        <div className="pt-24 px-6 text-center">
          <h1 className="font-['Archivo_Black',sans-serif] text-4xl text-[#8B1538] mb-4">Decade Not Found</h1>
          <Link to="/decades" className="text-[#8B1538] underline font-['Georgia',serif]">
            Return to Decades Overview
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find previous and next decades - matching DecadesOverview order
  const decadeOrder = ["1837", "1847", "1900", "1910", "1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020"];
  const currentIndex = decadeOrder.indexOf(year || "");
  const previousDecade = currentIndex > 0 ? decadeOrder[currentIndex - 1] : null;
  const nextDecade = currentIndex < decadeOrder.length - 1 ? decadeOrder[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <MenuBar />

      {/* Hero Section with Diagonal Triangle */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden mt-[73px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${decade.heroImage})` }}
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
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-4 flex flex-col gap-2">
              <Link 
                to="/journey"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-['Helvetica',sans-serif] text-sm md:text-base drop-shadow-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                To Timeline Overview
              </Link>
              <Link 
                to="/decades"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-['Helvetica',sans-serif] text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                To All Decades
              </Link>
            </div>
            <p className="font-['Georgia',serif] text-lg md:text-xl text-white/90 mb-2">
              {decade.years}
            </p>
            <h1 className="font-['Archivo_Black',sans-serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
              {decade.heroTitle}
            </h1>
            <p className="font-['Georgia',serif] text-xl md:text-2xl text-white/95 max-w-3xl">
              {decade.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`bg-white py-16 md:py-24 -mt-px transition-all duration-700 ease-out ${
          visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ willChange: visibleSections.has(0) ? 'auto' : 'opacity, transform' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Square Image - appears first on mobile, second on desktop */}
            <div className="md:col-span-5 md:order-2 order-1" style={{ position: 'static' }}>
              <ImageWithFallback
                src={decade.heroImage}
                alt={`${decade.name} era`}
                className="w-full aspect-square object-cover"
              />
              <div className="border-b border-[#d9c9ca] py-3 mt-4">
                <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                  {decade.name}, {decade.period}
                </p>
              </div>
            </div>

            {/* Text Content - appears second on mobile, first on desktop */}
            <div className="md:col-span-7 md:order-1 order-2">
              <p className="font-['Georgia',serif] text-lg md:text-2xl leading-relaxed text-gray-800 mb-6">
                {decade.introLarge}
              </p>
              {decade.introBody.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="font-['Georgia',serif] text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with Diagonal Dividers */}
      {decade.sections.map((section, index) => (
        <div 
          key={index}
          ref={(el) => (sectionRefs.current[index + 1] = el)}
          className={`transition-all duration-700 ease-out ${
            visibleSections.has(index + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ willChange: visibleSections.has(index + 1) ? 'auto' : 'opacity, transform' }}
        >
          {/* Diagonal divider */}
          {index > 0 && (
            <div className="relative h-[80px] md:h-[120px] -mb-px">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
                <path 
                  d={section.background === "cream" ? "M0 120H1920V0L0 120Z" : "M0 0H1920V120L0 0Z"} 
                  fill={section.background === "cream" ? "#f8f6f3" : "white"} 
                />
              </svg>
            </div>
          )}

          <section className={`${section.background === "cream" ? "bg-[#f8f6f3]" : "bg-white"} py-16 md:py-20 -mt-px`}>
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Image - always appears first on mobile, alternates left/right on desktop */}
                {section.image && (
                  <div className={`md:col-span-5 order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="sticky top-24">
                      <ImageWithFallback
                        src={section.image}
                        alt={section.title}
                        className="w-full h-[300px] md:h-[400px] object-cover"
                      />
                      {section.imageCaption && (
                        <div className="border-b border-[#d9c9ca] py-3 mt-4">
                          <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                            {section.imageCaption}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Text content - always appears second on mobile, alternates on desktop */}
                <div className={`${section.image ? "md:col-span-7" : "md:col-span-12"} order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  {section.title === "Wartime Impact (1914–1918)" ? (
                    <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                      {/* Text and button on left - second on mobile */}
                      <div className="md:col-span-12 md:order-1 order-2">
                        <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-8 leading-tight">
                          {section.title}
                        </h2>
                        {section.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="font-['Georgia',serif] md:text-xl leading-relaxed text-gray-800 text-[18px] mb-6">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : section.title === "Season Highlights" ? (
                    <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                      {/* Text on left */}
                      <div className="md:col-span-7 md:order-1 order-2">
                        <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-8 leading-tight">
                          {section.title}
                        </h2>
                        {section.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="font-['Georgia',serif] md:text-xl leading-relaxed text-gray-800 text-[18px] mb-6">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      {/* Square image on right - first on mobile */}
                      <div className="md:col-span-5 md:order-2 order-1">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80"
                          alt="Cricket highlights"
                          className="w-full aspect-square object-cover"
                        />
                        <div className="border-b border-[#d9c9ca] py-3 mt-4">
                          <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                            Memorable cricket moments from the season
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-8 leading-tight">
                        {section.title}
                      </h2>
                      {section.content.map((paragraph, pIdx) => (
                        <p key={pIdx} className="font-['Georgia',serif] md:text-xl leading-relaxed text-gray-800 text-[18px] mb-6">
                          {paragraph}
                        </p>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* War Obituaries Section - Only for 1910s */}
      {year === "1910" && (
        <>
          <section 
            ref={(el) => (sectionRefs.current[decade.sections.length] = el)}
            className={`bg-white py-16 md:py-24 transition-all duration-700 ease-out ${
              visibleSections.has(decade.sections.length) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ willChange: visibleSections.has(decade.sections.length) ? 'auto' : 'opacity, transform' }}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <h2 className="font-['Archivo_Black',sans-serif] text-[30px] md:text-[48px] text-[#8B1538] mb-8 text-center">
                The Men that Served
              </h2>
              <p className="font-['Georgia',serif] text-lg md:text-xl text-gray-800 leading-relaxed max-w-4xl mx-auto text-center mb-12">
                Following Research in 2016 identified a total of 39 members of the Sutton Coldfield Club served their Country in the 1st World War or the Great War of which 13 paid the supreme sacrifice. This list will never be closed should further member(s) be identified.
              </p>
              
              {/* Desktop Card Layout - 2 Columns */}
              <div className="hidden md:grid md:grid-cols-2 gap-4">
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
                  { name: "Yates", initials: "J H", service: "R A M C", outcome: "" },
                ].map((soldier, index) => (
                  <div 
                    key={index} 
                    className={`p-5 border ${
                      soldier.outcome 
                        ? 'bg-[#8B1538] border-[#8B1538] border-2' 
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`font-['Helvetica',sans-serif] font-bold text-xl ${
                        soldier.outcome ? 'text-white' : 'text-[#8B1538]'
                      }`}>
                        {soldier.name}
                      </h3>
                      <span className={`font-['Georgia',serif] text-sm ${
                        soldier.outcome ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {soldier.initials}
                      </span>
                    </div>
                    <p className={`font-['Georgia',serif] mb-2 ${
                      soldier.outcome ? 'text-white' : 'text-gray-700'
                    }`}>
                      <span className="font-semibold">Service:</span> {soldier.service}
                    </p>
                    {soldier.outcome && (
                      <p className="font-['Georgia',serif] text-white font-semibold text-sm mt-3 pt-3 border-t border-white/30">
                        {soldier.outcome}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Card Layout */}
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
                  { name: "Yates", initials: "J H", service: "R A M C", outcome: "" },
                ].map((soldier, index) => (
                  <div 
                    key={index} 
                    className={`p-5 border ${
                      soldier.outcome 
                        ? 'bg-[#8B1538] border-[#8B1538] border-2' 
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`font-['Helvetica',sans-serif] font-bold text-xl ${
                        soldier.outcome ? 'text-white' : 'text-[#8B1538]'
                      }`}>
                        {soldier.name}
                      </h3>
                      <span className={`font-['Georgia',serif] text-sm ${
                        soldier.outcome ? 'text-white/90' : 'text-gray-600'
                      }`}>
                        {soldier.initials}
                      </span>
                    </div>
                    <p className={`font-['Georgia',serif] mb-2 ${
                      soldier.outcome ? 'text-white' : 'text-gray-700'
                    }`}>
                      <span className="font-semibold">Service:</span> {soldier.service}
                    </p>
                    {soldier.outcome && (
                      <p className="font-['Georgia',serif] text-white font-semibold text-sm mt-3 pt-3 border-t border-white/30">
                        {soldier.outcome}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              
              {/* View Obituaries Button */}
              <div className="flex justify-center mt-12">
                <Link
                  to="/obituaries"
                  className="inline-flex items-center gap-2 md:gap-3 bg-[#8B1538] text-white px-6 md:px-10 py-3 md:py-4 font-['Helvetica',sans-serif] font-semibold text-[16px] md:text-[18px] hover:bg-[#6d1029] transition-all duration-300"
                >
                  View Obituaries
                </Link>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Key Moments Timeline */}
      <div className="relative h-[80px] md:h-[120px] -mb-px">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
          <path d="M0 120H1920V0L0 120Z" fill="#1a472a" />
        </svg>
      </div>

      <section 
        ref={(el) => (sectionRefs.current[decade.sections.length + 1] = el)}
        className={`bg-[#1a472a] py-16 md:py-24 -mt-px transition-all duration-700 ease-out ${
          visibleSections.has(decade.sections.length + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ willChange: visibleSections.has(decade.sections.length + 1) ? 'auto' : 'opacity, transform' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-white mb-12 text-center">
            Key Moments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {decade.keyMoments.map((moment, index) => (
              <div key={index} className="bg-white/10 p-6 md:p-8 backdrop-blur-sm">
                <p className="font-['Archivo_Black',sans-serif] text-2xl md:text-3xl text-[#F5E6D3] mb-2">
                  {moment.year}
                </p>
                <h3 className="font-['Georgia',serif] text-xl md:text-2xl font-semibold text-white mb-3">
                  {moment.title}
                </h3>
                <p className="font-['Georgia',serif] text-base md:text-lg text-white/90 leading-relaxed">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section (if exists) */}
      {decade.quote && (
        <>
          <div className="relative h-[80px] md:h-[120px] -mb-px">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
              <path d="M0 120H1920V0L0 120Z" fill="#f8f6f3" />
            </svg>
          </div>

          <section 
            ref={(el) => (sectionRefs.current[decade.sections.length + 2] = el)}
            className={`bg-[#f8f6f3] py-16 md:py-24 -mt-px transition-all duration-700 ease-out ${
              visibleSections.has(decade.sections.length + 2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ willChange: visibleSections.has(decade.sections.length + 2) ? 'auto' : 'opacity, transform' }}
          >
            <div className="max-w-4xl mx-auto px-6">
              <blockquote className="text-center">
                <p className="font-['Georgia',serif] text-2xl md:text-4xl italic text-[#8B1538] leading-relaxed mb-8">
                  "{decade.quote.text}"
                </p>
                <footer className="font-['Helvetica',sans-serif] text-lg md:text-xl text-gray-700">
                  — {decade.quote.author}
                </footer>
              </blockquote>
            </div>
          </section>
        </>
      )}

      {/* Navigation to Previous/Next Decade */}
      <div className="relative h-[50px] md:h-[70px] -mb-px">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
          <path d="M0 120H1920V0L0 120Z" fill="white" />
        </svg>
      </div>

      <section 
        ref={(el) => (sectionRefs.current[decade.sections.length + 3] = el)}
        className={`bg-white pt-8 md:pt-10 pb-16 md:pb-20 -mt-px transition-all duration-700 ease-out ${
          visibleSections.has(decade.sections.length + 3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ willChange: visibleSections.has(decade.sections.length + 3) ? 'auto' : 'opacity, transform' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {previousDecade && getDecadeKey(previousDecade) ? (
              <Link
                to={previousDecade === "1847" ? "/first-fifty-years" : `/decades/${previousDecade}`}
                className="group border-2 border-[#8B1538] p-8 hover:bg-[#8B1538] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ChevronLeft className="w-6 h-6 text-[#8B1538] group-hover:text-white transition-colors" />
                  <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-[#8B1538] group-hover:text-white transition-colors">
                    Previous Decade
                  </p>
                </div>
                <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#8B1538] group-hover:text-white transition-colors">
                  {decadeData[getDecadeKey(previousDecade)!].name}
                </h3>
                <p className="font-['Georgia',serif] text-gray-600 group-hover:text-white/90 transition-colors mt-2">
                  {decadeData[getDecadeKey(previousDecade)!].years}
                </p>
              </Link>
            ) : (
              <div>
                <Link
                  to="/decades"
                  className="group border-2 border-[#8B1538] bg-white p-8 hover:bg-[#8B1538] transition-colors block"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <ChevronLeft className="w-6 h-6 text-[#8B1538] group-hover:text-white transition-colors" />
                    <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-[0.35px] text-[#8B1538] group-hover:text-white transition-colors">
                      View All Decades
                    </p>
                  </div>
                  <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-[#8B1538] group-hover:text-white transition-colors">
                    Through the Decades
                  </h3>
                  <p className="font-['Georgia',serif] text-[#4a5565] group-hover:text-white/90 transition-colors mt-2">
                    1837-Present
                  </p>
                </Link>
              </div>
            )}

            {nextDecade && getDecadeKey(nextDecade) ? (
              <Link
                to={nextDecade === "1847" ? "/first-fifty-years" : `/decades/${nextDecade}`}
                className="group border-2 border-white bg-[#8B1538] hover:bg-[#6d0f2a] p-8 transition-colors"
              >
                <div className="flex items-center justify-end gap-3 mb-3">
                  <p className="font-['Helvetica',sans-serif] text-sm uppercase tracking-wide text-white transition-colors text-right">
                    Next Decade
                  </p>
                  <ChevronRight className="w-6 h-6 text-white transition-colors" />
                </div>
                <h3 className="font-['Archivo_Black',sans-serif] text-2xl text-white transition-colors text-right">
                  {decadeData[getDecadeKey(nextDecade)!].name}
                </h3>
                <p className="font-['Georgia',serif] text-white/90 transition-colors mt-2 text-right">
                  {decadeData[getDecadeKey(nextDecade)!].years}
                </p>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>

      {/* Jump to New Decade Section */}
      <section className="bg-white pt-8 md:pt-10 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Archivo_Black',sans-serif] text-4xl md:text-5xl text-[#8B1538] mb-10 text-center">
            Jump to New Decade
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
                    image: "https://images.unsplash.com/photo-1677679122801-42ac74545507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMDE4ODBzJTIwdmljdG9yaWFufGVufDF8fHx8MTc2ODU3Mzk1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1837"
                  },
                  {
                    id: "1890s",
                    title: "The First Fifty Years",
                    years: "1847-1899",
                    image: "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMHRlYW0lMjB2aWN0b3JpYW58ZW58MXx8fHwxNzY4NDY2NDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1847"
                  },
                  {
                    id: "1900s",
                    title: "The Turn of the Century",
                    years: "1900-1909",
                    image: "https://images.unsplash.com/photo-1687742909721-cb8dc3361e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwdmludGFnZXxlbnwxfHx8fDE3Njg1NzQ2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1900"
                  },
                  {
                    id: "1910s",
                    title: "The Great War Era",
                    years: "1910-1919",
                    image: "https://images.unsplash.com/photo-1596807996038-612df413be5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd29ybGQlMjB3YXIlMjBzb2xkaWVyc3xlbnwxfHx8fDE3Njg1NzM5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1910"
                  },
                  {
                    id: "1920s",
                    title: "The Roaring Twenties",
                    years: "1920-1929",
                    image: "https://images.unsplash.com/photo-1660978692407-a7863eebe395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd2lja2V0cyUyMHN0dW1wc3xlbnwxfHx8fDE3Njg1NzQ2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1920"
                  },
                  {
                    id: "1930s",
                    title: "The Thirties",
                    years: "1930-1939",
                    image: "https://images.unsplash.com/photo-1677785643764-179393bc3842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmFsbCUyMGdyYXNzfGVufDF8fHx8MTc2ODU3NDY0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1930"
                  },
                  {
                    id: "1940s",
                    title: "Second World War",
                    years: "1940-1949",
                    image: "https://images.unsplash.com/photo-1701766993323-cc05898df2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGF2aWxpb24lMjBjbHViaG91c2V8ZW58MXx8fHwxNzY4NTc0NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1940"
                  },
                  {
                    id: "1950s",
                    title: "Post-War Revival",
                    years: "1950-1959",
                    image: "https://images.unsplash.com/photo-1589475201212-e0c77aa2d670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYm91bmRhcnklMjByb3BlfGVufDF8fHx8MTc2ODU3NDY1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1950"
                  },
                  {
                    id: "1960s",
                    title: "The Swinging Sixties",
                    years: "1960-1969",
                    image: "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGl0Y2glMjBmaWVsZHxlbnwxfHx8fDE3Njg1NzQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1960"
                  },
                  {
                    id: "1970s",
                    title: "The Seventies",
                    years: "1970-1979",
                    image: "https://images.unsplash.com/photo-1692859415442-94eabe7a7488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ2xvdmVzJTIwcGFkc3xlbnwxfHx8fDE3Njg1NzQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1970"
                  },
                  {
                    id: "1980s",
                    title: "The Eighties",
                    years: "1980-1989",
                    image: "https://images.unsplash.com/photo-1714449349503-ea9b1d6ed9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc2NvcmVib2FyZHxlbnwxfHx8fDE3Njg1NzQ2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1980"
                  },
                  {
                    id: "1990s",
                    title: "The Nineties",
                    years: "1990-1999",
                    image: "https://images.unsplash.com/photo-1568290925324-9d30cded4223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGZpZWxkfGVufDF8fHx8MTc2ODU3NDY1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/1990"
                  },
                  {
                    id: "2000s",
                    title: "The New Millennium",
                    years: "2000-2009",
                    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0dGluZyUyMGFjdGlvbnxlbnwxfHx8fDE3Njg1NjUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/2000"
                  },
                  {
                    id: "2010s",
                    title: "The Twenty-Tens",
                    years: "2010-2019",
                    image: "https://images.unsplash.com/photo-1743342875460-366f386a364a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYm93bGluZyUyMHNwZWVkfGVufDF8fHx8MTc2ODU3NDY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/2010"
                  },
                  {
                    id: "2020s",
                    title: "The Twenty-Twenties",
                    years: "2020-Present",
                    image: "https://images.unsplash.com/photo-1722661840554-568357f77b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3Vuc2V0JTIwZ3JvdW5kfGVufDF8fHx8MTc2ODU3NDY1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                    link: "/decades/2020"
                  }
                ].map((decade) => (
                  <Link
                    key={decade.id}
                    to={decade.link}
                    className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative flex-shrink-0 w-[280px] md:w-[320px] h-80"
                  >
                    <img
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
