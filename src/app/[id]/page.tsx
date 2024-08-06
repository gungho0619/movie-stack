import Title from "@/components/title";
import { fetchTitles, fetchUniverse } from "@/lib/data";
import { TitleType } from "@/lib/types";
import ProgressProvider from "../provider";

export default async function Universe({ params }: { params: { id: string } }) {
  const universe = await fetchUniverse(params.id);
  const titles = await fetchTitles(params.id);

  return (
    <ProgressProvider>
      <div className="text-white flex flex-col items-center h-full overflow-auto">
        <div className="w-full p-8 text-center text-4xl font-bold">
          {universe.title}
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

function sortTitlesByRelease(titles: TitleType[]): TitleType[] {
  const sortedTitles: TitleType[] = [];

  while (titles.length > 0) {
    let oldestTitle = titles[0];
    titles.forEach((title) => {
      if (title.release_date < oldestTitle.release_date) {
        oldestTitle = title;
      }
    });
    titles = titles.filter((title) => title.id !== oldestTitle.id);
    sortedTitles.push(oldestTitle);
  }

  return sortedTitles;
}
