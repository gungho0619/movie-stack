"use client";
import { TitleType } from "@/lib/types";
import { sortTitlesByRelease } from "@/utils/sortTitlesByRelease";
import React, { useContext } from "react";
import Title from "./Title";
import { TitlesContext } from "@/services/providers/TitlesProvider";
import { filterTitles } from "@/utils/filterTitles";

export default function TitleList() {
  const { titles, bannedFilters, resetTitles } = useContext(TitlesContext);

  return (
    <div
      className="flex flex-col"
      style={{ marginBottom: "50svh", gap: "clamp(0.5rem,5vw,2rem)" }}
    >
      <button
        className="font-medium text-lg text-custom-text hover:underline 
      ml-auto mr-4"
        onClick={resetTitles}
      >
        Reset All
      </button>
      {sortTitlesByRelease(filterTitles(titles, bannedFilters)).map(
        (title, i) => (
          <Title key={title.id} data={title} position={i}></Title>
        )
      )}
    </div>
  );
}
