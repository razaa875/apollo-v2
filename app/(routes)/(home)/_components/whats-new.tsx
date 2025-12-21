"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { Pause, Play } from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const videoUrl = [
  {
    id: "1",
    url: "/images/dashboard/smvideo.mp4",
    coverUrl: "/images/home/video-1.webp",
    user: "Saghun Martinez",
    topic: "Our wide All Mountain ski, designed for a wide range of adventures.",
  },
  {
    id: "2",
    url: "/images/dashboard/smvideo.mp4",
    coverUrl: "/images/home/video-2.webp",
    user: "Saghun Martinez",
    topic: "Our wide All Mountain ski, designed for a wide range of adventures.",
  },
  {
    id: "3",
    url: "/images/dashboard/smvideo.mp4",
    coverUrl: "/images/home/video-3.webp",
    user: "Saghun Martinez",
    topic: "Our wide All Mountain ski, designed for a wide range of adventures.",
  },
  {
    id: "4",
    url: "/images/dashboard/smvideo.mp4",
    coverUrl: "/images/home/video-4.webp",
    user: "Saghun Martinez",

    topic: "Our wide All Mountain ski, designed for a wide range of adventures.",
  },
  {
    id: "5",
    url: "/images/dashboard/smvideo.mp4",
    coverUrl: "/images/home/video-5.webp",
    user: "Saghun Martinez",
    topic: "Our wide All Mountain ski, designed for a wide range of adventures.",
  },
  {
    id: "6",
    url: "/images/dashboard/smvideo.mp4",
    coverUrl: "/images/home/video-1.webp",
    user: "Saghun Martinez",
    topic: "Our wide All Mountain ski, designed for a wide range of adventures.",
  },
  {
    id: "7",
    url: "/images/dashboard/smvideo.mp4",
    coverUrl: "/images/home/video-2.webp",
    user: "Saghun Martinez",
    topic: "Our wide All Mountain ski, designed for a wide range of adventures.",
  },
];

export default function WhatsNew() {
  const [mounted, setMounted] = useState(false);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [playingIndex, setPlayingIndex] = useState<string | null>(null);

  const handlePlayPause = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingIndex === id) {
      video.pause();
      setPlayingIndex(null);
    } else {
      Object.keys(videoRefs.current).forEach((key) => {
        const v = videoRefs.current[key];
        if (v && !v.paused) v.pause();
      });
      video.play();
      setPlayingIndex(id);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🩵 Prevents hydration mismatch

  return (
    <>
      <Separator className="my-8 md:my-12 lg:my-20" />

      <section className="relative">
        <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
          What’s New With Apollo?
        </h2>
        <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
          Explore reviews, demos, and live action.
        </p>

        <Carousel className="w-[90%] mx-auto md:mr-0 md:ml-auto">
          <CarouselContent>
            {videoUrl.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-[40%] lg:basis-[30%] xl:basis-[22%] xl:mr-3"
              >
                <Card className="w-full border-none shadow-none bg-transparent pt-0 gap-5">
                  <CardContent className="p-0 relative group overflow-hidden rounded-2xl shadow-lg">
                    {/* Video */}
                    <video
                      ref={(el) => {
                        videoRefs.current[item.id] = el;
                      }}
                      className={`w-full h-100 object-cover transition-opacity duration-500 ${playingIndex === item.id ? "opacity-100" : "opacity-0"
                        }`}
                      src={item.url}
                      playsInline
                      onEnded={() => setPlayingIndex(null)}
                    />

                    {/* Cover */}
                    <Image
                      src={item.coverUrl}
                      width={540}
                      height={360}
                      alt="cover"
                      quality={75}
                      className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${playingIndex === item.id ? "opacity-0" : "opacity-100"
                        }`}
                    />

                    {/* Play/Pause Button */}
                    <Button
                      variant="ghost"
                      onClick={() => handlePlayPause(item.id)}
                      className="absolute inset-0 h-full md:h-full flex items-center justify-center transition-all hover:bg-transparent"
                    >
                      {playingIndex === item.id ? (
                        <Pause className="size-14 text-white rounded-full backdrop-blur-md border border-[#FFFFFF29] p-3" />
                      ) : (
                        <Play className="size-14 text-white rounded-full backdrop-blur-md border border-[#FFFFFF29] p-3" />
                      )}
                    </Button>
                  </CardContent>

                  <CardFooter className="flex-col gap-2 items-start px-0">
                    <p className="text-start text-sm font-normal text-black/50">
                      {item.user}
                    </p>
                    <p className="text-start text-xl font-medium">
                      {item.topic}
                    </p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-12 md:right-24 -top-8 md:-top-10">
            <CarouselPrevious className="rounded-sm border-none bg-white ml-3 hover:bg-amber-50" />
            <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
          </div>
        </Carousel>
      </section>

      <Separator className="my-8 md:mb-12 lg:mb-20 lg:mt-20" />
    </>
  );
}
