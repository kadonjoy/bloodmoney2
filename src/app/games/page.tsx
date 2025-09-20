"use client";
import React, { useEffect } from "react";
import GameNavbar from "app/games/sections/GamesNavbar";
import SearchSection from "app/components/SearchSection";
import FeaturesSection from "app/components/FeaturesSection";
import MediaCommonSection from "app/components/MediaCommonSection";
import FooterSection from "app/components/FooterSection";

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
      {/* <AboutSection /> */}
      <FeaturesSection />
      {/* <HowToPlaySection /> */}
      {/* <NewsSection /> */}
      <FooterSection />
    </div>
  );
}
