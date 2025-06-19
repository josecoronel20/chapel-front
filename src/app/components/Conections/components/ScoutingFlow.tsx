import { ClipboardCheck, FileVideo, Send, ShieldCheck } from "lucide-react"

export default function ScoutingFlow() {
  const steps = [
    {
      title: "Seguimiento formativo",
      description:
        "Evaluamos el desarrollo técnico, físico y actitudinal de cada jugador a lo largo del proceso formativo.",
      icon: ClipboardCheck,
    },
    {
      title: "Ficha digital completa",
      description:
        "Creamos un perfil profesional con estadísticas, datos clave y material audiovisual que represente su rendimiento.",
      icon: FileVideo,
    },
    {
      title: "Envío a clubes",
      description:
        "Presentamos los perfiles a clubes profesionales y semiprofesionales de Argentina y Europa, según el perfil del jugador.",
      icon: Send,
    },
    {
      title: "Pruebas y acompañamiento",
      description:
        "Asistimos al jugador en todo el proceso de prueba y seguimiento, brindando soporte integral en cada etapa.",
      icon: ShieldCheck,
    },
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary mb-6">¿Cómo conectamos a los jugadores con los clubes?</h3>
      <p className="text-primary-dark text-base leading-relaxed mb-4">
        El proceso de scouting se activa con aquellos jugadores que, por su rendimiento y proyección, demuestran un perfil adecuado
        para ser presentados ante clubes profesionales. Esto garantiza un acompañamiento responsable, realista y estratégico.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg border border-slate-100">
            <div className="bg-gradient-to-br from-primary-dark to-primary-lighter text-white rounded-full p-3">
              <step.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-dark">{step.title}</h4>
              <p className="text-primary-dark text-sm leading-relaxed mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
