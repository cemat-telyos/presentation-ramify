"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, InstagramLogo, LinkedInLogo, YouTubeLogo } from "@/components";

export function CrossPlatformSlide() {
  return (
    <Slide id="cross-platform">
      <SlideHeader
        tag="Analyse"
        title="Le funnel social media"
        subtitle="Chaque plateforme remplit un rôle distinct"
      />

      <SlideContent>
        {/* Funnel visualization - clean, spacious */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1 - Instagram */}
          <div 
            className="rounded-2xl p-10 text-white mb-6"
            style={{ backgroundColor: "#E1306C" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <InstagramLogo size={32} />
                <div>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] opacity-70">
                    Étape 1
                  </span>
                  <h3 className="font-serif text-2xl mt-1">Exposition</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-serif">316 796</div>
                <span className="text-sm opacity-70">vues</span>
              </div>
            </div>
          </div>

          {/* Step 2 - LinkedIn */}
          <div 
            className="rounded-2xl p-10 text-white mb-6 ml-10"
            style={{ backgroundColor: "#0A66C2" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <LinkedInLogo size={32} color="white" />
                <div>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] opacity-70">
                    Étape 2
                  </span>
                  <h3 className="font-serif text-2xl mt-1">Légitimité</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-serif">360 393</div>
                <span className="text-sm opacity-70">impressions</span>
              </div>
            </div>
          </div>

          {/* Step 3 - YouTube */}
          <div 
            className="rounded-2xl p-10 text-white ml-20"
            style={{ backgroundColor: "#FF0000" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <YouTubeLogo size={32} color="white" />
                <div>
                  <span className="text-xs font-sans uppercase tracking-[0.2em] opacity-70">
                    Étape 3
                  </span>
                  <h3 className="font-serif text-2xl mt-1">Conversion</h3>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-serif">2 848h</div>
                <span className="text-sm opacity-70">watchtime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insight */}
        <p className="text-center text-lg font-sans font-light opacity-60 mt-16 max-w-2xl mx-auto">
          <span className="text-ramify-gold500">→</span> Le funnel est cohérent. Le point d&apos;optimisation principal : la conversion LinkedIn.
        </p>
      </SlideContent>
    </Slide>
  );
}
