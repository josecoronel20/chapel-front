"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInfo from "./editPlayerComponents/PersonalInfo";
import SportInfo from "./editPlayerComponents/SportInfo";
import Statistics from "./editPlayerComponents/Statistics";
import Habilities from "./editPlayerComponents/Habilities";
import Achievements from "./editPlayerComponents/Achievements";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Player } from "@/lib/types";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { defaultValuesPlayer, playerObject } from "@/lib/formsObjects";

export default function EditPlayerPage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  const form = useForm({
    resolver: zodResolver(playerObject),
    defaultValues: defaultValuesPlayer
  });

  const { data, error, isLoading } = useSWR(`/data/dataPlayers.json`, fetcher);

  const player: Player = data?.players.find(
    (player: Player) => player.id === id
  );

  const arrayToString = (arr?: string[]) =>
    Array.isArray(arr) && arr.length > 0 ? arr.join(", ") : "";

  useEffect(() => {
    if (player) {
      form.reset({
        nombreCompleto: player?.fullName,
        fechaNacimiento: player?.birthDate,
        nacionalidad: player?.nationality,
        ciudad: player?.city,
        provincia: player?.province,
        piernaHabil: player?.dominantFoot,
        altura: player?.height,
        peso: player?.weight,
        imagen: player?.image,
        urlVideo: player?.videoUrl,
        posicionPrincipal: player?.mainPosition || "",
        nivelActual: player?.currentLevel,
        objetivo: player?.objective,
        resumenPerfil: player?.profileSummary,
        posicionesSecundarias: player?.secondaryPositions,
        estadisticas: {
          temporada: player?.stats.season,
          partidos: player?.stats.matches,
          goles: player?.stats.goals,
          asistencias: player?.stats.assists,
          tarjetasAmarillas: player?.stats.yellowCards,
          tarjetasRojas: player?.stats.redCards,
          golesRecibidos: player?.stats.goalsReceived,
          vallasInvictas: player?.stats.cleanSheets,
        },
        habilidades: {
          tecnica: player?.skills.technique,
          velocidad: player?.skills.speed,
          fuerza: player?.skills.strength,
          vision: player?.skills.vision,
          definicion: player?.skills.finishing,
          pase: player?.skills.passing,
          reflejos: player?.skills.reflexes,
          salidaCentros: player?.skills.crossHandling,
          unoContraUno: player?.skills.oneOnOnes,
          juegoConLosPies: player?.skills.footWork,
          liderazgo: player?.skills.leadership,
          potenciaSaque: player?.skills.kickingPower,
        },
        logros: player?.achievements,
        estadoObservacion: player?.scoutingStatus,
        clubesInteresados: player?.clubsInterested,
      });
    }
  }, [player]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  const handleSubmit = (data: z.infer<typeof playerObject>) => {
    const playerUpdated = { ...data, id: player?.id };
    console.log(playerUpdated);
  };

  return (
    <main className="min-h-screen bg-bg p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-text mb-2">
            Editar información de {player?.fullName}
          </h1>
          <p className="text-text-muted">
            Completa o edita la información del jugador
          </p>
        </div>

        <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
          {/* Información Personal */}
          <PersonalInfo form={form} />

          {/* Información Deportiva */}
          <SportInfo form={form} />

          {/* Estadísticas */}
          <Statistics
            form={form}
            isGoalkeeper={form
              .watch("posicionPrincipal")
              .toLowerCase()
              .trim()
              .includes("arquero")}
          />

          {/* Habilidades */}
          <Habilities form={form} />

          {/* Logros */}
          <Achievements form={form} />

          {/* Botones de acción */}

          <Button
            type="submit"
            className="bg-secondary hover:bg-secondary-light text-primary-darker font-medium"
          >
            Guardar cambios
          </Button>
        </form>
      </div>
    </main>
  );
}
