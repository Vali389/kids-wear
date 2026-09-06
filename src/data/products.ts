import purpleChunkyBaby from "@/assets/Elegant chumky purple baby frock12-18.jpeg";
import cuteFloral23 from "@/assets/Cute and elegant floral frock 2-3.jpeg";
import lavenderFloral23 from "@/assets/Beautiful lavender floral frock with elegant2-3.jpeg";
import pinkLong810 from "@/assets/Beautiful long frock featuring a stylish pink8-10.jpeg";
import tealLehenga34 from "@/assets/Elegant teal lehenga set featuring intricate golden .jpeg";
import orangeLehenga67 from "@/assets/Beautiful orange lehenga featuring vibrant6-7.jpeg";
import ivoryBaby12 from "@/assets/Elegant ivory baby frock featuring intricate silver1-2.jpeg";
import greyFloral34 from "@/assets/Charming floral frock in a soft grey tone3-4.jpeg";
import redPartyBlack45 from "@/assets/Stylish red party frock featuring a rich black4-5.jpeg";
import pastelBlue45 from "@/assets/Elegant pastel blue party frock4-5.jpeg";
import mustardDress56 from "@/assets/This brightmustratdyellowdress5-6.jpeg";
import blackLehenga1214 from "@/assets/This elegant lehenga set will have a graceful, slightly flared fit with a traditional touch12-14.jpeg";
import brightMaroonEthnic12 from "@/assets/brightand maroonethinicfrock1-2.jpeg";
import adorablePinkPartyFloral from "@/assets/adorablepink partywith fleoral.jpeg";
import ethnicFrockKids from "@/assets/elegantethenic frockkids.jpeg";
import redFestiveGown1012 from "@/assets/elegantredfetsivegown10-12.jpeg";
import richMaroonEthnic918 from "@/assets/elangantrichmaroonandtraditoonlfrock9-18.jpeg";
import vibrantPinkTraditional15 from "@/assets/adorablevibarantpinkand golsdtarditionalfrock1-5.jpeg";
import navyColorful1218 from "@/assets/Vibrant navy blue frock adorned with colorful12-18.jpeg";
import partywearFrock34 from "@/assets/partywaerfrock3-4.jpeg";
import partywearFrock342 from "@/assets/partywaerfrock3-4-2.jpeg";
import partyLongFrock1215 from "@/assets/partywearlongfrog12-15.jpeg";
import pureBanarisiPanchePaijama from "@/assets/pure-banarasi-panchepaijamaset-newborn-2.jpeg";
import pureBanarisiPanchePaijama2 from "@/assets/pure-banarasi-panchepaijamaset-newborn-img-2.jpeg";
import pinkPurpleLehenga1 from "@/assets/Adorable Pink & Purple Traditional Lehenga Set for Baby Girls .jpeg";
import pinkFloralPartyDress from "@/assets/elegant-pink-floral-party-wera-dress-girls-2-3.jpeg";
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

  {
    id: "p48",
    slug: "adorable-pink-purple-lehenga-baby-girls",
    name: "Adorable Pink & Purple Traditional Lehenga Set for Baby Girls",
    price: 2300,
    mrp: 2699,
    category: "girls",
    ageBuckets: ["6-12y"],
    ageLabel: "Age: 6–7 years",
    tag: "Lehenga",
    badge: "Festive",
    colorChip: "#C04B8A",
    shortDescription: "Purple bodice, flutter sleeves, pink zari lehenga. ₹2,300",
    description:
      "Dress your little princess in this charming ethnic lehenga set, designed to make every celebration extra special. The rich purple bodice with stylish flutter sleeves pairs beautifully with the vibrant pink flared lehenga featuring an elegant gold zari border. Crafted for comfort and style, it's perfect for your baby's festive wardrobe.\n\n✨ Features:\n• Premium silk-blend fabric\n• Stylish flutter sleeves\n• Soft inner lining for all-day comfort\n• Beautiful flared lehenga with rich gold zari border\n• Lightweight and baby-friendly\n• Elegant festive look",
    fabric: "Premium silk-blend with soft inner lining",
    care: "Dry clean recommended • Handle gently",
    sizes: ["6-12M", "1-2Y", "2-3Y"],
    images: [pinkPurpleLehenga1],
  },

  {
    id: "p52",
    slug: "elegant-pink-floral-party-wear-dress-girls",
    name: "Elegant Pink Floral Party Wear Dress for Girls",
    price: 1250,
    mrp: 1499,
    category: "girls",
    ageBuckets: ["1-3y"],
    ageLabel: "Age: 2–3 years",
    tag: "Party",
    badge: "Festive",
    colorChip: "#E07A9A",
    shortDescription: "Sweetheart neckline, puff sleeves, floral embroidered pleated skirt. ₹1,250",
    description:
      "Add a touch of elegance to your little princess's wardrobe with this beautiful pink party wear dress. Crafted from premium shiny fabric, it features a stylish sweetheart neckline, trendy puff sleeves, and a beautifully pleated skirt adorned with vibrant floral embroidery. Perfect for festive occasions and celebrations, this dress offers both comfort and style.\n\n✨ Features:\n• Premium satin-finish fabric\n• Elegant sweetheart neckline\n• Stylish puff sleeves\n• Colorful floral embroidered pleated skirt\n• Soft inner lining for all-day comfort\n• Ideal for birthdays, weddings, festivals, parties, and photoshoots\n\nA graceful and eye-catching outfit designed to make your little one shine on every special occasion. 🌸💕",
    fabric: "Premium satin-finish fabric with inner lining",
    care: "Gentle hand wash • Cool iron",
    sizes: ["2-3Y"],
    images: img(pinkFloralPartyDress),
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
