import Image from 'next/image'

const ClubsLogos = () => {
const interestedClubs = [
        { name: "River Plate", image: "/clubes/riverLogo.png" },
        { name: "Boca Juniors", image: "/clubes/bocaLogo.png" },
        { name: "Barracas Central", image: "/clubes/barracasCentralLogo.png" },
        { name: "Huracan", image: "/clubes/huracanLogo.png" },
        { name: "AC Monza", image: "/clubes/monzaLogo.png" },
        { name: "CF Palencia", image: "/clubes/palenciaLogo.png" },
        { name: "Tigre", image: "/clubes/tigreLogo.png" },
        { name: "Racing Club", image: "/clubes/racingLogo.png" },
      ];

  return (
    <section className="space-y-8 lg:py-10">
            <h3 className="text-2xl font-bold text-slate-800 text-center">
              Clubes que han mostrado interés
            </h3>
            <div className="bg-white rounded-2xl shadow-lg border">
              <div className="grid grid-cols-4 items-center">
                {interestedClubs.map((club, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={club.image}
                      alt={club.name}
                      width={150}
                      height={100}
                      className="w-full sm:max-w-40 h-full opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          
  )
}

export default ClubsLogos