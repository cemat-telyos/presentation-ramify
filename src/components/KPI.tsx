"use client";

import React from "react";

interface KPIProps {
  value: string | number;
  label: string;
  delta?: number;
  deltaLabel?: string;
  variant?: "default" | "gold" | "dark" | "outline";
  size?: "md" | "lg" | "xl" | "hero";
  className?: string;
}

export function KPI({
  value,
  label,
  delta,
  deltaLabel,
  variant = "default",
  size = "lg",
  className = "",
}: KPIProps) {
  const variantStyles = {
    default: "bg-white",
    gold: "bg-gradient-to-br from-[#EFC27E] to-[#856432] text-white",
    dark: "bg-ramify-grey900 text-white",
    outline: "bg-transparent border-2 border-white/20",
  };

  const sizeStyles = {
    md: {
      card: "px-8 py-6 rounded-xl",
      value: "text-3xl",
      label: "text-sm mt-3",
      delta: "text-sm mt-2",
    },
    lg: {
      card: "px-10 py-8 rounded-2xl",
      value: "text-4xl md:text-5xl",
      label: "text-sm mt-4",
      delta: "text-sm mt-3",
    },
    xl: {
      card: "px-12 py-10 rounded-2xl",
      value: "text-5xl md:text-6xl",
      label: "text-base mt-5",
      delta: "text-base mt-3",
    },
    hero: {
      card: "p-0",
      value: "text-6xl md:text-8xl",
      label: "text-lg mt-5",
      delta: "text-lg mt-3",
    },
  };

  const formatValue = (val: string | number): string => {
    if (typeof val === "number") {
      return val.toLocaleString("fr-FR");
    }
    return val;
  };

  const getDeltaClass = (d: number): string => {
    if (d > 0) return "text-green-600";
    if (d < 0) return "text-red-600";
    return "opacity-60";
  };

  const formatDelta = (d: number): string => {
    const sign = d > 0 ? "+" : "";
    return `${sign}${d.toLocaleString("fr-FR")}%`;
  };

  return (
    <div
      className={`text-center ${variantStyles[variant]} ${sizeStyles[size].card} ${className}`}
    >
      <div className={`font-serif leading-none ${sizeStyles[size].value}`}>
        {formatValue(value)}
      </div>
      <div className={`font-sans font-light opacity-60 ${sizeStyles[size].label}`}>
        {label}
      </div>
      {delta !== undefined && (
        <div className={`font-sans font-medium ${sizeStyles[size].delta} ${getDeltaClass(delta)}`}>
          {formatDelta(delta)}
          {deltaLabel && <span className="opacity-70 font-light"> {deltaLabel}</span>}
        </div>
      )}
    </div>
  );
}

interface KPIGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function KPIGrid({ children, columns = 3, className = "" }: KPIGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
      {children}
    </div>
  );
}

// Hero KPI - for single prominent metric
interface HeroKPIProps {
  value: string | number;
  label: string;
  highlight?: string;
  className?: string;
}

export function HeroKPI({ value, label, highlight, className = "" }: HeroKPIProps) {
  const formatValue = (val: string | number): string => {
    if (typeof val === "number") {
      return val.toLocaleString("fr-FR");
    }
    return val;
  };

  return (
    <div className={`text-center py-4 ${className}`}>
      <div className="text-7xl md:text-8xl font-serif text-ramify-gold500 leading-none">
        {formatValue(value)}
      </div>
      <div className="text-xl font-sans font-light opacity-60 mt-6">
        {label}
      </div>
      {highlight && (
        <div className="text-base font-sans text-ramify-gold500 mt-4">
          {highlight}
        </div>
      )}
    </div>
  );
}
