import { Trophy, Flag, Eye } from "lucide-react";

export default function Stats() {
  const statistics = [
    {
      icon: Eye,
      value: "8",
      label: "Jugadores en observación",
    },
    {
      icon: Trophy,
      value: "3",
      label: "Contratos firmados",
    },
    {
      icon: Flag,
      value: "5",
      label: "Pruebas en clubes gestionadas",
    },
  ];

  return (
    <section className="space-y-6 py-10">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">
        Resultados 2024
      </h3>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl w-full p-6 shadow-lg border grid-cols-1 md:grid-cols-2 border-slate-100 ${
              index === 2 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`h-12 bg-gradient-to-br ${index === 1 ? 'from-secondary-dark to-secondary-lighter' : 'from-primary-dark to-primary-lighter'} rounded-full flex items-center justify-center px-3`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="w-full">
                <div className="text-2xl font-bold text-slate-800">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
