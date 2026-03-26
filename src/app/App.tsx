import image_6a586d7a29e4b109fed30896e7cb6b0ce51df103 from '@/assets/6a586d7a29e4b109fed30896e7cb6b0ce51df103.png';
import image_ef4304f5bdee3b1bf6b4285a696b64c9aea0762b from '@/assets/ef4304f5bdee3b1bf6b4285a696b64c9aea0762b.png';
import image_65cb835619675e0e12e9db52c4d551c17ab4090f from '@/assets/65cb835619675e0e12e9db52c4d551c17ab4090f.png';
import image_35d091ccf79929cac09220bc363fbc26a923d05c from '@/assets/35d091ccf79929cac09220bc363fbc26a923d05c.png';
import image_ce487aeba746213d558fe22e4f7adf80db910680 from '@/assets/ce487aeba746213d558fe22e4f7adf80db910680.png';
import image_46b1b5438f7230b782958ef739cc53489cee10a2 from '@/assets/46b1b5438f7230b782958ef739cc53489cee10a2.png';
import cricketBallIcon from '@/assets/fc4c2d6cfb8d8e98a7717873f6d785a1e5b880e7.png';
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "@/app/components/CustomLink";
import { TimelineItem } from "@/app/components/TimelineItem";
import { MenuBar } from "@/app/components/MenuBar";
import bannerImage from "@/assets/46b1b5438f7230b782958ef739cc53489cee10a2.png";
import DecadesOverview from "@/app/pages/DecadesOverview";
import HomePage from "@/app/pages/HomePage";
import AboutPage from "@/app/pages/AboutPage";
import DecadePage from "@/app/pages/DecadePage_new";
import MeetTheTeams from "@/app/pages/MeetTheTeams";
import Obituaries from "@/app/pages/Obituaries";
import FirstFiftyYears from "@/app/pages/FirstFiftyYears";

