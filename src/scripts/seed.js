require("dotenv").config();
const { db } = require("@vercel/postgres");
const { titles, universes } = require("../lib/content-data");

async function seedUniverses(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS universes (
        id TEXT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        banner_url TEXT NOT NULL,
        description TEXT NOT NULL
      );
    `;

    console.log(`Created "universes" table`);

    // Insert data into the "users" table
    const insertedUniverses = await Promise.all(
      universes.map(async (universe) => {
        return client.sql`
        INSERT INTO universes (id, title, banner_url, description)
        VALUES (${universe.id}, ${universe.title}, ${universe.banner_url}, ${universe.description})
        ON CONFLICT (id) DO UPDATE SET 
          id = EXCLUDED.id,
          title = EXCLUDED.title,
          banner_url = EXCLUDED.banner_url, 
          description = EXCLUDED.description;
      `;
      })
    );

    console.log(`Seeded ${insertedUniverses.length} universes`);

    return {
      createTable,
      universes: insertedUniverses,
    };
  } catch (error) {
    console.error("Error seeding universes:", error);
    throw error;
  }
}

async function seedTitles(client) {
  try {
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS titles (
        id TEXT PRIMARY KEY,
        universe_id TEXT NOT NULL,
        title VARCHAR(255) NOT NULL,
        branch TEXT NOT NULL,
        banner_url TEXT NOT NULL,
        release_date DATE NOT NULL,
        duration INT NOT NULL,
        text TEXT NOT NULL
      );
    `;

    console.log(`Created "titles" table`);

    // Insert data into the "users" table
    const insertedTitles = await Promise.all(
      titles.map(async (title) => {
        return client.sql`
        INSERT INTO titles (id, universe_id, title, branch, banner_url, release_date, duration, text)
        VALUES (${title.id}, ${title.universe_id}, ${title.title}, ${title.branch},
        ${title.banner_url}, ${title.release_date}, ${title.duration}, ${title.text})
        ON CONFLICT (id) DO UPDATE SET 
          universe_id = EXCLUDED.universe_id,
          title = EXCLUDED.title,
          branch = EXCLUDED.branch,
          banner_url = EXCLUDED.banner_url,
          release_date = EXCLUDED.release_date,
          duration = EXCLUDED.duration,
          text = EXCLUDED.text;
      `;
      })
    );

    console.log(`Seeded ${insertedTitles.length} titles`);

    return {
      createTable,
      titles: insertedTitles,
    };
  } catch (error) {
    console.error("Error seeding titles:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  require("dotenv").config();

  await seedUniverses(client);
  await seedTitles(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
