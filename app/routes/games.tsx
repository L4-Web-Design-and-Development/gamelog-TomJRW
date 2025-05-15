// app/routes/games.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/utils/db.server";

export const loader = async () => {
  const games = await prisma.game.findMany();
  return json({ games });
};

export default function GamesPage() {
  const { games } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">All Games</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-slate-800 hover:bg-slate-700 transition rounded-xl p-6 shadow-lg border border-slate-700"
          >
            <h2 className="text-xl font-semibold text-cyan-400 mb-1">
              {game.title}
            </h2>
            <p className="text-sm text-zinc-400 mb-3">
              {game.description}
            </p>
            <div className="text-sm space-y-1">
              <p>
                <span className="font-semibold text-white">Price:</span> £{game.price.toFixed(2)}
              </p>
              <p>
                <span className="font-semibold text-white">Rating:</span> {game.rating}/5
              </p>
              <p className="text-zinc-500">
                <span className="font-semibold text-white">Release Date:</span>{" "}
                {new Date(game.releaseDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
