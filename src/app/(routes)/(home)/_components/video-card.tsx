import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
export default function VideoCard({
  videoUrl,
  cover,
}: {
  videoUrl: string;
  cover: string;
}) {
  const [play, setPlay] = useState(false);

  return (
    <Card className="overflow-hidden w-[277px] h-[499px] p-0">
      <CardContent className="relative p-0 h-full">
        {!play ? (
          <div
            className="relative cursor-pointer h-full"
            onClick={() => setPlay(true)}
          >
            <Image
              src={cover}
              width={500}
              height={800}
              className="size-full object-cover"
              alt="Picture of the author"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-full p-3">
                <Play />
              </div>
            </div>
          </div>
        ) : (
          <video playsInline loop autoPlay className="w-full">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </CardContent>
    </Card>
  );
}
