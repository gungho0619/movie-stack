import { TitleType } from "@/lib/types";
import { getTitleFilters } from "./getTitleFilters";

export function filterTitles(
  titles: TitleType[],
  branchFilters: string[],
  typeFilters: string[]
) {
  let filteredTitles: TitleType[] = [];
  titles.forEach((title) => {
    const titleFilters = getTitleFilters(title);
    if (!titleFilters.every((filter) => branchFilters.includes(filter))) {
      filteredTitles.push(title);
    }
  });
  filteredTitles = filteredTitles.filter(
    (title) => !typeFilters.includes(title.type)
  );
  return filteredTitles;
}
