import { z } from "zod";

export const playerObject = z.object({
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

  export const defaultValuesPlayer:z.infer<typeof playerObject> = {
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
  };