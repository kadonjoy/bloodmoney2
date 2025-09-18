"use client";

import React from "react";

export default function LoveMoneyMediaSection() {
  return (
    <section
      id="media"
      className="section min-h-screen py-16 sm:py-24 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
          Media
        </h2>
        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col items-center max-w-xs mx-auto scale-150">
            <iframe
              src="https://www.youtube.com/embed/U58xHabRFO8?si=w__Xyx5-KkK_qV7V"
              title="LoveMoney Official Gameplay Trailer"
              className="w-full h-[150px] rounded-lg shadow-lg border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="mt-2 text-center">
              <h3 className="text-lg font-bold text-white mb-1">
                Official Trailer
              </h3>
              <p className="text-gray-400 text-xs">
                Here is Lovemoney, a fanmade game inspired by Lovemoney! with
                all items and all endings.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col items-center max-w-xs mx-auto scale-150">
            <iframe
              src="https://www.youtube.com/embed/FnIP7XgEhSE?si=R9dybyN-BvZT3ka4"
              title="LoveMoney Full Playthrough Guide"
              className="w-full h-[150px] rounded-lg shadow-lg border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="mt-2 text-center">
              <h3 className="text-lg font-bold text-white mb-1">
                Gameplay Walkthrough
              </h3>
              <p className="text-gray-400 text-xs">
                Here’s a brand-new LOVE MONEY Fangame made by fans who just
                couldn’t wait any longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
