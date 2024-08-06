"use client";

import { ProgressContext } from "@/app/provider";
import { TitleType } from "@/lib/types";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Checkmark from "../../public/assets/checkmark";

export default function Title({
  data,
  position,
}: {
  data: TitleType;
  scale?: number;
  position: number;
}) {
  const { completed, checkTitle } = useContext(ProgressContext);
  const isCompleted = completed.includes(data.id);

  const initialWidth = 320;
  const initialHeight = 80;

  const [size, setSize] = useState<number>(0);

  const scale = (0.9 * size) / initialWidth;

  useEffect(() => {
    function changeSize() {
      const width = window.innerWidth;
      const newSize = width > 700 ? 700 : width;
      setSize(newSize);
    }

    changeSize();

    window.addEventListener("resize", changeSize);

    return () => window.removeEventListener("resize", changeSize);
  }, []);

  return (
    <div
      className="transition-all relative"
      style={{
        width: `${0.9 * size}px`,
        height: `${(0.9 * size) / 4}px`,
        transform: `scale(${isCompleted ? 0.99 : 1})`,
        transitionDuration: "0.8s",
        filter: `brightness(${isCompleted ? 0.5 : 1})`,
      }}
    >
      <div
        className="overflow-hidden origin-top-left absolute shadow-2xl flex items-center font-bold"
        style={{
          scale: scale,
          width: `${initialWidth}px`,
          height: `${initialHeight}px`,
          color: data.text,
        }}
      >
        <Image
          className={`${
            isCompleted ? "brightness-75" : "brightness-100"
          } transition-all absolute top-0 left-0 w-full h-full z-[-1] select-none saturate-[1.1]`}
          src={data.banner_url}
          alt=""
          width={initialWidth * scale * 2}
          height={initialHeight * scale * 2}
          quality={100}
          priority
          style={{
            transitionDuration: "1s",
          }}
        ></Image>
        <div
          className="blur-lg mix-blend-color transition-all pointer-events-none top-1/2 left-0 absolute rounded-full bg-black w-full h-full"
          style={{
            width: initialWidth,
            height: initialWidth,
            transform: `translate(${
              isCompleted ? 0 : 105
            }%, ${-50}%) scale(1.1)`,
            transitionDuration: "0.8s",
          }}
        ></div>
        <div
          className="w-[56px] flex justify-center items-center select-none"
          style={{
            fontSize: getPositionSize(position) + "px",
            lineHeight: getPositionSize(position) + "px",
          }}
        >
          {position + 1}
        </div>
        <div className="flex flex-col justify-center font-bold">
          <div
            className="max-w-[90px] text-balance"
            style={{
              fontSize: getTitleSize(data.title) + "px",
              lineHeight: getTitleSize(data.title) + 4 + "px",
            }}
          >
            {data.title}
          </div>
          <div
            className="text-[10px] text-zinc-300"
            style={{ color: data.text, opacity: "0.8" }}
          >
            {`${getYear(data.release_date)} • ${convertTime(data.duration)}`}
          </div>
        </div>
        <div
          className="w-[32px] h-[32px] border-[3px] border-white 
      border-w ml-auto mx-[20px] cursor-pointer relative"
          style={{ borderColor: data.text }}
          onClick={() => checkTitle(data.id)}
        >
          <div
            className={`${
              isCompleted ? "w-full" : "w-0"
            } h-full transition-all overflow-hidden`}
            style={{ transitionDuration: "0.5s" }}
          >
            <div className={`w-[27px] h-[27px] transition-all`}>
              <Checkmark styles="" fill={data.text} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getTitleSize(title: string) {
  const length = title.length;
  if (length > 36) return 8;
  if (length > 18) return 10;
  if (length > 14) return 12;
  if (length > 10) return 14;

  return 16;
}

function getPositionSize(position: number) {
  const i = position + 1;
  if (i >= 100) return 12;
  if (i >= 10) return 22;
  return 30;
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
