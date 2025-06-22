import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

const Statistics = ({
  form,
  isGoalkeeper,
}: {
  form: UseFormReturn<any>;
  isGoalkeeper: boolean;
}) => {
  return (
    <Card className="bg-bg-alt border-primary/20">
      <CardHeader>
        <CardTitle className="text-text flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-secondary" />
          Estadísticas de Temporada
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="temporada" className="text-text-light">
            Temporada
          </Label>
          <Input
            id="temporada"
            type="text"
            {...form.register("estadisticas.temporada")}
            className="bg-bg border-primary/30 text-text"
            placeholder="2023-2024"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Label htmlFor="partidos" className="text-text-light">
              Partidos
            </Label>
            <Input
              id="partidos"
              type="number"
              {...form.register("estadisticas.partidos", { valueAsNumber: true })}
              className="bg-bg border-primary/30 text-text"
            />  
          </div>
          {isGoalkeeper ? (
            <>
              <div>
                <Label htmlFor="golesRecibidos" className="text-text-light">
                  Goles Recibidos
                </Label>
                <Input
                  id="golesRecibidos"
                  type="number"
                  {...form.register("estadisticas.golesRecibidos", { valueAsNumber: true })}
                  className="bg-bg border-primary/30 text-text"
                />
              </div>
              <div>
                <Label htmlFor="vallasInvictas" className="text-text-light">
                  Vallas Invictas
                </Label>
                <Input
                  id="vallasInvictas"
                  type="number"
                  {...form.register("estadisticas.vallasInvictas", { valueAsNumber: true })}
                  className="bg-bg border-primary/30 text-text"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <Label htmlFor="goles" className="text-text-light">
                  Goles
                </Label>
                <Input
                  id="goles"
                  type="number"
                  {...form.register("estadisticas.goles", { valueAsNumber: true })}
                  className="bg-bg border-primary/30 text-text"
                />
              </div>
              <div>
                <Label htmlFor="asistencias" className="text-text-light">
                  Asistencias
                </Label>
                <Input
                  id="asistencias"
                  type="number"
                  {...form.register("estadisticas.asistencias", { valueAsNumber: true })}
                  className="bg-bg border-primary/30 text-text"
                />
              </div>
            </>
          )}
          <div>
            <Label htmlFor="tarjetasAmarillas" className="text-text-light">
              T. Amarillas
            </Label>
            <Input
              id="tarjetasAmarillas"
              type="number"
              {...form.register("estadisticas.tarjetasAmarillas", { valueAsNumber: true })}
              className="bg-bg border-primary/30 text-text"
            />
          </div>
          <div>
            <Label htmlFor="tarjetasRojas" className="text-text-light">
              T. Rojas
            </Label>
            <Input
              id="tarjetasRojas"
              type="number"
              {...form.register("estadisticas.tarjetasRojas", { valueAsNumber: true })}
              className="bg-bg border-primary/30 text-text"
            />
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
};

export default Statistics;
