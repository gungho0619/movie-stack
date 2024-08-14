"use client";

import { useCardTilt } from "@/hooks/useCardTilt";
import { UniverseType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Universe({ data }: { data: UniverseType }) {
  const { cardRef, containerRef } = useCardTilt();
  return (
    <div
      ref={containerRef}
      className="max-w-[800px] active:scale-[0.98] transition-all"
    >
      <div
        ref={cardRef}
        className="bg-custom-primary"
        style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.8)" }}
      >
        <Link
          className=" text-lg sm:text-4xl w-full
      text-center cursor-pointer font-medium"
          href={`/${data.id}`}
        >
          <Image
            className="saturate-[1.3]"
            src={data.banner_url}
            alt=""
            width={900}
            height={300}
            quality={100}
          ></Image>
          <div className="p-4 ">{data.title}</div>
        </Link>
      </div>
    </div>
  );
}
