"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, HeroKPI, LinkedInLogo } from "@/components";
import { linkedinData } from "@/data";

export function LinkedInSlide() {
  return (
    <Slide id="linkedin">
      <SlideHeader
        tag="LinkedIn"
        title="Canal d'autorité"
        subtitle="31/01/2025 → 30/01/2026"
      />

      <SlideContent>
        {/* Platform indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <LinkedInLogo size={28} />
          <span className="font-sans text-lg opacity-60">linkedin.com/company/ramify</span>
        </div>

        {/* Hero metric */}
        <div className="text-center mb-12">
          <HeroKPI 
            value={linkedinData.impressions.toLocaleString("fr-FR")}
            label="impressions"
            highlight="100% organique"
          />
        </div>

        {/* Two key metrics */}
        <div className="grid grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl px-10 py-8 text-center">
            <div className="text-6xl font-serif mb-4" style={{ color: "#0A66C2" }}>
              +{linkedinData.pageSearchesGrowth}%
            </div>
            <p className="text-lg font-sans font-light opacity-60 mb-2">
              recherches de page
            </p>
            <p className="text-sm font-sans opacity-40">
              Intérêt croissant pour la marque
            </p>
          </div>
          <div className="bg-white rounded-2xl px-10 py-8 text-center">
            <div className="text-6xl font-serif text-red-500 mb-4">
              1
            </div>
            <p className="text-lg font-sans font-light opacity-60 mb-2">
              clic sur le bouton CTA
            </p>
            <p className="text-sm font-sans opacity-40">
              Conversion à optimiser
            </p>
          </div>
        </div>

        {/* Single insight */}
        <p className="text-center text-lg font-sans font-light opacity-60 mt-12 max-w-2xl mx-auto">
          <span className="text-ramify-gold500">→</span> Excellente visibilité organique, mais parcours de conversion sous-exploité.
        </p>
      </SlideContent>
    </Slide>
  );
}
