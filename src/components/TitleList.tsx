"use client";
import { TitleType } from "@/lib/types";
import { sortTitlesByRelease } from "@/utils/sortTitlesByRelease";
import React, { useContext } from "react";
import Title from "./Title";
import { TitlesContext } from "@/services/providers/TitlesProvider";
import { filterTitles } from "@/utils/filterTitles";

export default function TitleList() {
  const { titles, bannedFilters } = useContext(TitlesContext);
  return (
    <div
      className="flex flex-col"
      style={{ marginBottom: "50svh", gap: "clamp(0.5rem,5vw,2rem)" }}
    >
      {sortTitlesByRelease(filterTitles(titles, bannedFilters)).map(
        (title, i) => (
          <Title key={title.id} data={title} position={i}></Title>
        )
      )}
    </div>
  );
}
