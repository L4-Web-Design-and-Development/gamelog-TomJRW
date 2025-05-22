import { Link } from "@remix-run/react";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

export default function AboutPage() {
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
      <main className="flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16 flex-1">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="text-white">About </span>
            <span className="text-cyan-400">Game Log</span>
          </h1>
          <div className="mt-2 h-1 w-20 md:w-28 bg-gradient-to-r from-cyan-400/70 to-transparent mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 text-sm md:text-base max-w-xl mx-auto">
            Your personal companion for logging, rating, and tracking the games
            you play — whether it’s solo story-driven epics or chaotic
            multiplayer sessions.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
              What is Game Log?
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-6">
              <strong className="text-white">Game Log</strong> is a sleek,
              minimal app made for gamers to log, track, and rate games across
              all platforms. Whether you play solo or with friends, it keeps
              things clean and organised.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
              Tech Stack
            </h2>
            <ul className="list-disc list-inside text-zinc-300 text-sm md:text-base space-y-1">
              <li>
                <strong className="text-white">Remix</strong>: Full-stack React
                framework
              </li>
              <li>
                <strong className="text-white">Tailwind CSS</strong>:
                Utility-first styling
              </li>
              <li>
                <strong className="text-white">Prisma</strong>: Type-safe DB
                with SQLite
              </li>
            </ul>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
              Design Philosophy
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-6">
              Clean, responsive, and distraction-free. Game Log works on all
              screen sizes and prioritises usability.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
              Storage & Features
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-6">
              Data is stored in a local SQLite DB. Features like syncing,
              filters, sorting, and tags are planned.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2">
              Vision
            </h2>
            <p className="text-zinc-300 text-sm md:text-base leading-6">
              Game Log is evolving into a full-featured companion app — with
              multiplayer logging, recommendations, and social features in the
              works.
            </p>
          </div>
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
