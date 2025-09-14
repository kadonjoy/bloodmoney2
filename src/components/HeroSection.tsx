import React, { useState } from "react";

export default function HeroSection() {
  const [showGame, setShowGame] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Fullscreen toggle
  const handleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
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
          <a
            href="#"
            className="inline-block px-8 py-4 bg-red-600 rounded-xl text-xl font-bold uppercase tracking-widest hover:bg-red-700 transition duration-300 glow-button"
            onClick={(e) => {
              e.preventDefault();
              setShowGame(true);
            }}
          >
            Play Now
          </a>
        )}
      </div>
      {showGame && (
        <div
          className={`relative z-10 w-full flex flex-col items-center mt-8 ${
            isFullscreen ? "fixed inset-0 bg-black z-[9999]" : ""
          }`}
        >
          {/* Game iframe wrapper */}
          <div className="relative w-full flex justify-center">
            <iframe
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.html"
              title="BloodMoney 2 Game"
              className={`w-full max-w-5xl h-[600px] rounded-xl shadow-2xl border-0 ${
                isFullscreen ? "w-screen h-screen max-w-none rounded-none" : ""
              }`}
              allowFullScreen
            />
          </div>
          {/* Buttons below game window */}
          <div className="flex gap-2 mt-4 justify-center">
            <button
              className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition text-sm"
              onClick={handleFullscreen}
            >
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
            <button
              className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition text-sm"
              onClick={handleShare}
            >
              Share
            </button>
            <button
              className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition text-sm"
              onClick={() => setShowHowToPlay(true)}
            >
              How to Play
            </button>
          </div>
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
