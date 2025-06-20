"use client";

import { ArrowLeft, Phone, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import BasicInfo from "./components/BasicInfo";
import PlayerProfile from "./components/PlayerProfile";
import PlayerStats from "./components/PlayerStats";
import TecnicEvaluation from "./components/TecnicEvaluation";
import ScoutingInfo from "./components/ScoutingInfo";
import { Player } from "@/lib/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Achievements from "./components/Achievements";

export default function PlayerDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await fetch("/data/dataPlayers.json");
      const data = await res.json();
      setPlayer(
        data.players.find((player: Player) => player.id === parseInt(id))
      );
    };

    fetchPlayer();
  }, [id]);

  if (!player) return <div>Cargando...</div>;

  return (
    <main className="min-h-screen bg-purple-100 pt-16 text-primary-darker">
      {/* Header con navegación */}
      <header className="bg-white shadow-sm border-b">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/players"
              className="flex items-center space-x-2 text-primary-dark hover:text-primary-light"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a jugadores</span>
            </Link>
            <div className="h-6 w-px bg-slate-300"></div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Ficha del Jugador
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 md:px-6 py-8 mx-auto flex flex-col gap-4">
        {/* Columna izquierda - Información principal */}

        <section className="w-full">
          <BasicInfo
            image={player.image}
            fullName={player.fullName}
            mainPosition={player.mainPosition}
            secondaryPositions={player.secondaryPositions}
            birthDate={player.birthDate}
            city={player.city}
            province={player.province}
            nationality={player.nationality}
            dominantFoot={player.dominantFoot}
            height={player.height}
            weight={player.weight}
          />
        </section>

        <section className="w-full">
          <PlayerProfile
            profileSummary={player.profileSummary}
            currentLevel={player.currentLevel}
            objective={player.objective}
          />
        </section>

        <div className="columns-1 lg:columns-2 gap-4">
          <section className="break-inside-avoid mb-4">
            {/* Video destacado */}
            
              <Card className="lg:grid-cols-1">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Video Destacado</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {player.videoUrl ? (
                  <video
                    src={player.videoUrl}
                    className="w-full max-h-screen object-cover rounded"
                    controls
                  />
                  ) : (
                    <div className="flex justify-center items-center h-full">
                      <p className="text-sm text-slate-600">No hay video destacado por el momento</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            
          </section>

          
            <section className="break-inside-avoid mb-4">
              <Achievements achievements={player.achievements} />
            </section>
          

          <section className="break-inside-avoid mb-4">
            <PlayerStats playerInfo={player} />
          </section>

          <section className="break-inside-avoid mb-4">
            <TecnicEvaluation playerInfo={player} />
          </section>

          <section className="break-inside-avoid mb-4">
            <ScoutingInfo
              scoutingStatus={player.scoutingStatus}
              clubsInterested={player.clubsInterested}
            />
          </section>

          <section className="break-inside-avoid mb-4 ">
            {/* Contacto */}
            <Card>
              <CardHeader>
                <CardTitle>Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href={`https://wa.me/541124748065`} className="w-full cursor-pointer bg-primary-light text-white p-2 rounded-md hover:bg-primary-lighter flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300" target="_blank">
                  <Phone className="w-4 h-4 " />
                  Solicitar más información
                </Link>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
