import { TitleType } from "@/lib/types";
import { getTitleFilters } from "./getTitleFilters";

export function filterTitles(titles: TitleType[], filters: string[]) {
  const filteredTitles: TitleType[] = [];
  titles.forEach((title) => {
    const titleFilters = getTitleFilters(title);
    if (!titleFilters.every((filter) => filters.includes(filter))) {
      filteredTitles.push(title);
    }
  });

  return filteredTitles;
}
