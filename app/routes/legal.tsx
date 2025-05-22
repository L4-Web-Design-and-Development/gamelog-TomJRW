import { Link } from "@remix-run/react";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

export default function LegalPage() {
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
          <Link to="/legal" className="hover:text-white">
            Legal
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-8 md:py-12 flex-1 max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">
          Legal
        </h1>
        <section>
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Terms of Service
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            Welcome to Game Log. By accessing or using our service, you agree to
            be bound by these terms. You may not use our service if you do not
            agree to all of the terms.
          </p>
          <ul className="list-disc list-inside text-zinc-300 text-sm md:text-base space-y-1 mt-2">
            <li>You are responsible for any content you submit.</li>
            <li>
              We reserve the right to modify or terminate the service for any
              reason.
            </li>
            <li>
              We are not liable for any loss or damage arising from use of the
              service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Privacy Policy
          </h2>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            We take your privacy seriously. This section describes how we
            collect, use, and protect your personal information.
          </p>
          <ul className="list-disc list-inside text-zinc-300 text-sm md:text-base space-y-1 mt-2">
            <li>
              We do not share your personal data with third parties without
              consent.
            </li>
            <li>
              Data is stored securely in a SQLite database on our servers.
            </li>
            <li>
              You can request deletion of your data at any time by contacting
              support.
            </li>
          </ul>
        </section>
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
