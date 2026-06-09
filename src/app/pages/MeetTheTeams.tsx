// Correct photo assets from club archive — decade folders
import img_1977_mccc from '@/assets/decades/1970s/1977_part2_image6.png';
import img_1977_alpine from '@/assets/decades/1970s/1977_part2_image7.jpg';
import img_1984 from '@/assets/decades/1980s/1984_part2_image15.jpg';
import img_1985 from '@/assets/decades/1980s/1985_part2_image16.jpg';
import img_1989 from '@/assets/decades/1980s/1989_part2_image21.jpg';
import img_2022 from '@/assets/decades/2020s/2022_part3_image63.jpg';
import image_hero from '@/assets/ui/teams-hero.png';

// Historical photos extracted from club archives — organized by decade
import img_1859 from '@/assets/decades/1850s/1859_part1_image4.jpg';
import img_1892 from '@/assets/decades/1890s/1892_part1_image9.jpg';
import img_1893 from '@/assets/decades/1890s/1893_part1_image10.jpg';
import img_1906a from '@/assets/decades/1900s/1906_part1_image14.jpg';
import img_1906b from '@/assets/decades/1900s/1906_part1_image16.jpg';
import img_1910 from '@/assets/decades/1910s/1910_part1_image20.jpg';
import img_1911 from '@/assets/decades/1910s/1911_part1_image21.jpg';
import img_1912 from '@/assets/decades/1910s/1912_part1_image23.jpg';
import img_1913a from '@/assets/decades/1910s/1913_part1_image24.jpg';
import img_1913b from '@/assets/decades/1910s/1913_part1_image25.jpg';
import img_1921 from '@/assets/decades/1920s/1921_part1_image47.jpg';
import img_1947a from '@/assets/decades/1940s/1947_part1_image58.jpg';
import img_1947b from '@/assets/decades/1940s/1947_part1_image59.jpeg';
import img_1949 from '@/assets/decades/1940s/1949_part1_image63.jpg';
import img_1951 from '@/assets/decades/1950s/1951_part1_image65.jpg';
import img_1952 from '@/assets/decades/1950s/1952_part1_image66.jpg';
import img_1953 from '@/assets/decades/1950s/1953_part1_image67.jpg';
import img_1956 from '@/assets/decades/1950s/1956_part1_image69.png';
import img_1960 from '@/assets/decades/1960s/1960_part1_image79.jpg';
import img_1962 from '@/assets/decades/1960s/1962_part1_image80.jpg';
import img_1966 from '@/assets/decades/1960s/1966_part2_image1.jpg';
import img_1975 from '@/assets/decades/1970s/1975_part2_image4.jpg';
import img_1979a from '@/assets/decades/1970s/1978_part2_image10.jpeg';
import img_1979b from '@/assets/decades/1970s/1979_part2_image11.jpeg';
import img_1993a from '@/assets/decades/1990s/1993_part2_image22.jpg';
import img_1993b from '@/assets/decades/1990s/1993_part2_image24.png';
import img_2004 from '@/assets/decades/2000s/2004_part2_image43.jpg';
import img_2010 from '@/assets/decades/2010s/2010_part2_image60.jpg';
import img_1938 from '@/assets/decades/1930s/1938_part1_image54.jpg';
import img_1982 from '@/assets/decades/1980s/1982_part2_image12.jpg';
import img_1982_netherlands from '@/assets/decades/1980s/1982_part2_image14.jpg';
import img_1987 from '@/assets/decades/1980s/1987_part2_image19.jpg';
import img_1988 from '@/assets/decades/1980s/1988_part2_image20.jpg';
import img_1993_hawks from '@/assets/decades/1990s/1993_part2_image23.jpg';
import img_1996 from '@/assets/decades/1990s/1996_part2_image25.jpeg';
import img_1998 from '@/assets/decades/1990s/1998_part2_image28.jpg';
import img_2012 from '@/assets/decades/2010s/2012_part2_image65.jpg';
import img_2013 from '@/assets/decades/1980s/1986_part2_image75.jpg';
import img_2016_200yrs from '@/assets/decades/2010s/2016_part3_image1.jpg';

import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState, useEffect, useRef } from "react";

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

const NAMES_PENDING: Player[] = [
  { name: "Names pending", role: "Caption not recorded in club archives" }
];

