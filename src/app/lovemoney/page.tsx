"use client";

import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import LoveMoneyHeroSection from "app/components/LoveMoneyHeroSection";
import LoveMoneyFeaturesSection from "app/components/LoveMoneyFeaturesSection";
import LoveMoneyMediaSection from "app/components/LoveMoneyMediaSection";
import FooterSection from "app/components/FooterSection";
import NavAdsComponent from "app/components/NavAdsComponent";
import SearchSection from "app/components/SearchSection";
import GamesGallerySection from "app/components/GamesGallerySection";

export default function LoveMoneyPage() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Navbar />
      <NavAdsComponent />
      <div id="hero-section-wrapper" className="relative z-10">
        <LoveMoneyHeroSection />
      </div>
      <SearchSection />
      <GamesGallerySection />
      <LoveMoneyMediaSection />
      <LoveMoneyFeaturesSection />
      <FooterSection />
    </div>
  );
}
