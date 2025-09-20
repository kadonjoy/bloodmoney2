"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 bg-gray-800 bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-blue-400 transition duration-300 transform hover:scale-110"
        >
          BloodMoney2
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg items-center">
          <Link
            href="/games"
            className="hover:text-blue-400 transition duration-300"
          >
            Games
          </Link>
          {/* <Link
            href="#features"
            className="hover:text-blue-400 transition duration-300"
          >
            Features
          </Link> */}
          <Link
            href="#media"
            className="hover:text-blue-400 transition duration-300"
          >
            Media
          </Link>
          <Link
            href="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full-screen Overlay) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center space-y-8 text-2xl text-white">
          <Link
            href="/games"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Games
          </Link>
          {/* <Link
            href="#features"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link> */}
          <Link
            href="#media"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Media
          </Link>
          <Link
            href="/"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
