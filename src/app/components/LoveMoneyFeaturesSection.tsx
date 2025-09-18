import React, { useState } from "react";

const TABS = [
  { key: "about", label: "About" },
  { key: "features", label: "Features" },
  { key: "howto", label: "How to Play" },
  { key: "history", label: "History" },
  { key: "community", label: "Community" },
  { key: "faq", label: "FAQ" },
];

export default function LoveMoneyFeaturesSection() {
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
                What is LoveMoney?
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
                <div className="flex-1">
                  <img
                    src="https://s.clicker-game.com/games/lovemoney/lovemoney.jpg"
                    alt="LoveMoney - Click Your Way Through Moral Choices | Story-Driven Clicker RPG"
                    className="w-full rounded-2xl shadow-xl"
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200">
                    Welcome to LoveMoney, where desperate times call for
                    desperate measures. This innovative clicker RPG combines
                    fast-paced incremental gameplay with provocative moral
                    choices, creating an unforgettable gaming experience that
                    challenges both your clicking skills and ethical boundaries.
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-300">
                <p>
                  LoveMoney revolutionizes the clicker genre by weaving a
                  compelling narrative into its addictive gameplay mechanics.
                  Starting with just $1 per click, you&apos;ll race against time
                  to earn $25,000 for a critical medical procedure. But in
                  LoveMoney, the journey to financial salvation is paved with
                  moral compromises and unexpected romantic encounters that will
                  test your principles.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="max-w-2xl w-full">
                    <img
                      src="https://s.clicker-game.com/games/lovemoney/lovemoney.jpg"
                      alt="LoveMoney - Story-Driven Clicker RPG"
                      className="w-full rounded-xl shadow-lg"
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Begin your journey in LoveMoney&apos;s unique clicking
                      adventure
                    </p>
                  </div>
                </div>
                <p>
                  What sets LoveMoney apart from traditional clicker games is
                  its deep integration of story elements. Every upgrade you
                  purchase, every click you make, brings you closer to your goal
                  while simultaneously presenting new ethical dilemmas. The game
                  features Harvey, a complex character whose interactions with
                  you shape the narrative. Will you maintain your integrity, or
                  will desperation push you beyond moral boundaries?
                </p>
                <div className="my-8 flex justify-center">
                  <div className="max-w-2xl w-full">
                    <img
                      src="https://s.clicker-game.com/games/lovemoney/lovemoney-2.jpg"
                      alt="LoveMoney Moral Choice System"
                      className="w-full rounded-xl shadow-lg"
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Face difficult decisions that impact your story
                    </p>
                  </div>
                </div>
                <p>
                  The genius of LoveMoney lies in its ability to make players
                  question their choices. As you progress through the
                  game&apos;s pixel art world, purchasing increasingly powerful
                  upgrades to boost your earnings, you&apos;ll encounter
                  situations that force you to decide between quick money and
                  maintaining your humanity. These decisions don&apos;t just
                  affect your score – they fundamentally alter the story&apos;s
                  progression and lead to multiple unique endings.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="max-w-2xl w-full">
                    <img
                      src="https://s.clicker-game.com/games/lovemoney/lovemoney-3.jpg"
                      alt="LoveMoney Upgrade Interface"
                      className="w-full rounded-xl shadow-lg"
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Strategic upgrades enhance your earning potential
                    </p>
                  </div>
                </div>
                <p>
                  Experience LoveMoney online completely free and discover why
                  this innovative title has captivated players worldwide. With
                  its perfect blend of incremental gameplay, narrative depth,
                  and moral complexity, LoveMoney offers a gaming experience
                  that stays with you long after the final click. Whether
                  you&apos;re a fan of clicker games or story-driven adventures,
                  LoveMoney delivers an unforgettable journey.
                </p>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === "features" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                LoveMoney Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-theater-masks"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Narrative-Driven Clicking
                  </h3>
                  <p className="text-gray-300">
                    Experience LoveMoney&apos;s unique blend of incremental
                    gameplay and storytelling. Every click advances both your
                    earnings and the compelling narrative, creating an engaging
                    experience unlike any other clicker game.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Moral Choice System
                  </h3>
                  <p className="text-gray-300">
                    LoveMoney presents provocative decisions that test your
                    ethics. Each choice impacts not just your earnings but also
                    determines which of the multiple endings you&apos;ll unlock
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Strategic Upgrade Path
                  </h3>
                  <p className="text-gray-300">
                    Progress through LoveMoney by purchasing items that multiply
                    your earnings. Plan your upgrade strategy carefully to reach
                    $25,000 before time runs out.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-5xl text-indigo-400 mb-6">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    Multiple Endings
                  </h3>
                  <p className="text-gray-300">
                    Your decisions in LoveMoney shape the story&apos;s outcome.
                    Discover various endings based on your moral choices and the
                    path you take to reach your financial goal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* How to Play */}
          {activeTab === "howto" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                How to Master LoveMoney
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Start Clicking
                  </h3>
                  <p className="text-gray-200">
                    Begin your LoveMoney journey by clicking to earn your first
                    dollars. Each click brings you closer to the $25,000 goal
                    needed for the medical procedure.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Purchase Upgrades Wisely
                  </h3>
                  <p className="text-gray-200">
                    Invest your earnings in LoveMoney&apos;s upgrade system. Buy
                    items that increase your money per click, allowing
                    exponential growth in your earning potential.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Navigate Moral Dilemmas
                  </h3>
                  <p className="text-gray-200">
                    As you progress in LoveMoney, face challenging decisions.
                    Each choice affects your story path and can unlock special
                    earning opportunities or narrative branches.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="text-3xl font-bold mb-6 text-indigo-200">
                    4
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-indigo-100">
                    Discover Your Ending
                  </h3>
                  <p className="text-gray-200">
                    Reach $25,000 to complete LoveMoney, but remember - how you
                    get there matters. Your choices throughout determine which
                    of the multiple endings you&apos;ll experience
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* History */}
          {activeTab === "history" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                The Creation of LoveMoney
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
                <p>
                  LoveMoney was born from developer Buwu&apos;s vision to create
                  a game that transcends traditional genre boundaries. By
                  combining the addictive nature of clicker games with
                  meaningful narrative choices, the team sought to prove that
                  even simple mechanics could deliver profound emotional
                  experiences. The result is a game that challenges players not
                  just mechanically, but ethically.
                </p>
                <p>
                  Development of LoveMoney focused on balancing the urgency of
                  the clicking mechanic with the weight of moral decisions. The
                  team carefully crafted each story branch to ensure that
                  players would feel the impact of their choices, making
                  LoveMoney more than just a race to earn money. The integration
                  of Harvey as a central character adds depth to what could have
                  been a simple incremental game.
                </p>
                <p>
                  Since its release, LoveMoney has garnered attention for its
                  bold approach to game design. Players praise how the game
                  manages to create genuine emotional investment through its
                  combination of simple clicking mechanics and complex moral
                  scenarios. LoveMoney proves that innovation in gaming
                  doesn&apos;t always come from technical complexity, but from
                  creative vision and meaningful player agency.
                </p>
              </div>
            </div>
          )}

          {/* Community */}
          {activeTab === "community" && (
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">
                LoveMoney Player Reviews
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    LoveMoney completely changed my perspective on clicker
                    games. The moral choices made every click feel meaningful
                    and impactful.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - Indie Game Explorer
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    Never thought a clicking game could make me question my
                    ethics. LoveMoney is brilliantly provocative and
                    surprisingly deep.
                  </p>
                  <p className="text-indigo-300 font-semibold">
                    - RPG Enthusiast
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                  <p className="text-gray-200 mb-4">
                    The perfect blend of addictive gameplay and narrative depth.
                    LoveMoney kept me engaged from the first click to the
                    emotional ending.
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
                    What is LoveMoney about?
                  </h3>
                  <p className="text-gray-200">
                    LoveMoney is a narrative-driven clicker RPG where you must
                    earn $25,000 for medical treatment while facing moral
                    dilemmas and romantic encounters that affect your
                    story&apos;s outcome.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    Is LoveMoney free?
                  </h3>
                  <p className="text-gray-200">
                    Yes! You can play the complete LoveMoney experience online
                    for free.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How long does a playthrough take?
                  </h3>
                  <p className="text-gray-200">
                    A typical LoveMoney playthrough takes 20-40 minutes
                    depending on your clicking speed and choices, but multiple
                    endings encourage replay.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    What makes LoveMoney different from other clicker games?
                  </h3>
                  <p className="text-gray-200">
                    LoveMoney uniquely combines incremental clicking mechanics
                    with meaningful story choices, creating an experience where
                    your decisions impact both gameplay and narrative.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl shadow-md transition duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                    How many endings does LoveMoney have?
                  </h3>
                  <p className="text-gray-200">
                    LoveMoney features multiple distinct endings based on your
                    moral choices and how you choose to earn the required
                    $25,000.
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
