import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import React from "react";

const PlayerStats = ({ stats }: { stats: any }) => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5" />
          <span>Estadísticas Temporada {stats.season}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {stats.matches}
            </div>
            <div className="text-sm text-slate-600">Partidos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {stats.goals}
            </div>
            <div className="text-sm text-slate-600">Goles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {stats.assists}
            </div>
            <div className="text-sm text-slate-600">Asistencias</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {stats.yellowCards}
            </div>
            <div className="text-sm text-slate-600">T. Amarillas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {stats.redCards}
            </div>
            <div className="text-sm text-slate-600">T. Rojas</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerStats;
