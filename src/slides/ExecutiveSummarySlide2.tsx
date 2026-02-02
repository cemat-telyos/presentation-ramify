"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, InstagramLogo, LinkedInLogo, YouTubeLogo } from "@/components";

export function ExecutiveSummarySlide2() {
  return (
    <Slide id="executive-summary-2">
      <SlideHeader
        tag="Executive Summary"
        title="Chaque plateforme, un rôle"
      />

      <SlideContent>
        <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Instagram */}
          <div className="text-center bg-white/50 rounded-2xl px-8 py-10">
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
              <InstagramLogo size={36} />
            </div>
            <h3 className="font-serif text-2xl mb-3">Instagram</h3>
            <p className="text-base font-sans font-light opacity-70 mb-8">
              Exposition & Acquisition
            </p>
            <div className="text-5xl font-serif text-ramify-gold500 mb-3">87%</div>
            <p className="text-sm font-sans opacity-50">
              de reach hors base
            </p>
          </div>

          {/* LinkedIn */}
          <div className="text-center bg-white/50 rounded-2xl px-8 py-10">
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
              <LinkedInLogo size={36} />
            </div>
            <h3 className="font-serif text-2xl mb-3">LinkedIn</h3>
            <p className="text-base font-sans font-light opacity-70 mb-8">
              Autorité & Légitimité
            </p>
            <div className="text-5xl font-serif text-ramify-gold500 mb-3">100%</div>
            <p className="text-sm font-sans opacity-50">
              organique
            </p>
          </div>

          {/* YouTube */}
          <div className="text-center bg-white/50 rounded-2xl px-8 py-10">
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
              <YouTubeLogo size={36} />
            </div>
            <h3 className="font-serif text-2xl mb-3">YouTube</h3>
            <p className="text-base font-sans font-light opacity-70 mb-8">
              Éducation & Conversion
            </p>
            <div className="text-5xl font-serif text-ramify-gold500 mb-3">2 848h</div>
            <p className="text-sm font-sans opacity-50">
              de watchtime
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
