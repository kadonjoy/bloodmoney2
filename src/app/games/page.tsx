"use client";
import React, { useEffect } from "react";
import GameNavbar from "app/games/sections/GamesNavbar";
import SearchSection from "app/components/SearchSection";
import AboutSection from "app/components/GamesGallerySection";
import FeaturesSection from "app/components/FeaturesSection";
import HowToPlaySection from "app/components/HowToPlaySection";
import MediaSection from "app/components/MediaSection";
import NewsSection from "app/components/NewsSection";
import FooterSection from "app/components/FooterSection";
import NavAdsComponent from "app/components/NavAdsComponent";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <GameNavbar />
      <SearchSection />
      {/* <NavAdsComponent /> */}
      <MediaSection />
      {/* <AboutSection /> */}
      <FeaturesSection />
      {/* <HowToPlaySection /> */}
      {/* <NewsSection /> */}
      <FooterSection />
    </div>
  );
}
