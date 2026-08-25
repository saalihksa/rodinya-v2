export const paths = {
  home: "/",
  about: "/hakkimizda",
  story: "/hikaye",
  venue: "/mekan",
  gallery: "/galeri",
  chefs: "/sefler",
  menu: "/menu",
  blog: "/yazilar",
  post: (slug: string) => `/yazilar/${slug}` as const,
  contact: "/iletisim",
  comingSoon: "/yakinda",
  portfolio: "/portfolyo",
} as const;
