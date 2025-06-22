import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Controller, UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

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
            <Label htmlFor="posicionPrincipal" className="text-text-light">
              Posición Principal
            </Label>
            <Input
              id="posicionPrincipal"
              {...form.register("posicionPrincipal")}
              className="bg-bg border-primary/30 text-text"
              placeholder="Posición principal"
            />
          </div>
          <div>
            <Label htmlFor="nivelActual" className="text-text-light">
              Nivel Actual
            </Label>
            <Input
              id="nivelActual"
              {...form.register("nivelActual")}
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
          name="posicionesSecundarias"
          render={({ field }) => (
            <Input
              id="posicionesSecundarias"
              value={
                Array.isArray(field.value)
                  ? field.value.join(", ")
                  : field.value || ""
              }
              onChange={(e) => {
                const value = e.target.value;
                const posiciones = value.includes(",")
                  ? value.split(",").map((v) => v.trim())
                  : [value.trim()];
                field.onChange(posiciones);
              }}
              className="bg-bg border-primary/30 text-text"
              placeholder="Delantero, Extremo..."
            />
          )}
        />

        {/* Resumen del Perfil */}
        <div>
          <Label htmlFor="resumenPerfil" className="text-text-light">
            Resumen del Perfil
          </Label>
          <Textarea
            id="resumenPerfil"
            {...form.register("resumenPerfil")}
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
            id="objetivo"
            {...form.register("objetivo")}
            className="bg-bg border-primary/30 text-text"
            rows={2}
            placeholder="Objetivos personales o deportivos..."
          />
        </div>

        {/* Estado de Observación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="estadoObservacion" className="text-text-light">
              Estado de Observación
            </Label>
            <Textarea
            id="estadoObservacion"
            {...form.register("estadoObservacion")}
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
          <Controller
            control={form.control}
            name="clubesInteresados"
            render={({ field }) => (
              <Input
                id="clubesInteresados"
                value={
                  Array.isArray(field.value)
                    ? field.value.join(", ")
                    : field.value || ""
                }
                onChange={(e) => {
                  const value = e.target.value;
                  const clubes = value.includes(",")
                    ? value.split(",").map((v) => v.trim())
                    : [value.trim()];
                  field.onChange(clubes);
                }}
                className="bg-bg border-primary/30 text-text"
                placeholder="Nombre del club o clubes"
              />
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SportInfo;
