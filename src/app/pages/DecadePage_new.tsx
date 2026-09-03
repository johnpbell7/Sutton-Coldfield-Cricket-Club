import { useParams, Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { DecadeCard } from "@/app/components/DecadeCard";
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
import img_2023_lgbtq_event from '@/assets/decades/2020s/2023_part3_image77.png';
import img_2025_first_xi_squad from '@/assets/decades/2020s/2025_part3_image97.png';
import img_2026_girls_team from '@/assets/decades/2020s/2026_first_girls_team.jpg';

// 1850s–1860s archive images
import img_1859_team from '@/assets/decades/1850s/1859_part1_image4.jpg';
import img_1863_team from '@/assets/decades/1860s/1863_part1_image5.jpg';
import img_1863_team_photo from '@/assets/decades/1860s/1863_part1_image5.jpg';

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
import img_rectory_house from '@/assets/decades/1840s/rectory_house_bedford_plate.jpg';
import img_rectory_ground_1850 from '@/assets/decades/1850s/1850_sutton_rectory_cricket_ground.jpg';
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
import img_1947_part1_image59 from '@/assets/decades/1940s/1947_part1_image59.jpeg';
import img_1955_part1_image68 from '@/assets/decades/1950s/1955_part1_image68.jpg';
import img_1956_part1_image70 from '@/assets/decades/1950s/1956_part1_image70.jpg';
import img_1960_part1_image78 from '@/assets/decades/1960s/1960_part1_image78.jpg';
import img_1963_part2_image39 from '@/assets/decades/1960s/1963_part2_image39.jpg';
import img_1963_part2_image40 from '@/assets/decades/1960s/1963_part2_image40.jpg';
import img_2013_part2_image66 from '@/assets/decades/2010s/2013_part2_image66.jpg';
import img_2015_part2_image75 from '@/assets/decades/2010s/2015_part2_image75.jpg';
import img_2016_free_foresters_160th from '@/assets/decades/2010s/2016_free_foresters_160th.jpg';
import img_2019_tom_banton_england from '@/assets/decades/2010s/2019_tom_banton_england.jpg';
import img_1999_part2_image32 from '@/assets/decades/1990s/1999_part2_image32.jpg';
import img_1993_part2_image23 from '@/assets/decades/1990s/1993_part2_image23.jpg';
import img_1997_part2_image27 from '@/assets/decades/1990s/1997_part2_image27.jpeg';
import img_1998_part2_image28 from '@/assets/decades/1990s/1998_part2_image28.jpg';
import img_2005_part2_image44 from '@/assets/decades/2000s/2005_part2_image44.jpg';
import img_2005_part2_image45 from '@/assets/decades/2000s/2005_part2_image45.png';
import img_2006_part2_image46 from '@/assets/decades/2000s/2006_part2_image46.jpeg';
import img_2008_part2_image55 from '@/assets/decades/2000s/2008_part2_image55.png';
import img_1972_part2_image3 from '@/assets/decades/1970s/1972_part2_image3.jpg';
import img_1975_part2_image4 from '@/assets/decades/1970s/1975_part2_image4.jpg';
import img_1977_part2_image7 from '@/assets/decades/1970s/1977_part2_image7.jpg';
import img_1984_part2_image15 from '@/assets/decades/1980s/1984_part2_image15.jpg';
import img_1982_part2_image13 from '@/assets/decades/1980s/1982_part2_image14.jpg';
import img_1986_part2_image18 from '@/assets/decades/1980s/1986_part2_image18.jpg';
import img_1906_part1_image15 from '@/assets/decades/1900s/1909_part1_image18.jpg';
import img_1905_part1_image13 from '@/assets/decades/1900s/1905_part1_image13.jpg';
import img_1907_part1_image17 from '@/assets/decades/1900s/1907_part1_image17.jpg';
import img_1912_part1_image23 from '@/assets/decades/1910s/1912_part1_image23.jpg';
import img_1914_part1_image26 from '@/assets/decades/1910s/1914_part1_image26.jpg';
import img_1916_part1_image41 from '@/assets/decades/1910s/1916_part1_image41.jpg';
import img_1938_lost_building from '@/assets/decades/1930s/1938_part1_image55.jpeg';
import img_1921_group from '@/assets/decades/1920s/1921_part1_image48.jpeg';
import img_1952_xi from '@/assets/decades/1950s/1952_part1_image66.jpg';
import img_1962_xi from '@/assets/decades/1960s/1962_part1_image80.jpg';
import img_2012_xi from '@/assets/decades/2010s/2012_part2_image65.jpg';
import img_1933_crockford from '@/assets/decades/1930s/1933_part1_image52.jpg';

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
        image: img_1873_team_b,
        imageCaption: "An early Sutton Coldfield fixture list, naming the season's matches and the managers responsible for raising each side"
      },
      {
        title: "Towards Formation: Cricket in the 1840s",
        background: "white",
        content: [
          "By the early 1840s, cricket in Sutton Coldfield had begun to assume a more organised character. What had started as informal recreation was gradually evolving into something more structured and enduring.",
          "Regular participation, the increasing involvement of local families, and the steady guidance of figures such as Rev. Bedford contributed to a growing sense that the game required permanence. Matches were no longer purely spontaneous; they reflected continuity, expectation, and community investment.",
          "Though still lacking formal constitution, these years represent the crucial transition from casual play to organised club cricket. By the middle of the decade, the conditions were in place for the formal founding of Sutton Coldfield Cricket Club — an act that would give lasting identity to what had already become an established tradition."
        ],
        image: img_rectory_house,
        imageCaption: "Sutton Rectory, from the plates of Rev. W.K.R. Bedford's book - the house that gave Rectory Park its name, with the cricket lawn in front of it. The plate carries no date."
      },
      {
        title: "Rectory Road and the Early Landscape",
        background: "cream",
        content: [
          "In the mid-nineteenth century, the landscape surrounding Rectory Park was markedly different from that of today. Rectory Road existed only as a narrow country lane linking Boot Hill to the parish church, while Bedford Road — now a principal route — had yet to be constructed, its place taken by rough tracks known locally as Blackberry Lane or Bricky Lane.",
          "Access to matches was dictated by the limitations of the time. Players and visitors travelled on foot or horseback, and hospitality formed an essential part of the cricketing experience. Visiting sides were often accommodated at nearby farms, including School Farm, where overnight stays were common.",
          "To support these gatherings, a modest structure — remembered as the 'Tin Hut' near the Boot Inn — was erected. Though simple, it reflects the practical efforts made to sustain the game during its earliest years."
        ],
        image: img_rectory_ground_1850,
        imageCaption: "\"Sutton Rectory Cricket-Ground. 1850\" - a match in progress, the Rectory just visible through the trees at the centre. Three years after the club was formed, and the earliest known view of the ground it was founded on."
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
          "The club's story began in 1847, when the Rev. Bedford circulated a letter to local residents proposing the formation of a cricket club. His aim was both progressive and inclusive: to provide healthy recreation through a club open to all classes, supported by modest subscriptions. No surviving record gives the day the circular went out.",
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
        image: img_1863_team_photo,
        imageCaption: "The Sutton Coldfield XI of 1863, the year the Free Foresters presented Rev. Bedford with a silver salver now held at Lord's"
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
        year: "1847",
        title: "Establishment at Rectory Park",
        description: "Rev. Bedford lays out a cricket ground on the Rectory Glebes, prompted by the Government's 1845 railway plans threatening the ground in Sutton Park"
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
    name: "The Turn of the Century",
    years: "1900-1909",
    heroTitle: "The Edwardian Club",
    heroSubtitle: "A Professional, a Fourth Team, and the Founder's Last Winter",
    heroImage: img_1906_1stxi,
    introLarge: "The Edwardian decade gave Sutton Coldfield Cricket Club a paid professional, a fourth Saturday side and a membership of 114 — and, in January 1905, took from it the founder who had made all of it possible.",
    introBody: "These were years of quiet consolidation rather than crisis. W.H. Sidney was engaged in 1904 as groundsman, coach and professional player; the lower ground was brought into use for extra matches and given a pavilion of its own, paid for by open-air concerts; and a Gymkhana of novelty races, first held in 1902, settled into an annual fixture of its own. Yet the club never owned the field it played on, and by 1907 the ecclesiastical ownership of Rectory Park had become an open question. The most consequential arrivals of the decade were the quietest: a four-year-old boy who came to Sutton behind his father in 1905, and a generation of Bishop Vesey's and King Edward's schoolboys who joined the club as young men and whose names would end up on memorials in France.",
    sections: [
      {
        title: "Twopence in the Tin",
        background: "cream",
        content: [
          "The early years of the century saw gradual changes in the men who ran the club. T.A. Vaughton, one of the batsmen of the 1893 side, concluded his period as captain, and C. Shelvoke took the side for 1902; both were noted batsmen, and playing standards held steady through the handover. R.S. Walters took on the office of Honorary Treasurer, and the pattern of captain, secretary and treasurer that had been formalised in the 1880s carried on much as before.",
          "One episode of 1902 says more about the club's culture than any minute of business. The committee introduced a system by which drinks were supplied on trust, members being expected to place their payments in a secured tin. When the container was eventually opened it was found to contain twopence. The experiment was brought to an immediate end, and the club went back to ordering its refreshments in the older way.",
          "The gap in the accounts had to be filled somehow, and in the same year the club organised its first Gymkhana — novelty races and competitions of skill, open to members and their families. It proved popular enough to become a recurring feature of the season for years afterwards. Open-air concerts served the same purpose, relied entirely on volunteer organisation, and were recognised as vital to keeping the books in balance.",
        ],
        image: img_1905_team_a,
        imageCaption: "Sutton Coldfield CC, 1905 — one of three photographs surviving from that season."
      },
      {
        title: "A Professional, a Second Ground, and a Horse",
        background: "white",
        content: [
          "In 1904 the club took an important step forward with the appointment of W.H. Sidney as groundsman, coach and professional player. His arrival improved both the standard of play and the preparation of the square, and marked a deliberate move towards greater professionalism in a club that had until then run almost entirely on voluntary labour. He was retained in the post through the seasons that followed.",
          "The same period saw the lower ground, across the two-foot ditch that had separated the two pitches since the Rector's day, developed for additional matches, with a pavilion built there and funded through community events such as the open-air concerts. By 1906 the club was fielding a fourth Saturday team alongside its midweek sides, and membership had reached 114. The ground was let in a limited way to football teams, on conditions carefully framed to protect the cricket square.",
          "Much of the ground work still depended on a horse. Every morning it was dressed not only in its harness but in two pairs of steel shoes with leather straps, to prevent it damaging the playing surface, and for an hour or more it walked the heavy roller over the strip next to be played on. It lived out in Rectory Park all year, going back to a local farmer only in severe frost. The club's papers never gave it a name — it was always 'The Horse' — and from the 1900s to the 1940s the public kept well away from it, its temperament being unknown.",
        ],
        image: img_1906_part1_image15,
        imageCaption: "Sutton Coldfield CC, 1909 — by the end of the decade the club was fielding four Saturday sides."
      },
      {
        title: "The Founder's Last Winter",
        background: "cream",
        content: [
          "In January 1905 the Rev. W.K. Riland Bedford died. He had circulated the letter that founded the club in 1847, laid out its ground on the Rectory Glebes, and served as its President from 1847 until 1892; in 1856 he had founded the Free Foresters on the same field, and the silver salver his friends gave him in 1863 is held to this day at Lord's. His death closed the life of the man most responsible for the club's creation and its repeated survival.",
          "The family did not disappear from Rectory Park with him. H.E.R. Bedford was still turning out for the 1st XI in 1906 and was made a Life Member in 1907, and the presidency remained in Bedford hands until 1910. But the direct, personal guidance of the founder was gone, and the club that continued was one increasingly run by its committee rather than by its Rector.",
          "In the same year George Sharp moved into Sutton Coldfield and joined the club, bringing with him his four-year-old son. The club dates Norman Sharp's association from 1905 — a period of seventy-two years — though its own papers differ on his birth, one obituary heading giving 1900 and its text 15th April 1901. He would fill the pre-war score books in his own hand and serve the club until his death in 1977. Also in 1905, I.W. Smith of Sutton Coldfield played first-class cricket for Warwickshire.",
        ],
        image: img_1905_part1_image13,
        imageCaption: "One of the three photographs surviving from 1905, the year the founder died."
      },
      {
        title: "The Boys in the School Photographs",
        background: "white",
        content: [
          "Percival Allen Grove — Percy to the club — was born in Sutton Coldfield on 29th September 1888, eldest son of Allen and Elizabeth Whilock Grove of 'Copsewood', Tudor Hill. He was at Bishop Vesey's Grammar School from 1899 to 1905, taking the Victor Ludorum in his last year, and became a chartered accountant with Harrison, West & Ledsam in Birmingham. He joined the cricket club in 1906 and made himself a bowler: 6 for 13 at Wolverhampton for the 2nd XI in 1908, and, as a 1st XI regular in 1909, 7 for 14 against Yardley at Rectory Park.",
          "Arthur John Lilly was born in Hackney in 1881 and grew up in Sutton as the adopted son and nephew of Mr and Mrs Harry J. Lilly of 'The Mount', working in the family business, Lilly & Lilly, gentlemen's outfitters of Birmingham. He joined in 1904 and took 7 for 14 against Olton at Rectory Park for the 2nd XI in 1906 — the year he became Honorary Treasurer, an office he held for the rest of his life. He is remembered as a cheerful and lively member with a flair for practical jokes and stage comedy.",
          "Behind them a whole generation was at school. Walter Bladen Sampson was at Bishop Vesey's from 1899 to 1907, took the Victor Ludorum in 1902 and was a founder member of the Vesey Old Boys' Club; Septimus Eric Parsons was there from 1902 to 1906 before Mill Hill, Reginald Chopping from 1902 to 1907, Edward Markwick from 1905 to 1912. Esmond Hallewell Rogers was the only son of Sir Hallewell Rogers, Lord Mayor of Birmingham in 1903–04. Rowland Wilson-Browne won the gymnastic Open Championship at King Edward's three years running and belonged to the Dolobran club, whose Balsall Heath gymnasium had staged the first international gymnastics match between England, Ireland and Scotland in March 1900. John Howard Felton was born on 30th December 1899 at 'Brooklyn', Rectory Road, a few hundred yards from the ground. Not one of them survived the war.",
        ],
        image: img_1906_2ndxi,
        imageCaption: "The club's 2nd XI of 1906; the name P.A. Grove stands in the photograph's caption."
      },
      {
        title: "Draws, Averages and the Question of the Ground",
        background: "cream",
        content: [
          "The 1907 season was overshadowed by uncertainty about Rectory Park itself. Reports suggested that the land, held by ecclesiastical authorities, might be redeveloped because of its rising value, and the club had no security beyond an annual tenancy. Cricket went on regardless, with a full fixture list and competitive results, but the tension between stability on the field and insecurity off it would run for years.",
          "On the field the batting was the strength. In 1909 Horace Lott headed both the batting and the bowling averages, and centuries were recorded by E.B. Crockford, F.B. Clark and R.E. Yates. Results, though, were often inconclusive: a high proportion of matches were drawn, the side lacking the bowling to force a finish, and wet summers took their toll on both the cricket and the gate.",
          "With the Rector's retirement in prospect, the club explored the possibility of securing a formal lease from the Ecclesiastical Commissioners. The attempt was unsuccessful and the annual tenancy continued. What did improve was the record-keeping: by 1909 fuller match and player statistics were being kept, and it is largely from these books — many of them soon to be written up by a schoolboy scorer — that the club's account of its Edwardian seasons survives at all.",
        ],
        image: img_1907_part1_image17,
        imageCaption: "Sutton Coldfield CC, 1907 — the year the club's tenure at Rectory Park was first questioned."
      },
    ],
    keyMoments: [
      {
        year: "1902",
        title: "Twopence in the Tin",
        description: "The experiment of supplying drinks on trust ended when the payment tin was opened and found to hold twopence."
      },
      {
        year: "1902",
        title: "The First Gymkhana",
        description: "A fundraising Gymkhana of novelty races and skill competitions was held at Rectory Park and became an annual tradition."
      },
      {
        year: "1904",
        title: "A Professional Engaged",
        description: "W.H. Sidney was appointed groundsman, coach and professional player, raising both playing standards and pitch preparation."
      },
      {
        year: "1904",
        title: "The Lower Ground Developed",
        description: "The lower ground was brought into use for additional matches and given a pavilion funded through open-air concerts."
      },
      {
        year: "1905",
        title: "Death of the Founder",
        description: "The Rev. W.K. Riland Bedford, founder and President from 1847 to 1892, died in January 1905."
      },
      {
        year: "1905",
        title: "The Sharps Come to Sutton",
        description: "George Sharp joined the club and brought with him his four-year-old son Norman, whose association would last seventy-two years."
      },
      {
        year: "1906",
        title: "A Fourth Saturday Team",
        description: "Membership reached 114 and the club fielded a fourth Saturday side alongside its midweek teams."
      },
      {
        year: "1906",
        title: "Lilly's Seven for Fourteen",
        description: "Arthur Lilly took 7 for 14 against Olton at Rectory Park for the 2nd XI, and became Honorary Treasurer that year."
      },
      {
        year: "1907",
        title: "The Ground in Question",
        description: "Ecclesiastical plans for the Rectory raised the prospect that the club might lose Rectory Park altogether."
      },
      {
        year: "1909",
        title: "Lott Tops Both Averages",
        description: "Horace Lott led the batting and the bowling, with centuries from Crockford, Clark and Yates in a season of many draws."
      },
    ],
    quote: {
      text: "The horse will last another season.",
      author: "The club's minute books, on the ground horse — a refrain of the first half of the twentieth century"
    }
  },
  "1910s": {
    name: "The Last Summers",
    years: "1910-1919",
    heroTitle: "The Last Summers",
    heroSubtitle: "Record Scores, the Eighth of August, and the Names That Followed",
    heroImage: img_1913_team,
    introLarge: "The decade opened with the last Bedford stepping down from the presidency and a schoolboy taking up the score book. It closed with a memorial tablet accepted for the pavilion, and a club that had very nearly lacked the men to reconvene at all.",
    introBody: "Between those points lie the best cricket Sutton Coldfield had played — J.B. Russell's 172 and F.B. Clark's 89 wickets in the summer of 1914 — and the abrupt silence that followed the last fixture on 8th August. The men who filled the team photographs of 1911, 1912 and 1913 were, within four years, scattered across the Somme, Flanders, Arras and the Royal Flying Corps, and twelve of them are the subject of full biographies in the club's own records. How many went and how many came home the club has never been able to state: its accounts give figures that cannot be reconciled, and the Roll of Honour that hung in the pavilion was destroyed before anyone thought to copy down the names.",
    sections: [
      {
        title: "The Last Bedford, and a New Hand on the Book",
        background: "cream",
        content: [
          "In 1910 the Rev. W.C.R. Bedford retired as President, ending more than six decades in which the Bedford family had led the club from its foundation to stability. The following year the Rev. Canon C.W. Barnard was elected in his place — the first president from outside the founding family, and proof that the club could continue beyond it. The season itself was a good one, with strong batting from L.C. Crockford, J.B. Russell and E.B. Crockford and consistent bowling led by Dr. Sproat.",
          "1910 also gave the club its finest recorder. Norman Sharp, whose father had joined five years earlier, became 2nd XI scorer that year; many of the pre-First World War score books were completed in his hand, and he appears in a great many of the pre-war team photographs. The books of 1913 and 1919 survive, filled in by a schoolboy of fourteen, and it is largely through them that these seasons can still be read. He played his first game for the club in 1915, while still at school.",
          "Off the field the club was busy in a small way. The top and lower grounds were let in winter to hockey and football clubs, arrangements carefully managed to protect the square while bringing in useful income, and W.L. Mortimore joined in 1912, contributing both as a player and in the club's organisation. The horse remained on the establishment, though not always in good standing: a minute of 1912 records it 'being sacked for kicking the groundsman'.",
        ],
        image: img_1910_1stxi,
        imageCaption: "The 1st XI of 1910, the year the last Bedford president retired."
      },
      {
        title: "Heavy Scoring Before the War",
        background: "white",
        content: [
          "The cricket of the early 1910s was as strong as any the club had known. The 1911 season included a remarkable bowling sequence against Nuneaton in which several wickets fell in consecutive deliveries; J.B. Russell and E.B. Crockford went on contributing heavily with the bat, Frank Hanmer emerged as the leading fast bowler, and club characters such as C. Lowe gave the side its flavour of long-serving amateur enthusiasm.",
          "Crockford's own rise was the story of the summer. Eric Bertram Crockford, known as Tom, began in 1911 a first-class career with Warwickshire that would run to 1922. He would go on to win an Olympic gold medal in the hockey tournament at Antwerp in 1920, represent England on seventeen occasions, and hold a number of records for the highest break at billiards.",
          "1912 brought multiple centuries in single matches, with Roger Evans, Crockford and H. Lott all producing significant innings, and in 1913 J.B. Russell took the captaincy — batsman, wicketkeeper and captain, and one of the club's most influential figures. F.B. Clark led the bowling, several men averaged over thirty, and a public flying display was watched from the ground. The side was drawn largely from the professions of the town: clergy, doctors, ex-military officers, accountants, solicitors, aldermen, councillors, justices of the peace and former mayors. Horace Shenton, from a Staffordshire farming family and employed in the automotive machine trade, was not the sort of man one expected to find among them.",
        ],
        image: img_1911_team,
        imageCaption: "Sutton Coldfield CC, 1911 — the first season under Canon Barnard's presidency."
      },
      {
        title: "The Men Who Joined, 1910–1913",
        background: "cream",
        content: [
          "Walter Bladen Sampson was elected a member on 25th January 1910. Little of his cricket is recorded, but he had served six years as Colour Sergeant with the University of Birmingham OTC before declining a commission, and worked first for the Royal Insurance Company and then with Allison Chains Ltd. Frederick Howard Sturgess needs no such qualification: he topped the 'A' Team batting and bowling in 1910 with 134 runs at 22.3 and 24 wickets at 5.8, and in 1911 led the 2nd Team averages with 285 runs at 40.7, including 126 not out, and 11 wickets at 11.9. For all that, and although his father was a key committee member, he was not elected a full member until 10th March 1913.",
          "Reginald Bertram Clive Chopping joined on 10th May 1911 and played several seasons for the 'A' Team without great distinction. Septimus Eric Parsons joined the same year at nineteen, a competent batsman who generally went in at No. 7 because of the seasoned men above him; on 10th June 1911 he shared a sixth-wicket partnership of 92 with E.B. Crockford at Barnt Green, making 41 not out, and opened the innings for 28 in the drawn return at Rectory Park. Percy Grove, meanwhile, recorded match figures of 6 for 11 at Harborne in 1911 and became the club's Honorary Secretary.",
          "Rowland Murray Wilson-Browne was elected on 29th May 1912 and belonged to the swimming club as well; his sporting life was so busy that he scarcely figures in the club's match records. Esmond Hallewell Rogers, of Shrewsbury and Gonville and Caius, played for Warwickshire's 2nd XI in May 1912, scoring 46 and 16 against Northamptonshire at Edgbaston with Percy Jeeves batting immediately after him. John Howard Felton — Jack — was at Bishop Vesey's from 1912 to 1914 and played for the 'A' Team, as did Lawrence Jack Preedy of King Edward's Grammar School, who was also organist at All Saints Church, Streetly.",
        ],
        image: img_1912_part1_image23,
        imageCaption: "Sutton Coldfield CC, 1912 — the season Rowland Wilson-Browne was elected a member."
      },
      {
        title: "The Eighth of August",
        background: "white",
        content: [
          "The 1914 season began under entirely normal conditions. The Annual General Meeting was held on 6th March at the Masonic Hall Chambers, the accounts for 1913 showed a stable club, and the annual supper went ahead at the Royal Hotel. Committee business ran to such matters as tea arrangements, which produced a decision to build a shed for the 'A' Team on the lower ground — funded, characteristically, through a Derby sweepstake.",
          "The cricket was outstanding. J.B. Russell made 172, the highest individual score the club had recorded, and F.B. Clark took 89 wickets at under ten runs each, including 10 for 35 against Yardley, the finest analysis of a career that spanned sixty-two years of membership, over a thousand wickets and well over ten thousand runs. On 4th July, in the 2nd XI away at Wolverhampton, Horace Shenton played his last game for the club: batting at No. 6 he made 18, then bowled six overs, one of them a maiden, taking 1 for 27. He enlisted with the Birmingham City Battalion on its formation.",
          "Nothing was played after 8th August, when the last pre-war 1st XI fixture was completed at home to Camp Hill Old Edwardians, and the score books were never collected in from the teams' captains. Fixture cards gave way to circulars. Convalescent camps were built in Sutton Park, where across the four years of the war some 90 officers and 3,000 men were billeted, and the clubhouse itself was given over to wounded men recovering before they returned to their units. Such matches as there were consisted mainly of scratch sides against service elevens stationed locally — and in September 1917 Edward Markwick, invalided home with rheumatic fever, turned out for the club while he recovered.",
        ],
        image: img_1914_part1_image26,
        imageCaption: "Sutton Coldfield CC, 1914 — the last summer before the war."
      },
      {
        title: "The Roll of Honour",
        background: "cream",
        content: [
          "1916 took five of them. Percy Grove, the Honorary Secretary, was severely wounded by a bomb on 1st July on the Somme and died at the 2nd British Red Cross Hospital in Rouen on the 5th, aged 27. Esmond Rogers of the 10th Royal Warwickshires was killed on 3rd July supporting the attack at La Boisselle. Walter Sampson, by then a captain in the Rifle Brigade, was killed in the attack near La Boisselle on 10th July, aged 25. Rowland Wilson-Browne, a Second Lieutenant with 21 Squadron of the Royal Flying Corps, was shot down on a bombing raid on 21st July, taken prisoner and died of his wounds at nineteen. Reginald Chopping, a signaller, was killed at Delville Wood on 27th–28th August and has no known grave.",
          "The list lengthened. Arthur Lilly, treasurer since 1906, was killed by a sniper at Tertry on 4th April 1917, aged 35. Horace Shenton, wounded by shrapnel the previous August, died of his wounds on 27th August 1917, aged 38, and was buried at Sutton Coldfield Cemetery with a full military funeral. Lawrence Preedy was killed instantly by a sniper on 31st March 1918 while trying to bring in a wounded man; Jack Felton, nineteen and only lately arrived in France, was killed on 10th April in his first battle; Septimus Parsons, by then a captain, was killed by shelling near Robecq on 14th April. Edward Markwick died of pneumonia at Awoingt on 9th November 1918, two days before the Armistice, his headstone inscribed 'What more could he give'. Frederick Sturgess, gassed and concussed near Loos in November 1917, died of acute pneumonia in 1919. The club's Annual General Meeting of 24th April 1917 recorded Wilson-Browne and Rogers by name.",
          "How many members served, and how many did not return, the club cannot say. Its own accounts give a minute-book reading that fifty went to the Great War and only ten came back; another that forty of fifty playing members were lost; another that nearly fifty enlisted; a later researched conclusion that thirty-nine went and fourteen did not return; and the club's own memorial page that thirty-nine served and thirteen died. Twelve men have full biographies in the club's records, and a thirteenth, Albert Edward Wakefield of the 'A' Team, was killed near St Julien on 17th August 1917, aged twenty. The Roll of Honour that had hung in the pavilion was, in Norman Sharp's words, 'destroyed by hooligans', and no record of the names was ever set down in writing. A memorial tablet was proposed and accepted in 1919, the year cricket returned: F.B. Clark scored 814 runs and took 74 wickets in a first-team season of twenty-one matches, eight of them won, and Norman Sharp, leaving Bishop Vesey's, became a full member at last.",
        ],
        image: img_1916_part1_image41,
        imageCaption: "1916 — one of the few photographs surviving from the war years at Rectory Park."
      },
    ],
    keyMoments: [
      {
        year: "1910",
        title: "The Last Bedford President",
        description: "The Rev. W.C.R. Bedford retired as President, ending more than six decades of Bedford leadership at Rectory Park."
      },
      {
        year: "1910",
        title: "A New Hand on the Score Book",
        description: "Norman Sharp became 2nd XI scorer and began filling the pre-war score books in his own hand."
      },
      {
        year: "1911",
        title: "A President from Outside the Family",
        description: "The Rev. Canon C.W. Barnard was elected President, the first from outside the founding family."
      },
      {
        year: "1911",
        title: "Grove Becomes Secretary",
        description: "Percy Grove took 6 for 11 at Harborne and became the club's Honorary Secretary."
      },
      {
        year: "1912",
        title: "The Horse Dismissed",
        description: "A club minute of 1912 records the ground horse being sacked for kicking the groundsman."
      },
      {
        year: "1914",
        title: "A Record Summer",
        description: "J.B. Russell made 172, the club's highest individual score to that date, and F.B. Clark took 89 wickets at under ten runs each."
      },
      {
        year: "1914",
        title: "The Eighth of August",
        description: "The last pre-war 1st XI fixture was played at home to Camp Hill Old Edwardians; the score books were never collected from the captains."
      },
      {
        year: "1916",
        title: "Grove Dies at Rouen",
        description: "Wounded on the Somme on 1st July, the Honorary Secretary died in hospital at Rouen four days later, aged 27."
      },
      {
        year: "1917",
        title: "Remembered at the AGM",
        description: "The Annual General Meeting of 24th April 1917 recorded Rowland Wilson-Browne and Esmond Rogers among the club's dead."
      },
      {
        year: "1919",
        title: "Cricket Returns",
        description: "A memorial tablet was accepted for the pavilion and F.B. Clark scored 814 runs and took 74 wickets as the 1st XI played twenty-one matches."
      },
    ],
    quote: {
      text: "He was a great personal friend of mine, and in his quiet way had a great influence with his company. He was always a quiet, conscientious Christian, never made a complaint, and was always the first to do anything that was wanted – nothing upset him.",
      author: "A battalion chaplain, writing of Private Reginald Chopping, killed at Delville Wood in August 1916"
    }
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
        image: img_1921_group,
        imageCaption: "The club photographed in front of the thatched pavilion, 1921"
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
    heroImage: img_1938_team,
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
        imageCaption: "A Sutton Coldfield cricketer photographed in club colours, 1933"
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
        image: img_1938_lost_building,
        imageCaption: "\"It disappeared just 25 years ago\" — a press cutting on a lost Sutton Coldfield building, from the years in which the future of Rectory Park itself was in question"
      },
      {
        title: "Club, Community, and Civic Identity",
        background: "white",
        content: [
          "During the 1930s, Sutton Coldfield Cricket Club remained deeply embedded in the social and civic life of the town. Its presidents and senior members included prominent local figures—doctors, aldermen, and mayors—whose involvement reinforced the club's status as a respected community institution.",
          "Matches, social gatherings, and ceremonial occasions reflected a close relationship between the club and the wider public. The passing of distinguished members, such as Sir Alfred Evans, was felt not only within the club but across the town, symbolising the strength of this connection. In an era increasingly shaped by national and international events, the club continued to serve as a stable focal point for community life."
        ],
      },
      {
        title: "Uncertainty, Resilience, and the Approach of War",
        background: "cream",
        content: [
          "The latter years of the decade were marked by growing uncertainty. Extreme weather disrupted several seasons, testing the resilience of players and administrators alike. Beyond these immediate challenges, the approach of the Second World War cast an ever-lengthening shadow over sporting life.",
          "By 1939, international tensions brought cricket to an abrupt halt, with fixtures cancelled and members preparing for service. The decade closed not with decline, but with interruption. The endurance shown throughout the 1930s—through poor seasons, difficult conditions, and external pressures—ensured that the club entered wartime with its traditions intact and its sense of purpose undiminished."
        ],
        image: img_1933_crockford,
        imageCaption: "Colonel L. C. Crockford, M.C., T.D. \u2014 one of several Sutton cricketers whose military service spanned the years either side of the club's cricket"
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
    heroTitle: "Survival and Centenary",
    heroSubtitle: "Cricket Held Together by a Handful of Men",
    heroImage: img_1947_mcc,
    introLarge: "For the second time in thirty years war emptied Rectory Park of its cricketers. What followed was not a clean break but a stubborn continuation — thirteen matches here, seven or eight members there — and then a centenary celebrated in July 1947 by a club that had very nearly not survived to see it.",
    introBody: "The Club never closed. Through 1940 it still fielded two teams, though the petrol allowance shrank the fixture list to local opposition, and between 1940 and 1942 no official meetings were held at all. By the middle of the war Sutton was down to a core of seven or eight members, playing on a square cut by hand, with players arriving by bicycle and an overdraft of £40 on the books; the Borough Council suspended the tenancy costs and kept the ground from going back to grass. Much of the credit for there being a club to come back to belonged to Paul I. Terry, Hon. Secretary during and after the war, of whom it was later written that but for him there might have been no Sutton Coldfield C.C. at Rectory Park at all. When peace came the recovery was quick: a twenty-one-year lease in 1946, Sunday cricket on trial, a hundredth birthday marked with a festival week against the MCC and the Free Foresters, and by 1949 a licensed bar and a bowler with a hundred wickets in the season.",
    sections: [
      {
        title: "War Conditions at Rectory Park (1940–1942)",
        background: "cream",
        content: [
          "War was declared in September 1939, but the first phase of the conflict allowed cricket to continue. Through 1940 Sutton still fielded two teams, in large part because many older members had not yet been called up, while the limited petrol allowance forced the abandonment of long-distance fixtures in favour of local opposition. The cricket that resulted was spirited enough, including a tied game against Olton at 87 apiece and an unbeaten 115 from N. Sharp against Kings Heath.",
          "The committee room emptied faster than the field. E.H. Walters's decade as Hon. Secretary ended with the war and his own war service, and A.J. Terry took the 2nd XI captaincy. The same year saw the departure of Frank Styles — Hon. Treasurer from 1929 to 1938, a J.P. in the town, manager of the High Street branch of the Midland Bank and the man largely responsible for the lower ground pavilion on its present site — who retired to his beloved Snowdonia while remaining an Hon. Life Member.",
          "By 1941 the war had tightened. The death of George Sharp removed one of the Club's most devoted servants of nearly four decades, only thirteen matches were played, and the Club ran on a hand-to-mouth basis with no formal meetings. Norman Sharp took over as captain of the 1st XI, an office he would hold for eight seasons. In 1942, with an overdraft of £40, the committee resolved to avoid further expenditure; the Borough Council suspended the rent and maintained the ground, the square was cut by hand and the few matches played were low-scoring affairs.",
        ],
        image: img_1942_wartime,
        imageCaption: "Rectory Park in 1942 — the hardest year of the war for the Club's finances and its fixture list"
      },
      {
        title: "Kept Alive by a Few (1943–1946)",
        background: "white",
        content: [
          "At the height of the war the Club was reduced to seven or eight core members. Many felt it should suspend operations altogether, and it was Paul Terry's insistence on carrying on that proved decisive. Facilities were damaged or unusable and equipment was scarce; players arrived by bicycle and refreshments were whatever could be found. Yet cricket continued, and with it some remarkable individual performances, among them a return of 8 for 10 by Sharp.",
          "With the peace of 1945 came recovery, slowly. The ground had deteriorated badly and members took on much of the restoration themselves, pavilion repairs being deferred for want of funds. A strong bowling attack in Dainty, Terry and Stevenson made up for weaker batting, and the season brought nine wins from seventeen matches. New men came in from the Civil Defence sides that had kept cricket going through the war, among them F.L. (Len) Bindon, later a vice president. Where the club horse had once been dressed each morning in steel shoes to draw the heavy roller, Sutton now bought a small Ferguson tractor.",
          "By 1946, with demobilisation largely complete, membership rose sharply and multiple teams and a fuller fixture list returned. The great gain of the year was a twenty-one-year lease from the Corporation, which gave the Club long-term security for the first time in a decade. Ex-army huts were installed, sweepstakes raised money, a Warwickshire XI inflicted a heavy defeat, and Sunday cricket was introduced on a trial basis — a change of attitude that would become permanent.",
        ],
        image: img_1946_postwar,
        imageCaption: "Sutton Coldfield CC in 1946 — demobilisation brought the members back and a twenty-one-year lease secured the ground"
      },
      {
        title: "The Centenary Year (1947)",
        background: "cream",
        content: [
          "A hundred years of Sutton Coldfield Cricket Club were celebrated with a week of cricket and social events from 14 to 19 July. The festival brought the MCC, the Warwickshire Imps and the Free Foresters to Rectory Park — the last a particularly fitting guest, since that wandering club had itself been founded on this ground in 1856 by Sutton's founder and first President, the Rev. W.K. Riland Bedford. A commemorative painting was presented to mark the occasion.",
          "Considerable effort went into preparing the ground and the facilities for the centenary, and although the general standard of cricket remained below pre-war levels, improvement was clear. The season recovered strongly after a poor start, L.W. Stevenson took 86 wickets, and the retirement of Clifford Howl closed another significant playing career.",
          "The anniversary brought change in the committee room too. Norman Sharp completed eighteen years as fixture secretary and was elected Sutton's representative on the Warwickshire County Cricket Club committee, a seat he would hold until 1972. Geoff Pritchett joined at the age of twenty as a wicketkeeper-batsman, starting in the 2nd XI. Beyond the boundary, W. Leslie Jones — a friend of Sutton whose influence later brought the Club several grants — founded the Midlands Club Cricket Conference, and remained its only Hon. Secretary as it grew towards seven hundred clubs.",
        ],
        image: img_1947_part1_image59,
        imageCaption: "Centenary week at Rectory Park, July 1947, when the MCC and the Free Foresters were the Club's guests"
      },
      {
        title: "A More Modern Club (1948–1949)",
        background: "white",
        content: [
          "The early years of the Club's second century were given over to consolidation. Facilities improved gradually, but financial pressure required constant fundraising. The sudden death of President Wilfred Bigwood was a significant loss; his successor, A.E. Terry, brought continuity and a deep connection with the Club. Results did not reflect the gradual gain in playing strength — only four wins came from twenty-seven matches in 1948 and batting remained a weakness — but the bowling was consistently strong and the junior and 2nd XI ranks were growing.",
          "The 1948 season also closed Norman Sharp's eight-year captaincy of the 1st XI. A batsman above all, he scored 19,710 runs for Sutton, 13,067 of them for the first team, and nineteen centuries, fifteen at the top level. He rarely bowled, yet against Aldridge at Rectory Park, with the visitors 50 without loss chasing 158 for 7 declared, he removed the first six batsmen in quick succession, returned to take three more and finished with 9 for 35. That year he was also among the founding members of the Midlands Club Cricket Conference.",
          "In 1949 came two decisive breaks with tradition: Sunday cricket at Rectory Park itself, and a licensed bar — striking for a club that in the 1880s had resolved to order its beer by the crate from the Boot rather than hold a licence at all. A.H. Butler took 100 wickets in the season, a Club record. Geoff Pritchett became a first-team regular as an opening batsman, with George Swift retaining the gloves, and Peter Wells joined at seventeen straight from school, taking 6 for 11 in twelve overs for the 2nd XI at Bishop Vesey Grammar School in one of his first games.",
        ],
        image: img_1949_team,
        imageCaption: "Sutton Coldfield CC, 1949 — the first season of Sunday cricket at home and of a licensed bar"
      },
    ],
    keyMoments: [
      {
        year: "1940",
        title: "Cricket Continues Under War Conditions",
        description: "Two teams still fielded on a local fixture list; a tie with Olton at 87 apiece and 115 not out from N. Sharp against Kings Heath."
      },
      {
        year: "1940",
        title: "The Pre-War Officers Step Away",
        description: "E.H. Walters's ten years as Hon. Secretary ended, and Frank Styles, Hon. Treasurer from 1929 to 1938, retired to Snowdonia as an Hon. Life Member."
      },
      {
        year: "1941",
        title: "Death of George Sharp",
        description: "The Club lost a servant of nearly four decades; only thirteen matches were played and Norman Sharp began eight seasons as 1st XI captain."
      },
      {
        year: "1942",
        title: "Survival on an Overdraft of £40",
        description: "The Borough Council suspended the tenancy costs and maintained the ground as travel and expenditure alike were halted."
      },
      {
        year: "1943–1944",
        title: "Seven or Eight Members Keep Cricket Going",
        description: "Paul Terry's insistence on continuing preserved the Club, with players arriving by bicycle and equipment borrowed or rationed."
      },
      {
        year: "1945",
        title: "Peacetime Cricket Resumes",
        description: "Nine wins from seventeen matches, restoration of the ground by the members themselves, and a Ferguson tractor in place of the club horse."
      },
      {
        year: "1946",
        title: "Twenty-One-Year Lease Secured",
        description: "A long lease from the Corporation, ex-army huts and the trial introduction of Sunday cricket as membership surged."
      },
      {
        year: "1947",
        title: "The Centenary Week",
        description: "A hundred years marked from 14 to 19 July with matches against the MCC, the Warwickshire Imps and the Free Foresters, founded on this ground in 1856."
      },
      {
        year: "1948",
        title: "Norman Sharp's Captaincy Ends",
        description: "Eight seasons as 1st XI captain closed; the death of President Wilfred Bigwood brought A.E. Terry to the chair."
      },
      {
        year: "1949",
        title: "Sunday Cricket and a Licensed Bar",
        description: "Home Sunday fixtures and a bar arrived together, while A.H. Butler took 100 wickets in a season — a Club record."
      },
    ],
    quote: {
      text: "He was much more than an Hon Secretary, and he was largely responsible for keeping the Club in existence. But for him, and his foresight, it is quite on the cards there may not have been a Sutton Coldfield C.C. at Rectory Park today.",
      author: "Club obituary to Paul I. Terry, wartime Hon. Secretary, 1970"
    }
  },
  "1950s": {
    name: "Post-War Revival",
    years: "1950-1959",
    heroTitle: "Seven Sides on a Saturday",
    heroSubtitle: "Norfolk Reed, Electric Light and a Thousand Runs a Man",
    heroImage: img_1952_xi,
    introLarge: "The fifties were the Club's most expansive decade: up to seven sides in the field on a summer weekend, five men past a thousand runs in a single season, and a thatched pavilion re-roofed in Norfolk reed and wired for electricity for the first time.",
    introBody: "Sutton came out of austerity growing. A Sunday third team arrived in 1953, the Annual Dinner was revived after some fifty years, and twenty-four new members — most of them young — joined in 1954 as the Club's selection and development policy took hold. None of this was league cricket: Sutton played the friendly fixture list it had guarded for a century, declining invitations to the Birmingham League as it always had, and measured itself instead by aggregates, averages and the calibre of its visitors, who in these years included Warwickshire themselves before a crowd of some three thousand. Behind it stood a small group of remarkable cricketers — P.E.S. Bowerbank, captain for eight seasons; Geoff Pritchett, twice past a thousand runs; Les Pellow, twice past a hundred wickets; Peter Yates and his left-arm swing — and, arriving quietly in 1955, a young batsman and off-spinner named Neil Houghton.",
    sections: [
      {
        title: "A Club of Seven Sides (1950–1953)",
        background: "cream",
        content: [
          "By 1950 the Club had moved out of recovery and into organisation, with a full officer structure and Sunday fixtures introduced for the 2nd XI. It lost L.W. Stevenson, a mainstay of the wartime and rebuilding years, whose relocation left a gap in both playing strength and leadership. Rectory Park itself was adapting to the motor car: where the approach had been a footpath from Riland Road and another opposite Good Hope Hospital, a top gate now served the ground, manned by small boys from Boot Hill who carried the visitors' bags for a few coppers — one penny among a dozen of them buying a bagful of buns from Bromwich's.",
          "1951 was the turning point on the field. Under P.E.S. Bowerbank the 1st XI won eleven of twenty-four matches and carried off the Festival of Britain competition, the captain himself scoring 1,184 runs and taking 59 wickets. A new toilet block was built for £150, W. Harry Foster donated a scorebox, and the arrival of L. Pellow strengthened the attack for years to come.",
          "Growth accelerated. In 1952 Paul Terry stepped down as Hon. Secretary and was elected a Life Member for his wartime service; the bar was expanded into both a social hub and a source of income, and the seventeen-year-old D. Haworth took 100 wickets. The following season the Annual Dinner was revived after some fifty years and a Sunday 3rd XI introduced, so that Sutton was fielding up to seven sides on a weekend — 56 wins from 117 matches, five players past a thousand runs, and a new groundsman, Alex Harvey, beginning eighteen years of service.",
        ],
        image: img_1951_team,
        imageCaption: "Sutton Coldfield CC, 1951 — Festival of Britain winners under P.E.S. Bowerbank"
      },
      {
        title: "Runs by the Thousand",
        background: "white",
        content: [
          "Geoff Pritchett had joined in 1947 as a wicketkeeper-batsman but spent seven seasons out of the gloves behind George Swift. He made his name with the bat instead: 1,280 runs in 1953 — 914 on Saturdays and 366 on Sundays — with 106 at home to Leamington, then 113 not out at Market Drayton in 1954, 114 not out at Ashfield in 1956, 1,072 runs in 1957 and 118 against the Warwickshire Pilgrims in 1959. When Swift retired in 1954 the gloves finally came to him, and the Club's accounts of his hauls behind the stumps in the middle fifties differ, one itemising 52, 69 and 67 victims in successive seasons and another totalling 189 across them.",
          "Others matched him. Bowerbank's 1955 season brought 1,445 runs at an average of fifty, while Les Pellow passed a hundred wickets in the same summer. Peter Yates, a left-arm medium-fast swing bowler who moved the ball both ways, led the Club's bowling in 1956 with 39 wickets at 13.7 and again in 1957 with 37 at 16.3; his best season with the bat came in 1955, 343 runs at 17.1 with a highest score of 50 not out.",
          "The Club also began to look after its future. The revised selection and development policy brought in twenty-four new members in 1954, most of them young, and a structured junior coaching scheme followed in 1959. That season Brian Clewer, newly appointed captain, set a Club record for runs in a season — the surviving accounts give different totals — and shared a record partnership of 217 with Eardley.",
        ],
        image: img_1953_team,
        imageCaption: "The side of 1953, the season Geoff Pritchett scored 1,280 runs and five Sutton players passed a thousand"
      },
      {
        title: "Norfolk Reed and Electric Light",
        background: "cream",
        content: [
          "A surplus of £200 in 1955 let the Club attend to the fabric of the place. The pavilion roof was re-thatched in Norfolk reed as a long-term solution, and the water supply and ground facilities were upgraded at the same time — modest works, but the first real investment in the buildings since before the war.",
          "1956 went further. Structural alterations and new full-length windows transformed the pavilion, the work driven largely by the dedication of Frank Lamb and by the voluntary effort that had underpinned everything since 1945. Electricity was installed at the ground for the first time, a £330 project long overdue, and the lower elevens were renamed the Hawks, the Owls and the Grasshoppers — a change of nomenclature that deliberately raised the standing of the Club's developing sides.",
          "Money followed the improvements. The bar was improved again in 1958 and returned profits of more than £230, rising to £331 the following year, and a match levy was introduced to steady the income. Discussions were opened with the Borough Council about renewing the lease and improving the ground, while successful dinners, visiting touring sides and the increasingly recognised work of the Club's ladies kept both the finances and the social life in good order.",
        ],
        image: img_1956_part1_image70,
        imageCaption: "Rectory Park, 1956 — the year electricity came to the ground and the lower sides became the Hawks, Owls and Grasshoppers"
      },
      {
        title: "Big Days and Farewells",
        background: "white",
        content: [
          "Sutton's standing brought good visitors. The match against Warwickshire in 1955 drew a crowd of some three thousand and raised significant funds; a touring South Australian side was beaten in 1956; and in 1957 the Suez Crisis and the threat of petrol rationing briefly menaced the fixture list before the situation resolved ahead of the season.",
          "The showpiece came in 1957, when the county returned for Dick Spooner's benefit year. The match raised £188, Warwickshire made 281 for 8, and Sutton's reply was undone by the flight and spin of Eric Hollies. In the same summer G.B. Thompson was confirmed as Hon. Secretary, Roger Coombs came back from National Service to play his cricket in the 2nd XI, and that youthful side recorded a record number of victories.",
          "1958 brought the decade's heaviest loss: the death of Eric Bertram \"Tom\" Crockford, who had played for Sutton and for Warwickshire between 1911 and 1922, won hockey gold at the 1920 Antwerp Olympics for Great Britain and Ireland, represented England seventeen times and held records for the highest billiards break. Despite poor weather the 1st XI won sixteen matches, three hat-tricks fell in a single weekend — one of them Peter Wells's against Pickwick Nomads — and Peter Lowe took over the gloves. A year later Bowerbank retired after eight seasons as captain, and Brian Clewer succeeded him.",
        ],
        image: img_1959_team,
        imageCaption: "Sutton Coldfield CC, 1959 — Brian Clewer's first season as captain, and a record aggregate of runs"
      },
    ],
    keyMoments: [
      {
        year: "1950",
        title: "The Top Gate and the Gate Boys",
        description: "A top gate replaced the old footpath approaches for the motoring age, manned by boys from Boot Hill who carried the visitors' bags for coppers."
      },
      {
        year: "1951",
        title: "Festival of Britain Winners",
        description: "Eleven wins from twenty-four under P.E.S. Bowerbank, who scored 1,184 runs and took 59 wickets; a new toilet block and a donated scorebox followed."
      },
      {
        year: "1952",
        title: "Paul Terry Elected a Life Member",
        description: "The wartime Hon. Secretary was honoured on his retirement from office; the seventeen-year-old D. Haworth took 100 wickets."
      },
      {
        year: "1953",
        title: "Seven Sides and Five Thousands",
        description: "A Sunday 3rd XI took the Club to seven sides on a weekend; 56 wins from 117 matches and Geoff Pritchett's 1,280 runs led the way."
      },
      {
        year: "1954",
        title: "Pritchett Takes the Gloves",
        description: "George Swift's retirement made Pritchett the 1st XI wicketkeeper at last, in a season in which 41 matches were lost to the weather."
      },
      {
        year: "1955",
        title: "Norfolk Reed and 1,445 Runs",
        description: "A £200 surplus re-thatched the pavilion and Warwickshire's visit drew some three thousand people; Bowerbank scored 1,445 runs at fifty, Les Pellow took 102 wickets and Neil Houghton joined the Club."
      },
      {
        year: "1956",
        title: "Electricity Installed",
        description: "A £330 project finally brought electric light to the ground; the lower elevens were renamed the Hawks, Owls and Grasshoppers."
      },
      {
        year: "1957",
        title: "The Spooner Benefit Match",
        description: "Warwickshire made 281 for 8 in aid of Dick Spooner's benefit, raising £188, with Sutton's reply undone by Eric Hollies."
      },
      {
        year: "1958",
        title: "The Passing of Tom Crockford",
        description: "The death of E.B. Crockford, Warwickshire cricketer, 1920 Olympic hockey gold medallist and billiards record-holder."
      },
      {
        year: "1959",
        title: "Bowerbank Hands Over",
        description: "Eight years as captain ended; Brian Clewer succeeded him and set a new Club record for runs in a season."
      },
    ],
    quote: {
      text: "Get your kit on, you are playing.",
      author: "Captain P.E.S. Bowerbank to a teenaged Roger Coombs, waiting between the two grounds in hope of a late arrival, 1950 or 1951"
    }
  },
  "1960s": {
    name: "The Swinging Sixties",
    years: "1960-1969",
    heroTitle: "Forty-Four Matches, Fourteen Men",
    heroSubtitle: "The Club at Its Height, and the Burning of the Old Pavilion",
    heroImage: img_1962_xi,
    introLarge: "In 1962 Sutton counted 351 members and fielded sides at every level; by 1965 it was struggling to raise the lower elevens. The decade carried the Club from its highest point to a hard reckoning, and ended with the old thatched pavilion burning down the day before the demolition men were due.",
    introBody: "The sixties are unusually well recorded at Rectory Park, partly because the fixture cards survive with their membership tables printed inside — a President, three Life Members, seventy-odd Vice Presidents and well over a hundred non-playing members supporting a playing strength that peaked at 107 in 1963 — and partly because Neil Houghton, captain from that season, left a first-hand account of what the cricket was actually like. It was non-league cricket, as it had been for more than a century: no points, only the toss, matches regulated by the pavilion clock from half past two until a quarter to eight, and a declaration expected at five o'clock. It was also cricket of a high standard, producing a record run of ten straight victories in 1960, a wicket-keeping record in 1961 that stood for more than fifty years, and in 1969 the most successful first-team season the Club had ever had.",
    sections: [
      {
        title: "The Club at Its Height (1960–1962)",
        background: "cream",
        content: [
          "1960 opened with major work on the lower ground pavilion, an £800 project helped by a £400 grant from the Supporters' Association of Warwickshire C.C.C., secured largely through the influence of W. Leslie Jones. The 1st XI put together a record run of ten consecutive victories with Neil Houghton and Brian Clewer to the fore; Geoff Pritchett fell one run short of a hundred at Leicester Ivanhoe, and Roger Coombs headed the 2nd XI batting with 657 runs. The deaths of R.S. Hill and Jack Frisby cast a long shadow over the year. The season's fixture card recorded 78 Vice Presidents, 72 playing and 124 non-playing members — 278 in all.",
          "1961 may have been the Club's strongest season in its history. Membership rose to 335, the long hoodoo against Coventry & North Warwickshire was finally broken, and the Festival Shield came to Rectory Park. Neil Houghton was elected Cricketer of the Year by the Midland Club Cricket Conference. Behind the stumps Roger Coombs claimed 76 victims, a Club record still standing more than fifty years later, and headed the 2nd XI batting with 619 runs besides — the latest in a line of keepers of whom it was said that for fifty years Sutton had possessed wicketkeepers of the highest class in club cricket.",
          "Membership peaked in 1962 at 351 — 83 Vice Presidents, 97 playing and 167 non-playing members. The 2nd XI won a record 29 matches, D. Drake took 116 wickets, and Geoff Pritchett scored 821 runs in what proved his fifteenth and final season in the 1st XI. Norman Sharp stepped down after six years as chairman and was elected President of the Midland Club Cricket Conference. Lower down, John Ratledge's Owls played twenty games, won twelve and lost two, with eight lost to the weather and not a single drawn game recorded.",
        ],
        image: img_1960_part1_image78,
        imageCaption: "The 1st XI of 1960, winners of ten consecutive matches — a Club record"
      },
      {
        title: "Forty-Four Matches and Fourteen Men (1963)",
        background: "white",
        content: [
          "1963 was Neil Houghton's first year as Club Captain, at twenty-four and with his final examinations due at the end of the season — a combination, he later admitted, that his parents did not think a good idea. The Club played 44 matches that summer, winning 20, drawing 12, losing 10 and having two abandoned. Looking back at the season's averages, only fourteen players featured in them: most 1st XI men played both Saturdays and Sundays, and competition for places favoured those available on both days.",
          "Two arrivals transformed the side. Martin Bloomer came from Streetly, made 281 runs in about four games for the 2nd XI, was promoted and quickly replaced Geoff Pritchett as opening batsman, finishing the year with a thousand runs for the 1st XI and an aggregate of 1,300 for the Club, including 109 not out at home to Bromsgrove. Andrew \"Chub\" Beach took 94 wickets in his first season — 90 of them in the 2nd XI, 40 stumped by his friend Roger Coombs — and, given two games in the first team, took 5 for 13.",
          "There was fine bowling elsewhere too: Peter Wells produced 6 for 14 in sixteen overs against Leicester Ivanhoe at Rectory Park, the outstanding performance of his career. For the older generation the season marked a handing-on. Pritchett moved to the 2nd XI after 1963, and Peter Yates played mainly in the second team that year, while John Ratledge was elected captain of the Hawks, a post he held for three seasons.",
        ],
        image: img_1963_part2_image39,
        imageCaption: "Sutton Coldfield CC in 1963 — a season played by only fourteen men across forty-four matches"
      },
      {
        title: "By the Pavilion Clock",
        background: "cream",
        content: [
          "All the Club's fixtures were non-league, but they were fiercely competitive with Sutton's reputation at stake. The strongest clubs of the circuit — Coventry & N.W., Olton, Knowle and Dorridge, Wolverhampton, Leamington, Harborne, Stratford, Moseley Ashfield and Kings Heath — came year after year. There were no points to contend with, only winning or losing the toss. Matches were regulated by time, starting at 2.30pm and finishing at 7.45pm, so the large pavilion clock played a major role; the requirement to bowl twenty overs in the last hour had not yet been introduced.",
          "Convention did the rest. The captain of the side batting first would normally declare at five o'clock unless he had been bowled out first. Late declarations were frowned upon and in extreme cases led to questions in the bar afterwards about the suitability of future fixtures — hence the expression \"drinking the fixture back\". Fielding flannels had to be dry-cleaned, which made grass stains expensive.",
          "The setting was more charming than comfortable. The old thatched pavilion had its charms, but the small changing hut beside it, with one small basin and no hot water or showers, was certainly a challenge. The Club was supported by more than seventy Vice Presidents and over 160 non-playing members; local residents watched from cars parked along the top boundary fence, and one of the captain's match-day duties was to appoint two players to take the collection box round the ground while Sutton batted. Midweek there was the Festival Shield, a twenty-over knock-out for sixteen Sutton and district clubs — Streetly, Walmley, Four Oaks, Water Orton, Wishaw, the Hockey Club and Old Veseyans among them — played on Tuesday and Thursday evenings and drawing good support, especially in the bar.",
        ],
        image: img_1963_part2_image40,
        imageCaption: "The old thatched pavilion and its clock, which governed every match from half past two until a quarter to eight"
      },
      {
        title: "Fewer Players, Bigger Plans (1964–1967)",
        background: "white",
        content: [
          "Negotiations with the Borough Council produced a favourable extension of the lease in 1964, and with the ground secured the Club turned to its buildings. Norman Sharp recorded that the pavilion \"was considered to have a limited life left and that the time was ripe to go ahead with plans for a more modern building\", and a sub-committee was appointed to review the prospects — the Club's own accounts differ as to whether this was in 1963 or 1964. It comprised the Hon. Secretary G.B. Thompson, D. Alford as quantity surveyor, L.O. Tippins as architect, D.P. Locker as solicitor, the captain W.N. Houghton and J.W. Ratledge, who brought a businessman's approach to the work. Its plans were approved unanimously at a General Meeting.",
          "On the field Martin Bloomer passed a thousand runs for three consecutive seasons — 1,204 in 1964 with 101 not out at Coventry & N.W., 1,154 in 1965 with 103 at home to Moseley Ashfield, and 113 against Little Aston Stragglers in 1966 — and Neil Houghton achieved the rare all-round double in 1964. But playing membership was falling, particularly in the lower teams, and Norman Sharp's analysis of selection policy and of the abandonment of the 1952 development system made uncomfortable reading. One gain of 1965 was accidental: during a Bank Holiday tea interval Houghton fell into conversation with a spectator named Peter Bell and invited him to join, and Bell umpired the rest of that afternoon with the Hawks and stayed for the next fifty years.",
          "1966 brought the largest administrative change in a generation. Alderman A.E. Terry, a member since 1914 and President since 1950, retired at ninety — the first President in the Club's history to relinquish office voluntarily — and Norman Sharp, whose association with Sutton ran back to 1905, succeeded him. G.B. Thompson and R.H. Smith retired after ten and nine years as Hon. Secretary and Hon. Treasurer, C.T. Groves and Geoff Pritchett taking their places, though the Club's accounts differ over exactly when Pritchett's decade as treasurer ended. On World Cup final day, 30 July, Houghton brought a television to the ground so that players could watch — then batted all afternoon and saw none of the match.",
          "1967 was a year of weather and negotiation. The press called May the wettest in 190 years and nineteen fixtures were lost in the month alone; the 1st XI managed nine wins from thirty-nine matches, and a remarkable tie against the Old Edwardians ended with the last batsman run out on 140 apiece. The new office of Chairman of the Club was created and H.A. Couchman elected to it, only for him to die suddenly in June. Protracted talks with Sutton Coldfield R.F.C. about sharing a new pavilion collapsed over a demand for £25,000, and a fresh approach was made instead to the Hockey Club.",
        ],
        image: img_1966_team,
        imageCaption: "Rectory Park in 1966, the year Norman Sharp succeeded Alderman A.E. Terry as President"
      },
      {
        title: "Amalgamation, Triumph and Fire (1968–1969)",
        background: "cream",
        content: [
          "The amalgamation of the Cricket and Hockey Clubs was formally confirmed in April 1968, with Norman Sharp elected President of the new Association, Charles Groves Hon. Secretary and H. Ford Hon. Treasurer. A Building sub-committee then submitted plans for a pavilion costing a little over £11,000, to be erected by Lessar Bros. Ltd with six dressing rooms, a club room and the usual amenities; the membership approved them unanimously. The Town Council extended the lease by a further seven years to twenty-eight in total, a £500 grant — the maximum available — came from the Midlands C.C.C., and with the \"120 Club\" and the hockey club's contribution some £9,000 was already in hand.",
          "The cricket of 1968 was played in wretched weather, every 1st XI Saturday fixture being rained off, yet Neil Houghton produced the rare feat of a century and a hat-trick in the same match against Walsall, Michael Dixon made 183 not out for the Hawks, Martin Bloomer scored 623 runs and Peter Wells took 6 for 7 for the 2nd XI at Bromsgrove. The Annual Dance returned a record £234 profit on the back of the \"120 Club\" Mini draw, won by Mrs L. Balmer.",
          "Then, under Martin Bloomer's captaincy, came the best season the 1st XI had ever had: twenty-three victories in 1969. Tony Robertson, an attacking batsman who made a century and a 96 not out on the same weekend, and T. Jameson, brother of the Warwickshire player, both strengthened the side, while Jamie McDowall kept wicket and opened the batting for Cambridge University. Sutton entered the new Derrick Robins national knock-out for the first time and went out at Lichfield in torrential rain and complete darkness.",
          "The year's dominant event was not a cricketing one. With the appeal funded and the new pavilion agreed, the old building was stripped and contractors moved on site in early November. The day before demolition a spark from a workmen's brazier set the thatch alight and gutted the pavilion completely. The groundsman Alex Harvey was inside at the time and came to no harm, and the insurers paid out — but the building that had governed the Club's afternoons by its clock for eighty years was gone twenty-four hours before it was due to come down.",
        ],
        image: img_1960_team,
        imageCaption: undefined
      },
    ],
    keyMoments: [
      {
        year: "1960",
        title: "Ten Consecutive Victories",
        description: "A record winning run for the 1st XI, in a season whose fixture card recorded 278 members in all."
      },
      {
        year: "1961",
        title: "Seventy-Six Victims",
        description: "Roger Coombs set a Club wicket-keeping record that still stood more than fifty years later; Neil Houghton was Midland Club Cricket Conference Cricketer of the Year and the Festival Shield was won."
      },
      {
        year: "1962",
        title: "Membership at Its Peak",
        description: "351 members recorded on the fixture card, the 2nd XI won a record 29 matches, and Geoff Pritchett closed his fifteenth and final 1st XI season with 821 runs."
      },
      {
        year: "1963",
        title: "Neil Houghton Takes the Captaincy",
        description: "Aged 24 and with final examinations pending, he led a side that played 44 matches — 20 won, 12 drawn, 10 lost, 2 abandoned — using only fourteen players."
      },
      {
        year: "1963",
        title: "Bloomer and Beach Arrive",
        description: "Martin Bloomer scored 1,300 runs for the Club in his first season and Andrew \"Chub\" Beach took 94 wickets in his."
      },
      {
        year: "1964",
        title: "Lease Extended, Pavilion Considered",
        description: "The Borough Council extended the lease and a sub-committee was appointed to plan a modern pavilion; the Club's records differ over whether it was formed in 1963 or 1964."
      },
      {
        year: "1966",
        title: "A Changing of the Guard",
        description: "Alderman A.E. Terry retired as President at ninety and Norman Sharp succeeded him, with new Hon. Secretary and Hon. Treasurer appointed the same year."
      },
      {
        year: "1967",
        title: "The Wettest May in 190 Years",
        description: "Nineteen fixtures were lost in the month; H.A. Couchman, first Chairman of the Club, died weeks after election, and talks with the Hockey Club began."
      },
      {
        year: "1968",
        title: "Amalgamation Confirmed",
        description: "Cricket and hockey formally amalgamated in April and an £11,000 pavilion was approved; Neil Houghton made a century and took a hat-trick in the same match against Walsall."
      },
      {
        year: "1969",
        title: "Best Season, and the Fire",
        description: "Twenty-three wins under Martin Bloomer — the most successful 1st XI season on record — and the old thatched pavilion destroyed by fire the day before its scheduled demolition."
      },
    ],
    quote: {
      text: "The old thatched pavilion had its charms but the small changing hut by the side with one small basin and no hot water or showers was certainly a challenge.",
      author: "Neil Houghton, recalling his first season as Club Captain in 1963"
    }
  },
  "1970s": {
    name: "The Seventies",
    years: "1970-1979",
    heroTitle: "Dixon's Decade",
    heroSubtitle: "A New Pavilion, a New League and a Record-Breaking Batsman",
    heroImage: img_1979_hawks,
    introLarge: "The seventies opened with a tape being cut on a new pavilion and closed with the Canadian national side at Rectory Park. In between, Sutton entered league cricket for the first time in its history — and Michael Dixon passed a thousand runs in every season of the decade.",
    introBody: "It was a decade of building, in every sense. The pavilion that members of the cricket and hockey clubs had laboured through the winter to finish was officially opened in July 1970, and the bill — £16,369 in all — was settled the following spring. Then, in 1971, a handful of members quietly signed the club into the Willis Faber-sponsored Midland Club Cricket Championship, ending more than 120 years of purely friendly cricket and dividing opinion sharply; the club historian, Norman Sharp, could find no reference to the decision anywhere in the Minute Book. Six seasons later that same league brought Sutton its finest hour, when Michael Dixon's attacking side were crowned champions in 1977 and a plaque was hung in the pavilion with pride. The same summer produced the club's first Alpine Under 16 champions and, in July, the death of Norman Sharp himself.",
    sections: [
      {
        title: "A Pavilion at Last",
        background: "cream",
        content: [
          "Work had begun the previous autumn and continued through the winter, but weather, drainage and the usual delays meant the new pavilion was usable rather than finished when the 1970 season opened. Members of both the cricket and hockey clubs worked on to the end of May to make it presentable, and the official ceremony followed on the evening of Friday 25th July, when Edmund H. King, Chairman of Warwickshire C.C.C., cut the tape before a large gathering.",
          "Arthur Spencer, President of the Hockey Club, deputised for Norman Sharp, who was ill in hospital, and welcomed the Mayor and Mayoress, Alderman and Mrs H.J.C. Musgrave; a tankard went to Charles Groves in recognition of his services to the undertaking. Peter Cadman put figures to it early in 1971 — £15,752 on the building and £617 on furnishings and equipment, £16,369 in all. Paving slabs and turfing followed that autumn at the expense of Joe Holman, a playing member.",
          "Not everything went the club's way. In the autumn of 1970 vandals gutted the lower ground pavilion, the insurers meeting a claim for £800. Two great servants died that year: F. Bernard \"Bengy\" Clark, a member of sixty-two years who took over a thousand wickets, his best 10 for 35 against Yardley in 1914; and Paul I. Terry, the wartime Hon Secretary in whose memory the new pavilion clock was erected. Alex Harvey, groundsman since 1953, retired in 1971 with a handsome testimonial.",
        ],
        image: img_1970_pavilion,
        imageCaption: "Edmund H. King, Chairman of Warwickshire C.C.C., cuts the tape at the official opening of the new pavilion on the evening of Friday 25th July 1970."
      },
      {
        title: "The Coming of League Cricket",
        background: "white",
        content: [
          "Sutton had played non-competitive cricket for over 120 years and had declined invitations to join the Birmingham League on a number of occasions. It seemed a pity to the club's historian, then, that a few members should decide on their own initiative to enter a league — a matter he judged unconstitutional, and of which no record appears in the Minute Book. The Midland Club Cricket Championship was born for the 1972 season, sponsored by Willis Faber, with Sutton among its clubs.",
          "The early evidence did little to settle the argument. In 1972 the 1st XI won only eight of forty matches and drew twenty-one — 52 per cent of completed games, by far the highest proportion in one season in the club's history, against 31 per cent over the previous decade — and won just one of its twenty Championship fixtures. Little apparent interest, the historian wrote, was shown by either players or spectators, and very few seemed to know the state of the league table.",
          "Knockout cricket, by contrast, flourished in the long evenings. Peter Bell's new Sutton News Cup drew sixteen of the leading Midland clubs in 1971, Dennis Amiss presenting the trophy to Aston Unity, and Bell went on to found the Sutton Coldfield & District Association of Cricket Umpires. In 1973 Sutton beat Streetly, Nuneaton and West Bromwich Dartmouth before losing the final to Aston Unity. Cricket Week in August 1972 marked 125 years since the foundation, the Midlands Club Cricket Conference meeting the M.C.C. on the Thursday.",
        ],
        image: img_1972_part2_image3,
        imageCaption: "Cricket Week at Rectory Park, August 1972, held to mark 125 years since the club's foundation."
      },
      {
        title: "Dixon, Tidy and the Doctor",
        background: "cream",
        content: [
          "Michael Dixon made his name as an opener in 1970, when he and his captain Martin Bloomer both passed a thousand runs; by 1972 he was the club's Cricketer of the Year with 1,278. Then came 1973. Dixon made 1,630 runs, beating Brian Clewer's club record of 1,472 set in 1959, with four centuries — 101 not out at Aston Unity, 115 against Harborne, 140 against Bromsgrove and 125 not out against Little Aston Stragglers. The side's seven hundreds that summer beat the six of 1928.",
          "The runs simply kept coming: 1,234 at 36.29 in 1974, including hundreds on consecutive days — 104 away at Stafford on the Saturday, 103 away at Leamington on the Sunday — for which the Midland Club Cricket Conference named him its Cricketer of the Year; 1,445 at 41.29 in 1975; 1,134 in 1976; 1,047 in 1977; 1,298 in 1978; and 1,109 in 1979, a thousand runs in a season for the tenth successive year.",
          "He was well served around him. Warwick Tidy, awarded the Sir Frank Worrell Trophy in 1970 as the most promising young cricketer in the country, took 81 wickets at 16.35 in 1975 and 69 in each of the two seasons that followed. Gavin Weston claimed 51 dismissals behind the stumps in 1974 and 57 in 1975, of which 35 were stumpings. And Dr Bob Strachan, a local GP, was twice honoured by Willis Faber in 1975 — a Duncan Fearnley bat for his bowling against Leamington in May, and a case to keep it in after a fifty in forty-five minutes against Solihull in June.",
        ],
        image: img_1975_part2_image4,
        imageCaption: "George Lindsay of Willis Faber presents Bob Strachan with his Duncan Fearnley bat in 1975, his team-mates looking on — among them Ian Nuttall, Roger Coombs, Dave Edmunds, Warwick Tidy, John Robinson and James Ross."
      },
      {
        title: "Champions of the Midlands",
        background: "white",
        content: [
          "The highlight of 1977 was the 1st XI finishing as winners of the Midland Club Cricket Championship, having won as many games as they lost — seven each. The club's record is unambiguous about the cause: it was the result of the captain Michael Dixon's attitude to attacking cricket, great to watch even when the side lost, for many a side would never have attempted the chases Sutton took on and would have settled for a tame draw. The plaque was hung in the pavilion with pride and copied in 2022.",
          "Dixon again headed the aggregates with 1,047 runs at 29.91, Keith Gardom made 784 at 25.29 and Ross Rayburn a fine century of 102 away at Moseley Ashfield. The bowling was shared three ways: Warwick Tidy took 69 wickets at 15.0, Dave Torry 51 with his left-arm spin at 16.08 and Gardom 49 with his leg breaks at 15.07. Around them in the champions' photograph stood M. Hepburn, T. Yomens, G. Tidy, D. Edmunds, G. Weston, N. Houghton and J. Robinson, with H. Lock scoring and P. Berry umpiring.",
          "Gardom's own story ran through the decade. Born in Birmingham on 31st December 1952 and a product of Bishop Vesey's Grammar School, he toured the West Indies with the England Young Cricketers in 1972 and joined the Warwickshire staff, making his first-class debut against Cambridge University in 1973; in seventeen first-class matches he scored 427 runs at 18.56, his highest 79 not out against Surrey. The family business proved stronger than the county's persuasion. He took the Sutton captaincy in 1978 and made 1,285 runs to Dixon's 1,298, the side's eight centuries setting another club record.",
        ],
        image: img_1977_mccc_team,
        imageCaption: "Sutton Coldfield Cricket Club, Midland Club Cricket Championship champions of 1977 — the photograph at the centre of the plaque hung in the pavilion."
      },
      {
        title: "Young Cricketers and the Wider World",
        background: "cream",
        content: [
          "Junior cricket had been growing all decade — as early as 1972 eight teenagers were representing the county's junior elevens, among them John Maynard's sons Steve and Chris and Simon Berry, while Peter Wells's schoolboy cricket in the summer holidays was judged a great success and continued. It came good in 1977, when the Alpine Soft Drink Company launched an under-16 competition and Peter Yates organised a squad of some eighteen talented young cricketers who, captained by David Stokes, won the first Alpine Under 16 Championship. Stokes, then fifteen, took the Conference's Alec Hastilow Trophy as the best under-16 cricketer.",
          "In 1979 the wider game came to Rectory Park. The club played Canada in a warm-up before the I.C.C. World Cup: the Canadians, invited to bat, made 254 for one in their sixtieth over and bowled Sutton out for 170. Peter Bell and Phil Berry were appointed to the 60-over tie between the U.S.A. and Sri Lanka at Northampton, the U.S.A. making 168 and Sri Lanka 170 for four, and Bell's photograph from the occasion later appeared in The Ultimate Encyclopedia of Cricket. The 2nd XI, meanwhile, were runaway winners of the Midland Club Cricket Championship.",
          "The decade's greatest loss came on 14th July 1977, when Norman Sharp died suddenly at the age of seventy-six. His association with the club had begun in 1905 and ran seventy-two years: 2nd XI scorer as a boy, the regular 1st XI opening batsman for thirty years and captain from 1941 to 1948, fixture secretary from 1930 to 1947, then treasurer, chairman and President from 1966 until his death. He scored nearly 25,000 runs in club cricket, 19,710 of them for Sutton, and wrote the history that carries the club's story down to 1975.",
        ],
        image: img_1977_part2_image7,
        imageCaption: "Peter Yates's under-16 squad, winners of the first Alpine Under 16 Championship in 1977, captained by David Stokes."
      },
    ],
    keyMoments: [
      {
        year: "1970",
        title: "The New Pavilion Opens",
        description: "Edmund H. King, Chairman of Warwickshire C.C.C., cut the tape on the evening of Friday 25th July before the Mayor, Alderman H.J.C. Musgrave, and a large gathering"
      },
      {
        year: "1970",
        title: "A Trophy for Warwick Tidy",
        description: "Tidy was awarded the Sir Frank Worrell Trophy as the most promising young cricketer in the country, and the club presented him with a tankard to commemorate it"
      },
      {
        year: "1972",
        title: "Sutton Joins a League",
        description: "The Willis Faber-sponsored Midland Club Cricket Championship began, ending more than 120 years of friendly cricket — a decision the club historian judged unconstitutional and could not find in the Minute Book"
      },
      {
        year: "1973",
        title: "Dixon's Record Season",
        description: "Michael Dixon made 1,630 runs, beating Brian Clewer's club record of 1,472 set in 1959, with four centuries; the side's seven hundreds beat the six of 1928"
      },
      {
        year: "1974",
        title: "Cricketer of the Year",
        description: "The Midland Club Cricket Conference named Dixon its Cricketer of the Year after 1,234 runs at 36.29, including 104 at Stafford and 103 at Leamington on consecutive days"
      },
      {
        year: "1975",
        title: "Two Awards for the Doctor",
        description: "Willis Faber honoured Dr Bob Strachan twice — a Duncan Fearnley bat from their director George Lindsay for his bowling against Leamington, and a case for it after a fifty in forty-five minutes against Solihull"
      },
      {
        year: "1977",
        title: "Champions of the Midlands",
        description: "The 1st XI won the Midland Club Cricket Championship under Michael Dixon, winning seven matches and losing seven, and Peter Yates's under-16s won the first Alpine Championship"
      },
      {
        year: "1977",
        title: "The Death of Norman Sharp",
        description: "The club's President and historian died on 14th July aged 76, ending an association with Sutton Coldfield that had begun in 1905 and run seventy-two years"
      },
      {
        year: "1978",
        title: "Eight Hundreds in a Summer",
        description: "Keith Gardom, the new captain, made 1,285 runs and Michael Dixon 1,298; the eight centuries scored by the 1st XI beat the seven of 1973 and set a club record"
      },
      {
        year: "1979",
        title: "The World Cup Comes Calling",
        description: "Canada made 254 for 1 at Rectory Park and bowled Sutton out for 170; Peter Bell and Phil Berry umpired the U.S.A. against Sri Lanka at Northampton"
      },
    ],
    quote: {
      text: "So ends this history of the first 128 years of the Sutton Coldfield Cricket Club, a club, which with the Sutton Coldfield Hockey Club, has given me a lifetime of pleasure and the privilege of numbering many great sportsmen amongst my friends.",
      author: "Norman Sharp, closing his history of the club in 1975; he died on 14th July 1977"
    }
  },
  "1980s": {
    name: "The Eighties",
    years: "1980-1989",
    heroTitle: "Trophies and Tragedy",
    heroSubtitle: "The Hawks' Hat-Trick and an Overseas First",
    heroImage: img_1982_team,
    introLarge: "Michael Dixon walked off for the last time at the end of 1980, and the club that followed him won more than it had ever won before — cups, championships and Sunday leagues at every level — while the wider cricketing world kept arriving at Rectory Park.",
    introBody: "The decade began with four batsmen past a thousand runs in a single season and ended with a nineteen-year-old off spinner from Harare coaching Sutton's juniors. In between, the ground staged I.C.C. World Cup warm-up matches involving Holland, Canada, the United States, Kenya and Zimbabwe; the Warwickshire Sunday League was founded and Sutton entered both elevens; and the 3rd XI, the Hawks, won three championships in a row. It was not all triumph. Vandals burnt down the lower ground pavilion and petrol-bombed the score-box, and in the middle of the decade the club lost Andrew Beach, its fixture secretary and one of the best-loved men ever to play for Sutton, at the age of forty-one. The trophy raised in his memory, contested between the cricket and hockey clubs, is the decade's most enduring legacy.",
    sections: [
      {
        title: "The Last Runs of Michael Dixon",
        background: "cream",
        content: [
          "Michael Dixon completed over a thousand runs in 1980 for the eleventh consecutive season, finishing with 1,022 and announcing his retirement at the season's end. He left as one of only three batsmen to have passed 12,500 runs for the club, with a grand total of 12,591, and still found time for two centuries in his final summer — 105 against Aston Unity and 110 against Stratford. What a player, the club's record says of him: captain, batsman and a fine fielder in the slips with a very safe pair of hands.",
          "He was not alone in his run-making. Four 1st XI batsmen passed a thousand runs in 1980: Chris Barber with 1,169, including 195 at home to Moseley Ashfield; Graham Williamson with 1,022 and 105 not out against Aldridge; and James Ross with 1,003. Mike Joseph added a hundred against Olton. The best bowling came from a very fiery young fast bowler, Rod Long, who took 9 for 38 against Leamington, while Keith Gardom took 5 for 34 with his leg spin against Barnt Green.",
          "The weather could be as cruel as any opponent. On one Rectory Park Saturday Sutton had Solihull at 55 for nine — John Robinson bowling superbly for 7 for 22, Bob Strachan finishing with 2 for 28 and Graham Williamson holding three fine catches — when the heavens opened and denied the side their first Duncan Fearnley League victory of the season. The next day, against Milford Hall, Sutton declared generously at 195 for three, Chris Barber hitting a sparkling 92, before rain ended that match too.",
        ],
        image: img_1984_part2_image15,
        imageCaption: "The Sutton Coldfield 1st XI of 1984: back row, Phil Berry (umpire), Kate Hodder (scorer), Graham Clarke, Graham Williamson, Andy Luckhurst, Bruce McLaren, Garry Moore and Mark Rogers; front row, Neil Houghton, James Ross, Mike Hepburn and Bob Strachan."
      },
      {
        title: "The World Comes to Rectory Park",
        background: "white",
        content: [
          "In 1982 a strong Sutton side entertained the Royal Netherlands Cricket Association in a 60-over I.C.C. warm-up match: Holland scored 293 for four before bowling Sutton out for 178 in the last over. The same ground staged an I.C.C. cup tie in which Canada made 233 and the United States were all out for 95 — the hundredth meeting between the two countries. Four years later Rectory Park hosted Kenya, all out for 82, against Zimbabwe, who replied with 85 for three.",
          "Sutton's umpires were as much in demand as its ground. Peter Bell umpired the I.C.C. knockout tie in which Kenya's 210 for eight proved too many for Papua New Guinea, all out for 173, and was presented afterwards with a pair of cuff links by the beaten side. In 1986 he stood in another 60-over I.C.C. game, at Swindon C.C. in Gloucestershire, where Gibraltar were bowled out for 46 and Canada knocked off 48 without loss in 3.5 overs on a wet wicket after heavy morning rain.",
          "The club's own cricket kept good company that summer. Graham Williamson made 105 not out against Olton and a young Andrew Hodder his maiden century, 100 against Fordhouse, following it with 6 for 49 at Streetly. Three other bowlers took six in an innings: Bob Strachan 6 for 24 against Stratford, Derrick Murphy 6 for 67 against Ashby and Dave Torry 6 for 67 against Coventry & North Warwickshire. George Griffith marked his debut with 115 not out for the 2nd XI at Bewdley, and the nets were relaid on concrete beside the roadway.",
        ],
        image: img_1982_part2_image13,
        imageCaption: "The plate beneath the team photograph naming the Sutton Coldfield 1st XI that met Holland on 4th July 1982 — C. Massey and P. Berry (umpires), A. Hodder, D. Jackson, B. McClaren, M. Joseph, J. Ross, C. Barber, R. Strachan, G. Williamson, M. Hepburn (captain), J. Robinson and A. Luckhurst."
      },
      {
        title: "The Committee Room, the Colts and a Sunday League",
        background: "cream",
        content: [
          "The club's administration changed hands steadily. Peter Wells became chairman in 1980 and was elected a Life Member when he stood down three years later; Peter Bell took the chair from 1983 to 1987 with George Griffith as secretary, and Dr Bob Strachan succeeded him. Roger Coombs retired in 1984 as ground secretary, a post he had held since 1975, and was elected a Life Member with Paul McCarthy in 1986. Three more followed in 1989 — the umpires Peter Bell and Phil Berry, for officiating respected by club and opposition alike, and Neil Houghton, elected Treasurer of Warwickshire C.C.C. in 1987.",
          "The decade's most consequential meeting was held elsewhere. John Whitehouse, lately retired from Warwickshire for a career in accountancy, argued that the Sunday one-day game offered an opening to good class players with no wish for a full-time career in cricket, and called the senior Warwickshire clubs together; his proposal was agreed, the Warwickshire Sunday League was born in 1984 as a 40-over competition, and Sutton entered both elevens. Peter Wells's Colts side for boys under eighteen became a committee position in 1980, and the Colts toured East Anglia in 1983 and Cambridgeshire in 1986 under Andy Biddle.",
          "Club life had its farces as well as its losses. The lower ground pavilion was burnt down and rebuilt by the members; in 1981 vandals destroyed the top ground score-box with a petrol bomb and Frank Lamb rebuilt it with subscribed funds. Best remembered is the goodwill of the local Citizens Band radio group, who rented the premises on Thursday evenings and offered to paint the outside of the pavilion in the summer of 1980 for a small fee. They did — and painted the old pine bench seats too, with the very slow-drying paint required for asbestos. For seasons afterwards you could recognise anyone who had played at Rectory Park that summer by the green stripes on their flannels, which no dry cleaner could shift.",
        ],
        image: img_1986_part2_image18,
        imageCaption: "Carol Griffith's cartoon of the chairman, Peter Bell, and the secretary, George Griffith, from the club's 1986 handbook and fixture card."
      },
      {
        title: "Cups Won, and a Friend Lost",
        background: "white",
        content: [
          "1985 was the summer of cups. The 1st XI beat their local rivals Aston Unity four times over — in the Warwickshire Sunday League, in the club's own knockout competition, in the Walmley tournament of fifteen eight-ball overs and in the Wishaw six-a-side — and went on to win their own K.O. Cup for the first time, following it the very next day with the Wishaw Six-a-Side Cup. The winning side was Andrew Hodder, Richard Abel, Gary Moore, Graham Clarke, Bob McGowan, Andy Biddle behind the stumps, Geoff Hopkinson, Andy Luckhurst, Graham Williamson as captain, Mike Hepburn and Bob Strachan.",
          "The following year brought narrow wins and more short-form silverware. Graham Clarke took the last Halesowen wicket off the last ball of the match to finish with 6 for 57, and bowled twenty-three overs for 5 for 98 against Walsall, who declared at 215 for five before Sutton were dismissed for 96. In the 2nd XI's most remarkable afternoon Neil Gamble took 6 for 18 in twelve overs and Derrick Murphy 4 for 16 in eleven to bowl Stratford out for 34, Sutton winning by seven wickets. The club also won the Winter eight-a-side indoor league and the Wishaw six-a-side for a second year.",
          "Against all of that stood the loss of Andrew Beach, the club's fixture secretary, who died after a short illness at the age of forty-one; the club's own papers place the loss before the 1985 season in one account and in 1986 in another, and the year cannot now be settled. Known to his friends as \"Chub\" or \"Beachey\", he had joined from Taunton School in 1963 and taken 94 wickets in his first season, forty of them stumped by his friend Roger Coombs. He batted, by his own choosing, at \"10A\" because it sounded better than last man, and hit two consecutive sixes onto the lower ground against the Canadian national side. Mike Hepburn organised a trophy in his memory, played for whenever the cricket and hockey clubs met.",
        ],
        image: img_1985_ko,
        imageCaption: "The winners of the Sutton Coldfield K.O. Cup, 1985: back row, Andrew Hodder, Richard Abel, Gary Moore, Graham Clarke, Bob McGowan and Andy Biddle (wicket-keeper); front row, Geoff Hopkinson, Andy Luckhurst, Graham Williamson (captain), Mike Hepburn and Bob Strachan."
      },
      {
        title: "The Hawks' Hat-Trick and a Professional from Harare",
        background: "cream",
        content: [
          "The closing seasons belonged to the lower elevens. The Hawks won the M.C.C.C. championship — by then sponsored and known as the Chesshire Gibson League — in 1987 under Ian Wood, again in 1988, and for a third successive season in 1989. A Sutton 3rd XI had already carried off the Jubilee Shield in 1981 and 1983, and a joint side of Hawks and Grasshoppers won it again in 1988. That was a year of silverware at almost every level: the club took the Warwickshire Winter Six-a-Side indoor league, the 2nd XI won the Warwickshire Sunday League — as they did again in 1989 — and Geoff Pritchett was named Cricketer of the Year by the Midland Club Cricket Conference.",
          "Two all-rounders shaped the decade's cricket. Andrew Hodder, a musician studying the French horn and a fine fieldsman besides, blossomed into a top-class leg spinner: in 1983 he took 84 wickets at 15.2, including 4 for 3 against Bromsgrove and 6 for 47 at Water Orton, and finished second in the batting aggregates with 724 runs at 31.5. Andy Luckhurst made 103 not out against Kings Heath in 1984 and took 6 for 28 against Coventry & N.W. to win the M.C.C.C. 1st XI league bowling trophy; he carried off both the 1st XI batting and bowling awards at the 1988 dinner, and in 1989, after eight years at the club, was the Conference's Cricketer of the Year.",
          "The last innovation of the decade was to look abroad. Stephen Guy Peall, a nineteen-year-old born in Salisbury — now Harare — joined in 1989 as Sutton's first overseas professional: a right-arm off spinner and hard-hitting left-handed lower-order batsman who had played for Harare Sports, coached the club's youth players and turned out for the Warwickshire Imps and the Conference. Between 1992 and 1996 he played four Test matches and twenty-one One Day Internationals for Zimbabwe, and while visiting the United Kingdom in 2016 he called at Rectory Park to renew acquaintances. Behind him the future looked bright: that same season the under-15s won the Warwickshire Under 15 League.",
        ],
        image: img_1988_1stxi,
        imageCaption: "The Sutton Coldfield Sunday 2nd XI, winners of the Warwickshire Sunday League in 1988 and 1989: standing, Harry Walker (scorer), Richard Jerman, Maurice Watts, Jonathan Miller, Justine Roy, Mark Jerman and Chris Munn; seated, Adrian Colledge, Ken Lancaster, Chris Barber (captain), Bob Strachan and Mick Hooper."
      },
    ],
    keyMoments: [
      {
        year: "1980",
        title: "Michael Dixon Retires",
        description: "Dixon passed a thousand runs for the eleventh consecutive season with 1,022 and retired with 12,591 runs for the club, one of only three men to pass 12,500"
      },
      {
        year: "1981",
        title: "The Score-box Burned",
        description: "Vandals destroyed the top ground score-box with a petrol bomb and Frank Lamb rebuilt it with funds subscribed by members; a Sutton 3rd XI won the Jubilee Shield"
      },
      {
        year: "1982",
        title: "An International Summer",
        description: "Holland made 293 for 4 against Sutton in a 60-over I.C.C. warm-up, Canada beat the U.S.A. at Rectory Park in the hundredth meeting of the two countries, and Peter Bell umpired Kenya against Papua New Guinea"
      },
      {
        year: "1983",
        title: "Andy Hodder's Season",
        description: "Hodder took 84 wickets at 15.2 and made 724 runs at 31.5, while Chris Barber headed the aggregates with 856 runs at 34.2, including 140 against Leicester Ivanhoe"
      },
      {
        year: "1984",
        title: "The Sunday League Begins",
        description: "The Warwickshire Sunday League was founded as a 40-over competition at John Whitehouse's instigation, with Sutton entering both elevens; Andy Luckhurst won the M.C.C.C. 1st XI bowling trophy"
      },
      {
        year: "1985",
        title: "First Cup, and Then Another",
        description: "Graham Williamson's side won the club's own K.O. Cup for the first time and the Wishaw Six-a-Side Cup the following day, having beaten Aston Unity four times that season"
      },
      {
        year: "1986",
        title: "Andrew Beach Remembered",
        description: "The club's fixture secretary died at 41 and Mike Hepburn founded the Andrew Beach Memorial Trophy for matches between the cricket and hockey clubs; the club's papers differ over whether the loss fell in 1985 or 1986"
      },
      {
        year: "1987",
        title: "The Hawks Begin Their Run",
        description: "The 3rd XI won the M.C.C.C. championship, by then the Chesshire Gibson League, the first of three in succession; Neil Houghton was elected Treasurer of Warwickshire C.C.C."
      },
      {
        year: "1988",
        title: "Silverware at Every Level",
        description: "The 2nd XI won the Warwickshire Sunday League, the Hawks their championship and a joint Hawks and Grasshoppers side the Jubilee Shield; Mick Hooper made 100 not out for the Conference at Chedworth's centenary"
      },
      {
        year: "1989",
        title: "A Professional from Harare",
        description: "Steve Peall, aged 19, became Sutton's first overseas professional and went on to play 4 Tests and 21 One Day Internationals for Zimbabwe; Andy Luckhurst was Cricketer of the Year and the under-15s won their county league"
      },
    ],
    quote: {
      text: "Andrew was a gentleman, small in stature but big in heart, everyone was most welcome to join his company; any new member was especially welcome.",
      author: "The club's obituary of Andrew Beach, fixture secretary, who died at the age of 41"
    }
  },
  "1990s": {
    name: "The Nineties",
    years: "1990-1999",
    heroTitle: "Champions at Last",
    heroSubtitle: "The 1993 Willis Corroon Title and a 150th Anniversary",
    heroImage: img_1993_champions,
    introLarge: "The decade gave Sutton Coldfield the finest league season in its modern history — the Willis Corroon M.C.C.C. Championship of 1993, won with a single defeat — and closed with a 150th anniversary that carried the club from Rectory Park to Bristol and on to Lord's.",
    introBody: "Andy Luckhurst took the first eleven in 1990 and held it for four seasons, and the side he led was as strong as any Sutton had put into the field: a settled fifteen, a superb fielding unit and a bowling attack that once removed a title rival for 26. Around that summer sat a decade of steady cups and hard-won lessons — three trophies in 1996 and, on the same ground in the same August, 33 all out. In 1997 the club kept its 150th year in company with its own past, welcoming back the Free Foresters who were born at Rectory Park in 1856, beating W. G. Grace's old club at Bristol and an MCC side at home. Then, after eighty years of politely declining, Sutton finally joined the Birmingham & District Premier Cricket League and discovered how hard the new company would be.",
    sections: [
      {
        title: "A New Order at Rectory Park",
        background: "cream",
        content: [
          "The 1990 annual general meeting reshaped the club. Mike Hepburn took the chair after Bob's three years in it, James Ross replaced George Griffith as secretary and Paul McCarthy took the fixture list from D. T. Worsfold. Andy Luckhurst succeeded Geoff Hopkinson as first eleven captain and Ian Nicholls accepted the Hawks. Full membership stood at £55, with £10 off for anyone who paid before 31st May, and the annual dinner was held at Aston Wood Golf Club on 1st February.",
          "The cricket that followed was busy and productive. The first eleven played 53 matches, winning 23, drawing 16 and losing 13, with only one abandoned. Hepburn made 114 not out against Water Orton, Danny Longhorne 133 not out at Leamington and Phil Sutcliffe 110 against Harborne before carrying his bat for 74 not out at Bedworth. Luckhurst and Chris Munn added 216 for the fourth wicket against Solihull, Luckhurst making 116 and Munn 102 not out; the captain also took 7 for 84 against Stratford.",
          "The lower sides were thriving too. Robert Powell scored 844 runs at 52.75 for the thirds, A. Jones made 203 not out and Jonathan Miller 100 not out in an unbroken stand of 287 against Barnt Green, and Terry Matthews took 43 wickets. In 1991 the first eleven finished runners-up in the Warwickshire Sunday League and the seconds won 21 of 40 games. The 1992 meeting changed nothing at all — every officer was returned unopposed — but it did engage Adam Bacher of South Africa as professional.",
        ],
        image: img_1999_part2_image32,
        imageCaption: "A bowler in his delivery stride, watched by a club umpire — one of a group of photographs kept with the club's papers from these years; the players are not identified in the surviving records."
      },
      {
        title: "Champions: The Summer of 1993",
        background: "white",
        content: [
          "The season opened with a change at the top. Geoff Pritchett resigned the presidency on leaving the Midlands for Norfolk after 47 years as player and officer, and Peter Wells was elected in his place; Terry Matthews took the captaincy of both the Hawks and the Grasshoppers, and Tim Buckett, an Australian, arrived as professional. Then Luckhurst's first eleven simply won the Willis Corroon M.C.C.C. League Championship, losing one match all summer and using, by Andy Biddle's reckoning, about fifteen players.",
          "The defining afternoon came in July, when Knowle & Dorridge — fellow contenders, and described by their own chairman as their best batting side in years — arrived with the Warwickshire trio of Dougie Brown, Michael Powell and Darren Altree. Nigel Moore won the toss and put Sutton in on a rain-affected pitch; the home side made 166 for 6 from 55 overs. K&D were then bowled out for 26. Adrian Sutton returned 7 for 9 from 10.1 overs with six maidens, Paul Junkin 3 for 16, and Biddle's account records nine catches and a stumping.",
          "It was a double. Matthews's Hawks won the Willis Corroon M.C.C.C. 3rd XI League Championship in the same summer, and the league thought so highly of the senior side that seven Sutton men were chosen to face the Shropshire League: Luckhurst as captain, Junkin, Richard and Mark Jerman, Biddle, Munn and Hepburn, with James Ross travelling as twelfth man. On August Bank Holiday Tuesday Jonathan Miller made 124 not out against Aldridge and took 5 for 16 as the visitors fell for 142. Vandals, meanwhile, burnt down the lower ground pavilion yet again.",
        ],
        image: img_1993_part2_image23,
        imageCaption: "Sutton Coldfield 3rd XI, 1993 Willis Corroon champions: J. Little, S. Nicholls, P. Greetham, J. Illingworth, N. Arif, K. Lancaster, P. Wells (umpire); P. Harding, N. Jerman, T. Matthews (captain), R. Hassan, K. Wilson."
      },
      {
        title: "Cups, Centuries and Thirty-Three All Out",
        background: "cream",
        content: [
          "Major work was done on the pavilion in 1994, brick walls being raised inside and outside the old wood and asbestos frame and a pitched roof set over the flat one. On the field Buckett took the honours with 97 wickets at 15.49, including 8 for 60 against Knowle & Dorridge, bowling unchanged for 22 overs. Michael Dean made 128 against the same club, and the Jerman brothers — whose surname the club's records spell variously Jerman and German — made 143 not out against Rugby and 125 not out at Leamington.",
          "In 1995 Hepburn and Ross were elected life members, bringing the total to ten, and Luckhurst stood down after four seasons, the captaincy splitting between Adrian Sutton on Saturdays and Michael Mackey on Sundays. David Trafford of Australia was engaged, subscriptions rose to £70 for full members, and the annual dinner returned to the refurbished pavilion on Friday 28th January with Chris Cowdrey of Kent and England toasting the club. Sutton won the Warwickshire Sunday League's John Whitehouse Trophy and the thirds took the Jubilee Shield.",
          "The 1996 season was the decade's sharpest study in contrasts. Michael Dean led both first elevens, Rob McLaughlin came from Australia, and the club won the John Whitehouse Trophy against Coventry & North Warwickshire, the Sutton Coldfield Knock Out Cup and the Jubilee Shield. Luckhurst, dropped to the twos, opened on three successive Saturdays for 128 not out, 57 not out and 30 not out. Yet on 31st August Harborne declared at 239 for 3, Alvin Kallicharran 92 not out, and Sutton were dismissed for 33 in 25.5 overs, seven men failing to score.",
        ],
        image: img_1996_ko,
        imageCaption: "Sutton Coldfield Knock Out winners, 1996: M. Mackey, C. Munn, C. Harwood, M. Hepburn, R. Powell and J. Little standing; A. Sutton, M. Dean, R. McLachlan, J. Ross and D. Benson kneeling."
      },
      {
        title: "One Hundred and Fifty Years",
        background: "white",
        content: [
          "The anniversary began in winter. On Friday 31st January 1997, 263 members and guests sat down at the Penns Hall Hotel with the President in the chair and Dick Sperryn saying a grace written for the occasion, with humour and just enough reverence. Michael Joseph, a playing member until business took him south, proposed the toast to the club and Neil Houghton replied; then Henry Blofeld, of the BBC's Test Match Special, gave the room an insider's view of the commentary box on a Test match day.",
          "Even the menu card served the occasion, carrying a short history of the club, noteworthy jottings over 150 years, individual feats, the fifteen Sutton players who went on to Warwickshire and seventeen achievements of the previous twenty years. The cricket honoured the same debt. On Sunday 18th May the Free Foresters returned to the ground of their birth — they had been formed at Rectory Park on 20th July 1856, in a match got up by the Rector, W. K. Riland Bedford, then the club's President — and were beaten by the home side.",
          "The celebrations then travelled. Team and supporters took a coach to Bristol to play Bedminster, also keeping its 150th year and once counting Dr W. G. Grace among its members and vice-presidents, on the county ground; Sutton won that too, and beat an MCC side at Rectory Park. The year's business was quieter: Eric Harding took over the fixture list from Paul McCarthy, junior subscriptions rose by £5 to £15, and Luke Latimer of Australia was engaged as the club's overseas player.",
        ],
        image: img_1997_part2_image27,
        imageCaption: "1997, 150th Anniversary: S.C.C.C. v M.C.C. — the two sides lined up together in front of the Rectory Park pavilion."
      },
      {
        title: "Into the Birmingham League",
        background: "cream",
        content: [
          "Mike Hepburn stood down in 1998 after eight years as chairman and James Ross was elected in his place, with Jonathan Miller stepping up from vice-captain to lead the first eleven. The Birmingham League then invited the Midland Club Cricket Conference clubs to join a renamed Birmingham & District Premier Cricket League, and Sutton entered Division One — accepting at last an invitation the club had received, and declined, several times over the previous eighty years.",
          "First came the last of the anniversary cricket. On 28th August the guest Australian David Frakes took 4 for 58 against the Midland Club Cricket Conference and then made 85 not out from 51 balls, hitting the final ball over long on and out of the ground over the groundsman's shed to win by three wickets. On 9th September a coach left the car park for Lord's and the MCC's Cross Arrows, who made 273 for 7. Ross made 79 and Hepburn 68; ten were wanted from the last over and two from the last ball, and the game was drawn at 272 for 9.",
          "League life proved unforgiving. The first eleven finished tenth in 1998 with 84 points, six wins from twenty-two matches — as many as fourth-placed Harborne, who gathered 130 — and the club noted that bonus points needed attention. Consolation came in the Warwickshire Sunday League, where Sutton were runners-up to Harborne and then beat them in the John Whitehouse Trophy final. In 1999 survival came by a single point over Kings Heath, two points lost to a slow over rate, six games abandoned, and Paul Howells carrying the side with 592 runs at 39.47 and 50 league wickets at 14.94.",
        ],
        image: img_1998_part2_image28,
        imageCaption: "Lord's, 1998: Cross Arrows v S.C.C.C. — the Sutton Coldfield party at the headquarters of cricket on 9th September."
      },
    ],
    keyMoments: [
      {
        year: "1990",
        title: "Luckhurst Takes the First Eleven",
        description: "Andy Luckhurst succeeded Geoff Hopkinson as first eleven captain as Mike Hepburn became chairman and James Ross secretary"
      },
      {
        year: "1991",
        title: "Sunday League Runners-Up",
        description: "The first eleven finished runners-up in the Warwickshire Sunday League, and the seconds won 21 of their 40 matches"
      },
      {
        year: "1992",
        title: "Adam Bacher Engaged",
        description: "The South African Adam Bacher was engaged as overseas professional; he opened against England in the Lord's Test of 18th June 1998"
      },
      {
        year: "1993",
        title: "Willis Corroon Champions",
        description: "Andy Luckhurst's first eleven won the Willis Corroon M.C.C.C. League Championship, losing one match all season and using about fifteen players"
      },
      {
        year: "1993",
        title: "Knowle & Dorridge for 26",
        description: "Adrian Sutton took 7 for 9 in 10.1 overs with six maidens and Paul Junkin 3 for 16 as K&D were dismissed for 26 in reply to 166 for 6"
      },
      {
        year: "1993",
        title: "The Hawks Complete the Double",
        description: "Terry Matthews's third eleven won the Willis Corroon M.C.C.C. 3rd XI League Championship in the same summer"
      },
      {
        year: "1994",
        title: "Buckett's 97 Wickets",
        description: "The Australian professional Tim Buckett took 97 wickets at 15.49, including 8 for 60 against Knowle & Dorridge bowling unchanged"
      },
      {
        year: "1996",
        title: "Three Trophies in One Summer",
        description: "Sutton won the John Whitehouse K.O. Trophy against Coventry & North Warwickshire, the Sutton Coldfield Knock Out Cup and the Jubilee Shield"
      },
      {
        year: "1997",
        title: "One Hundred and Fifty Years",
        description: "263 members and guests heard Henry Blofeld at the anniversary dinner, and the Free Foresters, Bedminster at Bristol and an MCC side were all beaten"
      },
      {
        year: "1998",
        title: "The Birmingham League, and Lord's",
        description: "Sutton joined the Birmingham & District Premier Cricket League and, on 9th September, drew with the MCC's Cross Arrows at Lord's on 272 for 9, two runs short"
      },
    ],
    quote: {
      text: "It was unquestionably a great side, well-balanced and a superb fielding unit.",
      author: "Andy Biddle, wicket-keeper, recalling the 1993 championship team"
    }
  },
  "2000s": {
    name: "The New Millennium",
    years: "2000-2009",
    heroTitle: "Club of the Year",
    heroSubtitle: "A Lease, a Championship and a Scoreboard the Whole Ground Could Read",
    heroImage: img_2008_scoreboard,
    introLarge: "The decade brought Sutton Coldfield a thirty-year lease signed on Christmas Day, the first ECB Clubmark award in Birmingham, a championship and promotion in 2004, and the city's Sports Club of the Year title in 2005.",
    introBody: "It was a decade of building rather than of glory. The senior sides rode the Birmingham League up and down — relegated in 2003, champions of the 2nd Division and promoted in 2004, relegated again in 2007 and 2009 — while the junior section quietly gathered county titles and, in an under-11 side of 2008, two boys who would make their living from the game. Off the field the work told: a new lease on Rectory Park, Clubmark and re-accreditation, Focus Club status and a computerised scoreboard opened by the town's Member of Parliament. Against all that ran a persistent thread of vandalism and theft, and the decade ended in mourning for Terry Matthews and Peter Wells, two men who had given the club the better part of their lives.",
    sections: [
      {
        title: "A New Millennium and a New Lease",
        background: "cream",
        content: [
          "Paul Greetham took the secretary's post from Adrian Sutton in 2000, handing the Sunday first eleven to Richard Dandy, and Francois van de Merve of South Africa was engaged as overseas player. Fred Trueman OBE spoke at the dinner at Aston Wood Golf Club on Friday 28th January about his life in cricket and in the northern clubs, and presented the awards with President Peter Wells. The under-17s won the Warwickshire Under 17s League, and in September the club held its Ball, dancing to The Red Lemons.",
          "The first eleven had a good season in Division One. Jon Ship made 527 runs at 28.2, Richard Dandy 494 at 29.1 with a highest score of 193 not out, Louis Aspelling 443 and Paul Smith, released by Warwickshire, 419; R. East took 58 wickets at 19.12. The Sunday seconds reached the Robert Atherton K.O. Trophy final at Binley Road, where rain made play and a bowl-out impossible. With no replay date agreed, the tie was settled on the call of a coin by Gaz Durrani, who had travelled furthest — so Sutton won by a distance.",
          "The lasting achievement of 2001 was written on a lease: on 25th December, through the joint club, a thirty-year agreement covering 3.33 hectares was signed with Birmingham City Council at £3,000 a year, payable quarterly in advance and reviewable upwards every five years. The cricket was generous too — 365 for 8 declared at Griff & Cotton with Bobby Arif 165 not out and Abdul Raqib 114, and 340 for 6 against Kings Heath with Bilal Aziz 212. Nigel Lyon became chairman in 2002, the year the M.C.C.C. elected James Ross its Cricketer of the Year.",
        ],
        image: img_2005_part2_image44,
        imageCaption: undefined
      },
      {
        title: "Clubmark, Relegation and a Championship",
        background: "white",
        content: [
          "In 2003 Sutton Coldfield became the first club in Birmingham to receive the England and Wales Cricket Board's Clubmark accreditation. The season itself was harder: three fine individual returns — Victor Walker-Randall's 515 runs, Richard Dandy's 505 and Michael Dean's 48 league wickets — could not prevent relegation from Division One of the Birmingham League. By way of consolation the first eleven shared the Warwickshire Sunday League Division 1 title with Harborne, and the third eleven won the West Midlands North Division Club Cricket League Championship.",
          "The summer was overshadowed by the sudden death of Graham Williamson on 19th July 2003 at his home in Knowle, following a bee sting a few days earlier. He had joined in 1983 after graduating from Manchester University, made 637 runs at 28.9 in that first season, become Saturday first eleven captain in 1985 and held both first eleven captaincies before leaving the area in 1989 for Knowle & Dorridge. A fast-scoring, hard-hitting batsman and a fine after-dinner speaker, he is remembered in the B&DPCL's Graham Williamson K.O. trophy.",
          "The following year answered back. John Howard, who brought considerable management experience from Halesowen, was elected chairman; the club created the office of Club Captain, a man who need not lead a side on the field, and Paul Greetham was unanimously elected the first to hold it; and Tim Groenewald, a South African all-rounder later contracted to Warwickshire, then Derbyshire and, from 2015, Somerset, arrived as professional. The first eleven took the championship and promotion, the seconds won their division, the under-15s the Super 6 Cup and the under-13s their county league.",
        ],
        image: img_2004_champions,
        imageCaption: "Birmingham & District Premier Cricket League 2nd Division Champions 2004 — the club's history and this photograph record the title as the 2nd Division, though the following year's dinner report calls it the First Division."
      },
      {
        title: "Sports Club of the Year — and a Club Under Attack",
        background: "cream",
        content: [
          "On Friday 25th February 2005, at the NIA, Sutton Coldfield Cricket Club was declared Birmingham Sports Council's Sports Club of the Year. Nominated by Warwickshire County Cricket Club, it beat a short list of five that included Birchfield Harriers Athletics Club, with the outgoing chairman Nigel Lyon and the current chairman John Howard both delighted. Howard singled out Eric Harding, the club administrator, and Colin Greetham, chairman of the junior section, for their part in the Clubmark award behind it.",
          "Three weeks earlier the dinner of 4th February had celebrated the championship season, Ronnie Irani of Lancashire, Essex and England replying to the President's toast. Richard Dandy took the first eleven batting award and Michael Dean the bowling, having finished with 50 wickets at under ten apiece; Charles Harwood won the second eleven batting prize for a second year; Mike Randall was Player of the Year; David Hansford, who had captained the under-15s to the Portman Cup, was Junior Player of the Year and Taz Ahmed Clubman of the Year.",
          "The same years brought a steady, wearing vandalism. On Friday 6th August 2004 intruders forced a window, smashed the pool table, broke through an internal wall and pushed over the club's five-ton Midland Bank safe before tearing the alarm from the wall — the episode that prompted Peter Bell's newspaper article and his 'Ode to the Last Safe'. On 20th May 2005 Lynda Dandy presented a six-foot teak bench in memory of her father Don Thornton, who had watched his grandson Richard grow into the first eleven captaincy; it was stolen the next day and never recovered. The groundsman's shed collapsed the same year.",
        ],
        image: img_2005_part2_image45,
        imageCaption: "Gwen Thornton with her son Tony, photographed with the newspaper cuttings about the memorial bench given in Don Thornton's memory on 20th May 2005 and stolen the following day."
      },
      {
        title: "A New Captain and Harder Seasons",
        background: "white",
        content: [
          "Dan Davis became the club's 40th first eleven captain in 2006, a post he held for three seasons. Amit Suman, a left-arm fast bowler from India, took 57 wickets at 14.3 as overseas player, while Tim Groenewald, by then registered with Warwickshire and released when the county did not need him, topped the club's Birmingham League batting averages with 380 runs at 31.67. Richard Dandy was the leading run-scorer with 463 at 28.9 and made the only first eleven century of the summer, 110.",
          "The innings of the year came on the lower ground on 5th August, when Bilal Aziz made 188 and Mark Bell 100 not out in an opening stand of 322 against Studley and Sutton declared on 330 for 1. It was Bell's second century in successive seasons: he had first played for the first eleven at Aldridge as a twelve-year-old in 1974 and did not make a hundred for the club until 2005, when he also kept wicket, held two catches and took the gloves off to take two wickets. The Midland Club Cricket Conference named Colin Greetham and Eric Harding its Cricketers of the Year.",
          "The 2007 season was harder still. Suman returned for a second year and took 53 wickets at 13.6, John Ship led the batting with 401 runs, but the first eleven were relegated again. The best of the summer belonged to the thirds, where John Kiapper and his thirteen-year-old son James put on an unbroken 253 for the third wicket against Berkswell, John making 123 and James 113. Vandals drove the club's tractor into the score box, which members rebuilt a month later, and burnt out a hired roller — a claim the club fought off without loss.",
        ],
        image: img_2006_part2_image46,
        imageCaption: "The 3rd XI scorecard of 5th August 2006, when Bilal Aziz and Mark Bell opened with 322 against Studley on the lower ground."
      },
      {
        title: "A Tenth President and a Lit Scoreboard",
        background: "cream",
        content: [
          "Peter Wells had left the Midlands towards the end of the 2007 season, and the 2008 annual general meeting formalised James Ross as President — the tenth since 1847 — to warm congratulation from chairman John Howard and the members. Howard March took the treasurer's books and Hugo Russell the fixture list, John Robinson became the nineteenth Life Member, and Dan Stevens of Australia was engaged as professional. Ashley Giles MBE replied to the President's toast at the dinner on Friday 1st February.",
          "The season's monument was fixed to the face of the score box. A computerised scoreboard was installed on the top ground, funded through grants and members' personal subscriptions organised by Eric Harding, and officially opened by Andrew Mitchell, the Member of Parliament for Sutton Coldfield — Harding himself missing the ceremony, delayed on his journey from Lichfield after a misunderstanding over the timing. In September the club became the first in Birmingham to achieve ECB Clubmark re-accreditation. On 22nd June the seconds made 360 for 4 against Nuneaton, Chris Hobbis 136 not out and J. Khan 150 adding 281 for the second wicket.",
          "The decade closed in loss. Terry Matthews, captain of both the Hawks and the Grasshoppers and winner of the Willis Corroon third eleven title in 1993, died suddenly on 23rd December 2008 aged 72; his family presented a memorial board, and the Terry Matthews Junior Award was first given at the end of the 2009 season. Peter Wells died in March 2009 at Clitheroe — a member since 1949, 6 for 14 against Leicester Ivanhoe in 1963, chairman in 1981, Life Member in 1983 and President from 1992, and the man whose Friday nets and August fixtures built the club's junior cricket.",
        ],
        image: img_2008_part2_image55,
        imageCaption: "The under-11s in the Warwickshire C.C.C. final of 2008 — Aaron Thomason front right, later of Warwickshire and Sussex, and Tom Banton second right, later of Somerset."
      },
    ],
    keyMoments: [
      {
        year: "2000",
        title: "Sutton Won by a Distance",
        description: "The Robert Atherton K.O. Trophy final at Coventry & North Warwickshire was rained off and decided on the call of a coin by Gaz Durrani, who had travelled furthest"
      },
      {
        year: "2001",
        title: "A Lease Signed on Christmas Day",
        description: "A thirty-year lease on 3.33 hectares of Rectory Park was signed with Birmingham City Council on 25th December at £3,000 a year"
      },
      {
        year: "2002",
        title: "Cricketer of the Year",
        description: "The Midland Club Cricket Conference elected James Ross its Cricketer of the Year, and the second eleven won the Division 2 cup against Kenilworth"
      },
      {
        year: "2003",
        title: "ECB Clubmark — First in Birmingham",
        description: "Sutton Coldfield became the first club in Birmingham to receive ECB Clubmark accreditation, in a season that also ended in relegation"
      },
      {
        year: "2004",
        title: "Champions and Promoted",
        description: "The first eleven won the B&DPCL 2nd Division Championship and went up for 2005, with the second eleven winning their division too"
      },
      {
        year: "2005",
        title: "Sports Club of the Year",
        description: "On 25th February at the NIA the Birmingham Sports Council named Sutton Coldfield its Sports Club of the Year, ahead of a short list including Birchfield Harriers"
      },
      {
        year: "2006",
        title: "322 for the First Wicket",
        description: "Bilal Aziz (188) and Mark Bell (100 not out) opened with 322 against Studley on 5th August, Sutton declaring on 330 for 1"
      },
      {
        year: "2007",
        title: "Father and Son Unbroken",
        description: "John Kiapper (123) and his thirteen-year-old son James (113) put on 253 unbroken for the third wicket against Berkswell"
      },
      {
        year: "2008",
        title: "A Tenth President and a New Scoreboard",
        description: "James Ross was formalised as the club's tenth President since 1847, and Andrew Mitchell MP opened the new computerised scoreboard on the top ground"
      },
      {
        year: "2009",
        title: "The Terry Matthews Junior Award",
        description: "Following Terry Matthews's death on 23rd December 2008, his family's memorial board was presented and the junior award bearing his name was first given"
      },
    ],
    quote: {
      text: "This reflects the tremendous effort, dedication and team spirit over the past five years which has gone into improving and offering the best in all respects to cricketers of all ages.",
      author: "John Howard, Chairman, on the club being named Birmingham Sports Club of the Year, 2005"
    }
  },
  "2010s": {
    name: "The Twenty-Tens",
    years: "2010-2019",
    heroTitle: "Five Titles in Seven Years",
    heroSubtitle: "Relegation, Rebuilding and a Golden Era",
    heroImage: img_2012_xi,
    introLarge: "The decade began with the club falling out of the Birmingham League altogether, and ended with two of its own juniors playing first-class and international cricket. In between came the finest season Sutton Coldfield has ever played.",
    introBody: "Relegated from the Birmingham & District Premier Cricket League in 2011, the club answered not with panic but with patience. Steve Perryman, the former Warwickshire and Worcestershire player and coach, was appointed head coach and new ECB-funded practice nets were opened; Dan Childs arrived from Boland to bowl fast and mow the square; and a Saturday side largely under the age of twenty-two learned to win together. By 2013 they were unbeaten champions with five trophies in a single summer, and promotion followed in 2014 and again in 2015. The years that followed brought a tour trophy from Spain, a club record score of 411 for 2, a moving Great War centenary that reconnected Rectory Park with its own lost generation, and the deaths of two much-loved clubmen whose memory the club still carries.",
    sections: [
      {
        title: "Relegation and the Long Rebuild (2010–2012)",
        background: "cream",
        content: [
          "The decade opened in difficulty. Already relegated into Division 3 of the Birmingham & District Premier Cricket League, the 1st XI of 2010 would have dropped out of the Birmingham League altogether had Madeley CC of the Shropshire League not declined to join it. The Australian wicketkeeper-batsman Joel Napier led the batting with 428 runs at 25.18, and Richard Norgrove carried the attack almost alone with 45 wickets at 10.9. The promise lay elsewhere: the under-13s and under-14s each won their Warwickshire County Championship, and a ladies' team was formed under Kim Harvey.",
          "In 2011 the drop came anyway, the 1st XI relegated out of the Birmingham League and into the Warwickshire Cricket League. Graham Clark alone distinguished himself with the bat, scoring 357 runs at 29.8, while the overseas bowler Murtuza Hussain took 38 league wickets at 13.6. Yet the two most important events of the year were not results at all: Steve Perryman was appointed the club's head coach, and on Saturday 30th April new practice nets, funded mainly by the ECB, were opened at Rectory Park.",
          "The turn came in 2012 under a new chairman, Colin Greetham. Dan Childs, a fast bowler from Boland born in Cape Town who had played in South Africa's 2008 Under 19 World Cup side, arrived as overseas player and was the Warwickshire Premier Division's leading wicket-taker with 54 at 9.17 — including a sensational 5 for 2 against Highway. The 1st XI finished runners-up, the Sunday side won its division, and Steve Russell's Saturday 3rd XI recorded its highest league position ever. All three Saturday teams were filled with players under twenty-two.",
        ],
        image: img_2010_u13,
        imageCaption: "Warwickshire County Champions 2010 — the junior generation that would go on to power the senior sides through the decade"
      },
      {
        title: "The 2013 Season — Five Titles",
        background: "white",
        content: [
          "The 2013 season is widely considered the greatest in the club's modern history. The Saturday 1st XI, captained by Graham Clark, went unbeaten through the Warwickshire Cricket League Premier Division, winning 13 games, drawing 8 and accumulating a league record 426 points. Dan Childs, back as overseas player and now employed as the club's groundsman, took 56 league wickets at 10.9 — his second consecutive season past fifty — with 6 for 24 at Bablake, 6 for 32 against Bedworth and 5 for 28 against Handsworth.",
          "Lee Thomason just failed to reach a thousand runs in the division, finishing with 969 at over 60.6, including 112 not out against Nuneaton and 100 not out against Bablake. Mark Guest made 641 at 37.7 with a hundred off 100 balls against Kenilworth, James Hunt 604 at 50.3, and Jack Smith 135 not out against Olton. Promotion back into the Birmingham League was celebrated as a watershed, the 2nd XI going up alongside them as runners-up in their own Premier Division.",
          "Four more titles followed. The Sunday 1st XI were champions of the Warwickshire Sunday League; the WCL T20 final was won at Hampton & Solihull, Bedworth held to 128 for 7 before Lee Thomason's 62 and Aaron Thomason's unbeaten 40 saw Sutton home in 17.3 overs; Walmley's floodlit round-robin was taken with three wins from three; and on Sunday 22nd September Aldridge were beaten in the Last Man Stands final, 147 answered with 148 for 7. Five titles in one summer.",
        ],
      },
      {
        title: "Promotion, Remembrance and a Knock-Out Cup (2014–2015)",
        background: "cream",
        content: [
          "Back in the Birmingham League, the side went straight through it. Graham Clark's 1st XI won Division 3 at the first attempt in 2014, taking 340 points from 22 matches and promotion into Division 2. Lee Thomason and James Hunt each passed 500 runs, and Steven Howard and Dan Childs led the bowling. The title was sealed in the final game on Saturday 13th September, and some hundred people stayed for a hog roast in the busiest clubhouse anyone could remember.",
          "The same year the Friends of Rectory Park began clearing the neglected ground behind the pavilion to create a Garden of Remembrance for the centenary of the Great War, erecting an inscribed stone monument in a newly planted wildflower garden — a 'nectar bank' built around the red poppy — later completed with a mural on the pavilion's rear wall. An impressive Roll of Honour had once hung in the pavilion, but it had been destroyed by hooligans and no copy of the names survived.",
          "Promotion came again in 2015, the 1st XI finishing runners-up to Bridgnorth, and with it the B&DPCL T20 knock-out: acknowledged underdogs, Sutton beat Premier Division Berkswell by 57 runs in the semi-final and then, all out for 132 in the final, saw Lewis Harrison take three wickets for three runs in the last over to beat Barnards Green by four. That August Peter Bell marked his fiftieth year at the club with a Bank Holiday tea, at which four life members sat down together — Neil Houghton with 61 years' membership, Peter Bell with 50, James Ross with 45 and John Robinson with 44, two hundred years between them.",
        ],
        image: img_2015_part2_image75,
        imageCaption: "Sutton Coldfield CC 1st XI, 2015 — back: James Hunt, Tom Wright, Steven Howard, Paul Griffiths, Dan Childs, Eustace; front: Mark Guest, Lee Thomason, Graham Clark (captain), Jack Smith, Lewis Harrison"
      },
      {
        title: "La Manga, 'Ten Not Out' and the Free Foresters' 160th (2016)",
        background: "white",
        content: [
          "The 2016 season opened abroad. On 7th April a party drawn largely from the 1st XI flew to La Manga for a four-day T20 tournament against ten sides, and won all five of their games — Findon overwhelmed by 222 for 3 with Pete McKay 126 not out, and a Spanish national team beaten by seven wickets in the final, Steve Howard taking 4 for 18. The optimism did not last: injuries and availability told, Lee Thomason's 697 runs at 38.72 were a rare bright spot, and a side that played 2016 in Division 1 of the Birmingham League would begin 2017 in Division 2.",
          "Off the field, 2016 gave the club one of the most remarkable days in its history. On 3rd July, a hundred years after the first day of the Somme, students from Little Sutton Primary School and Birmingham Metropolitan College, working with Birmingham Hippodrome Creative, staged 'A Cricket Match Like No Other'. At the tea interval the schoolchildren sang 'Fifty Good Men', a song they had written; then a cricket ball was exchanged on stage for a hand grenade, and the match became the Somme, ending with the Last Post and the lowering of the club flag.",
          "The 1914 minute book had recorded that fifty members went to war and only ten returned; later research by the club and its partners identified thirty-nine or forty who served and thirteen or fourteen who did not come back. On 11th September the Free Foresters returned to the ground where the Rev. William Bedford founded them on 20th July 1856, for a 160th anniversary match against a Sutton side chosen by Andy Biddle; Sutton won it, with a century by Lee Thomason the highlight. At the AGM of 7th November Colin Greetham stood down after five years in the chair and Steve Russell was elected in his place.",
        ],
        image: img_2016_free_foresters_160th,
        imageCaption: "The Free Foresters return to their birthplace, 11th September 2016 — the 160th anniversary match at Rectory Park"
      },
      {
        title: "Four Hundred and Eleven, and Two Great Losses (2017–2019)",
        background: "cream",
        content: [
          "On Saturday 8th July 2017 at Harborne's Old Church Avenue ground, a Sutton team passed 400 runs for the first time in the club's 170 years. Captain and wicketkeeper Lee Thomason, then 24, finished 202 not out from just 147 balls with 11 sixes and 18 fours, his second hundred coming off 32 deliveries; 22-year-old Tom Eustace made 127 not out from 84 balls, and their unbroken third-wicket stand of 290 carried Sutton to 411 for 2. Nine replacement balls were needed. Harborne replied with 219 for 8, the Sri Lankan overseas player Dinushka Nawarathnage taking 4 for 62.",
          "The 2018 season was overshadowed by loss. Roger Coombs — life member, and a wicketkeeper who claimed 76 victims in the 1961 season, a club record still standing, and close to 900 in his career — died on 6th February aged 83. In June came the sudden death of Andy 'Bids' Biddle, aged 52, after a heart attack while playing for the very Veterans XI he had assembled by cajoling old teammates out of retirement. A junior member since 1978 and known across the town as 'Mr Sutton Coldfield', he was mourned at a packed Holy Trinity. The club acquired a defibrillator for the pavilion wall, and at the 2019 dinner the 'Ten Not Out' trophy was presented posthumously to both men.",
          "In 2019, restructured back into the Warwickshire Premier Division, the 1st XI finished eighth, though Lee Thomason made 854 runs at 53.4 and Dinushka Nawarathnage took 42 wickets at 10.07 with 7 for 44 at Streetly. The proudest moments came from players the club had raised itself. Aaron Thomason, who had made his Warwickshire debut at Lord's on 27th July 2014, signed for Sussex and on first-class debut at Kidderminster made 90 batting at number ten — the third-highest score ever recorded from that position on debut. Tom Banton, a product of the SCCC junior section, was named PCA Young Player of the Year and called into England's Twenty20 squad for the tour of New Zealand.",
        ],
        image: img_2019_tom_banton_england,
        imageCaption: "Tom Banton, raised in the SCCC junior section, named PCA Young Player of the Year in 2019 and called up by England"
      },
    ],
    keyMoments: [
      {
        year: "2011",
        title: "Relegation and a New Head Coach",
        description: "The 1st XI were relegated out of the Birmingham League, but Steve Perryman, formerly of Warwickshire and Worcestershire, was appointed head coach and new ECB-funded nets opened on 30th April"
      },
      {
        year: "2012",
        title: "Dan Childs Arrives",
        description: "The Boland fast bowler took 54 wickets at 9.17 to lead the Warwickshire Premier Division, including 5 for 2 against Highway, as Sutton finished runners-up"
      },
      {
        year: "2013",
        title: "Five Titles in One Season",
        description: "Unbeaten WCL Premier Division champions with a record 426 points, plus the Warwickshire Sunday League, the WCL T20 final against Bedworth, Walmley's floodlit competition and the Last Man Stands final against Aldridge"
      },
      {
        year: "2014",
        title: "Champions at the First Attempt",
        description: "Back in the Birmingham League, Graham Clark's side won Division 3 with 340 points from 22 matches and went up to Division 2"
      },
      {
        year: "2015",
        title: "T20 Knock-Out Winners",
        description: "Underdogs beat Berkswell by 57 runs in the semi-final and then Barnards Green by four in the B&DPCL T20 final, Lewis Harrison taking three for three in the last over; the 1st XI were also promoted as runners-up to Bridgnorth"
      },
      {
        year: "2016",
        title: "La Manga and 'Ten Not Out'",
        description: "An SCCC XI won all five of its games at the La Manga T20 tournament in April, and on 3rd July schoolchildren and students staged 'A Cricket Match Like No Other' to mark the centenary of the Somme"
      },
      {
        year: "2016",
        title: "The Free Foresters' 160th",
        description: "On 11th September the Free Foresters returned to the ground where Rev. Bedford founded them in 1856, and Sutton won the anniversary match with a century from Lee Thomason"
      },
      {
        year: "2017",
        title: "411 for 2 at Harborne",
        description: "Lee Thomason's 202 not out and Tom Eustace's unbeaten 127, in a stand of 290, produced the first 400-plus total in the club's 170 years"
      },
      {
        year: "2018",
        title: "Roger Coombs and Andy Biddle",
        description: "The club lost life member and record-setting wicketkeeper Roger Coombs in February and Andy 'Bids' Biddle in June, aged 52, after a heart attack while playing for the Veterans XI he had founded"
      },
      {
        year: "2019",
        title: "Banton and Thomason",
        description: "Tom Banton was named PCA Young Player of the Year and called into England's T20 squad, while Aaron Thomason made 90 at number ten on first-class debut for Sussex"
      },
    ],
    quote: {
      text: "The position we find ourselves in is where every other team in the 1st XI Premier Division would love to be. We have achieved the leading spot in the league by dividing each game into sessions and playing each one in turn.",
      author: "Steve Perryman, Head Coach, during the 2013 season"
    }
  },
  "2020s": {
    name: "The Twenty-Twenties",
    years: "2020-Present",
    heroTitle: "Resilience and Renewal",
    heroSubtitle: "From Pandemic to the Present",
    heroImage: img_2022_blueteam,
    introLarge: "The 2020s opened with the COVID-19 pandemic bringing cricket to a standstill for the first time since the Second World War — and the club responded with the same quiet determination that has defined it for over 175 years.",
    introBody: "President James Ross galvanised members and vice presidents with personal letters, raising over £3,500 in donations. Grants were secured from Sport England and the ECB. The pitches were tended, the pavilion maintained, and the community held together until cricket could return. What followed was a decade of renewal: a 175th anniversary celebrated with records and silverware in 2022, pioneering community tournaments that made Rectory Park a stage for cricket's most inclusive events, the launch of girls' cricket, and — in 2025 — what the club itself called the finest all-round playing season in its history.",
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
      },
      {
        title: "A Ground for the Whole Community",
        background: "cream",
        content: [
          "In the 2020s Rectory Park became a stage for cricket far beyond the club's own fixtures. On 11th June 2023 the club hosted the first-ever Inter-County LGBTQ+ cricket tournament — five county sides, national media coverage and international umpire Sue Redfern among the officials — an event so successful it became annual, growing to eight teams by 2026 when Birmingham Unicorns lifted the hardball title on home soil. Weeks after that first tournament, the Warwickshire Bears arrived for a T20 roadshow against a Best of the Warwickshire League XI, drawing a crowd of up to 500 to Rectory Park, with Bears players coaching juniors and signing autographs into the evening.",
          "The most significant new chapter opened on 15th June 2024, when girls' and ladies' cricket began in earnest: fifteen girls received blue club shirts at the first Saturday-morning session of a grass-roots programme sponsored by Life Member Peter Bell. Two years later, on 9th June 2026, the club's first-ever girls' hardball team — the Under-11 Academy, with guests from Kings Heath — played their first match, and a week after that contested the first girls' hardball game ever staged at Rectory Park: a final-ball tie against Harborne, 132 runs apiece.",
          "Junior cricket meanwhile went from strength to strength — over 100 youngsters at Friday night sessions, the Under-13s winning the Warwickshire championship in 2023, and a steady stream of juniors graduating into the senior XIs, several via coaching qualifications funded by the Andy Biddle Foundation."
        ],
        image: img_2023_lgbtq_event,
        imageCaption: "The first Inter-County LGBTQ+ cricket tournament, hosted at Rectory Park on 11th June 2023"
      },
      {
        title: "2025 — The Finest All-Round Season",
        background: "white",
        content: [
          "After the difficult 2023 season, in which both the 1st and 2nd XIs were relegated, the club rebuilt around its own young players — and in 2025 the recovery bore remarkable fruit. The Chairman described it as 'probably the most successful playing record across all teams the Club has ever had'. On Saturday 31st May, all four Saturday XIs won on the same afternoon for the first time since the 1980s — the 2nd XI dismissing Solihull Municipal for just 20 runs, with Jack Allen taking 6 for 11.",
          "The 3rd XI won the Division 8 West championship, Jim Little carrying his bat for 142 not out in a record 218-run third-wicket stand with Darren Fry along the way; the 4th XI were promoted as runners-up in Division 10 West; and the Sunday XI — Arden Division 1 champions in 2024 under Ben Dunnington — consolidated in the Premier. On Presidents Day, Phil Dunnett struck 116 and shared a club-record last-wicket stand of 74 with James Dalton to set up a 15-run win over Harborne.",
          "Underpinning it all was investment: a new artificial pitch on the lower ground, comprehensively rebuilt practice nets and new covers — more than £20,000 committed to facilities in a single winter — and a new generation of leadership, with Rob Haines elected Chairperson in 2026 following Nick Baker's retirement after six years of service that earned him Life Membership."
        ],
        image: img_2025_first_xi_squad,
        imageCaption: "The 1st XI of 2025 — part of what the club called the finest all-round season in its 178-year history"
      }
    ],
    keyMoments: [
      {
        year: "2020",
        title: "Cricket Suspended by Pandemic",
        description: "COVID-19 halts cricket for the first time since WWII; the club raises £3,500 in donations and secures £17,000 in grants to stay afloat"
      },
      {
        year: "2021",
        title: "Survival on the Final Day",
        description: "Victory over Walmley preserves Premier League status and denies the rivals the title; Martin Ball's 7 for 11 skittles Old Edwardians for 20; the 3rd XI win their division by 66 points"
      },
      {
        year: "2022",
        title: "175 Years — Records and Silverware",
        description: "The club's 175th anniversary brings a commemorative ale, a dinner archived at Lord's, a record 314-6 and 211-run win over Attock, and the 2nd XI's Division 5 championship"
      },
      {
        year: "2023",
        title: "First LGBTQ+ Tournament and the Bears at Rectory Park",
        description: "The first Inter-County LGBTQ+ cricket tournament and a Warwickshire Bears T20 roadshow bring crowds of hundreds to the ground"
      },
      {
        year: "2024",
        title: "Girls' Cricket Launches; Sunday XI Champions",
        description: "Fifteen girls receive their first club shirts as girls' cricket begins; the Sunday 1st XI win the Arden Division 1 title; the Annual Dinner returns to the pavilion for the first time since 1987"
      },
      {
        year: "2025",
        title: "The Greatest All-Round Season",
        description: "All four Saturday teams win on the same day; the 3rd XI are champions, the 4th XI promoted — the club's finest collective season in 178 years"
      },
      {
        year: "2026",
        title: "The First Girls' Hardball Team",
        description: "The Under-11 Girls' Academy plays the first girls' hardball cricket in the club's history — including a final-ball tie in the first girls' match at Rectory Park"
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
          className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[#1c1c1c]"
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
                className="w-full h-auto object-contain bg-[#f4f1ec]"
              />
              <div className="border-b border-[#d9c9ca] py-3 mt-4">
                <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                  {decade.name}, {decade.years}
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
              {/* items-start, or the grid stretches the picture column to match
                  the prose beside it and leaves up to 500px of empty white
                  below the photograph. */}
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Image - always appears first on mobile, alternates left/right on desktop */}
                {section.image && (
                  <div className={`md:col-span-5 order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div>
                      <ImageWithFallback
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto object-contain bg-[#f4f1ec]"
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
                      <DecadeCard
                        key={decade.id}
                        id={decade.id}
                        title={decade.title}
                        years={decade.years}
                        image={decade.image}
                        link={decade.link}
                        className="flex-shrink-0 w-[280px] md:w-[320px] h-80"
                        lazy={true}
                      />))}
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
