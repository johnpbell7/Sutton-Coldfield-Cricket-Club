/**
 * The history of the ground itself.
 *
 * Everything here is drawn from the club's own documents and from the material
 * already checked and published elsewhere on this site. Where the sources
 * disagree — the value of the burnt roller, the year the new pavilion was
 * finished — the disagreement is stated rather than settled.
 */

import img_glebe_map_1761 from '@/assets/decades/1760s/1761_snape_map_of_the_glebe.png';
import img_rectory_house from '@/assets/decades/1840s/rectory_house_bedford_plate.jpg';
import img_foundation_1847 from '@/assets/decades/1840s/1847_foundation_notice_and_circular.png';
import img_ground_1850 from '@/assets/decades/1850s/1850_sutton_rectory_cricket_ground.jpg';
import img_pavilion_plan from '@/assets/decades/1890s/1890_part1_image8.jpg';
import img_wounded_1917 from '@/assets/decades/1910s/1917_part1_image31.jpg';
import img_xi_1924 from '@/assets/decades/1920s/1924_part1_image49.jpg';
import img_group_1946 from '@/assets/decades/1940s/1946_part1_image57.jpeg';
import img_thatch_1947 from '@/assets/decades/1940s/1947_part1_image61.jpg';
import img_ground_1949 from '@/assets/decades/1940s/1949_part1_image64.jpg';
import img_opening_1970 from '@/assets/decades/1970s/1970_part2_image2.jpg';
import img_shed_2005 from '@/assets/decades/2000s/2005_part2_image44.jpg';
import img_painting_2021 from '@/assets/decades/2020s/2021_part3_image37.jpeg';
import img_flooded_2023 from '@/assets/decades/2020s/2023_part3_image79.jpg';
import img_ground_2022 from '@/assets/decades/2020s/2022_part3_image62.png';

export interface GroundSection {
  period: string;
  title: string;
  background: "white" | "cream";
  content: string[];
  image?: string;
  imageCaption?: string;
}

export const rectoryParkHero = {
  image: img_ground_2022,
  years: "Surveyed 1761 · played on since 1847",
  title: "Rectory Park",
  subtitle: "The ground the club laid out for itself, and has never left",
};

export const rectoryParkIntro = {
  large:
    "Sutton Coldfield Cricket Club has played on the same ground for its whole existence. The Rector laid it out on his own glebe land in 1847 because the railways were about to take the field his cricketers had been using, and the club moved there that year under the shadow of the Rector's dwelling. It has not moved since.",
  body:
    "What follows is the history of the place rather than the cricket: the pavilion that stood for eighty years and burned down the week it was due to be demolished, the war years when the Borough Council suspended the rent to stop the square going back to grass, the groundsman who served eighteen seasons, the leases that secured the ground's future, and the working parties who still turn out on a February morning with hoes and mowers. Sutton is one of the oldest cricket clubs in the West Midlands and has played at Rectory Park since its inception in 1847.",
};

