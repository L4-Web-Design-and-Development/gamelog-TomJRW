import { Link } from "@remix-run/react";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

// Sample posts data
const posts = [
  {
    icon: "🛠️",
    title: "Responsive Layout & Cloudinary Integration",
    content: [
      "Updated header and footer across all pages to be fully mobile-responsive, with flex-direction changes and padding adjustments.",
      "Integrated Cloudinary for image uploads in the Add Game form using a custom API route.",
      [
        "ImageUploader component now handles file selection, preview, and upload via useFetcher.",
        "Games page and About page display images from Cloudinary or placeholders.",
        "Prisma schema updated to include imageUrl and migrations applied.",
      ],
    ],
    date: "17 May 2025",
  },
  {
    icon: "🚀",
    title: "Initial Launch — Version 1.0",
    content: [
      "Game Log officially launches! Core features are now available, including:",
      [
        "Game tracking form with title, price, rating, and category",
        "Clean, dark-themed UI with full Tailwind support",
        "Games page to view all entries from the database",
      ],
    ],
    date: "04 April 2025",
  },
  {
    icon: "🔧",
    title: "Backend Setup with Prisma + SQLite",
    content: [
      "The backend uses a local SQLite database managed with Prisma. Prisma seed data includes a list of example games for testing.",
    ],
    date: "03 April 2025",
  },
  {
    icon: "🎨",
    title: "UI Polish and Theming",
    content: [
      "The site now uses a unified dark-slate/tech blue palette with support for responsive layouts, consistent padding, and hover effects.",
      [
        "Games page restructured into a responsive grid",
        "Typography and spacing improved on About page",
        "Icons added for social links",
      ],
    ],
    date: "02 April 2025",
  },
  {
    icon: "🧱",
    title: "Layout Component Introduced",
    content: [
      "Header and footer are now wrapped in a shared layout component. All pages automatically inherit the brand styling and navigation.",
    ],
    date: "01 April 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-32 py-6 md:py-12">
        <div className="text-2xl font-bold tracking-wide mb-4 md:mb-0">
          <span className="text-cyan-400">GAME</span> LOG
        </div>
        <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-zinc-300 text-sm">
          <Link to="/games" className="hover:text-white">
            Games
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-8 md:py-12 flex-1">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-white">Game Log </span>
            <span className="text-cyan-400">Updates & Dev Blog</span>
          </h1>
          <div className="mt-2 h-1 w-20 md:w-28 bg-gradient-to-r from-cyan-400/70 to-transparent mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Dev updates, patch notes, and progress logs from the Game Log
            project. Stay up-to-date with everything new.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-cyan-400 transition duration-200"
            >
              <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
                {post.icon} {post.title}
              </h2>
              {post.content.map((block, j) =>
                Array.isArray(block) ? (
                  <ul
                    key={j}
                    className="list-disc list-inside text-zinc-300 text-sm md:text-base mt-2 space-y-1"
                  >
                    {block.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p
                    key={j}
                    className="text-zinc-300 text-sm md:text-base leading-6"
                  >
                    {block}
                  </p>
                )
              )}
              <p className="text-zinc-500 text-xs md:text-sm mt-4">
                Posted: {post.date}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-4 md:px-32 py-6 md:py-12 text-zinc-400 text-sm md:text-base border-t border-slate-700 space-y-4 md:space-y-0">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <span className="font-bold text-cyan-400">GAME LOG</span>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://x.com"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="X" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <h4 className="font-semibold mb-1 text-white">Site</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/games" className="hover:text-white">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="/legal" className="hover:text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-white">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
