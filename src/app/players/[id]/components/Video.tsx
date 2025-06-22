import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";
import React from "react";

const Video = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <Card className="lg:grid-cols-1">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Play className="w-5 h-5" />
          <span>Video Destacado</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {videoUrl ? (
          <video
            src={videoUrl}
            className="w-full max-h-screen object-cover rounded"
            controls
          />
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-sm text-slate-600">
              No hay video destacado por el momento
            </p>
          </div>
        )}
      </CardContent>
    </Card> 
  );
};

export default Video;
