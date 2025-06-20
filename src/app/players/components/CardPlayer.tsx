import { Player } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, Ruler, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CardPlayer = ({ player }: { player: Player }) => {
  const [day, month, year] = player.birthDate.split("/");
  const parsedDate = new Date(Number(year), Number(month) - 1, Number(day));
  const age = new Date().getFullYear() - parsedDate.getFullYear();

  return (
    <Card
      key={player.id}
      className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white  cursor-pointer hover:scale-105 ease-in-out hover:shadow-primary-dark/20"
    >
      <div className="relative">
        {player.image ? (
          <Image
            src={player.image}
            alt={player.fullName}
            width={250}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        ) : (
          <User className="w-full h-48 object-cover text-primary-dark" />
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg text-primary-dark">
              {player.fullName}
            </h3>
            <p className="text-primary-dark text-sm">{player.mainPosition}</p>
          </div>

          <div className="flex items-center justify-between text-sm text-primary-dark">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>
                {age} años
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Ruler className="w-4 h-4" />
              <span>
                {player.height} m / {player.weight} kg
              </span>
            </div>
          </div>

          {/* Clubes interesados */}
          {player.clubsInterested && player.clubsInterested.length > 0 && (
            <div className="pt-3 border-t">
              <p className="text-xs text-slate-600 mb-2">Interés de clubes:</p>
              <div className="flex flex-wrap gap-1">
                {player.clubsInterested.map((club: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {club}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPlayer;
