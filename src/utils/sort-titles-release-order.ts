import { TitleType } from "@/lib/types";

export function sortTitlesByRelease(titles: TitleType[]): TitleType[] {
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
