import { useRef, useState } from "react";

import Image from "next/image";

import { Pause, Play } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const videoData = [
    {
        id: "1",
        title: "LOREM IPSUM 1",
        thumbnailUrl: "/images/oasis/video-thumbnail.webp",
        videoUrl: "/video/video.mp4",
    },
    {
        id: "2",
        title: "LOREM IPSUM 2",
        thumbnailUrl: "/thumbnails/t2.jpg",
        videoUrl: "/video/video.mp4",
    },
    {
        id: "3",
        title: "LOREM IPSUM 3",
        thumbnailUrl: "/thumbnails/t3.jpg",
        videoUrl: "/video/video.mp4",
    },
    {
        id: "4",
        title: "LOREM IPSUM 1",
        thumbnailUrl: "/images/oasis/video-thumbnail.webp",
        videoUrl: "/video/video.mp4",
    },
    {
        id: "5",
        title: "LOREM IPSUM 2",
        thumbnailUrl: "/thumbnails/t2.jpg",
        videoUrl: "/video/video.mp4",
    },
    {
        id: "6",
        title: "LOREM IPSUM 3",
        thumbnailUrl: "/thumbnails/t3.jpg",
        videoUrl: "/video/video.mp4",
    },
];

export default function Videos() {
    const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
    
    const [playingIndex, setPlayingIndex] = useState<string | null>(null);
    const [activeVideo, setActiveVideo] = useState(videoData[0]);

    const isDesktop = useMediaQuery("(min-width: 1024px)");

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleVideoSelect = (video: any) => {
        Object.keys(videoRefs.current).forEach((key) => {
            const v = videoRefs.current[key];
            if (v && !v.paused) v.pause();
        });
        setActiveVideo(video);
        setPlayingIndex(null);
    };

    return (
        <>
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">Videos</h2>
            <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3">Explore reviews, demos, and live action.</p>
            {
                isDesktop ?
                    <div className="w-[90%] mx-auto flex justify-between mt-20">
                        <ScrollArea className="w-[25%] xl:w-[20%] h-123 xl:h-130 2xl:h-140 pr-4">
                            <div className="flex flex-col gap-y-6">
                                {videoData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`cursor-pointer rounded-2xl p-5 xl:p-4 text-center font-medium text-lg border transition-all ${activeVideo.id === item.id
                                            ? "bg-primary text-white border-primabg-primary"
                                            : "bg-background hover:bg-primary/5 border-white"
                                            }`}
                                        onClick={() => handleVideoSelect(item)}
                                    >
                                        {item.title}
                                    </div>
                                ))}

                            </div>

                        </ScrollArea>
                        <div className="w-[73%] xl:w-[78%] relative rounded-2xl overflow-hidden shadow-lg bg-black">
                            <video
                                ref={(el) => {
                                    videoRefs.current[activeVideo.id] = el;
                                }}
                                className={`w-full h-123 xl:h-130 2xl:h-140 object-cover transition-opacity duration-500 ${playingIndex === activeVideo.id ? "opacity-100" : "opacity-0"
                                    }`}
                                src={activeVideo.videoUrl}
                                playsInline
                                onEnded={() => setPlayingIndex(null)}
                            />

                            <Image
                                src={activeVideo.thumbnailUrl}
                                width={800}
                                height={450}
                                alt={activeVideo.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${playingIndex === activeVideo.id ? "opacity-0" : "opacity-100"
                                    }`}
                            />

                            <Button
                                variant="ghost"
                                onClick={() => handlePlayPause(activeVideo.id)}
                                className="absolute inset-0 h-full md:h-full flex items-center justify-center transition-all hover:bg-transparent"
                            >
                                {playingIndex === activeVideo.id ? (
                                    <Pause className="size-16 text-white rounded-full backdrop-blur-md border border-[#FFFFFF29] p-3" />
                                ) : (
                                    <Play className="size-16 text-white rounded-full backdrop-blur-md border border-[#FFFFFF29] p-3" />
                                )}
                            </Button>
                        </div>
                    </div>
                    :
                    <Carousel className="w-[90%] mx-auto md:mr-0 md:ml-auto xl:mx-auto mt-20">
                        <CarouselContent>
                            {videoData.map((item, i) => (
                                <CarouselItem
                                    key={i}
                                    className="basis-full md:basis-[40%] xl:basis-1/3"
                                >
                                    <Card className="w-full border-none shadow-none bg-transparent pt-0 gap-5">
                                        <CardContent className="p-0 relative group overflow-hidden rounded-2xl shadow-lg">
                                            <video
                                                ref={(el) => {
                                                    videoRefs.current[item.id] = el;
                                                }}
                                                className={`w-full h-100 object-cover transition-opacity duration-500 ${playingIndex === item.id ? "opacity-100" : "opacity-0"
                                                    }`}
                                                src={item.videoUrl}
                                                playsInline
                                                onEnded={() => setPlayingIndex(null)}
                                            />

                                            <Image
                                                src={item.thumbnailUrl}
                                                width={540}
                                                height={360}
                                                alt="cover"
                                                quality={75}
                                                className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${playingIndex === item.id ? "opacity-0" : "opacity-100"
                                                    }`}
                                            />

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

                                        <CardFooter className="sr-only">Footer</CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute right-12 md:right-24 -top-8 md:-top-10">
                            <CarouselPrevious className="rounded-sm border-none bg-white ml-3 hover:bg-amber-50" />
                            <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
                        </div>
                    </Carousel>
            }
        </>
    )
}