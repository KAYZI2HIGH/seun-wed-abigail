"use client";
import Image from "next/image";
import { useState } from "react";

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);

  const imagePaths = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/4.jpg",
    "/assets/5.jpg",
    "/assets/6.jpg",
    "/assets/7.jpg",
    "/assets/8.jpg",
    "/assets/9.jpg",
    "/assets/10.jpg",
    "/assets/11.jpg",
    "/assets/12.jpg",
    "/assets/13.jpg",
    "/assets/14.jpg",
    "/assets/15.jpg",
    "/assets/16.jpg",
    "/assets/17.jpg",
    "/assets/18.jpg",
  ];

  const displayedImages = showAll ? imagePaths : imagePaths.slice(0, 6);

  return (
    <section id="gallery" className="relative z-10 bg-white py-16 md:py-20">
      <div className="text-center">
        <div className="w-[80px] h-[60px] md:w-[100px] md:h-[70px] lg:w-[140px] lg:h-[100px] relative mx-auto">
          <Image
            src={"/assets/flower-crown.png"}
            alt="flower"
            fill
          />
        </div>

        {/* Title */}
        <h2 className="mb-3 md:mb-4 font-[family-name:var(--font-play-fair)] text-lg md:text-xl lg:text-3xl font-bold tracking-wide text-center text-[#4A4A4A] px-4">
          Captured Moments
        </h2>

        {/* Subtitle */}
        <p className="text-xs md:text-sm tracking-wider text-amber-500 font-semibold text-center uppercase font-[family-name:var(--font-montserrat)] px-4">
          our moments together
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5 mt-8 md:mt-10 px-4 md:px-6 lg:px-10 max-w-7xl mx-auto">
        {displayedImages.map((path, index) => (
          <div
            key={index}
            className="relative h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] rounded-sm overflow-hidden group cursor-pointer"
          >
            <Image
              src={path}
              alt="captured-moments"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {!showAll && imagePaths.length > 6 && (
        <div className="text-center mt-8 md:mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-sm cursor-pointer font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Load More Images
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Showing 6 of {imagePaths.length} images
          </p>
        </div>
      )}

      {/* Show Less Button when all images are shown */}
      {showAll && (
        <div className="text-center mt-8 md:mt-10">
          <button
            onClick={() => setShowAll(false)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-sm cursor-pointer font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Show Less
          </button>
          <p className="text-xs text-gray-500 mt-2">
            Showing all {imagePaths.length} images
          </p>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
