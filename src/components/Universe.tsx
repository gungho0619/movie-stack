import { UniverseType } from "@/lib/types";
import Link from "next/link";
import React from "react";

export default function Universe({ data }: { data: UniverseType }) {
  return (
    <Link
      className="border-custom-text border-2 p-4 text-4xl w-full max-w-[500px]
      text-center cursor-pointer"
      href={`/${data.id}`}
    >
      {data.title}
    </Link>
  );
}
