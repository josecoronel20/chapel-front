import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trophy } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

const Achievements = ({ form }: { form: UseFormReturn<any> }) => {

    const handleLogros = (e: React.ChangeEvent<HTMLInputElement>) => {
        const logros = e.target.value.includes(",") ? e.target.value.split(",") : [e.target.value];
        form.setValue("logros", logros);
      };
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
        <div className="flex gap-2 mb-2">
          <div className="flex gap-2 mb-2">
            <Input
              id="logros"
              onChange={handleLogros}
              className="bg-bg border-primary/30 text-text"
              placeholder="Logro"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Achievements;
