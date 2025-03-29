import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="border-b border-gray-100 py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-8">
            <Image
              src="https://hey.xyz/logo.png"
              alt="Hey Mascot"
              width={120}
              height={120}
              className="h-30 w-30"
            />
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">
                Welcome to Hey,
              </h1>
              <p className="text-xl text-gray-500 md:text-2xl">
                a social network built
                <br />
                on Lens Protocol
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
