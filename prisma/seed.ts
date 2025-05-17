import { config } from "dotenv";
config(); // ← this reads your .env into process.env
console.log("Connecting to:", process.env.DATABASE_URL);

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  // 1) Seed your categories first
  const categoriesData = [
    {
      title: "Action",
      description:
        "Games that require quick reflexes and hand-eye coordination.",
    },
    {
      title: "Adventure",
      description: "Games that involve exploration and puzzle-solving.",
    },
    {
      title: "RPG",
      description: "Games that focus on character development and story.",
    },
    {
      title: "Simulation",
      description: "Games that simulate real-world activities or systems.",
    },
    {
      title: "Strategy",
      description: "Games that require strategic thinking and planning.",
    },
    {
      title: "Puzzle",
      description:
        "Games that challenge players with logic and problem-solving.",
    },
    {
      title: "Sports",
      description: "Games that simulate sports or physical activities.",
    },
    {
      title: "Multiplayer",
      description: "Games that can be played with multiple players.",
    },
    {
      title: "Indie",
      description: "Games developed by independent studios or individuals.",
    },
    {
      title: "Horror",
      description: "Games that aim to scare or unsettle players.",
    },
  ];

  // upsert so re-running won’t duplicate
  for (const cat of categoriesData) {
    await prisma.category.upsert({
      where: { title: cat.title },
      update: {},
      create: { ...cat },
    });
  }
  console.log("🎮 Categories created.");

  // fetch them
  const categories = await prisma.category.findMany();

  // 2) Seed your games, assigning each a random category from the ones you just created
  const gamesData = [
    {
      title: "The Legend of Zelda: Breath of the Wild",
      description: "An open-world adventure game set in the kingdom of Hyrule.",
      price: 59.99,
      rating: 4.9,
      releaseDate: new Date("2017-03-03"),
    },
    // … etc …
  ];

  for (const game of gamesData) {
    const randomCat = categories[Math.floor(Math.random() * categories.length)];
    await prisma.game.create({
      data: {
        ...game,
        categoryId: randomCat.id,
      },
    });
  }
  console.log("👾 Games created & linked to categories.");
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
