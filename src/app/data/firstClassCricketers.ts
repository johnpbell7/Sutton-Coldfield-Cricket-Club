/**
 * Club players who also played first-class or List A cricket.
 *
 * The list is the club's own: "Sutton Coldfield CC – First Class/List A Cricketers, 1847 to 2025",
 * compiled from the club's records and cricket websites, in approximate chronological order, with each
 * career span in brackets. The stories are drawn from the club's annual records and the decade pages
 * of this site. Nothing has been added from outside those sources.
 */

import img_xi_1924 from '@/assets/decades/1920s/1924_part1_image49.jpg';
import img_u11_2008 from '@/assets/decades/2000s/2008_part2_image55.png';

export const cricketersHero = {
  image: img_xi_1924,
  years: '1847-2025',
  title: 'From Rectory Park to First-Class Cricket',
  subtitle:
    'Forty-five men who played for Sutton Coldfield went on to first-class or List A cricket, and some went on to play for their country.',
};

export const cricketersIntro = {
  large:
    'For more than 170 years, Rectory Park has been a step on the way for cricketers who went on to the county game and beyond: Warwickshire players in the club’s Saturday sides, overseas professionals who later played Test cricket, and juniors who learned the game here and grew up to play for England.',
  body: [
    'The club’s records name forty-five players who, at some stage, played for Sutton Coldfield and also played first-class or List A cricket. The earliest is the Rev. J. H. Gibbon of Oxford University in 1868; the most recent are two brothers, both raised in the junior section.',
    'Below are some of their stories, followed by the full list.',
  ],
};

export type Profile = {
  name: string;
  teams: string;
  years: string;
  paragraphs: string[];
  image?: string;
  imageCaption?: string;
  decade?: { to: string; label: string };
};

