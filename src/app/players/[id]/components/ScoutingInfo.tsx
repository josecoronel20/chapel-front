import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import React from "react";

const ScoutingInfo = ({
  scoutingStatus,
  clubsInterested,
}: {
  scoutingStatus: string;
  clubsInterested: string[];
}) => {
  return (

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Eye className="w-5 h-5" />
            <span>Estado de Scouting</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">{scoutingStatus}</p>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">
              Clubes Interesados
            </h4>
            <div className="space-y-2">
              {clubsInterested.length > 0 ? clubsInterested.map((club, index) => (
                <Badge key={index} variant="outline" className="mr-2 mb-2">
                  {club}
                </Badge>
              )) : <p className="text-sm text-slate-700">No hay clubes interesados por el momento</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      
    
  );
};

export default ScoutingInfo;
