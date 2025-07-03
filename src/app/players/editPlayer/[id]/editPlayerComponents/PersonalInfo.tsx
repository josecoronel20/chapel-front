import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import React from "react";
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
import { ImgAndVideo } from "./ImgAndVideo";

const PersonalInfo = ({ form, setIsUploading }: { form: UseFormReturn<any>, setIsUploading: (isUploading: boolean) => void }) => {
  return (
    <Card className="bg-bg-alt border-primary/20">
      <CardHeader>
        <CardTitle className="text-text flex items-center gap-2">
          <User className="w-5 h-5 text-secondary" />
          Información Personal
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName" className="text-text-light">
              Nombre Completo
            </Label>
            <Input
              id="fullName"
              {...form.register("fullName")}
              className="bg-bg border-primary/30 text-text"
              required
            />
          </div>
          <div>
            <Label htmlFor="birthDate" className="text-text-light">
              Fecha de Nacimiento
            </Label>
            <Controller
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <Input
                  id="birthDate"
                  type="date"
                  value={field.value ?? ""}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                  }}
                  className="bg-bg border-primary/30 text-text"
                  required
                />
              )}
            />
          </div>
          <div>
            <Label htmlFor="nationality" className="text-text-light">
              Nacionalidad
            </Label>
            <Input
              id="nationality"
              {...form.register("nationality")}
              className="bg-bg border-primary/30 text-text"
              required
            />
          </div>
          <div>
            <Label htmlFor="city" className="text-text-light">
              Ciudad
            </Label>
            <Input
              id="city"
              {...form.register("city")}
              className="bg-bg border-primary/30 text-text"
              required
            />
          </div>
          <div>
            <Label htmlFor="province" className="text-text-light">
              Provincia
            </Label>
            <Input
              id="province"
              {...form.register("province")}
              className="bg-bg border-primary/30 text-text"
              required
            />
          </div>
          <div>
            <Label htmlFor="dominantFoot" className="text-text-light">
              Pierna Hábil
            </Label>
            <Controller
              key={form.watch("dominantFoot")}
              control={form.control}
              name="dominantFoot"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-bg border-primary/30 text-text">
                    <SelectValue placeholder="Seleccione la pierna" />
                  </SelectTrigger>
                  <SelectContent className="bg-bg-alt border-primary/30">
                    <SelectItem value="Diestro">Diestro</SelectItem>
                    <SelectItem value="Zurdo">Zurdo</SelectItem>
                    <SelectItem value="Ambidiestro">Ambidiestro</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <Label htmlFor="transferStatus" className="text-text-light">
              Estado de pase
            </Label>
            <Controller
              key={form.watch("transferStatus")}
              control={form.control}
              name="transferStatus"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-bg border-primary/30 text-text">
                    <SelectValue placeholder="Seleccione el estado" />
                  </SelectTrigger>
                  <SelectContent className="bg-bg-alt border-primary/30">
                    <SelectItem value="Libre">Libre</SelectItem>
                    <SelectItem value="A préstamo">A préstamo</SelectItem>
                    <SelectItem value="Transferido">Transferido</SelectItem>
                    <SelectItem value="En negociación">
                      En negociación
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="height" className="text-text-light">
              Altura (cm)
            </Label>
            <Input
              id="height"
              {...form.register("height")}
              className="bg-bg border-primary/30 text-text"
              placeholder="175"
            />
          </div>
          <div>
            <Label htmlFor="weight" className="text-text-light">
              Peso (kg)
            </Label>
            <Input
              id="weight"
              {...form.register("weight")}
              className="bg-bg border-primary/30 text-text"
              placeholder="70"
            />
          </div>
        </div>

        {/* Imagen y video */}
        <ImgAndVideo form={form} setIsUploading={setIsUploading} />
      </CardContent>
    </Card>
  );
};

export default PersonalInfo;
