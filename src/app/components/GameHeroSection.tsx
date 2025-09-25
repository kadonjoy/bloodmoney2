"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Define the type for the props to ensure type safety
interface GameHeroSectionProps {
  gameTitle: string;
  gameSubtitle: string;
  gameIframeSrc: string;
  gameImageSrc: string;
  howToPlayList: string[];
}

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

  // Enter & exit fullscreen state listener
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
        // setIsFullscreen(false); // Handled by the fullscreenchange event
      } catch (err) {
        console.error("Error attempting to exit fullscreen:", err);
      }
    }
  };

  // Share logic (copy link only)
  const handleShare = () => {
    // Note: window.prompt is used here for simplicity as navigator.clipboard
    // may not work within an iframe due to security restrictions.
    window.prompt("Copy game link", window.location.href);
  };

  // The main hero section container
  return (
    <section
      id="game-hero-section"
      className="bg-gray-900 min-h-screen py-16 sm:py-24 flex items-center justify-center transition-all duration-500 ease-in-out"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          {/* Game iframe and its wrapper */}
          <div className="relative w-full aspect-video shadow-2xl overflow-hidden">
            <iframe
              ref={iframeRef}
              src={gameIframeSrc}
              title={`${gameTitle} Game`}
              className={`absolute top-0 left-0 w-full h-full border-0 transition-opacity duration-500 ${
                showGame ? "opacity-100" : "opacity-0"
              }`}
              allowFullScreen
              loading="lazy"
            />

            {/* Overlay button and info before game starts */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
                showGame ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {/* Game hero image as background with a blurred overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={gameImageSrc}
                  alt={`${gameTitle} Hero Image`}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
                {/* Dark, blurred overlay */}
                <div className="absolute inset-0 bg-current bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
              </div>

              <div className="relative z-10 text-center w-full max-w-2xl px-4 py-8 rounded-lg bg-gray-700 bg-opacity-50">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-400 mb-2 leading-tight">
                  {gameTitle}
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-300 mb-6 tracking-wide">
                  {gameSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setShowGame(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-yellow-400 text-gray-900 rounded-full text-lg font-bold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Play Now
                  </button>
                  {/* <button
                    onClick={() => setShowHowToPlay(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-gray-700 text-white rounded-full text-lg font-bold hover:bg-gray-600 transition-colors duration-300 transform hover:scale-105 shadow-lg"
                  >
                    how to play
                  </button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Game Control Bar */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 bg-gray-800">
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
                {/* <button
                  className="group px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors"
                  onClick={() => setShowHowToPlay(true)}
                >
                  <i className="fas fa-gamepad text-gray-400 group-hover:text-yellow-400 transition-colors text-sm"></i>
                </button> */}
                <button
                  className="group px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-colors"
                  onClick={handleFullscreen}
                >
                  <i className="fas fa-expand text-gray-400 group-hover:text-white transition-colors text-sm"></i>
                </button>
              </div>
            </div>
          </div>
          {showGame && (
            <div className="relative z-10 text-center w-full max-w-2xl px-4 py-8 rounded-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-blue-400 mb-2 leading-tight">
                {gameTitle}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-300 mb-6 tracking-wide">
                {gameSubtitle}
              </p>
            </div>
          )}
        </div>

        {/* How to Play modal */}
        {showHowToPlay && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-[10000] flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full text-left relative shadow-2xl scale-95 md:scale-100 animate-slide-in-up">
              <button
                className="absolute top-4 right-4 text-white text-3xl opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setShowHowToPlay(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-400">
                how to play
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-white text-base sm:text-lg">
                {howToPlayList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
