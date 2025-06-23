import ScoutingFlow from "./components/ScoutingFlow";
import Stats from "./components/Stats";
import ClubsLogos from "./components/ClubsLogos";
import Link from "next/link";

export default function ConectionsSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-purple-100">
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-4">
            Proyección nacional e internacional
          </h2>
          <p className="text-lg text-primary-dark max-w-3xl mx-auto leading-relaxed">
            Trabajamos activamente para vincular a nuestros jugadores con clubes
            profesionales y semiprofesionales en Argentina y Europa, generando
            oportunidades reales de crecimiento.
          </p>
        </div>

        <ScoutingFlow />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start mb-16">
          {/* Estadísticas */}
          <Stats />

          <ClubsLogos />
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link
            href="/players"
            className="bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary-light transition-colors"
          >
            Conoce a nuestros jugadores
          </Link>
        </div>
      </div>
    </section>
  );
}
