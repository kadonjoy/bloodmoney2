import React from "react";

export default function FooterSection() {
  return (
    <footer className="bg-gray-800 py-8 text-center text-gray-400">
      <p>Copyright © 2025 BloodMoney2. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-4 text-red-500">
        <a
          href="#"
          className="hover:text-red-300 transition-colors duration-300"
        >
          Twitter
        </a>
        <a
          href="#"
          className="hover:text-red-300 transition-colors duration-300"
        >
          Facebook
        </a>
        <a
          href="#"
          className="hover:text-red-300 transition-colors duration-300"
        >
          Discord
        </a>
      </div>
    </footer>
  );
}
