import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newseokkwang.kr";

  const routes = [
    "",
    "/about",
    "/about/vision",
    "/about/pastor",
    "/about/staff",
    "/worship",
    "/sermons",
    "/news",
    "/newcomer",
    "/contact",
    "/gallery",
    "/ministry",
    "/offering",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/worship" || route === "/sermons" ? 0.8 : 0.6,
  }));
}
