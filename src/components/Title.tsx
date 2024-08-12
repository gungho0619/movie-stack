"use client";

import { TitleType } from "@/lib/types";
import Image from "next/image";
import { useContext } from "react";
import Checkmark from "../../public/assets/checkmark";
import { ProgressContext } from "@/services/providers/completed-titles-provider";
import {
  getPositionFontSize,
  getTitleFontSize,
} from "@/utils/calculate-font-size";
import { convertTime } from "@/utils/format-time";
import { getYear } from "@/utils/get-year";
import { useScreenSize } from "@/hooks/useScreenSize";

const initialWidth = 320;
const initialHeight = 80;

const positionWidth = 44;
const titleWidth = 80;
const checkWidth = 56;
const squareWidth = 30;

const leftBlindZoneWidth = positionWidth + titleWidth;
const rightBlindZoneWidth = checkWidth;

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

  const windowSize = useScreenSize();
  const size = windowSize > 800 ? 800 : windowSize;
  const scale = (0.9 * size) / initialWidth;

  return (
    <div
      className="relative"
      style={{
        width: `${0.9 * size}px`,
        height: `${(0.9 * size) / 4}px`,
        transform: `scale(${isCompleted ? 0.99 : 1})`,
        filter: `brightness(${isCompleted ? 0.5 : 1})`,
        transition: "transform 0.8s ease, filter 0.8s ease",
      }}
    >
      {/* SCALING CONTAINER */}
      <div
        className="overflow-hidden origin-top-left absolute shadow-2xl flex items-center font-bold"
        style={{
          scale: scale,
          width: `${initialWidth}px`,
          height: `${initialHeight}px`,
          color: data.text,
        }}
      >
        {/* BANNER */}
        <Image
          className={`${
            isCompleted ? "brightness-75" : "brightness-100"
          } transition-all absolute top-0 left-0 w-full h-full z-[-1] select-none saturate-[1.1]`}
          src={data.banner_url}
          alt=""
          width={initialWidth * scale * 2}
          height={initialHeight * scale * 2}
          quality={100}
          // priority
          loading="lazy"
          style={{
            transitionDuration: "1s",
          }}
        ></Image>

        {/* BLACK MASK */}
        <div
          className="mix-blend-color transition-all pointer-events-none top-1/2 left-0 absolute rounded-full bg-black w-full h-full"
          style={{
            width: initialWidth,
            height: initialWidth,
            transform: `translate(${
              isCompleted ? 0 : 105
            }%, ${-50}%) scale(1.1)`,
            transitionDuration: "0.8s",
          }}
        ></div>
        {/* LEFT TEXT FADE */}
        <div
          className="absolute z-[-1]"
          style={{
            width: `${leftBlindZoneWidth}px`,
            height: `${initialHeight}px`,
            background: `linear-gradient(to right, hsl(0, 0%, ${
              data.text === "white" ? 0 : 100
            }%, 0.7),hsl(0, 0%, ${
              data.text === "white" ? 0 : 100
            }%, 0.15) 90%, transparent)`,
          }}
        ></div>

        {/* RIGHT TEXT FADE */}
        <div
          className="right-0 absolute z-[-1]"
          style={{
            width: `${rightBlindZoneWidth}px`,
            height: `${initialHeight}px`,
            background: `linear-gradient(to left, hsl(0, 0%, ${
              data.text === "white" ? 0 : 100
            }%, 0.7),hsl(0, 0%, ${
              data.text === "white" ? 0 : 100
            }%, 0.1) 80%, transparent)`,
          }}
        ></div>

        {/* POSITION NUMBER */}
        <div
          className="flex justify-center items-center select-none  "
          style={{
            width: `${positionWidth}px`,
            fontSize: getPositionFontSize(position) + "px",
            lineHeight: getPositionFontSize(position) + "px",
          }}
        >
          {position + 1}
        </div>

        {/* TITLE + DATE + DURATION*/}
        <div
          className="flex flex-col justify-center font-bold"
          style={{ width: `${titleWidth}px` }}
        >
          <div
            className=" text-balance  pr-1"
            style={{
              fontSize: getTitleFontSize(data.title) + "px",
              lineHeight: getTitleFontSize(data.title) + 4 + "px",
            }}
          >
            {data.title}
          </div>
          <div
            className="text-[9px] text-zinc-300"
            style={{ color: data.text, opacity: "0.8" }}
          >
            {`${getYear(data.release_date)} • ${convertTime(data.duration)}`}
          </div>
        </div>

        {/* CHECKMARK CONTAINER */}
        <div
          className="flex justify-center ml-auto"
          style={{ width: `${checkWidth}px` }}
        >
          <button
            className="outline outline-offset-[-3px] outline-[3px] border-white 
      border-w cursor-pointer relative"
            style={{
              width: `${squareWidth}px`,
              height: `${squareWidth}px`,
              borderColor: data.text,
            }}
            onClick={() => checkTitle(data.id)}
          >
            <div
              className={`${
                isCompleted ? "w-full" : "w-0"
              } h-full transition-all overflow-hidden`}
              style={{ transitionDuration: "0.5s" }}
            >
              <div
                className={`w-full h-full transition-all`}
                style={{
                  width: `${squareWidth}px`,
                  height: `${squareWidth}px`,
                }}
              >
                <Checkmark fill={data.text} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}