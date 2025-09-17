import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

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
        // setIsFullscreen(false); // 由 fullscreenchange 事件处理
      } catch (err) {
        console.error("Error attempting to exit fullscreen:", err);
      }
    }
  };

  // Share logic (copy link only)
  const handleShare = () => {
    window.prompt("Copy this link:", window.location.href);
  };

  // How to Play modal logic
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  return (
    <section
      id="hero"
      className="section relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 p-4 sm:p-8">
        {!showGame && (
          <div className="flex flex-col items-center w-4/5 max-w-sm mx-auto">
            <img
              loading="eager"
              decoding="async"
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg"
              className="w-full rounded-lg z-10 max-h-[30vh] md:max-h-[40vh] object-contain"
              alt="BloodMoney 2 - Human Expenditure Program"
            />
            <p
              id="game-title"
              className="text-2xl sm:text-xl line-clamp-2 overflow-hidden text-center max-w-full font-bold mb-4 text-white"
            >
              BloodMoney 2 - Human Expenditure Program
            </p>
            <div className="flex justify-center w-full">
              <button
                className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-bold py-3 px-8 rounded-3xl transition-colors play-game flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowGame(true);
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Play Now
              </button>
            </div>
          </div>
        )}
        <h1 className="hidden md:block text-2xl font-bold py-2 text-white px-4">
          BloodMoney 2 - Human Expenditure Program
        </h1>
      </div>
      {showGame && (
        <div
          className={`relative z-10 w-full flex flex-col items-center mt-8 ${
            isFullscreen ? "fixed inset-0 bg-black z-[9999]" : ""
          }`}
        >
          {/* Game iframe wrapper */}
          <div className="w-full flex justify-center">
            <iframe
              ref={iframeRef}
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.html"
              title="BloodMoney 2 Game"
              className={`w-full max-w-5xl h-[600px] rounded-xl shadow-2xl border-0 ${
                isFullscreen ? "w-screen h-screen max-w-none rounded-none" : ""
              }`}
              allowFullScreen
            />
            {/* Game Control Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
              <div className="flex items-center justify-between px-2 md:px-4 py-2 md:py-3">
                {/* Left Side - Game Info */}
                <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
                  <Image
                    src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg"
                    alt="BloodMoney 2"
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                  <div className="hidden sm:block">
                    <p className="text-white font-medium text-xs md:text-sm">
                      BloodMoney 2
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
                  <li>
                    Start the Program: Enter the Human Expenditure Program and
                    review Harvey&apos;s current stats and situation.
                  </li>
                  <li>
                    Make Choices: Select actions for Harvey—work overtime, rest,
                    spend money, or interact with other characters. Each choice
                    affects his physical and mental state.
                  </li>
                  <li>
                    Monitor Resources: Watch Harvey&apos;s health, happiness,
                    and money. Poor decisions can lead to burnout, debt, or
                    unexpected consequences.
                  </li>
                  <li>
                    Explore Storylines: Try different strategies to unlock
                    multiple endings and discover hidden events. Your decisions
                    shape Harvey&apos;s fate.
                  </li>
                  <li>
                    Experience Satire: Enjoy the dark humor and social
                    commentary as you manage Harvey&apos;s life in a world where
                    every action has a price.
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
