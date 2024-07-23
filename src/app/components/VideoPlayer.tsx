"use client";

import React, { useRef } from "react";

import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
      <button className="bg-[#121212] text-white py-[12px] px-[24px] z-10">
        Book a demo
      </button>
      <div className="relative mx-auto bg-white z-10 h-[565px] m-28 sm:p4 sm:-m28">
        <video
          style={{ width: "100%", height: "565px" }}
          ref={videoRef}
          className="rounded-lg shadow-lg w-full"
          src="#"
          controls={false}
        />
        <div className="absolute inset-0 flex items-center justify-center h-full w-full">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <button
              onClick={handlePlay}
              className="relative flex items-center justify-center w-[84px] h-[84px] bg-[#E0E0E0] rounded-full focus:outline-none"
            >
              <div
                className="absolute flex items-center justify-center w-full h-full rounded-full animate-ping-slow bg-[#97BEF94D] opacity-75"
                style={{ animationDelay: "0.75s" }}
              ></div>
              <div className="absolute flex items-center justify-center w-full h-full rounded-full animate-ping-slow bg-[#97BEF94D] opacity-100"></div>
              <svg
                className="h-9 w-8 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <GridPattern className={cn("h-[100%] w-[100%] ")} />
    </div>
  );
};

export default VideoPlayer;
