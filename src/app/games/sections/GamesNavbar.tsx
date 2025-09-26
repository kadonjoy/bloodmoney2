import React, { useState } from "react";
import Link from "next/link";

export default function GamesNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 bg-gray-800 bg-opacity-70 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold text-blue-400 transition duration-300 transform hover:scale-110"
        >
          BloodMoney2
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-blue-400 focus:outline-none focus:text-white"
            aria-label="Open mobile menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-lg">
          <Link
            href="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Mobile links */}
      <div
        className={`md:hidden mt-4 transition-all ease-in-out duration-300 ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 text-base text-center">
          <Link
            href="/"
            className="py-2 hover:text-blue-400 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
