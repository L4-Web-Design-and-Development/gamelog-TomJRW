export default function BlogPage() {
  const posts = [
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

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <span className="text-white">Game Log </span>
            <span className="text-cyan-400">Updates & Dev Blog</span>
          </h1>
          <div className="mt-2 h-1 w-28 bg-gradient-to-r from-cyan-400/70 to-transparent mx-auto rounded-full" />
          <p className="mt-4 text-zinc-400 text-sm max-w-xl mx-auto">
            Dev updates, patch notes, and progress logs from the Game Log
            project. Stay up-to-date with everything new.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-cyan-400 transition duration-200"
            >
              <h2 className="text-xl font-semibold text-cyan-400 mb-2">
                {post.icon} {post.title}
              </h2>
              {post.content.map((block, j) =>
                Array.isArray(block) ? (
                  <ul
                    key={j}
                    className="list-disc list-inside text-zinc-300 mt-2 pl-2 space-y-1"
                  >
                    {block.map((li, k) => (
                      <li key={k}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={j} className="text-zinc-300 text-sm leading-6">
                    {block}
                  </p>
                )
              )}
              <p className="text-zinc-500 text-xs mt-4">Posted: {post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
