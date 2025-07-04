import { Input } from "@/components/ui/input"
import React, { useEffect, useState } from "react"
import { Controller, UseFormReturn } from "react-hook-form"

const ControllerArrayInput = ({
  form,
  propToModify,
  placeholder,
}: {
  form: UseFormReturn<any>
  propToModify: string
  placeholder: string
}) => {
  const [localValue, setLocalValue] = useState("")

  return (
    <Controller
      control={form.control}
      name={propToModify}
      render={({ field }) => {
        // sincroniza el array del form con el input local cuando cambia externamente (edit mode)
        useEffect(() => {
          if (Array.isArray(field.value)) {
            setLocalValue(field.value.join(", "))
          }
        }, [field.value])

        return (
          <Input
            id={propToModify}
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            onBlur={() => {
              const array = localValue
                .split(",")
                .map((v) => v.trim())
                .filter((v) => v !== "")
              field.onChange(array)
            }}
            className="bg-bg border-primary/30 text-text"
            placeholder={placeholder}
          />
        )
      }}
    />
  )
}

export default ControllerArrayInput
