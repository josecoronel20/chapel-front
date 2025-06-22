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
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const SportInfo = ({ form }: { form: UseFormReturn<any> }) => {
  const handlePosicionesSecundarias = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Si el valor es un array, lo convierte a string
    const posiciones = e.target.value.includes(",") ? e.target.value.split(",") : [e.target.value];
    form.setValue("posicionesSecundarias", posiciones);
  };

  const handleClubesInteresados = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clubes = e.target.value.includes(",") ? e.target.value.split(",") : [e.target.value];
    form.setValue("clubesInteresados", clubes);
  };
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
        <div className="flex gap-2 mb-2">
          <Input
            id="posicionesSecundarias"
            onChange={handlePosicionesSecundarias}
            className="bg-bg border-primary/30 text-text"
            placeholder="Posición secundaria"
          />
        </div>

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
            <Select {...form.register("estadoObservacion")}>
              <SelectTrigger className="bg-bg border-primary/30 text-text">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-bg-alt border-primary/30">
                <SelectItem value="Observado">Observado</SelectItem>
                <SelectItem value="Interesado">Interesado</SelectItem>
                <SelectItem value="En Seguimiento">En Seguimiento</SelectItem>
                <SelectItem value="Contactado">Contactado</SelectItem>
                <SelectItem value="No Contactado">No Contactado</SelectItem>
              </SelectContent>
            </Select>
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
          <div className="flex gap-2 mb-2">
            <Input
              onChange={handleClubesInteresados}
              className="bg-bg border-primary/30 text-text"
              placeholder="Nombre del club o clubes"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SportInfo;
