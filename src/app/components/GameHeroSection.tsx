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
      className="section relative w-full min-h-screen flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div
        className={`relative z-10 w-full flex flex-col items-center mt-4 ${
          isFullscreen ? "fixed inset-0 bg-black z-[9999]" : ""
        }`}
      >
        {!showGame ? (
          // Game Cover Area
          <div className="bg-gray-800 shadow-md rounded-lg mb-4 w-full max-w-5xl">
            <div
              id="mobile-game-cover"
              className="relative w-full h-[60vh] md:h-[80vh] min-h-[300px] md:min-h-0 overflow-hidden rounded-lg bg-black flex items-center justify-center"
            >
              {/* Background blur effect using the same image source */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={gameImageSrc}
                  alt={`${gameTitle} background blur`}
                  fill
                  className="w-full h-full object-cover scale-110 blur-xl opacity-40"
                  aria-hidden="true"
                />
              </div>
              <div className="w-full flex flex-col items-center justify-center relative z-10">
                {/* Game info and Play button */}
                <div className="flex flex-col items-center w-4/5 max-w-sm">
                  <Image
                    src={gameImageSrc}
                    width={600}
                    height={400}
                    className="w-full rounded-lg z-10 max-h-[30vh] md:max-h-[40vh] object-contain"
                    alt={`${gameTitle} - ${gameSubtitle}`}
                  />
                  <p className="text-2xl sm:text-xl line-clamp-2 overflow-hidden text-center max-w-full font-bold mb-4 text-white">
                    {gameTitle} - {gameSubtitle}
                  </p>
                  <div className="flex justify-center w-full">
                    <button
                      className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 px-8 rounded-3xl transition-colors"
                      onClick={() => setShowGame(true)}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Play Now
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Game iframe wrapper */}
            <div className="w-full max-w-5xl mt-20 flex flex-col justify-center">
              <iframe
                ref={iframeRef}
                src={gameIframeSrc}
                title={gameTitle}
                className={`justify-center w-full h-[600px] shadow-2xl border-0 ${
                  isFullscreen
                    ? "w-screen h-screen max-w-none rounded-none"
                    : ""
                }`}
                allowFullScreen
              />
              {/* Game Control Bar */}
              <div className="relative z-20 w-full max-w-5xl bg-gray-800">
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
          </>
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
