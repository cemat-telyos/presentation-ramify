"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, KPI, HeroKPI } from "@/components";
import { instagramData, linkedinData, youtubeData } from "@/data";

export function ExecutiveSummarySlide1() {
  const totalReach = instagramData.accountsReached + linkedinData.impressions + youtubeData.global.impressions;
  const totalGrowth = instagramData.netSubscriberGrowth + linkedinData.newFollowers + youtubeData.global.subscribersGained;

  return (
    <Slide id="executive-summary-1">
      <SlideHeader
        tag="Executive Summary"
        title="Performance globale"
      />

      <SlideContent>
        {/* Hero metric */}
        <div className="text-center mb-16">
          <HeroKPI 
            value={totalReach.toLocaleString("fr-FR")}
            label="Reach total (toutes plateformes)"
          />
        </div>

        {/* Two key metrics */}
        <div className="flex w-full justify-center items-center gap-12 pt-8 max-w-4xl mx-auto">
          <KPI 
            value={`+${totalGrowth.toLocaleString("fr-FR")}`}
            label="Nouveaux abonnés"
            size="xl"
            className="flex-1"
          />
          <KPI 
            value={`${youtubeData.global.watchtime.toLocaleString("fr-FR")}h`}
            label="Watchtime YouTube"
            size="xl"
            className="flex-1"
          />
        </div>
      </SlideContent>
    </Slide>
  );
}
