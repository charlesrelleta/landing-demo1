"use client";

import React from "react";

const MainDescription: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="flex justify-center items-center space-x-4 mb-8">
        <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-4 py-2">
          Join us
        </button>
        <span className="bg-gray-200 font-medium text-[#121212] rounded-full px-4 py-2">
          ✨ Come join us at Convention
        </span>
      </div>
      <h1 className="text-[64px] max-w-5xl font-semibold text-gray-900 mb-4">
        A platform for strategic influencer partnerships
      </h1>
      <p className="text-[#212121] font=[18px] font-normal max-w-96 m-auto">
        Harness billions of data points to discover creators and audiences that
        drive campaign results.
      </p>
    </section>
  );
};

export default MainDescription;
