import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://monkscanner.com";

  const routes = [
    "",
    "/qr-types",
    "/features",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",

    "/url-qr-code-generator",
    "/wifi-qr-code-generator",
    "/vcard-qr-code-generator",
    "/whatsapp-qr-code-generator",
    "/menu-qr-code-generator",

    "/blog/free-qr-code-generator",
    "/blog/how-to-create-qr-code",
    "/blog/qr-code-for-business",
    "/blog/qr-code-for-restaurant-menu",
    "/blog/qr-code-for-instagram",
    "/blog/qr-code-best-practices",
    "/blog/dynamic-qr-code-explained",
    "/blog/qr-code-for-flyers",
    "/blog/qr-code-for-events",
    "/blog/qr-code-marketing-guide",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/blog" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route.includes("qr-code-generator")
        ? 0.9
        : route.startsWith("/blog/")
        ? 0.8
        : 0.7,
  }));
}