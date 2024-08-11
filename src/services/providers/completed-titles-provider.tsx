"use client";
import React, { createContext, useState } from "react";

type ContextProps = {
  completed: string[];
  checkTitle: (id: string) => void;
};

export const ProgressContext = createContext<ContextProps>({
  completed: [],
  checkTitle: () => {},
});

export default function ProgressProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [completed, setCompleted] = useState<string[]>([]);

  function checkTitle(id: string) {
    if (completed.includes(id)) {
      setCompleted((prev) => prev.filter((currentId) => currentId != id));
    } else {
      setCompleted((prev) => [...prev, id]);
    }
  }

  return (
    <ProgressContext.Provider
      value={{ completed: completed, checkTitle: checkTitle }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
