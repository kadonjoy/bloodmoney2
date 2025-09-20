"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { GameHeroSectionProps } from "app/utils/typedefine";

export default function GameHeroSection({
  gameTitle,
  gameSubtitle,
  gameIframeSrc,
  gameImageSrc,
  howToPlayList,
}: GameHeroSectionProps) {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  // enter & exit fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Fullscreen toggle
  const handleFullscreen = async () => {
    if (!document.fullscreenElement) {
      // Enter fullscreen
      try {
        await iframeRef.current?.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error("Error attempting to enable fullscreen:", err);
      }
    } else {
      // Exit fullscreen
      try {
        await document.exitFullscreen();
        // setIsFullscreen(false); // Handled by fullscreenchange event
      } catch (err) {
        console.error("Error attempting to exit fullscreen:", err);
      }
    }
  };

  // Share logic (copy link only)
  const handleShare = () => {
    window.prompt("Copy this link:", window.location.href);
  };

  return (
    <section
      id="hero"
      className="section relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div
        className={`relative z-10 w-full flex flex-col items-center mt-4 ${
          isFullscreen ? "fixed inset-0 bg-black z-[9999]" : ""
        }`}
      >
        {/* Game iframe wrapper */}
        <div className="w-full max-w-5xl mt-20 flex flex-col justify-center">
          <iframe
            ref={iframeRef}
            src={gameIframeSrc}
            title={gameTitle}
            className={`justify-center w-full h-[600px] shadow-2xl border-0 ${
              isFullscreen ? "w-screen h-screen max-w-none rounded-none" : ""
            }`}
            allowFullScreen
          />
          {/* Game Control Bar */}
          <div className="justify-center items-center mt-0 p-0 bg-gray-800">
            <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-3">
              {/* Left Side - Game Info */}
              <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
                <Image
                  src={gameImageSrc}
                  alt={gameTitle}
                  width={40}
                  height={40}
                  className="rounded-lg object-cover"
                />
                <div className="hidden sm:block">
                  <p className="text-white font-medium text-xs md:text-sm">
                    {gameTitle}
                  </p>
                  <p className="text-gray-400 text-xs">Free to Play</p>
                </div>
              </div>

              {/* Right Side - Controls */}
              <div className="flex items-center space-x-1 md:space-x-2">
                <button
                  className="group px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors"
                  onClick={handleShare}
                >
                  <i className="fas fa-share-alt text-gray-400 group-hover:text-blue-400 transition-colors text-sm"></i>
                </button>

                <button
                  className="group px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors"
                  onClick={() => setShowHowToPlay(true)}
                >
                  <i className="fas fa-gamepad text-gray-400 group-hover:text-yellow-400 transition-colors text-sm"></i>
                </button>

                <button
                  className="group px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors"
                  onClick={handleFullscreen}
                >
                  <i className="fas fa-expand text-gray-400 group-hover:text-white transition-colors text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons below game window */}
        <div className="flex gap-2 mt-4 justify-center"></div>
        {/* How to Play modal */}
        {showHowToPlay && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-[10000] flex items-center justify-center">
            <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full text-left relative">
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={() => setShowHowToPlay(false)}
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                How to Play
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-white text-lg">
                {howToPlayList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
      <div className="relative z-10 p-4 sm:p-8">
        <h1 className="hidden md:block text-2xl font-bold py-2 text-white px-4">
          {gameTitle} - {gameSubtitle}
        </h1>
      </div>
    </section>
  );
}
