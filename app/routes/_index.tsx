import { useState } from "react";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunction } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
import ImageUploader from "~/components/ImageUploader";
import InstagramIcon from "~/assets/svg/instagram.svg";
import FacebookIcon from "~/assets/svg/facebook.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

// Loader fetches categories for dropdown
export const loader: LoaderFunction = async () => {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    select: { id: true, title: true },
    orderBy: { title: "asc" },
  });
  await prisma.$disconnect();
  return json({ categories });
};

// Action handles form submission and creates a new game
export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const rating = parseFloat(formData.get("rating") as string);
  const releaseDate = new Date(formData.get("releaseDate") as string);
  const imageUrl = formData.get("imageUrl") as string;
  const categoryId = formData.get("categoryId") as string;

  const prisma = new PrismaClient();
  await prisma.game.create({
    data: {
      title,
      description,
      price,
      rating,
      releaseDate,
      imageUrl,
      categoryId,
    },
  });
  await prisma.$disconnect();

  // Redirect back to games list
  return redirect("/games");
};

export default function AddGame() {
  // Pull categories from loader
  const { categories } = useLoaderData<typeof loader>();
  const [imageUrl, setImageUrl] = useState("");

  // Callback when Cloudinary returns a URL
  const handleImageUploaded = (url: string) => {
    setImageUrl(url);
  };

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

      {/* MAIN FORM */}
      <main className="flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">
          Add <span className="text-cyan-400">Game</span>
        </h1>
        <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-xl shadow-lg w-full">
          <Form method="post" className="space-y-6">
            {/* Hidden field for Cloudinary URL */}
            <input type="hidden" name="imageUrl" value={imageUrl} />

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block mb-1 text-sm text-zinc-300"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block mb-1 text-sm text-zinc-300"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Image Uploader */}
            <div className="mb-8">
              <ImageUploader onImageUploaded={handleImageUploaded} />
            </div>

            {/* Price & Rating */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="price"
                  className="block mb-1 text-sm text-zinc-300"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  step="0.01"
                  min="0"
                  required
                  className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label
                  htmlFor="rating"
                  className="block mb-1 text-sm text-zinc-300"
                >
                  Rating
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  step="0.1"
                  min="0"
                  max="5"
                  required
                  className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Release Date */}
            <div>
              <label
                htmlFor="releaseDate"
                className="block mb-1 text-sm text-zinc-300"
              >
                Release Date
              </label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                required
                className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="categoryId"
                className="block mb-1 text-sm text-zinc-300"
              >
                Category
              </label>
              <select
                id="categoryId"
                name="categoryId"
                required
                className="w-full p-3 bg-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-2">
              <Link
                to="/games"
                className="px-4 py-2 rounded bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200"
              >
                Add Game
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
