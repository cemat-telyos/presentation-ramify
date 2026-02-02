"use client";

import React from "react";
import { Slide, RamifyLogoWhite } from "@/components";
import { instagramData, linkedinData, youtubeData } from "@/data";

export function ConclusionSlide() {
  const totalGrowth = instagramData.netSubscriberGrowth + linkedinData.newFollowers + youtubeData.global.subscribersGained;

  return (
    <Slide variant="dark" id="conclusion">
      <div className="flex flex-col items-center justify-center text-center h-full max-w-3xl mx-auto">
        {/* Logo */}
        <RamifyLogoWhite width={160} />

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif mt-16 mb-16">
          Conclusion
        </h2>

        {/* Key message */}
        <p className="text-2xl font-sans font-light opacity-80 leading-relaxed mb-16">
          La stratégie social media de Ramify est performante et différenciante.
          <br />
          <span className="text-ramify-gold500">Chaque plateforme remplit un rôle clair.</span>
        </p>

        {/* Hero metric */}
        <div className="mb-16">
          <div className="text-8xl font-serif text-ramify-gold500">
            +{totalGrowth.toLocaleString("fr-FR")}
          </div>
          <p className="text-lg font-sans opacity-50 mt-4">
            nouveaux abonnés (toutes plateformes)
          </p>
        </div>

        {/* Priority */}
        <div className="bg-ramify-gold500 text-ramify-grey900 px-12 py-6 rounded-xl">
          <span className="text-xs font-sans uppercase tracking-[0.2em] opacity-70 block mb-2">
            Action prioritaire
          </span>
          <span className="font-serif text-2xl">
            Optimiser la conversion LinkedIn
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
