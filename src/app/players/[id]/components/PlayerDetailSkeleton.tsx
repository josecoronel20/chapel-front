"use client";

import {
  ArrowLeft,
  Calendar,
  MapPin,
  User,
  Target,
  TrendingUp,
  Eye,
  Phone,
  Mail,
  Play,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PlayerDetailSkeleton() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header con navegación */}
      <header className="bg-white shadow-sm border-b">
        <div className="container px-4 md:px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/players"
              className="flex items-center space-x-2 text-primary-dark hover:text-primary-light"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a jugadores</span>
            </Link>
            <div className="h-6 w-px bg-slate-300"></div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">
                Ficha del Jugador
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Columna izquierda - Información principal */}
          <div className="lg:col-span-2 space-y-6 gap-4">
            {/* Información básica */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Skeleton className="w-48 h-64 rounded-lg" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <Skeleton className="h-8 w-full mb-2" />
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Skeleton className="h-6 w-full rounded-full" />
                        <Skeleton className="h-6 w-full rounded-full" />
                        <Skeleton className="h-6 w-full rounded-full" />
                      </div>
                    </div>

                    {/* Datos personales */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-slate-300" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-slate-300" />
                        <Skeleton className="h-4 w-36" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-slate-300" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-slate-300" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Resumen profesional */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Perfil del Jugador</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <Skeleton className="h-5 w-24 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div>
                    <Skeleton className="h-5 w-20 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estadísticas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Estadísticas Temporada</span>
                  <Skeleton className="h-6 w-12 ml-2" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="text-center">
                      <Skeleton className="h-8 w-12 mx-auto mb-2" />
                      <Skeleton className="h-4 w-16 mx-auto" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Habilidades técnicas */}
            <Card>
              <CardHeader>
                <CardTitle>Evaluación Técnica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-8" />
                    </div>
                    <Skeleton className="h-2 w-full rounded-full" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Video destacado */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Video Destacado</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-4 w-40 mx-auto mb-4" />
                    <Skeleton className="h-10 w-24 mx-auto rounded-md" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha - Información adicional */}
          <div className="space-y-6">
            {/* Estado de scouting */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Estado de Scouting</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <Skeleton className="h-6 w-20 rounded-full" />
                      <Skeleton className="h-6 w-24 rounded-full" />
                      <Skeleton className="h-6 w-28 rounded-full" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logros */}
            <Card>
              <CardHeader>
                <CardTitle>Logros Destacados</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[...Array(3)].map((_, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Skeleton className="w-2 h-2 rounded-full mt-2 flex-shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contacto */}
            <Card>
              <CardHeader>
                <CardTitle>Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-slate-300" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-slate-300" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <div className="space-y-2 pt-4 border-t">
                  <Skeleton className="h-10 w-full rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
