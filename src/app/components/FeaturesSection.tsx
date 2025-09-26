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

export default function FeaturesSection() {
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
                What is BloodMoney 2?
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="flex-1">
                  <Image
                    src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg"
                    alt="BloodMoney 2 - Human Expenditure Program"
                    className="w-full rounded-2xl shadow-xl"
                    width={800}
                    height={600}
                    priority={false} // true if you want to prioritize loading
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200">
                    BloodMoney 2 is a satirical life management game where you
                    guide Harvey Harvington through the Human Expenditure
                    Program. Make tough choices, balance resources, and
                    experience a unique blend of dark humor and strategic
                    gameplay.
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-300">
                <p>
                  Take control of Harvey&apos;s daily life, facing dilemmas that
                  challenge your morals and priorities. Every action has a
                  price, and your decisions shape the outcome of his journey.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-2.jpg"
                      alt="BloodMoney 2 Gameplay"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Guide Harvey through unexpected events and moral choices
                    </p>
                  </div>
                </div>
                <p>
                  The Human Expenditure Program system goes beyond simple
                  resource management. Will you push Harvey for profit or
                  protect his well-being? Multiple endings await based on your
                  strategy.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-3.jpg"
                      alt="Resource Management"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Balance health, money, and happiness in a satirical world
                    </p>
                  </div>
                </div>
                <p>
                  BloodMoney 2 stands out for its sharp critique of corporate
                  culture and capitalism. Experience a world where every human
                  action is monetized, and your choices have real consequences.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-4.jpg"
                      alt="Decision Making"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Every decision leads to new outcomes and endings
                    </p>
                  </div>
                </div>
                <p>
                  Play BloodMoney 2 online for free and explore branching
                  storylines, achievements, and thought-provoking scenarios.
                  Perfect for fans of management games and dark comedy.
                </p>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "features" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                BloodMoney 2 Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-theater-masks"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Human Expenditure Program
                  </h3>
                  <p className="text-gray-300">
                    Manage every aspect of Harvey&apos;s life, from daily
                    routines to major decisions, in a world where every choice
                    matters.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Branching Storylines
                  </h3>
                  <p className="text-gray-300">
                    Discover multiple paths and endings. Your decisions unlock
                    new scenarios and moral dilemmas.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Resource Management
                  </h3>
                  <p className="text-gray-300">
                    Balance health, wealth, and happiness. Optimize
                    Harvey&apos;s life while facing unexpected events.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Dark Comedy & Satire
                  </h3>
                  <p className="text-gray-300">
                    Enjoy witty writing and social commentary that lampoons
                    modern corporate life.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Play */}
          {activeTab === "howto" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                How to Master BloodMoney 2
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Learn the Dashboard
                  </h3>
                  <p className="text-gray-200">
                    Start by exploring the Human Expenditure Program interface.
                    Track Harvey&apos;s stats and available actions.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Make Smart Choices
                  </h3>
                  <p className="text-gray-200">
                    Analyze each decision. Consider both short-term and
                    long-term effects on Harvey&apos;s life.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Balance Resources
                  </h3>
                  <p className="text-gray-200">
                    Manage health, money, and happiness. Success depends on
                    keeping all resources in check.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Unlock Endings
                  </h3>
                  <p className="text-gray-200">
                    Try different strategies to discover all possible outcomes
                    for Harvey in BloodMoney 2.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                The Creation of BloodMoney 2
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                <p>
                  BloodMoney 2 was developed by Shroomy Christ Studios to
                  challenge conventional ideas about work and value. The Human
                  Expenditure Program concept draws inspiration from real-world
                  corporate environments.
                </p>
                <p>
                  The team focused on meaningful choices and impactful
                  scenarios, encouraging players to reflect on work-life
                  balance, healthcare, and happiness versus financial gain.
                </p>
                <p>
                  Since launch, BloodMoney 2 has attracted players who
                  appreciate games with depth. Its blend of dark humor,
                  strategy, and social critique has earned praise for both
                  entertainment and insight.
                </p>
              </div>
            </div>
          )}

          {/* Community */}
          {activeTab === "community" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                Player Testimonials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    BloodMoney 2 is both hilarious and unsettling. The Human
                    Expenditure Program made me rethink my own choices.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Indie Game Fan
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    No other game has made me feel so conflicted. BloodMoney 2
                    is a masterclass in dark comedy and meaningful gameplay.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Strategy Gamer
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    BloodMoney 2 is a must-play for anyone who loves satire. The
                    Human Expenditure Program is both funny and
                    thought-provoking.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Gaming Reviewer
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
                    What is BloodMoney 2?
                  </h3>
                  <p className="text-gray-200">
                    BloodMoney 2 is a satirical life simulation game where you
                    manage Harvey Harvington&apos;s journey through the Human
                    Expenditure Program.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Is BloodMoney 2 free?
                  </h3>
                  <p className="text-gray-200">
                    Yes! You can play the full Human Expenditure Program online
                    for free.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How long does a playthrough take?
                  </h3>
                  <p className="text-gray-200">
                    A typical run lasts 30-60 minutes, but multiple endings
                    encourage replay.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Who should play BloodMoney 2?
                  </h3>
                  <p className="text-gray-200">
                    Due to mature themes, BloodMoney 2 is recommended for
                    players 16+.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Can I save my progress?
                  </h3>
                  <p className="text-gray-200">
                    Yes, the game features automatic checkpoints so you can
                    explore different paths.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What makes BloodMoney 2 unique?
                  </h3>
                  <p className="text-gray-200">
                    BloodMoney 2 combines resource management with sharp satire
                    and meaningful choices.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How many endings are there?
                  </h3>
                  <p className="text-gray-200">
                    There are 7 distinct endings, each reflecting your approach
                    to managing Harvey&apos;s life.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Who created BloodMoney 2?
                  </h3>
                  <p className="text-gray-200">
                    BloodMoney 2 was developed by Shroomy Christ Studios as a
                    satirical take on modern capitalism.
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
