"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import BasicInfo from "./components/BasicInfo";
import PlayerProfile from "./components/PlayerProfile";
import PlayerStats from "./components/PlayerStats";
import TecnicEvaluation from "./components/TecnicEvaluation";
import ScoutingInfo from "./components/ScoutingInfo";
import { Player } from "@/lib/types";
import { useParams } from "next/navigation";
import Achievements from "./components/Achievements";
import ButonsAdmin from "./components/ButonsAdmin";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import PlayerDetailSkeleton from "./components/PlayerDetailSkeleton";
import Video from "./components/Video";
import MoreInfo from "./components/MoreInfo";
import ClubsHistory from "./components/ClubsHistory";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";

export default function PlayerDetailPage() {
  //todo:agregar libre de pase y clubes donde jugaron
  const params = useParams();
  const id = parseInt(params.id as string);
  const status = useIsLoggedIn();

  const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/players/${id}`, fetcher);
  const player = data;
  console.log(player);

  if (isLoading) {
    return <PlayerDetailSkeleton />;
  }

  if (error || !data) {
    return <div>Error al cargar jugador</div>;
  }

  if (!player) {
    return <div>Jugador no encontrado</div>;
  }

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
        {status === "authenticated" && <ButonsAdmin id={id} />}
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
            transferStatus={player.transferStatus}
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
            <ScoutingInfo
              scoutingStatus={player.scoutingStatus}
              clubsInterested={player.clubsInterested}
            />
          </section>

          <section className="break-inside-avoid mb-4">
            <ClubsHistory clubsHistory={player.clubsHistory} />
          </section>

          <section className="break-inside-avoid mb-4">
            <Video videoUrl={player.videoUrl} />
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

          <section className="break-inside-avoid mb-4 ">
            <MoreInfo />
          </section>
        </div>
      </div>
    </main>
  );
}
