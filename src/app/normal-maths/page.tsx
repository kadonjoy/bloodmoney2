"use client";

import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import NormalMathsHeroSection from "app/components/NormalMathsHeroSection";
import NormalMathsFeaturesSection from "app/components/NormalMathsFeaturesSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import SearchSection from "app/components/SearchSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import MediaCommonSection from "app/components/MediaCommonSection";
import { normalMathMedia } from "app/configs/MediaData";

export default function NormalMathsPage() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Navbar />
      <NavAdsSection />
      <div id="hero-section-wrapper" className="relative z-10">
        <NormalMathsHeroSection />
      </div>
      <GamesGallerySection />
      <SearchSection />
      <MediaCommonSection
        titleColor="text-blue-400"
        items={normalMathMedia}
        scale={150}
      />
      <NormalMathsFeaturesSection />
      <FooterSection />
    </div>
  );
}
