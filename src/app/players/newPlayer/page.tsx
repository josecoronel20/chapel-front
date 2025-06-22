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


export default function NewPlayerPage() {
  const playerObject = z.object({
    nombreCompleto: z.string().min(1, { message: "El nombre es requerido" }),
    fechaNacimiento: z.string().min(1, { message: "La fecha de nacimiento es requerida" }),
    nacionalidad: z.string().min(1, { message: "La nacionalidad es requerida" }),
    ciudad: z.string().min(1, { message: "La ciudad es requerida" }),
    provincia: z.string().min(1, { message: "La provincia es requerida" }),
    piernaHabil: z.enum(["Diestro", "Zurdo", "Ambidiestro"]),
    altura: z.string().min(1, { message: "La altura es requerida" }),
    peso: z.string().min(1, { message: "El peso es requerido" }),
    imagen: z.string().optional(),
    urlVideo: z.string().optional(),
    posicionPrincipal: z.string().min(1, { message: "La posición principal es requerida" }),
    nivelActual: z.string().min(1, { message: "El nivel actual es requerido" }),
    objetivo: z.string().min(1, { message: "El objetivo es requerido" }),
    resumenPerfil: z.string().min(1, { message: "El resumen del perfil es requerido" }),
    posicionesSecundarias: z.array(z.string()).optional(),
    estadisticas: z.object({
      temporada: z.string().default(""),
      partidos: z.number().default(0),
      goles:z.number().default(0),
      asistencias: z.number().default(0),
      tarjetasAmarillas: z.number().default(0),
      tarjetasRojas: z.number().default(0),
      golesRecibidos: z.number().default(0),
      vallasInvictas: z.number().default(0),
    }),
    habilidades: z.object({
      tecnica: z.number().min(0, { message: "La habilidad técnica es requerida" }),
      velocidad: z.number().min(0, { message: "La habilidad velocidad es requerida" }),
      fuerza: z.number().min(0, { message: "La habilidad fuerza es requerida" }),
      vision: z.number().min(0, { message: "La habilidad vision es requerida" }),
      definicion: z.number().min(0, { message: "La habilidad definicion es requerida" }),
      pase: z.number().min(0, { message: "La habilidad pase es requerida" }),
      reflejos: z.number().min(0, { message: "La habilidad reflejos es requerida" }),
      salidaCentros: z.number().min(0, { message: "La habilidad salida centros es requerida" }),
      unoContraUno: z.number().min(0, { message: "La habilidad uno contra uno es requerida" }),
      juegoConLosPies: z.number().min(0, { message: "La habilidad juego con los pies es requerida" }),
      liderazgo: z.number().min(0, { message: "La habilidad liderazgo es requerida" }),
      potenciaSaque: z.number().min(0, { message: "La habilidad potencia saque es requerida" }),
    }),
    logros: z.array(z.string()).optional(),
    estadoObservacion: z.enum(["Observado", "Interesado", "En Seguimiento", "Contactado", "No Contactado"]),
    clubesInteresados: z.array(z.string()).optional(),
  })

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
      estadoObservacion: "No Contactado",
      clubesInteresados: [],
    },
  }) 

  const handleSubmit = (data: z.infer<typeof playerObject>) => {
    console.log("errores", form.formState.errors)
    console.log("Datos del jugador:", data)
  }

  return (
    <main className="min-h-screen bg-bg p-4 pt-16">
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
