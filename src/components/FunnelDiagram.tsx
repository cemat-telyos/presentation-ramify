"use client";

import React from "react";

interface FunnelStage {
  platform: string;
  role: string;
  metric: string;
  strength: string;
  color?: string;
}

interface FunnelDiagramProps {
  stages: FunnelStage[];
  className?: string;
}

export function FunnelDiagram({ stages, className = "" }: FunnelDiagramProps) {
  const platformColors: Record<string, string> = {
    Instagram: "#E1306C",
    LinkedIn: "#0A66C2",
    YouTube: "#FF0000",
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {stages.map((stage, index) => {
        const color = stage.color || platformColors[stage.platform] || "#EFC27E";
        const widthPercentage = 100 - index * 15;

        return (
          <div
            key={index}
            className="relative transition-all duration-300"
            style={{ width: `${widthPercentage}%`, marginLeft: `${index * 7.5}%` }}
          >
            <div
              className="rounded-lg p-4 text-white"
              style={{ backgroundColor: color }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-sans font-normal uppercase tracking-wider opacity-80 block">
                    {stage.platform}
                  </span>
                  <span className="font-serif text-lg">{stage.role}</span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl block">{stage.metric}</span>
                  <span className="text-xs font-sans font-light opacity-80">{stage.strength}</span>
                </div>
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className="flex justify-center py-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-40">
                  <path d="M12 5L12 19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface PlatformCardProps {
  platform: "Instagram" | "LinkedIn" | "YouTube";
  metric: string;
  value: string | number;
  subtitle?: string;
  className?: string;
}

export function PlatformCard({
  platform,
  metric,
  value,
  subtitle,
  className = "",
}: PlatformCardProps) {
  const platformStyles: Record<string, { bg: string; icon: string }> = {
    Instagram: { bg: "bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737]", icon: "📷" },
    LinkedIn: { bg: "bg-[#0A66C2]", icon: "💼" },
    YouTube: { bg: "bg-[#FF0000]", icon: "▶️" },
  };

  const style = platformStyles[platform];

  return (
    <div className={`${style.bg} text-white rounded-lg p-6 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{style.icon}</span>
        <span className="font-serif text-xl">{platform}</span>
      </div>
      <div className="font-serif text-4xl mb-1">
        {typeof value === "number" ? value.toLocaleString("fr-FR") : value}
      </div>
      <div className="text-sm font-sans font-light opacity-90">{metric}</div>
      {subtitle && (
        <div className="mt-2 text-xs font-sans opacity-80">{subtitle}</div>
      )}
    </div>
  );
}
