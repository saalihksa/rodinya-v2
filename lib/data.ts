import { images } from "./images";
import { siteContact } from "./contact";

export type NavChild = { label: string; href: string; children?: NavChild[] };

export const navItems: { label: string; href: string; children?: NavChild[] }[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Hakkımızda",
    href: "/about",
    children: [
      { label: "Hakkımızda", href: "/about" },
      { label: "Hikâyemiz", href: "/chef" },
      { label: "Mekân", href: "/kitchen" },
      { label: "Galeri", href: "/gallery" },
    ],
  },
  { label: "Menü", href: siteContact.menuPath },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/contact" },
];

export const choiceMenu = [
  {
    title: "Antep fıstıklı Sebastian",
    price: "₺245",
    desc: "San Sebastian, Antep fıstığı ile",
  },
  {
    title: "Osco",
    price: "₺235",
    desc: "Çikolata, çilek, fıstık",
  },
  {
    title: "Rodinya Profiterol",
    price: "₺225",
    desc: "Çikolata, kadayıf, fıstık",
  },
];

export const testimonials = [
  {
    quote:
      "Güne böyle bir kahvaltıyla başlamak harikaydı. Hem lezzet hem sunum beklentimin üzerindeydi.",
    name: "Mehmet Ömer Kılıç",
    role: "Google yorumu",
  },
  {
    quote:
      "Galata Kulesi yakınında viral San Sebastian’ı denedik — hayal kırıklığına uğratmadı. İç kısmı yumuşak ve ipeksiydi.",
    name: "Naima Qaseem",
    role: "Google yorumu",
  },
  {
    quote:
      "Cheesecake’ler muhteşemdi. Kahve ve elma çayı da çok iyiydi. Kesinlikle tavsiye ederim.",
    name: "Kelly Ventura",
    role: "Google yorumu",
  },
];

export const locations = [
  {
    title: siteContact.name,
    lines: [siteContact.address.street, siteContact.address.district, siteContact.phoneDisplay],
    hours: siteContact.hours.dailyLabel,
  },
];

export const fullMenu = {
  appetizers: [
    { title: "Çoban Salata", price: "₺195", desc: "Salatalık, domates, biber, soğan, zeytin ve beyaz peynir" },
    { title: "Avokadolu tost", price: "₺229", desc: "Taze ekmek, avokado, mevsim yeşillikleri" },
    { title: "Sahanda yumurta", price: "₺189", desc: "Tereyağında yumurta, taze ekmek" },
    { title: "Somonlu tost", price: "₺289", desc: "Füme somon, krem peynir, dereotu" },
    { title: "Sucuklu yumurta", price: "₺249", desc: "Sahanda sucuk ve yumurta" },
    { title: "Mevsim yeşillikleri", price: "₺165", desc: "Taze salata, zeytinyağı, limon" },
  ],
  mains: [
    { title: "Antep fıstıklı Sebastian", price: "₺245", desc: "San Sebastian, Antep fıstığı ile" },
    { title: "Osco", price: "₺235", desc: "Çikolata, çilek, fıstık" },
    { title: "Rodinya Profiterol", price: "₺225", desc: "Çikolata, kadayıf, fıstık" },
    { title: "Çilekli pasta", price: "₺215", desc: "Mevsim çileği, krema" },
    { title: "Çikolatalı tart", price: "₺255", desc: "Yoğun çikolata, Antep fıstığı" },
    { title: "Sade San Sebastian", price: "₺225", desc: "Klasik yanık cheesecake" },
  ],
  desserts: [
    { title: "Filtre kahve", price: "₺95", desc: "Taze çekilmiş kahve" },
    { title: "Latte", price: "₺125", desc: "Espresso ve buharda süt" },
    { title: "Ice latte", price: "₺135", desc: "Soğuk süt, espresso" },
    { title: "Türk çayı", price: "₺55", desc: "Demlik çay" },
    { title: "Nar çayı", price: "₺95", desc: "Sıcak nar infüzyonu" },
    { title: "Sıcak çikolata", price: "₺115", desc: "Yoğun kakao" },
    { title: "Limonata", price: "₺95", desc: "Taze limon" },
  ],
};

export const chefs = [
  {
    name: "Kahvaltı",
    role: "07:00 – 14:00",
    image: images.chefs[1],
    bio: "Sahanda yumurta, sucuk, tost ve mevsim yeşillikleri. Brunch her gün 07:00 – 14:00.",
  },
  {
    name: "Galata",
    role: "Büyük Hendek",
    image: images.chefs[0],
    bio: "Şahkulu, Büyük Hendek Caddesi No:4-B. Galata Kulesi’ne yakın, kahve ve kahvaltı için durun.",
  },
  {
    name: "Tatlı",
    role: "Gün boyu",
    image: images.chefs[2],
    bio: "Kahvenin yanına San Sebastian, çikolata ve fıstıklı pasta. Öğleden sonra ve gece de açık.",
  },
];

