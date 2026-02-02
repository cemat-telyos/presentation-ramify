"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, ChartBlock, ComparisonBar, InstagramLogo } from "@/components";
import { instagramData } from "@/data";

export function InstagramSlide2() {
  return (
    <Slide id="instagram-formats">
      <SlideHeader
        tag="Instagram"
        title="Les Reels dominent"
        subtitle="Répartition des performances par format"
      />

      <SlideContent>
        <div className="flex items-center justify-center gap-4 mb-10">
          <InstagramLogo size={28} />
        </div>

        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          <ChartBlock 
            title="Performance par format"
            insight="Les Reels concentrent l'essentiel de la performance. Les autres formats jouent un rôle secondaire."
            className="w-full"
          >
            <div className="py-4">
              <ComparisonBar 
                label="Reels vs Autres formats"
                valueA={79}
                valueB={21}
                labelA="Reels"
                labelB="Autres"
                colorA="#E1306C"
                colorB="#D9D6D2"
              />
            </div>
          </ChartBlock>

          {/* Breakdown cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl px-6 py-8 text-center">
              <div className="text-4xl font-serif mb-3">{instagramData.formatBreakdown.reels.viewsPercentage}%</div>
              <p className="text-sm font-sans opacity-50 mb-3">des vues</p>
              <p className="text-lg font-serif" style={{ color: "#E1306C" }}>Reels</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-8 text-center">
              <div className="text-4xl font-serif opacity-40 mb-3">{instagramData.formatBreakdown.publications.viewsPercentage}%</div>
              <p className="text-sm font-sans opacity-50 mb-3">des vues</p>
              <p className="text-lg font-serif opacity-60">Publications</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-8 text-center">
              <div className="text-4xl font-serif opacity-40 mb-3">{instagramData.formatBreakdown.stories.viewsPercentage}%</div>
              <p className="text-sm font-sans opacity-50 mb-3">des vues</p>
              <p className="text-lg font-serif opacity-60">Stories</p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
