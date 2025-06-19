import { GraduationCap, Eye, Heart, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container p-4 md:px-6  mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-light">
                Centro de Formación Futbolística
              </h2>
              <p className="text-lg  leading-relaxed text-text-light">
                Somos un centro de formación futbolística dedicado al desarrollo integral de jóvenes talentos.
                Acompañamos su crecimiento técnico, físico y mental para proyectarlos al siguiente nivel.
              </p>
            </div>

            {/* Valores destacados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-secondary-light ">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-text-light" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-light mb-1 text-lg">Formación profesional</h3>
                  <p className="text-sm text-secondary">Metodología de alto nivel</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-secondary-light">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-text-light" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-light mb-1">Visibilidad real</h3>
                  <p className="text-sm text-secondary">Oportunidades concretas</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-secondary-light">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-text-light" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-light mb-1">Enfoque humano</h3>
                  <p className="text-sm text-secondary">Desarrollo integral</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-lg bg-white border border-secondary-light">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-text-light" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-light mb-1">Conexiones globales</h3>
                  <p className="text-sm text-secondary">Red local e internacional</p>
                </div>
              </div>
            </div>
          </div>

          {/* video */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <video
                src="/trainingVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="object-cover w-full h-full"
              />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-light rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-light rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
