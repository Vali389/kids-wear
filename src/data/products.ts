import partyLongRoyal from "@/assets/brightroyaland pinkethinicfrock9-18.jpeg";
import partyWearFrock from "@/assets/girls-herosectionew-1.jpeg";
import partyChunkyFrock from "@/assets/giersherosection-new-3.jpeg";
import elegantPurpleZari from "@/assets/elegantethenic frockkids.jpeg";
import pinkFloralParty from "@/assets/adorablepink partywith fleoral.jpeg";
import redFestiveGown from "@/assets/elegantredfetsivegown10-12.jpeg";
import greenFloralLehenga from "@/assets/elegantgerreenforallehanga6-7.jpeg";
import mustardLongFrock from "@/assets/eleganntmutsarrdyeloowlongfronk10-15.jpeg";
import pinkGoldTraditional from "@/assets/adorablevibarantpinkand golsdtarditionalfrock1-5.jpeg";
import orangeMaroonEthnic from "@/assets/brightand maroonethinicfrock1-2.jpeg";
import maroonGoldTraditional from "@/assets/elangantrichmaroonandtraditoonlfrock9-18.jpeg";

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

/** Kathyayani Kids Wear — product photos map 1:1 to assets filenames */
export const products: Product[] = [
  {
    id: "k1",
    slug: "party-wear-long-frock-12-15",
    name: "Party wear long frock",
    price: 4599,
    mrp: 5999,
    category: "girls",
    tag: "Party wear",
    colorChip: "var(--lavender)",
    shortDescription:
      "Double-lined long frock in crepe with comfortable cotton lining. Ages 12–15 years.",
    description:
      "Party wear long frock with double lining — crepe outer and soft cotton lining for comfort through long celebrations. Sized for ages 12–15 years.",
    fabric: "Crepe with cotton lining",
    care: "Dry clean recommended • Gentle hand wash in cold water • Cool iron",
    sizes: ["12Y", "13Y", "14Y", "15Y"],
    images: [partyLongRoyal, partyLongRoyal],
  },
  {
    id: "k2",
    slug: "party-wear-frock-tissue",
    name: "Party wear frock",
    price: 2199,
    mrp: 2999,
    category: "girls",
    tag: "Comfort",
    colorChip: "var(--peach)",
    shortDescription:
      "Smooth tissue with cotton lining. All-day comfort in every season.",
    description:
      "Party wear frock in smooth tissue with breathable cotton lining, designed so kids stay comfortable all day across seasons. Ages: 3–4 years ankle length, 4–5 years knee length.",
    fabric: "Tissue with cotton lining",
    care: "Gentle hand wash • Line dry • Cool iron inside out",
    sizes: ["3-4Y (ankle length)", "4-5Y (knee length)"],
    images: [partyWearFrock, partyWearFrock],
  },
  {
    id: "k3",
    slug: "party-wear-chunky-work-frock",
    name: "Party wear chunky work frock",
    price: 2499,
    mrp: 3299,
    category: "girls",
    tag: "Statement",
    colorChip: "var(--sunshine)",
    shortDescription:
      "Smooth tissue with chunky work and cotton lining — festive and breathable.",
    description:
      "Party wear chunky work frock: smooth tissue with eye-catching chunky work and soft cotton lining. Built for celebrations while staying comfortable every season. Ages: 3–4 years ankle length, 4–5 years knee length.",
    fabric: "Tissue with cotton lining • embroidered / chunky panels",
    care: "Gentle hand wash • Do not bleach • Steam or cool iron away from trims",
    sizes: ["3-4Y (ankle length)", "4-5Y (knee length)"],
    images: [partyChunkyFrock, partyChunkyFrock],
  },
  {
    id: "k4",
    slug: "elegant-purple-zari-ethnic-frock",
    name: "Elegant ethnic frock",
    price: 2899,
    mrp: 3899,
    category: "girls",
    tag: "Ethnic",
    badge: "Festive",
    colorChip: "var(--lavender)",
    shortDescription:
      "Lightweight fabric with white base and rich purple zari border; ruffled bodice for a festive silhouette.",
    description:
      "Elegant ethnic frock for kids featuring soft, lightweight fabric for all-day comfort. Beautiful white base with a rich purple zari border and a stylish ruffle detail across the bodice. Flared silhouette for ease of movement — ideal for celebrations, functions, and special occasions. Breathable and suitable for every season.",
    fabric: "Lightweight festive weave with cotton or blended lining where applicable",
    care: "Gentle hand wash • Line dry • Cool iron • Store folded with care",
    sizes: ["4-5Y"],
    images: [elegantPurpleZari, elegantPurpleZari],
  },
  {
    id: "k5",
    slug: "adorable-pink-floral-party-frock",
    name: "Adorable pink party frock",
    price: 2299,
    mrp: 2999,
    category: "girls",
    tag: "Pink",
    colorChip: "var(--peach)",
    shortDescription: "Pink party frock with floral embroidery and a cute bow.",
    description:
      "Adorable pink party frock with floral embroidery and sweet bow detailing. Lightweight, comfortable, and perfect for birthdays and special occasions.",
    fabric: "Lightweight woven / embroidered sections with soft lining",
    care: "Gentle hand wash • Dry flat • Light steam",
    sizes: ["3-4Y", "4-5Y"],
    images: [pinkFloralParty, pinkFloralParty],
  },
  {
    id: "k6",
    slug: "elegant-red-festive-gown",
    name: "Elegant red festive gown",
    price: 3999,
    mrp: 4999,
    category: "girls",
    tag: "Gown",
    badge: "Occasion",
    colorChip: "var(--berry)",
    shortDescription: "Gold embroidery with a flared festive silhouette.",
    description:
      "Elegant red festive gown with refined gold embroidery, flared silhouette, and a soft comfortable fit — made for standout moments.",
    fabric: "Rich festive fabric with embroidery / highlights",
    care: "Dry clean preferred • Gentle spot clean • Hang or fold with care",
    sizes: ["10-12Y", "12-13Y"],
    images: [redFestiveGown, redFestiveGown],
  },
  {
    id: "k7",
    slug: "elegant-green-floral-lehenga",
    name: "Elegant green floral lehenga",
    price: 3499,
    mrp: 4499,
    category: "girls",
    tag: "Lehenga",
    colorChip: "var(--mint)",
    shortDescription: "Printed bodice with a rich satin skirt for festive sparkle.",
    description:
      "Elegant green floral lehenga with a rich satin skirt and a beautifully printed bodice — timeless festive dressing done right.",
    fabric: "Satin skirt • printed bodice with cotton/blend liner",
    care: "Gentle hand wash separates if needed • Steam on low • Store hanging or folded separately",
    sizes: ["6-7Y", "7-8Y"],
    images: [greenFloralLehenga, greenFloralLehenga],
  },
  {
    id: "k8",
    slug: "elegant-mustard-long-traditional-frock",
    name: "Elegant mustard-yellow long frock",
    price: 4299,
    mrp: 5499,
    category: "girls",
    tag: "Traditional",
    colorChip: "var(--sunshine)",
    shortDescription: "Full sleeves with desert-inspired border motifs.",
    description:
      "Elegant mustard-yellow long frock with fitted V-neck bodice, full sleeves, and graceful flare. Detailed with delicate silver motifs and an embroidered lower border showcasing camels and palm trees — a refined classic look.",
    fabric: "Festive fabric with embroidery accents",
    care: "Dry clean or gentle dry wash • Steam carefully on embroidery • Avoid harsh detergents",
    sizes: ["10Y", "11Y", "12Y", "13Y", "14Y", "15Y"],
    images: [mustardLongFrock, mustardLongFrock],
  },
  {
    id: "k9",
    slug: "vibrant-pink-gold-traditional-frock",
    name: "Vibrant pink & gold traditional frock",
    price: 1999,
    mrp: 2599,
    category: "girls",
    tag: "Little ones",
    colorChip: "var(--peach)",
    shortDescription:
      "Pink and rich gold-toned traditional frock with a flared festive shape.",
    description:
      "Adorable vibrant pink and gold traditional frock with intricate zari-style patterns and a flared silhouette — celebrations made picture-perfect.",
    fabric: "Traditional weave / blend with metallic highlights",
    care: "Gentle hand wash • Line dry • Light iron on reverse",
    sizes: ["1Y", "2Y", "3Y", "4Y", "5Y"],
    images: [pinkGoldTraditional, pinkGoldTraditional],
  },
  {
    id: "k10",
    slug: "bright-orange-maroon-ethnic-frock",
    name: "Bright orange & maroon ethnic frock",
    price: 1799,
    mrp: 2299,
    category: "girls",
    tag: "Kanchi style",
    colorChip: "var(--berry)",
    shortDescription:
      "Bright orange / maroon with elegant Kanchi-style pattu borders.",
    description:
      "Bright orange and maroon ethnic frock with graceful Kanchi-inspired pattu zari borders and a pleated silhouette — heirloom charm for littles.",
    fabric: "Silk-touch / pattu-inspired borders with breathable lining",
    care: "Dry clean recommended • Gentle hand wash if suited to fabric • Store folded with tissue",
    sizes: ["1-2Y"],
    images: [orangeMaroonEthnic, orangeMaroonEthnic],
  },
  {
    id: "k11",
    slug: "rich-maroon-gold-traditional-frock",
    name: "Rich maroon & gold traditional frock",
    price: 2199,
    mrp: 2799,
    category: "girls",
    tag: "Heritage",
    colorChip: "var(--berry)",
    shortDescription:
      "Classic pleated silhouette with ornate maroon-and-gold zari border.",
    description:
      "Elegant rich maroon and gold traditional frock with pleated flare and ornate zari border — a polished festive look for your little one.",
    fabric: "Traditional festive fabric with zari accents",
    care: "Dry clean recommended • Mild hand wash only if labelled safe • Cool iron • Avoid direct perfume on zari",
    sizes: ["9-18M", "2-3Y"],
    images: [maroonGoldTraditional, maroonGoldTraditional],
  },
];

export const findProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productsByCategory = (cat: Category) => products.filter((p) => p.category === cat);

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
