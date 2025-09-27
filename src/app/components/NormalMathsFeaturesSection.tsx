import React, { useState } from "react";
import Image from "next/image";

const TABS = [
  { key: "about", label: "About" },
  { key: "features", label: "Features" },
  { key: "howto", label: "How to Play" },
  { key: "history", label: "History" },
  { key: "community", label: "Community" },
  { key: "faq", label: "FAQ" },
];

export default function NormalMathsFeaturesSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="features" className="section py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-colors duration-300 ${
                activeTab === tab.key
                  ? "bg-indigo-700 text-white shadow-lg"
                  : "bg-gray-800 text-indigo-300 hover:bg-indigo-600 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* About tab*/}
          {activeTab === "about" && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                What is Normal Maths?
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="flex-1">
                  <Image
                    src="https://s.clicker-game.com/games/normal-maths/normal-maths.jpg"
                    alt="Normal Maths - Mind-Bending Mathematical Puzzle Game | Logic Challenge"
                    className="w-full rounded-2xl shadow-xl"
                    width={800}
                    height={600}
                    priority={false} // true if you want to prioritize loading
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200">
                    Welcome to Normal Maths, step into Logic Quest, where sharp
                    reasoning blends with creative puzzle mechanics. This
                    engaging challenge invites players to uncover hidden
                    patterns through clever interactions, offering a fresh and
                    thought-provoking twist on classic brain games.
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-300">
                <p>
                  Normal Maths revolutionizes the puzzle genre by combining
                  mathematical thinking with intuitive tile-based gameplay.
                  Created by Late Nine, this innovative game challenges players
                  to uncover hidden rules through experimentation and logical
                  deduction. Each of the 18 puzzles in Normal Maths presents a
                  unique challenge that requires players to think outside
                  conventional puzzle-solving approaches, making it a standout
                  experience in the mathematical gaming landscape.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/normal-maths/normal-maths-2.jpg"
                      alt="Normal Maths Puzzle"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Experience the minimalist beauty of Normal Maths puzzle
                      challenges
                    </p>
                  </div>
                </div>
                <p>
                  The genius of Normal Maths lies in its deceptively simple
                  mechanics paired with deeply complex puzzles. Players click
                  and drag colored tiles to form patterns, but the rules
                  governing these patterns remain mysteriously hidden. Normal
                  Maths doesn&apos;t explain its mechanics upfront - instead, it
                  invites players to discover the mathematical relationships
                  through trial and error. This approach transforms each puzzle
                  into a journey of discovery, where understanding the
                  underlying logic becomes as rewarding as solving the puzzle
                  itself.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/normal-maths/normal-maths-3.jpg"
                      alt="Normal Maths Puzzle"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Master tile manipulation in Normal Maths logic puzzles
                    </p>
                  </div>
                </div>
                <p>
                  What sets Normal Maths apart from traditional puzzle games is
                  its emphasis on abstract mathematical thinking. Drawing
                  inspiration from acclaimed puzzle games like Glowmaker and
                  GestaltOS, Normal Maths creates a unique experience where
                  numbers, symbols, and colors interact in unexpected ways.
                  Players must decode these relationships to progress through
                  increasingly challenging levels, making Normal Maths both a
                  test of logical reasoning and creative problem-solving
                  abilities.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/normal-maths/normal-maths-4.jpg"
                      alt="Normal Maths Pattern Recognition Challenge"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Discover hidden mathematical patterns in Normal Maths
                    </p>
                  </div>
                </div>
                <p>
                  Experience Normal Maths online for free and join a community
                  of puzzle enthusiasts who praise its innovative design.
                  Whether you&apos;re a mathematics lover or simply enjoy
                  challenging brain teasers, Normal Maths offers hours of
                  engaging gameplay. The minimalist aesthetic combined with
                  complex mathematical puzzles creates an addictive experience
                  that keeps players coming back to discover new solutions and
                  hidden patterns in this extraordinary puzzle game.
                </p>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "features" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Normal Maths Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-theater-masks"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Hidden Rule Discovery
                  </h3>
                  <p className="text-gray-300">
                    Normal Maths challenges players to uncover secret
                    mathematical rules through experimentation. Each puzzle
                    contains unique logic that must be discovered through
                    careful observation and testing.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    18 Unique Puzzles
                  </h3>
                  <p className="text-gray-300">
                    Experience 18 carefully crafted challenges in Normal Maths.
                    Each puzzle introduces new concepts and mathematical
                    relationships, ensuring fresh gameplay throughout your
                    journey.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Minimalist Design
                  </h3>
                  <p className="text-gray-300">
                    Normal Maths features clean, colorful tile-based visuals
                    that focus attention on puzzle-solving. The elegant
                    interface enhances the mathematical challenge without
                    unnecessary distractions.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Multiple Solutions
                  </h3>
                  <p className="text-gray-300">
                    Many Normal Maths puzzles offer various valid solutions,
                    encouraging creative thinking and replayability. Discover
                    different approaches to solve the same mathematical
                    challenges.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Play */}
          {activeTab === "howto" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                How to Master Normal Maths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Understanding the Interface
                  </h3>
                  <p className="text-gray-200">
                    Start your Normal Maths journey by familiarizing yourself
                    with the tile placement system. Click and drag tiles to
                    position them according to hidden mathematical rules.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Pattern Recognition
                  </h3>
                  <p className="text-gray-200">
                    Success in Normal Maths requires identifying mathematical
                    patterns. Observe how tiles interact, looking for numerical
                    relationships and logical connections between elements.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Experimental Approach
                  </h3>
                  <p className="text-gray-200">
                    Normal Maths rewards experimentation. Try different tile
                    arrangements to discover the underlying rules. Use the
                    backspace key to clear and restart when exploring new
                    solutions.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Progressive Learning
                  </h3>
                  <p className="text-gray-200">
                    Each Normal Maths puzzle builds on previous concepts. Take
                    time to understand earlier puzzles thoroughly, as their
                    principles often apply to later, more complex challenges.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                The Creation of Normal Maths
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                <p>
                  Normal Maths emerged from developer Late Nine&apos;s vision to
                  create a puzzle game that challenges conventional thinking
                  about mathematics and logic. Inspired by innovative puzzle
                  games like Alphabet Soup for Picky Eater and Fremda, the
                  creator sought to design an experience where mathematical
                  discovery becomes the core gameplay mechanic. The result is
                  Normal Maths, a game that transforms abstract mathematical
                  concepts into tangible, interactive puzzles.
                </p>
                <p>
                  The development of Normal Maths focused on creating puzzles
                  that feel both familiar and alien. By using simple tile-based
                  mechanics, Late Nine made the game accessible, while the
                  hidden mathematical rules ensure depth and complexity. Each
                  puzzle in Normal Maths was meticulously designed to introduce
                  new logical concepts while maintaining the game&apos;s
                  minimalist aesthetic. The custom Alforim font adds to the
                  unique visual identity that makes Normal Maths instantly
                  recognizable.
                </p>
                <p>
                  Since its release, Normal Maths has garnered critical acclaim
                  from the puzzle gaming community. Players praise its
                  innovative approach to mathematical puzzles, with many
                  comparing Late Nine to renowned puzzle creators like Increpare
                  and Jonathan Blow. The game&apos;s ability to challenge
                  players for hours - with some taking over two hours to
                  complete all 18 puzzles - demonstrates the depth and
                  complexity that Normal Maths brings to the puzzle genre. Its
                  success has inspired fan-made level editors and a dedicated
                  community of players who continue to explore the mathematical
                  mysteries within Normal Maths.
                </p>
              </div>
            </div>
          )}

          {/* Community */}
          {activeTab === "community" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Normal Maths Player Testimonials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Normal Maths is a truly great puzzle game. The way it makes
                    you discover mathematical rules through experimentation is
                    brilliant. Happy to have seen it!
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Puzzle Game Enthusiast
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Late Nine has created something special with Normal Maths.
                    It&apos;s one of the most innovative mathematical puzzle
                    games I&apos;ve played, right up there with the greats.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Logic Game Veteran
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Normal Maths was so much fun! The challenge of uncovering
                    hidden rules kept me engaged for hours. Thank you for making
                    such a unique puzzle experience!
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Mathematics Teacher
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === "faq" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What exactly is Normal Maths?
                  </h3>
                  <p className="text-gray-200">
                    Normal Maths is an innovative mathematical puzzle game where
                    players discover hidden rules by manipulating colored tiles.
                    It challenges logical thinking and pattern recognition
                    through 18 unique puzzles.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Is Normal Maths free to play?
                  </h3>
                  <p className="text-gray-200">
                    Yes! You can play Normal Maths completely free online
                    through our website. Experience all 18 challenging puzzles
                    without any cost.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How long does it take to complete Normal Maths?
                  </h3>
                  <p className="text-gray-200">
                    Most players spend 1-3 hours completing all puzzles in
                    Normal Maths, though solving time varies based on
                    puzzle-solving experience and mathematical intuition.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What makes Normal Maths different from other puzzle games?{" "}
                  </h3>
                  <p className="text-gray-200">
                    Normal Maths uniquely combines hidden rule discovery with
                    mathematical logic. Unlike traditional puzzles, Normal Maths
                    doesn&apos;t explain its mechanics - players must discover
                    them through experimentation.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Do I need to be good at math to play Normal Maths?{" "}
                  </h3>
                  <p className="text-gray-200">
                    While mathematical thinking helps, Normal Maths is more
                    about pattern recognition and logical deduction than
                    traditional math skills. Anyone who enjoys puzzles can
                    succeed.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
