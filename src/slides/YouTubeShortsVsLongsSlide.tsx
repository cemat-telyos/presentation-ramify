"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, YouTubeLogo } from "@/components";
import { youtubeData } from "@/data";

export function YouTubeShortsVsLongsSlide() {
  return (
    <Slide id="youtube-shorts-longs">
      <SlideHeader
        tag="YouTube"
        title="Deux formats, deux rôles"
      />

      <SlideContent>
        <div className="flex items-center justify-center gap-4 mb-16">
          <YouTubeLogo size={28} />
        </div>

        {/* Two clear sections */}
        <div className="grid grid-cols-2 gap-16 max-w-5xl mx-auto mb-16">
          {/* Long-form */}
          <div className="bg-ramify-grey900 text-white rounded-2xl p-12">
            <span className="text-xs font-sans uppercase tracking-[0.2em] opacity-50">
              Vidéos longues
            </span>
            <h3 className="font-serif text-3xl mt-4 mb-8">Autorité</h3>
            
            <div className="text-6xl font-serif text-ramify-gold500 mb-4">
              {youtubeData.longForm.watchtime.toLocaleString("fr-FR")}h
            </div>
            <p className="text-sm font-sans opacity-50">de watchtime</p>
            
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="text-2xl font-serif">{youtubeData.longForm.averageDuration}</div>
              <p className="text-sm font-sans opacity-50 mt-2">durée moyenne</p>
            </div>
          </div>

          {/* Shorts */}
          <div className="bg-white rounded-2xl p-12">
            <span className="text-xs font-sans uppercase tracking-[0.2em] opacity-50">
              Shorts
            </span>
            <h3 className="font-serif text-3xl mt-4 mb-8" style={{ color: "#FF0000" }}>Acquisition</h3>
            
            <div className="text-6xl font-serif mb-4">
              {youtubeData.shorts.views.toLocaleString("fr-FR")}
            </div>
            <p className="text-sm font-sans opacity-50">vues</p>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="text-2xl font-serif">{youtubeData.shorts.averageDuration}</div>
              <p className="text-sm font-sans opacity-50 mt-2">durée moyenne</p>
            </div>
          </div>
        </div>

        {/* Visual ratio - the key insight */}
        <div className="max-w-4xl mx-auto">
          <h4 className="text-sm font-sans uppercase tracking-[0.2em] opacity-50 text-center mb-6">
            Répartition du watchtime
          </h4>
          <div className="h-8 rounded-full overflow-hidden flex">
            <div 
              className="h-full bg-ramify-grey900 flex items-center justify-end pr-4"
              style={{ width: "98%" }}
            >
              <span className="text-white text-sm font-medium">98%</span>
            </div>
            <div 
              className="h-full flex items-center justify-center"
              style={{ width: "2%", backgroundColor: "#FF0000" }}
            />
          </div>
          <div className="flex justify-between mt-3 text-sm font-sans opacity-50">
            <span>Vidéos longues</span>
            <span>Shorts</span>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
