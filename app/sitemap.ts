import type { MetadataRoute } from "next";

const baseUrl = "https://www.alatadogalgaz.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/hakkimizda", "/hizmetlerimiz", "/guvenli-dogalgaz", "/iletisim"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
