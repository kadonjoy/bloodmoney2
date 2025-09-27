"use client";

import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import PoorBunnyFeaturesSection from "app/components/PoorBunnyFeaturesSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import SearchSection from "app/components/SearchSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import MediaCommonSection from "app/components/MediaCommonSection";
import GameHeroSection from "app/components/GameHeroSection";
import ReadyToPlaySection from "app/components/ReadyToPlaySection";
import FootBarAdsSection from "app/components/FootBarAdsSection";
import { poorBunnyMedia } from "app/configs/MediaData";

const poorBunnyHowToPlay = [""];

export default function PoorBunnyPage() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Navbar />
      <NavAdsSection />
      <div id="hero-section-wrapper" className="relative z-10">
        <GameHeroSection
          gameTitle="Poor Bunny"
          gameSubtitle="Platformer | Arcade High-Score Challenge Game"
          gameIframeSrc="https://s.clicker-game.com/games/poor-bunny/poor-bunny.html"
          gameImageSrc="https://s.clicker-game.com/games/poor-bunny/poor-bunny.jpg"
          howToPlayList={poorBunnyHowToPlay}
        />
      </div>
      <GamesGallerySection />
      <FootBarAdsSection />
      <SearchSection />
      <MediaCommonSection
        titleColor="text-blue-400"
        items={poorBunnyMedia}
        scale={150}
      />
      <PoorBunnyFeaturesSection />
      <ReadyToPlaySection playNowHref={"/poorbunny"} gameTitle={"Poor Bunny"} />
      <FooterSection />
    </div>
  );
}
