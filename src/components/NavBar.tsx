"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";
import Logo from "./Logo";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const { scroll, scrollTop } = useScroll();
  const showNav = scroll < 0 || scrollTop < 100;

  return (
    <div className="w-full h-full">
      <div className="h-20">
        <div
          className="transition-all z-[1] fixed w-full h-20 bg-custom-primary3 
        mix-blend-multiply opacity-80 "
          style={{
            transform: `translateY(${showNav ? 0 : -100}%)`,
            transitionDuration: "0.2s",
          }}
        ></div>
        <div
          className="z-[1] transition-all fixed h-20 w-full left-1/2 translate-x-[-50%] backdrop-blur-sm"
          style={{
            transform: `translate(-50%,${showNav ? 0 : -100}%)`,
            transitionDuration: "0.2s",
          }}
        >
          <div
            className="z-[1] h-20 max-w-[1000px] mx-auto w-screen  
         flex items-center gap-1 px-4"
          >
            <Link className="flex items-center cursor-pointer" href={"/"}>
              <Logo />
              <h1 className="text-custom-text font-black text-xl">
                MovieStack
              </h1>
            </Link>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}
