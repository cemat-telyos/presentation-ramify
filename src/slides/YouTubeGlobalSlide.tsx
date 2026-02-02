"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, HeroKPI, YouTubeLogo } from "@/components";
import { youtubeData } from "@/data";

export function YouTubeGlobalSlide() {
  return (
    <Slide id="youtube-global">
      <SlideHeader
        tag="YouTube"
        title="Canal d'éducation"
        subtitle="31/01/2025 → 30/01/2026"
      />

      <SlideContent>
        {/* Platform indicator */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <YouTubeLogo size={28} />
          <span className="font-sans text-lg opacity-60">youtube.com/@ramify</span>
        </div>

        {/* Hero metric - Watchtime is the key metric */}
        <div className="text-center mb-20">
          <HeroKPI 
            value={`${youtubeData.global.watchtime.toLocaleString("fr-FR")}h`}
            label="de watchtime"
            highlight={`${youtubeData.global.views.toLocaleString("fr-FR")} vues`}
          />
        </div>

        {/* Three supporting metrics */}
        <div className="grid grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-5xl font-serif">{youtubeData.global.averageDuration}</div>
            <p className="text-sm font-sans opacity-50 mt-4">Durée moyenne</p>
            <p className="text-xs font-sans opacity-30 mt-2">Bon engagement</p>
          </div>
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-5xl font-serif">{youtubeData.global.ctr}%</div>
            <p className="text-sm font-sans opacity-50 mt-4">CTR</p>
            <p className="text-xs font-sans opacity-30 mt-2">Dans la moyenne</p>
          </div>
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-5xl font-serif" style={{ color: "#FF0000" }}>+{youtubeData.global.subscribersGained}</div>
            <p className="text-sm font-sans opacity-50 mt-4">Abonnés gagnés</p>
            <p className="text-xs font-sans opacity-30 mt-2">Croissance régulière</p>
          </div>
        </div>

        {/* Single insight */}
        <p className="text-center text-lg font-sans font-light opacity-60 mt-16 max-w-2xl mx-auto">
          <span className="text-ramify-gold500">→</span> YouTube combine acquisition (Shorts) et autorité (vidéos longues).
        </p>
      </SlideContent>
    </Slide>
  );
}
