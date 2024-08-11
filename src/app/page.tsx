import Universe from "@/components/Universe";
import { fetchUniverses } from "../lib/data";

export default async function Home() {
  const universes = await fetchUniverses();
  return (
    <main className="text-white">
      <div className="flex flex-col mx-auto items-center p-8">
        {universes.map((universe) => (
          <Universe key={universe.id} data={universe} />
        ))}
      </div>
    </main>
  );
}
