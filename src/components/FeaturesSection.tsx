import React from "react";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section min-h-screen py-16 sm:py-24 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-6xl text-red-500 mb-4 text-center">
              {/* ...existing code... */}
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">
              Deep Character Customization
            </h3>
            <p className="text-center text-gray-400">
              Create a unique character, from appearance to skill
              tree—everything is under your control.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-6xl text-red-500 mb-4 text-center">
              {/* ...existing code... */}
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">
              Engaging Storylines
            </h3>
            <p className="text-center text-gray-400">
              Multiple branching storylines—every decision you make influences
              the plot and ending.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="text-6xl text-red-500 mb-4 text-center">
              <svg
                className="w-16 h-16 mx-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h3V6a1 1 0 012 0v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 01-1-1z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">
              Immersive Open World
            </h3>
            <p className="text-center text-gray-400">
              Explore a vast and detailed cyberpunk city, uncovering hidden
              secrets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
