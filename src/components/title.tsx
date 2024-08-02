"use client";

import { TitleType } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Title({
  data,
  position,
}: {
  data: TitleType;
  scale?: number;
  position: number;
}) {
  const initialWidth = 320;
  const initialHeight = 80;

  const [size, setSize] = useState<number>(0);

  const scale = (0.9 * size) / initialWidth;

  useEffect(() => {
    function changeSize() {
      const width = window.innerWidth;
      const newSize = width > 850 ? 850 : width;
      setSize(newSize);
    }

    changeSize();

    window.addEventListener("resize", changeSize);

    return () => window.removeEventListener("resize", changeSize);
  }, []);

  return (
    <div
      className="relative"
      style={{
        width: `${0.9 * size}px`,
        height: `${(0.9 * size) / 4}px`,
      }}
    >
      <div
        className="origin-top-left absolute shadow-2xl flex items-center font-bold"
        style={{
          scale: scale,
          width: `${initialWidth}px`,
          height: `${initialHeight}px`,
          color: data.text,
        }}
      >
        <Image
          className="absolute top-0 left-0 w-full h-full z-[-1]"
          src={data.banner_url}
          alt=""
          width={initialWidth * scale}
          height={initialHeight * scale}
        ></Image>
        <div className="px-[20px] text-[30px]">{position + 1}</div>
        <div className="flex flex-col justify-center font-bold">
          <div className="text-[16px] h-[20px]">{data.title}</div>
          <div
            className="text-[10px] text-zinc-300"
            style={{ color: data.text, opacity: "0.8" }}
          >
            {`${getYear(data.release_date)} • ${convertTime(data.duration)}`}
          </div>
        </div>
        <div
          className="w-[32px] h-[32px] border-[3px] border-white 
      border-w ml-auto mx-[20px] cursor-pointer"
          style={{ borderColor: data.text }}
        ></div>
      </div>
    </div>
  );
}

function getYear(dateString: string): number {
  const date = new Date(dateString);
  return date.getFullYear();
}

function convertTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours !== 0 ? hours + "h " : ""}${
    minutes !== 0 ? minutes + "m" : ""
  }`;
}
