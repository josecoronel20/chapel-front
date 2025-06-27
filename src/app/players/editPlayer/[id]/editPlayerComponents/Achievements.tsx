import ControllerArrayInput from "@/app/players/playersComponents/ControllerArrayInput";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

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
        <ControllerArrayInput
          form={form}
          propToModify="achievements"
          placeholder="Logro"
          isEditPage={true}
        />
      </CardContent>
    </Card>
  );
};

export default Achievements;
