"use client";

import React, { useContext } from "react";
import FilterList from "./FilterList";
import { calculateTotalDuration } from "@/utils/calculateTotalDuration";
import { TitlesContext } from "@/services/providers/TitlesProvider";
import TitleList from "./TitleList";
import Image from "next/image";

export default function UniverseHeader() {
  const { universe, filteredTitles: filteredtitles } =
    useContext(TitlesContext);

  return (
    <>
      {universe && (
        <div className="text-white flex flex-col items-center h-full overflow-auto">
          <div className="max-w-[800px] w-full my-8">
            <div className="mx-auto w-[90%] h-full gap-4 flex flex-col items-center">
              <div
                className="bg-[var(--primary)] w-full flex flex-col gap-8 pb-16"
                style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.8)" }}
              >
                <Image
                  className="saturate-[1.3]"
                  src={universe.banner_url}
                  alt=""
                  width={1200}
                  height={400}
                  quality={100}
                ></Image>
                <div
                  className="px-8 sm:px-16 font-black text-[2rem] leading-[2rem] sm:text-[3rem] sm:leading-[3rem] 
                text-center bg-[var(--primary)] w-full flex flex-col items-center"
                >
                  {universe.title}
                </div>
                <div className="px-8 sm:px-16 text-[rgb(255,255,255,0.8)]">
                  {universe.description}
                </div>
              </div>

              <div
                className="bg-[var(--primary)] font-bold text-sm leading-relaxed p-8 grid grid-cols-1 grid-co sm:grid-cols-2 w-full"
                style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.8)" }}
              >
                <div className="sm:col-span-2">
                  <FilterList />
                </div>

                <div className="p-4 w-full flex flex-col items-center sm:border-r border-custom-text">
                  <h2 className="text-custom-text ">TOTAL NUMBER OF TITLES:</h2>
                  <div className="text-[2rem] sm:text-[3rem] font-black text-center">
                    {filteredtitles.length}
                  </div>
                </div>

                <div className="p-4 w-full flex flex-col items-center border-t border-custom-text sm:border-0">
                  <h2 className="text-custom-text">TOTAL DURATION:</h2>
                  <div className="m-auto text-[1.6rem] sm:text-[2rem] font-black text-center">
                    {calculateTotalDuration(filteredtitles)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <TitleList />
        </div>
      )}
    </>
  );
}
