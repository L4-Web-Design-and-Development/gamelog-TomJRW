import { json } from "@remix-run/node";
import { useLoaderData, Link, Form, redirect } from "@remix-run/react";
import { prisma } from "~/utils/db.server";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

export const loader = async () => {
  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      rating: true,
      releaseDate: true,
      imageUrl: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return json({ games });
};

// Action handles deletion
export const action = async ({ request }) => {
  const formData = await request.formData();
  const deleteId = formData.get("deleteId");
  if (deleteId) {
    await prisma.game.delete({ where: { id: String(deleteId) } });
  }
  return redirect("/games");
};

export default function GamesPage() {
  const { games } = useLoaderData<typeof loader>();

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
      <main className="px-4 md:px-6 py-8 md:py-12 flex-1 flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between mb-8 md:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-0">
            All Games
          </h1>
          <Link
            to="/"
            className="bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded"
          >
            + Add Game
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-6 shadow-lg border border-slate-700 flex flex-col"
            >
              {game.imageUrl ? (
                <img
                  src={game.imageUrl}
                  alt={`${game.title} cover`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-zinc-700 rounded-md mb-4 flex items-center justify-center text-zinc-400">
                  No Image
                </div>
              )}

              <h2 className="text-lg md:text-xl font-semibold text-cyan-400 mb-1">
                {game.title}
              </h2>
              <p className="text-sm md:text-base text-zinc-400 mb-3 flex-1">
                {game.description}
              </p>

              <div className="text-sm md:text-base space-y-1">
                <p>
                  <span className="font-semibold text-white">Price:</span> £
                  {game.price.toFixed(2)}
                </p>
                <p>
                  <span className="font-semibold text-white">Rating:</span>{" "}
                  {game.rating}/5
                </p>
                <p className="text-zinc-500">
                  <span className="font-semibold text-white">
                    Release Date:
                  </span>{" "}
                  {new Date(game.releaseDate).toLocaleDateString()}
                </p>
              </div>
              {/* Delete Form */}
              <Form method="post" className="self-end">
                <button
                  type="submit"
                  name="deleteId"
                  value={game.id}
                  className="text-red-400 hover:text-red-600 text-sm"
                >
                  Delete
                </button>
              </Form>
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