const teamPhotos: TeamPhoto[] = [
  {
    year: "1859",
    title: "1859 First XI",
    description: "The earliest surviving team photograph in the club's archive — a remarkable record of Sutton Coldfield Cricket Club as it appeared in 1859, photographed at a time when the club was still playing on the old ground. Nine players are identified in the caption plaque beneath the photograph.",
    image: img_1859,
    background: "cream",
    players: [
      { name: "C.A. Garnett" },
      { name: "T.C. Goodrich" },
      { name: "W.K.R. Bedford" },
      { name: "F. Brandt" },
      { name: "H. Garnett" },
      { name: "A.H. Faber" },
      { name: "W.G. Armitstead" },
      { name: "J.H. Codrington" },
      { name: "R. Brodie" },
    ]
  },
  {
    year: "1892",
    title: "Club Members, 1892",
    description: "A large group photograph of Sutton Coldfield Cricket Club members taken circa 1892 — a substantial gathering that reflects the club's standing as an established social and sporting institution in Sutton Coldfield. The numbered caption identifies members across three rows.",
    image: img_1892,
    background: "white",
    players: [
      { name: "Shute" },
      { name: "Major Gen. Arbuthnot" },
      { name: "Le Wood" },
      { name: "Wilson" },
      { name: "C.H. Barwell" },
      { name: "W.J. Taylor" },
      { name: "T.A. Vaughton" },
      { name: "H. Maxon" },
      { name: "H.R. Bagot" },
      { name: "Knight" },
      { name: "B.F.R. Bedford" },
      { name: "C.N.R. Bedford" },
    ]
  },
  {
    year: "1893",
    title: "1893 First XI",
    description: "The 1893 1st XI photographed at their ground. Many of the same faces appear across consecutive years — the Bedford family name in particular runs through multiple seasons. Against Knowle that year, O.H. Stone scored 78 not out out of a total of 102.",
    image: img_1893,
    background: "cream",
    players: [
      { name: "X. Player", role: "Umpire" },
      { name: "Major Gen. Arbuthnot" },
      { name: "Wilson" },
      { name: "C.Y.R. Bedford" },
      { name: "A. Player" },
      { name: "W.J. Taylor" },
      { name: "H.E.R. Bedford" },
      { name: "T.A. Vaughton" },
      { name: "B.F.R. Bedford" },
      { name: "A. Player" },
      { name: "C.H. Barwell" },
      { name: "H.R. Bagot" },
    ]
  },
  {
    year: "1906",
    title: "1906 First XI",
    description: "The 1906 1st XI photographed in front of the old thatched pavilion — one of the most distinctive features of Sutton Coldfield Cricket Club in this era. The pavilion would remain a defining image of the ground until its eventual replacement. Several open-air concerts were held at the ground in this period, attracting large audiences.",
    image: img_1906a,
    background: "white",
    players: [
      { name: "J.B. Russel" },
      { name: "G. Colmore" },
      { name: "G. Shelvoke" },
      { name: "M. Miles" },
      { name: "H. Lott" },
      { name: "R.E. Yates" },
      { name: "Wilkins", role: "Umpire" },
      { name: "J. Wood", role: "Scorer" },
      { name: "F.S. Sturgess" },
      { name: "P. Rose" },
      { name: "H.E.R. Bedford" },
      { name: "C. Shelvoke" },
      { name: "F.C. Harper" },
    ]
  },
  {
    year: "1906",
    title: "1906 Second XI",
    description: "The 1906 2nd XI photographed at Sutton Coldfield. By the early 1900s, the club had a well-organised structure with both first and second elevens playing regular competitive fixtures. The full caption survives, identifying all fourteen players and officials.",
    image: img_1906b,
    background: "cream",
    players: [
      { name: "H. Knapp", role: "Scorer" },
      { name: "P.A. Grove" },
      { name: "A.E. Kent" },
      { name: "F.E. Abbott" },
      { name: "A.E. Hotchkiss" },
      { name: "H.R. Yardley" },
      { name: "R.H. Griffiths" },
      { name: "A.J. Lilley" },
      { name: "W. Sturgess" },
      { name: "W.J. Taylor" },
      { name: "A.J. Gateley" },
      { name: "Rev. F. Collyer" },
      { name: "Geo. Sharp" },
      { name: "H. Sampson" },
    ]
  },
  {
    year: "1910",
    title: "1910 First XI",
    description: "The 1910 1st XI, photographed as Edwardian cricket reached its height. The four years before the First World War would prove to be the last of a certain era of English cricket — and Sutton Coldfield club cricket was no different, with the 1914–18 war suspending all fixtures. The full caption identifies fourteen players and officials.",
    image: img_1910,
    background: "white",
    players: [
      { name: "A. Homer" },
      { name: "C. Homer" },
      { name: "W.J. Saunders" },
      { name: "G.E. Saunders" },
      { name: "J. Homer" },
      { name: "H.R. Yardley" },
      { name: "F.S. Sturgess" },
      { name: "W.H. Sydney" },
      { name: "J.H. Cornwall" },
      { name: "A.J. Lilley" },
      { name: "Geo. Sharp" },
      { name: "R.H. Griffiths" },
      { name: "T.A. Vaughton" },
      { name: "Lee-Marquand", role: "Scorer" },
    ]
  },
  {
    year: "1911",
    title: "1911 Second XI",
    description: "The 1911 2nd XI. The years immediately before the First World War saw strong membership and competitive fixtures at all levels. Many of the players in this photograph would have their cricket interrupted — or ended — by the war that began three years later.",
    image: img_1911,
    background: "cream",
    players: NAMES_PENDING
  },
  {
    year: "1912",
    title: "1912 First XI",
    description: "The 1912 1st XI. No names were recorded alongside this photograph in the club's archives. The 1912 season was played in the shadow of growing tensions in Europe, though cricket continued with characteristic English optimism.",
    image: img_1912,
    background: "white",
    players: NAMES_PENDING
  },
  {
    year: "1913",
    title: "1913 First XI",
    description: "The 1913 1st XI — the last complete peacetime season before the First World War. Fourteen players are named in the caption, photographed on the club's ground with the trees of Rectory Park visible in the background. Several of these men would serve in the war; some would not return.",
    image: img_1913a,
    background: "cream",
    players: [
      { name: "A.J. Gateley" },
      { name: "E.J. Tabb" },
      { name: "J.H. Yates" },
      { name: "E.H. Darby" },
      { name: "F. Hanmer" },
      { name: "R. Evans" },
      { name: "F.B. Clark" },
      { name: "E.B. Crockford" },
      { name: "P.R. Grove" },
      { name: "J.B. Russell" },
      { name: "L.B. Crockford" },
      { name: "H. Lott" },
      { name: "V.A. Hickley" },
      { name: "S.E. Parsons" },
    ]
  },
  {
    year: "1913",
    title: "1913 Second XI",
    description: "The 1913 2nd XI, photographed in the final summer before the Great War — captioned 'Sutton Coldfield Cricket Club 2nd XI 1913'. The 2nd XI provided an important pipeline of talent into the first team, and many of these players would have been among the younger members of the club.",
    image: img_1913b,
    background: "white",
    players: [
      { name: "W.H. Sydney" },
      { name: "W.J. Saunders" },
      { name: "T. Ricketts" },
      { name: "G. Lewis" },
      { name: "G.E. Saunders" },
      { name: "E.J. Hallmark" },
      { name: "C. Homer" },
      { name: "F.C. Browne" },
      { name: "A.J. Lilley" },
      { name: "G. Sharp" },
      { name: "J.H. Cornwall" },
      { name: "A.J. Griffiths" },
      { name: "N. Sharp", role: "Scorer" },
    ]
  },
  {
    year: "1921",
    title: "1921 First XI",
    description: "The 1921 1st XI — the first full post-war season photograph, captioned 'Sutton Coldfield Cricket Club 1st XI 1921'. Cricket resumed after the Armistice with a mixture of familiar faces and new ones; some of those who had played before 1914 had not returned. The club's resumption of fixtures in 1919 and 1920 marked the difficult process of rebuilding.",
    image: img_1921,
    background: "cream",
    players: [
      { name: "A. Goodby", role: "Umpire" },
      { name: "C.H. Miller" },
      { name: "L. Miles" },
      { name: "Rev. T.E.W. Rudd" },
      { name: "N. Marsh" },
      { name: "F. Styles" },
      { name: "G. Stone" },
      { name: "A. Leal" },
      { name: "J. Nasmith" },
      { name: "Geo. Sharp" },
      { name: "R.O. Baylis" },
      { name: "H.L. Mortimore" },
      { name: "J.R.L. Evans" },
      { name: "Lavender", role: "Scorer" },
    ]
  },
  {
    year: "1938",
    title: "1938 First XI — Sunday Mercury",
    description: "The 1938 1st XI as featured in the Sunday Mercury on 29th May 1938, under the heading 'Notable Midland Cricket Clubs — Sutton Coldfield 1st Team'. Norman Sharp — who would go on to serve as Club President for decades — is pictured in the front row alongside E.H. Walters, who had captained the 1st XI in the early 1930s. P. Terry, listed in the back row, would later be elected an Hon. Life Member for keeping the club alive through the Second World War.",
    image: img_1938,
    background: "white",
    players: [
      { name: "P. Terry" },
      { name: "W.A. Blackford", role: "Scorer" },
      { name: "T.W. Farmer" },
      { name: "G.B. Tuckwell" },
      { name: "W.F. Prosser" },
      { name: "E.F. Twiss" },
      { name: "H.E. Robinson", role: "Umpire" },
      { name: "R. Baker" },
      { name: "G.V. Swift" },
      { name: "R.F. Barnes" },
      { name: "C. Howl" },
      { name: "N. Sharp" },
      { name: "E.H. Walters" },
    ]
  },
  {
    year: "1947",
    title: "Sutton Coldfield CC v MCC — 16th July 1947",
    description: "A historic fixture: Sutton Coldfield Cricket Club hosting the Marylebone Cricket Club in July 1947. The MCC visit was a significant occasion for the club — an indicator of its standing within English cricket. The Sutton XI is captained by Neil Sharp; the MCC side by R.I. Scorer. The photograph was taken at the old thatched pavilion ground.",
    image: img_1947a,
    background: "white",
    players: [
      { name: "R.A. Woodroffe" },
      { name: "P.I. Terry" },
      { name: "D. Swift" },
      { name: "J.H. Odell" },
      { name: "M.R. Strivens" },
      { name: "G.C. Strivens" },
      { name: "W.E. Houghton" },
      { name: "C.B. Killick", role: "Umpire" },
      { name: "I. McCrae" },
      { name: "L.W. Stevenson" },
      { name: "N. Sharp", role: "Captain" },
      { name: "G.V. Swift" },
    ]
  },
  {
    year: "1947",
    title: "MCC XI — 16th July 1947",
    description: "The MCC touring party that visited Sutton Coldfield on 16th July 1947. The MCC side included several distinguished club cricketers. B.W. Quaife — son of the famous Warwickshire and England cricketer Willie Quaife — was among their number. This photograph of the MCC XI at Rectory Park is one of the more historically significant images in the club's archive.",
    image: img_1947b,
    background: "cream",
    players: [
      { name: "E.J. Smith", role: "Umpire" },
      { name: "E.H. Walters" },
      { name: "Chisholm" },
      { name: "G.C. Griffiths" },
      { name: "J. Warner" },
      { name: "P. Aizlewood" },
      { name: "C. Addleman" },
      { name: "C.B. Killick", role: "Umpire" },
      { name: "T. Mitchell" },
      { name: "R.I. Scorer", role: "Captain" },
      { name: "B.W. Quaife" },
      { name: "J.G. Pugh" },
      { name: "W.K. Wyatt" },
    ]
  },
  {
    year: "1949",
    title: "1949 First XI",
    description: "The 1949 1st XI, captioned 'Sutton Coldfield Cricket Club 1st XI 1949'. Pat Bowerbank captains the side alongside stalwarts Pritchett, Gabriel and Sharp, who would define Sutton cricket throughout the 1950s. The immediate post-war years saw the club consolidating its competitive programme after the disruption of 1939–45.",
    image: img_1949,
    background: "white",
    players: [
      { name: "L. Bindon", role: "Umpire" },
      { name: "J. Odell" },
      { name: "V. Beardshaw" },
      { name: "P. Bowerbank" },
      { name: "G. Pritchett" },
      { name: "V. Gabriel" },
      { name: "G. Wilkes" },
      { name: "G. Edwards" },
      { name: "P. Terry" },
      { name: "P. Ashcroft", role: "Captain" },
      { name: "G. Swift" },
      { name: "N. Sharp" },
    ]
  },
  {
    year: "1951",
    title: "1951 First XI",
    description: "The 1951 1st XI — a strong season that yielded 11 wins, 8 draws and just 5 defeats. Pat Bowerbank was a central figure in Sutton Coldfield cricket at this time, and the early 1950s saw the club competing strongly in Birmingham club cricket. The consistent core of players — Clewer, Pritchett, Gabriel, Pellow — would continue to appear in team photographs for much of the decade.",
    image: img_1951,
    background: "cream",
    players: [
      { name: "L. Bindon", role: "Umpire" },
      { name: "G. Robinson" },
      { name: "B. King" },
      { name: "V. Gabriel" },
      { name: "B. Cutler" },
      { name: "H. Strong", role: "Scorer" },
      { name: "W. Price" },
      { name: "C. Swift" },
      { name: "P. Bowerbank" },
      { name: "G. Pritchett" },
      { name: "P. Ashcroft" },
      { name: "B. Clewer" },
    ]
  },
  {
    year: "1952",
    title: "1952 First XI — The Tatler & Bystander",
    description: "The 1952 1st XI, photographed for publication in The Tatler & Bystander on 21st May 1952 — a remarkable indicator of the club's social standing at that time. Pat Bowerbank captains the side, with the photograph taken in the formal posed style typical of the era. A photograph in a national magazine reflected genuine prestige.",
    image: img_1952,
    background: "white",
    players: [
      { name: "F. Langley", role: "Scorer" },
      { name: "T.P. Daly" },
      { name: "G.J. Robinson" },
      { name: "S. Cutler" },
      { name: "L.N. Pellow" },
      { name: "A.H. Butler" },
      { name: "K.S. Anirudhsinge" },
      { name: "F.L. Bindon", role: "Umpire" },
      { name: "B.D. Clewer" },
      { name: "G.A. Pritchett" },
      { name: "P.E. Bowerbank", role: "Captain" },
      { name: "P. Ashcroft" },
      { name: "V. Gabriel" },
    ]
  },
  {
    year: "1953",
    title: "1953 First XI",
    description: "The 1953 1st XI under the captaincy of Pat Bowerbank. Many of the faces from 1952 return, reflecting the settled core of players that defined Sutton cricket in this era. Geoff Pritchett and Brian Clewer — names that would recur across the club's history for decades — are among those pictured.",
    image: img_1953,
    background: "cream",
    players: [
      { name: "G.J. Robinson" },
      { name: "D.R. Haworth" },
      { name: "P. Tansley" },
      { name: "J.D. Harrison" },
      { name: "P. Yates" },
      { name: "F.T. Collins" },
      { name: "F.L. Bindon", role: "Umpire" },
      { name: "B.H.D. Clewer" },
      { name: "G.A. Pritchett" },
      { name: "P.E.S. Bowerbank", role: "Captain" },
      { name: "L.N. Pellow" },
      { name: "V.G. Gabriel" },
      { name: "Scorer", role: "Name not recorded" },
    ]
  },
  {
    year: "1956",
    title: "1956 First XI — Bank Holiday Press Photo",
    description: "A press photograph of Sutton Coldfield Cricket Club's 1st Team, taken on Bank Holiday Saturday 4th August 1956 at the Kings & Diamonds ground. Press photographs of this era capture the club's public profile — Sutton were a club of genuine standing in Birmingham club cricket, attracting press coverage for key fixtures.",
    image: img_1956,
    background: "white",
    players: NAMES_PENDING
  },
  {
    year: "1960",
    title: "1960 First XI",
    description: "The 1960 1st XI under the captaincy of Brian Clewer. Peter Yates, Neil Houghton, Roger Coombs, Geoff Pritchett — names that defined Sutton cricket across two decades — all feature. Roddy Wilson umpires; David Goldsby scores. Clewer's captaincy period maintained the high standards set by his predecessor Pat Bowerbank.",
    image: img_1960,
    background: "cream",
    players: [
      { name: "David Goldsby", role: "Scorer" },
      { name: "Peter Yates" },
      { name: "Neil Houghton" },
      { name: "Peter Wells" },
      { name: "Alan Couchman" },
      { name: "John McCarthy" },
      { name: "A. (Tony) Robinson" },
      { name: "Les Pellow" },
      { name: "Roger Coombs" },
      { name: "Brian Clewer", role: "Captain" },
      { name: "Pat Bowerbank" },
      { name: "Geoff Pritchett" },
      { name: "Roddy Wilson", role: "Umpire" },
    ]
  },
  {
    year: "1962",
    title: "1962 First XI",
    description: "The 1962 1st XI under Brian Clewer. Alan Couchman, Geoff Pritchett, Neil Houghton and Peter Wells continue from the 1960 photograph, reflecting the club's continuity of personnel through this period. New faces also appear, demonstrating the development of junior talent into the senior side.",
    image: img_1962,
    background: "white",
    players: [
      { name: "J. McCarthy" },
      { name: "V. Fitzgerald" },
      { name: "A. Bedgood" },
      { name: "A. Wigley" },
      { name: "P. Wells" },
      { name: "R. Mee" },
      { name: "P. Lowe" },
      { name: "A. Couchman" },
      { name: "B. Clewer", role: "Captain" },
      { name: "N. Houghton" },
      { name: "G. Pritchett" },
    ]
  },
  {
    year: "1966",
    title: "1966 First XI",
    description: "The 1966 1st XI under the captaincy of Neil Houghton — himself one of the most significant figures in the club's history across five decades as player, captain, and administrator. Peter Wells, Geoff Pritchett, Brian Clewer, Peter Yates, Roger Coombs and Vince Fitzgerald all feature, representing extraordinary continuity with the 1950s sides.",
    image: img_1966,
    background: "cream",
    players: [
      { name: "M. Bloomer" },
      { name: "P. Wells" },
      { name: "J. Smith" },
      { name: "R. Billington" },
      { name: "C. Groves" },
      { name: "R. Coombs" },
      { name: "A. Thompson", role: "Umpire" },
      { name: "V. Fitzgerald" },
      { name: "G. Pritchett" },
      { name: "N. Houghton", role: "Captain" },
      { name: "B. Clewer" },
      { name: "P. Yates" },
    ]
  },
  {
    year: "1975",
    title: "Presentation to Bob Strachan",
    description: "A gathering of club members photographed in 1975 at a presentation to Bob Strachan, sponsored by Willis Faber. The photograph brings together some of the most significant names in Sutton Coldfield cricket of the era — Coombs, Edmunds, Tidy, Robinson and Ross among them — in a typically warm club occasion.",
    image: img_1975,
    background: "white",
    players: [
      { name: "George Lindsay", role: "Willis Faber director" },
      { name: "Ian Nuttall" },
      { name: "Roger Coombs" },
      { name: "Dave Edmunds" },
      { name: "Warwick Tidy" },
      { name: "Bob Strachan" },
      { name: "John Robinson" },
      { name: "James Ross" },
    ]
  },
  {
    year: "1977",
    title: "MCCC Champions — Michael Dixon's Team",
    description: "The 1977 1st XI, winners of the Midland Club Cricket Championship under the captaincy of Michael Dixon. This photograph accompanied the plaque hung in the Rectory Park pavilion — copied in 2022 to preserve the record. Dixon's attacking approach defined this team: they won as many games as they lost (7 each), but their willingness to chase any target made them compelling to watch. Dixon scored 1,047 runs at 29.91; Warwick Tidy took 69 wickets; Dave Torry 51.",
    image: img_1977_mccc,
    background: "cream",
    players: [
      { name: "P. Berry", role: "Umpire" },
      { name: "M. Hepburn" },
      { name: "T. Yomens" },
      { name: "G. Tidy" },
      { name: "D. Torry" },
      { name: "D. Edmunds" },
      { name: "G. Weston" },
      { name: "H. Lock", role: "Scorer" },
      { name: "N. Houghton" },
      { name: "K. Gardom" },
      { name: "M. Dixon", role: "Captain" },
      { name: "W. Tidy" },
      { name: "J. Robinson" },
    ]
  },
  {
    year: "1977",
    title: "Alpine Under 16 Champions",
    description: "Sutton Coldfield's Under 16 team, winners of the first Alpine Soft Drink Company youth competition. Organised by Peter Yates and captained by David Stokes, this squad won every round of the inaugural competition. David Stokes was later awarded the Midlands Club Cricket Conference's Alec Hastilow Trophy as Best Under 16 Cricketer of the year.",
    image: img_1977_alpine,
    background: "white",
    players: [
      { name: "Peter Yates", role: "Manager" },
      { name: "A. Whyles" },
      { name: "S. Goring" },
      { name: "J. Sherwood" },
      { name: "A. Groves" },
      { name: "S. Powell" },
      { name: "M. Bell" },
      { name: "P. Yates" },
      { name: "B. McClaren" },
      { name: "M. Smith" },
      { name: "D. Stokes", role: "Captain" },
      { name: "A. Forrester" },
      { name: "M. Rogers" },
      { name: "S. Wilkinson" },
    ]
  },
  {
    year: "1979",
    title: "Annual Dinner, January 1979",
    description: "A gathering of club members at the Annual Dinner on 26th January 1979. The annual dinner brought together players from across all the XIs and the club's social membership. This photograph captures some of the most significant names in late-1970s Sutton cricket — Neil Houghton and Geoff Pritchett alongside the generation that would carry the club through the 1980s.",
    image: img_1979a,
    background: "cream",
    players: [
      { name: "Neil Houghton" },
      { name: "Geoff Pritchett" },
      { name: "Lees Smethurst" },
      { name: "Ron Smith" },
      { name: "Roger Coombs" },
      { name: "Dick Sperryn" },
      { name: "James Ross" },
      { name: "Steve Maynard" },
      { name: "Mike Joseph" },
      { name: "Tony Malek" },
      { name: "Dave Edmunds" },
      { name: "Andrew Beach" },
      { name: "Mike Hepburn" },
      { name: "Chris Barber" },
      { name: "Derick Murphy" },
      { name: "Peter Bell" },
    ]
  },
  {
    year: "1979",
    title: "The Hawks XI",
    description: "The Hawks — Sutton Coldfield's 3rd XI — photographed in the 1979 season. The Hawks provided competitive cricket at a level that gave developing players a pathway to the higher XIs. Dick Sperryn, Ron Smith and Joe Iafrati feature among the names recorded in this photograph.",
    image: img_1979b,
    background: "white",
    players: [
      { name: "R. Glover" },
      { name: "Derrick Murphy" },
      { name: "Bruce McClarn" },
      { name: "Mark Bell" },
      { name: "Ron Smith" },
      { name: "John Whyles" },
      { name: "Dick Sperryn" },
      { name: "Joe Iafrati" },
      { name: "Tony Malek" },
      { name: "Two players", role: "Names not recorded" },
    ]
  },
  {
    year: "1982",
    title: "1982 First XI — v Holland, ICC World Cup Warm-Up",
    description: "The 1982 1st XI photographed at Rectory Park ahead of their match against the Royal Netherlands Cricket Association (Holland) on 4th July 1982 — one of the ICC World Cup warm-up games hosted at the ground. Holland scored 293 for 4 before bowling Sutton out for 178. It was a remarkable occasion: international cricket had come to a club ground in Sutton Coldfield, with Peter Bell and Phil Berry officiating in multiple ICC matches across the summer.",
    image: img_1982,
    background: "cream",
    players: [
      { name: "C. Massey", role: "Umpire" },
      { name: "A. Hodder" },
      { name: "D. Jackson" },
      { name: "B. McClaren" },
      { name: "M. Joseph" },
      { name: "J. Ross" },
      { name: "C. Barber" },
      { name: "P. Berry", role: "Umpire" },
      { name: "R. Strachan" },
      { name: "C. Williamson" },
      { name: "M. Hepburn", role: "Captain" },
      { name: "J. Robinson" },
      { name: "A. Luckhurst" },
    ]
  },
  {
    year: "1982",
    title: "Netherlands CC XI — ICC Warm-Up at Rectory Park",
    description: "The Royal Netherlands Cricket Association touring party photographed at Rectory Park during their ICC World Cup warm-up match on 4th July 1982. In their distinctive light blue and red tracksuits, the Dutch side scored 293 for 4 in 60 overs before bowling Sutton out for 178 in the final over. It was one of three international matches staged at Rectory Park that summer, alongside Canada v USA and Kenya v Papua New Guinea.",
    image: img_1982_netherlands,
    background: "white",
    players: NAMES_PENDING
  },
  {
    year: "1984",
    title: "The 1984 First XI",
    description: "The 1st XI under the captaincy of Mike Hepburn. This was the year the Warwickshire Sunday League was formed at the instigation of John Whitehouse. Andy Luckhurst won the MCCC 1st XI League Bowling Trophy. Mark Rogers scored 110 against Solihull; Luckhurst scored 103 not out against Kings Heath and took 5 for 59 against Harborne. Ian King — age 52 — took 70 wickets in the 2nd XI at an average of 11.4.",
    image: img_1984,
    background: "cream",
    players: [
      { name: "Phil Berry", role: "Umpire" },
      { name: "Kate Hodder", role: "Scorer" },
      { name: "Graham Clarke" },
      { name: "Graham Williamson" },
      { name: "Andy Luckhurst" },
      { name: "Bruce McLaren" },
      { name: "Garry Moore" },
      { name: "Mark Rogers" },
      { name: "Neil Houghton" },
      { name: "James Ross" },
      { name: "Mike Hepburn", role: "Captain" },
      { name: "R. (Bob) Strachan" },
    ]
  },
  {
    year: "1985",
    title: "Cup KO Winners",
    description: "The team that won the club's KO Cup for the first time — and then, the following day, won the Wishaw Six-a-Side Cup for the second consecutive year. This team beat local rivals Aston Unity four times in the same season — in the Warwickshire Sunday League, the SCCC KO Competition, the Walmley KO tournament, and the Wishaw Six-a-Side.",
    image: img_1985,
    background: "white",
    players: [
      { name: "Andrew Hodder" },
      { name: "Richard Abel" },
      { name: "Gary Moore" },
      { name: "Graham Clarke" },
      { name: "Bob McGowan" },
      { name: "Andy Biddle", role: "Wicket-keeper" },
      { name: "Geoff Hopkinson" },
      { name: "Andy Luckhurst" },
      { name: "Graham Williamson", role: "Captain" },
      { name: "Mike Hepburn" },
      { name: "Bob Strachan" },
    ]
  },
  {
    year: "1987",
    title: "1987 First XI — MCCC Chesshire Gibson Champions",
    description: "The 1987 1st XI under Geoff Hopkinson's captaincy — the year the Hawks won the MCCC Chesshire Gibson League Championship for the first time. Neil Houghton was elected Treasurer of Warwickshire CCC this year, beginning an eleven-year tenure. Andy Luckhurst, Graham Williamson and Mike Hepburn remain key figures, joined by a strong younger generation.",
    image: img_1987,
    background: "cream",
    players: [
      { name: "P. Bragg" },
      { name: "P. Junkin" },
      { name: "A. Colledge" },
      { name: "G. Williamson" },
      { name: "N. Houghton" },
      { name: "A. Luckhurst" },
      { name: "R. Abell" },
      { name: "M. Hepburn" },
      { name: "G. Pritchett" },
      { name: "G. Hopkinson", role: "Captain" },
      { name: "A. Biddle" },
      { name: "R. Strachan" },
    ]
  },
  {
    year: "1988",
    title: "1988 First XI",
    description: "The 1st XI in 1988 — one of the most decorated years in the club's history. That season the Sunday 2nd XI won the Warwickshire Sunday League Championship, the 3rd XI (the Hawks) won the MCCC Championship, a joint Hawks and Grasshoppers side won the Jubilee Shield, and the club won the Warwickshire Winter Six-a-Side indoor league. The 1st XI were at the heart of this era of sustained success.",
    image: img_1988,
    background: "white",
    players: NAMES_PENDING
  },
  {
    year: "1988 & 1989",
    title: "Sunday 2nd XI — Back-to-Back Champions",
    description: "The Sunday 2nd XI that won the Warwickshire Sunday League Championship in consecutive seasons under Chris Barber's captaincy. In 1988 alone, the 3rd XI (the Hawks) also won the MCCC Championship, a joint Hawks and Grasshoppers side won the Jubilee Shield, and the club won the Warwickshire Winter Six-a-Side indoor league — an extraordinary year of success across all levels of the club.",
    image: img_1989,
    background: "cream",
    players: [
      { name: "Harry Walker", role: "Scorer" },
      { name: "Richard Jerman" },
      { name: "Maurice Watts" },
      { name: "Jonathan Miller" },
      { name: "Justine Roy" },
      { name: "Mark Jerman" },
      { name: "Chris Munn" },
      { name: "Umpire", role: "Name not recorded" },
      { name: "Adrian Colledge" },
      { name: "Ken Lancaster" },
      { name: "Chris Barber", role: "Captain" },
      { name: "Bob Strachan" },
      { name: "Mick Hooper" },
    ]
  },
  {
    year: "1993",
    title: "1993 First XI — League Winners",
    description: "The 1993 1st XI, winners of the 1st XI League — captioned 'Sutton Coldfield Cricket Club 1st XI League Winners 1993'. Andy Luckhurst captains the side, with Mike Hepburn and Chris Munn among those who had driven the club's success throughout the 1980s and into the new decade.",
    image: img_1993a,
    background: "white",
    players: [
      { name: "Bob Biddle", role: "Scorer" },
      { name: "Mark Jerman" },
      { name: "Mike Hepburn" },
      { name: "Jon Miller" },
      { name: "Paul Junkin" },
      { name: "Tim Bucket" },
      { name: "Adrian Sutton" },
      { name: "Phil Berry", role: "Umpire" },
      { name: "Chris Munn" },
      { name: "Michael Mackey" },
      { name: "Andy Luckhurst", role: "Captain" },
      { name: "Andy Biddle", role: "Wicket-keeper" },
      { name: "Richard Jerman" },
    ]
  },
  {
    year: "1993",
    title: "Neil Houghton with Cricket Legends",
    description: "A remarkable photograph from 1993 featuring Sutton Coldfield's own Neil Houghton alongside some of the greatest names in international cricket. Houghton — a Sutton stalwart from the 1960s through to the 2000s — is pictured with England's Geoff Miller and Chris Cowdrey, and two of Australia's most feared fast bowlers: Dennis Lillee and Jeff Thomson.",
    image: img_1993b,
    background: "cream",
    players: [
      { name: "Geoff Miller" },
      { name: "Dennis Lillee" },
      { name: "Neil Houghton" },
      { name: "Jeff Thomson" },
      { name: "Chris Cowdrey" },
    ]
  },
  {
    year: "1993",
    title: "1993 Third XI — Willis Corroon MCCC Champions",
    description: "The Hawks — Sutton Coldfield's 3rd XI — who won the Willis Corroon MCCC Championship in 1993 under Tim Matthews' captaincy. A memorable team effort across a strong squad of club regulars.",
    image: img_1993_hawks,
    background: "white",
    players: [
      { name: "J. Little" },
      { name: "S. Nicholls" },
      { name: "P. Greetham" },
      { name: "J. Illingworth" },
      { name: "N. Arif" },
      { name: "K. Lancaster" },
      { name: "P. Wells", role: "Umpire" },
      { name: "P. Harding" },
      { name: "N. Jerman" },
      { name: "T. Matthews", role: "Captain" },
      { name: "R. Hassan" },
      { name: "K. Wilson" },
    ]
  },
  {
    year: "1996",
    title: "1996 KO Cup Winners",
    description: "The Sutton Coldfield side that won the KO Cup in 1996. A strong squad drawn from across the club's senior ranks, with several faces who had been part of the club's successful runs throughout the late 1980s and early 1990s.",
    image: img_1996,
    background: "cream",
    players: [
      { name: "M. Mackey" },
      { name: "C. Munn" },
      { name: "C. Harwood" },
      { name: "M. Hepburn" },
      { name: "R. Powell" },
      { name: "J. Little" },
      { name: "A. Sutton" },
      { name: "M. Dean" },
      { name: "R. McLachlan" },
      { name: "J. Ross" },
      { name: "D. Benson" },
    ]
  },
  {
    year: "1998",
    title: "Lord's 1998 — Club Visit",
    description: "A group photograph taken at Lord's Cricket Ground in 1998 — a memorable club outing to the home of cricket. The visit reflects the club's strong social traditions alongside its competitive cricket, with members making the trip to one of the game's most iconic venues.",
    image: img_1998,
    background: "white",
    players: NAMES_PENDING
  },
  {
    year: "2004",
    title: "2004 — 2nd Division Champions",
    description: "The 2004 1st XI, winners of the Birmingham & District Premier Cricket League 2nd Division Championship. A group photograph with the trophy captures the moment. The early 2000s saw continued investment in junior development, with the next generation beginning to establish themselves in the senior sides and results coming through.",
    image: img_2004,
    background: "white",
    players: NAMES_PENDING
  },
  {
    year: "2010",
    title: "Under 13 County Champions",
    description: "The Under 13 side that won the County Championship in 2010, coached by P. Raworth and M. Bradbury. Aaron Thomason — who would go on to become one of the club's most celebrated modern cricketers — is among the players pictured. Will Raworth and Joel Bradbury also feature, indicating the strength of the club's junior programme.",
    image: img_2010,
    background: "cream",
    players: [
      { name: "P. Raworth", role: "Coach" },
      { name: "Jacob Smith" },
      { name: "Will Sharpe" },
      { name: "Arnab Haque" },
      { name: "Jack Andrew" },
      { name: "Rhys Renwick" },
      { name: "Kyle Delaney" },
      { name: "Shehrose Iqbal" },
      { name: "M. Bradbury", role: "Coach" },
      { name: "Aaron Thomason" },
      { name: "Raul Ram" },
      { name: "Will Raworth" },
      { name: "Joel Bradbury" },
      { name: "Dan Whitehurst" },
    ]
  },
  {
    year: "2012",
    title: "2012 First XI — Diverse Living",
    description: "The 2012 1st XI, pictured in their kit sponsored by Diverse Living. A settled, experienced squad competing at the top level of Midlands club cricket. Aaron Thomason — who would go on to represent Warwickshire CCC — was already a key figure in the side.",
    image: img_2012,
    background: "cream",
    players: NAMES_PENDING
  },
  {
    year: "2013",
    title: "2013 First XI",
    description: "The 2013 1st XI at Rectory Park. Graham Clark's side combined experienced club stalwarts with younger emerging players, continuing the club's strong tradition in the Birmingham & District Premier Cricket League.",
    image: img_2013,
    background: "white",
    players: [
      { name: "Simon Head" },
      { name: "Tom Wright" },
      { name: "Huw Farrell" },
      { name: "Paul Griffiths" },
      { name: "Dan Childs", role: "Overseas" },
      { name: "Mark Guest" },
      { name: "Lee Thomason" },
      { name: "Graham Clark", role: "Captain" },
      { name: "Jack Smith" },
    ]
  },
  {
    year: "2016",
    title: "200 Combined Years of Membership",
    description: "A remarkable photograph marking a combined 200 years of service to Sutton Coldfield Cricket Club — four stalwarts who together represent two centuries of dedication to the club. From left to right: John Robinson (44 years), Peter Bell (50 years), Neil Houghton (61 years) and James Ross (45 years). A fitting tribute to the loyalty and continuity that has sustained the club across generations.",
    image: img_2016_200yrs,
    background: "cream",
    players: [
      { name: "John Robinson", role: "44 years' service" },
      { name: "Peter Bell", role: "50 years' service" },
      { name: "Neil Houghton", role: "61 years' service" },
      { name: "James Ross", role: "45 years' service" },
    ]
  },
  {
    year: "2022",
    title: "The 1st Team — White Ball Kit",
    description: "Sutton Coldfield's 1st Team in their 2022 white ball kit, photographed at Rectory Park during one of the most memorable early-season spells in recent memory. Over two consecutive Saturdays in April, the team scored 994 runs for the loss of just 26 wickets. The standout performance was a fifth-wicket partnership of 203 between Raul Ram (95) and Aaron Thomason (114) against Attock CC — a new club record for that wicket at Rectory Park.",
    image: img_2022,
    background: "white",
    players: [
      { name: "A. Farooq" },
      { name: "Felix Haines" },
      { name: "Jacob Squire-Wood" },
      { name: "Aaron Thomason" },
      { name: "Harry Williams-Lucas" },
      { name: "Graham Clark" },
      { name: "A. Shabir" },
      { name: "Lee Thomason" },
      { name: "Jack Smith" },
      { name: "Raul Ram" },
      { name: "N. Lawrence" },
    ]
  },
];

