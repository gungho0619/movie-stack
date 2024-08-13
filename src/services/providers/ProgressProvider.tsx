"use client";
import React, { createContext, useState } from "react";

type ContextProps = {
  completed: string[];
  checkTitle: (id: string) => void;
  bannedFilters: string[];
  checkFilter: (filter: string) => void;
};

export const ProgressContext = createContext<ContextProps>({
  completed: [],
  checkTitle: () => {},
  bannedFilters: [],
  checkFilter: () => {},
});

export default function ProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bannedFilters, setBannedFilters] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

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
    <ProgressContext.Provider
      value={{ completed, checkTitle, bannedFilters, checkFilter }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
