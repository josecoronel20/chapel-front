import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'
import { User } from 'lucide-react'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { UseFormReturn } from 'react-hook-form'

const PersonalInfo = ({ form }: { form: UseFormReturn<any> }) => {
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
                  <Label htmlFor="nombreCompleto" className="text-text-light">
                    Nombre Completo
                  </Label>
                  <Input
                    id="nombreCompleto"
                    {...form.register("nombreCompleto")}
                    className="bg-bg border-primary/30 text-text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="fechaNacimiento" className="text-text-light">
                    Fecha de Nacimiento
                  </Label>
                  <Input
                    id="fechaNacimiento"
                    type="date"
                    {...form.register("fechaNacimiento")}
                    className="bg-bg border-primary/30 text-text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="nacionalidad" className="text-text-light">
                    Nacionalidad
                  </Label>
                  <Input
                    id="nacionalidad"
                    {...form.register("nacionalidad")}
                    className="bg-bg border-primary/30 text-text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="ciudad" className="text-text-light">
                    Ciudad
                  </Label>
                  <Input
                    id="ciudad"
                    {...form.register("ciudad")}
                    className="bg-bg border-primary/30 text-text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="provincia" className="text-text-light">
                    Provincia
                  </Label>
                  <Input
                    id="provincia"
                    {...form.register("provincia")}
                    className="bg-bg border-primary/30 text-text"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="piernaHabil" className="text-text-light">
                    Pierna Hábil
                  </Label>
                  <Select
                    {...form.register("piernaHabil")}
                  >
                    <SelectTrigger className="bg-bg border-primary/30 text-text">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-bg-alt border-primary/30">
                      <SelectItem value="Diestro">Diestro</SelectItem>
                      <SelectItem value="Zurdo">Zurdo</SelectItem>
                      <SelectItem value="Ambidiestro">Ambidiestro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="altura" className="text-text-light">
                    Altura (cm)
                  </Label>
                  <Input
                    id="altura"
                    {...form.register("altura")}
                    className="bg-bg border-primary/30 text-text"
                    placeholder="175"
                  />
                </div>
                <div>
                  <Label htmlFor="peso" className="text-text-light">
                    Peso (kg)
                  </Label>
                  <Input
                    id="peso"
                    {...form.register("peso")}
                    className="bg-bg border-primary/30 text-text"
                    placeholder="70"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="imagen" className="text-text-light">
                    URL de Imagen
                  </Label>
                  <Input
                    id="imagen"
                    {...form.register("imagen")}
                    className="bg-bg border-primary/30 text-text"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <Label htmlFor="urlVideo" className="text-text-light">
                    URL de Video (Opcional)
                  </Label>
                  <Input
                    id="urlVideo"
                    {...form.register("urlVideo")}
                    className="bg-bg border-primary/30 text-text"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>
  )
}

export default PersonalInfo