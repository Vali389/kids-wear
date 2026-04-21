import rainbow1 from "@/assets/p-rainbow-tee-1.jpg";
import rainbow2 from "@/assets/p-rainbow-tee-2.jpg";
import rainbow3 from "@/assets/p-rainbow-tee-3.jpg";
import daisy1 from "@/assets/p-daisy-dress-1.jpg";
import daisy2 from "@/assets/p-daisy-dress-2.jpg";
import daisy3 from "@/assets/p-daisy-dress-3.jpg";
import denim1 from "@/assets/p-denim-jacket-1.jpg";
import denim2 from "@/assets/p-denim-jacket-2.jpg";
import denim3 from "@/assets/p-denim-jacket-3.jpg";
import dung1 from "@/assets/p-mint-dungaree-1.jpg";
import dung2 from "@/assets/p-mint-dungaree-2.jpg";
import dung3 from "@/assets/p-mint-dungaree-3.jpg";
import tutu1 from "@/assets/p-tutu-1.jpg";
import tutu2 from "@/assets/p-tutu-2.jpg";
import tutu3 from "@/assets/p-tutu-3.jpg";
import star1 from "@/assets/p-star-hoodie-1.jpg";
import star2 from "@/assets/p-star-hoodie-2.jpg";
import star3 from "@/assets/p-star-hoodie-3.jpg";
import dino1 from "@/assets/p-dino-pj-1.jpg";
import dino2 from "@/assets/p-dino-pj-2.jpg";
import dino3 from "@/assets/p-dino-pj-3.jpg";
import uni1 from "@/assets/p-unicorn-tee-1.jpg";
import uni2 from "@/assets/p-unicorn-tee-2.jpg";
import uni3 from "@/assets/p-unicorn-tee-3.jpg";
import jog1 from "@/assets/p-jogger-1.jpg";
import jog2 from "@/assets/p-jogger-2.jpg";
import jog3 from "@/assets/p-jogger-3.jpg";

