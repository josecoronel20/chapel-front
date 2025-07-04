"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { defaultValuesPlayer, playerObject } from "@/lib/formsObjects";
import { editPlayer } from "@/lib/api/players";
import { useRouter } from "next/navigation";
import { formatBirthDate } from "@/lib/utils";
import useRedirect from "@/hooks/useRedirect";
import FormPage from "@/app/players/formComponent/FormPage";

export default function EditPlayerPage() {
  useRedirect("editPlayer");
  const params = useParams();
  const id = parseInt(params.id as string);

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
    const responseData = await response.json();
    if (response.ok) {
      router.push(`/players/${responseData.id}`);
    } else if (!response.ok) {
      console.log(responseData);
    }
  };

  return (
    <FormPage
      form={form}
      handleSubmit={handleSubmit}
      setIsUploading={setIsUploading}
      isUploading={isUploading}
      id={id.toString()}
      player={player}
      typePage="editPlayer"
    />
  );
}

