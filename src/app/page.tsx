"use client";
import Navbar from "@/components/custom-ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LoveStorySection from "@/components/sections/LoveStorySection";
import GallerySection from "@/components/sections/GallerySection";
import BibleQuoteSection from "@/components/sections/BibleQuoteSection";
import InviteSection from "@/components/sections/InviteSection";
import RSVPSection from "@/components/sections/RSVPSection";
import Footer from "@/components/sections/Footer";
import dynamic from "next/dynamic";

// Dynamically import LeafletMapSection with no SSR
const LeafletMapSection = dynamic(
  () => import("@/components/sections/LeafletMapSection"),
  { ssr: false } // This ensures the component only loads on the client side
);

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InviteSection />
      <LeafletMapSection />
      <BibleQuoteSection />
      <LoveStorySection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </>
  );
}
