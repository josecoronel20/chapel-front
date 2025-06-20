import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Player } from "@/lib/types";
import { TrendingUp } from "lucide-react";
import React from "react";

const PlayerStats = ({ playerInfo }: { playerInfo: Player }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5" />
          <span>Estadísticas Temporada {playerInfo.stats.season}</span>
        </CardTitle>
      </CardHeader>
      {playerInfo.mainPosition !== "Arquero" ? (
        // Si el jugador no es arquero, se muestran las estadísticas de goles, asistencias, tarjetas amarillas y rojas
      <CardContent> 
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {playerInfo.stats.matches}
            </div>
            <div className="text-sm text-slate-600">Partidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {playerInfo.stats.goals}
            </div>
            <div className="text-sm text-slate-600">Goles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {playerInfo.stats.assists}
            </div>
            <div className="text-sm text-slate-600">Asistencias</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {playerInfo.stats.yellowCards}
            </div>
            <div className="text-sm text-slate-600">T. Amarillas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {playerInfo.stats.redCards}
            </div>
            <div className="text-sm text-slate-600">T. Rojas</div>
          </div>
          </div>
        </CardContent>
      ) : (
        // Si el jugador es arquero, se muestran las estadísticas de partidos, goles recibidos, vallas invictas, tarjetas amarillas y rojas
        <CardContent> 
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {playerInfo.stats.matches}
            </div>
            <div className="text-sm text-slate-600">Partidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {playerInfo.stats.goalsReceived}
            </div>
            <div className="text-sm text-slate-600">Goles recibidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {playerInfo.stats.cleanSheets}
            </div>
            <div className="text-sm text-slate-600">Vallas invictas</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {playerInfo.stats.yellowCards}
            </div>
            <div className="text-sm text-slate-600">T. Amarillas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {playerInfo.stats.redCards}
            </div>
            <div className="text-sm text-slate-600">T. Rojas</div>
          </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default PlayerStats;
