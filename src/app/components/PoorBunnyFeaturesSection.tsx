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

export default function PoorBunnyFeaturesSection() {
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
                What is Poor Bunny?
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="flex-1">
                  <Image
                    src="https://s.clicker-game.com/games/poor-bunny/poor-bunny.jpg"
                    alt="PoorBunny - Platformer | Arcade High-Score Challenge Game"
                    className="w-full rounded-2xl shadow-xl"
                    width={800}
                    height={600}
                    priority={false} // true if you want to prioritize loading
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200">
                    Start your journey in the world of Poor Bunny!, an
                    exhilarating arcade experience where survival hinges on your
                    lightning-fast reflexes and precise movements. This highly
                    addictive high-score chaser challenges you to maneuver your
                    little character through a relentless, trap-filled gauntlet.
                    Your primary objective is to greedily collect as many
                    precious carrots as possible—the ultimate measure of your
                    skill—while your dexterity is the only factor determining
                    how long you can last in this action-packed challenge.
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-300">
                <p>
                  Poor Bunny! successfully redefines the arcade survival genre
                  by seamlessly blending straightforward, easy-to-learn controls
                  with a formidable level of difficulty. You assume the role of
                  a small, vulnerable bunny navigating a world absolutely packed
                  with escalating dangers. Be ready for non-stop, high-stakes
                  excitement as you constantly dodge a deadly barrage of
                  incoming arrows, skillfully avoid explosive bombs, and nimbly
                  jump through obstacle courses that grow increasingly
                  treacherous with every passing second.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/poor-bunny/poor-bunny-2.jpg"
                      alt="PoorBunny Gameplay"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Experience the thrill of dodging obstacles in the game
                      Poor Bunny!
                    </p>
                  </div>
                </div>
                <p>
                  The game&aposs replay value is significantly boosted by its
                  three distinct game modes, which cater to various playstyles
                  and situations. The classic Single-Player Mode is perfect for
                  players looking to hone their individual evasion skills in a
                  solo pursuit of the ultimate high score. For shared
                  entertainment, the Co-op Mode transforms the game into a joint
                  effort where two players must coordinate their movements to
                  conquer shared obstacles. Finally, the competitive Battle Mode
                  directly pits players against each other in a frantic test of
                  survival and collection skills.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/poor-bunny/poor-bunny-3.jpg"
                      alt="Poor Bunny 3"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      In this exciting game, you have to collect carrots while
                      avoiding various dangers.
                    </p>
                  </div>
                </div>
                <p>
                  What truly distinguishes Poor Bunny! is its remarkable ability
                  to create moments of intense excitement and stress while
                  remaining profoundly rewarding and fun. The game is instantly
                  engaging, thanks to its vibrant, colorful graphics and
                  ultra-smooth, responsive controls that make every hop feel
                  satisfying. It is a game that directly rewards dedication,
                  offering a genuinely satisfying progression curve for players
                  who commit to developing their quick reflexes and learning to
                  anticipate the increasingly complex trap patterns.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/poor-bunny/poor-bunny-4.jpg"
                      alt="Decision Making"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Experience both cooperative and competitive modes in the
                      game Poor Bunny!
                    </p>
                  </div>
                </div>
                <p>
                  We invite you to jump into the action and play Poor Bunny!
                  online for free today to discover why this sensational arcade
                  title has captured the hearts of gamers worldwide. Featuring
                  highly intuitive controls, the thrill of multiple different
                  game modes, and an almost endless loop of replayability, Poor
                  Bunny! guarantees hours of engaging entertainment. Whether you
                  are seeking a brief, thrilling diversion or a demanding,
                  extended survival challenge, this delightful yet punishing
                  game delivers an unforgettable experience.
                </p>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "features" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Poor Bunny Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-theater-masks"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Three Exciting Game Modes
                  </h3>
                  <p className="text-gray-300">
                    The Poor Bunny game includes a single-player challenge mode,
                    a multiplayer co-op mode, and a competitive battle mode.
                    Each mode offers a unique gameplay experience, testing
                    players&apos skills and strategies in different ways.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Intense Obstacle Dodging
                  </h3>
                  <p className="text-gray-300">
                    In the game Poor Bunny you need to dodge flying arrows,
                    falling bombs, and various traps. The dynamic obstacle
                    system constantly creates unexpected challenges, keeping the
                    game fresh and exciting.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Carrot Collection System
                  </h3>
                  <p className="text-gray-300">
                    In the game Poor Bunny you need to collect carrots while
                    avoiding various dangers. This gameplay mechanic, combining
                    risk and reward, adds a strategic element to the game, as
                    players must balance the pursuit of a high score with their
                    own safety.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Multiplayer Excellence
                  </h3>
                  <p className="text-gray-300">
                    Poor Bunny shines in its multiplayer mode, offering both
                    local co-op and competitive gameplay. You can team up with
                    friends to cooperate, or challenge them in exciting
                    arcade-style matches.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Play */}
          {activeTab === "howto" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                How to Master Poor Bunny
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Learn the Controls
                  </h3>
                  <p className="text-gray-200">
                    To embark on the adventure in Poor Bunny you first need to
                    master the simple WASD or arrow key controls. Fluid movement
                    skills are crucial for overcoming the increasingly
                    challenging obstacles and levels.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Develop Your Reflexes
                  </h3>
                  <p className="text-gray-200">
                    This game Poor Bunny tests the player&aposs reaction speed.
                    Players need to practice dodging obstacles while keeping an
                    eye on the location of the carrots to achieve a higher score
                    and survive for longer.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Master Pattern Recognition
                  </h3>
                  <p className="text-gray-200">
                    In the game Poor Bunny, the key to success lies in
                    understanding the patterns of the obstacles. By knowing the
                    trajectory of the arrows and the blast radius of the bombs,
                    you can anticipate potential dangers and develop appropriate
                    strategies accordingly.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Explore All Modes
                  </h3>
                  <p className="text-gray-200">
                    To experience the full fun of Poor Bunny, try out the
                    single-player mode, co-op mode, and multiplayer mode. Each
                    mode develops different skills, helping you improve your
                    overall gameplay abilities.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                The Story of Poor Bunny
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                <p>
                  The creation of Poor Bunny! stemmed from a straightforward but
                  ambitious design concept: to distill the pure essence of the
                  survival arcade genre into a single, addictive experience. The
                  developers initially envisioned a game that could be instantly
                  understood and played by anyone, yet one that harbored a
                  near-infinite challenge to keep veterans engaged. This
                  founding vision was rooted in flexibility, aiming to deliver a
                  satisfying, complete experience whether players chose to jump
                  in for a quick, thrilling session or settle in for an extended
                  gameplay marathon.
                </p>
                <p>
                  The bulk of the development process was dedicated to
                  perfecting the crucial balance between overwhelming difficulty
                  and simple, rewarding fun. Every obstacle within the game was
                  meticulously designed—from the trajectory of arrows to the
                  timing of cannon fire—to ensure that challenges were fair,
                  thereby guaranteeing that any failure was perceived as a
                  learning opportunity rather than a moment of frustration. A
                  key turning point came from community engagement:
                  incorporating player feedback led to the integration of
                  multiple distinct game modes, which ultimately evolved Poor
                  Bunny! from a high-score solo pursuit into a genuine social
                  gaming phenomenon.
                </p>
                <p>
                  Since its launch, Poor Bunny! has firmly established itself as
                  a beloved title within the broader arcade gaming community.
                  Its success is heavily credited to its highly addictive
                  gameplay loop, where the familiar promise of &quotjust one
                  more try&quot frequently turns into hours of joyous
                  entertainment. The game&aposs unique ability to create moments
                  of intense, high-stakes stress that remain incredibly
                  enjoyable—whether you are mastering evasion alone or battling
                  with friends—is what continues to make Poor Bunny! a truly
                  memorable survival experience.
                </p>
              </div>
            </div>
          )}

          {/* Community */}
          {activeTab === "community" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Poor Bunny Player Comments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Poor Bunny is pure arcade perfection. Simple to learn,
                    impossible to master, and absolutely addictive. The
                    multiplayer modes are a blast!
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Arcade Gaming Fan
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    I love how Poor Bunny manages to be both relaxing and
                    intense. The cute bunny character contrasts perfectly with
                    the challenging gameplay.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Casual Gamer
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Poor Bunny&aposs co-op mode is fantastic! Working together
                    to survive while collecting carrots creates amazing moments
                    with friends.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Multiplayer Enthusiast
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
                    What is Poor Bunny?
                  </h3>
                  <p className="text-gray-200">
                    Poor Bunny is an arcade survival game where players control
                    a little rabbit, dodging obstacles and collecting carrots.
                    The game includes single-player, co-op, and versus modes,
                    offering a variety of gameplay experiences.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Is Poor Bunny free?
                  </h3>
                  <p className="text-gray-200">
                    Yes! You can play the Poor Bunny game online for free
                    through our website, with access to all game modes and
                    features.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How many players can play Poor Bunny?
                  </h3>
                  <p className="text-gray-200">
                    Poor Bunny supports 1-2 players. You can play solo in
                    single-player mode or with a friend in co-op or battle
                    modes.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Who should play Poor Bunny?
                  </h3>
                  <p className="text-gray-200">
                    Poor Bunny is suitable for all ages with its colorful
                    graphics and simple controls, though younger players might
                    find it challenging.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What makes Poor Bunny challenging?
                  </h3>
                  <p className="text-gray-200">
                    The game Poor Bunny challenges your reaction speed with
                    attacks from arrows, falling bombs, and various traps. The
                    difficulty level increases as you progress and survive
                    longer in the game.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What are the controls for Poor Bunny?
                  </h3>
                  <p className="text-gray-200">
                    Player 1 uses the WASD keys, while Player 2 uses the arrow
                    keys. This simple control scheme makes the game Poor Bunny
                    very easy to learn.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What&aposs the objective in Poor Bunny?
                  </h3>
                  <p className="text-gray-200">
                    In the game Poor Bunny your objective is to survive for as
                    long as possible while collecting carrots and avoiding
                    obstacles. Each game mode offers unique gameplay and
                    challenges.
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
