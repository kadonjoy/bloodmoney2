import React from "react";

export default function MediaSection() {
  return (
    <section
      id="media"
      className="section min-h-screen py-16 sm:py-24 bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 uppercase text-red-600">
          Media
        </h2>
        {/* YouTube Video Introduction */}
        <div className="relative z-10 w-full flex justify-center mt-8">
          <iframe
            src="https://www.youtube.com/embed/_3RnnJkGmIE"
            title="BloodMoney 2 Official Trailer"
            className="w-full max-w-3xl h-[400px] rounded-xl shadow-xl border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
