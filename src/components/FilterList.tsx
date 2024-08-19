"use client";
import { TitlesContext } from "@/services/providers/TitlesProvider";
import React, { useContext } from "react";

export default function FilterList() {
  const {
    branchFilters,
    typeFilters,
    bannedBranchFilters,
    bannedTypeFilters,
    checkFilter,
    switchAllFilters,
  } = useContext(TitlesContext);

  return (
    <div className="font-medium select-none text-center py-8 border-b border-custom-text">
      <div className="mb-8">
        {typeFilters.map((filter, i) => (
          <button
            key={i}
            className={`${
              bannedTypeFilters.includes(filter)
                ? "scale-95 opacity-40"
                : "scale-100 opacity-100"
            } hover:text-white font-medium text-[0.7rem] sm:text-[1rem] hover:border-white cursor-pointer select-none
           text-custom-text inline-block px-2 py-1 m-[0.2rem] border-[1.5px] border-custom-text`}
            style={{
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onClick={() => checkFilter(filter, "type")}
          >
            {filter}
          </button>
        ))}
      </div>

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

      {branchFilters.map((filter, i) => (
        <button
          key={i}
          className={`${
            bannedBranchFilters.includes(filter)
              ? "scale-95 opacity-40"
              : "scale-100 opacity-100"
          } hover:text-white font-medium text-[0.7rem] sm:text-[1rem] hover:border-white cursor-pointer select-none
           text-custom-text inline-block px-2 py-1 m-[0.2rem] border-[1.5px] border-custom-text`}
          style={{
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
          onClick={() => checkFilter(filter, "branch")}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
