export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Title */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          <span className="text-white">About </span>
          <span className="text-cyan-400">Game Log</span>
        </h1>
        <div className="mt-2 h-1 w-28 bg-gradient-to-r from-cyan-400/70 to-transparent mx-auto rounded-full" />
        <p className="mt-4 text-zinc-400 text-sm max-w-xl mx-auto">
          Your personal companion for logging, rating, and tracking the games
          you play — whether it’s solo story-driven epics or chaotic multiplayer
          sessions.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            What is Game Log?
          </h2>
          <p className="text-zinc-300 text-sm leading-6">
            <strong className="text-white">Game Log</strong> is a sleek, minimal
            app made for gamers to log, track, and rate games across all
            platforms. Whether you play solo or with friends, it keeps things
            clean and organised.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside text-zinc-300 text-sm space-y-1">
            <li>
              <strong className="text-white">Remix</strong>: Full-stack React
              framework
            </li>
            <li>
              <strong className="text-white">Tailwind CSS</strong>:
              Utility-first styling
            </li>
            <li>
              <strong className="text-white">Prisma</strong>: Type-safe DB with
              SQLite
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Design Philosophy
          </h2>
          <p className="text-zinc-300 text-sm leading-6">
            Clean, responsive, and distraction-free. Game Log works on all
            screen sizes and prioritises usability.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">
            Storage & Features
          </h2>
          <p className="text-zinc-300 text-sm leading-6">
            Data is stored in a local SQLite DB. Features like syncing, filters,
            sorting, and tags are planned.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-cyan-400 mb-2">Vision</h2>
          <p className="text-zinc-300 text-sm leading-6">
            Game Log is evolving into a full-featured companion app — with
            multiplayer logging, recommendations, and social features in the
            works.
          </p>
        </div>
      </div>
    </div>
  );
}
