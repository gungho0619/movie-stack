import { sql } from "@vercel/postgres";
import { TitleType, UniverseType } from "./types";
import { revalidatePath } from "next/cache";

export async function fetchUniverses() {
  try {
    const data = await sql<UniverseType>`SELECT * FROM universes`;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch universe data.");
  }
}

export async function fetchUniverse(id: string): Promise<UniverseType> {
  try {
    const data = await sql<UniverseType>`SELECT * FROM universes
     WHERE id = ${id}`;
    // revalidatePath("/");
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch universe data.");
  }
}

export async function fetchTitles(universeId: string) {
  try {
    const data =
      await sql<TitleType>`SELECT * FROM titles WHERE universe_id = ${universeId}`;
    // revalidatePath(`/${universeId}`);
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch titles data.");
  }
}
