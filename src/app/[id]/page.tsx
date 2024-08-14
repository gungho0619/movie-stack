import { fetchTitles, fetchUniverse } from "@/lib/data";
import TitlesProvider from "../../services/providers/TitlesProvider";
import UniverseHeader from "@/components/UniverseHeader";

export default async function Universe({ params }: { params: { id: string } }) {
  const universe = await fetchUniverse(params.id);
  const titles = await fetchTitles(params.id);

  return (
    <TitlesProvider universe={universe} titles={titles}>
      <UniverseHeader />
    </TitlesProvider>
  );
}
