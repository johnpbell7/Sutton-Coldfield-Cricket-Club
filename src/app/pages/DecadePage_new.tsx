import { useParams, Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";

// 1970s archive images
import img_1970_pavilion from '@/assets/decades/1970s/1970_part2_image2.jpg';
import img_1977_mccc_team from '@/assets/decades/1970s/1977_part2_image6.png';
import img_1977_mccc_composite from '@/assets/decades/1970s/1977_part2_image5.png';
import img_1979_hawks from '@/assets/decades/1970s/1979_part2_image11.jpeg';

// 1980s archive images
import img_1982_team from '@/assets/decades/1980s/1982_part2_image12.jpg';
import img_1985_ko from '@/assets/decades/1980s/1985_part2_image16.jpg';
import img_1988_1stxi from '@/assets/decades/1980s/1988_part2_image20.jpg';
import img_1986_beach from '@/assets/decades/1980s/1985_part2_image17.jpg';

// 1990s archive images
import img_1993_champions from '@/assets/decades/1990s/1993_part2_image22.jpg';
import img_1993_legends from '@/assets/decades/1990s/1993_part2_image24.png';
import img_1996_ko from '@/assets/decades/1990s/1996_part2_image25.jpeg';

// 2000s archive images
import img_2004_champions from '@/assets/decades/2000s/2004_part2_image43.jpg';
import img_2008_scoreboard from '@/assets/decades/2000s/2008_part2_image51.jpg';
import img_2010_u13 from '@/assets/decades/2010s/2010_part2_image60.jpg';

// 2010s archive images
import img_2016_squad from '@/assets/decades/2010s/2016_part3_image2.jpg';
import img_2016_veterans from '@/assets/decades/2010s/2016_part3_image1.jpg';

// 2020s archive images
import img_2022_blueteam from '@/assets/decades/2020s/2022_part3_image63.jpg';
import img_2021_team from '@/assets/decades/2020s/2021_part3_image51.jpg';
import img_2022_175th from '@/assets/decades/2020s/2022_part3_image56.jpeg';

// 1850s–1860s archive images
import img_1859_team from '@/assets/decades/1850s/1859_part1_image4.jpg';
import img_1863_team from '@/assets/decades/1860s/1863_part1_image5.jpg';
import img_1863_salver from '@/assets/decades/1860s/1863_part3_image49.png';

// 1870s archive images
import img_1873_team_a from '@/assets/decades/1870s/1873_part1_image6.jpg';
import img_1873_team_b from '@/assets/decades/1870s/1873_part1_image7.jpg';

// 1890s archive images
import img_1890_team from '@/assets/decades/1890s/1890_part1_image8.jpg';
import img_1892_team from '@/assets/decades/1890s/1892_part1_image9.jpg';
import img_1893_team from '@/assets/decades/1890s/1893_part1_image10.jpg';

// 1900s archive images
import img_1905_team_a from '@/assets/decades/1900s/1905_part1_image11.jpg';
import img_1905_team_b from '@/assets/decades/1900s/1905_part1_image12.jpg';
import img_1906_1stxi from '@/assets/decades/1900s/1906_part1_image14.jpg';
import img_1906_2ndxi from '@/assets/decades/1900s/1906_part1_image16.jpg';
import img_1909_team from '@/assets/decades/1900s/1909_part1_image18.jpg';

// 1910s archive images
import img_1910_grounds from '@/assets/decades/1910s/1910_part1_image19.jpg';
import img_1910_1stxi from '@/assets/decades/1910s/1910_part1_image20.jpg';
import img_1911_team from '@/assets/decades/1910s/1911_part1_image21.jpg';
import img_1913_team from '@/assets/decades/1910s/1913_part1_image24.jpg';
import img_1916_war from '@/assets/decades/1910s/1916_part1_image32.jpg';

// 1920s archive images
import img_1920_team from '@/assets/decades/1920s/1920_part1_image44.jpg';
import img_1921_team from '@/assets/decades/1920s/1921_part1_image47.jpg';
import img_1924_team from '@/assets/decades/1920s/1924_part1_image49.jpg';
import img_1926_team from '@/assets/decades/1920s/1926_part1_image50.jpg';

// 1930s archive images
import img_1933_team from '@/assets/decades/1930s/1933_part1_image51.jpg';
import img_1936_team from '@/assets/decades/1930s/1936_part1_image53.jpg';
import img_1937_centenary from '@/assets/decades/1930s/1937_part1_image1.jpg';
import img_1937_team_b from '@/assets/decades/1930s/1937_part1_image2.jpg';
import img_1938_team from '@/assets/decades/1930s/1938_part1_image54.jpg';

// 1940s archive images
import img_1942_wartime from '@/assets/decades/1940s/1942_part1_image56.jpeg';
import img_1946_postwar from '@/assets/decades/1940s/1946_part1_image57.jpeg';
import img_1947_mcc from '@/assets/decades/1940s/1947_part1_image58.jpg';
import img_1949_team from '@/assets/decades/1940s/1949_part1_image63.jpg';

// 1950s archive images
import img_1951_team from '@/assets/decades/1950s/1951_part1_image65.jpg';
import img_1953_team from '@/assets/decades/1950s/1953_part1_image67.jpg';
import img_1956_team from '@/assets/decades/1950s/1956_part1_image69.png';
import img_1958_team from '@/assets/decades/1950s/1958_part1_image72.jpg';
import img_1959_team from '@/assets/decades/1950s/1959_part1_image76.jpg';

// 1960s archive images
import img_1960_team from '@/assets/decades/1960s/1960_part1_image79.jpg';
import img_1963_team from '@/assets/decades/1960s/1963_part2_image38.jpg';
import img_1965_team from '@/assets/decades/1960s/1965_part1_image81.png';
import img_1966_team from '@/assets/decades/1960s/1966_part2_image1.jpg';

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
    heroImage: img_1859_team,
    introLarge: "Long before the formal establishment of Sutton Coldfield Cricket Club in 1847, cricket had already taken firm root in the town.",
    introBody: "By at least 1837, the game was being played regularly on the open expanses of Rectory Park and Sutton Park. These early matches, informal in organisation yet consistent in spirit, formed part of the social rhythm of the community. Cricket was not merely recreation; it was a gathering point — a shared pastime that reflected the character of a growing town in the early Victorian age.\n\nCentral to this formative period was the influence of the Rev. W.K. Riland Bedford. His enthusiasm for the game, combined with a strong sense of duty to parish and community, provided the leadership necessary to sustain and shape these early efforts. Though formal records from this era are scarce, later recollections and historical research allow a picture to emerge of a game sustained by volunteerism, local pride, and quiet organisation.\n\nThis was an age before committees, subscriptions, or structured competition — yet it laid the essential foundations upon which the club would soon be built.",
    sections: [
      {
        title: "The Early Game in Sutton Coldfield",
        background: "cream",
        content: [
          "Cricket was being played in Rectory Park at least a decade before the club's formal foundation. Evidence preserved in later records, including a minute book entry of 1897 marking Bedford's sixty-year association with the club, confirms that organised play was already well established by 1837.",
          "These early matches were simple in arrangement but regular in occurrence. Played on unfenced ground and shared with the wider parkland, the game relied on mutual understanding rather than formal rules of enclosure or ownership. Pitches were prepared by hand, often by the players themselves, and the boundaries of play were as much agreed as measured.",
          "Despite these limitations, cricket flourished. It quickly became a defining feature of local leisure, drawing participants and spectators alike and embedding itself within the identity of Sutton Coldfield."
        ],
        image: img_1859_team,
        imageCaption: "Sutton Coldfield CC 1st XI, 1859 — the earliest surviving team photograph"
      },
      {
        title: "Towards Formation: Cricket in the 1840s",
        background: "white",
        content: [
          "By the early 1840s, cricket in Sutton Coldfield had begun to assume a more organised character. What had started as informal recreation was gradually evolving into something more structured and enduring.",
          "Regular participation, the increasing involvement of local families, and the steady guidance of figures such as Rev. Bedford contributed to a growing sense that the game required permanence. Matches were no longer purely spontaneous; they reflected continuity, expectation, and community investment.",
          "Though still lacking formal constitution, these years represent the crucial transition from casual play to organised club cricket. By the middle of the decade, the conditions were in place for the formal founding of Sutton Coldfield Cricket Club — an act that would give lasting identity to what had already become an established tradition."
        ]
      },
      {
        title: "Rectory Road and the Early Landscape",
        background: "cream",
        content: [
          "In the mid-nineteenth century, the landscape surrounding Rectory Park was markedly different from that of today. Rectory Road existed only as a narrow country lane linking Boot Hill to the parish church, while Bedford Road — now a principal route — had yet to be constructed, its place taken by rough tracks known locally as Blackberry Lane or Bricky Lane.",
          "Access to matches was dictated by the limitations of the time. Players and visitors travelled on foot or horseback, and hospitality formed an essential part of the cricketing experience. Visiting sides were often accommodated at nearby farms, including School Farm, where overnight stays were common.",
          "To support these gatherings, a modest structure — remembered as the 'Tin Hut' near the Boot Inn — was erected. Though simple, it reflects the practical efforts made to sustain the game during its earliest years."
        ],
        image: img_1873_team_a,
        imageCaption: "Members of Sutton Coldfield CC, 1873"
      },
      {
        title: "The Bedford Family and Rectory Park",
        background: "white",
        content: [
          "The role of the Bedford family in these formative years cannot be overstated. The Rev. W.K. Riland Bedford, together with his five sons, was instrumental in transforming Rectory Park into a viable cricketing ground. Assisted by his gardener, he oversaw the preparation of pitches and the general maintenance of the playing area, ensuring that the game could be played with regularity and purpose.",
          "Beyond cricket, Bedford's influence extended to the shaping of the landscape itself. His planting of trees — including a notable avenue of elms — enhanced both the beauty and character of the park, reinforcing its role as a focal point for community life.",
          "The Rectory served not only as his residence, but as the informal headquarters of cricket in Sutton Coldfield — a place where organisation, hospitality, and leadership converged."
        ],
        image: img_1863_team,
        imageCaption: "Members of Sutton Coldfield CC and Free Foresters, 1863"
      },
      {
        title: "Preserving the Early History",
        background: "cream",
        content: [
          "The story of these early years survives not through continuous record, but through later dedication to preservation. It was not until 1937, on the eve of the club's centenary, that Frank S. Styles undertook the first serious effort to reconstruct its early history. Working from fragmentary evidence, recollection, and surviving documentation, he established the foundation upon which all subsequent histories would rely.",
          "His work was later extended by Norman Sharp and, in the modern era, by Peter Bell, whose efforts to compile and digitise records ensured that the club's origins would not be lost to time.",
          "The absence of early minute books remains a reminder of how easily history can fade — and how vital such preservation has been in maintaining the continuity of the club's story."
        ]
      }
    ],
    keyMoments: [
      {
        year: "1837",
        title: "Cricket Played in Rectory Park",
        description: "Earliest recorded evidence of organised cricket in Sutton Coldfield"
      },
      {
        year: "Early 1840s",
        title: "Game Becomes Regularised",
        description: "Cricket transitions from informal play to a more structured and sustained activity"
      },
      {
        year: "1847",
        title: "Club Officially Founded",
        description: "Sutton Coldfield Cricket Club formally established under Rev. W.K. Riland Bedford"
      },
      {
        year: "1856",
        title: "Free Foresters Cricket Club Formed",
        description: "Founded by Bedford, reflecting his wider influence on the game"
      },
      {
        year: "1937",
        title: "Early History Compiled",
        description: "Frank S. Styles reconstructs the club's origins ahead of the centenary"
      }
    ],
    quote: {
      text: "From such modest beginnings are enduring traditions formed.",
      author: "Sutton Coldfield Cricket Club"
    }
  },
  "1890s": {
    name: "The First Fifty Years",
    years: "1847-1899",
    heroTitle: "The First Fifty Years",
    heroSubtitle: "Foundations, Faith, and the Forming of a Club",
    heroImage: img_1892_team,
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
        image: img_1859_team,
        imageCaption: "Sutton Coldfield CC 1st XI, 1859 — the earliest surviving team photograph"
      },
      {
        title: "Cricket, Community, and the Free Foresters",
        background: "white",
        content: [
          "Cricket at Rectory Park quickly became part of a wider sporting and social culture. Archery, a favoured pursuit of the Rev. Bedford, was regularly practised on the grounds, with the pavilion housing targets alongside cricket equipment.",
          "In 1856, Bedford also founded the Free Foresters Cricket Club, a nomadic side built on principles of fellowship and goodwill. Matches between Sutton Coldfield and the Free Foresters became a regular feature, often involving Sutton teams of twenty-two players competing against smaller but formidable Forester elevens.",
          "Between 1859 and 1862, several highly reported encounters took place. Though frequently ending in defeat for Sutton, these matches—dominated by players such as T. Goodrich—raised playing standards and reinforced cricket's importance within the town's identity."
        ],
        image: img_1863_salver,
        imageCaption: "The silver salver presented to Rev. Bedford by the Free Foresters, 1863 — now held at Lord's Cricket Ground"
      },
      {
        title: "Facilities, Grounds, and the Pavilion",
        background: "cream",
        content: [
          "Facilities developed slowly and relied heavily on voluntary effort. In 1869, following a three-year absence, the Rector returned to find the club once again in decline. With his son's assistance, part of the square was re-laid and expanded, and a small dressing pavilion—later known as 'The Shed'—was erected by the Rector's gardener.",
          "Conditions remained basic for many years. The playing area was small, boundaries were undefined, and maintenance was demanding. Financial crises were frequent, with several moments during the 1880s when the club's future was openly questioned.",
          "A decisive turning point came in 1890 with the construction of a new pavilion. Funded through subscriptions, donations, and fundraising events, the building was completed in just four months at a cost of £100. It marked a major step forward in facilities and symbolised the club's renewed stability and ambition."
        ],
        image: img_1873_team_b,
        imageCaption: "Members of Sutton Coldfield CC, 1873"
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
        image: img_1890_team,
        imageCaption: "Sutton Coldfield CC, 1890 — the year the new pavilion was constructed"
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
    heroImage: img_1906_1stxi,
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
        image: img_1905_team_a,
        imageCaption: "Sutton Coldfield CC, 1905"
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
        image: img_1905_team_b,
        imageCaption: "Sutton Coldfield CC members at Rectory Park, 1905"
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
        image: img_1906_2ndxi,
        imageCaption: "Sutton Coldfield CC 2nd XI, 1906"
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
    heroImage: img_1910_1stxi,
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
        image: img_1911_team,
        imageCaption: "Sutton Coldfield CC, 1911"
      },
      {
        title: "Sporting Excellence and Player Highlights",
        background: "white",
        content: [
          "Despite the disruption caused by the war, the club's cricketing tradition continued. In 1919, the 1st XI included returning stalwarts L.C. and E.B. Crockford, F.B. Clark, H. Lott, and F.H. Beardshaw. F.B. Clark led both with bat and ball, scoring 814 runs at an average of 26.3 and taking 74 wickets at 14.3 runs per wicket. Beardshaw scored 502 runs at 31 and took 30 wickets, while A.E. Terry contributed 57 wickets at 9.1 runs per wicket. E.B. Crockford added 574 runs and 54 wickets at 16.9, reflecting the depth and versatility of the team. The 1st XI played 21 Saturday games (won 8, lost 7, drew 6), while the midweek side played 14 games (won 5, lost 3, drew 6).",
          "The 2nd XI faced challenges due to stronger opposition fielding first-team players unexpectedly, notably from Hall Green, Pickwick, and Bournville. Despite these handicaps, they completed 21 games, winning 8, losing 11, and drawing 2. A remarkable moment came when Sutton's 2nd XI conceded 318 runs to Harborne away, surpassing their previous record of 298 in 1910."
        ],
        image: img_1913_team,
        imageCaption: "Sutton Coldfield CC, 1913"
      },
      {
        title: "Facilities, Grounds, and Multi-Sport Use",
        background: "cream",
        content: [
          "The club's grounds remained central to both sporting success and community engagement. Investments in rollers, sheds, and wicket preparation allowed for high-quality cricket, while top and lower grounds were shared with hockey, football, and school teams. In 1919, marling of the ground ensured readiness for the opening match on 26th April."
        ],
        image: img_1910_grounds,
        imageCaption: "Rectory Park, 1910"
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
        image: img_1916_war,
        imageCaption: "Members of Sutton Coldfield CC who served in the Great War, 1916"
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
    heroImage: img_1921_team,
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
        image: img_1920_team,
        imageCaption: "Sutton Coldfield CC, 1920"
      },
      {
        title: "Facilities, Grounds & Pavilion Development",
        background: "white",
        content: [
          "Major improvements to Rectory Park defined the decade. Pavilion re-thatching, the acquisition and conversion of army huts for teas, installation of sight screens, flower beds, railings, and the eventual connection of mains water in 1929 all transformed the matchday experience. These developments were often funded through member guarantees, benefit matches, and innovative fundraising initiatives.",
          "The planting of trees and hedges along the ground's boundaries preserved its rural character amid increasing residential development, while improvements to vehicle access acknowledged the gradual rise of motor transport."
        ],
        image: img_1924_team,
        imageCaption: "Sutton Coldfield CC, 1924"
      },
      {
        title: "Cricketing Excellence & Playing Strength",
        background: "cream",
        content: [
          "The standard of cricket reached remarkable heights. The Club regularly fielded sides containing multiple county players, including E.B. Crockford, F.B. Clark, A.F. Leighton, D.G. Foster, and N. Sharp. Batting strength was exceptional, particularly during the late 1920s, when Sutton possessed what was widely regarded as its finest batting order on paper.",
          "Individual milestones abounded: Norman Sharp's first-ever thousand-run season in 1928, record partnerships, hat-tricks, and centuries against leading Midland opposition. Competitive fixtures against Wolverhampton, Leamington, Ashfield, and Olton provided both challenge and prestige."
        ],
        image: img_1926_team,
        imageCaption: "Sutton Coldfield CC, 1926 — a side regularly containing county-level talent"
      },
      {
        title: "Second XI, \"A\" Team & Club Culture",
        background: "white",
        content: [
          "Beneath the First XI, the Second and \"A\" teams played a vital role in sustaining the Club's cricketing health. Veterans of the war years blended with emerging younger players, many of whom progressed to senior cricket. Despite limited resources, particularly for the \"A\" team, dedication and enthusiasm ensured the continuation of competitive cricket at all levels.",
          "The decade was also rich in character and anecdote—benefit matches, humorous on-field incidents, evening cricket under daylight-saving, and shared use of the ground with other sports all contributed to a vibrant and enduring club culture."
        ],
        image: img_1921_team,
        imageCaption: "Sutton Coldfield CC, 1921 — the blend of post-war veterans and emerging talent"
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
    heroImage: img_1937_centenary,
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
        image: img_1933_team,
        imageCaption: "Sutton Coldfield CC, 1933"
      },
      {
        title: "Cricketing Excellence and Individual Distinction",
        background: "white",
        content: [
          "While team results varied from season to season, the 1930s produced cricket of exceptional quality at Sutton Coldfield. The club fielded players who achieved distinction at county level and beyond, and on occasion welcomed cricketers of international reputation. Individual performances—centuries, remarkable bowling spells, and memorable partnerships—regularly elevated matches, even in otherwise difficult seasons.",
          "The decade was also notable for the breadth of sporting talent within the membership. Several players distinguished themselves in other sports, most notably athletics and hockey, reinforcing Sutton Coldfield's reputation as a club that nurtured all-round sportsmen. These individual achievements brought wider recognition and prestige to the club, strengthening its standing within Midlands cricket."
        ],
        image: img_1936_team,
        imageCaption: "Sutton Coldfield CC, 1936 — the year Arthur G.K. Brown won Olympic gold and silver medals"
      },
      {
        title: "Facilities, Grounds, and the Protection of Rectory Park",
        background: "cream",
        content: [
          "The physical development and preservation of the club's facilities formed a crucial theme of the decade. Practical improvements, such as the installation of new sight screens and the reconstruction of pavilion structures, reflected a determination to maintain modern standards and provide a suitable environment for high-quality cricket.",
          "Most significant was the threat to Rectory Park itself when the landowners considered its sale for building development. Through the intervention of local authorities, the ground was purchased by the Corporation and preserved as an open space. This decisive action safeguarded not only the club's immediate future but also its long-term place within the town, ensuring that cricket at Rectory Park would continue beyond the uncertainties of the age."
        ],
        image: img_1938_team,
        imageCaption: "Sutton Coldfield CC, 1938 — the year Rectory Park was purchased by the Corporation and secured as open space"
      },
      {
        title: "Club, Community, and Civic Identity",
        background: "white",
        content: [
          "During the 1930s, Sutton Coldfield Cricket Club remained deeply embedded in the social and civic life of the town. Its presidents and senior members included prominent local figures—doctors, aldermen, and mayors—whose involvement reinforced the club's status as a respected community institution.",
          "Matches, social gatherings, and ceremonial occasions reflected a close relationship between the club and the wider public. The passing of distinguished members, such as Sir Alfred Evans, was felt not only within the club but across the town, symbolising the strength of this connection. In an era increasingly shaped by national and international events, the club continued to serve as a stable focal point for community life."
        ],
        image: img_1937_team_b,
        imageCaption: "Sutton Coldfield CC, 1937 — the club's centenary year"
      },
      {
        title: "Uncertainty, Resilience, and the Approach of War",
        background: "cream",
        content: [
          "The latter years of the decade were marked by growing uncertainty. Extreme weather disrupted several seasons, testing the resilience of players and administrators alike. Beyond these immediate challenges, the approach of the Second World War cast an ever-lengthening shadow over sporting life.",
          "By 1939, international tensions brought cricket to an abrupt halt, with fixtures cancelled and members preparing for service. The decade closed not with decline, but with interruption. The endurance shown throughout the 1930s—through poor seasons, difficult conditions, and external pressures—ensured that the club entered wartime with its traditions intact and its sense of purpose undiminished."
        ],
        image: img_1933_team,
        imageCaption: "Sutton Coldfield CC during the difficult years of the 1930s"
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
    heroImage: img_1947_mcc,
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
        ],
        image: img_1942_wartime,
        imageCaption: "Sutton Coldfield CC, 1942 — cricket continued throughout the Second World War"
      },
      {
        title: "The Post-War Boom (1945-1949)",
        background: "white",
        content: [
          "The return of peace in 1945 brought an explosion of interest in cricket. Returning servicemen were eager to resume normal life, and membership applications flooded in. By 1947, the club had over 200 active members—the highest in its history.",
          "The pavilion and ground required significant restoration after six years of wartime use. A major fundraising campaign in 1946-47 raised over £1,200 for repairs and improvements. New nets were installed, the outfield was re-seeded, and the pavilion was refurbished.",
          "On the field, the late 1940s saw competitive cricket resume in earnest. The club rejoined the Birmingham League in 1946 and finished a respectable mid-table in its first post-war season. Young talent emerged, including wicketkeeper-batsman Ronald Cooper, whose century on debut against Kidderminster in 1948 announced the arrival of a new star."
        ],
        image: img_1949_team,
        imageCaption: "Sutton Coldfield CC, 1949 — the post-war revival in full swing"
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
    heroImage: img_1951_team,
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
        image: img_1956_team,
        imageCaption: "Sutton Coldfield CC, 1956 — one of the championship-winning sides of the decade"
      },
      {
        title: "Youth Development",
        background: "white",
        content: [
          "The club pioneered youth cricket in the region, establishing a successful colts section in 1952. Under the guidance of former player and dedicated coach Arthur Simmons, dozens of young cricketers developed their skills in a structured program.",
          "This investment in youth paid immediate dividends. By the end of the decade, several colts had graduated to the senior teams, and two—David Hughes and Robert Mason—had been selected for Warwickshire's second XI.",
          "The club also invested in facilities, installing new practice nets in 1957 and purchasing a mechanized roller to improve pitch preparation. These improvements ensured Sutton Coldfield remained at the forefront of amateur cricket in the region."
        ],
        image: img_1958_team,
        imageCaption: "Sutton Coldfield CC, 1958 — the fourth championship title of the decade"
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
    heroImage: img_1966_team,
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
        ],
        image: img_1963_team,
        imageCaption: "Sutton Coldfield CC, 1963"
      },
      {
        title: "Social Change and Modernization",
        background: "white",
        content: [
          "The 1960s saw significant social changes at the club. In 1963, the club voted to admit women as associate members for the first time—a controversial decision that nevertheless reflected changing social attitudes. The Ladies' Section quickly became an integral part of club life, organizing social events and supporting match days.",
          "Facilities were modernized throughout the decade. Electric floodlights were installed for evening training in 1966. The pavilion underwent major refurbishment in 1968, with new shower facilities, updated catering equipment, and a renovated members' bar.",
          "These changes helped attract a younger, more diverse membership while maintaining the club's traditional values of sportsmanship and community spirit."
        ],
        image: img_1960_team,
        imageCaption: "Sutton Coldfield CC, 1960"
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
    heroTitle: "Dixon's Decade",
    heroSubtitle: "Records, the MCCC and a New Pavilion",
    heroImage: img_1970_pavilion,
    introLarge: "The 1970s opened with a landmark moment — the inauguration of the new Rectory Park pavilion on 25th July 1970 — and proceeded to deliver a decade of remarkable individual achievement.",
    introBody: "At the heart of it all stood Michael Dixon, who produced a sequence of run-scoring that had no precedent in the club's history. Around him, the Midland Club Cricket Conference gave Sutton a new league stage, junior cricket flourished, and the club umpires stepped onto the world stage. In 1977 the Alpine Soft Drink Company launched an under-16 youth competition, and Sutton's squad — organised by Peter Yates and led by David Stokes — won the inaugural title, with Stokes receiving the Alec Hastilow Trophy as best under-16 cricketer in the Midlands.",
    sections: [
      {
        title: "Michael Dixon — A Batsman of the Ages",
        background: "cream",
        content: [
          "No single player has dominated a decade at Sutton Coldfield as Michael Dixon dominated the 1970s. In 1973 he scored a club record 1,630 runs, including four centuries, and the team struck seven centuries in the season — itself a new record. The following year he took the MCCC Cricketer of the Year award, the first of two such honours in the decade.",
          "Dixon topped 1,000 runs in every season from 1970 to 1979 — ten consecutive seasons — a feat of consistency that astonished contemporaries. In 1978 he scored four centuries in a season in which the side reached eight centuries in total, another club record. By the time he announced his retirement in 1980, he had scored over 12,500 runs for the club, placing him among the greatest batsmen in Sutton's history.",
          "He was ably supported by Warwick Tidy with the ball. Tidy took 81 wickets in 1975 and was consistently among the wickets throughout the decade, bringing an attacking edge to the club's bowling that complemented Dixon's batting dominance. Around them, Gavin Weston — 51 dismissals behind the stumps in 1974 alone — gave the side an exceptional foundation."
        ],
        image: img_1977_mccc_composite,
        imageCaption: "The 1977 MCCC Championship — the plaque and portraits hung in the Rectory Park pavilion"
      },
      {
        title: "The MCCC, the ICC and the Hawks",
        background: "white",
        content: [
          "The formation of the Midland Club Cricket Conference in 1972 gave Sutton's senior cricket a new competitive framework, and the club rose to the challenge. In 1977 the 1st XI won the MCCC Championship — a triumph built on Dixon's 1,047 runs, Tidy's 69 wickets, and the attacking captaincy of Michael Dixon himself, whose philosophy of chasing every target made the side compelling to watch.",
          "The club also made its mark on the international stage in 1979 when the ICC World Cup came to England. Sutton hosted a warm-up match against Canada, and umpires Peter Bell and Phil Berry officiated in the USA versus Sri Lanka ICC Trophy tie — a remarkable honour for a club side. Phil Berry's photograph from that occasion subsequently appeared in The Ultimate Encyclopaedia of Cricket.",
          "The decade ended on a poignant note with the death of club historian Norman Sharp on 14th July 1977 — aged 76 — whose meticulous record-keeping had preserved so much of the club's early history. His legacy lives on in every story the club tells of its first century."
        ],
        image: img_1979_hawks,
        imageCaption: "The Hawks XI — Sutton's 3rd XI — photographed during the 1979 season"
      }
    ],
    keyMoments: [
      {
        year: "1970",
        title: "New Pavilion Opens",
        description: "The new Rectory Park pavilion is inaugurated on 25th July — a landmark in the club's infrastructure"
      },
      {
        year: "1972",
        title: "MCCC Era Begins",
        description: "The Midland Club Cricket Conference starts; Keith Gardom makes his first-class debut for Warwickshire"
      },
      {
        year: "1973",
        title: "Dixon's Record Season",
        description: "Michael Dixon scores a club record 1,630 runs including four centuries; seven centuries in the season — another new record"
      },
      {
        year: "1977",
        title: "MCCC Champions",
        description: "The 1st XI wins the MCCC Championship; Norman Sharp, the club's historian, dies aged 76"
      },
      {
        year: "1979",
        title: "On the World Stage",
        description: "Peter Bell and Phil Berry umpire at the ICC Trophy; Dixon completes his tenth consecutive 1,000-run season"
      }
    ],
    quote: {
      text: "Michael Dixon was simply the most complete batsman I ever played alongside. Season after season, he found a way to get runs.",
      author: "Keith Gardom, 1970s 1st XI"
    }
  },
  "1980s": {
    name: "The Eighties",
    years: "1980-1989",
    heroTitle: "Trophies and Tragedy",
    heroSubtitle: "The Hawks Era and an Overseas First",
    heroImage: img_1982_team,
    introLarge: "The 1980s were a decade of contrasts — league honours piling up for the 3rd XI, international cricket arriving at Rectory Park, and the club welcoming its first-ever overseas professional.",
    introBody: "Against a backdrop of recurring vandalism and the tragic early death of beloved fixture secretary Andrew Beach, the club's playing strength deepened and its community bonds tightened. Michael Dixon retired at the close of 1980 having scored 1,022 runs in his final season — completing eleven consecutive 1,000-run campaigns. In his place, a new generation stepped forward, and the club's competitive structure expanded with the formation of the Warwickshire Sunday League in 1984.",
    sections: [
      {
        title: "The Hawks Fly High",
        background: "cream",
        content: [
          "While the 1st XI consolidated its position in the MCCC, it was the club's 3rd XI — the Hawks — who became the story of the decade. Under a succession of committed captains, the Hawks won the MCCC 3rd XI League Championship in 1987, 1988 and 1989 — three consecutive titles that brought the club enormous pride and demonstrated the quality throughout the ranks.",
          "The 2nd XI Sunday side also thrived, winning the Warwickshire Sunday League in both 1988 and 1989, while the club's own knockout competition was won for the first time in 1985 — a side captained by Graham Williamson that beat local rivals Aston Unity four times in the same season. The Wishaw Six-a-Side Cup was claimed that same day, a remarkable double.",
          "Andy Luckhurst emerged as the outstanding all-round player of the era. The MCCC named him Cricketer of the Year in both 1988 and 1989, and he regularly headed both batting and bowling averages for the 1st XI — a remarkable achievement in a club well stocked with talent."
        ],
        image: img_1985_ko,
        imageCaption: "The 1985 Cup KO Winners — Sutton's first victory in their own knockout competition"
      },
      {
        title: "International Cricket, an Overseas Pioneer and Andrew Beach",
        background: "white",
        content: [
          "Rectory Park became an international venue in the early 1980s when Sutton hosted ICC World Cup warm-up games. In 1982 the Netherlands scored 293 for 4 in a 60-over match against Sutton; Canada and the USA played their 100th meeting on the same ground; and Peter Bell umpired games involving Kenya, Papua New Guinea and Gibraltar — a remarkable series of connections for a club side.",
          "In 1989 the club took another landmark step, engaging 19-year-old Zimbabwean Steve Peall as Sutton's first overseas professional. A right-arm off-spinner and hard-hitting left-handed batsman, Peall went on to play four Test matches and 21 One Day Internationals for Zimbabwe. He returned to visit Rectory Park in 2016, renewing acquaintances with the friends he had made thirty years earlier.",
          "The decade was shadowed by the sudden death of fixture secretary Andrew Beach in 1986, aged 41. A gifted off-spinner who had taken 94 wickets in his debut season in 1963, Andrew was a gentleman of the game — small in stature but immense in heart. The Andrew Beach Memorial Trophy, competed between the cricket and hockey clubs, honours his memory to this day."
        ],
        image: img_1988_1stxi,
        imageCaption: "Sutton Coldfield CC 1st XI 1988 — captioned: Leave, Mackey, Canon, P. Jones, Gosfith, D. Gullett; W. Hipburn, G. Williamson, G. Josephson, A. Luckhurst, J. Bone"
      }
    ],
    keyMoments: [
      {
        year: "1982",
        title: "International Cricket at Rectory Park",
        description: "ICC World Cup warm-up matches hosted; Peter Bell umpires ICC games involving Kenya, PNG and Gibraltar"
      },
      {
        year: "1985",
        title: "Cup Double",
        description: "1st XI wins the club's own KO Cup for the first time, and the Wishaw Six-a-Side, on consecutive days"
      },
      {
        year: "1986",
        title: "Andrew Beach Memorial",
        description: "Fixture secretary and club stalwart Andrew Beach dies aged 41; memorial trophy created in his honour"
      },
      {
        year: "1987-1989",
        title: "Hawks Hat-Trick",
        description: "The 3rd XI wins the MCCC Championship three seasons in succession"
      },
      {
        year: "1989",
        title: "First Overseas Professional",
        description: "Steve Peall of Zimbabwe joins as Sutton's first overseas player; he goes on to play for his country"
      }
    ],
    quote: {
      text: "Andrew was a gentleman, small in stature but big in heart. Everyone was most welcome in his company.",
      author: "Club tribute to Andrew Beach, 1986"
    }
  },
  "1990s": {
    name: "The Nineties",
    years: "1990-1999",
    heroTitle: "Champions at Last",
    heroSubtitle: "The 1993 League Title and a 150th Anniversary",
    heroImage: img_1993_champions,
    introLarge: "The 1990s delivered the club's most celebrated league title — the 1993 MCCC Championship — and culminated in the pomp of a 150th anniversary year that took the club to Bristol, to Lord's and back to its roots.",
    introBody: "A succession of talented captains, a series of overseas professionals, and eventual entry into the Birmingham & District Premier Cricket League made the decade one of the most eventful in Sutton's history. Through it all, the club maintained the community spirit and competitive ambition that had defined it since 1847.",
    sections: [
      {
        title: "The 1993 Championship",
        background: "cream",
        content: [
          "Andy Luckhurst's 1993 MCCC League Championship side is spoken of in reverent tones by those who played in it. Using only fifteen players all season, the club lost just one game and accumulated a margin of victory over the field that left no doubt who the best team in the Midlands was that summer.",
          "The side's bowling was led by Adrian Sutton, whose figures of 10.1 overs, 6 maidens and 7 for 9 runs in the pivotal game against Knowle & Dorridge — a side that included three Warwickshire players — encapsulated the clinical precision of the team. Paul Junkin's supporting 3 for 16 left K&D all out for 26 chasing 166, a result their chairman struggled to explain. Andy Biddle behind the stumps was exceptional throughout.",
          "The 3rd XI Hawks simultaneously won the MCCC 3rd XI Championship that same year under Terry Matthews — a league double that made 1993 one of the finest seasons in the club's history. Luckhurst and his team were rightly feted as one of the best Sutton sides of any era."
        ],
        image: img_1993_champions,
        imageCaption: "Sutton Coldfield CC 1st XI League Winners 1993 — captained by Andy Luckhurst, with Tim Buckett as overseas professional"
      },
      {
        title: "150 Years, Lord's and a New League",
        background: "white",
        content: [
          "In 1997, Sutton Coldfield Cricket Club marked 150 years of cricket at Rectory Park with a series of special events. Over 260 members and guests gathered at the Penns Hall Hotel for the anniversary dinner, where BBC's Henry Blofeld delivered an insider's view of Test cricket. Celebratory fixtures were played against the Free Foresters — themselves born on this ground in 1856 — and against Bedminster CC on the County Ground at Bristol, which the club won.",
          "In September 1998 a coach-load of members travelled to Lord's to play the MCC's Cross Arrows. Sutton came within a whisker — needing 10 from the last over with two wickets in hand, they fell 2 runs short — but left to warm applause from the home captain.",
          "In 1998 the club joined the Birmingham & District Premier Cricket League, ending years of independence from the region's main structure. It was a significant step into a more competitive landscape — one that would define the club's ambitions into the new millennium."
        ],
        image: img_1996_ko,
        imageCaption: "Sutton Coldfield Knock Out Winners 1996 — M. Mackey, C. Munn, C. Harwood, M. Hepburn, R. Powell, J. Little, A. Sutton, M. Dean, R. McLachlan, J. Ross, D. Benson"
      }
    ],
    keyMoments: [
      {
        year: "1993",
        title: "MCCC Champions",
        description: "Andy Luckhurst's side wins the MCCC Championship using only 15 players all season; Hawks win the 3rd XI title"
      },
      {
        year: "1995",
        title: "Sunday League Trophy",
        description: "1st XI wins the Warwickshire Sunday League John Whitehouse KO Trophy"
      },
      {
        year: "1997",
        title: "150th Anniversary",
        description: "Henry Blofeld headlines the anniversary dinner; Free Foresters game and fixture at Bristol celebrate 150 years"
      },
      {
        year: "1998",
        title: "Close at Lord's",
        description: "Club visits Lord's for a 150th anniversary match, falling two runs short of a famous victory over the MCC"
      },
      {
        year: "1998",
        title: "Joining the B&DPCL",
        description: "Sutton enters the Birmingham & District Premier Cricket League — a new chapter in competitive cricket"
      }
    ],
    quote: {
      text: "It was unquestionably a great side, well-balanced and a superb fielding unit. The camaraderie within the team was a must for our success.",
      author: "Andy Biddle, 1993 Championship side"
    }
  },
  "2000s": {
    name: "The New Millennium",
    years: "2000-2009",
    heroTitle: "Awards, Overseas Stars and Future Professionals",
    heroSubtitle: "Building a Club for the 21st Century",
    heroImage: img_2008_scoreboard,
    introLarge: "The 2000s brought national recognition with a Birmingham Sports Council Sports Club of the Year award, a succession of talented overseas professionals, and — unbeknown to anyone at the time — a crop of junior players destined for the professional game.",
    introBody: "The decade saw the club navigate relegation and promotion in the B&DPCL, strengthen its junior programme, install an electronic scoreboard opened by the local MP, and mourn the passing of two beloved figures in Peter Wells and Terry Matthews. A new 30-year lease signed on Christmas Day 2001 secured Rectory Park as the club's home for a generation.",
    sections: [
      {
        title: "Clubmark, Awards and Community",
        background: "cream",
        content: [
          "In 2003, Sutton Coldfield became the first club in Birmingham to receive the ECB Clubmark accreditation — recognition of the quality of its coaching, child welfare and community engagement. Two years later, that standing was cemented when the club was named Birmingham Sports Council Sports Club of the Year, beating a shortlist that included Birchfield Harriers Athletic Club.",
          "Overseas professionals enriched the playing decade. Tim Groenewald, a South African all-rounder, impressed sufficiently to earn a two-year professional contract with Warwickshire CCC before later joining Derbyshire and Somerset. The standard these players brought to Rectory Park raised every team around them, and the 2004 season ended in particular triumph — the 1st XI winning the B&DPCL 2nd Division Championship and earning promotion back into Division 1.",
          "The new 30-year ground lease signed with Birmingham City Council on Christmas Day 2001 secured the club's home for a generation — a vital foundation on which all the decade's achievements were built."
        ],
        image: img_2004_champions,
        imageCaption: "Birmingham & District Premier Cricket League 2nd Division Champions 2004 — with the trophy at Rectory Park"
      },
      {
        title: "Future County Stars and a New Scoreboard",
        background: "white",
        content: [
          "In 2008, an under-11 county cup final was played at Rectory Park that featured two boys who would go on to represent England. Aaron Thomason, playing for Sutton, later moved to Warwickshire and Sussex CCC. Tom Banton, then only nine years old, progressed through Somerset's academy to open for England in T20 internationals and was named PCA Young Player of the Year in 2019.",
          "That same year, the club's top ground gained a new electronic scoreboard, funded through grants and members' subscriptions organised by Eric Harding, and officially opened by the local MP, Andrew Mitchell. It was a visible symbol of the club's investment in its facilities — the group gathered for the opening a fitting reflection of the many volunteers who had made it possible.",
          "The decade closed with the passing of two much-loved figures. Peter Wells, a former chairman, President and dedicated organiser of junior cricket, died in March 2009. Terry Matthews, the 3rd XI's irrepressible captain and master storyteller, died on Christmas Eve 2008. The Terry Matthews Junior Award, created by his family, is still presented annually to a promising junior."
        ],
        image: img_2008_scoreboard,
        imageCaption: "The new electronic scoreboard at Rectory Park, officially opened in 2008 by local MP Andrew Mitchell"
      }
    ],
    keyMoments: [
      {
        year: "2003",
        title: "ECB Clubmark — First in Birmingham",
        description: "Sutton becomes the first Birmingham club to achieve the ECB Clubmark accreditation"
      },
      {
        year: "2004",
        title: "Tim Groenewald",
        description: "South African overseas player impresses sufficiently to earn a professional contract with Warwickshire CCC"
      },
      {
        year: "2005",
        title: "Sports Club of the Year",
        description: "Birmingham Sports Council names Sutton Coldfield CC Sports Club of the Year"
      },
      {
        year: "2008",
        title: "Future England Stars",
        description: "Aaron Thomason and Tom Banton play in an under-11 final at Rectory Park — both later represent England"
      },
      {
        year: "2008",
        title: "New Electronic Scoreboard",
        description: "MP Andrew Mitchell officially opens the new electronic scoreboard on the top ground"
      }
    ],
    quote: {
      text: "Terry will be sadly missed by his many senior friends, spending a Saturday evening in the bar listening to his many yarns.",
      author: "Club tribute to Terry Matthews, 2009"
    }
  },
  "2010s": {
    name: "The Twenty-Tens",
    years: "2010-2019",
    heroTitle: "Five Titles in Seven Years",
    heroSubtitle: "The Thomason Brothers, Dan Childs and a Golden Era",
    heroImage: img_2016_squad,
    introLarge: "After a difficult start to the decade — relegation from the Birmingham League in 2011 — Sutton Coldfield Cricket Club rebuilt with breathtaking speed, winning the Warwickshire Cricket League unbeaten in 2013 and claiming five championship titles over seven years.",
    introBody: "Under head coach Steve Perryman, with Dan Childs as the bowling spearhead and Lee and Aaron Thomason as its batting heart, the club rose through the leagues, won national recognition and claimed the Sutton Coldfield Observer Sports Team of the Year award three consecutive times. The decade also saw four stalwarts of the club — John Robinson, Peter Bell, Neil Houghton and James Ross — mark a combined 200 years of membership between them.",
    sections: [
      {
        title: "The 2013 Season — Five Titles",
        background: "cream",
        content: [
          "The 2013 season is widely considered the greatest in the club's modern history. The Saturday 1st XI, captained by Graham Clark, went unbeaten through the Warwickshire Cricket League Premier Division, winning 13 games, drawing 8 and accumulating a league record 426 points. Dan Childs, a South African fast bowler who had joined as overseas player and groundsman, took 56 wickets at an average of 10.9 — his second consecutive season taking 50 or more.",
          "But that was only one of five titles won that year. The Sunday 1st XI won the Warwickshire Sunday League; the senior side won the WCL T20 final against Bedworth; the club won a local floodlit T20 competition; and an SCCC side took the Last Man Stands final against Aldridge. Lee Thomason scored 969 runs in the WCL alone at an average of over 60.",
          "The promotion back into the Birmingham League that season was celebrated as a watershed moment. Steve Perryman, the ex-Warwickshire and Worcestershire player appointed head coach in 2011, had transformed the squad's discipline and skill levels in a remarkable turnaround."
        ],
        image: img_2010_u13,
        imageCaption: "Under 13 County Champions 2010 — the generation that would go on to power the senior sides through the 2010s"
      },
      {
        title: "County Stars, Community Pride and 200 Years",
        background: "white",
        content: [
          "The club produced professional cricketers from its own ranks in this decade. Aaron Thomason, who came through the SCCC junior system, made his 1st XI debut for Warwickshire CCC in 2014 in a Royal London Cup game at Lord's, later signing for Sussex CCC. Tom Banton, who had played in an under-11 county final at Rectory Park in 2008, blossomed at Somerset to become PCA Young Player of the Year in 2019 and earned an England T20 call-up.",
          "In 2016, four men sat together for a photograph at Rectory Park to mark a remarkable milestone: John Robinson (44 years' membership), Peter Bell (50), Neil Houghton (61) and James Ross (45) — a combined 200 years of service to Sutton Coldfield Cricket Club. It was a snapshot of continuity and dedication that no trophy cabinet could fully convey.",
          "The club won the Sutton Coldfield Observer Sports Team of the Year award in 2013, 2014 and 2015 — three consecutive years — a hat-trick of public recognition reflecting not just on-field success but the whole club's standing in the community."
        ],
        image: img_2016_veterans,
        imageCaption: "A combined 200 years of membership: John Robinson (44), Peter Bell (50), Neil Houghton (61) and James Ross (45), photographed at Rectory Park in 2016"
      }
    ],
    keyMoments: [
      {
        year: "2013",
        title: "Five Titles in One Season",
        description: "Unbeaten WCL champions (record 426 points), Sunday League, T20 Final, floodlit competition and Last Man Stands — five titles in one summer"
      },
      {
        year: "2014",
        title: "Aaron Thomason at Lord's",
        description: "Club product Aaron Thomason makes his 1st XI debut for Warwickshire CCC at Lord's"
      },
      {
        year: "2015",
        title: "Sports Award Hat-Trick",
        description: "Sutton Coldfield Observer names the club Sports Team of the Year for a third consecutive year"
      },
      {
        year: "2016",
        title: "Ten Not Out — WWI Centenary",
        description: "A moving centenary performance by schoolchildren and students commemorates the 40 club members lost in the First World War"
      },
      {
        year: "2019",
        title: "Tom Banton — PCA Young Player of the Year",
        description: "Former SCCC junior Tom Banton wins PCA Young Player of the Year and joins England's T20 squad"
      }
    ],
    quote: {
      text: "We have achieved the leading spot in the league by dividing each game into sessions and playing each one in turn. This team has found a winning way.",
      author: "Head Coach Steve Perryman, 2013"
    }
  },
  "2020s": {
    name: "The Twenty-Twenties",
    years: "2020-Present",
    heroTitle: "Resilience and Renewal",
    heroSubtitle: "From Pandemic to the Present",
    heroImage: img_2022_blueteam,
    introLarge: "The 2020s opened with the COVID-19 pandemic bringing cricket to a standstill for the first time since the Second World War — and the club responded with the same quiet determination that has defined it for over 175 years.",
    introBody: "President James Ross galvanised members and vice presidents with personal letters, raising over £3,500 in donations. Grants were secured from Sport England and the ECB. The pitches were tended, the pavilion maintained, and the community held together until cricket could return. In 2022 the club celebrated its 175th anniversary — a milestone reached on the same ground, in the same park, where it all began.",
    sections: [
      {
        title: "Lockdown and the Long Return",
        background: "cream",
        content: [
          "When the Government's lockdown instructions arrived in March 2020, the club moved immediately to protect its finances. With no subscriptions coming in and no bar income, the committee held video meetings to manage the budget. The GPC secured a £10,000 grant for the pavilion's fixed costs; the cricket club received £7,000 from Sport England. These funds kept the club solvent through the long months of uncertainty.",
          "President James Ross wrote personally to all life members and vice presidents, explaining the club's situation with characteristic candour. The response was generous: over £3,500 in donations arrived by post. While awaiting cricket's return, the President spent thirty hours painting the fence panels between the two grounds — only for a storm to break a branch and damage a section the very next week.",
          "When the season eventually resumed with a compressed programme, the club's players, parents and volunteers returned to Rectory Park with a renewed sense of gratitude for what they had. The first ball bowled after lockdown was, as one member put it, the most welcome sound any of them had heard."
        ],
        image: img_2021_team,
        imageCaption: "Back at Rectory Park — the club resumed competitive cricket in 2021 after the pandemic interruption"
      },
      {
        title: "175 Years and the Story Continues",
        background: "white",
        content: [
          "In April 2022, the club celebrated its 175th anniversary with a gala dinner at Moor Hall Golf Club — bringing together players, officials and supporters from across the generations. The occasion reflected on a club that had survived two world wars, financial crises, vandalism and a global pandemic, and had emerged from each with its values intact.",
          "On the pitch, the 2020s 1st XI continued to compete in the Birmingham & District Premier Cricket League, with Aaron Thomason returning to captain the senior side and Raul Ram — one of the most loyal servants in the club's modern history — remaining a cornerstone of the batting order. Over two consecutive Saturdays in April 2022, the side scored 994 runs for the loss of just 26 wickets, a remarkable early-season spell.",
          "The strategic questions facing the club are those facing all amateur cricket clubs: how to retain players in an era of competing demands on time; how to develop coaching pathways; and how to remain financially sustainable. What is not in question is the club's identity — founded in 1847, still playing on the same Rectory Park ground, nearly 180 years on."
        ],
        image: img_2022_175th,
        imageCaption: "175th Anniversary Dinner — 8th April 2022, Moor Hall Golf Club, marking 175 years of cricket at Rectory Park"
      }
    ],
    keyMoments: [
      {
        year: "2020",
        title: "Cricket Suspended by Pandemic",
        description: "COVID-19 halts cricket for the first time since WWII; the club raises £3,500 in donations and secures £17,000 in grants to stay afloat"
      },
      {
        year: "2020",
        title: "Cricket Returns",
        description: "A compressed season resumes under protocols — the first ball bowled is celebrated like a championship victory"
      },
      {
        year: "2019",
        title: "Strategic Review",
        description: "The club commissions a strategic review to plan its future — coaching, recruitment and sustainability are the priorities"
      },
      {
        year: "2021+",
        title: "Junior Cricket Thrives",
        description: "Friday evening junior sessions regularly draw over 100 young players to Rectory Park — the pipeline for future senior teams"
      },
      {
        year: "2025",
        title: "178 Years and Counting",
        description: "Still playing cricket on the same Rectory Park ground founded by the Rev. Riland Bedford in 1847"
      }
    ],
    quote: {
      text: "No cricket being played and no indication of when it might return — yet still we found a way to hold together. This club has endured far worse.",
      author: "President James Ross, 2020"
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
                          <p key={pIdx} className="font-['Georgia',serif] md:text-xl leading-relaxed text-gray-800 text-lg mb-6">
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
                          <p key={pIdx} className="font-['Georgia',serif] md:text-xl leading-relaxed text-gray-800 text-lg mb-6">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      {/* Square image on right - first on mobile */}
                      <div className="md:col-span-5 md:order-2 order-1">
                        <ImageWithFallback
                          src={img_1953_team}
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
                        <p key={pIdx} className="font-['Georgia',serif] md:text-xl leading-relaxed text-gray-800 text-lg mb-6">
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
              <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-8 text-center">
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
                  className="inline-flex items-center gap-2 md:gap-3 bg-[#8B1538] text-white px-6 md:px-10 py-3 md:py-4 font-['Helvetica',sans-serif] font-semibold text-base md:text-lg hover:bg-[#6d1029] transition-all duration-300"
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
                to={`/decades/${previousDecade}`}
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
                to={`/decades/${nextDecade}`}
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
                    image: img_1859_team,
                    link: "/decades/1837"
                  },
                  {
                    id: "1890s",
                    title: "The First Fifty Years",
                    years: "1847-1899",
                    image: img_1892_team,
                    link: "/decades/1847"
                  },
                  {
                    id: "1900s",
                    title: "A Time of Change and Uncertainty",
                    years: "1901-1909",
                    image: img_1906_1stxi,
                    link: "/decades/1900"
                  },
                  {
                    id: "1910s",
                    title: "A Decade of Transition and Challenge",
                    years: "1910-1919",
                    image: img_1910_1stxi,
                    link: "/decades/1910"
                  },
                  {
                    id: "1920s",
                    title: "The Golden Resurgence",
                    years: "1920-1929",
                    image: img_1921_team,
                    link: "/decades/1920"
                  },
                  {
                    id: "1930s",
                    title: "The Thirties",
                    years: "1930-1939",
                    image: img_1937_centenary,
                    link: "/decades/1930"
                  },
                  {
                    id: "1940s",
                    title: "Wartime and Renewal",
                    years: "1940-1949",
                    image: img_1947_mcc,
                    link: "/decades/1940"
                  },
                  {
                    id: "1950s",
                    title: "The Fabulous Fifties",
                    years: "1950-1959",
                    image: img_1951_team,
                    link: "/decades/1950"
                  },
                  {
                    id: "1960s",
                    title: "Transformation and Tradition",
                    years: "1960-1969",
                    image: img_1966_team,
                    link: "/decades/1960"
                  },
                  {
                    id: "1970s",
                    title: "Dixon's Decade",
                    years: "1970-1979",
                    image: img_1970_pavilion,
                    link: "/decades/1970"
                  },
                  {
                    id: "1980s",
                    title: "Trophies and Tragedy",
                    years: "1980-1989",
                    image: img_1982_team,
                    link: "/decades/1980"
                  },
                  {
                    id: "1990s",
                    title: "Champions at Last",
                    years: "1990-1999",
                    image: img_1993_champions,
                    link: "/decades/1990"
                  },
                  {
                    id: "2000s",
                    title: "The New Millennium",
                    years: "2000-2009",
                    image: img_2004_champions,
                    link: "/decades/2000"
                  },
                  {
                    id: "2010s",
                    title: "The Twenty-Tens",
                    years: "2010-2019",
                    image: img_2016_squad,
                    link: "/decades/2010"
                  },
                  {
                    id: "2020s",
                    title: "The Twenty-Twenties",
                    years: "2020-Present",
                    image: img_2022_blueteam,
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
