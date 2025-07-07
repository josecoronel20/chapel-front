"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Player } from "@/lib/types";

const TecnicEvaluation = ({ playerInfo }: { playerInfo: Player }) => {
  const chartData = Object.entries(playerInfo.skills).map(([key, value]) => {
    if (value !== 0 && key !== "id") {
      if (key === "technique") {
        key = "Técnica";
      } else if (key === "speed") {
        key = "Velocidad";
      } else if (key === "strength") {
        key = "Fuerza";
      } else if (key === "vision") {
        key = "Visión";
      } else if (key === "finishing") {
        key = "Definición";
      } else if (key === "passing") {
        key = "Pase";
      } else if (key === "reflexes") {
        key = "Reflejos";
      } else if (key === "crossHandling") {
        key = "Salidas en centros";
      } else if (key === "oneOnOnes") {
        key = "1v1";
      } else if (key === "footWork") {
        key = "Trabajo de pies";
      } else if (key === "leadership") {
        key = "Liderazgo";
      } else if (key === "kickingPower") {
        key = "Potencia de chute";
      }
      return {
        name: key,
        value: value as number,
      };
    }
  });

  const chartConfig = {
    name: {
      label: "Habilidad",
      color: "var(--color-primary)",
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Evaluación Técnica</CardTitle>
        <CardDescription className="text-center text-sm md:text-base">
          Evaluación del jugador según sus habilidades técnicas
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full h-full"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="name" />
            <Radar
              dataKey="value"
              fill="var(--color-primary)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TecnicEvaluation;