export const rectoryParkSections: GroundSection[] = [
  {
    period: "1761",
    title: "The Glebe, Mapped",
    background: "white",
    content: [
      "The ground has a paper trail that begins long before the cricket. In 1761 the surveyor John Snape was engaged to map the glebe land belonging to the Rectory of Sutton Coldfield for the Rev. Mr Riland, Rector — of the family from whom the club's founder, W.K. Riland Bedford, descended.",
      "Two sheets survive between them mapping the holding field by field, each parcel named and measured in acres, roods and perches: the Bailiff's Cage, Gilbert's Close, the Boyce's Close, the Breeding Close, Hare Acre, the Long Close, the Merchants Acre, the Long Acre and the Meadow, running down to Workhouse Lane and the Lichfield road and bounded by the lands of Mr Holbeach, Mr Croke, Mr Riddell and Mr Morgan. Round the edge he set an inset plan of part of Sutton town, the arms of the Rectory, an elevation and ground plan of the Mansion House, and a scale of chains and perches.",
      "One of the two surviving sheets indexes twenty features of the estate — the Mansion House, the Parsonage House, the Rectory House, the Church, the Green Ponds, the Great Pond, the Mill, the Brewhouse, the Orchard, the Garden, the Meadow, the Pasture, the Nursery, the Bridge, the Common — and among them, a Bowling Green. Games were being played on the Rector's land eighty-six years before a cricket ground was laid out on it.",
    ],
    image: img_glebe_map_1761,
    imageCaption:
      '"A Map of the Glebe Land belonging to the Rectory of Sutton Coldfield in the County of Warwick. Surveyed for the Revd. Mr Riland, Rector, by Jn. Snape. 1761." The earliest document the club holds.',
  },
  {
    period: "Before 1847",
    title: "The Meadow Platt",
    background: "white",
    content: [
      "Before there was a ground there was a field. For some years a small group had played their cricket in Sutton Park, on the open grass of the Meadow Platt, and the evidence of a later minute book suggests the game was being played in the area from about 1837 — a decade before the club was formally constituted.",
      "The Government's railway plans of 1845 changed that. The proposed construction and extension of the lines threatened the amenities of Sutton Park enjoyed by the Rector and his cricketers, and the ground they had been using with it. Rather than accept the loss, the Rev. W.K. Riland Bedford decided to lay out new grounds elsewhere — on land he himself controlled.",
    ],
    image: img_rectory_house,
    imageCaption:
      "Sutton Rectory, from the plates of Rev. W.K.R. Bedford's book. The lawn before it became the cricket ground. The plate carries no date.",
  },
  {
    period: "1847",
    title: "Laid Out on the Rectory Glebes",
    background: "cream",
    content: [
      "In 1847 Bedford laid out a cricket ground in the Rectory Glebes — the glebe land attached to the parsonage, and now known as Rectory Park. The club moved to the new ground that year, and 1847 gave it its founder, its structure and the ground it has never left, together with a minute book that would record its affairs until 1926.",
      "The parsonage was the home of the Bedford family for very many years, and the cricket was played directly in front of it. Bedford served as President from 1847 until 1892, a tenure of forty-five years. In 1856 he founded the Free Foresters on this same field, in a match between the Pilgrims of the Dee from Cheshire and a side drawn from the forests of Needwood and Arden — so the ground is the birthplace of a wandering club that still plays today.",
      "In 1863 his fellow Foresters honoured him with a silver salver, which is held at Lord's to this day, and the Rectory ground was opened to the whole town for a day of sport and amusement.",
    ],
    image: img_foundation_1847,
    imageCaption:
      'The notice of 17th July 1847 in which the Rector proposed a cricket club "to be composed of members of all classes willing to join", mounted with the printed circular calling the inaugural meeting for Saturday 24th July and listing the twelve subscriptions already received. The originals are held by Birmingham City Libraries.',
  },
  {
    period: "1869 – 1899",
    title: "A Relaid Square and a Permanent Pavilion",
    background: "white",
    content: [
      "The club came close to collapse in the 1860s. 1869 restored it: a meeting convened by circular at the Town Hall, then in Mill Street, considered the measures necessary for putting the Rectory Ground back in order. The square was relaid, a dressing pavilion put up, and a written record kept of the meeting that saved the club. A parish magazine of that year records the ground being \"again offered for the use of this club\".",
      "The decisive step came in 1890, when a permanent pavilion was built — an eighty-year building, thatched, that would define the look of the ground for four generations. The drawing survives.",
      "By the end of the century the ground had settled into a rhythm governed by daylight, the fixture card and the patient work of horse and roller. Play ran from half past two to a quarter to eight by the pavilion clock, with a five o'clock declaration the accepted convention.",
    ],
    image: img_ground_1850,
    imageCaption:
      '"Sutton Rectory Cricket-Ground. 1850" — a match in progress, the Rectory just visible through the trees. The earliest known view of the ground, taken between the club\'s founding and the building of the thatched pavilion.',
  },
  {
    period: "1900 – 1918",
    title: "The Ground Horse, and a Ground at War",
    background: "cream",
    content: [
      "The ground was worked by horse. A club minute of 1912 records the ground horse being sacked for kicking the groundsman — a line that says as much about how the square was prepared as any account of it could. The same year saw the ground put to use for several sports at once, and the pavilion housed rifle-shooting targets alongside the cricket equipment.",
      "The Great War emptied it. Convalescent camps were built in Sutton Park, where across the four years some ninety officers and three thousand men were billeted, and the clubhouse itself was given over to wounded men recovering before they returned to their units. Such matches as there were consisted mainly of scratch sides against service elevens stationed locally.",
      "1917 is remembered at Rectory Park for a fortnight in August that took two of its members — and for the meteorite that struck the ash tree between the grounds.",
    ],
    image: img_wounded_1917,
    imageCaption:
      "\"Entertaining the Wounded, 1917\" — the club's own photograph, taken in front of the thatched pavilion.",
  },
  {
    period: "1919 – 1945",
    title: "Kept from Going Back to Grass",
    background: "white",
    content: [
      "1924 brought major improvements to facilities and landscaping, modernising the ground while preserving its traditional character. In 1938 the club combined a record partnership on the field with a crucial victory off it, securing its future at Rectory Park.",
      "The Second World War very nearly ended it. By the middle of the war Sutton was down to a core of seven or eight members, playing on a square cut by hand, with players arriving by bicycle and an overdraft of forty pounds on the books. In 1942 the committee resolved to avoid all further expenditure.",
      "What saved the ground was the Borough Council: it suspended the tenancy costs and maintained the ground itself, keeping the square from going back to grass. The few matches played were low-scoring affairs, but there was still a ground to come back to.",
    ],
    image: img_xi_1924,
    imageCaption:
      "The 1st XI of 1924, photographed in front of the thatched pavilion with its gable clock.",
  },
  {
    period: "1946 – 1968",
    title: "Thatch, a Long Lease, and Alex Harvey",
    background: "cream",
    content: [
      "The post-war years secured the ground's tenure and improved it. A twenty-one year lease was obtained from the Corporation, ex-army huts were pressed into service, and Sunday cricket was introduced on a trial basis as membership surged. Practice facilities and pavilion work continued even while rationing lingered.",
      "In 1953 Alex Harvey arrived as groundsman. He would serve eighteen seasons, and was known for helping behind the bar after a tiring weekend. In 1955 a surplus of two hundred pounds paid for the pavilion roof to be re-thatched in Norfolk reed as a long-term solution, together with improvements to the water supply and the ground.",
      "1960 opened with major work on the lower ground pavilion, an eight hundred pound project helped by a four hundred pound grant from the Supporters' Association of Warwickshire C.C.C. In 1964 lease stability secured the club's future and set the plans for a new pavilion in motion; Norman Sharp wrote that the old building \"was considered to have a limited life left and that the time was ripe to go ahead with plans for a more modern building\". By 1968 the funding question was settled: the cricket and hockey clubs formally amalgamated, the lease was extended by seven years, and plans for a pavilion costing a little over eleven thousand pounds, to be erected by Lessar Bros, were approved.",
    ],
    image: img_thatch_1947,
    imageCaption:
      "The thatched pavilion behind its white picket fence, 16th July 1947 — the day Sutton Coldfield played the MCC.",
  },
  {
    period: "1969 – 1970",
    title: "The Fire, and the Building That Replaced It",
    background: "white",
    content: [
      "The funding was secured through an appeal — donations, loans against annual prize draws, and paid-up life memberships — and the old building was stripped ready for the contractors. Then, on the eve of its planned demolition, the eighty-year-old thatched pavilion was destroyed by fire.",
      "1969 remains the club's best playing season on record, and it ended with the building that had watched over the ground since 1890 gone in a night. Contractors moved on site in early November.",
      "The replacement was not ready for the start of the season. Delays, weather and surface drainage problems left it usable but, in the club's own words, \"in a somewhat chaotic state\" — the club muddled through to the end of May 1970, by which time it was seasonably presentable, though a good deal of finishing remained. The building was formally opened on the evening of Friday 24th July 1970 by Edmund H. King, Chairman of Warwickshire C.C.C., with Norman Sharp as President - the date is printed on the card produced for the occasion and signed by the members. One later account puts the opening at 1974 and the eventual cost between twelve and fifteen thousand pounds; the card and the club's contemporary record agree on 1970.",
    ],
    image: img_opening_1970,
    imageCaption:
      "Edmund H. King, Chairman of Warwickshire C.C.C., cuts the tape on the evening of Friday 24th July 1970. Norman Sharp, the President, was in hospital; the members signed a card for him instead.",
  },
  {
    period: "1971 – 1999",
    title: "Green Stripes on the Flannels",
    background: "cream",
    content: [
      "Alex Harvey retired in 1971 after eighteen years as groundsman, with a handsome testimonial; the playing member Richard Bradshaw took his place.",
      "In the summer of 1980 a local Citizens Band radio group, who sublet the premises on Thursday evenings, offered to paint the outside of the pavilion for a small fee. They painted the old pine bench seats in front of it too — in slow-drying paint intended for asbestos, so that for several seasons afterwards a Rectory Park cricketer could be known from behind by the green stripes on his flannels.",
      "The pavilion was refurbished again by the middle of the nineties, and Chris Cowdrey of Kent and England was guest of honour at the annual dinner held in it on Friday 28th January 1995.",
    ],
    image: img_ground_1949,
    imageCaption:
      "The ground and its buildings, 1949 — the thatched pavilion on the right, the lower ground buildings to the left.",
  },
  {
    period: "2000 – 2009",
    title: "A Thirty-Year Lease",
    background: "white",
    content: [
      "The ground's long-term future was settled with a thirty-year lease over 3.33 hectares of Rectory Park, signed with Birmingham City Council on 25th December at three thousand pounds a year, reviewable upwards every five years.",
      "The decade also brought one of the odder losses in the club's history. A heavy roller hired from Hewden and awaiting collection was set alight overnight and completely burnt out. Hewden began legal action; the club's own account puts the loss at around twenty thousand pounds, while Hewden itself later valued it at £17,189.",
    ],
    image: img_shed_2005,
    imageCaption: "An outbuilding at Rectory Park, photographed in 2005.",
  },
  {
    period: "2010 – 2019",
    title: "Water, Drainage and a Wicket That Held",
    background: "cream",
    content: [
      "Water has been the ground's recurring adversary. After the wettest winter on record a club working party spread two tons of sand around the score box on 12th April and laid a further hundred metres of drainage pipe. The ECB's pitch adviser Chris Wood took core samples and agreed a five-year improvement programme.",
      "New sight screens and roll-on covers arrived in time for one season, the Friends of Rectory Park funded the mural on the rear wall of the pavilion behind the memorial garden, and Birmingham City Council gave cautious pre-application approval for a proposed equipment store and score box.",
      "The square repaid the work. Over two April weekends 994 runs were scored on the same Rectory Park wicket — a tribute to the groundsman, Lee Thomason, as much as to the batsmen.",
    ],
    image: img_flooded_2023,
    imageCaption:
      "The ground under water. Flooding has shaped the club's year more than once.",
  },
  {
    period: "2020 to the present",
    title: "Working Parties and the Ground Today",
    background: "white",
    content: [
      "The pandemic closed the pavilion and stopped the subscriptions, but the ground still had to be maintained. A Sport England grant of seven thousand pounds and a ten thousand pound small business and hospitality grant helped cover the overheads while the bar generated nothing.",
      "The work itself has always been done by members. The Ground Secretary's list for one spring reads: pressure-wash the pathway in front of the pavilion; remove the dead grass in the bowlers' run-up and level the surface; clean the sight screens; paint the outside of the lower ground pavilion; cut the squares; clear the leaves in front of the score box. Somebody also planted late summer bulbs and sowed wildflower seed. On a Friday evening in May 2021, forty-nine five-year-olds had their first taste of cricket on a ground made ready by the Golden Oldies with hoes and mowers, and sown with cornflower and poppy.",
      "Investment has continued: fencing around part of the ground, two sight screens, a comprehensive overhaul of the nets and a mower-roller for the squares in one year; a refurbished score box and lower ground Astroturf the next; new covers for the top ground at four thousand pounds; a big screen, new bar equipment and a sponsored five-bar gate at the pavilion. An outdoor clock ninety centimetres across, given by Sheryl White in memory of her parents Syd and Lily Stonehouse, is visible clear across the ground.",
      "The club now holds its lease from Birmingham City Council and works from two buildings — the Pavilion and the Lower Ground Pavilion. As one member wrote, looking back over fifty years: \"Nothing much has changed with the marvellous setting in the last 50 years except for the improved facilities.\"",
    ],
    image: img_painting_2021,
    imageCaption:
      "Painting the lower ground pavilion, 2021. The ground has always been kept by the people who play on it.",
  },
];

