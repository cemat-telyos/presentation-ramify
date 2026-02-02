"use client";

import React from "react";
import { Slide, SlideHeader, SlideContent, LinkedInLogo } from "@/components";
import { linkedinData } from "@/data";

export function LinkedInSlide2() {
  return (
    <Slide id="linkedin-engagement">
      <SlideHeader
        tag="LinkedIn"
        title="Engagement solide"
        subtitle="Détail des interactions"
      />

      <SlideContent>
        <div className="flex items-center justify-center gap-4 mb-10">
          <LinkedInLogo size={28} />
        </div>

        {/* Engagement metrics - clean cards */}
        <div className="grid grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          <div className="bg-white rounded-2xl px-6 py-8 text-center">
            <div className="text-4xl font-serif mb-3">{linkedinData.reactions.toLocaleString("fr-FR")}</div>
            <p className="text-sm font-sans opacity-50">Réactions</p>
          </div>
          <div className="bg-white rounded-2xl px-6 py-8 text-center">
            <div className="text-4xl font-serif mb-3">{linkedinData.comments}</div>
            <p className="text-sm font-sans opacity-50">Commentaires</p>
          </div>
          <div className="bg-white rounded-2xl px-6 py-8 text-center">
            <div className="text-4xl font-serif mb-3">{linkedinData.reposts}</div>
            <p className="text-sm font-sans opacity-50">Republications</p>
          </div>
          <div className="bg-white rounded-2xl px-6 py-8 text-center">
            <div className="text-4xl font-serif mb-3" style={{ color: "#0A66C2" }}>{linkedinData.totalFollowers.toLocaleString("fr-FR")}</div>
            <p className="text-sm font-sans opacity-50">Abonnés</p>
          </div>
        </div>

        {/* Page metrics */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-sans uppercase tracking-[0.2em] opacity-50 mb-6 text-center">
            Trafic vers la page
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl px-6 py-8 text-center">
              <div className="text-4xl font-serif mb-2">{linkedinData.pageSearches.toLocaleString("fr-FR")}</div>
              <p className="text-sm font-sans opacity-50 mb-2">Recherches</p>
              <p className="text-green-600 text-sm">+{linkedinData.pageSearchesGrowth}%</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-8 text-center">
              <div className="text-4xl font-serif mb-2">{linkedinData.pageViews.toLocaleString("fr-FR")}</div>
              <p className="text-sm font-sans opacity-50">Vues de page</p>
            </div>
            <div className="bg-white rounded-2xl px-6 py-8 text-center">
              <div className="text-4xl font-serif mb-2">{linkedinData.uniqueVisitors.toLocaleString("fr-FR")}</div>
              <p className="text-sm font-sans opacity-50">Visiteurs uniques</p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
