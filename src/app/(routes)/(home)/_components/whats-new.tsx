"use client";
import Image from "next/image";
import VideoCard from "./video-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PollCard from "@/src/app/(routes)/(home)/_components/pollcard";
export default function WhatsNew() {
  const tableData = [
    {
      id: "1",
      name: "John Doe",
      img: "url",
    },
    {
      id: "2",
      name: "Olivia Martin",
      img: "url",
    },
    {
      id: "3",
      name: "Emily Brown",
      img: "url",
    },
    {
      id: "4",
      name: "Sarah Williams",
      img: "url",
    },
    {
      id: "5",
      name: "Joseph Martinez",
      img: "url",
    },
    {
      id: "6",
      name: "Joseph Martinez",
      img: "url",
    },
    {
      id: "7",
      name: "Joseph Martinez",
      img: "url",
    },
  ];

  const videoUrl = [
    {
      id: "1",
      url: "/images/dashboard/smvideo.mp4",
      coverUrl: "/images/dashboard/videoback.png",
      user: "Saghun Martinez",

      topic:
        "Our wide All Mountain ski, designed for a wide range of adventures.",
    },
    {
      id: "2",
      url: "/images/dashboard/smvideo.mp4",
      coverUrl: "/images/dashboard/videoback.png",
      user: "Saghun Martinez",
      topic:
        "Our wide All Mountain ski, designed for a wide range of adventures.",
    },
    {
      id: "3",
      url: "/images/dashboard/smvideo.mp4",
      coverUrl: "/images/dashboard/videoback.png",
      user: "Saghun Martinez",
      topic:
        "Our wide All Mountain ski, designed for a wide range of adventures.",
    },
    {
      id: "4",
      url: "/images/dashboard/smvideo.mp4",
      coverUrl: "/images/dashboard/videoback.png",
      user: "Saghun Martinez",

      topic:
        "Our wide All Mountain ski, designed for a wide range of adventures.",
    },
    {
      id: "5",
      url: "/images/dashboard/smvideo.mp4",
      coverUrl: "/images/dashboard/videoback.png",
      user: "Saghun Martinez",
      topic:
        "Our wide All Mountain ski, designed for a wide range of adventures.",
    },
    {
      id: "6",
      url: "/images/dashboard/smvideo.mp4",
      coverUrl: "/images/dashboard/videoback.png",
      user: "Saghun Martinez",
      topic:
        "Our wide All Mountain ski, designed for a wide range of adventures.",
    },
    {
      id: "7",
      url: "/images/dashboard/smvideo.mp4",
      coverUrl: "/images/dashboard/videoback.png",
      user: "Saghun Martinez",
      topic:
        "Our wide All Mountain ski, designed for a wide range of adventures.",
    },
  ];
  return (
    <>
      <div className="my-5 py-16 border-t border-[#2C2C2C26]">
        <h1 className="text-center text-6xl font-medium">
          What’s New With Apollo?
        </h1>
        <p className="text-center text-2xl font-normal mt-3">
          Explore reviews, demos, and live action.
        </p>
      </div>

      <div className="flex justify-end overflow-x-hidden">
        <div className="w-[90%] pt-5 mb-5">
          <Carousel orientation="horizontal">
            <div className="pt-10 ">
              <CarouselContent className="pl-10 pb-10 bg-transparent">
                {videoUrl.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-1 ml-3 md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="">
                      <Card className="w-full border-none shadow-none bg-transparent pt-0">
                        <CardContent className="p-0">
                          <VideoCard
                            videoUrl={item.url}
                            cover={item.coverUrl}
                          />
                        </CardContent>
                        <CardFooter className="flex-col gap-2 items-start">
                          <p className="text-start text-[14px] font-normal">
                            {item.user}
                          </p>
                          <p className="text-start text-[20px] font-medium">
                            {item.topic}
                          </p>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <div className="absolute right-28 top-0">
              <CarouselPrevious className="rounded-sm border-none bg-white ml-5 hover:bg-amber-50" />
              <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
