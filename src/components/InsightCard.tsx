"use client";

import React from "react";

interface InsightCardProps {
  number?: number;
  title: string;
  insight: string;
  recommendation?: string;
  className?: string;
}

export function InsightCard({
  number,
  title,
  insight,
  recommendation,
  className = "",
}: InsightCardProps) {
  return (
    <div className={`insight-card ${className}`}>
      <div className="flex items-start gap-3">
        {number && (
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ramify-gold500 text-ramify-grey900 text-xs font-sans font-normal flex items-center justify-center">
            {number}
          </span>
        )}
        <div className="flex-1">
          <h4 className="font-serif text-lg mb-2">{title}</h4>
          <p className="font-sans font-light text-sm opacity-80 mb-3">{insight}</p>
          {recommendation && (
            <div className="bg-ramify-gold100 rounded p-3">
              <span className="text-xs font-sans font-normal uppercase tracking-wider text-ramify-gold500 block mb-1">
                Recommandation
              </span>
              <p className="font-sans font-light text-sm">{recommendation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface StrategicInsightProps {
  platform?: string;
  role: string;
  insight: string;
  variant?: "default" | "instagram" | "linkedin" | "youtube";
  className?: string;
}

export function StrategicInsight({
  platform,
  role,
  insight,
  variant = "default",
  className = "",
}: StrategicInsightProps) {
  const borderColors = {
    default: "border-ramify-gold500",
    instagram: "border-[#E1306C]",
    linkedin: "border-[#0A66C2]",
    youtube: "border-[#FF0000]",
  };

  return (
    <div className={`border-l-4 ${borderColors[variant]} pl-4 py-2 ${className}`}>
      {platform && (
        <span className="text-xs font-sans font-normal uppercase tracking-wider opacity-60 block mb-1">
          {platform}
        </span>
      )}
      <div className="font-serif text-base mb-1">{role}</div>
      <p className="font-sans font-light text-sm opacity-80">{insight}</p>
    </div>
  );
}

interface RecommendationCardProps {
  priority: number;
  platform: string;
  action: string;
  detail: string;
  impact: string;
  className?: string;
}

export function RecommendationCard({
  priority,
  platform,
  action,
  detail,
  impact,
  className = "",
}: RecommendationCardProps) {
  const priorityColors: Record<number, string> = {
    1: "bg-gradient-elite text-white",
    2: "bg-gradient-flagship text-white",
    3: "bg-gradient-essential",
    4: "bg-gradient-essential",
    5: "bg-gradient-essential",
  };

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className={`px-4 py-2 ${priorityColors[priority] || "bg-gradient-essential"}`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-sans font-normal uppercase tracking-wider opacity-80">
            Priorité {priority}
          </span>
          <span className="text-xs font-sans font-normal uppercase tracking-wider">
            {platform}
          </span>
        </div>
      </div>
      <div className="bg-white p-4">
        <h4 className="font-serif text-base mb-2">{action}</h4>
        <p className="font-sans font-light text-sm opacity-80 mb-3">{detail}</p>
        <div className="flex items-center gap-2 text-xs font-sans">
          <span className="text-ramify-gold500">Impact :</span>
          <span className="font-light">{impact}</span>
        </div>
      </div>
    </div>
  );
}
