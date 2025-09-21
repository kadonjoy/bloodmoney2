"use client";

import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import BloodMoneyFeaturesSection from "app/components/BloodMoneyFeaturesSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import SearchSection from "app/components/SearchSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import MediaCommonSection from "app/components/MediaCommonSection";
import GameHeroSection from "app/components/GameHeroSection";
import { bloodMoneyMedia } from "app/configs/MediaData";
import FootBarAdsSection from "app/components/FootBarAdsSection";
import ReadyToPlaySection from "app/components/ReadyToPlaySection";

const BloodMoneyHowToPlay = [""];

export default function LoveMoneyPage() {
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
          gameTitle="BloodMoney"
          gameSubtitle="Click Your Way Through Moral Choices | Story-Driven Clicker RPG"
          gameIframeSrc="https://s.clicker-game.com/games/bloodmoney/bloodmoney.html"
          gameImageSrc="https://s.clicker-game.com/games/bloodmoney/bloodmoney.jpg"
          howToPlayList={BloodMoneyHowToPlay}
        />
      </div>
      <GamesGallerySection />
      <FootBarAdsSection />

      <SearchSection />
      <MediaCommonSection
        titleColor="text-blue-400"
        items={bloodMoneyMedia}
        scale={150}
      />
      <BloodMoneyFeaturesSection />
      <ReadyToPlaySection
        playNowHref={"/bloodmoney"}
        gameTitle={"BloodMoney"}
      />
      <FooterSection />
    </div>
  );
}
