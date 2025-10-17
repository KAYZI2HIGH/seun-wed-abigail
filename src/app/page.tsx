import Navbar from "@/components/custom-ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LoveStorySection from "@/components/sections/LoveStorySection";
import GallerySection from "@/components/sections/GallerySection";
import BibleQuoteSection from "@/components/sections/BibleQuoteSection";
import InviteSection from "@/components/sections/InviteSection";
import RSVPSection from "@/components/sections/RSVPSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InviteSection/>
      <BibleQuoteSection/>
      <LoveStorySection />
      <GallerySection />
      <RSVPSection />
      <Footer/>
    </>
  );
}
