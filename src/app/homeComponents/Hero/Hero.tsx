import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center [padding-top:8rem]">
      {/* Imagen de fondo con overlay */}
      <Image
        src="/heroChapel.png"
        alt="Hero"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover z-10 brightness-[0.4]"
        priority
      />

      {/* Contenido */}
      <div className="relative z-10 w-full p-5">
        <div className="flex flex-col items-center justify-center max-w-3xl text-center gap-4">
          <h1 className="text-4xl md:text-6xl font-bold text-text-light">
            <span className="text-primary-light text-5xl md:text-7xl">
              Chapel Futbol
            </span>
            <br />
            Centro formativo de alto rendimiento
          </h1>

          <p className="text-lg md:text-xl  ">
            Centro de formación de fútbol que entrena y acompaña a jugadores
            desde categorías 2004 a 2020, acercándolos a clubes de Argentina y
            Europa.
          </p>

          <Link
            href="/players"
            className="bg-secondary hover:bg-secondary-light text-text-light font-medium px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Conocé a nuestros jugadores
          </Link>
        </div>
      </div>
    </section>
  );
}
