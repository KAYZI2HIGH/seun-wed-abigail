"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedText from "../custom-ui/AnimatedText";
import ScrollIndicator from "../custom-ui/ScrollIndicator";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Fixed Background that doesn't move */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/4.jpg"
          alt="hero-background"
          fill
          className="object-cover md:object-[center_-50px] object-[center_40px]"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content that scrolls over the fixed background */}
      <div className="relative z-10 h-full flex items-center justify-center mt-[100px]">
        <div className="font-[family-name:var(--font-play-fair)] text-center max-w-[900px] px-4 !space-y-[8px]">
          {/* Subtitle */}
          <AnimatedText
            as="h5"
            className="text-lg -mb-1 font-[family-name:var(--font-montserrat)] text-white/90"
            delay={200}
            isMounted={isMounted}
          >
            THE WEDDING OF
          </AnimatedText>

          {/* Main Title */}
          <AnimatedText
            as="h1"
            className="text-6xl md:text-6xl lg:text-[80px] font-semibold text-white"
            delay={400}
            isMounted={isMounted}
          >
            ABIGAIL <span className="text-amber-500">&</span> ADEWOLE
          </AnimatedText>

          {/* Date */}
          <AnimatedText
            as="p"
            className="text-xl md:text-2xl text-white/80"
            delay={600}
            isMounted={isMounted}
          >
            (20.12.2025)
          </AnimatedText>

          {/* Decorative elements */}
          <div
            className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-[20px] bg-amber-500/50 transition-all duration-1000 z-[100] ${
              isMounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator
        isMounted={isMounted}
        delay={1000}
      />
    </section>
  );
};

export default HeroSection;
