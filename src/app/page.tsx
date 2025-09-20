"use client";
import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import GamesGallerySection from "app/components/GamesGallerySection";
import FeaturesSection from "app/components/FeaturesSection";
import MediaCommonSection from "app/components/MediaCommonSection";
import SearchSection from "app/components/SearchSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import { bloodMoneyMedia } from "app/configs/MediaData";
import GameHeroSection from "app/components/GameHeroSection";

const bloodMoney2HowToPlay = [
  "Start the Program: Enter the Human Expenditure Program and review Harvey's current stats and situation.",
  "Make Choices: Select actions for Harvey—work overtime, rest, spend money, or interact with other characters. Each choice affects his physical and mental state.",
  "Monitor Resources: Watch Harvey's health, happiness, and money. Poor decisions can lead to burnout, debt, or unexpected consequences.",
  "Explore Storylines: Try different strategies to unlock multiple endings and discover hidden events. Your decisions shape Harvey's fate.",
  "Experience Satire: Enjoy the dark humor and social commentary as you manage Harvey's life in a world where every action has a price.",
];

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
        {/* <HeroSection /> */}
        <GameHeroSection
          gameTitle="BloodMoney 2"
          gameSubtitle="Human Expenditure Program"
          gameIframeSrc="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.html"
          gameImageSrc="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg"
          howToPlayList={bloodMoney2HowToPlay}
        />
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
