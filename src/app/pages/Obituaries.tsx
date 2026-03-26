import { Link } from "@/app/components/CustomLink";
import { MenuBar } from "@/app/components/MenuBar";
import { Footer } from "@/app/components/Footer";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import heroImage from "@/assets/35d091ccf79929cac09220bc363fbc26a923d05c.png";

interface Obituary {
  name: string;
  years: string;
  subtitle: string;
  sections: {
    title: string;
    content: string[];
  }[];
  imageUrl: string;
}

const obituariesData: Obituary[] = [
  {
    name: "Percival Allen Grove",
    years: "1888–1916",
    subtitle: "A Talented Sportsman and Devoted Servant",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Percival Allen Grove, known affectionately as Percy, was born in Sutton Coldfield on 29th September 1888, the eldest son of Allen and Elizabeth Whilock Grove of 'Copsewood', Tudor Hill. He was educated at Bishop Vesey Grammar School (1899–1905), where he distinguished himself as Victor Ludorum in 1905. Percy pursued a professional career as a chartered accountant with Harrison, West & Ledsam in Birmingham."
        ]
      },
      {
        title: "Cricket and Sporting Achievements",
        content: [
          "Percy joined Sutton Coldfield Cricket Club in 1906 and quickly established himself as a skilled bowler. Notable achievements included:",
          "1908: Took 6 wickets for 13 runs at Wolverhampton for the 2nd XI.",
          "1909: Became a regular 1st XI player, taking 7 wickets for 14 runs at Rectory Park against Yardley.",
          "1911: Recorded match figures of 6 wickets for 11 runs at Harborne and became the club's Hon Secretary. He was also a competent hockey player, representing the club in multiple sports."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "Percy enlisted in August 1914 with the 1st City Battalion, Royal Warwickshire Regiment (14th Battalion), later commissioned as Second Lieutenant on 9th September 1915 in the 1/5th Battalion. He served on the Somme, engaging in diversionary raids near Hébuterne. On 1st July 1916, he was severely wounded by a bomb and transported to the 2nd British Red Cross Hospital in Rouen, where he died on 5th July, aged 27."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Percival is buried at St Sever Cemetery, Rouen, France (Plot A, Row 3, Grave 8). He is commemorated on the Holy Trinity Church Memorial Plaque and the Sutton Coldfield Memorial in King Edward's Square."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Arthur John Lilly",
    years: "1881–1917",
    subtitle: "Club Treasurer and Skilled Bowler",
    sections: [
      {
        title: "Early Life and Career",
        content: [
          "Arthur John Lilly was born in Hackney, London, in 1881 and grew up in Sutton Coldfield as the adopted son and nephew of Mr. and Mrs. Harry J. Lilly of 'The Mount'. He worked in the family business, Lilly & Lilly, Gentlemen's Outfitters, Birmingham."
        ]
      },
      {
        title: "Cricketing Contributions",
        content: [
          "Arthur joined Sutton Coldfield Cricket Club in 1904 and became a noted bowler. Highlights include:",
          "1906: Took 7 wickets for 14 runs at Rectory Park against Olton while playing for the 2nd XI. He served as the club's Hon Treasurer from 1906 until his death in 1917 and was remembered as a cheerful and lively member with a flair for practical jokes and stage comedy."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "Arthur enlisted in the Warwickshire Regiment in 1914 and served in France from November 1915. He suffered severe injuries from a rifle grenade in March 1916 and was repatriated for recovery in Edinburgh. After four months of officer training, he returned to France on 2nd March 1917 as Second Lieutenant in the 2/6th Royal Warwickshire Regiment. He was killed by a sniper at Tertry on 4th April 1917, aged 35, and is buried at Saulcourt Churchyard Cemetery, Guyencourt-Saulcourt, France (Plot B1)."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Arthur was awarded the Victory, British, and 15 Star Medals. His dedication to the club and his spirited character remain celebrated in the club's records."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Horace Edgar Shenton",
    years: "1879–1917",
    subtitle: "Sportsman and Boer War Veteran",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Horace Edgar Shenton was born in 1879 at Hints, near Tamworth, Staffordshire, the youngest son of Isaac and Mary Shenton, farmers of 380 acres. Following the early death of his father, the family moved to Manor Hill, Sutton Coldfield. Horace was educated at New Hall College and later worked in the Automotive Machine Trade."
        ]
      },
      {
        title: "Cricketing Career",
        content: [
          "Horace played cricket for Old Maney C.C., Sutton Town C.C., and Sutton Coldfield Cricket Club. His final recorded match for Sutton Coldfield was on 4th July 1914, playing for the 2nd XI away at Wolverhampton C.C., scoring 18 runs and taking 1 wicket for 27 runs over 6 overs."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "Between 1899 and 1902, Horace served eighteen months in the Boer War with the Worcestershire Yeomanry. In 1914, he enlisted with the 14th Battalion, Royal Warwickshire Regiment, serving initially as Lance Sergeant (799) and later as Corporal in the Battalion Police. He was wounded by shrapnel on 31st August 1916, returned to the UK for treatment, but died of his wounds on 27th August 1917, aged 38."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Horace is buried at Sutton Coldfield Cemetery (Plot B.C. 33) with a full military funeral. He was awarded the Victory, British, and 15 Star Medals. His name is recorded on the Boer War Roll of Honour at Holy Trinity Church and the Sutton Coldfield Memorial in King Edward's Square."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Septimus Eric Parsons",
    years: "1892–1918",
    subtitle: "Promising Cricketer and Army Captain",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Septimus Eric Parsons was born on 1st May 1892, son of George Collison Tuting Parsons of Chartered Account Sharp, Parsons & Co., and Jane Parsons. He attended Bishop Vesey Grammar School (1902–1906) before moving to Mill Hill School, London (1906–1910), where he was a Monitor and prominent member of the 1st XI. He qualified as an accountant, likely employed in his father's firm."
        ]
      },
      {
        title: "Cricketing Career",
        content: [
          "Septimus joined Sutton Coldfield Cricket Club in 1911 at the age of 19. A competent batsman, he generally batted at No. 7 due to the presence of more seasoned players. Highlights include:",
          "10th June 1911: Shared a 6th wicket partnership of 92 runs with E.B. Crockford at Barnt Green C.C., scoring 41 not out.",
          "Played a return match at Rectory Park, opening the innings and scoring 28 runs in a drawn game."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "Enlisted as Private No. 460 in the 14th Royal Warwickshire Regiment on 9th September 1914, commissioned 2nd Lieutenant on 21st September 1914, and later promoted to Lieutenant (1916) and Captain (1917). Severely gassed in 1917, he returned to duty in January 1918. On 14th April 1918, while at Les Amusoires near Robecq, he was killed by enemy shelling during the Battle of Hazebrouck."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Captain Parsons is buried at St. Venant-Robecq Road British Cemetery, Robecq, France (Plot 1, Row E, Grave 23). He was awarded the Victory and British Medals and is commemorated on the Sutton Coldfield Memorial in King Edward's Square. His brother, B.K. Parsons, also an Old Veseyan, served as a 2nd Lieutenant in the Royal Warwickshire Regiment."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Rowland Murray Wilson-Browne",
    years: "1897–1916",
    subtitle: "Cricketer, Gymnast, and Royal Flying Corps Pilot",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Rowland Murray Wilson-Browne was born at Perry Barr, son of Arthur and Camilla Wilson-Browne of 'Ravenscliffe', Sutton Coldfield. He was educated at Solihull Grammar School and King Edward Grammar School, Birmingham. The family initially lived in Tudor Hill before moving to 'The Crag', Manor Road, Sutton Coldfield. While at King Edward's, Rowland won the gymnastic Open Championship for three consecutive years."
        ]
      },
      {
        title: "Sporting Life",
        content: [
          "Rowland was active in Sutton Coldfield Cricket Club and Swimming Club, elected to the cricket club on 29th May 1912. He was also a member of the Dolobran Athletic Club, participating in the basement gymnasium in Balsall Heath where the first international gymnastics match between England, Ireland, and Scotland was held in March 1900. His busy sporting life meant he does not figure prominently in the cricket club's historical match records."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "At the outbreak of the First World War, Rowland briefly worked in the Aerodrome Department at Daimler Works. He quickly passed his pilot certificate tests and enlisted with the Royal Flying Corps, 21st Squadron, as Second Lieutenant. During a bombing raid on 21st July 1916 targeting the junction and rail bridge at Aubigny-au-Bac, he was shot down in combat with enemy aircraft, captured by German forces, and died of wounds as a prisoner of war at age 19."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Rowland was buried at Vis-En-Artois Communal Cemetery, France. The precise location of his grave is unknown, and a special memorial marks his sacrifice. He is commemorated on the St Peter's Church, Maney, Roll of Honour and is recorded in the Sutton Coldfield Cricket Club AGM minutes of 24th April 1917."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Reginald Bertram Clive Chopping",
    years: "1893–1916",
    subtitle: "Cricketer and Royal Warwickshire Regiment Soldier",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Reginald Bertram Clive Chopping was born on 4th May 1893 at Grassendale, Lancashire, son of Walter Clive and Alice Maud Reynolds Chopping. The family moved to 'Fairlight', 177 Lichfield Road, Four Oaks, Sutton Coldfield. Reginald attended Bishop Vesey Grammar School (1902–1907) and Deans Close School, Cheltenham, for four years, the last two in the Officers Training Corps. His brother Gordon also attended Bishop Vesey Grammar School."
        ]
      },
      {
        title: "Cricketing Career",
        content: [
          "Reginald joined Sutton Coldfield Cricket Club on 10th May 1911, playing for the \"A\" Team over several seasons. While competent, he did not achieve notable distinction."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "Enlisting in September 1914 as Private 163 in the 15th Royal Warwickshire Regiment, Reginald served as a signaller. On 27–28th August 1916, during trench strengthening near Falfemont Farm, France, he was killed at the front line at Delville Wood, aged 23. He has no known grave. A battalion chaplain wrote: \"He was a great personal friend of mine, and in his quiet way had a great influence with his company. He was always a quiet, conscientious Christian, never made a complaint, and was always the first to do anything that was wanted – nothing upset him.\""
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Reginald is commemorated on the Thiepval Memorial (Pier and Face 9A, 9B, 10B), the Four Oaks Memorial, St James Church, Mere Green, and the Sutton Coldfield Memorial in King Edward's Square. He was awarded the Victory and British Medals and the 15 Star Medal. Probate was granted to his mother, Alice Maud Reynolds Chopping, with effects valued at £490 9s."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "John Howard Felton",
    years: "1899–1918",
    subtitle: "Cricketer and Royal Warwickshire Regiment Soldier",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "John Howard Felton was born on 30th December 1899, the youngest son of Charles and Florence Felton of \"Brooklyn\", Rectory Road, Sutton Coldfield. He was educated at Bishop Vesey Grammar School between 1912 and 1914 and became a playing member of the Sutton Coldfield Cricket Club's \"A\" Team. Known affectionately as Jack, he was described as a keen sportsman with remarkable rifle shooting skills, finishing second in a battalion-wide competition among one thousand soldiers."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "Jack enlisted at Sutton Coldfield with the Royal Warwickshire Regiment, 10th Battalion, as Private 35505, and briefly served as Private 68595 in the Devonshire Regiment. The 10th Royal Warwickshire Regiment, part of the 57th Brigade, 19th Division, held the line from Blauwepoortbeke to Wambeke in the Messines/Wytschaete area. On 10th April 1918, the Germans launched a misty attack, isolating the British left flank. Amid intense shelling and forced retreats, Jack's unit was surrounded, and he was killed during the engagement at age 19. He had only recently arrived in France, making this his first battle."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "John Howard Felton has no known grave. He is commemorated on the Tyne Cot Memorial, Zonnebeke (Panels 23–28, 163A) and on the Sutton Coldfield Memorial, King Edward's Square. He was awarded the Victory and British Medals (L/104 B12 page 2444). Reports in the Sutton Coldfield News highlighted his gallantry and the difficulty in confirming his death, noting the assistance of Mr. William Fox, M.P., in providing the family with information."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Edward Baguley Markwick",
    years: "1896–1918",
    subtitle: "Royal Engineers Corporal and Bishop Vesey Grammar School Alumnus",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Edward Baguley Markwick was born on 9th February 1896, the eldest son of Edward and Elizabeth Annie Markwick of Broadfields, Four Oaks, Sutton Coldfield, later residing at 'St. Michaels', Maney Hill Road. He attended Bishop Vesey Grammar School from 1905 to 1912."
        ]
      },
      {
        title: "Military Service and Cricket",
        content: [
          "Edward enlisted in September 1914 at Fulham, Middlesex, joining the Royal Engineers, 2nd Signal Company, and entered France on 15th October 1914. He served as a Sergeant Dispatch Rider but was invalided home in February 1917 with rheumatic fever. While recovering, he played cricket for Sutton Coldfield Cricket Club in September 1917. Edward returned to France in March 1918."
        ]
      },
      {
        title: "Final Engagement and Death",
        content: [
          "During the Battle of the Selle (October–November 1918), Corporal Markwick contracted pneumonia and was sent to the 45th Casualty Clearing Station at Awoingt. He died peacefully at 4:00 p.m. on 9th November 1918, aged 22. His grave is located at Awoingt British Cemetery, Plot 3, Row D, Grave 14, inscribed: \"What more could he give.\""
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Edward Baguley Markwick is commemorated on the Sutton Coldfield Memorial, King Edward's Square, and St Peter's Church, Maney. Medal records show he was Acting Sergeant at the time of death and he was awarded the Victory and British Medals (RE/101 B page 97) and the 1914 Star Medal (RE/1 page 757), with a clasp added on 23 April 1920. His younger brother, Harold E. Markwick, survived the war."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Lawrence Jack Preedy",
    years: "1898–1918",
    subtitle: "King Edward's Grammar School Alumnus and Sutton Coldfield Cricketer",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Lawrence Jack Preedy was born in Aston, registered in the September quarter 1898, and was the son of Mr. and Mrs. J. Preedy of \"Inglenook\", Blackroot Road, Sutton Coldfield. He attended King Edward's Grammar School and was a playing member of the Sutton Coldfield Cricket Club's \"A\" Team. In addition to his sporting achievements, he served as organist at All Saints Church, Streetly."
        ]
      },
      {
        title: "Military Service and Sacrifice",
        content: [
          "Lawrence joined the Artists Rifles O.T.C. on his 18th birthday, 5th June 1916, before enlisting with the Royal Warwickshire Regiment, 4th Battalion, as Second Lieutenant 764380. He was later attached to the 1st Battalion and the 28th London Regiment and went to the front in September 1917. On 31st March 1918, while leading his men to recover lost ground, he was killed instantly by a sniper while attempting to rescue a wounded soldier. He was aged 19 at the time of his death."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Lawrence Preedy has no known grave and is commemorated on the Faubourg-d'Amiens Cemetery, Arras Memorial. He is also remembered on the Four Oaks War Memorial. He was awarded the Victory Medal (Officer/150) and the Royal Warwickshire Regiment Medal."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Walter Bladen Sampson",
    years: "1890–1916",
    subtitle: "Bishop Vesey Grammar School Alumnus and Sutton Coldfield Sportsman",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Walter Bladen Sampson was born on 19th October 1890, the third son of Frederick Harold and Louisa Sampson of Ferndale, Manor Road, Sutton Coldfield. He was baptised at Holy Trinity Church, Sutton Coldfield, on 16th November 1890. Educated at Bishop Vesey Grammar School between 1899 and 1907, he was a distinguished athlete and footballer, winning the Victor Ludorum in 1902 and continuing to dominate the Old Boys' Race until 1915. Walter was a founder member of the Vesey Old Boys' Club and also a member of Sutton Swimming Club, winning several prizes at annual competitions."
        ]
      },
      {
        title: "Cricket and Early Career",
        content: [
          "Walter was elected a member of Sutton Coldfield Cricket Club on 25th January 1910. While records of his cricketing achievements are limited, he also served as Colour Sergeant with the University of Birmingham OTC for six years before declining a commission. Professionally, he worked initially for the Royal Insurance Company and later with Allison Chains Ltd."
        ]
      },
      {
        title: "Military Service and Final Engagement",
        content: [
          "Walter received his commission on 17th August 1914 in the Special Reserve of Officers and became a full Lieutenant in January 1915, serving as aide-de-camp to General Hutton and later General Forester Walker. He was sent to the Front in July 1915, fighting in the Battle of Loos. Promoted to Temporary Captain in February 1916, he was confirmed as Captain in May 1916 with the Rifle Brigade, 13th Battalion.",
          "On 10th July 1916, during the attack near La Boisselle, Walter Sampson was killed in action aged 25. His battalion suffered heavy casualties due to a miscommunication in artillery support, and his leadership was noted as exemplary in reports."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Walter Bladen Sampson is buried at Pozieres British Cemetery, Ovillers-La Boisselle, Plot III, Row J, Grave 28. He is commemorated on the St Peter's Church, Maney, Roll of Honour, with a stained glass window and brass plaque in his memory, and on the Sutton Coldfield Memorial, King Edward's Square. Probate records show he left effects of £2,002 12s 7d. His brothers Herbert Henry, Frederick Harold, and Frank also served during the war."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Frederick Howard Sturgess",
    years: "1893–1919",
    subtitle: "Sutton Coldfield Cricket Club Batting and Bowling Star",
    sections: [
      {
        title: "Early Life and Cricketing Achievements",
        content: [
          "Frederick Howard Sturgess was born around 1893 and became a prominent member of the Sutton Coldfield Cricket Club. He topped the \"A\" Team batting and bowling averages in 1910, scoring 134 runs at an average of 22.3 and taking 24 wickets at an average of 5.8 runs per wicket. The following season he led the 2nd Team batting averages with 285 runs at 40.7, including a high score of 126 not out, and took 11 wickets at an average of 11.9. Despite his early involvement, he was not elected a full member until 10th March 1913, although his father had been a key club committee member."
        ]
      },
      {
        title: "Military Service and Injury",
        content: [
          "Sturgess enlisted with the South Staffordshire Regiment, serving with the 137th Staffordshire Brigade, 46th Division. On 4th November 1917, while in front-line positions near Loos north of Lens, he was caught in a gas attack and suffered concussion from a trench mortar shell and gas poisoning. He was evacuated to hospital in England on 12th November 1917."
        ]
      },
      {
        title: "Later Life and Death",
        content: [
          "After demobilisation, Frederick worked as a wholesale draper's assistant. In 1919, he died from acute pneumonia, likely exacerbated by his previous gas exposure, which had weakened his heart."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Frederick Howard Sturgess is buried in the Church of England Trustee Burial Ground, St. Barnabus Church, Erdington, Birmingham. His headstone bears the inscription: \"We cannot Lord thy purpose see but all is well that's done by thee.\""
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Esmond Hallewell Rogers",
    years: "1892–1916",
    subtitle: "Cambridge Graduate and Sutton Coldfield Cricketer",
    sections: [
      {
        title: "Early Life and Education",
        content: [
          "Esmond Hallewell Rogers was born in 1892, the only son of Sir Hallewell Rogers, Lord Mayor of Birmingham (1903–1904), and Lady Rogers of Greville Lodge, Edgbaston. He was educated at Shrewsbury School and Gonville and Caius College, Cambridge. Esmond played cricket for Sutton Coldfield Cricket Club and represented Warwickshire County Cricket Club 2nd XI, scoring 46 and 16 runs against Northants at Edgbaston in May 1912, with Percy Jeeves batting immediately after him."
        ]
      },
      {
        title: "Military Service and Action",
        content: [
          "Rogers joined the 10th Battalion, Royal Warwickshire Regiment, and was commissioned Second Lieutenant in January 1915. On 1st July 1916, he moved with his battalion from the Corps reserve line at Millencourt to the Intermediate Line north of Albert. The following days involved preparations and engagements in the capture and consolidation of La Boisselle during the Battle of the Somme. On 3rd July, while supporting the attack on German front lines, Rogers was killed in action aged 25. Many more of his fellow officers and soldiers were wounded or killed in the same engagement."
        ]
      },
      {
        title: "Commemoration",
        content: [
          "Esmond Hallewell Rogers is commemorated on the Commonwealth War Graves Commission records. His death was reported in the Birmingham Daily Gazette on 14th July 1916. He is also remembered at the Sutton Coldfield Cricket Club Annual General Meeting held on 24th April 1917 for his service and sacrifice."
        ]
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBzb2xkaWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzM3Mjk5MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export default function Obituaries() {
  return (
    <div className="min-h-screen bg-white">
      <MenuBar />
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="War Memorial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <Link
              to="/decades/1910"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-['Helvetica',sans-serif] font-medium mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to 1910s
            </Link>
            <h1 className="font-['Archivo_Black',sans-serif] text-5xl md:text-7xl text-white mb-6">
              In Memoriam
            </h1>
            <p className="font-['Georgia',serif] text-xl md:text-2xl text-white/95 max-w-3xl">
              Members Lost in the Great War 1914–1918
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="md:col-span-7">
              <p className="font-['Georgia',serif] text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
                The First World War interrupted normal play, but did not halt the club's operations. Of the members who served, 39 went to war and 13 lost their lives. These obituaries honour the memory of those who made the ultimate sacrifice.
              </p>
              <p className="font-['Georgia',serif] text-xl md:text-2xl leading-relaxed text-gray-800">
                Each man listed here was not merely a name on a team sheet, but a valued member of our community—a friend, teammate, and servant to both club and country. Their stories remind us that behind every cricket match, every season, and every victory, there were real lives shaped by courage, dedication, and loss.
              </p>
            </div>

            {/* Square Image */}
            <div className="md:col-span-5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3d3clMjBtZW1vcmlhbCUyMHBvcHB5fGVufDF8fHx8MTczNzI5OTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="War Memorial"
                className="w-full aspect-square object-cover"
              />
              <div className="border-b border-[#d9c9ca] py-3 mt-4">
                <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                  Remembrance of the fallen members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Obituaries with Diagonal Dividers */}
      {obituariesData.map((obituary, index) => (
        <div key={index}>
          {/* Diagonal divider */}
          <div className="relative h-[80px] md:h-[120px] -mb-px">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 120">
              <path 
                d={index % 2 === 0 ? "M0 120H1920V0L0 120Z" : "M0 0H1920V120L0 0Z"} 
                fill={index % 2 === 0 ? "#f8f6f3" : "white"} 
              />
            </svg>
          </div>

          <section className={`${index % 2 === 0 ? "bg-[#f8f6f3]" : "bg-white"} py-16 md:py-20 -mt-px`}>
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Image on left */}
                <div className="md:col-span-5">
                  <div className="sticky top-24">
                    <ImageWithFallback
                      src={obituary.imageUrl}
                      alt={obituary.name}
                      className="w-full h-[300px] md:h-[400px] object-cover"
                    />
                    <div className="border-b border-[#d9c9ca] py-3 mt-4">
                      <p className="font-['Georgia',serif] text-sm md:text-base text-[#4a4a4a]">
                        In memory of {obituary.name}, {obituary.years}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text content on right */}
                <div className="md:col-span-7">
                  <h2 className="font-['Archivo_Black',sans-serif] text-3xl md:text-5xl text-[#8B1538] mb-2 leading-tight">
                    {obituary.name}
                  </h2>
                  <p className="font-['Georgia',serif] text-xl md:text-2xl text-gray-600 mb-2">
                    {obituary.years}
                  </p>
                  <p className="font-['Georgia',serif] text-lg md:text-xl italic text-gray-700 mb-8">
                    {obituary.subtitle}
                  </p>

                  {/* Sections */}
                  <div className="space-y-6">
                    {obituary.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="font-['Georgia',serif] text-xl md:text-2xl font-bold text-[#8B1538] mb-3">
                          {section.title}
                        </h3>
                        <div className="space-y-3">
                          {section.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="font-['Georgia',serif] text-base md:text-lg leading-relaxed text-gray-800">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <Footer />
    </div>
  );
}