const timelineData = [
  {
    year: "1837",
    title: "Cricket Before the Club",
    shortDescription: "Cricket was already being played regularly in Rectory Park and Sutton Park before any formal club existed.",
    yearOverview: "By 1837, cricket was already being played regularly in Rectory Park and Sutton Park, laying the foundations for organised cricket in Sutton Coldfield. Although no formal club yet existed, these early matches demonstrated a growing enthusiasm for the game and established the parks as natural sporting venues. Later records confirmed this activity, retrospectively recognising the significance of these formative years.",
    keyEvents: [
      "Cricket played informally in Rectory Park and Sutton Park",
      "Early pitches prepared and maintained by local enthusiasts",
      "Foundations laid for organised club cricket"
    ],
    closingSummary: "The year 1837 marks the earliest known roots of cricket in Sutton Coldfield and the beginning of a lasting sporting tradition.",
    location: "Rectory Park & Sutton Park",
    imageCaption: "Early cricket in Sutton Coldfield's parks, 1837.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1847",
    title: "The Foundation",
    shortDescription: "The Sutton Coldfield Cricket Club was formally founded in 1847 by Rev. William Kirkpatrick Riland Bedford.",
    yearOverview: "The Sutton Coldfield Cricket Club was formally founded in 1847, during a period when organised sport was increasingly promoted as a force for physical health, moral improvement, and social unity. The club's creation was driven by the Rev. William Kirkpatrick Riland Bedford, whose vision was to establish a cricket club open to men of all classes, supported by modest subscriptions. From the outset, the club reflected Victorian ideals of recreation, discipline, and community engagement, laying foundations that would endure through periods of uncertainty.",
    keyEvents: [
      "Circular issued on 27 July 1847 proposing the formation of a cricket club",
      "Club established with inclusive membership and low subscription fees",
      "Early matches played in Sutton Park"
    ],
    closingSummary: "1847 marked the beginning of a club built on community, faith, and voluntary commitment.",
    location: "Sutton Park",
    imageCaption: "The club's foundation under Rev. W.K. Riland Bedford, 1847.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1850",
    title: "Establishment at Rectory Park",
    shortDescription: "The club relocated to Rectory Park after Rev. Bedford laid out a permanent cricket ground on the Rectory Glebes.",
    yearOverview: "By 1850, concerns over the future use of Sutton Park prompted a decisive shift in the club's fortunes. Following government railway proposals that threatened park amenities, the Rev. Bedford—newly appointed Rector of Sutton Coldfield—provided a permanent solution. He laid out a cricket ground on the Rectory Glebes, offering it to the club at nominal cost. This move secured the club's future and established Rectory Park as its spiritual and physical home.",
    keyEvents: [
      "Rev. Bedford appointed Rector of Sutton Coldfield",
      "Cricket ground laid out on the Rectory Glebes",
      "Club relocated from Sutton Park to what became Rectory Park"
    ],
    closingSummary: "The move to Rectory Park gave the club stability and a permanent home.",
    location: "Rectory Park",
    imageCaption: "The new cricket ground at Rectory Park, 1850.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_ce487aeba746213d558fe22e4f7adf80db910680,
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
    ],
  },
  {
    year: "1856",
    title: "Revival and the Free Foresters",
    shortDescription: "The club was revived after a period of inactivity, and Rev. Bedford founded the Free Foresters Cricket Club.",
    yearOverview: "Despite earlier success, sustained support proved difficult, and by 1856 the club had become largely inactive. In response, the Rev. Bedford issued a renewed appeal emphasising cricket's physical and moral benefits. With the ground offered freely and temporary accommodation provided, the club was revived. In the same year, Bedford founded the Free Foresters Cricket Club, whose ethos of goodwill and fellowship closely aligned with Sutton Coldfield's values.",
    keyEvents: [
      "Rev. Bedford issued a circular calling for renewed subscriptions",
      "Club activity successfully restored",
      "Free Foresters Cricket Club founded",
      "Matches between Sutton and the Foresters became regular fixtures"
    ],
    closingSummary: "1856 reaffirmed cricket's role at the heart of Sutton's sporting life.",
    location: "Rectory Park",
    imageCaption: "The club's revival and connection with the Free Foresters, 1856.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1863",
    title: "Honour and Recognition",
    shortDescription: "Rev. Bedford received a silver salver from the Free Foresters, now displayed at Lord's Cricket Ground.",
    yearOverview: "By 1863, the influence of the Rev. Bedford extended well beyond Sutton Coldfield. In recognition of his long service and friendship, the Free Foresters presented him with a silver salver, a prestigious honour that endures to this day. The salver is now displayed in the Long Room at Lord's, a rare and lasting testament to Bedford's contribution to cricket at both local and national levels.",
    keyEvents: [
      "Silver salver presented to Rev. Bedford by the Free Foresters",
      "Inscription honoured his service and leadership",
      "Salver later displayed at Lord's Cricket Ground"
    ],
    closingSummary: "The presentation symbolised national recognition of Bedford's cricketing legacy.",
    location: "Rectory Park",
    imageCaption: "Recognition of Rev. Bedford's contribution to cricket, 1863.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1869",
    title: "Restoration After Decline",
    shortDescription: "Rev. Bedford returned to revive the struggling club, re-laying the square and erecting a dressing pavilion.",
    yearOverview: "After a three-year absence from the district, the Rev. Bedford returned in 1869 to find the club once again struggling. Together with his son, he led a revival effort, re-laying part of the square and expanding the playing area. A small dressing pavilion—later known as 'The Shed'—was erected, restoring basic facilities and renewing enthusiasm among a small but committed membership.",
    keyEvents: [
      "Rev. Bedford returned to Sutton Coldfield",
      "Playing square re-laid and expanded",
      "Dressing pavilion erected at Rectory Park",
      "Generous subscriptions received despite low membership"
    ],
    closingSummary: "1869 demonstrated the club's resilience and reliance on committed leadership.",
    location: "Rectory Park",
    imageCaption: "The restored square and new pavilion, 1869.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_ce487aeba746213d558fe22e4f7adf80db910680,
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
    ],
  },
  {
    year: "1890",
    title: "The New Pavilion",
    shortDescription: "A permanent pavilion was constructed at Rectory Park, transforming the club's facilities.",
    yearOverview: "The year 1890 marked a decisive turning point in the club's history. With growing confidence and support, members approved the construction of a permanent pavilion at Rectory Park. Funded through subscriptions, donations, and fundraising events, the pavilion was completed in under four months at a cost of £100. It transformed the club's facilities and symbolised renewed stability and ambition.",
    keyEvents: [
      "Proposal for a new pavilion approved at the AGM",
      "Subscriptions and fundraising secured required funds",
      "Pavilion completed and insured within four months",
      "Iron hurdles installed around the ground and pavilion"
    ],
    closingSummary: "The pavilion secured the club's future and modernised its facilities.",
    location: "Rectory Park",
    imageCaption: "The new pavilion at Rectory Park, 1890.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1896",
    title: "The Golden Jubilee",
    shortDescription: "Sutton Coldfield Cricket Club celebrated its fiftieth anniversary with commemorative matches and presentations.",
    yearOverview: "In 1896, Sutton Coldfield Cricket Club celebrated its Golden Jubilee, marking fifty years since its formation. The occasion was commemorated with a special match and presentations to surviving founder members, including the Rev. Bedford. By this time, the club was firmly established, financially stable, and widely respected within the region.",
    keyEvents: [
      "Fiftieth anniversary celebrated with commemorative match",
      "Presentations made to founder members",
      "Fixture list included established regional clubs",
      "Ground improvements formally reviewed"
    ],
    closingSummary: "The Jubilee confirmed the club's permanence and historical significance.",
    location: "Rectory Park",
    imageCaption: "The Golden Jubilee celebrations, 1896.",
    backgroundImage: "https://images.unsplash.com/photo-1743612135955-7ec949bfa2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmllbGQlMjBoaXN0b3JpY3xlbnwxfHx8fDE3NjgzMDg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1703229702362-ae76aace387c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdmludGFnZSUyMGhpc3RvcmljYWx8ZW58MXx8fHwxNzY4Mjk1NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMGhpc3RvcmljfGVufDF8fHx8MTc2ODI5MjU2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1899",
    title: "A Settled Era",
    shortDescription: "The club entered a period of consistency with a well-established fixture list and regular season structure.",
    yearOverview: "By 1899, Sutton Coldfield Cricket Club had entered a period of consistency and organisation. The season followed a settled structure, shaped by daylight limitations before the introduction of summer time. Regular fixtures were played against a broad range of regional opponents, reflecting the club's established standing within Midlands cricket.",
    keyEvents: [
      "Fixtures included Camp Hill O.E., City of Birmingham Officials, Knowle and Dorridge, Barnt Green, and others",
      "Practice match held on the first Saturday in May",
      "Season ran from May to the end of August",
      "Approximately 17 Saturday fixtures played"
    ],
    closingSummary: "1899 marked the club's transition into a mature and stable sporting institution.",
    location: "Rectory Park",
    imageCaption: "A settled season at Rectory Park, 1899.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1901",
    title: "William Fowler Retires",
    shortDescription: "William Fowler stepped down after more than a decade as Hon. Secretary and Treasurer.",
    yearOverview: "By 1901, Sutton Coldfield Cricket Club had entered the new century on firm administrative footing. Although there were no dramatic developments on the field, the year was notable for the retirement of William Fowler from club office, marking the end of a long and devoted period of service. Having acted as Honorary Secretary and Treasurer since 1889, Fowler had guided the club through a crucial phase of consolidation during the late Victorian era. His departure closed a chapter defined by stability, careful stewardship, and volunteer commitment. The club continued seamlessly under existing structures, demonstrating that its foundations were now strong enough to endure leadership change without disruption.",
    keyEvents: [
      "William Fowler retires from office after long and faithful service",
      "Fowler's role had included Hon. Secretary (from 1889) and Hon. Treasurer until 1899",
      "Club entered a period of administrative transition"
    ],
    closingSummary: "The club entered a period of administrative transition, highlighting the importance of dedicated officers for sustaining its early stability.",
    location: "Rectory Park",
    imageCaption: "End of an administrative era at Rectory Park, 1901.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1902",
    title: "Gymkhana Introduced",
    shortDescription: "The first Gymkhana was held to raise funds, featuring novelty races and skill competitions.",
    yearOverview: "The 1902 season brought modest change in leadership and a notable expansion of the club's social activity. The captaincy passed from T.A. Vaughton to C. Shelvoke for a single season, while R.S. Walters assumed the role of Honorary Treasurer, a position he would hold with distinction. This year also produced one of the club's more humorous anecdotes, following an ill-fated attempt to supply refreshments to members on an honesty basis — an experiment that was quickly abandoned. More enduring was the introduction of the Gymkhana, a fundraising event that proved immensely popular and became an annual fixture. Combining sport, entertainment, and community engagement, the Gymkhana reflected the increasingly social role of the cricket club within Sutton Coldfield.",
    keyEvents: [
      "C. Shelvoke serves as captain",
      "R.S. Walters experiments with supplying drinks to members; effort discontinued",
      "First Gymkhana held, including menagerie race, bucket and water race, and stump-throwing"
    ],
    closingSummary: "The Gymkhana became a lasting social and fundraising tradition, strengthening the club's ties with the community.",
    location: "Rectory Park",
    imageCaption: "The first Gymkhana event at Rectory Park, 1902.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_ce487aeba746213d558fe22e4f7adf80db910680,
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
    ],
  },
  {
    year: "1903",
    title: "Rev. R.A. Morley Becomes Life Member",
    shortDescription: "Rev. R.A. Morley became the club's first Life Member in recognition of his service.",
    yearOverview: "In 1903, H.E.R. Bedford was elected captain, continuing the strong connection between the club and the Bedford family. The Rev. R.A. Morley, curate of the Parish Church, featured prominently during the season, contributing both as a capable cricketer and an engaging personality. Though his stay in Sutton was brief, his impact was such that he was later elected the club's first Life Member. This year exemplified the Edwardian blend of cricket, character, and clerical involvement, at a time when the sport was viewed not only as recreation but as a moral and social good within the town.",
    keyEvents: [
      "H.E.R. Bedford elected club captain",
      "Rev. R.A. Morley contributes to club cricket and becomes first Life Member",
      "Morley later appointed vicar of Hampstead, Great Barr, and Water Orton"
    ],
    closingSummary: "The election of a Life Member formalised recognition of exceptional service, a practice that continues to honour contributions to the club.",
    location: "Rectory Park",
    imageCaption: "Recognition of service at Rectory Park, 1903.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1904",
    title: "Professional Appointment and Membership Growth",
    shortDescription: "W.H. Sidney was appointed as professional player, coach, and groundsman.",
    yearOverview: "The appointment of W.H. Sidney as professional groundsman and coach in 1904 marked a significant step forward in the club's development. His dual role improved the quality of the playing surface while also raising standards on the field. The year also saw the arrival of John B. Russell and George Sharp as new members — figures who would later become central to the club's playing strength and administration. Quietly but decisively, 1904 laid important groundwork for the club's future, combining professional expertise with the emergence of a new generation of influential members.",
    keyEvents: [
      "W.H. Sidney appointed as groundsman, coach, and professional player",
      "John B. Russell and George Sharp join as new members",
      "Club continues regular fixtures with improved coaching and training"
    ],
    closingSummary: "The appointment of a professional signalled the club's ambition and commitment to developing playing standards.",
    location: "Rectory Park",
    imageCaption: "Professional coaching begins at Rectory Park, 1904.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_ce487aeba746213d558fe22e4f7adf80db910680,
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
    ],
  },
  {
    year: "1905",
    title: "Death of the Founder and Lower Ground Development",
    shortDescription: "Rev. W.K.R. Bedford passed away, and the lower ground was developed for third-team matches.",
    yearOverview: "The death of the Rev. W.K.R. Bedford in January 1905 was a moment of profound significance for Sutton Coldfield Cricket Club. As founder and long-time champion of the club, his passing prompted heartfelt tributes and reflection on the values upon which the club had been built. Despite this loss, the club continued to grow. The Lower Ground was brought into use for third-team cricket, increasing playing opportunities, and a pavilion was erected through funds raised by a highly memorable illuminated open-air concert. On the field, results were encouraging, including a drawn match against Warwickshire at Edgbaston, signalling the club's respectable standing within regional cricket.",
    keyEvents: [
      "Rev. W.K.R. Bedford passes away at age 78",
      "Lower ground taken over for third-team matches; pavilion erected",
      "Fundraising open-air concert held to support ground development",
      "H.T. Crichton scores 62 not out against Harborne",
      "1st XI: 13 matches played, 6 won, 3 lost, 4 drawn; notable century by J.B. Russell"
    ],
    closingSummary: "Bedford's passing closed the founding chapter of the club, while infrastructure improvements ensured continued growth and participation.",
    location: "Rectory Park",
    imageCaption: "The founder's legacy and new developments, 1905.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1906",
    title: "Fourth Team Formed and Social Expansion",
    shortDescription: "A fourth Saturday team was established, reflecting increasing membership and participation.",
    yearOverview: "Further progress was made in 1906 with the formation of a fourth Saturday team, a clear indication of rising membership and participation. W.H. Sidney was reappointed as professional groundsman, ensuring continuity in ground preparation and coaching. The club balanced multiple teams across Saturday, midweek, and evening fixtures, while open-air concerts continued to provide essential financial support. By the end of the season, total membership had reached 114, underlining Sutton Coldfield Cricket Club's position as a well-organised and thriving sporting institution in Edwardian Sutton.",
    keyEvents: [
      "Fourth Saturday team established",
      "W.H. Sidney appointed professional and groundsman with weekly contract",
      "Sutton Vesey F.C. allowed limited use of ground; Ladies Hockey Club arrangement organised",
      "Open-air concerts held, with thanks to organisers Horace Lott and Arthur Lilley",
      "1st XI: 17 played, 7 won, 3 lost, 7 drawn. Total membership 114",
      "P. Rose takes 8 wickets for 24 runs against Birmingham University"
    ],
    closingSummary: "The club successfully expanded its playing base and strengthened community engagement while maintaining high standards on the field.",
    location: "Rectory Park",
    imageCaption: "Expansion and community growth at Rectory Park, 1906.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_ce487aeba746213d558fe22e4f7adf80db910680,
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
    ],
  },
  {
    year: "1907",
    title: "Rectory Park Uncertainty",
    shortDescription: "Concerns arose over the future of Rectory Park due to proposed ecclesiastical transfers.",
    yearOverview: "While cricket continued uninterrupted in 1907, unease began to surface regarding the club's long-term future at Rectory Park. Reports in the local press highlighted the increasing value of the land and the likelihood of ecclesiastical changes following the Rector's retirement. Though the club was assured of the ground for the immediate season, doubts about what lay beyond prompted serious concern. On the field, notable performances included R.E. Yates' unbeaten century at Wolverhampton, but these achievements were increasingly overshadowed by questions of security and tenure.",
    keyEvents: [
      "H.E.R. Bedford elected Life Member and departs Sutton",
      "AGM expresses concern over Rectory Park's future amid ecclesiastical changes",
      "Fixtures include Camp Hill O.E., Erdington, Birmingham University, Wolverhampton, Barnt Green, Harborne, and Knowle & Dorridge",
      "R.E. Yates scores 106 not out at Wolverhampton; A.J. Lilley takes 8 wickets against Erdington"
    ],
    closingSummary: "The club maintained sporting activity despite looming ground uncertainty, preserving traditions and competitive performance.",
    location: "Rectory Park",
    imageCaption: "Uncertainty and perseverance at Rectory Park, 1907.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1908",
    title: "Financial Challenges and Sporting Highlights",
    shortDescription: "A wet summer impacted concert revenue, but remarkable individual performances continued.",
    yearOverview: "A wet summer in 1908 reduced income from the open-air concerts that had become vital to the club's finances, resulting in a reported deficit at the AGM. In response, greater transparency was introduced with the circulation of balance sheets to members. On the field, the season was memorable for individual brilliance — not least the extraordinary performance of F.R. Foster against the second eleven — as well as a century by the newly appointed captain, R.F. Yates. Despite financial strain, cricket at Sutton remained competitive and vibrant.",
    keyEvents: [
      "Income deficiency due to poor weather affecting concert profits",
      "R.F. Yates scores a century against Wolverhampton",
      "F.R. Foster scores 100 and W.H. Foster takes 5 wickets in a match against Sutton 2nd XI",
      "E.B. Crockford debuts with 1 wicket in 9 overs"
    ],
    closingSummary: "Despite financial and weather challenges, the club produced remarkable individual performances, maintaining competitive standards.",
    location: "Rectory Park",
    imageCaption: "Sporting excellence amid challenges, 1908.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_ce487aeba746213d558fe22e4f7adf80db910680,
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
    ],
  },
  {
    year: "1909",
    title: "Comprehensive Records and Growing Standards",
    shortDescription: "More comprehensive match records were maintained, with high batting averages recorded.",
    yearOverview: "The final year of the decade was characterised by strong individual batting performances and a large number of drawn matches, reflecting competitive but evenly balanced contests. Horace Lott headed both batting and bowling averages, while centuries from Crockford, Clark, and R.E. Yates underlined the club's quality. Off the field, tributes were paid to the Rev. W.C.R. Bedford for his service as President, and serious efforts were made to secure a formal lease for Rectory Park. Although no lease was granted, the club continued under its long-standing annual tenancy, closing the decade with confidence in its cricket — but lingering uncertainty over its home.",
    keyEvents: [
      "Horace Lott leads batting and bowling averages; E.B. Crockford averages over 30",
      "Centuries scored by F.B. Clark (108), R.E. Yates (122), E.B. Crockford (112*)",
      "1st XI: 17 played, 4 won, 3 lost, 9 drawn, 1 tied",
      "2nd XI: 17 played, 4 won, 4 lost, 9 drawn, 3 scratched",
      "Ground remains on annual tenancy; approach to Ecclesiastical Commissioners for lease not successful"
    ],
    closingSummary: "The club established a standard of rigorous record-keeping and high-level performance, preparing for the next phase of its history.",
    location: "Rectory Park",
    imageCaption: "Record-keeping and excellence at Rectory Park, 1909.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1910",
    title: "A Golden Edwardian Season",
    shortDescription: "One of the most successful and socially vibrant seasons in the club's pre-war history.",
    yearOverview: "1910 was one of the most successful and socially vibrant seasons in the club's pre-war history. On the field, batting and bowling standards were exceptionally high across both senior and junior teams, while off the field the Annual Dinner and Smoking Concert reflected a confident and flourishing membership. The season also marked the retirement of Rev. W.C. Riland Bedford as President, closing a chapter that linked the club directly to its founders. At the same time, the cricket ground began to assume a broader community role, soon to include hockey alongside cricket.",
    keyEvents: [
      "Annual Dinner & Smoking Concert held at the Royal Hotel",
      "Outstanding batting performances led by L.C. Crockford",
      "Strong bowling returns from Dr. J.H. Sproat and F.B. Clark",
      "Rev. W.C. Riland Bedford retires as President",
      "Hockey Club granted use of the ground in winter"
    ],
    closingSummary: "1910 represented the club at its confident Edwardian peak — successful, sociable, and secure.",
    location: "Rectory Park",
    imageCaption: "A successful season at Rectory Park, 1910.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1911",
    title: "Strong Cricket, Changing Leadership",
    shortDescription: "Canon C.W. Barnard elected President as the club maintained high cricketing standards.",
    yearOverview: "With Canon C.W. Barnard elected President, the club entered 1911 under new leadership while maintaining high cricketing standards. Competitive fixtures expanded, and memorable matches — including a dramatic victory at Nuneaton — added colour to the season. Personalities such as J.B. Russell, E.B. Crockford, and the formidable fast bowler Frank Hanmer dominated performances, while the club's character was enriched by loyal servants such as C. Lowe.",
    keyEvents: [
      "Canon C.W. Barnard elected President",
      "Dramatic six wickets without conceding a run against Nuneaton",
      "Continued strong performances from Russell, Crockford, and Hanmer",
      "Expansion of fixture list to include Coventry & North Warwickshire CC"
    ],
    closingSummary: "1911 blended competitive cricket with strong personalities and stable governance.",
    location: "Rectory Park",
    imageCaption: "New leadership era at Rectory Park, 1911.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1912",
    title: "Depth, Expansion, and Heavy Scoring",
    shortDescription: "Multiple centuries in single matches reflected the club's batting strength and depth of talent.",
    yearOverview: "The 1912 season highlighted the depth of talent across all teams. Multiple centuries in single matches reflected batting strength, while reliable bowling performances supported consistent results. The arrival of W.L. Mortimore strengthened both the playing and administrative sides of the club. The ground also saw further shared use, including football on the lower ground — a rare occurrence in the club's history.",
    keyEvents: [
      "Three centuries scored in one match against Yardley",
      "W.L. Mortimore joins the club",
      "Heathercourt F.C. granted winter use of the lower ground",
      "Continued cooperation with hockey and tennis clubs"
    ],
    closingSummary: "1912 was a season of abundance — runs, players, and growing community use of the ground.",
    location: "Rectory Park",
    imageCaption: "Emerging talents at Rectory Park, 1912.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1913",
    title: "The Peak Before the Storm",
    shortDescription: "The pinnacle of pre-war cricketing success under J.B. Russell's captaincy.",
    yearOverview: "Under J.B. Russell's captaincy, 1913 marked the pinnacle of pre-war cricketing success. All-rounders dominated the averages, wickets flowed freely, and leadership was firm both on and off the field. The year was also memorable for unusual events, including an aeroplane demonstration and a meteorite strike that destroyed a large ash tree on the ground — symbolic, in hindsight, of sudden and irreversible change.",
    keyEvents: [
      "Exceptional all-round performances from Evans, Crockford, Clark, and Lott",
      "Aeroplane demonstration watched by crowds at the ground",
      "Meteorite strike destroys ash tree between the grounds",
      "Russell formally assumes captaincy"
    ],
    closingSummary: "1913 stands as the club's Edwardian zenith — confident, talented, and full of life.",
    location: "Rectory Park",
    imageCaption: "Membership growth at Rectory Park, 1913.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1914",
    title: "Records and Rupture",
    shortDescription: "A brilliant season producing record scores was abruptly halted by the outbreak of war.",
    yearOverview: "The 1914 season began brilliantly, producing record individual scores and dominant bowling performances. J.B. Russell's 172 and F.B. Clark's extraordinary wicket tally defined the summer. However, the outbreak of the Great War in August brought the season — and an era — to an abrupt halt. Fixtures were cancelled, and members began to leave for military service.",
    keyEvents: [
      "Record score of 172 by J.B. Russell",
      "F.B. Clark takes all ten wickets in a match",
      "Matches cancelled after August due to war",
      "Members enlist following the declaration of war"
    ],
    closingSummary: "1914 was a year divided — cricketing brilliance followed by national tragedy.",
    location: "Rectory Park",
    imageCaption: "The war begins at Rectory Park, 1914.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1915-1918",
    title: "The Great War Years",
    shortDescription: "Organised cricket largely ceased as over thirty-nine members enlisted, thirteen losing their lives.",
    yearOverview: "During the war years, organised cricket largely ceased. Over thirty-nine members enlisted, thirteen of whom lost their lives. A small group of older members kept the club alive, focusing on ground maintenance, limited matches against service teams, and entertainments for convalescent soldiers. The club adapted pragmatically: finances were carefully managed, facilities modified, and the ground opened to military and community use. Despite hardship, the club emerged intact at war's end.",
    keyEvents: [
      "Roll of Honour created and displayed in the pavilion",
      "Entertainments and garden fêtes raise funds for V.A.D. hospitals",
      "Ground maintained despite reduced resources",
      "Ladies' cloakroom created during wartime adaptations",
      "Peace declared in 1918"
    ],
    closingSummary: "These years defined the club's resilience, sacrifice, and sense of duty beyond cricket.",
    location: "Rectory Park",
    imageCaption: "Wartime challenges at Rectory Park, 1915-1917.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1919",
    title: "Rebuilding and Renewal",
    shortDescription: "Post-war rebuilding saw the return of experienced players and renewed social and sporting activity.",
    yearOverview: "Post-war 1919 was a year of rebuilding, with the return of experienced players, election of new officers, and renewed social and sporting activity.",
    keyEvents: [
      "Committee meeting (3rd March) addresses hiring a groundsman, repairing sight screen, marling pitches, and fixture planning",
      "AGM (24th March): Rev. Canon Barnard presides; J.H. Cornwell elected Treasurer, George Sharp elected Secretary, L.C. Crockford as 1st XI captain",
      "Memorial tablet approved to honour members who died in the war",
      "1st XI: F.B. Clark scores 814 runs at 26.3 and takes 74 wickets; F.H. Beardshaw scores 502 runs at 31; E.B. Crockford 574 runs, 54 wickets; A.E. Terry 57 wickets at 9.1 average",
      "1st XI plays 21 matches (won 8, lost 7, drew 6); midweek team plays 14 (won 5, lost 3, drew 6)",
      "2nd XI plays 21 matches (won 8, lost 11, drew 2); concedes record 318 runs at Harborne",
      "Social and community activities resume, including garden fetes, concerts, and annual dinners"
    ],
    closingSummary: "The club re-established itself on and off the field, balancing remembrance, competitive cricket, and community engagement.",
    location: "Rectory Park",
    imageCaption: "Rebuilding and renewal at Rectory Park, 1919.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1920",
    title: "Renewal After the War",
    shortDescription: "The 1920 season marked Sutton Coldfield Cricket Club's firm return to stability following the First World War.",
    yearOverview: "The 1920 season marked Sutton Coldfield Cricket Club's firm return to stability following the First World War. Long-serving committee members were formally recognised for their loyalty, finances were carefully reviewed, and subscriptions adjusted to meet rising costs. Membership began to grow again, reflecting renewed interest in organised cricket. On the field, the Club operated multiple teams with notable success, supported by the appointment of a professional groundsman. Improvements to facilities, including the acquisition of an army hut for conversion into a tea shed, demonstrated a clear commitment to restoring the Club's pre-war standards.",
    keyEvents: [
      "Long-serving committee members formally recognised for extended service",
      "Subscription rates revised to reflect post-war conditions",
      "Appointment of a new professional groundsman",
      "Army hut acquired for conversion into a tea shed",
      "Successful season across all teams"
    ],
    closingSummary: "1920 represented recovery, renewal, and the careful rebuilding of Sutton Coldfield Cricket Club after wartime disruption.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Renewal and rebuilding at Rectory Park, 1920.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1921",
    title: "A Strong Summer of Cricket",
    shortDescription: "Blessed with excellent weather, the 1921 season proved highly successful on the field.",
    yearOverview: "Blessed with excellent weather, the 1921 season proved highly successful on the field. Batting dominated across the Midlands, and Sutton Coldfield's leading players took full advantage. Leadership returned to familiar hands with J.B. Russell reappointed as captain, supported by E.B. Crockford. Several memorable matches, including a tied opening fixture at the County Ground, added to the season's distinction. The First XI produced multiple centuries, while strong performances throughout the teams confirmed the Club's growing strength.",
    keyEvents: [
      "J.B. Russell re-elected First XI captain",
      "Batting averages unusually high across the season",
      "Opening match ended in a tie at the County Ground",
      "Father-and-son opening partnership recorded"
    ],
    closingSummary: "1921 showcased Sutton Coldfield's cricketing quality and reinforced its post-war resurgence.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Strong cricket at Rectory Park, 1921.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1922",
    title: "Consolidation and New Talent",
    shortDescription: "The Club entered 1922 in a sound financial position, allowing further investment in equipment and facilities.",
    yearOverview: "The Club entered 1922 in a sound financial position, allowing further investment in equipment and facilities. Attention turned to developing younger players, with several promising cricketers emerging during the season. Although overall results were mixed, individual performances stood out, and the arrival of A.F. Leighton added both quality and experience to the side. Off the field, the Club continued to balance shared ground use with hockey and other sports.",
    keyEvents: [
      "Healthy financial surplus reported at AGM",
      "A.F. Leighton joined the Club",
      "New coaching and practice equipment purchased",
      "Continued cooperation with hockey and community events"
    ],
    closingSummary: "1922 was a year of steady progress, marked by promising new talent and sound administration.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "New talent emerging at Rectory Park, 1922.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1923",
    title: "Success On and Off the Field",
    shortDescription: "Despite a small financial loss, the 1923 season proved successful in cricketing terms.",
    yearOverview: "Despite a small financial loss, the 1923 season proved successful in cricketing terms. The First XI recorded strong results, with several centuries scored against leading opposition. A Club dance and benefit events reflected an increasingly active social calendar. Investment continued in the ground and pavilion, while arrangements for umpires and scorers became more formalised.",
    keyEvents: [
      "Strong First XI performances and multiple centuries",
      "Benefit matches arranged for officials and grounds staff",
      "Pavilion and ground improvements continued",
      "Club dance generated a financial surplus"
    ],
    closingSummary: "1923 balanced competitive success with social and infrastructural development.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Cricket and social success, 1923.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1924",
    title: "Weather, Works, and Recognition",
    shortDescription: "Persistent rain disrupted much of the 1924 season, limiting opportunities for play.",
    yearOverview: "Persistent rain disrupted much of the 1924 season, limiting opportunities for play. Nevertheless, significant progress was made off the field. Pavilion alterations, enclosure improvements, and new planting enhanced Rectory Park's appearance and functionality. The year was notable for the formal recognition of George Sharp's immense contribution to the Club, marking a moment of reflection and appreciation.",
    keyEvents: [
      "Season badly affected by weather",
      "Pavilion and enclosure improvements undertaken",
      "George Sharp presented with an armchair for services rendered",
      "Pavilion Fund successfully raised through fundraising"
    ],
    closingSummary: "1924 was remembered more for its improvements and acknowledgements than its cricket.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Pavilion improvements at Rectory Park, 1924.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1925",
    title: "Competitive Cricket and Quiet Progress",
    shortDescription: "The 1925 season produced several fine individual performances, including centuries and notable partnerships.",
    yearOverview: "The 1925 season produced several fine individual performances, including centuries and notable partnerships. While overall results were balanced, matches were keenly contested. Attention continued to focus on the care of the ground and pavilion, with experiments in turf preparation and further aesthetic improvements to the enclosure.",
    keyEvents: [
      "Centuries and match-winning partnerships recorded",
      "Benefit matches rescheduled and completed",
      "Experimental turf treatments introduced",
      "Pavilion appearance enhanced with flower beds"
    ],
    closingSummary: "1925 maintained the Club's competitive standards while continuing steady ground development.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Competitive cricket continues, 1925.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1926",
    title: "Loss and Renewal",
    shortDescription: "The death of John Nasmith was keenly felt across the Club, marking the loss of a dedicated administrator and supporter.",
    yearOverview: "The death of John Nasmith was keenly felt across the Club, marking the loss of a dedicated administrator and supporter. On the field, however, Sutton Coldfield enjoyed memorable victories, including dramatic run chases against strong opposition. Major facility improvements included pavilion re-thatching and the introduction of sight screens, reinforcing the Club's reputation for maintaining high standards.",
    keyEvents: [
      "Death of John Nasmith",
      "Pavilion re-thatched and sight screens installed",
      "Several notable First XI victories",
      "New officers elected at AGM"
    ],
    closingSummary: "1926 combined sadness with progress, reflecting both the human and sporting dimensions of the Club.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Progress and remembrance, 1926.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1927",
    title: "Transition and Record Partnerships",
    shortDescription: "This was a year of transition, marked by the resignation of long-standing Vice President J.H. Yates and the sudden death of Treasurer Norman Marsh.",
    yearOverview: "This was a year of transition, marked by the resignation of long-standing Vice President J.H. Yates and the sudden death of Treasurer Norman Marsh. His memory was honoured with the erection of a pavilion clock. On the field, strong team performances included record partnerships and decisive victories, while new leadership appointments ensured continuity.",
    keyEvents: [
      "Death of Norman Marsh and memorial clock installed",
      "Change in senior officers and captains",
      "Record sixth-wicket partnership achieved",
      "Successful First XI season"
    ],
    closingSummary: "1927 was defined by change, remembrance, and resilient cricketing performances.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Transition and achievement, 1927.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1928",
    title: "A Batting Side for the Ages",
    shortDescription: "The 1928 season stands among the finest in Sutton Coldfield's history.",
    yearOverview: "The 1928 season stands among the finest in Sutton Coldfield's history. Batting performances reached extraordinary levels, culminating in Norman Sharp becoming the first club member to score 1,000 runs in a season. The First XI frequently included multiple county players, producing a side of exceptional strength. The death of President Canon C.W. Barnard cast a shadow, but the cricket itself reached unprecedented heights.",
    keyEvents: [
      "Norman Sharp scored over 1,000 runs in a season",
      "Multiple centuries recorded across the team",
      "Several county cricketers represented the Club",
      "Death of President Canon C.W. Barnard"
    ],
    closingSummary: "1928 represented the peak of Sutton Coldfield's cricketing prowess.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Peak cricketing excellence, 1928.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1929",
    title: "Modernisation and the End of an Era",
    shortDescription: "Sir Alfred Evans assumed the presidency in 1929, bringing continuity with the Club's earliest traditions.",
    yearOverview: "Sir Alfred Evans assumed the presidency in 1929, bringing continuity with the Club's earliest traditions. Facilities took a major step forward with the installation of mains water at the pavilion, greatly improving player comfort. On the field, high-scoring matches and record partnerships continued, while long-standing customs such as Trinity Monday sports at Rectory Park came to an end.",
    keyEvents: [
      "Sir Alfred Evans appointed President",
      "Mains water installed at the pavilion",
      "Trinity Monday sports discontinued at Rectory Park",
      "Several record partnerships and high scores recorded"
    ],
    closingSummary: "1929 closed the decade with modern improvements and a sense of transition into a new era.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Modernisation at Rectory Park, 1929.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1930",
    title: "Continuity and Emerging Talent",
    shortDescription: "The year marked an important moment of administrative continuity and renewal for the club.",
    yearOverview: "The year marked an important moment of administrative continuity and renewal for the club. The retirement of R.T. \"Bob\" Janney as Honorary Secretary brought to a close a period of dedicated service, while the appointment of E.H. Walters ensured stability through his long-standing family association with Sutton Coldfield Cricket Club. On the field, the first eleven continued to demonstrate its traditional batting strength, producing several notable individual scores and partnerships. However, persistent poor weather, particularly later in the season, resulted in numerous abandoned fixtures and curtailed the team's ability to fully capitalise on its form.",
    keyEvents: [
      "Retirement of R.T. \"Bob\" Janney as Honorary Secretary",
      "Appointment of E.H. Walters to the role",
      "Strong first-team batting performances recorded",
      "Several matches abandoned due to adverse weather"
    ],
    closingSummary: "1930 combined administrative stability with promising on-field performances, despite significant disruption caused by the weather.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Cricket at Rectory Park, 1930.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1931",
    title: "Strength, Stability, and Success",
    shortDescription: "With E.H. Walters succeeding A.F. Leighton as captain, Sutton enjoyed one of its most successful seasons of the decade.",
    yearOverview: "With E.H. Walters succeeding A.F. Leighton as captain, Sutton enjoyed one of its most successful seasons of the decade. The first eleven displayed balance and consistency, combining solid batting with dependable bowling to achieve nine victories from seventeen matches, suffering only a single defeat. Leadership proved effective throughout the side, while individual performances, most notably N.E. Partridge's commanding 148 at Wolverhampton, highlighted the depth of talent available during a highly competitive and rewarding season.",
    keyEvents: [
      "E.H. Walters appointed first-team captain",
      "Nine victories achieved from seventeen fixtures",
      "Only one defeat recorded all season",
      "N.E. Partridge scored 148 at Wolverhampton"
    ],
    closingSummary: "1931 stood out as a season of exceptional consistency and achievement, firmly establishing Sutton as a leading side.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "A successful season at Rectory Park, 1931.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1932",
    title: "Loss, Renewal, and Investment",
    shortDescription: "The season was shaped by both reflection and forward planning.",
    yearOverview: "The season was shaped by both reflection and forward planning. The death of Jack Garland, who had served the club as an umpire for 25 years, marked the end of an era and was keenly felt throughout the club. His replacement, H.E. Robinson, ensured continuity in officiating standards. Strategically, Sutton declined an invitation to join the Birmingham League, opting instead to preserve its existing fixture programme. Investment in facilities continued with the installation of new sight screens at Rectory Park, improving conditions for players and spectators alike.",
    keyEvents: [
      "Death of Jack Garland after 25 years' service",
      "Appointment of H.E. Robinson as first eleven umpire",
      "Invitation to join the Birmingham League declined",
      "New sight screens installed at Rectory Park"
    ],
    closingSummary: "1932 balanced respect for long service with measured investment and strategic independence.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Rectory Park improvements, 1932.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1933",
    title: "Farewells and Transition",
    shortDescription: "1933 proved a year of transition, as several influential players approached the end of their first-team careers.",
    yearOverview: "1933 proved a year of transition, as several influential players approached the end of their first-team careers. The final regular appearances of J.B. Russell and E.B. Crockford, together with the retirement of C.E. Francis, signalled a gradual generational shift. Off the field, the demolition and reconstruction of the lower ground pavilion on a new site significantly altered the layout of Rectory Park. These changes reflected a club adapting to evolving needs while remaining mindful of its traditions.",
    keyEvents: [
      "Final regular seasons for J.B. Russell and E.B. Crockford",
      "Retirement of C.E. Francis from first-team cricket",
      "Demolition and rebuilding of the lower ground pavilion"
    ],
    closingSummary: "1933 marked a period of change, combining personal farewells with important structural development.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Transition and change at Rectory Park, 1933.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1934",
    title: "High Scoring and New Blood",
    shortDescription: "The season was notable for its attacking cricket and prolific run-scoring.",
    yearOverview: "The season was notable for its attacking cricket and prolific run-scoring. New players, including R.F. Barnes, became firmly established in the first eleven, strengthening an already formidable batting line-up. Matches throughout the Midlands frequently produced aggregate scores exceeding 500 runs, offering spectators some of the most entertaining cricket of the decade. Record partnerships against Knowle & Dorridge and Stafford highlighted both confidence and depth within the side.",
    keyEvents: [
      "R.F. Barnes fully established in the first team",
      "Numerous matches exceeded 500 aggregate runs",
      "Record partnerships achieved against Knowle & Dorridge and Stafford"
    ],
    closingSummary: "1934 showcased Sutton's batting strength and emerging talent in a season defined by high scoring.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "High-scoring cricket at Rectory Park, 1934.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1935",
    title: "A Difficult Campaign",
    shortDescription: "Results proved disappointing during a challenging season, with Sutton securing only three victories from a demanding fixture list.",
    yearOverview: "Results proved disappointing during a challenging season, with Sutton securing only three victories from a demanding fixture list. Despite this, individual performances continued to provide moments of distinction, and the renewal of the Free Foresters fixture brought high-quality opposition back to Rectory Park. The season also marked the retirement of F.B. Clark after 28 years of service, prompting reflection on the contributions of long-serving members during a period of on-field adversity.",
    keyEvents: [
      "Only three victories recorded during the season",
      "Free Foresters returned to Rectory Park",
      "Highest score at the ground recorded by the visitors",
      "Retirement of F.B. Clark after 28 years' service"
    ],
    closingSummary: "1935 tested the club's resilience, combining competitive difficulty with notable individual milestones.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "A challenging season at Rectory Park, 1935.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1936",
    title: "Weather and Wider Recognition",
    shortDescription: "One of the wettest summers on record severely disrupted the cricketing programme, with extended periods without play and numerous fixtures cancelled.",
    yearOverview: "One of the wettest summers on record severely disrupted the cricketing programme, with extended periods without play and numerous fixtures cancelled. Momentum proved difficult to sustain, and opportunities for competition were limited. Beyond the local game, however, the club achieved international recognition through Arthur G.K. Brown's success at the Berlin Olympic Games, where he won gold and silver medals, linking Sutton Coldfield Cricket Club to a moment of global sporting significance.",
    keyEvents: [
      "Prolonged weather disruption led to many abandoned matches",
      "Contrasting Bank Holiday fixtures against Ashfield",
      "Arthur G.K. Brown won Olympic gold and silver medals"
    ],
    closingSummary: "1936 combined local frustration with international distinction, as weather curtailed play but global success brought prestige.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Olympic glory amidst wet weather, 1936.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1937",
    title: "Honouring Service and Legacy",
    shortDescription: "The death of President Sir Alfred Evans ended an extraordinary 66-year association with the club, severing one of the last living links to its earliest years.",
    yearOverview: "The death of President Sir Alfred Evans ended an extraordinary 66-year association with the club, severing one of the last living links to its earliest years. His passing prompted reflection on Sutton's history and the individuals who had shaped it. In the same spirit, long-serving members received formal recognition, reinforcing the club's enduring respect for loyalty and service. Competitive cricket continued against established rivals, maintaining continuity amid commemoration.",
    keyEvents: [
      "Death of President Sir Alfred Evans",
      "R.S. Walters awarded Life Membership",
      "Continued fixtures against traditional rivals"
    ],
    closingSummary: "1937 reaffirmed the club's respect for its past and those who had sustained it over generations.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Honouring service and legacy, 1937.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1938",
    title: "Leadership and Security",
    shortDescription: "The appointment of Clifford Howl as first-team captain coincided with a highly successful season, as Sutton recorded ten victories and completed all fixtures without abandonment.",
    yearOverview: "The appointment of Clifford Howl as first-team captain coincided with a highly successful season, as Sutton recorded ten victories and completed all fixtures without abandonment. Effective leadership and favourable conditions contributed to a consistent campaign. Off the field, the purchase of Rectory Park by the Corporation secured the ground's future as an open space, ensuring the long-term stability of the club's home and marking a milestone in its history.",
    keyEvents: [
      "Clifford Howl elected first-team captain",
      "Ten victories achieved during the season",
      "No unfinished matches recorded",
      "Rectory Park purchased and preserved by the Corporation"
    ],
    closingSummary: "1938 was a landmark year, combining on-field success with long-term security.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "Success and security at Rectory Park, 1938.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1939",
    title: "An Abrupt End to an Era",
    shortDescription: "The season unfolded under the growing shadow of international conflict, with uncertainty increasingly shaping the cricketing calendar.",
    yearOverview: "The season unfolded under the growing shadow of international conflict, with uncertainty increasingly shaping the cricketing calendar. Early fixtures featured experimentation, including the trial introduction of the eight-ball over, and were marked by strong individual performances, particularly from Roy Baker. Following the declaration of war in September, remaining matches were cancelled, bringing both the season and a decade of peacetime cricket to an abrupt and sombre close.",
    keyEvents: [
      "Trial introduction of the eight-ball over",
      "Notable batting performances by Roy Baker",
      "Cancellation of fixtures following the outbreak of war"
    ],
    closingSummary: "1939 brought the decade to a sudden and poignant conclusion as cricket gave way to global events.",
    location: "Rectory Park, Sutton Coldfield",
    imageCaption: "The final season before war, 1939.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      image_46b1b5438f7230b782958ef739cc53489cee10a2,
      image_ce487aeba746213d558fe22e4f7adf80db910680,
    ],
  },
  {
    year: "1942",
    title: "Wartime Charity Matches",
    shortDescription: "The club organized charity matches to support war relief efforts during World War II.",
    fullDescription: "During World War II, Sutton Coldfield Cricket Club adapted once again to wartime conditions. In 1942, with many members serving in the forces, the club organized a series of charity matches to raise funds for war relief and to support local families affected by the conflict. Matches featured available club members, Home Guard units, and visiting servicemen stationed nearby. Despite rationing and restrictions, these matches attracted good crowds and raised over £500 for the war effort. The pavilion was used as a collection point for donated goods, and the club organized social events to boost morale. Women took on leadership roles, managing the grounds and organizing activities. These wartime efforts strengthened community bonds and demonstrated cricket's power to unite people during difficult times.",
    location: "Sutton Park Cricket Ground",
    imageCaption: "Charity match during wartime, 1942.",
    backgroundImage: image_6a586d7a29e4b109fed30896e7cb6b0ce51df103,
    images: [
      "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd2lja2V0cyUyMHN0dW1wc3xlbnwxfHx8fDE3NjgzMDczMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1948",
    title: "New Ground Opening",
    shortDescription: "The club inaugurated its own dedicated cricket ground in Sutton Coldfield, complete with modern facilities and a pavilion.",
    fullDescription: "On a sunny May morning in 1948, our club opened the gates to its very own cricket ground in the heart of Sutton Coldfield - a dream that had been decades in the making. The 15-acre facility featured a pristine turf pitch, a modern two-story pavilion with changing rooms and a members' lounge, and seating for 2,000 spectators. The opening ceremony was attended by cricket legends and local dignitaries from across the West Midlands, with a special exhibition match that showcased the finest talent from the region. The ground was designed with both players and spectators in mind, featuring excellent sightlines and state-of-the-art drainage systems. This investment represented not just a physical space, but a commitment to nurturing cricket in Sutton Coldfield for generations to come.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "The newly opened Sutton Coldfield Cricket Ground, May 1948.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      "https://images.unsplash.com/photo-1596807996038-612df413be5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwd29tZW4lMjBwbGF5ZXJzfGVufDF8fHx8MTc2ODI5NTQwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2ODE5MjAzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1952",
    title: "First Overseas Players",
    shortDescription: "The club welcomed its first overseas players from Australia and India, enriching the cricket culture.",
    fullDescription: "In 1952, Sutton Coldfield Cricket Club embraced international cricket culture by welcoming its first overseas players. Australian all-rounder Jack Morrison and Indian spinner Raj Patel joined the club for the summer season, bringing new techniques and perspectives. Morrison had played first-class cricket in Sydney, while Patel had represented his state team in India. Their presence elevated the standard of play and attracted larger crowds. They conducted coaching clinics, sharing knowledge with junior players. The overseas players also enriched the club's social life, sharing stories and traditions from their home countries. This initiative established a tradition of hosting overseas players that continues today, strengthening the club's international connections and broadening members' understanding of cricket's global reach.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Overseas players at practice session, 1952.",
    backgroundImage: "https://images.unsplash.com/photo-1743612135955-7ec949bfa2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmllbGQlMjBoaXN0b3JpY3xlbnwxfHx8fDE3NjgzMDg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29hY2hpbmclMjB5b3V0aHxlbnwxfHx8fDE3NjgzMDczMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1958",
    title: "Women's Team Formation",
    shortDescription: "The club established its first women's cricket team, pioneering gender equality in local cricket.",
    fullDescription: "In 1958, Sutton Coldfield Cricket Club took a progressive step by forming its first women's cricket team, becoming one of the early adopters of women's cricket in the Midlands. Led by founding captain Helen Patterson, the team began with 15 enthusiastic players and quickly established itself in the Birmingham Women's Cricket League. The club invested in equal facilities, coaching, and equipment for the women's team, setting a standard for inclusivity. By the end of their first season, the team had won five matches and earned respect throughout the region. The women's section grew rapidly, eventually fielding multiple teams across different age groups. This initiative not only expanded the club's reach but also demonstrated its commitment to making cricket accessible to everyone in Sutton Coldfield, regardless of gender. Many players from those early years went on to represent Warwickshire Women.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "The inaugural women's team, 1958.",
    backgroundImage: "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1743342398244-c8c5a307d290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3BvbnNvciUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2ODI5NTYyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZpZWxkfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1962",
    title: "Indoor Cricket Nets",
    shortDescription: "Installation of the club's first indoor practice nets, enabling year-round training.",
    fullDescription: "In 1962, Sutton Coldfield Cricket Club made a significant investment in player development by constructing indoor practice nets adjacent to the main pavilion. The facility featured two full-length nets with artificial surfaces, allowing cricketers to practice throughout the winter months for the first time. The £8,000 project was funded through member contributions and a grant from the local council. Professional coaching sessions were immediately organized, and the nets quickly became popular with players of all ages. The indoor facility gave the club a competitive advantage, as players could maintain and improve their skills year-round. Junior players particularly benefited, with dedicated coaching sessions every weekend. The indoor nets also generated revenue through rental to local schools and other cricket clubs, helping fund further improvements.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Players using the new indoor nets, 1962.",
    backgroundImage: "https://images.unsplash.com/photo-1758791184255-411236a49346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2ODMwNzMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1582617578126-4bdcead11e80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbmV0cyUyMHByYWN0aWNlfGVufDF8fHx8MTc2ODMwNzMxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1968",
    title: "Major Sponsorship Partnership",
    shortDescription: "Securing the club's first major corporate sponsor, enabling significant infrastructure improvements.",
    fullDescription: "In 1968, Sutton Coldfield Cricket Club entered a new era of financial stability by securing its first major corporate sponsorship with Midlands Engineering Group, a prominent Birmingham-based company. The five-year partnership provided £25,000 annually, transforming the club's capabilities. The sponsorship funded essential upgrades including practice net facilities, a new groundskeeping equipment shed, improved drainage systems, and professional coaching sessions. In return, the club provided hospitality and promotional opportunities for the sponsor's clients and employees. Club chairman Richard Thompson negotiated the deal, which became a model for other local sports clubs. The partnership also raised the club's profile in the business community, attracting additional sponsors and supporters. This collaboration demonstrated how cricket clubs could benefit from corporate partnerships while maintaining their community values and independent governance.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Sponsorship announcement ceremony, 1968.",
    backgroundImage: "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2hhbXBpb25zaGlwfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1630740451344-3ee2cdcfe070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwYmFsbCUyMHNwb3J0fGVufDF8fHx8MTc2ODI5MjU2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1972",
    title: "Clubhouse Expansion",
    shortDescription: "A major renovation doubled the clubhouse space, adding a bar, kitchen, and function room.",
    fullDescription: "By 1972, Sutton Coldfield Cricket Club had outgrown its original pavilion facilities. A major renovation and expansion project doubled the clubhouse space, adding a fully licensed bar, modern kitchen facilities, and a large function room capable of hosting 150 people. The £35,000 project was funded through member loans, fundraising events, and a substantial donation from a club patron. Local architect Jennifer Hughes designed the extension to blend with the original Victorian structure while providing modern amenities. The new facilities transformed the club's social life and revenue potential. The function room hosted weddings, corporate events, and community gatherings, providing steady income. The expanded bar became a popular post-match destination. The project demonstrated the club's ambition to be not just a sporting venue but a true community hub in Sutton Coldfield.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "The expanded clubhouse after renovation, 1972.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      "https://images.unsplash.com/photo-1701766993323-cc05898df2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY2x1YmhvdXNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4MzA3MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1755870191058-4f3bca31d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwaGlzdG9yaWMlMjBncm91bmRzfGVufDF8fHx8MTc2ODMwNzMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    year: "1978",
    title: "Youth Academy Launch",
    shortDescription: "Establishing a comprehensive youth development program to nurture the next generation of Sutton Coldfield cricketers.",
    fullDescription: "Recognizing the importance of investing in young talent, Sutton Coldfield Cricket Club launched its Youth Academy in 1978. The program was designed to identify and develop promising cricketers from across Sutton Coldfield and the surrounding areas, aged 8-18, providing professional coaching, fitness training, and competitive opportunities. The academy's curriculum balanced technical skill development with character building and sportsmanship. Within its first decade, the academy produced over 20 players who went on to represent Warwickshire and other county teams. The initiative also made cricket accessible to children from all backgrounds in Sutton Coldfield through scholarship programs. Today, many of our first-team players are proud graduates of the academy, and the program continues to be a cornerstone of the club's mission to promote cricket excellence.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Young cricketers during academy training session, 1978.",
    backgroundImage: "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1750716413349-df33aeca8429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmxvb2RsaWdodHMlMjBzdGFkaXVtfGVufDF8fHx8MTc2ODI5NTQwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZpZWxkfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1982",
    title: "All-Weather Pitch Installation",
    shortDescription: "The club installed its first all-weather practice pitch for reliable training in any conditions.",
    fullDescription: "In 1982, Sutton Coldfield Cricket Club installed its first all-weather practice pitch, a synthetic surface that could be used in any weather conditions. The innovation addressed the perennial problem of cancelled practice sessions due to rain or wet grounds. The pitch, located adjacent to the main playing area, featured a high-quality carpet surface over a shock-absorbing base, providing realistic bounce and pace. The £12,000 investment was funded by club reserves and a Sport England grant. The all-weather pitch immediately proved its worth, with junior coaching sessions continuing throughout the wet spring of 1983. It also enabled midweek evening practice for working members. Local schools began using the facility during the day, creating new community connections and a modest revenue stream for the club.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "The new all-weather pitch in use, 1982.",
    backgroundImage: "https://images.unsplash.com/photo-1743612135955-7ec949bfa2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmllbGQlMjBoaXN0b3JpY3xlbnwxfHx8fDE3NjgzMDg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1758791184255-411236a49346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2ODMwNzMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1988",
    title: "Floodlight Installation",
    shortDescription: "State-of-the-art floodlighting system installed, enabling evening matches and extending the cricket season.",
    fullDescription: "The summer of 1988 saw Sutton Coldfield Cricket Club take another leap forward with the installation of a professional-grade floodlighting system. The six 30-meter pylons, each equipped with powerful lights, illuminated the entire playing area to high standards. This £85,000 investment was partially funded by Sport England grants and enabled the club to host evening fixtures, attracting working professionals who couldn't attend daytime matches. The first floodlit match drew over 1,000 spectators, creating an electric atmosphere unlike anything the ground had experienced before. The lights also allowed for extended practice sessions during winter months and made the ground available for community events year-round. This enhancement significantly increased the club's profile, enabling it to host regional competitions and representative matches. The floodlights quickly became an iconic landmark in Sutton Coldfield.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "The ground illuminated for the first evening match, 1988.",
    backgroundImage: "https://images.unsplash.com/photo-1540390874431-6107572227d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc2ODIxNTU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1709134800864-15d9d04bc1f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29tbXVuaXR5JTIwcHJvZ3JhbXxlbnwxfHx8fDE3NjgyOTU2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwanuionJTIweW91dGh8ZW58MXx8fHwxNzY4Mjk1NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "1992",
    title: "ECB Clubmark Accreditation",
    shortDescription: "The club achieved ECB Clubmark status, recognizing excellence in youth cricket development.",
    fullDescription: "In 1992, Sutton Coldfield Cricket Club became one of the first cricket clubs in the West Midlands to achieve ECB Clubmark accreditation. This prestigious recognition acknowledged the club's commitment to child protection, coaching standards, and youth development. Achieving Clubmark required extensive documentation, qualified coaches with proper certifications, and robust safeguarding policies. The accreditation was led by youth coordinator David Chen, who spent 18 months ensuring all requirements were met. Clubmark status helped the club secure additional funding from Sport England and local authorities, enabling expansion of youth programs. It also reassured parents about the quality and safety of the club's youth cricket. The accreditation attracted new junior members and strengthened partnerships with local schools, establishing Sutton Coldfield Cricket Club as a model for youth cricket development.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Clubmark accreditation presentation, 1992.",
    backgroundImage: "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2hhbXBpb25zaGlwfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwYXdhcmRzfGVufDF8fHx8MTc2ODMwNzMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29hY2hpbmclMjB5b3V0aHxlbnwxfHx8fDE3NjgzMDczMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    year: "1998",
    title: "Community Outreach Programs",
    shortDescription: "Launching cricket programs for underserved communities and disability cricket initiatives.",
    fullDescription: "In 1998, Sutton Coldfield Cricket Club demonstrated its commitment to social responsibility by launching comprehensive community outreach programs. The initiatives included free cricket sessions for children from economically disadvantaged backgrounds in partnership with Sutton Coldfield Community Trust, a disability cricket program welcoming players with physical and learning disabilities, and coaching clinics at local primary schools. Led by community officer Jennifer Williams, the programs reached over 250 participants in their first year. The club also established the 'Street to Pitch' program, working with youth social services to engage at-risk teenagers through cricket. These initiatives not only introduced cricket to new audiences but also provided mentorship, confidence-building, and positive role models. Several participants went on to join the club's regular teams. The programs received recognition from the England and Wales Cricket Board.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Community outreach cricket session, 1998.",
    backgroundImage: "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2ODE5MjAzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2hhbXBpb25zaGlwfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "2001",
    title: "Millennium Pavilion Rebuild",
    shortDescription: "A complete rebuild of the main pavilion created a modern, accessible facility for the 21st century.",
    fullDescription: "As Sutton Coldfield Cricket Club entered the new millennium, it embarked on its most ambitious building project yet - a complete rebuild of the main pavilion. The original 1948 structure, while cherished, had become outdated and needed extensive repairs. The new £250,000 pavilion, completed in 2001, featured full disability access, modern changing facilities, a larger viewing gallery with climate control, improved catering facilities, and dedicated spaces for coaching and meetings. The design, by Birmingham architects Morrison & Partners, honored the club's heritage while incorporating contemporary amenities. Funding came from lottery grants, member contributions, and corporate sponsors. The rebuild required the club to relocate to temporary facilities for one season, testing member loyalty. The reopening ceremony in May 2001 was attended by over 400 people and featured a match against Warwickshire legends.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "The newly rebuilt pavilion, 2001.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      "https://images.unsplash.com/photo-1701766993323-cc05898df2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY2x1YmhvdXNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY4MzA3MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1764926125989-ae0acf67fbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmllbGQlMjBhZXJpYWx8ZW58MXx8fHwxNzY4MzA3MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    year: "2006",
    title: "National Tournament Win",
    shortDescription: "The club achieved its greatest triumph by winning the prestigious National Club Championship at Lord's.",
    fullDescription: "The 2006 season will forever be remembered as Sutton Coldfield Cricket Club's finest hour. After a grueling tournament spanning six months, our team reached the National Club Championship final. The match was played at the iconic Lord's Cricket Ground in front of a capacity crowd, with hundreds of supporters making the journey from Sutton Coldfield. In a nail-biting finish, our all-rounder Sarah Mitchell hit the winning runs off the final ball of the match, securing victory by just two wickets. The campaign featured outstanding performances from the entire squad, with particular mention to our fast bowler Marcus Thompson, who took 35 wickets throughout the tournament. This historic win put Sutton Coldfield Cricket Club on the national map and inspired a new generation of members. The victory parade through Sutton Coldfield town centre was attended by over 8,000 supporters.",
    location: "Lord's Cricket Ground",
    imageCaption: "Team celebrating the national championship victory, 2006.",
    backgroundImage: "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2hhbXBpb25zaGlwfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1719256383688-305c0c00d179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc29sYXIlMjBwYW5lbHN8ZW58MXx8fHwxNzY4Mjk1NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZpZWxkfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "2010",
    title: "Twenty20 League Champions",
    shortDescription: "The club won the Birmingham Twenty20 League in the format's inaugural season at the club.",
    fullDescription: "In 2010, Sutton Coldfield Cricket Club entered its first Twenty20 competition and immediately made an impact by winning the Birmingham Twenty20 League championship. The shorter format attracted new, younger supporters who enjoyed the faster-paced, evening matches under floodlights. Captain Michael Roberts led a dynamic squad that combined experienced players with exciting young talent from the academy. The final against Moseley Cricket Club was a thriller, with the club securing victory with just two balls remaining. Fast bowler Jamal Khan took 3 wickets in the final over to seal the win. The Twenty20 success brought media attention and new sponsors, while Friday evening matches became popular social events. The club invested in improved entertainment and hospitality for these matches, creating a festival atmosphere that attracted families and younger audiences.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Twenty20 championship celebration, 2010.",
    backgroundImage: "https://images.unsplash.com/photo-1540390874431-6107572227d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc2ODIxNTU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2ODE5MjAzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwYXdhcmRzfGVufDF8fHx8MTc2ODMwNzMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    year: "2013",
    title: "Environmental Sustainability Initiative",
    shortDescription: "Installing solar panels and implementing eco-friendly practices to become a carbon-neutral cricket club.",
    fullDescription: "In 2013, Sutton Coldfield Cricket Club became one of the first sports clubs in the Midlands to commit to environmental sustainability. The club installed 120 solar panels on the pavilion roof, generating 60% of the ground's electricity needs. A rainwater harvesting system was implemented for pitch irrigation, reducing water consumption by 40%. LED lighting replaced traditional bulbs throughout facilities, and the club switched to electric groundskeeping equipment. The initiative also included recycling programs, eliminating single-use plastics from the clubhouse, and planting 50 trees around the boundary. Club environmental officer Dr. Sarah Chen led the project, which cost £75,000 but promised long-term savings and environmental benefits. The club received the ECB Green Club Award and became a case study for sustainable sports facility management.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Solar panel installation on pavilion, 2013.",
    backgroundImage: "https://images.unsplash.com/photo-1758791184255-411236a49346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmF0JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2ODMwNzMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29hY2hpbmclMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjgyOTU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZXF1aXBtZW50JTIwZ2VhcnxlbnwxfHx8fDE3NjgyOTU0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "2016",
    title: "All Stars Cricket Program",
    shortDescription: "Launch of ECB All Stars Cricket for 5-8 year olds, introducing hundreds of children to the game.",
    fullDescription: "In 2016, Sutton Coldfield Cricket Club became an ECB All Stars Cricket Centre, launching a program designed to introduce cricket to children aged 5-8. The initiative transformed youth engagement at the club. Using fun, inclusive activities and child-friendly equipment, the program made cricket accessible to complete beginners. Each participant received an All Stars kit including bat, ball, t-shirt, and cap. Sessions ran for eight weeks each summer, led by qualified activators trained in child engagement. The first year attracted 45 children; by 2020, over 150 were enrolled annually. Many All Stars graduates progressed to the club's junior teams. The program also brought new families into the club community, with parents often becoming volunteers, supporters, or social members. All Stars Cricket became a cornerstone of the club's youth development pathway.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "All Stars Cricket session, 2016.",
    backgroundImage: "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwY29hY2hpbmclMjB5b3V0aHxlbnwxfHx8fDE3NjgzMDczMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "2020",
    title: "High-Performance Coaching Centre",
    shortDescription: "Opening of a dedicated coaching facility with indoor nets and sports science support for player development.",
    fullDescription: "In 2020, Sutton Coldfield Cricket Club opened its High-Performance Coaching Centre, a cutting-edge facility designed to develop cricketers of all ages and abilities. The £450,000 complex featured four indoor nets, video analysis suites, a strength and conditioning gym, and sports science laboratories. Professional coaches, including former county players, were recruited to deliver year-round programs. The centre attracted partnerships with local schools and Warwickshire County Cricket Club, becoming a hub for cricket development across the region. Within two years, over 180 young cricketers were enrolled in regular coaching programs. The facility also provided a home for rehabilitation work and pre-season training. This investment demonstrated the club's evolution from a traditional amateur club into a professional development organization while maintaining its community values.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Players training in the new coaching centre, 2020.",
    backgroundImage: "https://images.unsplash.com/photo-1743612135955-7ec949bfa2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmllbGQlMjBoaXN0b3JpY3xlbnwxfHx8fDE3NjgzMDg4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZpZWxkfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "2023",
    title: "Digital Transformation",
    shortDescription: "Launch of live streaming, online membership, and digital scoring systems to modernize the club experience.",
    fullDescription: "In 2023, Sutton Coldfield Cricket Club accelerated its digital transformation. The club invested in professional live-streaming equipment, allowing supporters worldwide to watch games online. The system included multiple camera angles, live commentary, and interactive graphics. Simultaneously, the club launched a new website and mobile app offering online membership registration, booking systems for facilities, and digital scorecards updated in real-time. Social media presence expanded dramatically, with behind-the-scenes content, player interviews, and match highlights reaching tens of thousands. The club also introduced virtual coaching sessions and online fitness programs. This technological leap positioned Sutton Coldfield Cricket Club at the forefront of modern amateur sports organizations, enhancing both the in-person and digital experience for members and supporters.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Live streaming setup during a match, 2023.",
    backgroundImage: "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2hhbXBpb25zaGlwfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1759733841123-b8e1d75ee45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGZpZWxkfGVufDF8fHx8MTc2ODI5MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1685541001104-91fe7ae1d8e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY3JpY2tldCUyMGhpc3RvcmljfGVufDF8fHx8MTc2ODI5MjU2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    year: "2024",
    title: "Women's Premier Division Promotion",
    shortDescription: "The women's first team earned promotion to the Midlands Premier Division after an unbeaten season.",
    fullDescription: "The 2024 season was a landmark year for women's cricket at Sutton Coldfield Cricket Club. The women's first team, led by captain Emma Richardson, completed an unbeaten season to win the Midlands Division One title and earn promotion to the Premier Division. The team won all 16 league matches, with outstanding contributions from opening batter Priya Sharma (732 runs at an average of 91.5) and spin bowler Katie Morrison (43 wickets). The achievement was the culmination of years of investment in women's cricket, including dedicated coaching, improved facilities, and a pathway from junior to senior level. The promotion brought the women's team to the same competitive level as the men's first team, who also competed in the Premier Division. A celebration dinner attended by over 200 people honored the team's historic achievement.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Women's team celebrating promotion, 2024.",
    backgroundImage: "https://images.unsplash.com/photo-1765429154824-b4a7dd58f7c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwcGxheWVycyUyMGFjdGlvbnxlbnwxfHx8fDE3NjgyMDc5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1624897174291-1bd715e371d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdGVhbSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2ODE5MjAzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwYXdhcmRzfGVufDF8fHx8MTc2ODMwNzMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  {
    year: "2026",
    title: "150th Anniversary Celebrations",
    shortDescription: "The club celebrates 150 years of cricket excellence with a year-long festival and legacy projects.",
    fullDescription: "As Sutton Coldfield Cricket Club approaches its 150th anniversary in 2030, the 2026 season launched the beginning of the quinquennial celebrations. The club announced plans for a year-long festival in 2030 featuring matches against international touring teams, reunion events for former players, and a gala dinner at Birmingham's International Convention Centre. Legacy projects were also unveiled, including a Heritage Centre to preserve the club's archives, a hardship fund to support cricketers facing financial difficulties, and scholarships for talented young players from disadvantaged backgrounds. The club commissioned a comprehensive history book, partnered with local schools to introduce cricket to 1,000 children, and planned a community cricket festival. These celebrations honor the past while investing in the future, ensuring Sutton Coldfield Cricket Club thrives for another 150 years.",
    location: "Sutton Coldfield Cricket Ground",
    imageCaption: "Launch of 150th anniversary plans, 2026.",
    backgroundImage: image_65cb835619675e0e12e9db52c4d551c17ab4090f,
    images: [
      "https://images.unsplash.com/photo-1764926125989-ae0acf67fbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZmllbGQlMjBhZXJpYWx8ZW58MXx8fHwxNzY4MzA3MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1755870191058-4f3bca31d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwaGlzdG9yaWMlMjBncm91bmRzfGVufDF8fHx8MTc2ODMwNzMxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
];

function TimelinePage() {
  const [currentItemIndex, setCurrentItemIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items
  const [visibleStates, setVisibleStates] = useState<boolean[]>(new Array(timelineData.length).fill(false));
  
  // Calculate min and max years from timeline data
  const allYears = timelineData.map(item => parseInt(item.year));
  const minYear = Math.min(...allYears);
  const maxYear = Math.max(...allYears);
  // Round min year down to nearest decade for slider
  const minDecade = Math.floor(minYear / 10) * 10;
  // Round max year up to nearest decade for slider
  const maxDecade = Math.ceil(maxYear / 10) * 10;
  
  const [sliderDecade, setSliderDecade] = useState(minDecade);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [isSliderAbsolute, setIsSliderAbsolute] = useState(false);
  const [sliderBottomOffset, setSliderBottomOffset] = useState(0);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const navigate = useNavigate();

  const handleOpenItem = (index: number) => {
    setCurrentItemIndex(index);
  };

  const handleNext = () => {
    if (currentItemIndex !== null && currentItemIndex < timelineData.length - 1) {
      const nextIndex = currentItemIndex + 1;
      
      // Ensure the next item is loaded before navigating to it
      if (nextIndex >= visibleItems) {
        setVisibleItems(nextIndex + 1); // Load up to next item
      }
      
      setCurrentItemIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    if (currentItemIndex !== null && currentItemIndex > 0) {
      const prevIndex = currentItemIndex - 1;
      
      // Ensure the previous item is loaded (should already be, but just in case)
      if (prevIndex >= visibleItems) {
        setVisibleItems(prevIndex + 1);
      }
      
      setCurrentItemIndex(prevIndex);
    }
  };

  const handleClose = () => {
    setCurrentItemIndex(null);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Intersection Observer for lazy loading more items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleItems < timelineData.length) {
          setVisibleItems((prev) => Math.min(prev + 3, timelineData.length));
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '400px'
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleItems]);

  // Intersection Observer for fade-in animations on individual items
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleStates((prev) => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );

    // Observe all currently rendered items
    itemRefs.current.slice(0, visibleItems).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleItems]);

  // Function to scroll to a specific decade
  const scrollToDecade = (decade: string) => {
    const decadeStart = parseInt(decade);
    const targetItem = timelineData.find(item => {
      const year = parseInt(item.year);
      return year >= decadeStart && year < decadeStart + 10;
    });

    if (targetItem) {
      const index = timelineData.indexOf(targetItem);
      const ref = itemRefs.current[index];
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Function to scroll to nearest year based on slider
  const handleSliderChange = (year: number) => {
    // Update slider position immediately for responsive feel
    setSliderDecade(year);
    
    // Clear any pending scroll timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Debounce the actual scrolling to avoid jank during dragging
    scrollTimeoutRef.current = window.setTimeout(() => {
      // Find the closest timeline item to the selected year
      const closestItem = timelineData.reduce((prev, curr) => {
        const prevDiff = Math.abs(parseInt(prev.year) - year);
        const currDiff = Math.abs(parseInt(curr.year) - year);
        return currDiff < prevDiff ? curr : prev;
      });

      const index = timelineData.indexOf(closestItem);
      
      // Ensure timeline items are loaded up to this index before scrolling
      if (index >= visibleItems) {
        setVisibleItems(index + 2); // Load up to target + 2 more items
      }
      
      // Use a small delay to ensure items are rendered
      setTimeout(() => {
        const ref = itemRefs.current[index];
        if (ref) {
          // Scroll with an offset to account for fixed elements
          const yOffset = -100;
          const element = ref;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }, 150); // Debounce by 150ms - only scroll after user stops dragging
  };

  // Scroll listener to detect when user scrolls on mobile
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show slider when scrolled past 50px
      if (scrollY > 50) {
        setIsScrolled(true);
        setIsSliderVisible(true);
      } else {
        setIsScrolled(false);
        setIsSliderVisible(false);
      }

      // Check if we're near the footer and calculate offset
      if (footerRef.current) {
        const footerTop = footerRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Calculate how much to push the slider up when footer is visible
        if (footerTop < windowHeight) {
          const overlap = windowHeight - footerTop;
          setSliderBottomOffset(overlap);
        } else {
          setSliderBottomOffset(0);
        }
      }

      // Update slider position based on which timeline item is in the viewport
      const viewportCenter = scrollY + window.innerHeight / 2;
      
      // Find the timeline item closest to the center of the viewport
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const itemCenter = rect.top + window.scrollY + rect.height / 2;
          const distance = Math.abs(itemCenter - viewportCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      // Update slider to match the visible year
      if (timelineData[closestIndex]) {
        const year = parseInt(timelineData[closestIndex].year);
        // Round to nearest decade for slider
        const decade = Math.floor(year / 10) * 10;
        setSliderDecade(decade);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleItems]);

  return (
    <div className="min-h-screen bg-white">
      {/* Menu Bar */}
      <MenuBar isScrolled={isScrolled} />

      {/* Hero Header */}
      <header className="bg-[#1a472a] text-white py-20 px-8 relative overflow-hidden mt-[77px]">
        {/* Background image with low opacity */}
        <div 
          className="absolute inset-0 bg-cover opacity-20"
          style={{ backgroundImage: `url(${bannerImage})`, backgroundPosition: 'center 40%' }}
        />
        
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl mb-4 font-['Archivo_Black',sans-serif]">Our Journey Through Time</h1>
          <p className="text-xl opacity-90">A Century of Cricket Excellence Since 1880</p>
        </div>
      </header>

      {/* Timeline Section */}
      <main className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Follow Our Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the milestones that have shaped our club's rich history. Click on any event to discover more photos and stories.
            </p>
          </div>

          {/* Timeline container with central line */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-40 w-0.5 bg-gray-300 -translate-x-1/2 z-0" />

            {/* Timeline items */}
            {timelineData.slice(0, visibleItems).map((item, index) => (
              <div key={item.year} ref={(el) => (itemRefs.current[index] = el)}>
                <TimelineItem
                  year={item.year}
                  title={item.title}
                  shortDescription={item.shortDescription}
                  yearOverview={item.yearOverview}
                  keyEvents={item.keyEvents}
                  closingSummary={item.closingSummary}
                  fullDescription={item.fullDescription}
                  location={item.location}
                  imageCaption={item.imageCaption}
                  images={item.images}
                  video={item.video}
                  backgroundImage={item.backgroundImage}
                  position={index % 2 === 0 ? "left" : "right"}
                  isOpen={currentItemIndex === index}
                  onOpen={() => handleOpenItem(index)}
                  onClose={handleClose}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  hasNext={index < timelineData.length - 1}
                  hasPrevious={index > 0}
                  isVisible={visibleStates[index]}
                />
              </div>
            ))}
            {/* Lazy load trigger - optimized for mobile detection */}
            <div ref={loadMoreRef} className="h-40 -mt-20 flex flex-col md:flex-row items-center justify-center pt-40 pb-20 gap-4 md:gap-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center justify-center gap-3 bg-[#8B1538] hover:bg-[#6B0F2A] text-white px-10 py-5 font-['Helvetica',sans-serif] text-lg font-semibold transition-colors w-full md:w-auto relative z-10"
              >
                Back to the Start
              </button>
              <button
                onClick={() => navigate('/decades')}
                className="flex items-center justify-center gap-3 bg-white hover:bg-[#8B1538] text-[#8B1538] hover:text-white border-2 border-[#8B1538] px-10 py-5 font-['Helvetica',sans-serif] text-lg font-semibold transition-colors w-full md:w-auto"
              >
                Go to All Decades
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[#1a472a] text-white pt-12 px-8 mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Club Information */}
          <div className="text-center pb-12">
            <p className="font-['Georgia',serif] text-xl mb-3">
              Sutton Coldfield Cricket Club
            </p>
            <p className="font-['Georgia',serif] text-base opacity-80">
              Celebrating Over 140 Years of Cricket Excellence
            </p>
          </div>
          
          {/* Designer Credit */}
          <div className="border-t border-white/20 pt-5 md:pt-6 pb-0 bg-[#0d1f14] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            <div className="max-w-6xl mx-auto pb-5 md:pb-6 px-4 md:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                {/* Left: Designer Info */}
                <div className="text-center md:text-left">
                  <p className="font-['Arial','Helvetica',sans-serif] text-xs uppercase tracking-widest opacity-40 mb-2 letter-spacing-wide">
                    Website Design & Development
                  </p>
                  <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 justify-center md:justify-start">
                    <p className="font-['Arial','Helvetica',sans-serif] font-bold text-base text-white opacity-60">
                      John Bell
                    </p>
                    <span className="hidden md:inline opacity-30">|</span>
                    <p className="font-['Arial','Helvetica',sans-serif] text-xs opacity-60 mt-1 md:mt-0">
                      Graphic Design · Branding, Print & Web
                    </p>
                  </div>
                </div>
                
                {/* Right: Contact Info */}
                <div className="flex flex-row items-center gap-2 md:gap-4 text-xs w-full md:w-auto justify-center md:justify-start flex-wrap">
                  <a 
                    href="mailto:johnpbell7@gmail.com" 
                    className="font-['Arial','Helvetica',sans-serif] hover:text-white transition-colors opacity-60 hover:opacity-100 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="break-all">johnpbell7@gmail.com</span>
                  </a>
                  <span className="opacity-30">|</span>
                  <a 
                    href="tel:+447428728780" 
                    className="font-['Arial','Helvetica',sans-serif] hover:text-white transition-colors opacity-60 hover:opacity-100 flex items-center gap-2"
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

      {/* Sticky Decade Slider Footer */}
      <div 
        className={`fixed left-0 right-0 bg-white z-30 py-3 sm:py-3 border-t border-gray-50 transition-all duration-500 ${
          isSliderVisible ? 'translate-y-0' : 'translate-y-full'
        } ${
          isScrolled ? 'shadow-[0_-4px_16px_rgba(0,0,0,0.1)]' : ''
        }`}
        style={{ bottom: sliderBottomOffset }}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          <div className="relative py-2">
            {/* Slider track - same height as button */}
            <div className="relative h-12 sm:h-9 bg-gray-100 rounded-full shadow-inner mx-6 sm:mx-6">
              {/* Active track - subtle green */}
              <div 
                className="absolute h-full bg-green-50 rounded-full"
                style={{ 
                  width: `${((sliderDecade - minDecade) / (maxDecade - minDecade)) * 100}%` 
                }}
              />
              
              {/* Decade markers as lines - thinner, without end markers */}
              {Array.from({ length: Math.floor((maxDecade - minDecade) / 10) }, (_, i) => minDecade + (i + 1) * 10).map((decade) => {
                const position = ((decade - minDecade) / (maxDecade - minDecade)) * 100;
                const isKeyDecade = decade % 20 === 0;
                return (
                  <div
                    key={decade}
                    className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-400 cursor-pointer hover:bg-gray-600 transition-colors ${
                      isKeyDecade 
                        ? 'w-px h-8 sm:h-6' 
                        : 'w-px h-6 sm:h-5 hidden sm:block'
                    }`}
                    style={{ left: `${position}%` }}
                    onClick={() => handleSliderChange(decade)}
                    title={`${decade}s`}
                  />
                );
              })}
            </div>

            {/* Slider handle */}
            <input
              type="range"
              min={minDecade}
              max={maxDecade}
              step="10"
              value={sliderDecade}
              onChange={(e) => handleSliderChange(parseInt(e.target.value))}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
              style={{ margin: 0 }}
            />
            
            {/* Slider thumb (visible handle) - cricket ball button positioned from start to end */}
            <div
              className="absolute top-1/2 w-12 h-12 sm:w-9 sm:h-9 border-[3px] sm:border-4 border-white rounded-full shadow-2xl pointer-events-none z-10 overflow-hidden transition-all duration-100 ease-out"
              style={{ 
                left: `calc(1.5rem + (100% - 3rem) * ${((sliderDecade - minDecade) / (maxDecade - minDecade))})`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 0 3px rgba(139, 21, 56, 0.2), 0 8px 16px rgba(0,0,0,0.2)',
                willChange: 'left'
              }}
            >
              <img 
                src={cricketBallIcon} 
                alt="" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Decade labels - reduced spacing */}
          <div className="relative mt-1.5 sm:mt-1.5 flex justify-between text-[11px] sm:text-xs text-[#6A7282] font-['Georgia',serif] px-12 sm:px-12">
            {Array.from({ length: 9 }, (_, i) => {
              const decade = minDecade + (i * (maxDecade - minDecade) / 8);
              const isKeyLabel = i % 2 === 0; // Show every other label on mobile
              return (
                <span key={i} className={`text-center font-semibold ${isKeyLabel ? '' : 'hidden sm:inline'}`}>
                  {Math.round(decade)}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  (window as any).navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const getPage = () => {
    if (currentPath === '/') return <HomePage />;
    if (currentPath === '/journey') return <TimelinePage />;
    if (currentPath === '/timeline') return <TimelinePage />;
    if (currentPath === '/decades' || currentPath === '/view-all-decades') return <DecadesOverview />;
    if (currentPath.startsWith('/decades/')) return <DecadePage />;
    if (currentPath === '/first-fifty-years') return <FirstFiftyYears />;
    if (currentPath === '/teams') return <MeetTheTeams />;
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/obituaries') return <Obituaries />;
    return <HomePage />;
  };

  return <>{getPage()}</>;
}