export const profiles: Profile[] = [
  {
    name: 'Tom Banton',
    teams: 'Somerset & England',
    years: '2018-',
    image: img_u11_2008,
    imageCaption:
      'The under-11s in the Warwickshire C.C.C. final of 2008: Aaron Thomason front right, later of Warwickshire and Sussex, and Tom Banton second right, later of Somerset and England.',
    paragraphs: [
      'Tom Banton is a product of the club’s junior section. He played in the under-11 side that reached the Warwickshire C.C.C. Under-11 final in 2008, and the following summer scored 203 runs in a match for Warwickshire Under-13s against Herefordshire, which earned him the Neil Abberley Trophy as Warwickshire Young Player of the Season.',
      'His family later moved to Barnt Green and he was educated at King’s School, Taunton, before joining Somerset as an opening batsman and wicketkeeper. In 2019 he was named PCA Young Player of the Year and called into England’s Twenty20 squad for the tour of New Zealand, and he has since played white-ball cricket for England.',
      'He has not forgotten where he started: a shirt he donated to the club was auctioned to raise funds for it.',
    ],
    decade: { to: '/decades/2010', label: 'Five Titles in Seven Years, 2010-2019' },
  },
  {
    name: 'Aaron Thomason',
    teams: 'Warwickshire & Sussex',
    years: '2014-21',
    paragraphs: [
      'Aaron Thomason stood beside Tom Banton in the under-11 final of 2008. He played for the county under-17s, joined the National Emerging Players Programme and was twelfth man for the full Warwickshire side before making his Warwickshire debut at Lord’s on 27th July 2014.',
      'He signed for Sussex and, on first-class debut at Kidderminster, made 90 batting at number ten: the third-highest score ever recorded from that position on debut. In the 2020s he came home to captain the club’s 1st XI.',
    ],
    decade: { to: '/decades/2010', label: 'Five Titles in Seven Years, 2010-2019' },
  },
  {
    name: 'E. B. “Tom” Crockford',
    teams: 'Warwickshire',
    years: '1911-22',
    paragraphs: [
      'Eric Bertram Crockford, known as Tom, was the story of the 1911 summer at Rectory Park, when he began a first-class career with Warwickshire that ran until 1922. He was one of several county players in the club’s strong sides of the 1910s and 1920s.',
      'Cricket was only part of it. Crockford won Olympic gold in the hockey tournament at Antwerp in 1920 for Great Britain and Ireland, represented England at hockey seventeen times, and held records for the highest break at billiards. His death in 1958 was the decade’s heaviest loss to the club.',
    ],
    decade: { to: '/decades/1910', label: 'The Last Summers, 1910-1919' },
  },
  {
    name: 'Adam Bacher',
    teams: 'Transvaal & South Africa',
    years: '1993-2005',
    paragraphs: [
      'The South African Adam Bacher was engaged as the club’s overseas professional for 1992. Six years later, on 18th June 1998, he opened the batting for South Africa against England in the Lord’s Test, scoring 22; England lost by ten wickets. It was the sixteenth of his nineteen Test matches.',
    ],
    decade: { to: '/decades/1990', label: 'Champions at Last, 1990-1999' },
  },
  {
    name: 'Steve Peall',
    teams: 'Mashonaland & Zimbabwe',
    years: '1990-96',
    paragraphs: [
      'Stephen Guy Peall, born in Salisbury, now Harare, joined in 1989 aged nineteen as the club’s first overseas professional: a right-arm off-spinner and hard-hitting left-handed lower-order batsman who also coached the club’s young players.',
      'Between 1992 and 1996 he played four Test matches and twenty-one One Day Internationals for Zimbabwe. He called in at Rectory Park to renew old acquaintances in 2016.',
    ],
    decade: { to: '/decades/1980', label: 'Trophies and Tragedy, 1980-1989' },
  },
  {
    name: 'Tim Groenewald',
    teams: 'Warwickshire, Derbyshire, Somerset & Kent',
    years: '2006-21',
    paragraphs: [
      'The South African all-rounder Tim Groenewald came to Sutton as the club’s professional in 2004, the year the 1st XI won the championship and promotion, and returned for a second season. He was then offered a contract by Warwickshire.',
      'When the county did not need him he played for Sutton again, and topped the club’s Birmingham League batting averages with 380 runs at 31.67. He went on to Derbyshire, then Somerset from 2015, and Kent.',
    ],
    decade: { to: '/decades/2000', label: 'Club of the Year, 2000-2009' },
  },
  {
    name: 'Alan Richardson',
    teams: 'Derbyshire, Warwickshire, Middlesex & Worcestershire',
    years: '1995-2013',
    paragraphs: [
      'A former Sutton Coldfield player, Alan Richardson had a county career with four counties over nearly twenty years and was named one of Wisden’s Cricketers of the Year in 2012. He came back as a guest of honour at the club’s annual dinner in 2013, alongside the Warwickshire captain Jim Troughton, and presented the club’s awards.',
    ],
    decade: { to: '/decades/2010', label: 'Five Titles in Seven Years, 2010-2019' },
  },
];

