"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  CoverSlide,
  ExecutiveSummarySlide1,
  ExecutiveSummarySlide2,
  ExecutiveSummarySlide3,
  InstagramSlide,
  InstagramSlide2,
  LinkedInSlide,
  LinkedInSlide2,
  YouTubeGlobalSlide,
  YouTubeShortsVsLongsSlide,
  YouTubeJanuarySlide,
  CrossPlatformSlide,
  StrategicInsightsSlide,
  RecommendationsSlide,
  ConclusionSlide,
} from "@/slides";

const slides = [
  { id: "cover", component: CoverSlide },
  { id: "executive-summary-1", component: ExecutiveSummarySlide1 },
  { id: "executive-summary-2", component: ExecutiveSummarySlide2 },
  { id: "executive-summary-3", component: ExecutiveSummarySlide3 },
  { id: "instagram", component: InstagramSlide },
  { id: "instagram-formats", component: InstagramSlide2 },
  { id: "linkedin", component: LinkedInSlide },
  { id: "linkedin-engagement", component: LinkedInSlide2 },
  { id: "youtube-global", component: YouTubeGlobalSlide },
  { id: "youtube-shorts-longs", component: YouTubeShortsVsLongsSlide },
  { id: "youtube-january", component: YouTubeJanuarySlide },
  { id: "cross-platform", component: CrossPlatformSlide },
  { id: "strategic-insights", component: StrategicInsightsSlide },
  { id: "recommendations", component: RecommendationsSlide },
  { id: "conclusion", component: ConclusionSlide },
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      }
    },
    [currentSlide, goToSlide]
  );

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      goToSlide(currentSlide + 1);
    } else if (isRightSwipe) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main 
      className="h-screen w-screen overflow-hidden bg-ramify-grey900"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides container */}
      <div className="h-full w-full">
        <div 
          className="h-full flex transition-transform duration-500 ease-out"
          style={{ 
            width: `${slides.length * 100}vw`,
            transform: `translateX(-${currentSlide * 100}vw)` 
          }}
        >
          {slides.map((slide) => {
            const SlideComponent = slide.component;
            return (
              <div key={slide.id} className="w-screen h-full flex-shrink-0">
                <SlideComponent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "bg-ramify-gold500 w-8 h-2"
                : "bg-white/40 hover:bg-white/60 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="fixed bottom-8 right-8 z-40 text-white text-sm font-sans bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Navigation arrows */}
      {currentSlide > 0 && (
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white/80 hover:text-white p-4 rounded-full transition-all items-center justify-center shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}
      {currentSlide < slides.length - 1 && (
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white/80 hover:text-white p-4 rounded-full transition-all items-center justify-center shadow-lg"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </main>
  );
}
