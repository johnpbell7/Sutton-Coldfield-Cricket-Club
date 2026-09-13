/**
 * The Riland and Riland Bedford rectors of Sutton Coldfield.
 *
 * The club's founder did not arrive from nowhere. He was the fifth generation
 * of one family to hold the living of Holy Trinity, and the ground the club
 * has played on since 1847 was his family's glebe land. This page is the
 * background to the first paragraph of "Foundations Before Formation".
 *
 * Where the succession has a gap, it is shown as a gap. Nothing is invented to
 * close it.
 */

import img_glebe_map_1761 from '@/assets/decades/1760s/1761_snape_map_of_the_glebe.png';
import img_rectory_house from '@/assets/decades/1840s/rectory_house_bedford_plate.jpg';

export const rilandHero = {
  image: img_rectory_house,
  years: "1689 - 1907",
  title: "The Riland & The Bedford",
  subtitle: "Five generations of one family in the living of Sutton Coldfield",
};

export const rilandIntro = {
  large:
    "For 218 years the rectory of Sutton Coldfield stayed inside one family. From 1689 to 1907 the living of Holy Trinity passed from Riland to Riland and then to Riland Bedford, each rector in a position to name the man who followed him.",
  body: [
    "That was not an accident of favour. In 1706 the first John Riland bought the advowson - the right to present the next rector - from the impoverished Shilton family. The purchase turned a valuable parish appointment into something the family could hand on, and hand it on they did, through sons, grandsons and, in the end, a change of surname.",
    "It matters to the cricket club because the ground came with the living. Rectory Park was the rectory's glebe land, and the man who laid a cricket ground out on it in 1847 was the rector's family's own. The club was founded on land its founder's forebears had been mapping, planting and fishing for the better part of a century.",
  ],
};

export interface Rector {
  years: string;
  name: string;
  relationship: string;
  note?: string;
}

/**
 * The succession as recorded in the club's Part 1 history. The years between
 * 1843 and 1850 carry no name in that record; the entry marked `gap` says so
 * rather than guessing.
 */
export const rectors: (Rector | { gap: true; years: string; note: string })[] = [
  {
    years: "1689-1720",
    name: "John Riland",
    relationship: "The first of the line",
    note: "Became Rector in 1689. In 1706 he bought the advowson of the parish from the Shilton family, putting the appointment of every future rector into his family's hands. In 1701 he had already pulled down the old medieval rectory and commissioned the local architect William Wilson to build a Queen Anne manor house in its place, standing in several acres of parkland - the park the club plays in today.",
  },
  {
    years: "1720-1757",
    name: "Richard Riland",
    relationship: "Son of John",
  },
  {
    years: "1757-1790",
    name: "Richard Bisse Riland",
    relationship: "Grandson of John",
    note: "Appointed to Holy Trinity in 1757, a position he held until his death in 1790. The glebe land came with the living. In 1761 he commissioned the surveyor John Snape to map it - the earliest document the club holds.",
  },
  {
    years: "1790-1822",
    name: "John Riland",
    relationship: "Brother of Richard Bisse",
    note: "The evangelical clergyman of the family.",
  },
  {
    years: "1822-1843",
    name: "William Riland Bedford",
    relationship: "Grandson of Richard Bisse Riland",
    note: "The surname changes here, and the living carries on regardless.",
  },
  {
    gap: true,
    years: "1843-1850",
    note: "The club's Part 1 record names no rector for these years - the years in which the cricket club was founded.",
  },
  {
    years: "1850-1892",
    name: "William Kirkpatrick Riland Bedford",
    relationship: "Son of William",
    note: "The club's founder and its first President. In 1889 he published Three Hundred Years of a Family Living, a history of his own family in the parish.",
  },
  {
    years: "1892-1907",
    name: "William C. Riland Bedford",
    relationship: "The last of the line",
    note: "The final member of the family to hold the living.",
  },
];

export interface GroundSection {
  title: string;
  background: "white" | "cream";
  content: string[];
  image?: string;
  imageCaption?: string;
}

export const rilandSections: GroundSection[] = [
  {
    title: "The House in the Park",
    background: "cream",
    content: [
      "The medieval rectory came down in 1701. In its place the first John Riland had the local architect William Wilson build a Queen Anne manor house, set in several acres of parkland behind what is now the Boot public house.",
      "It stood for more than two centuries before it was demolished in 1936. The parkland around it kept the name it had always had - the Rectory's park - and that is the name the cricket ground carries still.",
    ],
    image: img_rectory_house,
    imageCaption:
      "Sutton Rectory, from the plates of Rev. W.K.R. Bedford's own book - the house that gave Rectory Park its name, with the cricket lawn in front of it.",
  },
  {
    title: "Mapping the Glebe",
    background: "white",
    content: [
      "In 1761 Richard Bisse Riland engaged John Snape, a prominent local surveyor, to map the rectory's glebe land. Two sheets survive between them, every parcel named and measured in acres, roods and perches.",
      "The map shows the Queen Anne rectory standing where the park is now, and it indexes twenty features of the estate - the Mansion House, the Parsonage House, the Church, the Green Ponds, the Great Pond, the Mill, the Brewhouse, the Orchard, the Garden, the Nursery, the Bridge, the Common. Among them, a Bowling Green. Games were being played on the Rector's land eighty-six years before a cricket ground was laid out on it.",
    ],
    image: img_glebe_map_1761,
    imageCaption:
      '"A Map of the Glebe Land belonging to the Rectory of Sutton Coldfield in the County of Warwick. Surveyed for the Revd. Mr Riland, Rector, by Jn. Snape. 1761."',
  },
  {
    title: "The Fish Pond and the Lime Avenue",
    background: "cream",
    content: [
      "Close by the rectory the rector had a large pond dug for keeping meat fish - carp and the like - to be taken as they were wanted. The Rectory Fish Pond is still there today, at the end of the short track that runs alongside the Boot.",
      "He also planted a grand avenue of lime trees. It was a piece of deliberate design as much as planting: from his own front door the rector could look straight up the avenue to his parish church on the top of the hill.",
    ],
  },
];

export const rilandClosing = {
  title: "Why it matters to the club",
  content: [
    "When the railways took the field Sutton's cricketers had been using, the ground they moved to was not bought, rented or petitioned for. It was the rector's own glebe, laid out for cricket by a rector's son whose family had held that land since before anyone alive could remember.",
    "The club was founded in 1847 under the shadow of the rectory, and the parsonage became the hub around which its early activity turned. Six decades of Bedford leadership followed. The family's hold on the parish ended in 1907; the club it started is still playing on the glebe.",
  ],
};
