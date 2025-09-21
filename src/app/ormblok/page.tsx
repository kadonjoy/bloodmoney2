"use client";

import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import OrmblokFeaturesSection from "app/components/OrmblokFeaturesSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import SearchSection from "app/components/SearchSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import MediaCommonSection from "app/components/MediaCommonSection";
import GameHeroSection from "app/components/GameHeroSection";
import { ormblokMedia } from "app/configs/MediaData";
import ReadyToPlaySection from "app/components/ReadyToPlaySection";

const ormblokHowToPlay = [
  "Understand the Basics: Begin your Ormblok journey by learning the fundamental mechanics. Use falling blocks to create 2x2 gaps in the playfield, which transform into edible pellets for your worm.",
  "Creating Strategic Gaps: Success in Ormblok requires thoughtful gap placement. Plan your block arrangements to create accessible paths for your worm while maximizing pellet generation opportunities.",
  "Mastering Worm Control: Once you enter Worm Mode in Ormblok, navigate carefully through your created maze. Eat all pellets while avoiding walls and your own tail to complete each round.",
  "Optimizing Your Score: Push your Ormblok skills by attempting high-risk strategies. Create complex patterns that challenge your worm navigation abilities but offer exponentially higher point rewards.",
];

export default function OrmBlokPage() {
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
          gameTitle="OrmBlok"
          gameSubtitle="Arcade Puzzle Game | Tetris Meets Snake Adventure"
          gameIframeSrc="https://s.clicker-game.com/games/ormblok/ormblok.html"
          gameImageSrc="https://s.clicker-game.com/games/ormblok/ormblok.jpg"
          howToPlayList={ormblokHowToPlay}
        />
      </div>
      <GamesGallerySection />
      <SearchSection />
      <MediaCommonSection
        titleColor="text-blue-400"
        items={ormblokMedia}
        scale={150}
      />
      <OrmblokFeaturesSection />
      <ReadyToPlaySection playNowHref={"/ormblok"} gameTitle={"OrmBlok"} />
      <FooterSection />
    </div>
  );
}
