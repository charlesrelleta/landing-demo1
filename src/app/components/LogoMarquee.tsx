"use client";

import Marquee from "@/components/magicui/marquee";
import Image from "next/image";
import React from "react";

const LogoMarquee: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex justify-center items-center">
          {Array.from({ length: 6 }, (_, index) => (
            <Image
              key={index}
              src={`/assets/logos/Logos-${index + 1}.png`}
              alt={`Logos-${index + 1}`}
              width={200}
              height={56}
              className="h-[56px] w-[200px] mx-3"
            />
          ))}
        </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </section>
  );
};

export default LogoMarquee;