export const products = [
  { slug: "antep-sebastian", title: "Antep fıstıklı Sebastian", price: 280, image: images.products[0], cat: "tatlı" },
  { slug: "osco", title: "Osco", price: 260, image: images.products[1], cat: "tatlı" },
  { slug: "profiterol", title: "Rodinya Profiterol", price: 240, image: images.products[2], cat: "tatlı" },
  { slug: "brunch", title: "Brunch tabağı", price: 390, image: images.products[3], cat: "kahvaltı" },
  { slug: "kahve", title: "Filtre kahve", price: 95, image: images.products[4], cat: "içecek" },
  { slug: "limonata", title: "Limonata", price: 95, image: images.products[5], cat: "içecek" },
];

export const posts = [
  {
    slug: "galata-kahvalti",
    title: "Galata’da kahvaltı saatleri",
    date: "12 Ocak 2025",
    image: images.blog[0],
    excerpt: "Her gün 07:00 – 14:00 kahvaltı ve brunch. Sahanda yumurta, sucuk, tost ve taze ekmek.",
  },
  {
    slug: "san-sebastian",
    title: "San Sebastian ve kahve",
    date: "5 Ocak 2025",
    image: images.blog[1],
    excerpt: "Çikolatalı veya sade cheesecake, Türk çayı veya filtre kahve ile. Galata’da öğleden sonra için.",
  },
  {
    slug: "buyuk-hendek",
    title: "Büyük Hendek Caddesi’nde",
    date: "28 Aralık 2024",
    image: images.blog[2],
    excerpt: "Şahkulu No:4-B. Kule’ye yürüyerek, her gün 07:00 – 02:00 kahve ve tatlı.",
  },
];

export const historyCards = [
  {
    year: "07:00",
    title: "Kahvaltı ve brunch",
    body: "Güne taze yumurta, sahanda sucuk, tost ve mevsim yeşillikleriyle başlıyoruz. Kahvaltı servisi her gün 07:00 – 14:00.",
    image: "/images/rodinya/instagram/ig-01.jpg",
  },
  {
    year: "Galata",
    title: "Büyük Hendek’te",
    body: "Şahkulu, Büyük Hendek Caddesi No:4-B. Galata Kulesi’ne yakın, kahve ve kahvaltı için durun.",
    image: "/images/rodinya/mekan/mekan-vitrin.jpg",
  },
  {
    year: "Tatlı",
    title: "Tatlı",
    body: "Kahvenin yanına San Sebastian, çikolata ve fıstıklı pasta. Öğleden sonra ve gece de açık.",
    image: "/images/rodinya/mekan/mekan-tatli-vitrin.jpg",
  },
];

export const seasonalCards = [
  {
    image: "/images/rodinya/sequence-05.jpg",
    eyebrow: "Kahve ve içecek",
    title: "Her an için",
    body: "Limonata, ice latte ve taze çekilmiş kahve — Galata’da soğuk veya sıcak, günün her saati.",
  },
  {
    image: "/images/rodinya/seasonal/brunch.jpg",
    eyebrow: "Brunch",
    title: "Taze tabaklar",
    body: "Avokadolu tost, somon, sahanda yumurta ve mevsim yeşillikleri. Kahvaltı her gün 07:00 – 14:00.",
  },
  {
    image: "/images/rodinya/mekan/mekan-tatli-vitrin.jpg",
    eyebrow: "Tatlılar",
    title: "Pastalar",
    body: "San Sebastian, çilekli pasta, çikolata ve Antep fıstıklı tart.",
  },
];

export const googleReviews = [
  {
    name: "Mehmet Ömer Kılıç",
    text: "Güne böyle bir kahvaltıyla başlamak harikaydı. Hem lezzet hem sunum beklentimin üzerindeydi. Özellikle omlet, sahanda yumurta ve taptaze ekmekler çok başarılıydı.",
  },
  {
    name: "Naima Qaseem",
    text: "Galata Kulesi yakınında viral San Sebastian’ı denedik — hayal kırıklığına uğratmadı. Cheesecake yumuşak ve ipeksiydi.",
  },
  {
    name: "Mohamed Aslam",
    text: "Galata Kulesi manzarası harika. Personel çok ilgili ve karşılayıcıydı.",
  },
  {
    name: "Kelly Ventura",
    text: "Cheesecake’ler muhteşemdi. Kahve ve elma çayı da çok iyiydi. Kesinlikle tavsiye ederim.",
  },
] as const;
