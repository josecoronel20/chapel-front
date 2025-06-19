import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const TecnicEvaluation = ({ skills }: { skills: any }) => {
  const skillsArray = Object.entries(skills);

  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Evaluación Técnica</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skillsArray.map(([skill, value]) => (
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
                  : "Pase"}
              </span>
              <span className="text-sm text-slate-600">{value as number}%</span>
            </div>
            <Progress value={value as number} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TecnicEvaluation;
