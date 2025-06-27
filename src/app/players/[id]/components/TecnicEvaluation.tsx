import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Player } from "@/lib/types";

const TecnicEvaluation = ({ playerInfo }: { playerInfo: Player }) => {
  const skillsArray = Object.entries(playerInfo.skills);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Evaluación Técnica</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skillsArray.map(([skill, value]) => {
          if (value > 0 && skill !== "id") {
            return (
              <div key={skill} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium capitalize">
                    {skill === "technique"
                      ? "Técnica"
                      : skill === "speed"
                      ? "Velocidad"
                      : skill === "strength"
                      ? "Fuerza"
                      : skill === "vision"
                      ? "Visión"
                      : skill === "finishing"
                      ? "Definición"
                      : skill === "passing"
                      ? "Pase"
                      : skill === "reflexes"
                      ? "Reflejos"
                      : skill === "crossHandling"
                      ? "Salida"
                      : skill === "oneOnOnes"
                      ? "1v1"
                      : skill === "footWork"
                      ? "Trabajo de pies"
                      : skill === "kickingPower"
                      ? "Potencia de saque"
                      : skill === "leadership"
                      ? "Liderazgo"
                      : null}
                  </span>

                  <span className="text-sm text-slate-600">
                    {value as number}%
                  </span>
                </div>
                <Progress value={value as number} className="h-2" />
              </div>
            );
          }
        })}
      </CardContent>
    </Card>
  );
};

export default TecnicEvaluation;
