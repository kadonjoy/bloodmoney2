import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section min-h-screen py-16 sm:py-24 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
          About
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="md:w-1/2">
            <img
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2.jpg"
              alt="BloodMoney 2 Game Screenshot"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-white text-lg">
            <h3 className="text-2xl font-bold mb-4">
              BloodMoney 2: Human Expenditure Program
            </h3>
            <p className="mb-4">
              BloodMoney 2 is a darkly satirical life simulation game where you
              control Harvey Harvington in a dystopian corporate world. Make
              tough decisions, balance health, wealth, and happiness, and
              experience branching storylines with multiple endings. Every
              choice matters in this unique blend of resource management and
              social commentary.
            </p>
            <p className="mb-4">
              As the manager of Harvey&apos;s daily life, you&apos;ll face moral
              dilemmas and unexpected events. Will you sacrifice Harvey&apos;s
              well-being for profit, or strive for a better work-life balance?
              The game challenges you to navigate a system where every action
              has a price.
            </p>
            <p className="mb-4">
              Explore a richly detailed cyberpunk city, interact with quirky
              characters, and uncover hidden secrets. BloodMoney 2 offers
              multiple endings, achievements, and hours of replayable content
              for fans of strategy and narrative-driven games.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="md:w-1/2">
            <img
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-2.jpg"
              alt="BloodMoney 2 Gameplay"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-white text-lg">
            <h4 className="text-xl font-bold mb-2">Unique Gameplay</h4>
            <p>
              Manage resources, make strategic choices, and experience the
              consequences of your actions. The Human Expenditure Program system
              ensures that every decision impacts Harvey&apos;s fate and the
              world around him.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="md:w-1/2">
            <img
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-3.jpg"
              alt="BloodMoney 2 Resource Management"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-white text-lg">
            <h4 className="text-xl font-bold mb-2">Resource Management</h4>
            <p>
              Balance health, happiness, and finances while navigating the
              satirical world of BloodMoney 2. Discover new story branches and
              endings as you experiment with different strategies.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="md:w-1/2">
            <img
              src="https://s.clicker-game.com/games/human-expenditure-program-bloodmoney-2/human-expenditure-program-bloodmoney-2-4.jpg"
              alt="BloodMoney 2 Decision Making"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-white text-lg">
            <h4 className="text-xl font-bold mb-2">Every Choice Matters</h4>
            <p>
              BloodMoney 2 delivers a thought-provoking experience with its dark
              humor and sharp social commentary. Will you unlock all the endings
              and discover the true cost of human life in the corporate machine?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
