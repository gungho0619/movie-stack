import Universe from "@/components/Universe";
import { fetchUniverses } from "../lib/data";

export default async function Home() {
  const universes = await fetchUniverses();
  return (
    <main className="text-white pb-[50svh] py-4">
      <div className=" grid place-content-center p-4">
        <h1 className="text-[1.5rem] sm:text-[2rem] font-black text-center">
          Explore Cinematic Universes
        </h1>
        <h2 className="text-center">
          Track Your Progress with Interactive Watchlists
        </h2>
      </div>

      <div className="flex flex-col mx-auto items-center px-4">
        <h3
          className="bg-custom-primary w-full text-center py-4 text-[1.5rem] text-custom-text m-8 font-medium"
          style={{ boxShadow: "0 0 10px rgb(0 0 0 / 0.8)" }}
        >
          Choose a universe:
        </h3>
        {universes.map((universe) => (
          <Universe key={universe.id} data={universe} />
        ))}
      </div>
    </main>
  );
}
