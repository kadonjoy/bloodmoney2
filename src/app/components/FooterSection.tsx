import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FooterSection() {
  // share buttons
  const handleShare = (platform: "twitter" | "facebook") => {
    const url = encodeURIComponent("https://bloodmoney2.org/");
    const text = encodeURIComponent(
      "Play BloodMoney 2 - Human Expenditure Program online!"
    );
    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        "_blank"
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        "_blank"
      );
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Adventure Games */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <i className="fas fa-gamepad mr-2 text-indigo-400"></i>
              Adventure Games
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://bloodmoney2.org/"
                  target="_blank"
                  title="BloodMoney 2 - Human Expenditure Program"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-play text-xs mr-2"></i>
                  BloodMoney 2
                </a>
              </li>
            </ul>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <i className="fas fa-link mr-2 text-indigo-400"></i>
              Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://bloodmoney2.org/"
                  target="_blank"
                  title="BloodMoney 2 Games"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 flex items-center"
                >
                  <i className="fas fa-home text-xs mr-2"></i>
                  BloodMoney 2 Games
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  title="BloodMoney 2 Github"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 flex items-center"
                >
                  <i className="fab fa-github text-xs mr-2"></i>
                  BloodMoney 2 Github
                </a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <i className="fas fa-shield-alt mr-2 text-indigo-400"></i>
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacypolicy"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 flex items-center"
                  target="_blank"
                >
                  <i className="fas fa-shield-alt text-xs mr-2"></i>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 flex items-center"
                  target="_blank"
                >
                  <i className="fas fa-file-contract text-xs mr-2"></i>
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          {/* Share */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <i className="fas fa-share-alt mr-2 text-indigo-400"></i>
              Share
            </h3>
            <div className="flex space-x-4">
              <button
                className="flex items-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold transition"
                onClick={() => handleShare("twitter")}
                title="Share on Twitter"
              >
                <i className="fab fa-twitter mr-2"></i>Twitter
              </button>
              <button
                className="flex items-center px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-bold transition"
                onClick={() => handleShare("facebook")}
                title="Share on Facebook"
              >
                <i className="fab fa-facebook mr-2"></i>Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2025 bloodmoney2.org. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
