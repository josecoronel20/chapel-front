"use client";

import { useEffect, useState } from "react";
import { Plus, Trophy } from "lucide-react";
import Link from "next/link";
import { Player } from "@/lib/types";
import CardPlayer from "./playersComponents/CardPlayer";
import useSWR from "swr";
import PlayersPageSkeleton from "./playersComponents/PlayersPageSkeleton";
import { fetcher } from "@/lib/utils";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

export default function PlayersPage() {
  //todo:agregar filtro
  const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/players`, fetcher);
  const players = data;
  console.log(players);

  const status = useIsLoggedIn();

  {
    isLoading && <PlayersPageSkeleton />;
  }

  if (error || !data) {
    return <div>Error al cargar los jugadores</div>;
  }

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

      {status === "authenticated" && (<section className="container px-4 md:px-6 pt-8 mx-auto">
        <Link href="/players/newPlayer">
          <button className="bg-primary hover:bg-primary-light hover:scale-105 transition-all duration-300 text-white px-4 py-2 rounded-md flex gap-2 items-center">
           <Plus className="w-4 h-4" />
            Agregar Jugador
          </button>
        </Link>
      </section>)}

      <section className="container px-4 md:px-6 py-8 mx-auto">
        {/* Grid de jugadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {players.map((player: Player) => (
            <Link href={`/players/${player.id}`} key={player.id}>
              <CardPlayer player={player} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
