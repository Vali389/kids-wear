import purpleChunkyBaby from "@/assets/Elegant chumky purple baby frock12-18.jpeg";
import greenMustardBaby from "@/assets/Adorable green and mustard baby frock 3-6.jpeg";
import navyAnkleFrock from "@/assets/Elegant ankle-length navy blue frock featuring rich 1-2.jpeg";
import cuteFloral23 from "@/assets/Cute and elegant floral frock 2-3.jpeg";
import lavenderFloral23 from "@/assets/Beautiful lavender floral frock with elegant2-3.jpeg";
import pinkLong810 from "@/assets/Beautiful long frock featuring a stylish pink8-10.jpeg";
import peachFloral23 from "@/assets/Elegant peach floral frock with a soft 2-3.jpeg";
import whiteParty34 from "@/assets/Elegant white party frock3-4.jpeg";
import tealLehenga34 from "@/assets/Elegant teal lehenga set featuring intricate golden .jpeg";
import orangeLehenga67 from "@/assets/Beautiful orange lehenga featuring vibrant6-7.jpeg";
import creamFrock2 from "@/assets/Elegant cream frock featuring delicate floral embroidery2.jpeg";
import ivoryBaby12 from "@/assets/Elegant ivory baby frock featuring intricate silver1-2.jpeg";
import greyFloral34 from "@/assets/Charming floral frock in a soft grey tone3-4.jpeg";
import redPartyBlack45 from "@/assets/Stylish red party frock featuring a rich black4-5.jpeg";
import pastelBlue45 from "@/assets/Elegant pastel blue party frock4-5.jpeg";
import yellowLehengaMulti from "@/assets/Beautiful lehenga set featuring a vibrant yellow3-4,4-5,5-6,6-8.jpeg";
import mustardDress56 from "@/assets/This brightmustratdyellowdress5-6.jpeg";
import blackLehenga1214 from "@/assets/This elegant lehenga set will have a graceful, slightly flared fit with a traditional touch12-14.jpeg";
import yellowLongGownLadies from "@/assets/Elegant yellow long gown featuring a flattering V-neck and full sleeves25-30.jpeg";
import twinsPochampally from "@/assets/Elegant Pochampally pattu twinning outfit featuring a rich deep purple.jpeg";
import momBabyTwinPurple from "@/assets/Elegant mom & baby boy twinning outfit set in rich royal purpleallagegroups.jpeg";
import babyBoyPurple from "@/assets/Elegant baby boy traditional outfit featuring a rich purple.jpeg";
import lehengaMaggam18 from "@/assets/Beautiful traditional lehenga set  features a flared skirt 1-8.jpeg";
import brightMaroonEthnic12 from "@/assets/brightand maroonethinicfrock1-2.jpeg";
import adorablePinkPartyFloral from "@/assets/adorablepink partywith fleoral.jpeg";
import royalPinkEthnic918 from "@/assets/brightroyaland pinkethinicfrock9-18.jpeg";
import ethnicFrockKids from "@/assets/elegantethenic frockkids.jpeg";
import greenFestiveLehenga67 from "@/assets/elegantgerreenforallehanga6-7.jpeg";
import redFestiveGown1012 from "@/assets/elegantredfetsivegown10-12.jpeg";
import richMaroonEthnic918 from "@/assets/elangantrichmaroonandtraditoonlfrock9-18.jpeg";
import vibrantPinkTraditional15 from "@/assets/adorablevibarantpinkand golsdtarditionalfrock1-5.jpeg";
import navyColorful1218 from "@/assets/Vibrant navy blue frock adorned with colorful12-18.jpeg";
import partywearFrock34 from "@/assets/partywaerfrock3-4.jpeg";
import partywearFrock342 from "@/assets/partywaerfrock3-4-2.jpeg";
import partyLongFrock1215 from "@/assets/partywearlongfrog12-15.jpeg";
import mustardLongFrock1015 from "@/assets/eleganntmutsarrdyeloowlongfronk10-15.jpeg";
import girlsSpotlightHero from "@/assets/girls-herosectionew-1.jpeg";
import panchesPaijamaNB2 from "@/assets/panche-paijama-set-new-born-2.jpeg";
import pureBanarisiPanchePaijama from "@/assets/pure-banarasi-panchepaijamaset-newborn-2.jpeg";
import pureBanarisiPanchePaijama2 from "@/assets/pure-banarasi-panchepaijamaset-newborn-img-2.jpeg";
import premiumBoysKurthaPurple from "@/assets/premium-boys-ethnic-kurtha-rich-purple-fabric.img-1.jpeg";
import premiumBoysKurthaOliveGreen from "@/assets/premium-boys-ethnic-kurtha-oilgreenwithgold-zari-fabric.img-2.jpeg";
import premiumBoysKurthaMagenta from "@/assets/premium-boys-ethnic-kurtha-magnetic-pink-fabric.img-3.jpeg";
import premiumBoysKurthaMustard from "@/assets/premium-boys-ethnic-kurtha-mustarrd-yellow-fabric.img-4.jpeg";
import comboSet312 from "@/assets/combo-set-3-12.jpeg";
import premiumRedTraditionalDress from "@/assets/premium-red-traditional-party-wear-dress-girls.jpeg";

export type Category = "baby" | "girls" | "ladies" | "boys";

