import { json } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

// Action to handle form submission
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // TODO: Integrate email service or store message
  console.log({ name, email, message });

  return json({ success: true });
};

export default function ContactPage() {
  const actionData = useActionData<{ success?: boolean }>();

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
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 py-8 md:py-12 flex-1 flex flex-col items-center">
        <div className="w-full max-w-lg">
          <h1 className="text-3xl font-extrabold text-center mb-6">
            Contact Us
          </h1>
          {actionData?.success && (
            <p className="text-green-400 text-center mb-4">
              Thank you! Your message has been sent.
            </p>
          )}
          <Form method="post" className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-zinc-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-zinc-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-zinc-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-md"
              >
                Send Message
              </button>
            </div>
          </Form>
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
