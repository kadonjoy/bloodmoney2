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

export default function OrmblokFeaturesSection() {
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
                What is Ormblok?
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="flex-1">
                  <Image
                    src="https://s.clicker-game.com/games/ormblok/ormblok.jpg"
                    alt="Ormblok - Arcade Puzzle Game | Tetris Meets Snake Adventure"
                    className="w-full rounded-2xl shadow-xl"
                    width={800}
                    height={600}
                    priority={false} // true if you want to prioritize loading
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200">
                    Ormblok revolutionizes classic puzzle gaming by merging
                    Tetris-style block dropping with Snake mechanics. This Game
                    Boy Color inspired arcade puzzle challenges you to think
                    differently about falling blocks - create gaps, not lines!
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-300">
                <p>
                  Ormblok stands out in the puzzle game genre by completely
                  reimagining how we interact with falling blocks. Created by
                  Ben Jelter and Mike Leisz for GB Compo 2025, this innovative
                  title flips traditional Tetris logic on its head. Instead of
                  clearing lines, Ormblok challenges you to strategically create
                  gaps that transform into pellets for your worm to consume.
                  This unique mechanic creates an entirely new puzzle experience
                  that feels both familiar and refreshingly different.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/ormblok/ormblok-2.jpg"
                      alt="Ormblok Gameplay - Block Dropping Phase"
                      width={800}
                      height={600}
                      className="object-cover rounded-xl shadow-lg"
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Strategic block placement creates opportunities in Ormblok
                    </p>
                  </div>
                </div>
                <p>
                  The genius of Ormblok lies in its dual-phase gameplay system.
                  During the block phase, you arrange falling pieces to create
                  strategic 2x2 gaps in the playfield. Once you&apos;ve built
                  your arena, the game seamlessly transitions to Worm Mode,
                  where you control a snake-like creature navigating through
                  your creation to eat pellets. Each round in Ormblok increases
                  the target goal dramatically, pushing your strategic planning
                  and quick-thinking abilities to their limits.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/ormblok/ormblok-3.jpg"
                      alt="Ormblok Worm Mode Activated"
                      width={800}
                      height={600}
                      className="justify-center rounded-xl shadow-lg"
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Guide your worm through created gaps to score points
                    </p>
                  </div>
                </div>
                <p>
                  What makes Ormblok particularly engaging is its risk-reward
                  scoring system. The game encourages bold strategies by
                  offering exponentially higher points for more challenging
                  setups. Players must decide whether to play it safe with
                  simple patterns or attempt complex arrangements that could
                  yield massive scores. This depth transforms Ormblok from a
                  simple puzzle game into a strategic masterpiece where every
                  block placement matters.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="max-w-2xl w-full">
                    <Image
                      src="https://s.clicker-game.com/games/ormblok/ormblok-4.jpg"
                      alt="Ormblok Advanced Strategies"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Master risk-reward gameplay for exponential scoring
                    </p>
                  </div>
                </div>
                <p>
                  Developed using GB Studio 4.2, Ormblok captures the nostalgic
                  charm of Game Boy Color classics while introducing modern
                  gameplay innovations. The minimalist pixel art style keeps the
                  focus on pure gameplay, while responsive controls ensure that
                  success in Ormblok depends entirely on your skill and
                  strategy. Whether you&apos;re a puzzle game veteran or new to
                  the genre, Ormblok offers an accessible yet deeply challenging
                  experience.
                </p>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "features" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Ormblok Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-theater-masks"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Innovative Hybrid Gameplay
                  </h3>
                  <p className="text-gray-300">
                    Ormblok uniquely combines Tetris-style block dropping with
                    Snake mechanics. Create strategic gaps with falling blocks,
                    then guide your worm through the playfield you&apos;ve
                    built.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Risk-Reward Scoring System
                  </h3>
                  <p className="text-gray-300">
                    Master Ormblok&apos;s exponential scoring by taking
                    calculated risks. More complex strategies yield dramatically
                    higher points, rewarding skilled players with massive score
                    multipliers.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Progressive Difficulty
                  </h3>
                  <p className="text-gray-300">
                    Each round in Ormblok increases the challenge significantly.
                    Progress through 9 increasingly demanding levels that test
                    your puzzle-solving abilities and reflexes.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Retro Game Boy Aesthetics
                  </h3>
                  <p className="text-gray-300">
                    Experience authentic Game Boy Color visuals in Ormblok.
                    Minimalist pixel art and classic sound effects create a
                    nostalgic atmosphere while maintaining modern gameplay
                    standards.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Play */}
          {activeTab === "howto" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                How to Master Ormblok
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Understanding the Basics
                  </h3>
                  <p className="text-gray-200">
                    Begin your Ormblok journey by learning the fundamental
                    mechanics. Use falling blocks to create 2x2 gaps in the
                    playfield, which transform into edible pellets for your
                    worm.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Creating Strategic Gaps
                  </h3>
                  <p className="text-gray-200">
                    Success in Ormblok requires thoughtful gap placement. Plan
                    your block arrangements to create accessible paths for your
                    worm while maximizing pellet generation opportunities.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Mastering Worm Control
                  </h3>
                  <p className="text-gray-200">
                    Once you enter Worm Mode in Ormblok, navigate carefully
                    through your created maze. Eat all pellets while avoiding
                    walls and your own tail to complete each round.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Optimizing Your Score
                  </h3>
                  <p className="text-gray-200">
                    Push your Ormblok skills by attempting high-risk strategies.
                    Create complex patterns that challenge your worm navigation
                    abilities but offer exponentially higher point rewards.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                The Creation of Ormblok
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                <p>
                  Ormblok was born from a collaboration between developers Ben
                  Jelter and Mike Leisz during GB Compo 2025. The three-month
                  development journey focused on creating something truly unique
                  in the oversaturated puzzle game market. By combining two
                  classic game mechanics - Tetris and Snake - the team crafted
                  an experience that challenges conventional puzzle game
                  thinking.
                </p>
                <p>
                  The development process for Ormblok utilized GB Studio 4.2,
                  allowing the creators to achieve authentic Game Boy Color
                  aesthetics while implementing modern gameplay innovations.
                  Original music by Robotmeadows and sound effects by Beatscribe
                  enhance the retro atmosphere, creating an immersive experience
                  that pays homage to classic handheld gaming while pushing
                  boundaries.
                </p>
                <p>
                  Since its release, Ormblok has garnered attention from puzzle
                  game enthusiasts and retro gaming communities alike. Players
                  praise its innovative approach to familiar mechanics, tight
                  controls, and the satisfying challenge of mastering its
                  risk-reward system. The success of Ormblok demonstrates that
                  there&apos;s still room for innovation in classic game genres
                  when developers think outside conventional design patterns.
                </p>
              </div>
            </div>
          )}

          {/* Community */}
          {activeTab === "community" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Ormblok Player Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Ormblok completely changed how I think about puzzle games.
                    The combination of block dropping and snake mechanics
                    creates endless strategic possibilities.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Retro Gaming Enthusiast
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    The risk-reward system in Ormblok is perfectly balanced.
                    Every decision matters, and pulling off a high-scoring
                    strategy feels incredibly satisfying.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Puzzle Game Expert
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Ormblok captures the magic of Game Boy classics while
                    offering something genuinely new. It&apos;s the puzzle game
                    innovation we&apos;ve been waiting for.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Indie Game Reviewer
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
                    What is Ormblok?
                  </h3>
                  <p className="text-gray-200">
                    Ormblok is an innovative arcade puzzle game that combines
                    Tetris-style block dropping with Snake mechanics, where you
                    create gaps for a worm to navigate and eat pellets.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Is Ormblok free?
                  </h3>
                  <p className="text-gray-200">
                    Yes! You can play the complete Ormblok experience online for
                    free.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What platforms can I play Ormblok on?
                  </h3>
                  <p className="text-gray-200">
                    Ormblok runs in your web browser and is also available as a
                    Game Boy Color ROM for authentic retro hardware or
                    emulators.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How many levels does Ormblok have?
                  </h3>
                  <p className="text-gray-200">
                    Ormblok features 9 progressively challenging rounds, each
                    with dramatically increasing difficulty and scoring
                    opportunities.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What makes Ormblok different from Tetris?
                  </h3>
                  <p className="text-gray-200">
                    Unlike Tetris where you clear lines, Ormblok requires you to
                    create gaps that become pellets, then control a worm to eat
                    them.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Can beginners enjoy Ormblok?
                  </h3>
                  <p className="text-gray-200">
                    Absolutely! Ormblok includes helpful tutorials and starts
                    with manageable difficulty, making it accessible for
                    newcomers while offering depth for experts.
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
