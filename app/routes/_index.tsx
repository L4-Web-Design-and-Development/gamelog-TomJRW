import { PrismaClient } from "@prisma/client";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const prisma = new PrismaClient();

  const games = await prisma.game.findMany();

  return json({ games });
}

export default function Index() {
  const { games } = useLoaderData<typeof loader>();

  console.log({ games });

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-between">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-cyan-400">GAME</span> LOG
        </div>
        <nav className="space-x-6 text-zinc-300 text-sm">
          <button className="hover:text-white bg-transparent border-none cursor-pointer">
            Games
          </button>
          <button className="hover:text-white bg-transparent border-none cursor-pointer">
            About
          </button>
          <button className="hover:text-white bg-transparent border-none cursor-pointer">
            Blog
          </button>
        </nav>
      </header>

      {/* Main Form */}
      <main className="flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Track a New Game</h1>
        <form className="bg-slate-800 p-6 rounded-xl w-full max-w-md space-y-4 shadow-lg">
          <div>
            <label htmlFor="title" className="block mb-1 text-sm text-zinc-300">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter title"
              className="w-full p-2 rounded-md bg-zinc-700 text-white placeholder-zinc-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="price"
                className="block mb-1 text-sm text-zinc-300"
              >
                Price
              </label>
              <input
                id="price"
                type="text"
                placeholder="e.g. 59.99, 84.99..."
                className="w-full p-2 rounded-md bg-zinc-700 text-white placeholder-zinc-500"
              />
            </div>
            <div className="w-24">
              <label
                htmlFor="rating"
                className="block mb-1 text-sm text-zinc-300"
              >
                Rating
              </label>
              <input
                id="rating"
                type="text"
                placeholder="1-5"
                className="w-full p-2 rounded-md bg-zinc-700 text-white placeholder-zinc-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-1 text-sm text-zinc-300"
            >
              Category
            </label>
            <select
              id="category"
              className="w-full p-2 rounded-md bg-zinc-700 text-white"
            >
              <option>Please select...</option>
              <option>RPG</option>
              <option>Action</option>
              <option>Strategy</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-1 text-sm text-zinc-300"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="In a few words, what was your experience with the game?"
              className="w-full p-2 h-24 rounded-md bg-zinc-700 text-white placeholder-zinc-500"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 rounded bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-white text-black font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center px-8 py-6 text-zinc-400 text-sm border-t border-slate-700">
        <div className="flex items-center gap-2">
          <span className="font-bold text-cyan-400">GAME LOG</span>
          <div className="flex gap-2 ml-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Instagram" className="w-5 h-5" />
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
              <img src={TwitterIcon} alt="Instagram" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex gap-6">
          <div>
            <h4 className="font-semibold mb-1 text-white">Site</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-white">Support</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-white">Follow Us</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
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
