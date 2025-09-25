// components/MediaCommonSection.tsx
import React from "react";
import { MediaSectionProps } from "app/utils/typedefine";

export default function MediaCommonSection({
  titleColor = "text-blue-400",
  items,
  sectionId = "media",
  className = "",
}: MediaSectionProps) {
  return (
    <section
      id={sectionId}
      className={`section py-16 sm:py-24 bg-gray-900 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase ${titleColor}`}
        >
          Media
        </h2>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col items-center transition-transform transform hover:scale-105"
            >
              {/* iframe with responsive 16:9 aspect ratio */}
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={item.src}
                  title={item.videoTitle}
                  className="absolute inset-0 w-full h-full rounded-t-xl border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {item.videoTitle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
