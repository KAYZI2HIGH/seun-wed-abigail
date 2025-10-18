// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-16 pb-8 px-4 relative bg-[#DED9CF] font-[family-name:var(--font-montserrat)]">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h1 className="text-6xl md:text-6xl lg:text-[80px] font-semibold text-black font-[family-name:var(--font-play-fair)]">
              ABIGAIL <span className="text-amber-500">&</span> ADEWOLE
            </h1>
            <p className="text-black/70 mt-2 leading-relaxed mb-6 max-w-md">
              Celebrating our love and journey together on December 20, 2025.
              Thank you for being part of our special day.
            </p>
            <p className="text-xs md:text-sm tracking-wider text-amber-500 font-semibold uppercase">
              #AdewoleLovesAbigail
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black text-lg font-semibold mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#story"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                >
                  Love Story
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#rsvp"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                >
                  RSVP
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="text-black text-lg font-semibold mb-4">
              BUILT WITH LOVE
            </h4>
            <p className="text-black/60 text-sm mb-2">Website crafted by:</p>
            <p className="text-amber-500 font-bold mb-4 capitalize tracking-wide">
              Kayode Dada
            </p>
            <div className="mb-3">
              <a
                href="tel:+2348113791196"
                className="text-black/60 hover:text-amber-500 transition-colors text-sm"
              >
                📞 +234 811 379 1196
              </a>
            </div>
          </div>
        </div>

        {/* Developer Social Links */}
        <div className="border-t border-b border-gray-700 py-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Social Media */}
            <div>
              <h5 className="text-black font-semibold tracking-wider mb-3">
                FOLLOW THE DEVELOPER
              </h5>
              <div className="flex gap-6">
                <a
                  href="https://github.com/KAYZI2HIGH"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kayode-dada-976055361/"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/KayziGucci"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/kayzi_2high/"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Portfolio & Projects */}
            <div>
              <h5 className="text-black font-semibold tracking-wider mb-3">
                MORE PROJECTS
              </h5>
              <div className="flex gap-6">
                <a
                  href="https://kayziv3.vercel.app/"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
                <a
                  href="https://kayziv3.vercel.app/blogs"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
                <a
                  href="https://kayziv3.vercel.app/projects"
                  className="text-black/60 hover:text-amber-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-black/60 text-sm">
          {/* Copyright */}
          <div>
            © {currentYear} Adewole & Abigail Wedding. All rights reserved.
          </div>

          {/* Built With Info */}
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-amber-500">❤️</span>
            <span>by</span>
            <a
              href="https://yourportfolio.com"
              className="text-amber-500 hover:text-orange-400 font-semibold transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kayode Dada
            </a>
          </div>

          {/* Technology Stack */}
          <div className="flex gap-3">
            <span className="bg-amber-100/60 px-2 py-1 rounded text-xs">
              Next.js
            </span>
            <span className="bg-amber-100/60 px-2 py-1 rounded text-xs">
              TypeScript
            </span>
            <span className="bg-amber-100/60 px-2 py-1 rounded text-xs">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