export default function MeetTheTeams() {
  const [expandedTeam, setExpandedTeam] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section-id');
            if (id) setVisibleSections((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    Object.values(sectionRefs.current).forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <MenuBar />

      {/* Hero */}
      <section className="relative h-[500px] md:h-[700px] overflow-hidden mt-[73px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image_hero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[120px] md:h-[180px] pointer-events-none -mb-px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 180">
            <path d="M0 180H1920V0L0 180Z" fill="white" />
          </svg>
        </div>
        <div className="relative h-full flex flex-col justify-end pb-32 md:pb-40 px-6">
          <div className={`max-w-6xl mx-auto w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-4">
              <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-['Helvetica',sans-serif] text-sm md:text-base">
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

      {/* Introduction */}
      <section
        className="bg-white py-16 md:py-24 -mt-px"
        ref={(el) => (sectionRefs.current['intro'] = el)}
        data-section-id="intro"
      >
        <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${visibleSections.has('intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-['Georgia',serif] text-xl md:text-2xl leading-relaxed text-gray-800">
            From the earliest surviving photograph of 1859 to the 2022 team that rewrote Rectory Park's batting records, these photographs capture over 160 years of Sutton Coldfield Cricket Club. Behind every team picture is a story — of seasons won and narrowly missed, of players who gave their summers to this club, and of the friendships that outlasted the cricket.
          </p>
        </div>
      </section>

      {/* Team Photos */}
      {teamPhotos.map((team, index) => (
        <div key={index}>
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
              <div className="inline-block bg-[#8B1538] text-white px-6 py-2 mb-6">
                <p className="font-['Helvetica',sans-serif] text-lg md:text-xl font-bold">{team.year}</p>
              </div>

              <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-6 leading-tight">
                {team.title}
              </h2>

              <p className="font-['Georgia',serif] text-lg md:text-xl leading-relaxed text-gray-800 mb-8 max-w-4xl">
                {team.description}
              </p>

              <div className="mb-8">
                <ImageWithFallback
                  src={team.image}
                  alt={`${team.title} - ${team.year}`}
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="border-b border-[#d9c9ca] py-3 mt-4">
                  <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                    Sutton Coldfield Cricket Club, {team.year}
                  </p>
                  <p className="font-['Georgia',serif] text-sm text-[#9b9b9b]">Club Archives</p>
                </div>
              </div>

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
                            <p className={`font-['Georgia',serif] text-lg md:text-xl font-semibold ${player.name === 'Names pending' ? 'text-gray-400 italic' : 'text-gray-900'}`}>
                              {player.name}
                            </p>
                            {player.role && (
                              <p className="font-['Georgia',serif] text-base text-[#8B1538] italic">
                                {player.role}
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

      {/* Final Quote */}
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
              "These photographs remind us that cricket is more than a game — it is about the people, the friendships, and the shared memories that bind generations together."
            </p>
            <footer className="font-['Helvetica',sans-serif] text-lg md:text-xl text-gray-700">
              — Sutton Coldfield Cricket Club, Club History
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Navigation */}
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
