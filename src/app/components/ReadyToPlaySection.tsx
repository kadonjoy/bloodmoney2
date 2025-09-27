import React from "react";
import { ReadyToPlaySectionProps } from "app/utils/typedefine";

export default function ReadyToPlaySection({
  playNowHref,
  gameTitle,
}: ReadyToPlaySectionProps) {
  return (
    <section
      id="ready-to-play"
      className="bg-gradient-to-r from-pink-800 to-indigo-900 text-white py-16 sm:py-20"
    >
      <div className="container max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready to Experience The {gameTitle}?
        </h2>
        <a
          href={playNowHref}
          className="max-w-2xl w-auto sm:w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-lg sm:text-xl py-3 sm:py-4 px-6 sm:px-10 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition duration-300 inline-block hover:shadow-lg transform hover:-translate-y-1"
        >
          Play {gameTitle} Now
        </a>
      </div>
    </section>
  );
}
