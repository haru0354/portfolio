import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = "サイトのURL";
  const _lastModified = new Date().toISOString();

  const staticPaths = [
    {
      url: `${baseURL}`,
      lastModified: _lastModified,
    },
  ];
    
  return staticPaths;
}
