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
                  <Input
                    id="birthDate"
                    type="date"
                    {...form.register("birthDate")}
                    className="bg-bg border-primary/30 text-text"
                    required
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
                <div>
                  <Label htmlFor="transferStatus" className="text-text-light">
                    Estado de pase
                  </Label>
                  <Select
                    {...form.register("transferStatus")}
                  >
                    <SelectTrigger className="bg-bg border-primary/30 text-text">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-bg-alt border-primary/30">
                      <SelectItem value="Libre">Libre</SelectItem>
                      <SelectItem value="A préstamo">A préstamo</SelectItem>
                      <SelectItem value="Transferido">Transferido</SelectItem>
                      <SelectItem value="En negociación">En negociación</SelectItem>
                    </SelectContent>
                  </Select>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="image" className="text-text-light">
                    URL de Imagen
                  </Label>
                  <Input
                    id="image"
                    {...form.register("image")}
                    className="bg-bg border-primary/30 text-text"
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <Label htmlFor="videoUrl" className="text-text-light">
                    URL de Video (Opcional)
                  </Label>
                  <Input
                    id="videoUrl"
                    {...form.register("videoUrl")}
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