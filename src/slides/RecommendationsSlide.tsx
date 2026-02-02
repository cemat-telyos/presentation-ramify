"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent } from "@/components";
import { recommendations } from "@/data";

export function RecommendationsSlide() {
  return (
    <Slide id="recommendations">
      <SlideHeader
        tag="Recommandations"
        title="Plan d'action"
      />

      <SlideContent>
        <div className="max-w-5xl mx-auto">
          {/* Priority 1 - Hero */}
          <div className="bg-gradient-to-r from-[#EFC27E] to-[#856432] text-white rounded-2xl p-12 mb-10">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-sans uppercase tracking-[0.2em] opacity-70">
                  Priorité #1 — {recommendations[0].platform}
                </span>
                <h3 className="font-serif text-3xl mt-3">{recommendations[0].action}</h3>
                <p className="font-sans font-light opacity-80 mt-3 max-w-xl">
                  {recommendations[0].detail}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-sans uppercase tracking-[0.15em] opacity-70">Impact</span>
                <p className="font-serif text-lg mt-1">{recommendations[0].impact}</p>
              </div>
            </div>
          </div>

          {/* Other priorities */}
          <div className="grid grid-cols-2 gap-6">
            {recommendations.slice(1).map((rec) => (
              <div key={rec.priority} className="bg-white rounded-2xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-sans uppercase tracking-[0.15em] opacity-50">
                    Priorité #{rec.priority}
                  </span>
                  <span className="text-xs font-sans bg-ramify-gold100 px-3 py-1 rounded-full">
                    {rec.platform}
                  </span>
                </div>
                <h4 className="font-serif text-lg">{rec.action}</h4>
                <p className="font-sans font-light text-sm opacity-60 mt-2">{rec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
