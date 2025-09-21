"use client";

import React, { useEffect } from "react";
import Navbar from "app/components/Navbar";
import NormalMathsFeaturesSection from "app/components/NormalMathsFeaturesSection";
import FooterSection from "app/components/FooterSection";
import NavAdsSection from "app/components/NavAdsSection";
import SearchSection from "app/components/SearchSection";
import GamesGallerySection from "app/components/GamesGallerySection";
import GameHeroSection from "app/components/GameHeroSection";
import MediaCommonSection from "app/components/MediaCommonSection";
import { normalMathMedia } from "app/configs/MediaData";
import ReadyToPlaySection from "app/components/ReadyToPlaySection";

const normalMathsHowToPlay = [
  "Understanding the Interface: Start your Normal Maths journey by familiarizing yourself with the tile placement system. Click and drag tiles to position them according to hidden mathematical rules.",
  "Pattern Recognition: Success in Normal Maths requires identifying mathematical patterns. Observe how tiles interact, looking for numerical relationships and logical connections between elements.",
  "Experimental Approach: Normal Maths rewards experimentation. Try different tile arrangements to discover the underlying rules. Use the backspace key to clear and restart when exploring new solutions.",
  "Progressive Learning: Each Normal Maths puzzle builds on previous concepts. Take time to understand earlier puzzles thoroughly, as their principles often apply to later, more complex challenges.",
];

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
        <GameHeroSection
          gameTitle="Normal Maths"
          gameSubtitle="Normal Maths - Mind-Bending Mathematical Puzzle Game | Logic
                    Challenge"
          gameIframeSrc="https://s.clicker-game.com/games/normal-maths/normal-maths.html"
          gameImageSrc="https://s.clicker-game.com/games/normal-maths/normal-maths.jpg"
          howToPlayList={normalMathsHowToPlay}
        />
      </div>
      <GamesGallerySection />
      <SearchSection />
      <MediaCommonSection
        titleColor="text-blue-400"
        items={normalMathMedia}
        scale={150}
      />
      <NormalMathsFeaturesSection />
      <ReadyToPlaySection
        playNowHref={"/normal-maths"}
        gameTitle={"Normal Maths"}
      />

      <FooterSection />
    </div>
  );
}
