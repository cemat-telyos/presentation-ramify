"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, HeroKPI, YouTubeLogo } from "@/components";
import { youtubeJanuary2026 } from "@/data";

export function YouTubeJanuarySlide() {
  return (
    <Slide id="youtube-january">
      <SlideHeader
        tag="YouTube"
        title="Focus Janvier 2026"
        subtitle="Mois dominé par les Shorts"
      />

      <SlideContent>
        <div className="flex items-center justify-center gap-4 mb-12">
          <YouTubeLogo size={28} />
        </div>

        {/* Hero metric */}
        <div className="text-center mb-16">
          <HeroKPI 
            value={`+${youtubeJanuary2026.subscribers}`}
            label="nouveaux abonnés"
          />
        </div>

        {/* Supporting metrics */}
        <div className="grid grid-cols-3 gap-10 max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-5xl font-serif">{youtubeJanuary2026.videosPublished}</div>
            <p className="text-sm font-sans opacity-50 mt-4">vidéos publiées</p>
          </div>
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-5xl font-serif">{youtubeJanuary2026.views.toLocaleString("fr-FR")}</div>
            <p className="text-sm font-sans opacity-50 mt-4">vues</p>
          </div>
          <div className="bg-white rounded-2xl p-10 text-center">
            <div className="text-5xl font-serif">{youtubeJanuary2026.averageDuration}</div>
            <p className="text-sm font-sans opacity-50 mt-4">durée moyenne</p>
          </div>
        </div>

        {/* Interpretation - full width, prominent */}
        <div className="bg-ramify-grey900 text-white rounded-2xl p-12 max-w-4xl mx-auto">
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-ramify-gold500">
            Interprétation
          </span>
          <p className="font-serif text-2xl mt-4 leading-relaxed">
            Janvier est dominé par les Shorts, expliquant la forte acquisition et la baisse mécanique de la durée moyenne.
          </p>
          <p className="font-sans font-light opacity-60 mt-4">
            Les Shorts remplissent leur rôle d&apos;acquisition, sans vocation d&apos;autorité.
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
