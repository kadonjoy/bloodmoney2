import React from "react";

export default function HowToPlaySection() {
  return (
    <section
      id="how-to-play"
      className="section min-h-screen py-16 sm:py-24 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-yellow-400">
          How to Play
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-lg space-y-6">
            <p>
              <span className="font-bold text-yellow-300">BloodMoney 2</span>{" "}
              puts you in control of Harvey Harvington, navigating the
              challenges of the Human Expenditure Program. Your goal is to
              balance Harvey's health, happiness, and finances while making
              impactful decisions in a satirical corporate world.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <span className="font-semibold text-yellow-200">
                  Start the Program:
                </span>{" "}
                Enter the Human Expenditure Program and review Harvey's current
                stats and situation.
              </li>
              <li>
                <span className="font-semibold text-yellow-200">
                  Make Choices:
                </span>{" "}
                Select actions for Harvey—work overtime, rest, spend money, or
                interact with other characters. Each choice affects his physical
                and mental state.
              </li>
              <li>
                <span className="font-semibold text-yellow-200">
                  Monitor Resources:
                </span>{" "}
                Watch Harvey's health, happiness, and money. Poor decisions can
                lead to burnout, debt, or unexpected consequences.
              </li>
              <li>
                <span className="font-semibold text-yellow-200">
                  Explore Storylines:
                </span>{" "}
                Try different strategies to unlock multiple endings and discover
                hidden events. Your decisions shape Harvey's fate.
              </li>
              <li>
                <span className="font-semibold text-yellow-200">
                  Experience Satire:
                </span>{" "}
                Enjoy the dark humor and social commentary as you manage
                Harvey's life in a world where every action has a price.
              </li>
            </ol>
          </div>
          <div className="flex flex-col items-center gap-6">
            <img
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-2.jpg"
              alt="BloodMoney 2 Decision"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <img
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-3.jpg"
              alt="BloodMoney 2 Resource Management"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
