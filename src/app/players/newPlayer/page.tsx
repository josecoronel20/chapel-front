"use client"

import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import PersonalInfo from "./newPlayerComponents/PersonalInfo"
import SportInfo from "./newPlayerComponents/SportInfo"
import Statistics from "./newPlayerComponents/Statistics"
import Habilities from "./newPlayerComponents/Habilities"
import Achievements from "./newPlayerComponents/Achievements"
import { defaultValuesPlayer, playerObject } from "@/lib/formsObjects"

export default function NewPlayerPage() {

  const form = useForm({
    resolver: zodResolver(playerObject),
    defaultValues: defaultValuesPlayer
  }) 

  const handleSubmit = (data: z.infer<typeof playerObject>) => {
    console.log("errores", form.formState.errors)
    console.log("Datos del jugador:", data)
  }

  return (
    <main className="min-h-screen bg-bg p-4 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-text mb-2">Nuevo Jugador</h1>
          <p className="text-text-muted">Completa la información del jugador</p>
        </div>

        <form
        className="space-y-6"
        onSubmit={form.handleSubmit(handleSubmit)}
        >
          {/* Información Personal */}
          <PersonalInfo form={form} />

          {/* Información Deportiva */}
          <SportInfo form={form} />

          {/* Estadísticas */}
          <Statistics form={form} isGoalkeeper={form.watch("posicionPrincipal").toLowerCase().trim().includes("arquero")} />

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
            <Button type="submit" className="bg-secondary hover:bg-secondary-light text-primary-darker font-medium" >
              Guardar Jugador
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
