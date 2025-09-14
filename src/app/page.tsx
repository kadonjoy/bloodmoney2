"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

// 主应用组件，包含了整个网站的结构和内容
const App = () => {
  // 这里可以添加任何需要客户端渲染的逻辑，
  // 但在这个简单的静态网站中，大部分效果都由 CSS 实现。
  useEffect(() => {
    // 例如，你可以在这里添加一个处理滚动效果的监听器
  }, []);

  return (
    <div
      className="bg-gray-900 text-white leading-relaxed tracking-wider overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <Navbar />
      {/* 主视觉区 */}
      <section
        id="hero"
        className="section relative w-full h-screen overflow-hidden flex items-center justify-center text-center"
      >
        {/* 视频背景 */}
        <video autoPlay muted loop className="video-background">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-cyber-city-with-neon-lights-29433-large.mp4"
            type="video/mp4"
          />
          你的浏览器不支持视频标签。
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4 sm:p-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-8 text-shadow">
            未来已来。
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-12 text-shadow">
            在这个失控的赛博朋克世界中，生存是唯一的法则。
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-red-600 rounded-xl text-xl font-bold uppercase tracking-widest hover:bg-red-700 transition duration-300 glow-button"
          >
            立即游玩
          </a>
        </div>
      </section>

      {/* 游戏简介区 */}
      <section
        id="about"
        className="section min-h-screen py-16 sm:py-24 bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
            游戏简介
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://placehold.co/1200x800/2a2a2a/e0e0e0?text=游戏世界+场景"
                alt="游戏场景"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-lg">
              <p className="mb-6">
                在《血色纪元》中，你将踏入一个由巨型企业和地下黑帮主宰的未来都市。权力、金钱和科技交织成一张巨大的网，而你，作为一名无名雇佣兵，将在这片混乱中寻找一线生机。每一次选择都将影响你的命运，并最终决定这座城市的未来。
              </p>
              <p>
                通过定制你的角色、升级你的义体、并利用各种高科技武器，你可以成为城市的救世主，也可以成为一个被欲望吞噬的复仇者。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 游戏特色区 */}
      <section
        id="features"
        className="section min-h-screen py-16 sm:py-24 bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
            核心特色
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 特色卡片 1 */}
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
                高自由度角色定制
              </h3>
              <p className="text-center text-gray-400">
                打造独一无二的角色，从外观到技能树，一切由你掌控。
              </p>
            </div>
            {/* 特色卡片 2 */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-6xl text-red-500 mb-4 text-center">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h3V6a1 1 0 012 0v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                引人入胜的剧情
              </h3>
              <p className="text-center text-gray-400">
                多条分支剧情线，你的每个决定都将影响故事走向和结局。
              </p>
            </div>
            {/* 特色卡片 3 */}
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
                沉浸式开放世界
              </h3>
              <p className="text-center text-gray-400">
                探索一个广阔且充满细节的赛博朋克都市，发现隐藏的秘密。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 媒体中心区 */}
      <section
        id="media"
        className="section min-h-screen py-16 sm:py-24 bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
            媒体中心
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-lg">
              <h3 className="text-3xl font-bold mb-4">观看官方预告片</h3>
              <p className="mb-6">
                体验《血色纪元》令人震撼的视觉效果和紧张刺激的氛围。
              </p>
              <a
                href="#"
                className="inline-block px-8 py-4 bg-red-600 rounded-xl text-lg font-bold uppercase tracking-widest hover:bg-red-700 transition duration-300 glow-button"
              >
                查看更多截图和视频
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 最新动态区 */}
      <section id="news" className="section py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
            最新动态
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 新闻卡片 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                大型更新：全新区域“零区”开放！
              </h3>
              <p className="text-gray-400 text-sm mb-4">发布于 2025年9月14日</p>
              <p className="text-gray-300">
                探索被遗忘的地下城，面对更强大的敌人，获取稀有装备。
              </p>
            </div>
            {/* 新闻卡片 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                补丁 v1.2.3：平衡性调整与 Bug 修复
              </h3>
              <p className="text-gray-400 text-sm mb-4">发布于 2025年9月10日</p>
              <p className="text-gray-300">
                我们听取了社区的反馈，对武器和技能进行了平衡性调整。
              </p>
            </div>
            {/* 新闻卡片 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-red-400 mb-2">
                《血色纪元》正式版预售开启！
              </h3>
              <p className="text-gray-400 text-sm mb-4">发布于 2025年8月30日</p>
              <p className="text-gray-300">
                现在预购即可获得专属游戏内物品和数字艺术设定集。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 底部版权信息 */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400">
        <p>Copyright © 2025 血色纪元. All Rights Reserved.</p>
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
    </div>
  );
};

export default App;
