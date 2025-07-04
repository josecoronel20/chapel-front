import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { Controller, UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import ControllerArrayInput from "@/app/players/formComponent/ControllerArrayInput";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const SportInfo = ({
  form,
  typePage,
}: {
  form: UseFormReturn<any>;
  typePage: "newPlayer" | "editPlayer";
}) => {
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
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="posiciones"
          >
            <AccordionItem value="posiciones">
              <AccordionTrigger className="text-text-light">
                Posiciones permitidas por el filtro
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <ul className="list-inside space-y-1 text-text-light text-xs">
                  <li>-Arquero</li>
                  <li>-Lateral izquierdo</li>
                  <li>-Lateral derecho</li>
                  <li>-Central (defensa central)</li>
                  <li>-Mediocampista defensivo (volante de contención)</li>
                  <li>-Mediocampista por izquierda (volante por izquierda)</li>
                  <li>-Mediocampista central (volante central)</li>
                  <li>-Mediocampista por derecha (volante por derecha)</li>
                  <li>-Mediocampista ofensivo (enganche)</li>
                  <li>-Segundo delantero (media punta)</li>
                  <li>-Delantero centro (número 9)</li>
                  <li>-Extremo por izquierda (punta izquierda)</li>
                  <li>-Extremo por derecha (punta derecha)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

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
        </div>

        {/* Posiciones Secundarias */}
        <div>
          <Label className="text-text-light">Posiciones Secundarias</Label>
          <p className="text-gray-500 text-sm">
            Si hay más de una posición sepáralas por comas
          </p>
        </div>
        <ControllerArrayInput
            form={form}
            propToModify="secondaryPositions"
            placeholder="Delantero, Extremo..."
          />

        {/*current level*/}
        <div>
          <Label htmlFor="currentLevel" className="text-text-light">
            Categoría Actual
          </Label>
          <Input
            id="currentLevel"
            {...form.register("currentLevel")}
            className="bg-bg border-primary/30 text-text"
            placeholder="Juvenil A, Juvenil B, etc."
          />
        </div>

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
              Estado de Observación por algun club
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
            
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SportInfo;
