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

export default function BloodMoneyFeaturesSection() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section
      id="features"
      className="section min-h-screen py-16 sm:py-24 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-8">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-3 mx-2 rounded-full font-bold text-lg transition-colors ${
                activeTab === tab.key
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-800 text-indigo-300 hover:bg-indigo-600 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* About tab*/}
          {activeTab === "about" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                What is BloodMoney?
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="flex-1">
                  <Image
                    src="https://s.clicker-game.com/games/bloodmoney/bloodmoney.jpg"
                    alt="BloodMoney - Original Dark Life Management Simulator"
                    className="w-full rounded-2xl shadow-xl"
                    width={328}
                    height={182}
                    priority={false} // true if you want to prioritize loading
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200">
                    Welcome to BloodMoney, the original dark comedy life
                    management simulator that challenged players to make
                    impossible choices. This groundbreaking game laid the
                    foundation for what would become the Human Expenditure
                    Program series.
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-300">
                <p>
                  BloodMoney is the game that started it all - a darkly comedic
                  life management simulator that puts you in control of a
                  character struggling to survive in a world where everything
                  has a price. Released before its sequel BloodMoney 2, this
                  original title introduced players to the concept of managing
                  human life as a resource, creating a unique and
                  thought-provoking gaming experience.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/bloodmoney/bloodmoney-2.jpg"
                      alt="BloodMoney - Life Management Gameplay"
                      className="w-full rounded-2xl shadow-xl"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Navigate through complex moral decisions in BloodMoney
                    </p>
                  </div>
                </div>
                <p>
                  In BloodMoney, every decision matters. Will you sacrifice your
                  health for a paycheck? Trade your happiness for security? The
                  game presents you with moral dilemmas that mirror real-world
                  struggles, all wrapped in a layer of dark humor that makes the
                  harsh realities easier to digest. Your choices shape not just
                  your character&aposs immediate future, but their entire life
                  trajectory.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/bloodmoney/bloodmoney-3.jpg"
                      alt="BloodMoney Resource Management Screen"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Balance multiple resources to survive in the original
                      BloodMoney
                    </p>
                  </div>
                </div>
                <p>
                  What sets BloodMoney apart from other simulation games is its
                  unflinching look at the commodification of human existence.
                  The game doesn&apost shy away from difficult topics - poverty,
                  exploitation, and the daily grind of survival are all part of
                  the experience. Yet through its satirical lens, BloodMoney
                  manages to be both entertaining and enlightening.
                </p>
                <p>
                  The original BloodMoney features multiple endings, each
                  reflecting different philosophies about life, work, and what
                  it means to succeed. Whether you prioritize wealth, health,
                  happiness, or simply survival, the game responds to your
                  choices with consequences that feel both logical and
                  surprising. This is the game that inspired a generation of
                  dark comedy simulators.
                </p>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "features" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                BloodMoney Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-theater-masks"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Life Management Mechanics
                  </h3>
                  <p className="text-gray-300">
                    Navigate complex decision trees in BloodMoney where every
                    choice affects health, wealth, and happiness simultaneously.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Dark Comedy Narrative
                  </h3>
                  <p className="text-gray-300">
                    Experience BloodMoney&aposs signature blend of humor and
                    social commentary that makes difficult topics accessible.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Multiple Endings
                  </h3>
                  <p className="text-gray-300">
                    Discover various conclusions in BloodMoney based on your
                    management style and moral choices.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Resource Balancing
                  </h3>
                  <p className="text-gray-300">
                    Master BloodMoney&aposs resource system where time, energy,
                    and money must be carefully allocated.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Play */}
          {activeTab === "howto" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                How to Play BloodMoney
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Start Your Journey
                  </h3>
                  <p className="text-gray-200">
                    Begin BloodMoney by creating your character and
                    understanding their starting situation and resources.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Make Daily Decisions
                  </h3>
                  <p className="text-gray-200">
                    Navigate through BloodMoney&aposs choice system, deciding
                    how to spend time, energy, and money.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Monitor Your Stats
                  </h3>
                  <p className="text-gray-200">
                    Keep track of health, wealth, and happiness meters in
                    BloodMoney to avoid critical failures.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Reach Your Ending
                  </h3>
                  <p className="text-gray-200">
                    Guide your character to one of BloodMoney&aposs multiple
                    endings based on your management style.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                The History of BloodMoney
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                <p>
                  BloodMoney was created by Shroomy Christ Studios as an
                  experimental game that would challenge players&apos
                  assumptions about life simulation games. The developers wanted
                  to create something that was both entertaining and meaningful,
                  using dark comedy as a vehicle for social commentary.
                </p>
                <p>
                  The game&aposs development was inspired by real-world
                  observations about work-life balance, economic pressures, and
                  the ways in which modern society treats human beings as
                  resources. BloodMoney was designed to make players think about
                  these issues while still providing an engaging gameplay
                  experience.
                </p>
                <p>
                  Upon release, BloodMoney gained a cult following for its
                  unique approach to the simulation genre. Players praised its
                  willingness to tackle difficult subjects and its clever use of
                  game mechanics to reinforce its themes. The success of
                  BloodMoney led directly to the development of BloodMoney 2:
                  Human Expenditure Program, which expanded on the
                  original&aposs concepts. choice.
                </p>
              </div>
            </div>
          )}

          {/* Community */}
          {activeTab === "community" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                BloodMoney Player Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    BloodMoney changed how I think about life simulation games.
                    It&aposs dark, funny, and surprisingly deep.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Indie Game Fan
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    The original BloodMoney is a masterclass in using game
                    mechanics to tell a story. Every system reinforces the
                    theme.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Game Designer
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Playing BloodMoney is like looking in a dark mirror.
                    Uncomfortable but necessary.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Gaming Blogger
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
                    What is BloodMoney about?
                  </h3>
                  <p className="text-gray-200">
                    BloodMoney is a dark comedy life management simulator where
                    you control a character&aposs daily decisions, balancing
                    survival needs with long-term goals in a satirical take on
                    modern life.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Is BloodMoney free?
                  </h3>
                  <p className="text-gray-200">
                    Yes! You can play the complete BloodMoney experience online
                    for free.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How long does a playthrough take?
                  </h3>
                  <p className="text-gray-200">
                    A typical BloodMoney session lasts 20-40 minutes, though the
                    game encourages multiple playthroughs to see different
                    endings.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How is BloodMoney different from BloodMoney 2?
                  </h3>
                  <p className="text-gray-200">
                    BloodMoney is the original game that introduced the concept.
                    BloodMoney 2 (Human Expenditure Program) expands on these
                    ideas with more complex systems and deeper narrative.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What age group is BloodMoney appropriate for?
                  </h3>
                  <p className="text-gray-200">
                    Due to mature themes and dark humor, BloodMoney is
                    recommended for players 16 and older.
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
