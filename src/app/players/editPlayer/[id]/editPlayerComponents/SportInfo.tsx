import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Controller, UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import ControllerArrayInput from "@/app/players/playersComponents/ControllerArrayInput";

const SportInfo = ({ form }: { form: UseFormReturn<any> }) => {
  return (
    <Card className="bg-bg-alt border-primary/20">
      <CardHeader>
        <CardTitle className="text-text flex items-center gap-2">
          <Target className="w-5 h-5 text-secondary" />
          Información Deportiva
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="mainPosition" className="text-text-light">
              Posición Principal
            </Label>
            <Input
              id="mainPosition"
              {...form.register("mainPosition")}
              className="bg-bg border-primary/30 text-text"
              placeholder="Posición principal"
            />
          </div>
          <div>
            <Label htmlFor="currentLevel" className="text-text-light">
              Nivel Actual
            </Label>
            <Input
              id="currentLevel"
              {...form.register("currentLevel")}
              className="bg-bg border-primary/30 text-text"
              placeholder="Juvenil A, Primera División, etc."
            />
          </div>
        </div>

        {/* Posiciones Secundarias */}
        <div>
          <Label className="text-text-light">Posiciones Secundarias</Label>
          <p className="text-gray-500 text-sm">
            Si hay más de una posición sepáralas por comas
          </p>
        </div>
        <Controller
          control={form.control}
          name="secondaryPositions"
          render={({ field }) => (
            <Input
              id="secondaryPositions"
              value={
                Array.isArray(field.value)
                  ? field.value.join(", ")
                  : field.value || ""
              }
              onChange={(e) => {
                const value = e.target.value;
                const secondaryPositions = value.includes(",")
                  ? value.split(",").map((v) => v.trim())
                  : [value.trim()];
                field.onChange(secondaryPositions);
              }}
              className="bg-bg border-primary/30 text-text"
              placeholder="Delantero, Extremo..."
            />
          )}
        />

        {/* Resumen del Perfil */}
        <div>
          <Label htmlFor="profileSummary" className="text-text-light">
            Resumen del Perfil
          </Label>
          <Textarea
            id="profileSummary"
            {...form.register("profileSummary")}
            className="bg-bg border-primary/30 text-text"
            rows={3}
            placeholder="Breve descripción del jugador..."
          />
        </div>

        <div>
          <Label htmlFor="objetivo" className="text-text-light">
            Objetivos
          </Label>
          <Textarea
            id="objective"
            {...form.register("objective")}
            className="bg-bg border-primary/30 text-text"
            rows={2}
            placeholder="Objetivos personales o deportivos..."
          />
        </div>

        {/* Estado de Observación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="scoutingStatus" className="text-text-light">
              Estado de Observación
            </Label>
            <Textarea
            id="scoutingStatus"
            {...form.register("scoutingStatus")}
            className="bg-bg border-primary/30 text-text"
            rows={2}
            placeholder="Estado de observación..."
          />
          </div>
        </div>

        {/* Clubes Interesados */}
        <div>
          <div>
            <Label className="text-text-light">Clubes Interesados</Label>
            <p className="text-gray-500 text-sm">
              Si hay más de un club sepáralos por comas
            </p>
          </div>
          <ControllerArrayInput
            form={form}
            propToModify="clubsInterested"
            placeholder="Nombre del club o clubes"
            isEditPage={true}
          />
        </div>

        {/* Clubes Historial */}
        <div>
          <div>
            <Label className="text-text-light">Historial de clubes</Label>
            <p className="text-gray-500 text-sm">
              Si hay más de un club sepáralos por comas
            </p>
          </div>
          <ControllerArrayInput
            form={form}
            propToModify="clubsHistory"
            placeholder="Nombre del club o clubes"
            isEditPage={true}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SportInfo;
