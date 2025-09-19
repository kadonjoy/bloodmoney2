"use client";
import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import HeroSection from "app/components/HeroSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import FeaturesSection from "app/components/FeaturesSection";
import HowToPlaySection from "app/components/HowToPlaySection";
import MediaSection from "app/components/MediaSection";
import SearchSection from "app/components/SearchSection";
import FooterSection from "app/components/FooterSection";
import NavAdsComponent from "app/components/NavAdsComponent";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Navbar />
      <NavAdsComponent />
      <div id="hero-section-wrapper" className="relative z-10">
        <HeroSection />
      </div>
      <SearchSection />
      <GamesGallerySection />
      <MediaSection />
      {/* <AboutSection /> */}
      <FeaturesSection />
      {/* <HowToPlaySection /> */}
      {/* <NewsSection /> */}
      <FooterSection />
    </div>
  );
}
