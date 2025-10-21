"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const InviteSection = () => {
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

  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const photoLeft: Variants = {
    hidden: { opacity: 0, x: -80, rotate: -8 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: -6,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const photoRight: Variants = {
    hidden: { opacity: 0, x: 80, rotate: 8 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 6,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const flowerFloat: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.5,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  const timelineDivider: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="invite"
      ref={sectionRef}
      className="relative z-10 bg-gradient-to-b from-amber-50 to-white py-16 md:py-28 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center"
      >
        {/* Flower Crown */}
        <motion.div
          variants={scaleIn}
          className="w-[100px] h-[70px] md:w-[140px] md:h-[100px] relative mx-auto"
        >
          <Image
            src={"/assets/flower-crown.png"}
            alt="flower"
            fill
          />
        </motion.div>

        {/* Date */}
        <motion.h2
          variants={fadeInUp}
          className="mb-4 font-[family-name:var(--font-play-fair)] text-xl md:text-3xl text-[#4A4A4A] font-semibold"
        >
          Saturday, 20 December 2025
        </motion.h2>

        {/* Invitation Text */}
        <motion.p
          variants={fadeInUp}
          className="text-sm tracking-wider text-[#AD7E1E] text-center uppercase font-[family-name:var(--font-montserrat)]"
        >
          We Invite you to our wedding
        </motion.p>

        {/* Photos Section */}
        <div className="max-w-[800px] h-[300px] md:h-[400px] mx-auto relative mt-12 md:mt-20 flex px-4">
          {/* Top Left Flower */}
          <motion.div
            variants={flowerFloat}
            className="absolute -top-[80px] md:-top-[120px] -left-[80px] md:-left-[120px]"
          >
            <Image
              src={"/assets/flowers.svg"}
              alt="flower"
              height={isMobile ? 200 : 300}
              width={isMobile ? 200 : 300}
              className="opacity-50"
            />
          </motion.div>

          {/* Left Photo */}
          <motion.div
            variants={photoLeft}
            className="h-full w-1/2 -rotate-3 md:-rotate-6 z-10 border border-amber-800 bg-white rounded-sm p-2 pb-4 md:pb-6"
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

          {/* Right Photo */}
          <motion.div
            variants={photoRight}
            className="h-full w-1/2 rotate-3 md:rotate-6 z-10 border border-amber-800 bg-white rounded-sm p-2 pb-4 md:pb-6"
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

          {/* Bottom Right Flower */}
          <motion.div
            variants={flowerFloat}
            className="absolute -bottom-[80px] md:-bottom-[120px] -right-[80px] md:-right-[120px]"
          >
            <Image
              src={"/assets/flowers.svg"}
              alt="flower"
              height={isMobile ? 200 : 300}
              width={isMobile ? 200 : 300}
              className="opacity-50"
            />
          </motion.div>
        </div>

        {/* Details Section */}
        <motion.div
          variants={staggerContainer}
          className="max-w-[600px] mx-auto mt-8 md:mt-10 px-4"
        >
          {/* Names */}
          <motion.h1
            variants={fadeInUp}
            className="text-lg md:text-3xl font-semibold text-[#4A4A4A]/90 tracking-wide font-[family-name:var(--font-play-fair)]"
          >
            ABIGAIL <span className="text-amber-500">&</span> ADEWOLE
          </motion.h1>

          {/* Timeline */}
          <motion.div
            variants={fadeInUp}
            className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-6 text-black mt-6 md:mt-8 font-[font-name: var(--font-montserrat)]"
          >
            {/* Engagement */}
            <div className="space-y-2 text-center">
              <h2 className="text-base md:text-lg ">Engagement</h2>
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                08:00 am
              </h1>
              <h2 className="text-sm md:text-lg tracking-wide max-w-[280px] md:max-w-[300px] text-balance text-amber-500">
                SPICE EVENT CENTRE
              </h2>
              <h2 className="text-sm md:text-lg text-black/60 tracking-wide max-w-[280px] md:max-w-[300px] text-balance">
                Plot 3, 1st Avenue, Ibara Housing Estate, Ibara, Abeokuta.
              </h2>
            </div>

            {/* Divider - Horizontal on mobile, Vertical on desktop */}
            <motion.div
              variants={timelineDivider}
              className="h-[2px] md:h-[120px] w-32 md:w-[2px] bg-amber-800 my-4 md:my-0"
            />

            {/* Church */}
            <div className="space-y-2 text-center">
              <h2 className="text-base md:text-lg ">Church (RCCG)</h2>
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                10:00 am
              </h1>
              <h2 className="text-xs md:text-lg max-w-[280px] md:max-w-[300px] text-balance text-amber-500 uppercase tracking-wide">
                Judah Family Mega Parish
              </h2>
              <h2 className="text-sm md:text-lg text-black/60 tracking-wide max-w-[280px] md:max-w-[300px] text-balance">
                4/5 Mercy Group Clinic Road,, Abeokuta, Ogun Province 1, Ogun
                State.
              </h2>
            </div>
          </motion.div>

          <div className="space-y-2 text-center max-w-[500px] mx-auto mt-5">
            <h2 className="text-base md:text-lg text-black/60v ">
              Reception (After Church)
            </h2>
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-center text-amber-500">
              SPICE EVENT CENTRE
            </h1>
            <h2 className="text-sm md:text-lg text-black/60 tracking-wide max-w-[280px] md:max-w-[300px] text-balance mx-auto">
              Plot 3, 1st Avenue, Ibara Housing Estate, Ibara, Abeokuta.
            </h2>
          </div>

          <p className="tracking-wide mt-4">
            Colour for the day:{" "}
            <span className=" font-semibold">EMERALD GREEN</span> &{" "}
            <span className="text-pink-600 font-semibold">FUSHIA PINK</span>
          </p>

          {/* RSVP Button */}
          <motion.button
            variants={scaleIn}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#d97706", // darker amber
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const rsvpSection = document.getElementById("rsvp");
              if (rsvpSection) {
                const offsetTop = rsvpSection.offsetTop; // Adjust offset as needed
                window.scrollTo({
                  top: offsetTop,
                  behavior: "smooth",
                });
              }
            }}
            className="bg-amber-500 py-3 px-5 mx-auto text-white mt-8 md:mt-10 w-[140px] md:w-[150px] rounded-sm cursor-pointer font-semibold tracking-wide block"
          >
            Book Spot
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InviteSection;
