import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Text Content */}
      <div className="flex-1 px-6 md:pl-20 space-y-6 text-center md:text-left">
        <p className="text-orange-500 text-lg font-semibold">
          It&apos;s Quick & Amusing!
        </p>
        <h1 className="text-3xl md:text-5xl font-bold">
          The Art of <span className="text-orange-500">Speed</span> Food Quality
        </h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
        <Link href="/shop">
          <button className="mt-4 px-6 py-3 bg-orange-500 text-black rounded-lg font-medium hover:bg-yellow-500 transition">
            See Menu
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative flex justify-center items-center mt-8 md:my-0 ">
        <div className="relative z-10 w-3/4 md:w-full">
          <Image
            src="/hero.png"
            width={500}
            height={500}
            alt="Dish"
            className="rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;