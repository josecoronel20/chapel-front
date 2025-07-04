import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { deleteFile, uploadFile } from "@/lib/api/supabaseFiles";

export const ImgAndVideo = ({
  typePage,
  form,
  setIsUploading,
  isUploading,
}: {
  typePage: "newPlayer" | "editPlayer";
  form: UseFormReturn<any>;
  setIsUploading: (isUploading: boolean) => void;
  isUploading: boolean;
}) => {
  const { setValue, register, watch } = form;

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    typeFile: "image" | "videoUrl"
  ) => {
    if (!isUploading) {
      setIsUploading(true);
    }
    const file = e.target.files?.[0];
    if (!file) return;

    // Elimina archivo anterior si existe
    if (typePage === "editPlayer" && watch(typeFile)) {
      try {
        const response = await deleteFile(watch(typeFile));
        console.log("response", response);
      } catch (error) {
        console.error("Error al eliminar archivo:", error);
      }
    }

    
    try {
      const res = await uploadFile(file);  
      if (res.publicUrl) {
        setValue(typeFile, res.publicUrl, {
          shouldValidate: true,
          shouldDirty: true,
        });
        console.log("Archivo subido y seteado:", res.publicUrl);
      } else {
        console.error("Upload error:", res.message);
      }
    } catch (err) {
      console.error("Error al subir archivo:", err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Imagen */}
      <div>
        <Label
          htmlFor="image"
          className={
            typePage === "editPlayer" && watch("image")
              ? "text-secondary-light"
              : "text-text-light"
          }
        >
          {typePage === "editPlayer" && watch("image")
            ? "Imagen Cargada"
            : "Cargar Imagen (Opcional)"}
        </Label>

        <Input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => handleFileChange(e, "image")}
          className="bg-bg border-primary/30 text-text cursor-pointer"
        />
        <input type="hidden" {...register("image")} />
      </div>

      {/* Video */}
      <div>
        <Label
          htmlFor="videoUrl"
          className={
            typePage === "editPlayer" && watch("videoUrl")
              ? "text-secondary-light"
              : "text-text-light"
          }
        >
          {typePage === "editPlayer" && watch("videoUrl")
            ? "Video Cargado"
            : "Cargar Video (Opcional)"}
        </Label>

        <Input
          type="file"
          id="videoUrl"
          accept="video/*"
          onChange={(e) => handleFileChange(e, "videoUrl")}
          className="bg-bg border-primary/30 text-text cursor-pointer"
        />
        <input type="hidden" {...register("videoUrl")} />
      </div>
    </div>
  );
};
