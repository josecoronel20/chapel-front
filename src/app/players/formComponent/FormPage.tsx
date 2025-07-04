"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PersonalInfo from "@/app/players/formComponent/PersonalInfo";
import SportInfo from "@/app/players/formComponent/SportInfo";
import Statistics from "@/app/players/formComponent/Statistics";
import Habilities from "@/app/players/formComponent/Habilities";
import Achievements from "@/app/players/formComponent/Achievements";
import { Player } from "@/lib/types";
import { playerObject } from "@/lib/formsObjects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FormPage({
  form,
  handleSubmit,
  setIsUploading,
  isUploading,
  id,
  player,
  typePage,
}: {
  form: UseFormReturn<any>;
  handleSubmit: (data: z.infer<typeof playerObject>) => void;
  setIsUploading: (isUploading: boolean) => void;
  isUploading: boolean;
  id?: string;
  player?: Player;
  typePage: "editPlayer" | "newPlayer";
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
    return (
    <main className="min-h-screen bg-bg p-4 pt-20 flex flex-col gap-4">
      <header className="bg-white shadow-sm border-b sticky rounded">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link
              href={typePage === "editPlayer" && id ? `/players/${id}` : "/players"}
              className="flex items-center space-x-2 text-primary-dark hover:text-primary-light"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{typePage === "editPlayer" ? "Volver a ficha del jugador" : "Volver a jugadores"}</span>
            </Link>
            <div className="h-6 w-px bg-slate-300"></div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                {typePage === "editPlayer" && player ? `Editar ficha de ${player?.fullName}` : "Nuevo Jugador"}
              </h1>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto">


        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(handleSubmit, (errors) => {
            console.log(errors);
          })}
        >
          {/* Información Personal */}
          <PersonalInfo form={form} setIsUploading={setIsUploading} typePage={typePage} isUploading={isUploading} />

          {/* Información Deportiva */}
          <SportInfo form={form} typePage={typePage} />

          {/* Estadísticas */}
          <Statistics
            form={form}
            isGoalkeeper={form
              .watch("mainPosition")
              .toLowerCase()
              .trim()
              .includes("arquero")}
            typePage={typePage}
          />

          {/* Habilidades */}
          <Habilities form={form} typePage={typePage} />

          {/* Logros */}
          <Achievements form={form} />

           {/* Botones de acción */}
           <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => router.push(typePage === "editPlayer" ? `/players/${id}` : "/players")}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-secondary hover:bg-secondary-light text-primary-darker font-medium"
            >
              {typePage === "editPlayer" ? "Guardar cambios" : "Guardar Jugador"}
            </Button>
          </div>
        </form>

        {/* Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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
                  setIsDialogOpen(false);
                  router.push(typePage === "editPlayer" ? `/players/${id}` : "/players");
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
