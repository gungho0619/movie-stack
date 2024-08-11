import { fetchTitles, fetchUniverse } from "@/lib/data";
import ProgressProvider from "../../services/providers/completed-titles-provider";
import { sortTitlesByRelease } from "@/utils/sort-titles-release-order";
import Title from "@/components/Title";

export default async function Universe({ params }: { params: { id: string } }) {
  const universe = await fetchUniverse(params.id);
  const titles = await fetchTitles(params.id);

  return (
    <ProgressProvider>
      <div className="text-white flex flex-col items-center h-full overflow-auto">
        <div className="max-w-[800px] w-full my-8">
          <div className=" w-[90%] mx-auto font-black text-[3rem] sm:text-[5rem]">
            {universe.title}
          </div>
        </div>

        <div
          className="flex flex-col"
          style={{ marginBottom: "50svh", gap: "clamp(0.5rem,5vw,2rem)" }}
        >
          {sortTitlesByRelease(titles).map((title, i) => (
            <Title key={title.id} data={title} position={i}></Title>
          ))}
        </div>
      </div>
    </ProgressProvider>
  );
}
