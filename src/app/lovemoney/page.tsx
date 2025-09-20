"use client";

import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import LoveMoneyFeaturesSection from "app/components/LoveMoneyFeaturesSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import SearchSection from "app/components/SearchSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import MediaCommonSection from "app/components/MediaCommonSection";
import GameHeroSection from "app/components/GameHeroSection";
import { loveMoneyMedia } from "app/configs/MediaData";

const loveMoneyHowToPlay = [
  "Start Clicking: Begin your LoveMoney journey by clicking to earn your first dollars. Each click brings you closer to the $25,000 goal needed for the medical procedure.",
  "Purchase Upgrades Wisely: Invest your earnings in LoveMoney's upgrade system. Buy items that increase your money per click, allowing exponential growth in your earning potential.",
  "Navigate Moral Dilemmas: As you progress in LoveMoney, face challenging decisions. Each choice affects your story path and can unlock special earning opportunities or narrative branches.",
  "Explore Storylines: Try different strategies to unlock multiple endings and discover hidden events. Your decisions shape Harvey's fate.",
  "Discover Your Ending: Reach $25,000 to complete LoveMoney, but remember - how you get there matters. Your choices throughout determine which of the multiple endings you'll experience for Harvey in LoveMoney.",
];

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
          gameTitle="LoveMoney"
          gameSubtitle="Click Your Way Through Moral Choices | Story-Driven Clicker RPG"
          gameIframeSrc="https://s.clicker-game.com/games/lovemoney/lovemoney.html"
          gameImageSrc="https://s.clicker-game.com/games/lovemoney/lovemoney.jpg"
          howToPlayList={loveMoneyHowToPlay}
        />
      </div>
      <GamesGallerySection />
      <SearchSection />
      <MediaCommonSection
        titleColor="text-blue-400"
        items={loveMoneyMedia}
        scale={150}
      />
      <LoveMoneyFeaturesSection />
      <FooterSection />
    </div>
  );
}
