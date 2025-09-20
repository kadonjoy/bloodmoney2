import React from "react";
import Link from "next/link";
import Image from "next/image";

// define the Game type
interface Game {
  href: string;
  image: string;
  title: string;
  isPopular?: boolean;
}

// game data array
const gamesData: Game[] = [
  {
    href: "/",
    image:
      "https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg",
    title: "BloodMoney 2",
    isPopular: true,
  },
  {
    href: "/lovemoney",
    image: "https://s.clicker-game.com/games/lovemoney/lovemoney-2.jpg",
    title: "LoveMoney",
    isPopular: true,
  },
  {
    href: "/normal-maths",
    image: "https://s.clicker-game.com/games/normal-maths/normal-maths.jpg",
    title: "Normal Maths",
    isPopular: true,
  },
  // You can continue to add more games...
];

export default function GamesGallerySection() {
  return (
    <section id="gamesgallery" className="section py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl font-bold mb-4 mt-4 text-white relative pb-2 group">
          <i className="fas fa-fire-alt mr-1 text-red-400 group-hover:text-orange-400 transition-colors duration-300"></i>
          Games Gallery
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full group-hover:w-full transition-all duration-500"></span>
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          id="games-container"
        >
          {gamesData.map((game, index) => (
            <Link
              key={index}
              href={game.href}
              className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 group"
              style={{ border: "3px solid white" }}
            >
              <Image
                width={444}
                height={250}
                loading="lazy"
                decoding="async"
                src={game.image}
                alt={game.title}
                title={game.title}
                className="w-full aspect-[3/2] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/20 rounded-2xl pointer-events-none"></div>

              {game.isPopular && (
                <div className="absolute top-1 right-1 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md z-10 group-hover:opacity-0 transition-opacity duration-200">
                  POP
                </div>
              )}

              <div className="absolute top-0 left-0 right-0 bg-black/70 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium rounded-t-2xl">
                <div>{game.title}</div>
              </div>

              <span className="absolute z-10 bottom-3 right-3 bg-white/90 text-sm font-bold py-1.5 px-4 rounded-full text-black opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                PLAY
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
