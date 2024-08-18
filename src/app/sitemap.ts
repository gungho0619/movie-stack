import { fetchUniverses } from "@/lib/data";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const universes = await fetchUniverses();

  const universeEntries: MetadataRoute.Sitemap = universes.map((universe) => ({
    url: `https://moviestack-woad.vercel.app/${universe.id}`,
  }));

  return universeEntries;
}
