"use client";

import React from "react";
import { Slide, RamifyLogoWhite, InstagramLogo, LinkedInLogo, YouTubeLogo } from "@/components";
import { reportPeriod } from "@/data";

export function CoverSlide() {
  return (
    <Slide variant="dark" id="cover">
      <div className="flex flex-col items-center justify-center text-center h-full gap-10">
        {/* Logo */}
        <RamifyLogoWhite width={200} />

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mt-20 mb-16">
          Social Media
          <br />
          <span className="text-ramify-gold500">Performance Report</span>
        </h1>

        {/* Platforms */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
            <YouTubeLogo size={32} />
            <span className="text-sm font-sans">YouTube</span>
          </div>
          <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
            <InstagramLogo size={32} />
            <span className="text-sm font-sans">Instagram</span>
          </div>
          <div className="flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity">
            <LinkedInLogo size={32} />
            <span className="text-sm font-sans">LinkedIn</span>
          </div>
        </div>

        {/* Period */}
        <div className="bg-ramify-gold500 text-ramify-grey900 px-[20px] py-[15px] my-[10px] rounded-2xl">
          <span className="text-xs font-sans uppercase tracking-[0.2em] block mb-3">
            Période d&apos;analyse
          </span>
          <span className="font-serif text-xl">
            {reportPeriod.start} → {reportPeriod.end}
          </span>
        </div>

        {/* Footer */}
        <p className="mt-auto text-sm font-sans opacity-20">
          Document confidentiel — Usage interne
        </p>
      </div>
    </Slide>
  );
}
