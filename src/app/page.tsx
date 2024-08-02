import { fetchUniverses } from "../lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const universes = await fetchUniverses();
  return (
    <main className="text-white">
      {universes.map((universe) => (
        <Link key={universe.id} href={`/${universe.id}`}>
          {universe.title}
        </Link>
      ))}
    </main>
  );
}
