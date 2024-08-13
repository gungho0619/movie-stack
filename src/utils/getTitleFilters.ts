import { TitleType } from "@/lib/types";

export function getTitleFilters(title: TitleType) {
  const filters = title.branch.split("/");
  return filters;
}
