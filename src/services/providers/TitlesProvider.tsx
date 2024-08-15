"use client";
import { TitleType, UniverseType } from "@/lib/types";
import { filterTitles } from "@/utils/filterTitles";
import { getTitleFilters } from "@/utils/getTitleFilters";
import React, { createContext, useEffect, useState } from "react";

type ContextProps = {
  universe: UniverseType | null;
  titles: TitleType[];
  filters: string[];
  filteredtitles: TitleType[];
  completed: string[];
  checkTitle: (id: string) => void;
  resetTitles: () => void;
  bannedFilters: string[];
  switchAllFilters: (active: boolean) => void;
  checkFilter: (filter: string) => void;
};

export const TitlesContext = createContext<ContextProps>({
  universe: null,
  titles: [],
  filters: [],
  filteredtitles: [],
  completed: [],
  checkTitle: () => {},
  resetTitles: () => {},
  bannedFilters: [],
  switchAllFilters: () => {},
  checkFilter: () => {},
});

export default function TitlesProvider({
  children,
  universe,
  titles,
}: {
  children: React.ReactNode;
  universe: UniverseType | null;
  titles: TitleType[];
}) {
  const [filteredTitles, setFilteredTitles] = useState<TitleType[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [bannedFilters, setBannedFilters] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setFilteredTitles(filterTitles(titles, bannedFilters));
  }, [titles, bannedFilters]);

  useEffect(() => {
    const filterSet = new Set<string>();

    titles.forEach((title) => {
      const currentFilters = getTitleFilters(title);
      currentFilters.forEach((filter) => filterSet.add(filter));
    });
    setFilters(Array.from(filterSet).sort());
  }, [titles]);

  function checkTitle(id: string) {
    if (completed.includes(id)) {
      setCompleted((prev) => prev.filter((currentId) => currentId != id));
    } else if (!completed.includes(id)) {
      setCompleted((prev) => [...prev, id]);
    }
  }

  function resetTitles() {
    setCompleted([]);
  }

  function switchAllFilters(active: boolean) {
    if (active) {
      setBannedFilters([]);
    } else {
      setBannedFilters(filters);
    }
  }

  function checkFilter(filter: string) {
    if (bannedFilters.includes(filter)) {
      setBannedFilters((prev) =>
        prev.filter((currentFilter) => currentFilter !== filter)
      );
    } else if (!bannedFilters.includes(filter)) {
      setBannedFilters((prev) => [...prev, filter]);
    }
  }

  return (
    <TitlesContext.Provider
      value={{
        universe: universe,
        titles: titles,
        filters,
        filteredtitles: filteredTitles,
        completed,
        checkTitle,
        resetTitles,
        bannedFilters,
        switchAllFilters,
        checkFilter,
      }}
    >
      {children}
    </TitlesContext.Provider>
  );
}
