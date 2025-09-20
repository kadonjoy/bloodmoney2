"use client";
import React, { useEffect } from "react";
import GameNavbar from "app/games/sections/GamesNavbar";
import SearchSection from "app/components/SearchSection";
import FooterSection from "app/components/FooterSection";
import GamesGallerySection from "app/components/GamesGallerySection";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <GameNavbar />
      <GamesGallerySection />
      <SearchSection />
      <FooterSection />
    </div>
  );
}
