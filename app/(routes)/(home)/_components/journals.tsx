"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const cards = [
  {
    img: "/images/home/journal-1.webp", // replace with your image path
    author: "Saghun Martinez",
    title: "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
  },
  {
    img: "/images/home/journal-2.webp",
    author: "Saghun Martinez",
    title: "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
  },
  {
    img: "/images/home/journal-3.webp",
    author: "Saghun Martinez",
    title: "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
  },
  {
    img: "/images/home/journal-1.webp", // replace with your image path
    author: "Saghun Martinez",
    title: "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
  },
  {
    img: "/images/home/journal-2.webp",
    author: "Saghun Martinez",
    title: "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
  },
  {
    img: "/images/home/journal-3.webp",
    author: "Saghun Martinez",
    title: "Our Wide All Mountain Ski, Designed For A Wide Range Of Adventures.",
  },
];

export default function Journals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🩵 Prevents hydration mismatch

  return (
    <>
      <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
        Journals/Guides
      </h2>

      <Carousel className="w-[90%] mx-auto md:mr-0 md:ml-auto xl:mx-auto mt-20">
        <CarouselContent>
          {cards.map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-full md:basis-[40%] xl:basis-1/3"
            >
              <Card className="w-full border-none shadow-none bg-transparent pt-0 gap-5 cursor-pointer">
                <CardContent className="p-0 relative group overflow-hidden rounded-2xl shadow-lg">
                  {/* Cover */}
                  <Image
                    src={item.img}
                    width={1200}
                    height={800}
                    alt={item.title}
                    className={`w-full h-75 object-cover`}
                  />
                </CardContent>

                <CardFooter className="flex-col gap-2 items-start px-0">
                  <p className="text-start text-sm font-normal text-black/50">
                    {item.author}
                  </p>
                  <p className="text-start text-xl font-medium">
                    {item.title}
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

      <Separator className="my-8 md:mb-12 lg:mb-20 lg:mt-16" />
    </>
  );
}
