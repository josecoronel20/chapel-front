"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInfo from "./newPlayerComponents/PersonalInfo";
import SportInfo from "./newPlayerComponents/SportInfo";
import Statistics from "./newPlayerComponents/Statistics";
import Habilities from "./newPlayerComponents/Habilities";
import Achievements from "./newPlayerComponents/Achievements";
import { defaultValuesPlayer, playerObject } from "@/lib/formsObjects";
import newPlayer from "@/lib/api/players";
import { Player } from "@/lib/types";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import useRedirect from "@/hooks/useRedirect";

export default function NewPlayerPage() {
  useRedirect("newPlayer");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);
  
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/players`,
    fetcher
  );

  const playersLength = data?.length;

  const form = useForm({
    resolver: zodResolver(playerObject),
    defaultValues: defaultValuesPlayer,
  });

  const handleSubmit = async (data: z.infer<typeof playerObject>) => {
    //se vuelve a formatear la fecha para que sea ISO
    const birthDateISO = new Date(data.birthDate).toISOString();

    const playerCreated = { ...data, birthDate: birthDateISO, id: playersLength + 1 };
    const response = await newPlayer(playerCreated);
    const responseData = await response.json();
    
    if (response.ok) {
      setResponseMessage(responseData.message);
      setIsError(false);
      setIsOpen(true);
    } else if (!response.ok) {
      setResponseMessage(responseData.message);
      setIsError(true);
      setIsOpen(true);
    }
  };

  return (
    <main className="min-h-screen bg-bg p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-text mb-2">Nuevo Jugador</h1>
          <p className="text-text-muted">Completa la información del jugador</p>
        </div>

        <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit, (errors) => {
          console.log(errors);
        })}>
          {/* Información Personal */}
          <PersonalInfo form={form} />

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
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-secondary hover:bg-secondary-light text-primary-darker font-medium"
            >
              Guardar Jugador
            </Button>
          </div>
        </form>

        {/* Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {isError ? "Error al crear jugador" : "¡Jugador creado exitosamente!"}
              </DialogTitle>
              <DialogDescription>
                <span className="text-lg">
                  {responseMessage}
                </span>
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end mt-4">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  if (!isError) {
                    router.push("/players");
                  }
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