export const rectoryParkMoments = [
  { year: "1761", title: "The glebe is surveyed", description: "John Snape maps the Rectory's land for the Rev. Mr Riland. The index already names a bowling green." },
  { year: "1837", title: "Cricket on the Meadow Platt", description: "A small group playing in Sutton Park, a decade before the club was constituted." },
  { year: "1845", title: "The railways threaten the park", description: "Government plans for the lines put the cricketers' ground in Sutton Park at risk." },
  { year: "1847", title: "The ground is laid out", description: "Rev. W.K.R. Bedford lays out a cricket ground on the Rectory Glebes. The club has played there ever since." },
  { year: "1856", title: "The Free Foresters founded", description: "Bedford founds the wandering club on this field, in a match against the Pilgrims of the Dee." },
  { year: "1869", title: "The square relaid", description: "After near collapse, a meeting at the Town Hall puts the Rectory Ground back in order." },
  { year: "1890", title: "The thatched pavilion built", description: "A permanent pavilion, with a clock in the gable. It stood for eighty years." },
  { year: "1917", title: "The clubhouse given to the wounded", description: "Convalescent camps in Sutton Park; the clubhouse turned over to recovering men." },
  { year: "1942", title: "The Council keeps the ground", description: "With a £40 overdraft, the Borough Council suspends the rent and maintains the ground itself." },
  { year: "1953", title: "Alex Harvey arrives", description: "A groundsman who would serve eighteen seasons." },
  { year: "1955", title: "Re-thatched in Norfolk reed", description: "A £200 surplus pays for the pavilion roof, the water supply and the ground." },
  { year: "1969", title: "The pavilion burns", description: "Destroyed by fire on the eve of its planned demolition, after eighty years." },
  { year: "1970", title: "The new pavilion in use", description: "Unfinished at the start of the season and presentable by the end of May." },
  { year: "2000s", title: "A thirty-year lease", description: "3.33 hectares of Rectory Park leased from Birmingham City Council at £3,000 a year." },
  { year: "Today", title: "Two grounds, kept by hand", description: "The Pavilion and the Lower Ground Pavilion, and working parties every spring." },
];

export const rectoryParkQuote = {
  text: "Nothing much has changed with the marvellous setting in the last 50 years except for the improved facilities. The old thatched pavilion had its charms, but the small changing hut by the side with one small basin and no hot water or showers was certainly a challenge.",
  author: "A member, recalling the ground before 1970",
};

export const rectoryParkGallery = [
  { src: img_group_1946, caption: "The club gathered before the thatched pavilion, 1946." },
];
