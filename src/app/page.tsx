"use client";
import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import HeroSection from "app/components/HeroSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import FeaturesSection from "app/components/FeaturesSection";
import MediaCommonSection from "app/components/MediaCommonSection";
import SearchSection from "app/components/SearchSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import { bloodMoneyMedia } from "app/configs/MediaData";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Navbar />
      <NavAdsSection />
      <div id="hero-section-wrapper" className="relative z-10">
        <HeroSection />
      </div>
      <GamesGallerySection />
      <SearchSection />
      {/* <MediaSection /> */}
      <MediaCommonSection
        titleColor="text-blue-400"
        items={bloodMoneyMedia}
        scale={150}
      />
      {/* <AboutSection /> */}
      <FeaturesSection />
      {/* <HowToPlaySection /> */}
      {/* <NewsSection /> */}
      <FooterSection />
    </div>
  );
}
