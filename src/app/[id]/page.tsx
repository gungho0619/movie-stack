import Title from "@/components/title";
import { fetchTitles, fetchUniverse } from "@/lib/data";

export default async function Universe({ params }: { params: { id: string } }) {
  const universe = await fetchUniverse(params.id);
  const titles = await fetchTitles(params.id);

  return (
    <div className="text-white flex flex-col items-center">
      <div className="w-full p-8 text-center text-4xl font-bold">
        {universe.title}
      </div>
      <div className="flex flex-col gap-4">
        {titles.map((title, i) => (
          <Title key={title.id} data={title} position={i}></Title>
        ))}
      </div>
    </div>
  );
}
