"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, HeroKPI, InstagramLogo } from "@/components";
import { instagramData } from "@/data";

export function InstagramSlide() {
  return (
    <Slide id="instagram">
      <SlideHeader
        tag="Instagram"
        title="Canal d'acquisition froide"
        subtitle="Analyse des 90 derniers jours"
      />

      <SlideContent>
        {/* Platform indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <InstagramLogo size={28} />
          <span className="font-sans text-lg opacity-60">instagram.com/ramify</span>
        </div>

        {/* Hero metric */}
        <div className="text-center mb-12">
          <HeroKPI 
            value={instagramData.views.toLocaleString("fr-FR")}
            label="vues totales"
          />
        </div>

        {/* Two key insights - large, clear */}
        <div className="grid grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl px-10 py-8 text-center">
            <div className="text-6xl font-serif mb-4" style={{ color: "#E1306C" }}>
              {instagramData.nonFollowersPercentage}%
            </div>
            <p className="text-lg font-sans font-light opacity-60 mb-2">
              de reach hors base
            </p>
            <p className="text-sm font-sans opacity-40">
              Excellent pour l&apos;acquisition
            </p>
          </div>
          <div className="bg-white rounded-2xl px-10 py-8 text-center">
            <div className="text-6xl font-serif mb-4" style={{ color: "#E1306C" }}>
              {instagramData.adsPercentage}%
            </div>
            <p className="text-lg font-sans font-light opacity-60 mb-2">
              via publicités
            </p>
            <p className="text-sm font-sans opacity-40">
              Dépendance à surveiller
            </p>
          </div>
        </div>

        {/* Single insight */}
        <p className="text-center text-lg font-sans font-light opacity-60 mt-12 max-w-2xl mx-auto">
          <span className="text-ramify-gold500">→</span> Instagram remplit son rôle d&apos;exposition mais n&apos;est pas un canal de conversion.
        </p>
      </SlideContent>
    </Slide>
  );
}
