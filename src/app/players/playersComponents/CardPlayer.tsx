import { Player } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, Ruler, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatBirthDate } from "@/lib/utils";

const CardPlayer = ({ player }: { player: Player }) => {
  const { age } = formatBirthDate(player.birthDate);

  return (
    <Card
      key={player.id}
      className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white  cursor-pointer hover:scale-105 ease-in-out hover:shadow-primary-dark/20 h-full relative max-w-xs mx-auto"
    >
      <div className="relative">
        {player.image ? (
          <Image
            src={player.image}
            alt={player.fullName}
            width={250}
            height={300}
            className="w-full h-48 object-cover object-top rounded-t-lg"
          />
        ) : (
          <User className="w-full h-48 object-cover text-primary-dark" />
        )}
      </div>

      <div
        className={`absolute top-2 right-2 ${
          player.transferStatus === "Libre" ? "bg-green-500" : "bg-primary"
        } text-white px-2 py-1 rounded-md text-xs`}
      >
        <p>
          Estado de pase:{" "}
          <span className="font-bold">{player.transferStatus}</span>
        </p>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-bold text-lg text-primary-dark">
              {player.fullName}
            </h3>
            <div className="flex flex-col gap-3">
              <Badge className="bg-secondary-light text-white text-sm w-fit">
                {player.mainPosition}
              </Badge>

              {player.secondaryPositions && (
                <div className="flex gap-2 w-full overflow-hidden">
                  {player.secondaryPositions.map((secondPosition) => (
                    <p className="text-primary-dark text-xs rounded text-gray-400">
                      {secondPosition}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-primary-dark">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{age} años</span>
            </div>
            <div className="flex items-center space-x-1">
              <Ruler className="w-4 h-4" />
              <span>
                {player.height} m / {player.weight} kg
              </span>
            </div>
          </div>

          {/* Clubes interesados */}

          <div className="pt-3 border-t">
            <p className="text-xs text-slate-600 mb-2 ">Interés de clubes:</p>
            {player.clubsInterested && player.clubsInterested.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {player.clubsInterested.map((club: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {club}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-600 mb-2">
                No hay clubes interesados por el momento
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPlayer;
