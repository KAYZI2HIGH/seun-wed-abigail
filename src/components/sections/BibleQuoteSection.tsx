"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

const BibleQuoteSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  // Animation variants
  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeInUpDelayed: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: 0.6,
      },
    },
  };

  const textReveal: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.4,
      },
    },
  };

  const floatingParticles: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const particle: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0.6,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <motion.div
      id="quote"
      ref={sectionRef}
      className="py-20 w-full z-10 relative bg-[#FBFAF8] overflow-hidden"
    >
      {/* Background Floating Particles */}
      <motion.div
        variants={floatingParticles}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            variants={particle}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10">
        {/* Flower Crown */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-[100px] h-[70px] md:w-[140px] md:h-[100px] relative mx-auto"
        >
          <Image
            src={"/assets/flower-crown.png"}
            alt="flower"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Bible Quote */}
        <motion.p
          variants={textReveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-[750px] mx-auto text-2xl tracking-wide font-bold font-[family-name:var(--font-play-fair)] max-md:text-balance text-center text-[#4A4A4A] -mt-2 px-4 md:px-6 leading-relaxed"
        >
          &quot;So they are no longer two, but one flesh. Therefore, what God has
          joined together, no human being must separate.&quot;
        </motion.p>

        {/* Bible Verse Reference */}
        <motion.p
          variants={fadeInUpDelayed}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-sm tracking-wider text-[#AD7E1E] text-center uppercase font-[family-name:var(--font-montserrat)] mt-3 font-semibold"
        >
          -Matthew 19:6
        </motion.p>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 1, delay: 1 }}
          className="absolute left-10 md:left-20 top-1/4"
        >
          <Image
            src={"/assets/flowers.svg"}
            alt="flower decoration"
            width={80}
            height={80}
            className="opacity-30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute right-10 md:right-20 bottom-1/4"
        >
          <Image
            src={"/assets/flowers.svg"}
            alt="flower decoration"
            width={80}
            height={80}
            className="opacity-30 rotate-180"
          />
        </motion.div>
      </div>

      {/* Subtle Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/20 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export default BibleQuoteSection;
