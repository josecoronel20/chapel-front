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
          <Label htmlFor="season" className="text-text-light">
            Temporada
          </Label>
          <Input
            id="season"
            type="text"
            {...form.register("stats.season")}
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
              id="matches"
              type="number"
              {...form.register("stats.matches", { valueAsNumber: true })}
              className="bg-bg border-primary/30 text-text"
            />  
          </div>
          {isGoalkeeper ? (
            <>
              <div>
                <Label htmlFor="goalsReceived" className="text-text-light">
                  Goles Recibidos
                </Label>
                <Input
                  id="goalsReceived"
                  type="number"
                  {...form.register("stats.goalsReceived", { valueAsNumber: true })}
                  className="bg-bg border-primary/30 text-text"
                />
              </div>
              <div>
                <Label htmlFor="cleanSheets" className="text-text-light">
                  Vallas Invictas
                </Label>
                <Input
                  id="cleanSheets"
                  type="number"
                  {...form.register("stats.cleanSheets", { valueAsNumber: true })}
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
                  id="goals"
                  type="number"
                  {...form.register("stats.goals", { valueAsNumber: true })}
                  className="bg-bg border-primary/30 text-text"
                />
              </div>
              <div>
                <Label htmlFor="assists" className="text-text-light">
                  Asistencias
                </Label>
                <Input
                  id="assists"
                  type="number"
                  {...form.register("stats.assists", { valueAsNumber: true })}
                  className="bg-bg border-primary/30 text-text"
                />
              </div>
            </>
          )}
          <div>
            <Label htmlFor="yellowCards" className="text-text-light">
              T. Amarillas
            </Label>
            <Input
              id="yellowCards"
              type="number"
              {...form.register("stats.yellowCards", { valueAsNumber: true })}
              className="bg-bg border-primary/30 text-text"
            />
          </div>
          <div>
            <Label htmlFor="redCards" className="text-text-light">
              T. Rojas
            </Label>
            <Input
              id="redCards"
              type="number"
              {...form.register("stats.redCards", { valueAsNumber: true })}
              className="bg-bg border-primary/30 text-text"
            />
          </div>
          
        </div>
      </CardContent>
    </Card>
  );
};

export default Statistics;
