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
                  <Image
                    src="https://s.clicker-game.com/games/lovemoney/lovemoney.jpg"
                    alt="LoveMoney - Click Your Way Through Moral Choices | Story-Driven Clicker RPG"
                    className="w-full rounded-2xl shadow-xl"
                    width={328}
                    height={182}
                    priority={false} // true if you want to prioritize loading
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-lg leading-relaxed text-gray-200">
                    Welcome to LoveMoney, where desperate times call for
                    desperate measures. This innovative clicker RPG merges
                    fast-paced incremental gameplay with morally challenging
                    decisions, delivering a captivating experience that tests
                    both your reflexes and your conscience.
                  </p>
                </div>
              </div>
              <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-gray-300">
                <p>
                  LoveMoney redefines the clicker game experience by blending a
                  gripping storyline with its engaging tap-based mechanics.
                  Beginning at a rate of $1 per click, you must urgently
                  accumulate $25,000 to fund an essential medical treatment.
                  Along this race against time, LoveMoney challenges your ethics
                  through moral dilemmas and surprising romantic connections,
                  forcing you to question what you’re willing to sacrifice for
                  love and money.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/lovemoney/lovemoney.jpg"
                      alt="LoveMoney - Click Your Way Through Moral Choices | Story-Driven Clicker RPG"
                      className="w-full rounded-2xl shadow-xl"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Begin your journey in LoveMoney&apos;s unique clicking
                      adventure
                    </p>
                  </div>
                </div>
                <p>
                  What truly sets LoveMoney apart from traditional clicker games
                  is its deep narrative integration. Each click you make and
                  every upgrade you purchase not only brings you closer to your
                  financial goal but also unveils new ethical challenges.
                  Central to the story is Harvey—a complex character whose
                  relationship with you dynamically influences the unfolding
                  plot. Will you hold onto your principles, or will the pressure
                  of desperation lead you to cross moral lines?
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/lovemoney/lovemoney-2.jpg"
                      alt="LoveMoney Moral Choice System"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Face difficult decisions that impact your story
                    </p>
                  </div>
                </div>
                <p>
                  The brilliance of LoveMoney lies in how it constantly
                  challenges players to reflect on their decisions. As you
                  advance through its richly designed pixel-art world and
                  acquire more powerful upgrades to accelerate your earnings,
                  you will face moments that pit financial gain against your own
                  humanity. These choices do more than influence your final
                  score—they reshape the entire narrative and unlock multiple
                  distinct endings.
                </p>
                <div className="my-8 flex justify-center">
                  <div className="my-8 flex flex-col items-center">
                    <Image
                      src="https://s.clicker-game.com/games/lovemoney/lovemoney-3.jpg"
                      alt="LoveMoney Upgrade Interface"
                      className="w-full rounded-xl shadow-lg"
                      width={800}
                      height={600}
                      priority={false} // true if you want to prioritize loading
                    />
                    <p className="text-center mt-3 text-sm text-gray-400 italic">
                      Strategic upgrades enhance your earning potential
                    </p>
                  </div>
                </div>
                <p>
                  Experience LoveMoney online for free and discover why this
                  groundbreaking title has captivated players globally.
                  Seamlessly blending incremental gameplay, rich storytelling,
                  and profound moral choices, LoveMoney offers an experience
                  that lingers long after you&apos;ve finished playing. Whether
                  you&apos;re a fan of clicker games or narrative-driven
                  adventures, it promises a journey you won&t soon forget.
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
                  LoveMoney emerged from developer Buwu&apos;s ambition to
                  create a game that goes beyond traditional genre limits. By
                  merging the addictive mechanics of clicker games with
                  impactful narrative decisions, the team aimed to demonstrate
                  that even straightforward gameplay can evoke deep emotional
                  engagement. The outcome is a title that challenges players not
                  only in skill—but in conscience.
                </p>
                <p>
                  During development, LoveMoney prioritized balancing the
                  urgency of its clicking mechanics with the gravity of its
                  moral decisions. The team meticulously designed each story
                  branch to ensure every choice carries tangible emotional
                  weight, elevating the experience beyond a mere race for cash.
                  By weaving in Harvey as a central character, the game adds
                  narrative depth that transforms what could have been a
                  straightforward incremental game into a rich, choice-driven
                  journey.
                </p>
                <p>
                  Since its launch, LoveMoney has drawn widespread acclaim for
                  its bold and inventive design approach. Players consistently
                  highlight its ability to forge deep emotional engagement
                  through a blend of intuitive clicking mechanics and morally
                  nuanced scenarios. LoveMoney stands as proof that true
                  innovation in games stems not from technical complexity
                  alone—but from imaginative vision and meaningful player
                  choice.
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
