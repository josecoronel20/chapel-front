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

export default function EditPlayerPage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  const playerObject = z.object({
    nombreCompleto: z.string().min(1, { message: "El nombre es requerido" }),
    fechaNacimiento: z
      .string()
      .min(1, { message: "La fecha de nacimiento es requerida" }),
    nacionalidad: z
      .string()
      .min(1, { message: "La nacionalidad es requerida" }),
    ciudad: z.string().min(1, { message: "La ciudad es requerida" }),
    provincia: z.string().min(1, { message: "La provincia es requerida" }),
    piernaHabil: z.enum(["Diestro", "Zurdo", "Ambidiestro"]),
    altura: z.string().min(1, { message: "La altura es requerida" }),
    peso: z.string().min(1, { message: "El peso es requerido" }),
    imagen: z.string().optional(),
    urlVideo: z.string().optional(),
    posicionPrincipal: z
      .string()
      .min(1, { message: "La posición principal es requerida" }),
    nivelActual: z.string().optional(),
    objetivo: z.string().min(1, { message: "El objetivo es requerido" }),
    resumenPerfil: z
      .string()
      .min(1, { message: "El resumen del perfil es requerido" }),
    posicionesSecundarias: z
      .union([z.array(z.string()), z.string()])
      .optional(),
    estadisticas: z.object({
      temporada: z.string().default(""),
      partidos: z.number().default(0),
      goles: z.number().default(0),
      asistencias: z.number().default(0),
      tarjetasAmarillas: z.number().default(0),
      tarjetasRojas: z.number().default(0),
      golesRecibidos: z.number().default(0),
      vallasInvictas: z.number().default(0),
    }),
    habilidades: z.object({
      tecnica: z.number().optional(),
      velocidad: z.number().optional(),
      fuerza: z.number().optional(),
      vision: z.number().optional(),
      definicion: z.number().optional(),
      pase: z.number().optional(),
      reflejos: z.number().optional(),
      salidaCentros: z.number().optional(),
      unoContraUno: z.number().optional(),
      juegoConLosPies: z.number().optional(),
      liderazgo: z.number().optional(),
      potenciaSaque: z.number().optional(),
    }),
    logros: z.union([z.array(z.string()), z.string()]).optional(),
    estadoObservacion: z.string(),
    clubesInteresados: z.union([z.array(z.string()), z.string()]).optional(),
  });

  const form = useForm({
    resolver: zodResolver(playerObject),
    defaultValues: {
      nombreCompleto: "",
      fechaNacimiento: "",
      nacionalidad: "",
      ciudad: "",
      provincia: "",
      piernaHabil: "Diestro",
      altura: "",
      peso: "",
      imagen: "",
      urlVideo: "",
      posicionPrincipal: "",
      nivelActual: "",
      objetivo: "",
      resumenPerfil: "",
      posicionesSecundarias: [],
      estadisticas: {
        temporada: "",
        partidos: 0,
        goles: 0,
        asistencias: 0,
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        golesRecibidos: 0,
        vallasInvictas: 0,
      },
      habilidades: {
        tecnica: 0,
        velocidad: 0,
        fuerza: 0,
        vision: 0,
        definicion: 0,
        pase: 0,
        reflejos: 0,
        salidaCentros: 0,
        unoContraUno: 0,
        juegoConLosPies: 0,
        liderazgo: 0,
        potenciaSaque: 0,
      },
      logros: [],
      estadoObservacion: "Observado",
      clubesInteresados: [],
    },
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
    <main className="min-h-screen bg-bg p-4 pt-16">
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
