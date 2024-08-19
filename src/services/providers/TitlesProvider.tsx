"use client";
import { TitleType, UniverseType } from "@/lib/types";
import { filterTitles } from "@/utils/filterTitles";
import { getTitleFilters } from "@/utils/getTitleFilters";
import React, { createContext, useEffect, useState } from "react";

type ContextProps = {
  universe: UniverseType | null;
  titles: TitleType[];
  branchFilters: string[];
  typeFilters: string[];
  filteredTitles: TitleType[];
  completed: string[];
  checkTitle: (id: string) => void;
  resetTitles: () => void;
  bannedBranchFilters: string[];
  bannedTypeFilters: string[];
  switchAllFilters: (active: boolean) => void;
  checkFilter: (filter: string, kind: "branch" | "type") => void;
};

export const TitlesContext = createContext<ContextProps>({
  universe: null,
  titles: [],
  branchFilters: [],
  typeFilters: [],
  filteredTitles: [],
  completed: [],
  checkTitle: () => {},
  resetTitles: () => {},
  bannedBranchFilters: [],
  bannedTypeFilters: [],
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

  const [branchFilters, setBranchFilters] = useState<string[]>([]);
  const [typeFilters, setTypeFilters] = useState<string[]>([]);

  const [bannedBranchFilters, setBannedBranchFilters] = useState<string[]>([]);
  const [bannedTypeFilters, setBannedTypeFilters] = useState<string[]>([]);

  const [completed, setCompleted] = useState<string[]>([]);
  const [completedLoaded, setCompletedLoaded] = useState(false);
  const [filtersLoaded, setFiltersLoaded] = useState(false);

  useEffect(() => {
    const savedCompleted = localStorage.getItem(`completed ${universe?.id}`);
    if (savedCompleted) {
      setCompleted(JSON.parse(savedCompleted));
    }
    setCompletedLoaded(true);

    const savedBranchFilters = localStorage.getItem(
      `branchFilters ${universe?.id}`
    );
    if (savedBranchFilters) {
      setBannedBranchFilters(JSON.parse(savedBranchFilters));
    }

    const savedTypeFilters = localStorage.getItem(
      `typeFilters ${universe?.id}`
    );
    if (savedTypeFilters) {
      setBannedTypeFilters(JSON.parse(savedTypeFilters));
    }

    setFiltersLoaded(true);
  }, [universe]);

  useEffect(() => {
    setFilteredTitles(
      filterTitles(titles, bannedBranchFilters, bannedTypeFilters)
    );
  }, [titles, bannedBranchFilters, bannedTypeFilters]);

  useEffect(() => {
    const branchFilterSet = new Set<string>();
    titles.forEach((title) => {
      const currentFilters = getTitleFilters(title);
      currentFilters.forEach((filter) => branchFilterSet.add(filter));
    });
    setBranchFilters(Array.from(branchFilterSet).sort());

    const typeFilterSet = new Set<string>();
    titles.forEach((title) => {
      typeFilterSet.add(title.type);
    });
    setTypeFilters(Array.from(typeFilterSet).sort());
  }, [titles]);

  useEffect(() => {
    if (!universe || !completedLoaded) return;
    localStorage.setItem(
      `completed ${universe?.id}`,
      JSON.stringify(completed)
    );
  }, [completed, universe, completedLoaded]);

  useEffect(() => {
    if (!universe || !filtersLoaded) return;
    localStorage.setItem(
      `branchFilters ${universe?.id}`,
      JSON.stringify(bannedBranchFilters)
    );
  }, [bannedBranchFilters, universe, filtersLoaded]);

  useEffect(() => {
    if (!universe || !filtersLoaded) return;
    localStorage.setItem(
      `typeFilters ${universe?.id}`,
      JSON.stringify(bannedTypeFilters)
    );
  }, [bannedTypeFilters, universe, filtersLoaded]);

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
      setBannedBranchFilters([]);
    } else {
      setBannedBranchFilters(branchFilters);
    }
  }

  function checkFilter(filter: string, kind: "branch" | "type") {
    if (kind === "branch") {
      if (bannedBranchFilters.includes(filter)) {
        setBannedBranchFilters((prev) =>
          prev.filter((currentFilter) => currentFilter !== filter)
        );
      } else if (!bannedBranchFilters.includes(filter)) {
        setBannedBranchFilters((prev) => [...prev, filter]);
      }
    } else {
      if (bannedTypeFilters.includes(filter)) {
        setBannedTypeFilters((prev) =>
          prev.filter((currentFilter) => currentFilter !== filter)
        );
      } else if (!bannedTypeFilters.includes(filter)) {
        setBannedTypeFilters((prev) => [...prev, filter]);
      }
    }
  }

  return (
    <TitlesContext.Provider
      value={{
        universe,
        titles,
        branchFilters,
        typeFilters,
        filteredTitles,
        completed,
        checkTitle,
        resetTitles,
        bannedBranchFilters,
        bannedTypeFilters,
        switchAllFilters,
        checkFilter,
      }}
    >
      {children}
    </TitlesContext.Provider>
  );
}
