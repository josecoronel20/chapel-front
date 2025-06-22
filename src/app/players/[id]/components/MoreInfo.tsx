import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const MoreInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contacto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link
          href={`https://wa.me/541124748065`}
          className="w-full cursor-pointer bg-primary-light text-white p-2 rounded-md hover:bg-primary-lighter flex justify-center items-center gap-2 hover:scale-105 transition-all duration-300"
          target="_blank"
        >
          <Phone className="w-4 h-4 " />
          Solicitar más información
        </Link>
      </CardContent>
    </Card>
  );
};

export default MoreInfo;
