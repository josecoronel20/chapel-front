import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import { User } from "lucide-react";
import { Target } from "lucide-react";
import Image from "next/image";
import React from "react";

const BasicInfo = ({
  image,
  fullName,
  mainPosition,
  secondaryPositions,
  birthDate,
  age,
  city,
  province,
  nationality,
  dominantFoot,
  height,
  weight,
}: {
  image: string;
  fullName: string;
  mainPosition: string;
  secondaryPositions: string[];
  birthDate: string;
  age: number;
  city: string;
  province: string;
  nationality: string;
  dominantFoot: string;
  height: string;
  weight: string;
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        {/* Información básica */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <Image
              src={image || "/placeholder.svg"}
              alt={fullName}
              width={300}
              height={400}
              className="w-48 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-primary-darker mb-2">
                {fullName}
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800">
                  {mainPosition}
                </Badge>
                {secondaryPositions.map((pos, index) => (
                  <Badge key={index} variant="outline">
                    {pos}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Datos personales */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-darker">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>
                  <strong>Nacimiento:</strong> {birthDate} ({age} años)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>
                  <strong>Residencia:</strong> {city}, {province}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-slate-500" />
                <span>
                  <strong>Nacionalidad:</strong> {nationality}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-slate-500" />
                <span>
                  <strong>Perfil:</strong> {dominantFoot}
                </span>
              </div>
              <div>
                <span>
                  <strong>Altura:</strong> {height}
                </span>
              </div>
              <div>
                <span>
                  <strong>Peso:</strong> {weight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfo;