export type Category = "boys" | "girls" | "baby";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  mrp: number;
  category: Category;
  tag?: string;
  badge?: string;
  colorChip: string;
  shortDescription: string;
  description: string;
  fabric: string;
  care: string;
  sizes: string[];
  images: string[];
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "rainbow-stripe-tee",
    name: "Rainbow Stripes Tee",
    price: 599,
    mrp: 899,
    category: "boys",
    tag: "Bestseller",
    badge: "New",
    colorChip: "var(--mint)",
    shortDescription: "Soft pastel rainbow stripes that pop on any playground.",
    description:
      "Our Rainbow Stripes Tee is crafted from breathable 100% organic cotton with a relaxed fit. Pastel mint, peach, sky and sunshine stripes make it the happiest tee in the drawer.",
    fabric: "100% organic cotton, 180 GSM",
    care: "Machine wash cold • Tumble dry low • Iron inside out",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    images: [rainbow1, rainbow2, rainbow3],
  },
  {
    id: "p2",
    slug: "daisy-sundress",
    name: "Sunny Daisy Sundress",
    price: 899,
    mrp: 1299,
    category: "girls",
    tag: "Trending",
    colorChip: "var(--sunshine)",
    shortDescription: "Twirl-worthy yellow daisy print with ruffled hem.",
    description:
      "Bring sunshine to every party with our daisy print sundress. Featuring a flutter-sleeve top, fitted bodice and a generous twirl skirt with a sweet ruffled hem.",
    fabric: "100% rayon, soft & flowy",
    care: "Hand wash cold • Line dry in shade • Cool iron",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    images: [daisy1, daisy2, daisy3],
  },
  {
    id: "p3",
    slug: "sky-denim-jacket",
    name: "Sky Denim Jacket",
    price: 1299,
    mrp: 1799,
    category: "boys",
    badge: "New",
    colorChip: "var(--sky)",
    shortDescription: "Classic light wash denim, made tiny and tough.",
    description:
      "A wardrobe staple in soft-washed light denim. Two chest pockets, sturdy buttons and reinforced stitching for endless adventures.",
    fabric: "98% cotton, 2% elastane denim",
    care: "Wash with similar colors • Tumble dry low",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
    images: [denim1, denim2, denim3],
  },
  {
    id: "p4",
    slug: "mint-dungarees",
    name: "Mint Garden Dungarees",
    price: 999,
    mrp: 1399,
    category: "baby",
    tag: "Cozy",
    colorChip: "var(--mint)",
    shortDescription: "Soft mint dungarees with wooden buttons.",
    description:
      "Our cosiest dungarees in pillowy soft cotton twill. Adjustable straps with chunky wooden buttons and roomy front pocket.",
    fabric: "100% cotton twill",
    care: "Machine wash cold • Tumble dry low",
    sizes: ["6-9M", "9-12M", "12-18M", "18-24M", "2-3Y"],
    images: [dung1, dung2, dung3],
  },
  {
    id: "p5",
    slug: "ballet-pink-tutu",
    name: "Ballet Pink Tutu",
    price: 749,
    mrp: 1099,
    category: "girls",
    tag: "Dreamy",
    colorChip: "var(--peach)",
    shortDescription: "Fluffy tulle layers with a satin bow.",
    description:
      "Made for ballerinas and birthday queens. Three layers of soft tulle, a comfy elastic waistband and a satin ribbon bow at the front.",
    fabric: "100% nylon tulle • cotton liner",
    care: "Hand wash gently • Line dry • Do not iron tulle",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    images: [tutu1, tutu2, tutu3],
  },
  {
    id: "p6",
    slug: "starry-sky-hoodie",
    name: "Starry Sky Hoodie",
    price: 1099,
    mrp: 1499,
    category: "boys",
    tag: "Cozy",
    badge: "Limited",
    colorChip: "var(--sky)",
    shortDescription: "Soft fleece hoodie with friendly star print.",
    description:
      "Cuddle weather essential in brushed fleece. Roomy kangaroo pocket, ribbed cuffs and a smiling star on the chest.",
    fabric: "80% cotton, 20% polyester fleece",
    care: "Machine wash cold • Tumble dry low",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    images: [star1, star2, star3],
  },
  {
    id: "p7",
    slug: "dino-pj-set",
    name: "Tiny Dino PJ Set",
    price: 849,
    mrp: 1199,
    category: "baby",
    tag: "Bestseller",
    colorChip: "var(--mint)",
    shortDescription: "Mint and peach dino prints for sweet dreams.",
    description:
      "A two-piece PJ set in buttery soft modal. Gentle elastic waistband, ribbed cuffs and the cutest little dinos all over.",
    fabric: "95% modal, 5% spandex",
    care: "Machine wash cold • Tumble dry low",
    sizes: ["6-12M", "1-2Y", "2-3Y", "3-4Y"],
    images: [dino1, dino2, dino3],
  },
  {
    id: "p8",
    slug: "lavender-unicorn-tee",
    name: "Lavender Unicorn Tee",
    price: 549,
    mrp: 799,
    category: "girls",
    badge: "New",
    colorChip: "var(--lavender)",
    shortDescription: "Magical unicorn print on dreamy lavender.",
    description:
      "A whimsical tee in soft lavender cotton, with a sparkling white unicorn print and a relaxed comfy fit.",
    fabric: "100% combed cotton",
    care: "Machine wash cold • Tumble dry low • Iron inside out",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    images: [uni1, uni2, uni3],
  },
  {
    id: "p9",
    slug: "explorer-cargo-jogger",
    name: "Explorer Cargo Joggers",
    price: 1199,
    mrp: 1599,
    category: "boys",
    tag: "Trending",
    colorChip: "var(--peach)",
    shortDescription: "Beige cargo joggers with secret side pockets.",
    description:
      "Adventure ready joggers with a comfy elastic waist, drawstring and side cargo pockets perfect for tiny treasures.",
    fabric: "97% cotton, 3% elastane",
    care: "Machine wash cold • Tumble dry low",
    sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
    images: [jog1, jog2, jog3],
  },
];

export const findProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const productsByCategory = (cat: Category) =>
  products.filter((p) => p.category === cat);

export const searchProducts = (q: string) => {
  if (!q.trim()) return products;
  const s = q.trim().toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(s) ||
      p.shortDescription.toLowerCase().includes(s) ||
      p.category.includes(s) ||
      p.tag?.toLowerCase().includes(s),
  );
};
