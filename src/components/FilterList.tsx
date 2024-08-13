"use client";
import { TitleType } from "@/lib/types";
import { ProgressContext } from "@/services/providers/ProgressProvider";
import { getTitleFilters } from "@/utils/getTitleFilters";
import React, { useContext, useEffect, useState } from "react";

export default function FilterList({ titles }: { titles: TitleType[] }) {
  const { bannedFilters, checkFilter } = useContext(ProgressContext);
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const filterSet = new Set<string>();

    titles.forEach((title) => {
      const currentFilters = getTitleFilters(title);
      currentFilters.forEach((filter) => filterSet.add(filter));
    });
    setFilters(Array.from(filterSet).sort());
  }, [titles]);

  return (
    <div className="text-center mb-8">
      {filters.map((filter) => (
        <div
          className={`${
            bannedFilters.includes(filter)
              ? "scale-95 opacity-40"
              : "scale-100 opacity-100"
          } hover:text-white hover:border-white cursor-pointer select-none
           text-custom-text inline-block px-2 py-1 m-[0.2rem] border border-custom-text`}
          style={{
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
          key={filter}
          onClick={() => checkFilter(filter)}
        >
          {filter}
        </div>
      ))}
    </div>
  );
}