/** Used for shop age-band filters (product can sit in more than one bucket). */
export type AgeBucket = "0-12m" | "1-3y" | "3-6y" | "6-12y" | "12plus" | "ladies";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  mrp: number;
  category: Category;
  /** Age ranges this piece is intended for — drives shop “Age” filters. */
  ageBuckets: AgeBucket[];
  /** Short line shown on cards, e.g. “Age: 2–3 years”. */
  ageLabel: string;
  tag?: string;
  badge?: string;
  colorChip: string;
  shortDescription: string;
  description: string;
  fabric: string;
  care: string;
  sizes: string[];
  images: string[];
  stockNote?: string;
};

const img = (src: string): string[] => [src, src];

/** Kathyayani Kids Wear — catalog with photos mapped to `src/assets` filenames */
export const products: Product[] = [

  {
    id: "p2",
    slug: "adorable-green-mustard-baby-frock",
    name: "Adorable green & mustard baby frock",
    price: 250,
    mrp: 550,
    category: "baby",
    ageBuckets: ["0-12m"],
    ageLabel: "Age: 3–6 months",
    tag: "Baby",
    colorChip: "var(--mint)",
    shortDescription: "Flared skirt, tie-up straps. ₹250",
    description:
      "Adorable green and mustard baby frock with a soft flared skirt and delicate detailing at the waist. Cute tie-up straps for a comfortable fit — perfect for babies for special occasions.",
    fabric: "Soft breathable cotton blend",
    care: "Gentle hand wash • Dry in shade",
    sizes: ["3-6M"],
    images: img(greenMustardBaby),
  },
  {
    id: "p3",
    slug: "elegant-navy-ankle-baby-frock",
    name: "Elegant ankle-length navy blue frock",
    price: 370,
    mrp: 495,
    category: "baby",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 1–2 years",
    tag: "Baby",
    colorChip: "var(--sky)",
    shortDescription: "Floral prints, red bow, puff sleeves. ₹370",
    description:
      "Elegant ankle-length navy blue frock featuring rich floral prints and a stylish red bow at the waist. Cute puff sleeves and a comfortable fit — ideal for festive occasions.",
    fabric: "Lightweight woven with soft lining",
    care: "Gentle hand wash • Cool iron",
    sizes: ["1-2Y"],
    images: img(navyAnkleFrock),
  },
  {
    id: "p4",
    slug: "cute-elegant-floral-frock-2-3",
    name: "Cute & elegant floral frock",
    price: 330,
    mrp: 495,
    category: "girls",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 2–3 years",
    tag: "Party",
    colorChip: "var(--peach)",
    shortDescription: "Pastel prints, shoulder bows, flared silhouette. ₹330",
    description:
      "Cute and elegant floral frock with soft pastel prints, stylish shoulder bows and a flared silhouette — comfortable fit and a charming look.",
    fabric: "Soft cotton / blend",
    care: "Gentle hand wash • Line dry",
    sizes: ["2-3Y"],
    images: img(cuteFloral23),
    stockNote: "Quantity 3 available",
  },
  {
    id: "p5",
    slug: "beautiful-lavender-floral-frock",
    name: "Beautiful lavender floral frock",
    price: 1100,
    mrp: 1450,
    category: "girls",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 2–3 years",
    tag: "Party",
    colorChip: "var(--lavender)",
    shortDescription: "Layered flare, puff sleeves. ₹1,100",
    description:
      "Beautiful lavender floral frock with elegant detailing and a soft layered flare. Cute puff sleeves — comfort and charm for parties and special occasions.",
    fabric: "Lightweight festive fabric",
    care: "Gentle hand wash • Steam on low",
    sizes: ["2-3Y"],
    images: img(lavenderFloral23),
  },
  {
    id: "p6",
    slug: "beautiful-long-pink-bodice-frock",
    name: "Beautiful long frock — pink bodice",
    price: 1380,
    mrp: 1650,
    category: "girls",
    ageBuckets: ["6-12y"],
    ageLabel: "Age: 8–10 years",
    tag: "Party",
    colorChip: "var(--peach)",
    shortDescription: "Shimmer bodice, organza skirt, ruffled sleeves. ₹1,380",
    description:
      "Beautiful long frock with a stylish pink bodice with delicate shimmer and a flowy floral organza skirt. Ruffled sleeves — ankle length for birthdays and special occasions.",
    fabric: "Organza / net with satin bodice",
    care: "Dry clean or gentle hand wash • Hang carefully",
    sizes: ["8-10Y"],
    images: img(pinkLong810),
  },
  {
    id: "p7",
    slug: "elegant-peach-floral-frock",
    name: "Elegant peach floral frock",
    price: 850,
    mrp: 999,
    category: "girls",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 2–3 years",
    tag: "Festive",
    colorChip: "var(--sunshine)",
    shortDescription: "Multicolor border, shoulder straps. ₹850",
    description:
      "Elegant peach floral frock with a soft flared silhouette and delicate multicolor border. Comfortable shoulder straps — below-knee length for parties and festive wear.",
    fabric: "Cotton blend with woven border",
    care: "Gentle hand wash • Cool iron",
    sizes: ["2-3Y"],
    images: img(peachFloral23),
  },
  {
    id: "p8",
    slug: "elegant-white-party-frock",
    name: "Elegant white party frock",
    price: 1175,
    mrp: 1475,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 3–4 years",
    tag: "Party",
    colorChip: "var(--cream)",
    shortDescription: "Silver floral embroidery, net skirt, bow. ₹1,175",
    description:
      "Elegant white party frock with intricate silver floral embroidery and a soft flared net skirt. Delicate puff sleeves and bow at the waist — ideal for birthdays and weddings.",
    fabric: "Net / embroidered bodice with lining",
    care: "Dry clean recommended • Gentle spot clean",
    sizes: ["3-4Y"],
    images: img(whiteParty34),
  },
  {
    id: "p9",
    slug: "elegant-teal-lehenga-set",
    name: "Elegant teal lehenga set",
    price: 1350,
    mrp: 1650,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 3–4 years",
    tag: "Lehenga",
    colorChip: "var(--mint)",
    shortDescription: "Golden embroidery, sleeveless, no dupatta. ₹1,350",
    description:
      "Elegant teal lehenga set with intricate golden embroidery, sleeveless blouse and flared skirt. Designed without dupatta for a modern, comfortable festive look.",
    fabric: "Festive fabric with embroidery",
    care: "Dry clean or gentle hand wash",
    sizes: ["3-4Y"],
    images: img(tealLehenga34),
  },
  {
    id: "p10",
    slug: "beautiful-orange-lehenga",
    name: "Beautiful orange lehenga",
    price: 1470,
    mrp: 1700,
    category: "girls",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Age: 6–7 years",
    tag: "Lehenga",
    colorChip: "var(--sunshine)",
    shortDescription: "Hand-painted style prints, golden detail. ₹1,470",
    description:
      "Beautiful orange lehenga with vibrant hand-painted style animal and floral prints and elegant golden detailing. Sleeveless blouse and rich flared skirt — weddings and celebrations.",
    fabric: "Premium festive fabric",
    care: "Dry clean recommended",
    sizes: ["6-7Y"],
    images: img(orangeLehenga67),
  },
  {
    id: "p11",
    slug: "elegant-cream-floral-frock",
    name: "Elegant cream frock",
    price: 959,
    mrp: 1200,
    category: "girls",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 2 years",
    tag: "Party",
    colorChip: "var(--cream)",
    shortDescription: "Floral embroidery, ruffled sleeves. ₹959",
    description:
      "Elegant cream frock with delicate floral embroidery, soft flared skirt and stylish ruffled sleeves — birthdays, parties and special occasions.",
    fabric: "Embroidered bodice with soft skirt",
    care: "Gentle hand wash • Line dry",
    sizes: ["2Y"],
    images: img(creamFrock2),
  },
  {
    id: "p12",
    slug: "elegant-ivory-baby-frock",
    name: "Elegant ivory baby frock",
    price: 840,
    mrp: 1000,
    category: "baby",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 1–2 years",
    tag: "Baby",
    colorChip: "var(--cream)",
    shortDescription: "Silver floral embroidery, shoulder bows. ₹840",
    description:
      "Elegant ivory baby frock with intricate silver floral embroidery and a soft flared silhouette. Cute shoulder bows — christenings and special occasions.",
    fabric: "Soft lined festive fabric",
    care: "Gentle hand wash • Cool iron",
    sizes: ["1-2Y"],
    images: img(ivoryBaby12),
  },
  {
    id: "p13",
    slug: "charming-grey-floral-frock",
    name: "Charming floral frock — soft grey",
    price: 335,
    mrp: 650,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 3–4 years",
    tag: "Casual",
    colorChip: "var(--muted)",
    shortDescription: "Red & white florals, bow waist, cap sleeves. ₹335",
    description:
      "Charming floral frock in soft grey with vibrant red and white flower prints and a cute bow at the waist. Flared silhouette and cap sleeves — casual outings.",
    fabric: "Cotton blend",
    care: "Machine cold gentle / hand wash",
    sizes: ["3-4Y"],
    images: img(greyFloral34),
  },
  {
    id: "p14",
    slug: "stylish-red-party-frock-black-bodice",
    name: "Stylish red party frock",
    price: 1850,
    mrp: 2099,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 4–5 years",
    tag: "Party",
    colorChip: "var(--berry)",
    shortDescription: "Black embroidered bodice, layered net skirt. ₹1,850",
    description:
      "Stylish red party frock with a rich black embroidered bodice and voluminous layered net skirt. Bold satin bow — birthdays and festive occasions.",
    fabric: "Net skirt with embroidered bodice",
    care: "Dry clean recommended",
    sizes: ["4-5Y"],
    images: img(redPartyBlack45),
  },
  {
    id: "p15",
    slug: "elegant-pastel-blue-party-frock",
    name: "Elegant pastel blue party frock",
    price: 1480,
    mrp: 1900,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 4–5 years",
    tag: "Party",
    colorChip: "var(--sky)",
    shortDescription: "3D floral appliqué, layered net skirt. ₹1,480",
    description:
      "Elegant pastel blue party frock with satin bodice and delicate 3D floral appliqué in soft pink and blue. Layered net skirt — birthdays and special occasions.",
    fabric: "Satin & net with lining",
    care: "Dry clean recommended",
    sizes: ["4-5Y"],
    images: img(pastelBlue45),
  },
  {
    id: "p16",
    slug: "beautiful-yellow-lehenga-multi-size",
    name: "Beautiful yellow lehenga set",
    price: 1150,
    mrp: 1499,
    category: "girls",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Ages: 3–4, 4–5, 5–6 & 6–8 years",
    tag: "Lehenga",
    colorChip: "var(--sunshine)",
    shortDescription: "Traditional prints, floral blouse, dupatta. Starts at ₹1,150",
    description:
      "Beautiful lehenga set with a vibrant yellow flared skirt, intricate traditional prints and a colourful floral blouse. Soft dupatta for an elegant touch — weddings and celebrations. Price by size: 3–4Y ₹1,150 • 4–5Y ₹1,300 • 5–6Y ₹1,450 • 6–8Y ₹1,600.",
    fabric: "Premium festive fabric",
    care: "Dry clean recommended",
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-8Y"],
    images: img(yellowLehengaMulti),
  },
  {
    id: "p18",
    slug: "bright-mustard-yellow-party-dress",
    name: "Bright mustard yellow party dress",
    price: 1330,
    mrp: 1599,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 5–6 years",
    tag: "Party",
    colorChip: "var(--sunshine)",
    shortDescription: "Ruffled neckline, frill skirt, floral bow. ₹1,330",
    description:
      "Bright mustard yellow dress with a cute elegant fit and slightly flared silhouette. Ruffled neckline, soft shoulder straps, layered frill skirt with gold accents and side floral bow — birthdays and festive wear.",
    fabric: "Soft party fabric with lining",
    care: "Gentle hand wash • Line dry",
    sizes: ["5-6Y"],
    images: img(mustardDress56),
  },
  {
    id: "p19",
    slug: "elegant-black-gold-lehenga-teens",
    name: "Elegant black & gold lehenga set",
    price: 1999,
    mrp: 2399,
    category: "girls",
    ageBuckets: ["12plus"],
    ageLabel: "Age: 12–14 years",
    tag: "Lehenga",
    colorChip: "var(--ink)",
    shortDescription: "Gold border ankle skirt, maroon frill top. ₹1,999",
    description:
      "Elegant lehenga set with graceful flared fit: black skirt with rich gold border, ankle-length classic festive look. Matching top with gold motifs and maroon frill detail; waist tie with tassels — for teenage girls.",
    fabric: "Traditional festive fabric",
    care: "Dry clean recommended",
    sizes: ["12-14Y"],
    images: img(blackLehenga1214),
  },
  {
    id: "p20",
    slug: "elegant-yellow-long-gown-ladies",
    name: "Elegant yellow long gown",
    price: 2250,
    mrp: 2699,
    category: "ladies",
    ageBuckets: ["ladies"],
    ageLabel: "Age: 25–30 years",
    tag: "Ladies",
    badge: "Women",
    colorChip: "var(--sunshine)",
    shortDescription: "V-neck, full sleeves, traditional hem motifs. ₹2,250",
    description:
      "Elegant yellow long gown with flattering V-neck and full sleeves with delicate embellishments. Flowing skirt with intricate traditional motifs at the hem — special occasions and ethnic events.",
    fabric: "Premium drape fabric",
    care: "Dry clean recommended",
    sizes: ["25-30Y"],
    images: img(yellowLongGownLadies),
  },
  {
    id: "p21",
    slug: "elegant-pochampally-twinning-set",
    name: "Elegant Pochampally twinning set",
    price: 3000,
    mrp: 3499,
    category: "girls",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Ages: 4–7 years",
    tag: "Twinning",
    colorChip: "var(--lavender)",
    shortDescription: "Silk-look twin: boy panche & girl frock. ₹3,000",
    description:
      "Elegant twinning collection in rich maroon with gold motifs — coordinated baby boy panche pajama set and baby girl long frock. Traditional craftsmanship with a modern touch for celebrations.",
    fabric: "Silk / silk-touch with woven borders",
    care: "Dry clean recommended",
    sizes: ["4-5Y", "5-6Y", "6-7Y"],
    images: img(twinsPochampally),
  },
  {
    id: "p22",
    slug: "mom-baby-boy-twinning-purple",
    name: "Mom & baby boy twinning — royal purple",
    price: 4500,
    mrp: 4999,
    category: "ladies",
    ageBuckets: ["ladies", "0-12m", "1-3y", "3-6y", "6-12y", "12plus"],
    ageLabel: "Ages: coordinated sets (all age groups)",
    tag: "Twinning",
    badge: "Set",
    colorChip: "var(--lavender)",
    shortDescription: "Mom long frock + baby panche pajama. ₹4,500",
    description:
      "Elegant mom & baby boy twinning in rich royal purple. Mom's long frock with flowy silhouette and woven border; baby boy panche pajama with matching kurta. Festivals and special family moments — WhatsApp for size pairing.",
    fabric: "Traditional weave with coordinated trims",
    care: "Dry clean recommended",
    sizes: ["Custom / WhatsApp"],
    images: img(momBabyTwinPurple),
    stockNote: "Paired sizing — message us on WhatsApp",
  },
  {
    id: "p23",
    slug: "elegant-baby-boy-purple-kurta-panche",
    name: "Elegant baby boy kurta & panche",
    price: 1450,
    mrp: 1699,
    category: "boys",
    ageBuckets: ["1-3y", "3-6y"],
    ageLabel: "Ages: 1–5 years",
    tag: "Boys",
    colorChip: "var(--lavender)",
    shortDescription: "Purple kurta, cream panche with border. ₹1,450",
    description:
      "Elegant baby boy traditional outfit: rich purple kurta with subtle gold motifs and detailed neckline. Classic panche pajama in contrasting cream with woven border — festivals and ceremonies.",
    fabric: "Cotton / silk-touch blend",
    care: "Gentle hand wash • Line dry",
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y"],
    images: img(babyBoyPurple),
  },
  {
    id: "p24",
    slug: "beautiful-traditional-lehenga-maggam",
    name: "Beautiful traditional lehenga set",
    price: 1999,
    mrp: 2399,
    category: "girls",
    ageBuckets: ["0-12m", "1-3y", "3-6y", "6-12y"],
    ageLabel: "Age: 1–8 years",
    tag: "Lehenga",
    badge: "Maggam work",
    colorChip: "var(--peach)",
    shortDescription: "Zari skirt, maggam blouse, bow waist. ₹1,999",
    description:
      "Beautiful traditional lehenga: flared skirt with elegant zari motifs and broad gold border, maggam work blouse with floral embroidery and puff sleeves, bow at the waist. Premium fabric for weddings and celebrations.",
    fabric: "Premium festive fabric with zari",
    care: "Dry clean recommended",
    sizes: ["1Y", "2Y", "3Y", "4Y", "5Y", "6Y", "7Y", "8Y"],
    images: img(lehengaMaggam18),
  },

  {
    id: "p26",
    slug: "adorable-pink-party-floral",
    name: "Adorable pink party frock — floral",
    price: 1199,
    mrp: 1399,
    category: "girls",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Party sizes — message for fit",
    tag: "Party",
    colorChip: "var(--berry)",
    shortDescription: "Floral pink party silhouette. ₹1,199",
    description:
      "Adorable pink party frock with floral accents — joyful colour for portraits and celebrations. Ask us on WhatsApp for the best size.",
    fabric: "Light festive fabric",
    care: "Gentle hand wash • Cool iron away from trims",
    sizes: ["3-4Y", "4-5Y", "5-6Y"],
    images: img(adorablePinkPartyFloral),
  },
  {
    id: "p27",
    slug: "royal-pink-ethnic-frock-9-18",
    name: "Royal pink ethnic frock",
    price: 900,
    mrp: 1199,
    category: "girls",
    ageBuckets: ["0-12m", "1-3y"],
    ageLabel: "Age: 9–18 months",
    tag: "Ethnic",
    colorChip: "var(--lavender)",
    shortDescription: "Royal pink draped ethnic look. ₹900",
    description:
      "Bright royal and pink ethnic frock with a graceful swirl-friendly skirt — ceremonies, weddings and milestone photos.",
    fabric: "Traditional festive blend",
    care: "Dry clean recommended",
    sizes: ["9-18M"],
    images: img(royalPinkEthnic918),
  },
  {
    id: "p28",
    slug: "elegant-kids-ethnic-frock",
    name: "Elegant ethnic frock — kids",
    price: 950,
    mrp: 1199,
    category: "girls",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Kids sizing — WhatsApp us",
    tag: "Ethnic",
    colorChip: "var(--peach)",
    shortDescription: "Classic kids ethnic silhouette. ₹950",
    description:
      "Elegant ethnic frock for everyday celebrations — balanced sparkle and breathable comfort for long wear.",
    fabric: "Comfort-first festive fabric",
    care: "Gentle hand wash",
    sizes: ["3-4Y", "5-6Y", "7-8Y"],
    images: img(ethnicFrockKids),
  },
  {
    id: "p29",
    slug: "elegant-green-festive-lehenga-6-7",
    name: "Elegant green festive lehenga",
    price: 1400,
    mrp: 1699,
    category: "girls",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Age: 6–7 years (nearby sizes available)",
    tag: "Lehenga",
    colorChip: "var(--mint)",
    shortDescription: "Jewel-tone green skirt set. ₹1,400",
    description:
      "Elegant green lehenga with rich festive contrast — birthdays, engagements and festive evenings.",
    fabric: "Premium festive drape",
    care: "Dry clean recommended",
    sizes: ["6-7Y", "7-8Y"],
    images: img(greenFestiveLehenga67),
  },
  {
    id: "p30",
    slug: "elegant-red-festive-gown-10-12",
    name: "Elegant red festive gown",
    price: 1900,
    mrp: 2199,
    category: "girls",
    ageBuckets: ["6-12y"],
    ageLabel: "Age: 10–12 years",
    tag: "Gown",
    colorChip: "var(--berry)",
    shortDescription: "Statement red gala gown. ₹1,900",
    description:
      "Elegant red festive gown — floor-loving length and sparkle that photographs beautifully.",
    fabric: "Premium gown fabric with lining",
    care: "Dry clean recommended",
    sizes: ["10Y", "11Y", "12Y"],
    images: img(redFestiveGown1012),
  },

  {
    id: "p32",
    slug: "vibrant-pink-gold-traditional-frock-1-5",
    name: "Vibrant pink & gold traditional frock",
    price: 999,
    mrp: 1199,
    category: "girls",
    ageBuckets: ["1-3y", "3-6y"],
    ageLabel: "Ages: 1–5 years",
    tag: "Traditional",
    colorChip: "var(--sunshine)",
    shortDescription: "Pink meets warm gold trims. Starts at ₹999",
    description:
      "Adorable vibrant pink frock with gold traditional accents — swirl-ready for little festivities. Price varies by age: ₹999 for 1-2 years, +₹250 for each additional year.",
    fabric: "Soft festive fabric",
    care: "Gentle hand wash",
    sizes: ["1-2Y", "2-3Y", "3-4Y", "4-5Y"],
    images: img(vibrantPinkTraditional15),
  },
  {
    id: "p33",
    slug: "vibrant-navy-party-frock-12-18",
    name: "Vibrant navy party frock",
    price: 450,
    mrp: 699,
    category: "girls",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 12–18 months",
    tag: "Party",
    colorChip: "var(--sky)",
    shortDescription: "Navy with colourful sparkle. ₹450",
    description:
      "Vibrant navy blue frock with colourful festive trim — petite proportions for stroller-to-dance-floor moments.",
    fabric: "Lightweight weave with comfy lining",
    care: "Gentle hand wash",
    sizes: ["12-18M"],
    images: img(navyColorful1218),
  },
  {
    id: "p34",
    slug: "partywear-frock-3-4",
    name: "Partywear frock",
    price: 899,
    mrp: 1049,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 3–4 years",
    tag: "Party",
    colorChip: "var(--lavender)",
    shortDescription: "Ready-for-cake-cutting frock. ₹899",
    description:
      "Partywear frock made for giggles and group photos — ask us about twinning sibling sizes.",
    fabric: "Comfort party knit / weave",
    care: "Gentle hand wash",
    sizes: ["3-4Y"],
    images: img(partywearFrock34),
  },
  {
    id: "p35",
    slug: "partywear-frock-3-4-alt",
    name: "Partywear frock — alternate style",
    price: 899,
    mrp: 1049,
    category: "girls",
    ageBuckets: ["3-6y"],
    ageLabel: "Age: 3–4 years",
    tag: "Party",
    colorChip: "var(--peach)",
    shortDescription: "Second colour story, same sparkle. ₹899",
    description:
      "Alternate partywear frock in the studio’s 3–4 years edit — coordinating accessories available on WhatsApp.",
    fabric: "Comfort party fabric",
    care: "Gentle hand wash",
    sizes: ["3-4Y"],
    images: img(partywearFrock342),
  },
  {
    id: "p36",
    slug: "party-long-frock-12-15",
    name: "Party long frock",
    price: 1799,
    mrp: 2049,
    category: "girls",
    ageBuckets: ["6-12y", "12plus"],
    ageLabel: "Ages: 12–15 years",
    tag: "Gown",
    colorChip: "var(--ink)",
    shortDescription: "Long-line party silhouette. ₹1,799",
    description:
      "Party long frock for tweens wanting extra length — red-carpet feel with Hyderabad-studio tailoring notes.",
    fabric: "Premium drape with lining",
    care: "Dry clean recommended",
    sizes: ["12Y", "13Y", "14Y", "15Y"],
    images: img(partyLongFrock1215),
  },
  {
    id: "p37",
    slug: "elegant-mustard-long-frock-10-15",
    name: "Elegant mustard yellow long frock",
    price: 1699,
    mrp: 1949,
    category: "girls",
    ageBuckets: ["6-12y", "12plus"],
    ageLabel: "Ages: 10–15 years",
    tag: "Party",
    colorChip: "var(--sunshine)",
    shortDescription: "Long mustard drape — teen-friendly gala look. ₹1,699",
    description:
      "Elegant long frock in a warm mustard story — flattering length for juniors and teens, breathable lining for long celebrations.",
    fabric: "Festive drape fabric with lining",
    care: "Dry clean recommended",
    sizes: ["10Y", "11Y", "12Y", "13Y", "14Y", "15Y"],
    images: img(mustardLongFrock1015),
  },
  {
    id: "p38",
    slug: "girls-celebration-spotlight-frock",
    name: "Girls celebration frock — spotlight edit",
    price: 1399,
    mrp: 1599,
    category: "girls",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Girls sizing — message us on WhatsApp",
    tag: "Party",
    colorChip: "var(--lavender)",
    shortDescription: "Featured studio styling from our celebration shoot. ₹1,399",
    description:
      "From our celebration edit shoot — airy silhouette and sparkle that reads beautifully on camera. Confirm available sizes on WhatsApp before ordering.",
    fabric: "Light festive weave with comfy lining",
    care: "Gentle hand wash • Dry in shade",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    images: img(girlsSpotlightHero),
  },

  // ── NEW PRODUCTS ─────────────────────────────────────────────────────────────


  {
    id: "p40",
    slug: "panche-paijama-set-newborn-2-years",
    name: "Panche Paijama Set — Newborn to 2 Years",
    price: 950,
    mrp: 1199,
    category: "boys",
    ageBuckets: ["0-12m", "1-3y"],
    ageLabel: "Age: Newborn to 2 years",
    tag: "Boys",
    badge: "Festive",
    colorChip: "#4B3F9E",
    shortDescription: "Traditional panche paijama for baby boys. ₹950",
    description:
      "Adorable traditional panche paijama set for baby boys from newborn to 2 years. Features a rich purple kurta with intricate gold floral brocade all over and a classic ivory dhoti-style panche with gold border — perfect for naming ceremonies, festivals and family celebrations.",
    fabric: "Premium Brocade / Silk Blend",
    care: "Dry clean recommended • Handle gently",
    sizes: ["Newborn", "0-6M", "6-12M", "1-2Y"],
    images: img(panchesPaijamaNB2),
    stockNote: "Quantity 1 available",
  },

  {
    id: "p41",
    slug: "pure-banarasi-panche-paijama-newborn-2-years",
    name: "Pure Banarasi Panche Paijama Set",
    price: 1200,
    mrp: 1499,
    category: "boys",
    ageBuckets: ["0-12m", "1-3y"],
    ageLabel: "Age: Newborn to 2 years",
    tag: "Boys",
    badge: "Pure Banarasi",
    colorChip: "#C0106A",
    shortDescription: "Pure Banarasi silk panche paijama set. ₹1,200",
    description:
      "Luxurious pure Banarasi panche paijama set for baby boys from newborn to 2 years. Rich magenta/pink kurta with gold Banarasi brocade all over paired with a royal blue Banarasi dhoti panche featuring gold motifs and traditional border. Ideal for naming ceremonies, festivals and special occasions.",
    fabric: "Pure Banarasi Silk",
    care: "Dry clean only",
    sizes: ["Newborn", "0-6M", "6-12M", "1-2Y"],
    images: [pureBanarisiPanchePaijama, pureBanarisiPanchePaijama2],
    stockNote: "Quantity 1 available",
  },

  {
    id: "p42",
    slug: "premium-boys-ethnic-kurtha-royal-purple",
    name: "Premium Boys Ethnic Kurta — Royal Purple",
    price: 350,
    mrp: 599,
    category: "boys",
    ageBuckets: ["1-3y", "3-6y", "6-12y"],
    ageLabel: "Ages: 1–8 years",
    tag: "Boys",
    badge: "Premium",
    colorChip: "#7B3FA0",
    shortDescription: "Peacock & lotus print kurta in royal purple. From ₹350",
    description:
      "Premium boys ethnic kurta crafted from rich purple fabric featuring elegant peacock and lotus floral motifs throughout. Traditional border detailing and mandarin collar for a regal festive look. Perfect for weddings, festivals and traditional celebrations. Price by size: 1–2Y ₹350 • 3–4Y ₹550 • 4–5Y ₹700 • 5–6Y ₹850 • 6–7Y ₹1,000 • 7–8Y ₹1,150.",
    fabric: "Cotton Blend",
    care: "Gentle hand wash • Dry in shade",
    sizes: ["1-2Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
    images: img(premiumBoysKurthaPurple),
    stockNote: "Quantity 1 available",
  },

  {
    id: "p43",
    slug: "premium-boys-ethnic-kurtha-olive-green-gold-zari",
    name: "Premium Boys Ethnic Kurta — Olive Green & Gold Zari",
    price: 400,
    mrp: 699,
    category: "boys",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Ages: 3–12 years",
    tag: "Boys",
    badge: "Premium",
    colorChip: "#6B7A2A",
    shortDescription: "Woven gold zari motifs on olive green silk blend. From ₹400",
    description:
      "Premium boys ethnic kurta in rich olive green with gold zari featuring traditional woven zari motifs and a rich gold zari woven border. Mandarin collar and full sleeves for a distinguished festive look. Perfect for weddings, festivals, religious ceremonies and special celebrations. Price by size: 3–4Y ₹400 • 4–5Y ₹550 • 5–6Y ₹700 • 6–7Y ₹850 • 7–8Y ₹1,000 • 8–9Y ₹1,150 • 9–10Y ₹1,300 • 10–11Y ₹1,450 • 11–12Y ₹1,600.",
    fabric: "Premium Silk Blend",
    care: "Dry clean recommended",
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-9Y", "9-10Y", "10-11Y", "11-12Y"],
    images: img(premiumBoysKurthaOliveGreen),
    stockNote: "Quantity 1 available",
  },

  {
    id: "p44",
    slug: "premium-boys-ethnic-kurtha-magenta-pink",
    name: "Premium Boys Ethnic Kurta — Magenta Pink",
    price: 400,
    mrp: 699,
    category: "boys",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Ages: 3–12 years",
    tag: "Boys",
    badge: "Premium",
    colorChip: "#C0106A",
    shortDescription: "Checkered weave with embroidered motifs in magenta pink. From ₹400",
    description:
      "Premium boys ethnic kurta in striking magenta pink with a checkered weave and embroidered motifs throughout. Traditional zari-woven border and mandarin collar for a bold festive statement. Ideal for weddings, festivals, traditional functions and family celebrations. Price by size: 3–4Y ₹400 • 4–5Y ₹550 • 5–6Y ₹700 • 6–7Y ₹850 • 7–8Y ₹1,000 • 8–9Y ₹1,150 • 9–10Y ₹1,300 • 10–11Y ₹1,450 • 11–12Y ₹1,600.",
    fabric: "Premium Silk Blend / Jacquard",
    care: "Dry clean recommended",
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-9Y", "9-10Y", "10-11Y", "11-12Y"],
    images: img(premiumBoysKurthaMagenta),
    stockNote: "Quantity 1 available",
  },

  {
    id: "p45",
    slug: "premium-boys-ethnic-kurtha-mustard-yellow",
    name: "Premium Boys Ethnic Kurta — Mustard Yellow",
    price: 400,
    mrp: 699,
    category: "boys",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Ages: 3–12 years",
    tag: "Boys",
    badge: "Premium",
    colorChip: "#D4860A",
    shortDescription: "Embroidered motifs & heritage border on mustard yellow. From ₹400",
    description:
      "Premium boys ethnic kurta in warm mustard yellow with embroidered motifs and a heritage-inspired border design featuring camel and palm tree folk art patterns. Mandarin collar and full sleeves for a rich traditional look. Perfect for weddings, festivals, cultural celebrations and traditional functions. Price by size: 3–4Y ₹400 • 4–5Y ₹550 • 5–6Y ₹700 • 6–7Y ₹850 • 7–8Y ₹1,000 • 8–9Y ₹1,150 • 9–10Y ₹1,300 • 10–11Y ₹1,450 • 11–12Y ₹1,600.",
    fabric: "Premium Silk Blend",
    care: "Dry clean recommended",
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-9Y", "9-10Y", "10-11Y", "11-12Y"],
    images: img(premiumBoysKurthaMustard),
    stockNote: "Quantity 1 available",
  },

  {
    id: "p46",
    slug: "combo-set-boys-girls-ethnic-3-12",
    name: "Combo Set — Boys & Girls Ethnic Wear",
    price: 1400,
    mrp: 1799,
    category: "boys",
    ageBuckets: ["3-6y", "6-12y"],
    ageLabel: "Ages: 3–12 years",
    tag: "Combo",
    badge: "Combo Set",
    colorChip: "#D4860A",
    shortDescription: "Matching ethnic combo set for boys & girls. From ₹1,400",
    description:
      "Beautiful matching ethnic combo set featuring a mustard yellow boys kurta with heritage folk embroidery and a coordinating girls lehenga skirt & blouse with floral embroidered top. Perfect for sibling twinning at weddings, festivals and family celebrations. Price by size: 3–4Y ₹1,400 • 4–5Y ₹1,550 • 5–6Y ₹1,700 • 6–7Y ₹1,850 • 7–8Y ₹2,000 • 8–9Y ₹2,150 • 9–10Y ₹2,300 • 10–11Y ₹2,450 • 11–12Y ₹2,600.",
    fabric: "Premium Silk Blend",
    care: "Dry clean recommended",
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-9Y", "9-10Y", "10-11Y", "11-12Y"],
    images: img(comboSet312),
    stockNote: "Quantity 1 available",
  },

  {
    id: "p47",
    slug: "premium-red-traditional-party-wear-dress-girls",
    name: "Premium Red Traditional Party Wear Dress",
    price: 1650,
    mrp: 1999,
    category: "girls",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 2–3 years",
    tag: "Traditional",
    badge: "Festive",
    colorChip: "#C0122C",
    shortDescription: "Rich red festive fabric, golden zari border, puff sleeves. ₹1,650",
    description:
      "Dress your little princess in elegance with this stunning red ethnic frock crafted from rich festive fabric. Featuring beautiful golden zig-zag weaving throughout the dress, the highlight is the grand floral woven border adorned with colorful floral motifs and intricate zari detailing. The stylish puff sleeves with traditional border accents add a royal touch. Ideal for festivals, weddings, birthdays and special occasions.",
    fabric: "Rich festive fabric with golden woven design",
    care: "Dry clean recommended • Handle zari border gently",
    sizes: ["2-3Y"],
    images: img(premiumRedTraditionalDress),
  },


];

/** Derive slug segment when router `params.slug` is missing or placeholder (TanStack Start / path edge cases). */
export function resolveProductSlug(params: { slug?: string }, pathname: string): string | undefined {
  let raw = typeof params.slug === "string" ? params.slug.trim() : "";
  if ((!raw || raw === "$slug") && pathname) {
    const segments = pathname.split("/").filter(Boolean);
    const i = segments.indexOf("product");
    const next = i >= 0 ? segments[i + 1] : undefined;
    if (next) raw = next;
  }
  if (!raw) return undefined;
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export const findProduct = (rawSlug?: string) => {
  if (!rawSlug || typeof rawSlug !== "string") return undefined;
  const slug = rawSlug.trim();
  if (!slug) return undefined;
  return products.find(
    (p) => p.slug === slug || p.slug.toLowerCase() === slug.toLowerCase(),
  );
};

export const productsByCategory = (cat: Category) => products.filter((p) => p.category === cat);

/** Girls category page: girls + baby pieces (no ladies / boys). */
export const productsGirlsAndBaby = () =>
  products.filter((p) => p.category === "girls" || p.category === "baby");

export type PriceBand = "all" | "under1000" | "1000-1500" | "1500-2000" | "2000plus";

export const priceBandLabel: Record<Exclude<PriceBand, "all">, string> = {
  under1000: "Under ₹1,000",
  "1000-1500": "₹1,000 – ₹1,500",
  "1500-2000": "₹1,500 – ₹2,000",
  "2000plus": "₹2,000+",
};

export function productMatchesPriceBand(price: number, band: PriceBand): boolean {
  if (band === "all") return true;
  if (band === "under1000") return price < 1000;
  if (band === "1000-1500") return price >= 1000 && price < 1500;
  if (band === "1500-2000") return price >= 1500 && price < 2000;
  return price >= 2000;
}

export type AgeFilter = "all" | AgeBucket;

export function productMatchesAgeFilter(buckets: readonly AgeBucket[], filter: AgeFilter): boolean {
  if (filter === "all") return true;
  return buckets.includes(filter);
}

export const searchProducts = (q: string) => {
  if (!q.trim()) return products;
  const s = q.trim().toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(s) ||
      p.shortDescription.toLowerCase().includes(s) ||
      p.description.toLowerCase().includes(s) ||
      p.ageLabel.toLowerCase().includes(s) ||
      p.category.includes(s) ||
      p.tag?.toLowerCase().includes(s),
  );
};
