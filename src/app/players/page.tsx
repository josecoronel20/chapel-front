"use client";

import { useEffect, useState } from "react";
import { Calendar, Trophy, Ruler } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Player } from "@/lib/types";

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
              <Card
                key={player.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white  cursor-pointer hover:scale-105 ease-in-out hover:shadow-primary-dark/20"
              >
                <div className="relative">
                  <Image
                    src={player.image || "/placeholder.svg"}
                    alt={player.fullName}
                    width={250}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold text-lg text-primary-dark">
                        {player.fullName}
                      </h3>
                      <p className="text-primary-dark text-sm">
                        {player.mainPosition}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-primary-dark">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{player.age} años</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Ruler className="w-4 h-4" />
                        <span>
                          {player.height} cm / {player.weight} kg
                        </span>
                      </div>
                    </div>

                    {/* Clubes interesados */}
                    {player.clubsInterested &&
                      player.clubsInterested.length > 0 && (
                        <div className="pt-3 border-t">
                          <p className="text-xs text-slate-600 mb-2">
                            Interés de clubes:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {player.clubsInterested.map(
                              (club: string, index: number) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {club}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                      )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
