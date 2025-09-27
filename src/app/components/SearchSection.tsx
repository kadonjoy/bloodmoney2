import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Game } from "app/utils/typedefine";

const games: Game[] = [
  {
    id: 1,
    name: "Bloodmoney2",
    image:
      "https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg",
    url: "/",
  },
  {
    id: 2,
    name: "LoveMoney",
    image: "https://s.clicker-game.com/games/lovemoney/lovemoney-2.jpg",
    url: "/lovemoney",
  },
  {
    id: 3,
    name: "Normal Maths",
    image: "https://s.clicker-game.com/games/normal-maths/normal-maths.jpg",
    url: "/normal-maths",
  },
  {
    id: 4,
    name: "Ormblok",
    image: "https://s.clicker-game.com/games/ormblok/ormblok.jpg",
    url: "/ormblok",
  },
  {
    id: 5,
    name: "BloodMoney",
    image: "https://s.clicker-game.com/games/bloodmoney/bloodmoney.jpg",
    url: "/bloodmoney",
  },
  {
    id: 6,
    name: "Poor Bunny",
    image: "https://s.clicker-game.com/games/poor-bunny/poor-bunny.jpg",
    url: "/poorbunny",
  },
];

export default function SearchSection() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Game[]>([]);

  // input change handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    } else {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  // clear search input
  const clearSearch = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <section
      id="game-search"
      className="py-12 bg-gradient-to-br from-indigo-900 to-purple-900 shadow-inner"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center mb-6">
          <p className="text-3xl font-bold text-white mb-4">
            Discover Your Next Favorite Game
          </p>

          {/* search input */}
          <div className="max-w-2xl mx-auto mb-8 px-4 sm:px-0 relative">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full transform scale-110"></div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <svg
                  className="h-6 w-6 text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search games..."
                value={query}
                onChange={handleSearch}
                className="w-full pl-12 pr-12 py-5 bg-gray-900/80 backdrop-blur-sm 
                  border-2 border-indigo-400/50 hover:border-indigo-300/70 
                  focus:border-indigo-300 rounded-xl text-white placeholder-indigo-200/70 
                  text-lg shadow-lg shadow-indigo-500/30 focus:shadow-indigo-400/50 
                  focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all duration-300"
              />
              {query && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-300 hover:text-white transition-colors duration-200"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* search results */}
          {results.length > 0 && (
            <div id="mainSearchResults" className="max-w-6xl mx-auto">
              <div className="bg-gray-900/90 backdrop-blur-md rounded-xl p-5 max-h-[600px] overflow-y-auto border border-indigo-500/30 shadow-xl shadow-indigo-600/20">
                <div className="text-left text-white mb-3 border-b border-indigo-500/40 pb-2">
                  <span className="text-indigo-300 font-semibold">
                    {results.length}
                  </span>{" "}
                  games found
                </div>
                <div
                  id="resultsContainer"
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {results.map((game) => (
                    <div
                      key={game.id}
                      className="bg-indigo-800/60 rounded-lg p-4 shadow-md hover:shadow-lg transition flex flex-col items-center"
                    >
                      <Image
                        src={game.image}
                        alt={game.name}
                        width={300}
                        height={200}
                        className="rounded-md mb-3 object-cover"
                      />
                      <p className="text-white font-semibold text-center mb-3">
                        {game.name}
                      </p>
                      <Link
                        href={game.url}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition"
                      >
                        ▶ Play
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
