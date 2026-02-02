"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent } from "@/components";
import { strategicInsights } from "@/data";

export function StrategicInsightsSlide() {
  return (
    <Slide id="strategic-insights">
      <SlideHeader
        tag="Insights"
        title="5 enseignements clés"
      />

      <SlideContent>
        <div className="max-w-5xl mx-auto space-y-6">
          {strategicInsights.map((insight) => (
            <div 
              key={insight.id} 
              className="bg-white rounded-2xl p-8 flex items-start gap-8"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-full bg-ramify-gold500 text-ramify-grey900 text-lg flex items-center justify-center font-serif">
                {insight.id}
              </span>
              <div className="flex-1">
                <h4 className="font-serif text-xl">{insight.title}</h4>
                <p className="font-sans font-light opacity-60 mt-2">{insight.insight}</p>
              </div>
              <div className="flex-shrink-0 w-64 pl-8 border-l border-gray-100">
                <span className="text-xs font-sans uppercase tracking-[0.15em] text-ramify-gold500">
                  Recommandation
                </span>
                <p className="text-sm font-sans mt-2">{insight.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </SlideContent>
    </Slide>
  );
}
