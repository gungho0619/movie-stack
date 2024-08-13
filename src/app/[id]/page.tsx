import { fetchTitles, fetchUniverse } from "@/lib/data";
import ProgressProvider from "../../services/providers/ProgressProvider";
import Title from "@/components/Title";
import { sortTitlesByRelease } from "@/utils/sortTitlesByRelease";
import { calculateTotalDuration } from "@/utils/calculateTotalDuration";
import { getTitleFilters } from "@/utils/getTitleFilters";
import FilterList from "@/components/FilterList";

export default async function Universe({ params }: { params: { id: string } }) {
  const universe = await fetchUniverse(params.id);
  const titles = await fetchTitles(params.id);

  return (
    <ProgressProvider>
      <div className="text-white flex flex-col items-center h-full overflow-auto">
        <div className="max-w-[800px] w-full my-8 mb-8">
          <div className="mx-auto w-[90%] h-full border-custom-text">
            <div className=" gap-4 mx-auto mb-8  flex flex-col items-center">
              <div
                className="bg-[var(--primary)] w-full p-8"
                style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.8)" }}
              >
                <div
                  className="mb-2 font-black text-[2rem] leading-[2rem] sm:text-[3rem] sm:leading-[3rem] 
                text-center bg-[var(--primary)] p-4 w-full flex flex-col items-center"
                >
                  {universe.title}
                </div>
                <div className="p-4 text-[rgb(255,255,255,0.8)]">
                  {universe.description}
                </div>
              </div>

              <div
                className="bg-[var(--primary)] p-8 grid grid-cols-1 grid-co sm:grid-cols-2 w-full"
                style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.8)" }}
              >
                <div className="sm:col-span-2">
                  <FilterList titles={sortTitlesByRelease(titles)} />
                </div>

                <div className=" p-4 w-full flex flex-col items-center sm:border-r border-custom-text">
                  <h2 className="text-custom-text ">Total number of titles:</h2>
                  <div className="text-[2rem] sm:text-[3rem] font-black text-center">
                    {titles.length}
                  </div>
                </div>

                <div className="p-4 w-full flex flex-col items-center border-t border-custom-text sm:border-0">
                  <h2 className="text-custom-text">Total duration:</h2>
                  <div className="m-auto text-[1.6rem] sm:text-[2rem] font-black text-center">
                    {calculateTotalDuration(titles)}
                  </div>
                </div>
              </div>
            </div>
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
