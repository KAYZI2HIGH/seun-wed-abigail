"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const LoveStorySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants that maintain your exact layout
  const photoTopLeft: Variants = {
    hidden: { opacity: 0, x: -100, y: -50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: isMobile ? 3 : 12,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const photoTopRight: Variants = {
    hidden: { opacity: 0, x: 100, y: -50, rotate: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: isMobile ? -3 : -12,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const photoBottomRight: Variants = {
    hidden: { opacity: 0, x: 100, y: 50, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: isMobile ? 3 : 12,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  };

  const photoBottomLeft: Variants = {
    hidden: { opacity: 0, x: -100, y: 50, rotate: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: isMobile ? -3 : -12,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
    },
  };

  const contentReveal: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
    },
  };

  const flowerFloat: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: { duration: 1, delay: 1, ease: "easeOut" },
    },
  };

  const buttonHover: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div
      id="love"
      className="py-20 md:py-40 z-10 bg-transparent relative max-md:overflow-hidden"
      ref={sectionRef}
    >
      {/* Top Left Photo */}
      <motion.div
        variants={photoTopLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${
          isMobile ?
            "h-[120px] w-[120px] -left-10 top-10"
          : "h-[400px] w-[400px] -left-32 top-0"
        } rotate-3 md:rotate-6 z-10 border border-amber-800 bg-white rounded-sm p-2 pb-4 md:pb-6 absolute`}
      >
        <div className="rounded-sm overflow-hidden relative h-full w-full">
          <Image
            src={"/assets/1.jpg"}
            alt="couple-image"
            className="object-cover object-top"
            fill
          />
        </div>
      </motion.div>

      {/* Top Right Photo */}
      <motion.div
        variants={photoTopRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${
          isMobile ?
            "h-[140px] w-[140px] -right-10 -top-5"
          : "h-[400px] w-[400px] -right-32 -top-10"
        } -rotate-3 md:-rotate-6 z-10 border border-amber-800 bg-white rounded-sm p-2 pb-4 md:pb-6 absolute`}
      >
        <div className="rounded-sm overflow-hidden relative h-full w-full">
          <Image
            src={"/assets/9.jpg"}
            alt="couple-image"
            className="object-cover object-top"
            fill
          />
        </div>
      </motion.div>

      {/* Bottom Right Photo */}
      <motion.div
        variants={photoBottomRight}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${
          isMobile ?
            "h-[130px] w-[130px] -right-8 -bottom-5"
          : "h-[400px] w-[400px] -right-24 -bottom-10"
        } rotate-3 md:rotate-12 z-10 border border-amber-800 bg-white rounded-sm p-2 pb-4 md:pb-6 absolute`}
      >
        <div className="rounded-sm overflow-hidden relative h-full w-full">
          <Image
            src={"/assets/5.jpg"}
            alt="couple-image"
            className="object-cover object-top"
            fill
          />
        </div>
      </motion.div>

      {/* Bottom Left Photo */}
      <motion.div
        variants={photoBottomLeft}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`${
          isMobile ?
            "h-[110px] w-[110px] -left-6 bottom-20"
          : "h-[400px] w-[400px] -left-24 -bottom-0"
        } -rotate-3 md:-rotate-12 z-[200] border border-amber-800 bg-white rounded-sm p-2 pb-4 md:pb-6 absolute`}
      >
        <div className="rounded-sm overflow-hidden relative h-full w-full">
          <Image
            src={"/assets/13.jpg"}
            alt="couple-image"
            className="object-cover object-top"
            fill
          />
        </div>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        variants={contentReveal}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-[90%] md:max-w-[600px] bg-white backdrop-blur-2xl rounded-md py-8 md:py-10 mx-auto relative overflow-hidden"
      >
        {/* Left Flower Decoration */}
        <motion.div
          variants={flowerFloat}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute -left-4 md:-left-10 lg:-left-30 -top-1/4"
        >
          <Image
            src={"/assets/flowers.svg"}
            alt="flower decoration"
            width={isMobile ? 120 : 300}
            height={isMobile ? 120 : 300}
          />
        </motion.div>

        {/* Flower Crown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.6, delay: 1 }}
          className="w-[80px] h-[60px] md:w-[100px] md:h-[70px] lg:w-[140px] lg:h-[100px] relative mx-auto"
        >
          <Image
            src={"/assets/flower-crown.png"}
            alt="flower"
            fill
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-3 md:mb-4 font-[family-name:var(--font-play-fair)] text-lg md:text-xl lg:text-3xl font-bold tracking-wide text-center text-[#4A4A4A] px-4"
        >
          Our Love Story
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-xs md:text-sm tracking-wider text-amber-500 font-semibold text-center uppercase font-[family-name:var(--font-montserrat)] px-4"
        >
          story to tell for the rest of the world
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="max-w-[90%] md:max-w-[500px] mx-auto text-center font-[family-name:var(--font-montserrat)] tracking-wider mt-3 md:mt-4 text-black/60 text-sm md:text-base px-4"
        >
          Met through Adewole&apos;s cousin (Kunle) and blossomed into love over their
          shared passion for faith in God and striving for excellence in life.
        </motion.p>

        {/* Read More Button */}
        <motion.button
          variants={buttonHover}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="w-full block max-w-[140px] md:max-w-[150px] mx-auto py-2 md:py-3 bg-amber-500 cursor-pointer text-white relative mt-3 md:mt-4 text-sm md:text-base"
        >
          Watch Proposal
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LoveStorySection;
