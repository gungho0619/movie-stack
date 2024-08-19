import { fetchTitles, fetchUniverse, fetchUniverses } from "@/lib/data";
import TitlesProvider from "../../services/providers/TitlesProvider";
import UniverseHeader from "@/components/UniverseHeader";
import { Metadata, ResolvingMetadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateStaticParams() {
//   const universes = await fetchUniverses();
//   return universes.map((universe) => universe.id);
// }

const getUniverse = cache(async (id: string) => {
  return await fetchUniverse(id);
});

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const universe = await getUniverse(id);

  if (!universe) notFound();

  return {
    title: universe.title,
    description: universe.description,
    openGraph: {
      images: [
        {
          url: universe.banner_url,
        },
      ],
    },
  };
}

export default async function Universe({ params }: { params: { id: string } }) {
  const universe = await getUniverse(params.id);
  const titles = await fetchTitles(params.id);

  return (
    <TitlesProvider universe={universe} titles={titles}>
      <UniverseHeader />
    </TitlesProvider>
  );
}
