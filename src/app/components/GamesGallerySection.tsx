import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GamesGallerySection() {
  return (
    <section
      id="gamesgallery"
      className="section min-h-screen py-16 sm:py-24 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-4 mt-4 text-white relative pb-2 group">
          <i className="fas fa-fire-alt mr-1 text-red-400 group-hover:text-orange-400 transition-colors duration-300"></i>
          Games Gallery
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full group-hover:w-full transition-all duration-500"></span>
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          id="games-container"
        >
          <Link
            href="/"
            className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 group"
            style={{ border: "3px solid white" }}
          >
            <Image
              width={444}
              height={250}
              loading="lazy"
              decoding="async"
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg"
              alt="BloodMoney 2"
              title="BloodMoney 2"
              className="w-full aspect-[3/2] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/20 rounded-2xl pointer-events-none"></div>
            <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md z-10 group-hover:opacity-0 transition-opacity duration-200">
              POP
            </div>
            <div className="absolute top-0 left-0 right-0 bg-black/70 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium rounded-t-2xl">
              <div>BloodMoney 2</div>
            </div>
            <span className="absolute z-10 bottom-3 right-3 bg-white/90 text-sm font-bold py-1.5 px-4 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              PLAY
            </span>
          </Link>
          <Link
            href="/lovemoney"
            className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 group"
            style={{ border: "3px solid white" }}
          >
            <Image
              width={444}
              height={250}
              loading="lazy"
              decoding="async"
              src="https://s.clicker-game.com/games/lovemoney/lovemoney-2.jpg"
              alt="LoveMoney"
              title="LoveMoney"
              className="w-full aspect-[3/2] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/20 rounded-2xl pointer-events-none"></div>
            <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md z-10 group-hover:opacity-0 transition-opacity duration-200">
              POP
            </div>
            <div className="absolute top-0 left-0 right-0 bg-black/70 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium rounded-t-2xl">
              <div>LoveMoney</div>
            </div>
            <span className="absolute z-10 bottom-3 right-3 bg-white/90 text-sm font-bold py-1.5 px-4 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
              PLAY
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
