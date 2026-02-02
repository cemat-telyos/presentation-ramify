"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent } from "@/components";

export function ExecutiveSummarySlide3() {
  return (
    <Slide id="executive-summary-3">
      <SlideHeader
        tag="Executive Summary"
        title="Ce qu'il faut retenir"
      />

      <SlideContent>
        <div className="grid grid-cols-2 gap-20 max-w-5xl mx-auto">
          {/* What works */}
          <div className="bg-white/30 rounded-2xl p-8">
            <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-green-600 mb-8">
              Ce qui fonctionne
            </h3>
            <div className="flex flex-col gap-6">
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <p className="font-serif text-xl mb-2">Canal d&apos;exposition efficace</p>
                <p className="font-sans font-light opacity-60">
                  Instagram touche 87% de non-followers
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <p className="font-serif text-xl mb-2">Autorité organique établie</p>
                <p className="font-sans font-light opacity-60">
                  LinkedIn 100% organique, +31% de recherches
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <p className="font-serif text-xl mb-2">Double stratégie YouTube</p>
                <p className="font-sans font-light opacity-60">
                  Shorts pour acquisition, Longs pour autorité
                </p>
              </div>
            </div>
          </div>

          {/* What to improve */}
          <div className="bg-white/30 rounded-2xl p-8">
            <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-ramify-gold500 mb-8">
              Points d&apos;attention
            </h3>
            <div className="flex flex-col gap-6">
              <div className="border-l-4 border-ramify-gold500 pl-6 py-2">
                <p className="font-serif text-xl mb-2">Conversion LinkedIn sous-exploitée</p>
                <p className="font-sans font-light opacity-60">
                  360K impressions → 1 seul clic bouton
                </p>
              </div>
              <div className="border-l-4 border-ramify-gold500 pl-6 py-2">
                <p className="font-serif text-xl mb-2">Dépendance publicitaire Instagram</p>
                <p className="font-sans font-light opacity-60">
                  51,3% des vues via ads
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Priority recommendation - full width */}
        <div className="mt-16 bg-gradient-to-r from-[#EFC27E] to-[#856432] rounded-2xl px-12 py-10 text-center max-w-4xl mx-auto">
          <span className="text-sm font-sans uppercase tracking-[0.2em] text-white/80 block mb-4">
            Recommandation prioritaire
          </span>
          <p className="font-serif text-3xl text-white">
            Optimiser le parcours de conversion LinkedIn
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
