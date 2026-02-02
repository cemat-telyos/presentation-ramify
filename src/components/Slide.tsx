"use client";

import React from "react";

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "dark" | "gold";
  id?: string;
}

export function Slide({ children, className = "", variant = "default", id }: SlideProps) {
  const isDark = variant === "dark" || variant === "gold";
  
  const variantStyles = {
    default: "text-ramify-grey900",
    dark: "text-white",
    gold: "text-white",
  };

  const bgImage = isDark ? "/bg-dark.png" : "/bg-light.png";

  return (
    <section
      id={id}
      className={`w-full h-full flex flex-col items-center justify-center overflow-hidden relative ${variantStyles[variant]} ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      {variant === "default" && (
        <div className="absolute inset-0 bg-[#F8F7F7]/90" />
      )}
      {variant === "dark" && (
        <div className="absolute inset-0 bg-[#1E1E1E]/92" />
      )}
      {variant === "gold" && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFC27E]/95 to-[#856432]/95" />
      )}
      
      {/* Content with generous margins */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-20 py-16">
        <div className="w-full max-w-[1280px] mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}

interface SlideHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
  centered?: boolean;
}

export function SlideHeader({ title, subtitle, tag, className = "", centered = true }: SlideHeaderProps) {
  return (
    <header className={`mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {tag && (
        <span className="inline-block text-xs font-sans font-normal tracking-[0.2em] uppercase text-ramify-gold500 mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-serif leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg font-sans font-light opacity-60 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </header>
  );
}

interface SlideContentProps {
  children: React.ReactNode;
  className?: string;
}

export function SlideContent({ children, className = "" }: SlideContentProps) {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
}

interface SlideFooterProps {
  children?: React.ReactNode;
  className?: string;
}

export function SlideFooter({ children, className = "" }: SlideFooterProps) {
  return (
    <footer className={`mt-auto pt-8 text-sm font-sans opacity-30 text-center ${className}`}>
      {children}
    </footer>
  );
}
