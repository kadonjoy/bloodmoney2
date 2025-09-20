// components/MediaCommonSection.tsx
import React from "react";
import { MediaSectionProps } from "app/utils/typedefine";

export default function MediaCommonSection({
  titleColor = "text-blue-400",
  items,
  sectionId = "media",
  className = "",
  scale = 150,
}: MediaSectionProps) {
  return (
    <section
      id={sectionId}
      className={`section py-16 sm:py-24 bg-gray-900 ${className}`}
      //   className={`section min-h-screen py-16 sm:py-24 bg-gray-900 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase ${titleColor}`}
        >
          Media
        </h2>

        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col items-center max-w-xs mx-auto"
              style={{ transform: `scale(${scale / 100})` }}
            >
              <iframe
                src={item.src}
                title={item.videoTitle}
                className="w-full h-[150px] rounded-lg shadow-lg border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <div className="mt-2 text-center">
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
