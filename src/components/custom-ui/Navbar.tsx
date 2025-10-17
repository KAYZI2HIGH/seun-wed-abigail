"use client";
import {
  BookHeart,
  HandHeart,
  Home,
  Image,
  Quote,
  ReceiptText
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 500) {
        // Scrolling down and past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      // Background change logic
      setIsScrolled(currentScrollY > 50);

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "invite", label: "Invite", icon: ReceiptText },
    { id: "quote", label: "Quote", icon: Quote },
    { id: "love", label: "Story", icon: BookHeart },
    { id: "gallery", label: "Gallery", icon: Image },
    { id: "rsvp", label: "RSVP", icon: HandHeart },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-amber-100/30 py-2"
          : "bg-black/40 backdrop-blur-xl py-3"
      }`}
    >
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        {/* Mobile Layout - Circular */}
        {isMobile ? (
          <div className="flex items-center justify-between py-1">
            {/* Left side items */}
            <div className="flex items-center gap-4 flex-1 justify-start">
              {navItems.slice(0, 3).map((item, index) => (
                <NavButton
                  key={item.id}
                  item={item}
                  index={index}
                  isMounted={isMounted}
                  isScrolled={isScrolled}
                  activeNav={activeNav}
                  scrollToSection={scrollToSection}
                  isMobile={isMobile}
                />
              ))}
            </div>

            {/* Center Logo */}
            <div className="relative mx-2">
              <div className="relative">
                <div
                  className="relative cursor-pointer flex items-center justify-center size-12"
                  onClick={() => scrollToSection("home")}
                >
                  <Logo
                    isScrolled={isScrolled}
                    isMobile={isMobile}
                  />
                </div>
              </div>
            </div>

            {/* Right side items */}
            <div className="flex items-center gap-4 flex-1 justify-end">
              {navItems.slice(3).map((item, index) => (
                <NavButton
                  key={item.id}
                  item={item}
                  index={index}
                  isMounted={isMounted}
                  isScrolled={isScrolled}
                  activeNav={activeNav}
                  scrollToSection={scrollToSection}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Layout - Traditional
          <div className="flex items-center justify-between relative">
            {/* Left Navigation Items */}
            <div className="flex items-center gap-8 flex-1 justify-start">
              {navItems.slice(0, 3).map((item, index) => (
                <NavButton
                  key={item.id}
                  item={item}
                  index={index}
                  isMounted={isMounted}
                  isScrolled={isScrolled}
                  activeNav={activeNav}
                  scrollToSection={scrollToSection}
                  isMobile={isMobile}
                />
              ))}
            </div>

            <div
              className={`relative mx-8 transition-all duration-1000 ease-out ${
                isMounted ? "scale-100 opacity-100" : "scale-50 opacity-0"
              } ${isScrolled ? "scale-75 -translate-y-1" : "scale-100"}`}
              style={{ transitionDelay: isMounted ? "300ms" : "0ms" }}
            >
              <div
                className={`relative cursor-pointer transition-all duration-700 flex items-center justify-center ${
                  isScrolled ? "size-[80px]" : "size-[80px]"
                }`}
                onClick={() => scrollToSection("home")}
              >
                <Logo
                  isScrolled={isScrolled}
                  isMobile={isMobile}
                />
                <div
                  className={`absolute inset-0 border-2 rounded-full transition-all duration-1000 ${
                    isScrolled
                      ? "border-amber-200/30"
                      : "border-white/50 scale-110"
                  }`}
                />
              </div>
            </div>

            {/* Right Navigation Items */}
            <div className="flex items-center gap-8 flex-1 justify-end">
              {navItems.slice(3).map((item, index) => (
                <NavButton
                  key={item.id}
                  item={item}
                  index={index}
                  isMounted={isMounted}
                  isScrolled={isScrolled}
                  activeNav={activeNav}
                  scrollToSection={scrollToSection}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Reusable NavButton Component
const NavButton = ({
  item,
  isScrolled,
  activeNav,
  scrollToSection,
  isMobile,
  //eslint-disable-next-line
}: any) => {
  return (
    <button
      onClick={() => scrollToSection(item.id)}
      className={`relative transition-all duration-300 ease-out group ${
        activeNav === item.id
          ? "text-amber-500 scale-110 font-semibold"
          : isScrolled
          ? "text-gray-700 hover:text-amber-500"
          : "text-white hover:text-amber-200"
      } ${
        isMobile
          ? "text-base"
          : "font-sans font-medium tracking-widest text-sm uppercase"
      }`}
    >
      {/* Icon for mobile, text for desktop */}
      {isMobile ? (
        <div
          className={`transition-transform duration-300 group-hover:scale-125 ${
            activeNav === item.id ? "scale-110" : ""
          }`}
        >
          <item.icon size={20} />
        </div>
      ) : (
        <>
          {item.label}
          <span
            className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full transition-all duration-300 ${
              activeNav === item.id
                ? "opacity-100 scale-100"
                : "opacity-0 scale-50"
            }`}
          />
        </>
      )}
    </button>
  );
};

export const Logo = ({
  isScrolled,
  isMobile,
}: {
  isScrolled: boolean;
  isMobile: boolean;
}) => {
  return (
    <div
      className={`font-[family-name:var(--font-play-fair)] transition-colors duration-300 font-bold whitespace-nowrap ${
        isScrolled ? "text-gray-800" : "text-white"
      } ${isMobile ? "text-xl" : "text-2xl tracking-widest"}`}
    >
      A<span className="text-amber-400"> & </span>A
    </div>
  );
};

export default Navbar;