// The club's list as it stands, in approximate chronological order. Career spans as recorded.
export const roll: { name: string; teams: string; years: string }[] = [
  { name: 'Rev. J. H. Gibbon', teams: 'Oxford University', years: '1868-69' },
  { name: 'J. Manton', teams: 'Warwickshire', years: '1898' },
  { name: 'I. W. Smith', teams: 'Warwickshire', years: '1905' },
  { name: 'E. B. Crockford', teams: 'Warwickshire', years: '1911-22' },
  { name: 'C. A. F. Fiddian-Green', teams: 'Cambridge University, Warwickshire & Worcestershire', years: '1920-34' },
  { name: 'J. S. Russell', teams: 'Warwickshire', years: '1920' },
  { name: 'N. Sharp', teams: 'Warwickshire', years: '1923' },
  { name: 'K. W. C. Dobson', teams: 'Warwickshire & Derbyshire', years: '1920-25' },
  { name: 'P. E. Murray-Willis', teams: 'Worcestershire & Northamptonshire', years: '1935-46' },
  { name: 'J. St. F. Dare', teams: 'British Guiana', years: '1924-39' },
  { name: 'D. G. Foster', teams: 'Warwickshire & Gentlemen', years: '1928-34' },
  { name: 'M. K. Foster', teams: 'Worcestershire, MCC, Gentlemen & England XI', years: '1908-36' },
  { name: 'Sir C. de L. Inniss', teams: 'Barbados, Bengal Governor’s XI & West Indies XI', years: '1927-39' },
  { name: 'W. E. Houghton', teams: 'Warwickshire', years: '1946-47' },
  { name: 'D. G. Shaw', teams: 'Warwickshire', years: '1949' },
  { name: 'P. J. Lowe', teams: 'Warwickshire', years: '1964' },
  { name: 'F. A. Lowson', teams: 'Yorkshire & England', years: '1949-58' },
  { name: 'J. I. McDowall', teams: 'Cambridge University & Warwickshire', years: '1969-73' },
  { name: 'T. E. N. Jameson', teams: 'Cambridge University & Warwickshire', years: '1970' },
  { name: 'B. K. Gardom', teams: 'Warwickshire', years: '1973-74' },
  { name: 'W. N. Tidy', teams: 'Warwickshire', years: '1970-74' },
  { name: 'C. Maynard', teams: 'Warwickshire & Lancashire', years: '1978-86' },
  { name: 'P. N. Tennant', teams: 'Warwickshire', years: '1964' },
  { name: 'J. W. Edmonds', teams: 'Lancashire', years: '1975' },
  { name: 'M. A. Sheikh', teams: 'Warwickshire & Derbyshire', years: '1997-2006' },
  { name: 'I. M. King', teams: 'Warwickshire & Essex', years: '1952-57' },
  { name: 'N. W. Gamble', teams: 'Oxford University', years: '1967' },
  { name: 'S. A. Peall', teams: 'Mashonaland & Zimbabwe', years: '1990-96' },
  { name: 'P. A. Smith', teams: 'Warwickshire', years: '1982-96' },
  { name: 'A. M. Bacher', teams: 'Transvaal & South Africa', years: '1993-2005' },
  { name: 'R. J. Cunliffe', teams: 'Gloucestershire & Leicestershire', years: '1994-2003' },
  { name: 'C. Banton', teams: 'Nottinghamshire', years: '1995' },
  { name: 'F. van der Merwe', teams: 'Western Transvaal', years: '1999-2006' },
  { name: 'J. L. Aspeling', teams: 'Cape Province', years: '1998-99' },
  { name: 'A. Richardson', teams: 'Derbyshire, Warwickshire, Middlesex & Worcestershire', years: '1995-2013' },
  { name: 'W. Chughtal', teams: 'Sheikhupura, Pakistan Customs & Habib Bank', years: '2000-06' },
  { name: 'T. D. Groenewald', teams: 'Warwickshire, Derbyshire, Somerset & Kent', years: '2006-21' },
  { name: 'A. K. Suman', teams: 'Oxford University & Delhi', years: '1998-2005' },
  { name: 'M. Hussain', teams: 'Mumbai', years: '2007-11' },
  { name: 'D. B. Childs', teams: 'Boland', years: '2007-12' },
  { name: 'P. McKay', teams: 'Warwickshire', years: '2013-15' },
  { name: 'A. D. Thomason', teams: 'Warwickshire & Sussex', years: '2014-21' },
  { name: 'D. Malan', teams: 'Sri Lanka Navy Sports Club', years: '2016-' },
  { name: 'T. Banton', teams: 'Somerset & England', years: '2018-' },
  { name: 'J. Banton', teams: 'Worcestershire', years: '2021-22' },
];

export const cricketersClosing = {
  title: 'Is someone missing?',
  content: [
    'The list was put together from the club’s own records and from cricket reference websites, and some early careers are hard to trace. If you know of a Sutton Coldfield player who went on to first-class or List A cricket and is not here, or a detail that should be corrected, the club would like to hear from you.',
  ],
  contact: { href: 'https://suttoncoldfield.play-cricket.com/', label: 'Contact the club' },
};
