import React from "react";

export default function NewsSection() {
  return (
    <section id="news" className="section py-16 sm:py-24 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
          News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-400 mb-2">
              Major Update: New Area &apos;Zero Zone&apos; Unlocked!
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Published on Sep 14, 2025
            </p>
            <p className="text-gray-300">
              Explore the forgotten underground, face stronger enemies, and
              obtain rare equipment.
            </p>
          </div>
          {/* News Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-400 mb-2">
              Patch v1.2.3: Balance Adjustments & Bug Fixes
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Published on Sep 10, 2025
            </p>
            <p className="text-gray-300">
              We listened to community feedback and made balance adjustments to
              weapons and skills.
            </p>
          </div>
          {/* News Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-red-400 mb-2">
              BloodMoney 2 Official Release Pre-sale Starts!
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Published on Aug 30, 2025
            </p>
            <p className="text-gray-300">
              Pre-order now to receive exclusive in-game items and a digital
              artbook.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
