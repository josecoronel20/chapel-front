import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trophy } from "lucide-react";
import { Controller, UseFormReturn } from "react-hook-form";

const Achievements = ({ form }: { form: UseFormReturn<any> }) => {


  return (
    <Card className="bg-bg-alt border-primary/20">
      <CardHeader>
        <CardTitle className="text-text flex items-center gap-2">
          <Trophy className="w-5 h-5 text-secondary" />
          Logros
        </CardTitle>
        <p className="text-gray-500 text-sm">
          Si hay más de un logro sepáralos por comas
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
      <Controller
          control={form.control}
          name="logros"
          render={({ field }) => (
            <Input
              id="logros"
              value={
                Array.isArray(field.value)
                  ? field.value.join(", ")
                  : field.value || ""
              }
              onChange={(e) => {
                const value = e.target.value;
                const logros = value.includes(",")
                  ? value.split(",").map((v) => v.trim())
                  : [value.trim()];
                field.onChange(logros);
              }}
              className="bg-bg border-primary/30 text-text"
              placeholder="Logro"
            />
          )}
        />
      </CardContent>
    </Card>
  );
};

export default Achievements;
