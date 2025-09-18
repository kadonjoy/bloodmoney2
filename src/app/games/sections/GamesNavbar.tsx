import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 bg-gray-800 bg-opacity-70">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-red-600 transition duration-300 transform hover:scale-110"
        >
          BloodMoney2
        </Link>
        <div className="hidden md:flex space-x-8 text-lg">
          {/* <Link
            href="/games"
            className="hover:text-red-500 transition duration-300"
          >
            Games
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
