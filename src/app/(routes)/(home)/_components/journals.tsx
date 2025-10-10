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
export default function Journals() {
  const cards = [
    {
      img: "/images/dashboard/journals.png", // replace with your image path
      author: "Saghun Martinez",
      title:
        "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
    },
    {
      img: "/images/dashboard/journals1.png",
      author: "Saghun Martinez",
      title:
        "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
    },
    {
      img: "/images/dashboard/journals2.png",
      author: "Saghun Martinez",
      title:
        "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
    },
  ];
  return (
    <>
      <div className="my-5 py-16 ">
        <h1 className="text-center text-6xl font-medium">Journals/Guides</h1>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl  overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-full h-56">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{card.author}</p>
                <h3 className="text-gray-800 font-medium leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
