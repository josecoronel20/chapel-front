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
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Player } from "@/lib/types";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { defaultValuesPlayer, playerObject } from "@/lib/formsObjects";
import { editPlayer } from "@/lib/api/players";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { formatBirthDate } from "@/lib/utils";
import useRedirect from "@/hooks/useRedirect";

export default function EditPlayerPage() {
  useRedirect("editPlayer");
  const params = useParams();
  const id = parseInt(params.id as string);
  const [isOpen, setIsOpen] = useState(false);

  //estado para saber si se esta subiendo un archivo
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(playerObject),
    defaultValues: defaultValuesPlayer,
  });

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${id}`,
    fetcher
  );
  const player = data;
  const { date } = formatBirthDate(player?.birthDate);

  useEffect(() => {
    if (player) {
      form.reset({
        fullName: player?.fullName,
        birthDate: date,
        nationality: player?.nationality,
        city: player?.city,
        province: player?.province,
        dominantFoot: player?.dominantFoot || "Diestro",
        transferStatus: player?.transferStatus ?? "Libre",
        height: player?.height,
        weight: player?.weight,
        image: player?.image,
        videoUrl: player?.videoUrl,
        mainPosition: player?.mainPosition || "",
        currentLevel: player?.currentLevel,
        objective: player?.objective,
        profileSummary: player?.profileSummary,
        secondaryPositions: player?.secondaryPositions,
        stats: {
          season: player?.stats.season,
          matches: player?.stats.matches,
          goals: player?.stats.goals,
          assists: player?.stats.assists,
          yellowCards: player?.stats.yellowCards,
          redCards: player?.stats.redCards,
          goalsReceived: player?.stats.goalsReceived,
          cleanSheets: player?.stats.cleanSheets,
        },
        skills: {
          technique: player?.skills.technique,
          speed: player?.skills.speed,
          strength: player?.skills.strength,
          vision: player?.skills.vision,
          finishing: player?.skills.finishing,
          passing: player?.skills.passing,
          reflexes: player?.skills.reflexes,
          crossHandling: player?.skills.crossHandling,
          oneOnOnes: player?.skills.oneOnOnes,
          footWork: player?.skills.footWork,
          leadership: player?.skills.leadership,
          kickingPower: player?.skills.kickingPower,
        },
        achievements: player?.achievements,
        scoutingStatus: player?.scoutingStatus,
        clubsInterested: player?.clubsInterested,
        clubsHistory: player?.clubsHistory,
      });
    }
  }, [player]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error al cargar los datos</div>;
  }

  const handleSubmit = async (data: z.infer<typeof playerObject>) => {
    //se vuelve a formatear la fecha para que sea ISO
    console.log("data", data);
    const birthDateISO = new Date(data.birthDate).toISOString();

    const playerUpdated = { ...data, birthDate: birthDateISO, id: player?.id };
    const response = await editPlayer(id, playerUpdated);
    if (response.status === 200) {
      setIsOpen(true);
    }
    console.log(response);
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

        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(handleSubmit, (errors) => {
            console.log(errors);
          })}
        >
          {/* Información Personal */}
          <PersonalInfo form={form} setIsUploading={setIsUploading} />

          {/* Información Deportiva */}
          <SportInfo form={form} />

          {/* Estadísticas */}
          <Statistics
            form={form}
            isGoalkeeper={form
              .watch("mainPosition")
              .toLowerCase()
              .trim()
              .includes("arquero")}
          />

          {/* Habilidades */}
          <Habilities form={form} />

          {/* Logros */}
          <Achievements form={form} />

          {/* Botones de acción */}

          <div className="flex items-center gap-2 w-full justify-center">
            <Button
              type="submit"
              className="bg-secondary hover:bg-secondary-light text-primary-darker font-medium"
              disabled={isUploading}
            >
              Guardar cambios
            </Button>
            {isUploading && <p>Cargando video...</p>}
          </div>
        </form>

        {/* Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>¡Jugador editado exitosamente!</DialogTitle>
              <DialogDescription>
                <span className="text-lg">
                  El jugador se editó correctamente.
                </span>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end mt-4">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  router.push(`/players/${id}`);
                }}
              >
                Aceptar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
