"use client";
import { TitlesContext } from "@/services/providers/TitlesProvider";
import React, { useContext } from "react";

export default function FilterList() {
  const { filters, bannedFilters, checkFilter, switchAllFilters } =
    useContext(TitlesContext);

  return (
    <div className="font-medium select-none text-center py-8 border-b border-custom-text">
      <div className="flex text-custom-text justify-center gap-2 pb-2 mb-8 border-b border-custom-text">
        <button
          className="hover:underline w-fit cursor-pointer"
          onClick={() => switchAllFilters(true)}
        >
          SHOW ALL
        </button>
        /
        <button
          className="hover:underline w-fit cursor-pointer"
          onClick={() => switchAllFilters(false)}
        >
          HIDE ALL
        </button>
      </div>

      {filters.map((filter) => (
        <button
          className={`${
            bannedFilters.includes(filter)
              ? "scale-95 opacity-40"
              : "scale-100 opacity-100"
          } hover:text-white font-medium text-[0.8rem] sm:text-[1rem] hover:border-white cursor-pointer select-none
           text-custom-text inline-block px-2 py-1 m-[0.2rem] border-[1.5px] border-custom-text`}
          style={{
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
          key={filter}
          onClick={() => checkFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
