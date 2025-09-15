"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import HowToPlaySection from "../components/HowToPlaySection";
import MediaSection from "../components/MediaSection";
import NewsSection from "../components/NewsSection";
import FooterSection from "../components/FooterSection";
import NavAdsComponent from "@/components/NavAdsComponent";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Navbar />
      <NavAdsComponent />
      {/* 将 HeroSection 单独包裹，避免全屏时遮挡其它内容 */}
      <div id="hero-section-wrapper" className="relative z-10">
        <HeroSection />
      </div>
      <MediaSection />
      {/* <AboutSection /> */}
      <FeaturesSection />
      <HowToPlaySection />
      {/* <NewsSection /> */}
      <FooterSection />
    </div>
  );
}
