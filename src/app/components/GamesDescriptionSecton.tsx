import React from "react";

export default function GamesDescriptionSecton() {
  return (
    <section
      id="games-description-section"
      className="bg-gray-900 py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">
            About BloodMoney2 Games
          </h2>
        </div>
        <div className="text-base sm:text-lg leading-relaxed text-gray-300 space-y-6">
          <p>
            Welcome to{" "}
            <span className="text-yellow-400 font-semibold">BloodMoney2</span>,
            where we create immersive gaming experiences that challenge
            conventions and push the boundaries of interactive entertainment.
            Our studio was founded on the principle that games should be more
            than just entertainment—they should be memorable journeys that stay
            with players long after they&aposve put down the controller.
          </p>

          <p>
            At BloodMoney2, we specialize in developing{" "}
            <span className="text-yellow-400 font-semibold">
              action-packed, narrative-driven games
            </span>{" "}
            with deep strategic elements. Our titles blend intense gameplay with
            rich storytelling, set in meticulously crafted worlds that feel both
            familiar and extraordinary. Whether you&aposre infiltrating
            high-security facilities in Shadow Operative or building a new
            civilization among the stars, our games are uniquely their own.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Innovative Gameplay
              </h3>
              <p className="text-gray-300">
                Our games feature mechanics that challenge players to think
                strategically while delivering satisfying action sequences.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Rich Narratives
              </h3>
              <p className="text-gray-300">
                Every BloodMoney2 title tells a compelling story with complex
                characters and morally ambiguous choices.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Player-Driven Worlds
              </h3>
              <p className="text-gray-300">
                Our game worlds react to player decisions, creating dynamic
                experiences that differ with each playthrough.
              </p>
            </div>
          </div>

          <p>
            As we continue to expand our portfolio, we remain committed to our
            core values: quality, innovation, and above all, creating games that
            we ourselves would love to play. Join our growing community of
            strategic gamers and discover why BloodMoney2 is quickly becoming a
            recognized name in tactical gaming.
          </p>
        </div>
      </div>
    </section>
  );
}
