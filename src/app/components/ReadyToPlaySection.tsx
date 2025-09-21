import React from "react";
import { ReadyToPlaySectionProps } from "app/utils/typedefine";

export default function ReadyToPlaySection({
  playNowHref,
  gameTitle,
}: ReadyToPlaySectionProps) {
  return (
    <section
      id="ready-to-play"
      className="bg-gradient-to-r from-pink-800 to-indigo-900 text-white py-20"
    >
      <div className="container max-w-7xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold mb-6">
          Ready to Experience The {gameTitle}?
        </h2>
        <a
          href={playNowHref}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-xl py-4 px-10 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition duration-300 inline-block hover:shadow-lg transform hover:-translate-y-1"
        >
          Play {gameTitle} Now
        </a>
      </div>
    </section>
  );
}
