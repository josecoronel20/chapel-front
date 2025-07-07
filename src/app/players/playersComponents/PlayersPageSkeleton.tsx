"use client";

import { Loader2, Trophy } from "lucide-react";
import CardPlayerSkeleton from "./CardPlayerSkeleton";

export default function PlayersPageSkeleton() {
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
              <span>jugadores activos</span>
            </div>
          </div>
        </div>
      </header>

      <section className="flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin" />
        <h2 className="text-primary-dark text-2xl font-bold">
          Cargando jugadores...
        </h2>
      </section>

      <section className="container px-4 md:px-6 py-8 mx-auto">
        {/* Grid de jugadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <CardPlayerSkeleton />
          <CardPlayerSkeleton />
          <CardPlayerSkeleton />
          <CardPlayerSkeleton />
          <CardPlayerSkeleton />
          <CardPlayerSkeleton />
          <CardPlayerSkeleton />
          <CardPlayerSkeleton />
        </div>
      </section>
    </main>
  );
}
