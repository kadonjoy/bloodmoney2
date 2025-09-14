import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-red-600 transition duration-300 transform hover:scale-110"
        >
          未来纪元
        </Link>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link
            href="#about"
            className="hover:text-red-500 transition duration-300"
          >
            游戏简介
          </Link>
          <Link
            href="#features"
            className="hover:text-red-500 transition duration-300"
          >
            游戏特色
          </Link>
          <Link
            href="#media"
            className="hover:text-red-500 transition duration-300"
          >
            媒体中心
          </Link>
          <Link
            href="#news"
            className="hover:text-red-500 transition duration-300"
          >
            最新动态
          </Link>
        </div>
        <a
          href="#"
          className="px-4 py-2 bg-red-600 rounded-lg text-lg font-bold hover:bg-red-700 transition duration-300 glow-button"
        >
          立即下载
        </a>
      </div>
    </nav>
  );
}
