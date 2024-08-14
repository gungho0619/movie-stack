"use client";
import { TitleType, UniverseType } from "@/lib/types";
import { filterTitles } from "@/utils/filterTitles";
import { getTitleFilters } from "@/utils/getTitleFilters";
import React, { createContext, useEffect, useState } from "react";

type ContextProps = {
  universe: UniverseType | null;
  titles: TitleType[];
  filteredtitles: TitleType[];
  completed: string[];
  checkTitle: (id: string) => void;
  bannedFilters: string[];
  checkFilter: (filter: string) => void;
};

export const TitlesContext = createContext<ContextProps>({
  universe: null,
  titles: [],
  filteredtitles: [],
  completed: [],
  checkTitle: () => {},
  bannedFilters: [],
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
  const [bannedFilters, setBannedFilters] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setFilteredTitles(filterTitles(titles, bannedFilters));
  }, [titles, bannedFilters]);

  function checkTitle(id: string) {
    if (completed.includes(id)) {
      setCompleted((prev) => prev.filter((currentId) => currentId != id));
    } else {
      setCompleted((prev) => [...prev, id]);
    }
  }

  function checkFilter(filter: string) {
    if (bannedFilters.includes(filter)) {
      setBannedFilters((prev) =>
        prev.filter((currentFilter) => currentFilter !== filter)
      );
    } else {
      setBannedFilters((prev) => [...prev, filter]);
    }
  }

  return (
    <TitlesContext.Provider
      value={{
        universe: universe,
        titles: titles,
        filteredtitles: filteredTitles,
        completed,
        checkTitle,
        bannedFilters,
        checkFilter,
      }}
    >
      {children}
    </TitlesContext.Provider>
  );
}
