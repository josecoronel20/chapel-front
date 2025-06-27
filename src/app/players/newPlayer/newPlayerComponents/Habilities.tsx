import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { UseFormReturn, Controller } from "react-hook-form";
import { Slider } from "@/components/ui/slider";

const Habilities = ({ form }: { form: UseFormReturn<any> }) => {
  // 👇 Ahora usamos watch para obtener todas las habilidades actuales
  const skills = form.watch("skills");

  const skillNames = {
    technique: "Técnica",
    speed: "Velocidad",
    strength: "Fuerza",
    vision: "Visión",
    finishing: "Finalización",
    passing: "Pase",
    reflexes: "Reflejos",
    crossHandling: "Control de balón",
    oneOnOnes: "1 vs 1",
    footWork: "Juego con los pies",
    leadership: "Liderazgo",
    kickingPower: "Potencia de saque",
  }

  return (
    <Card className="bg-bg-alt border-primary/20">
      <CardHeader>
        <CardTitle className="text-text flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-secondary" />
          Habilidades (0-100)
        </CardTitle>
        <span className="text-gray-500 text-sm">Completar según corresponda, los demas valores dejar en 0</span>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills || {}).map(([skill, value]) => (
            <div key={skill} className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Label className="text-text-light capitalize">
                    {skillNames[skill as keyof typeof skillNames] || skill}
                  </Label>
                  {(skill === "reflexes" ||
                    skill === "crossHandling" ||
                    skill === "oneOnOnes" ||
                    skill === "footWork" ||
                    skill === "leadership" ||
                    skill === "kickingPower") ? (
                      <p className="text-gray-500 text-sm">Solo arquero</p>
                    ) : (
                      <p className="text-gray-500 text-sm">Solo jugador de campo</p>
                    )
                  }
                </div>
                <span className="text-secondary font-medium">{Number(value)}</span>
              </div>
              <Controller
                name={`skills.${skill}`} 
                control={form.control}
                render={({ field }) => (
                  <Slider
                    value={[Number(value)]}
                    onValueChange={(newValue) => {
                      field.onChange(newValue[0]);
                    }}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                )}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Habilities;
