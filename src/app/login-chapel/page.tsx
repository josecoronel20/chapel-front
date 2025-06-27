"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import login from "@/lib/api/auth";
import { useRouter } from "next/navigation";
import useRedirect from "@/hooks/useRedirect";

export default function LoginChapel() {
  useRedirect("login");
  const router = useRouter();


  const User = z.object({
    username: z
      .string()
      .min(5, { message: "El usuario debe tener al menos 5 caracteres" })
      .max(15, { message: "El usuario debe tener menos de 15 caracteres" }),
    password: z
      .string()
      .min(5, { message: "La contraseña debe tener al menos 5 caracteres" })
      .max(15, { message: "La contraseña debe tener menos de 15 caracteres" }),
  });

  const form = useForm<z.infer<typeof User>>({
    resolver: zodResolver(User),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof User>) => {
    const response = await login(data.username, data.password);
    if (response.status === 200) {
      router.push("/players");
    } else {
      console.log("response status: ", response.status);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-bg">
      <Card className="w-full max-w-md bg-bg-alt border-none">
        <header>
          <CardHeader className="space-y-6 text-center">
            {/* Logo placeholder */}
            <div className="flex w-full justify-center">
              <Image
                src="/chapelLogo.png"
                alt="Chapel Logo"
                width={100}
                height={100}
              />
            </div>

            <div className="space-y-2">
              <CardTitle className="text-2xl font-bold text-text">
                Iniciar Sesión
              </CardTitle>
              <CardDescription className="text-text-muted">
                Ingresa tus credenciales para acceder
              </CardDescription>
            </div>
          </CardHeader>
        </header>

        <CardContent className="space-y-6">
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-text-light">
                Usuario
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Ingresa tu usuario"
                className="bg-bg border-none text-text placeholder:text-text-muted focus:border-secondary focus:ring-secondary/20"
                {...form.register("username")}
              />
              {form.formState.errors.username && (
                <p className="text-red-500">
                  {form.formState.errors.username.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-text-light">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="bg-bg border-none text-text placeholder:text-text-muted focus:border-secondary focus:ring-secondary/20"
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <p className="text-red-500">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-light text-white font-medium py-2.5 transition-colors"
            >
              Iniciar Sesión
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
