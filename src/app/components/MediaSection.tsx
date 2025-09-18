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
        {/* Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col items-center max-w-xs mx-auto scale-150">
            <iframe
              src="https://www.youtube.com/embed/_3RnnJkGmIE"
              title="BloodMoney 2 Official Trailer"
              className="w-full h-[150px] rounded-lg shadow-lg border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="mt-2 text-center">
              <h3 className="text-lg font-bold text-white mb-1">
                Official Trailer
              </h3>
              <p className="text-gray-400 text-xs">
                Watch the official BloodMoney 2 trailer and get a glimpse of the
                Human Expenditure Program.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 rounded-xl shadow-xl p-2 flex flex-col items-center max-w-xs mx-auto scale-150">
            <iframe
              src="https://www.youtube.com/embed/vvO4wHnQG3g?si=WX00WYdjB7mZI2Ur"
              title="BloodMoney 2 Gameplay Walkthrough"
              className="w-full h-[150px] rounded-lg shadow-lg border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            <div className="mt-2 text-center">
              <h3 className="text-lg font-bold text-white mb-1">
                Gameplay Walkthrough
              </h3>
              <p className="text-gray-400 text-xs">
                See BloodMoney 2 in action with a full gameplay walkthrough and
                tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
