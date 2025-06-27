import { Input } from "@/components/ui/input";
import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";

const ControllerArrayInput = ({
  form,
  propToModify,
  placeholder,
  isEditPage,
}: {
  form: UseFormReturn<any>;
  propToModify: string;
  placeholder: string;
  isEditPage: boolean;
}) => {

  return (
    <Controller
      control={form.control}
      name={propToModify}
      render={({ field }) => (
        <Input
          id={propToModify}
          value={
            isEditPage && Array.isArray(field.value)
              ? field.value.join(", ")
              : field.value || ""
          }
          onChange={(e) => {
            // se guarda el valor con espacios para permitir que el usuario escriba el valor con espacios
            const value = e.target.value;
            const arrayValues = value.includes(",")
              ? value.split(",")
              : [value];
            field.onChange(arrayValues);
          }}
          onBlur={(e) => {
            // se actualiza el valor con trim para que no haya espacios al guardar
            const value = e.target.value;
            const trimmedValues = value.includes(",")
              ? value.split(",").map((v) => v.trim())
              : [value.trim()];
            field.onChange(trimmedValues);
          }}
          className="bg-bg border-primary/30 text-text"
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default ControllerArrayInput;
