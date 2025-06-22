import { Player } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Calendar, Ruler, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const CardPlayerSkeleton = () => {
  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white  cursor-pointer hover:scale-105 ease-in-out hover:shadow-primary-dark/20 h-full"
    >
      <div className="relative">
        <Skeleton className="w-full h-48 object-cover rounded-t-lg" />
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-primary-dark">
              <Skeleton className="w-full h-4 rounded-md" />
            </h3>
            <p className="text-primary-dark text-sm">
              <Skeleton className="w-full h-4 rounded-md" />
            </p>
          </div>

          <div className="flex items-center justify-between text-sm text-primary-dark">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>
                <Skeleton className="w-full h-4" />
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Ruler className="w-4 h-4" />
              <span>
                <Skeleton className="w-full h-4" />
              </span>
            </div>
          </div>

          {/* Clubes interesados */}

          <div className="pt-3 border-t">
            <p className="text-xs text-slate-600 mb-2 ">Interés de clubes:</p>
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardPlayerSkeleton;
