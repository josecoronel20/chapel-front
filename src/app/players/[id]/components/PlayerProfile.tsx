import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import React from "react";

const PlayerProfile = ({
  profileSummary,
  currentLevel,
  objective,
}: {
  profileSummary: string;
  currentLevel: string;
  objective: string;
}) => {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="w-5 h-5" />
          <span>Perfil del Jugador</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-slate-700 leading-relaxed">{profileSummary}</p>
        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Nivel Actual</h4>
            <p className="text-sm text-slate-600">{currentLevel}</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">Objetivo</h4>
            <p className="text-sm text-slate-600">{objective}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerProfile;
