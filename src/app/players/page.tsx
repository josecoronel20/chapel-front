"use client";

import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import Link from "next/link";
import { Player } from "@/lib/types";
import CardPlayer from "./components/CardPlayer";

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await fetch("/data/dataPlayers.json");
      const data = await res.json();
      setPlayers(data.players);
    };

    fetchPlayers();
  }, []);

  return (
    <main className="min-h-screen bg-purple-100 pt-16">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary-dark">
                Nuestros Jugadores
              </h1>
              <p className="text-primary-dark mt-1">
                Conoce a los talentos de nuestra academia
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-primary-dark">
              <Trophy className="w-4 h-4" />
              <span>{players.length} jugadores activos</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 md:px-6 py-8 mx-auto">
        {/* Grid de jugadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {players.map((player) => (
            <Link href={`/players/${player.id}`} key={player.id}>
              <CardPlayer player={player} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
