"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useMediaQuery } from "usehooks-ts";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const adPlacements = [
  {
    id: 1,
    title: "Smart Watch Banner",
    image: "/images/home/ad-1.webp",
    description: "Track your fitness goals in style with our smart watches.",
  },
  {
    id: 2,
    title: "Electronics Sale",
    image: "/images/home/ad-2.webp",
    description: "Explore the latest gadgets and electronics on sale now.",
  },
  {
    id: 3,
    title: "Smart Watch Banner",
    image: "/images/home/ad-1.webp",
    description: "Track your fitness goals in style with our smart watches.",
  },
  {
    id: 4,
    title: "Electronics Sale",
    image: "/images/home/ad-2.webp",
    description: "Explore the latest gadgets and electronics on sale now.",
  }
];

export default function AddPlacement() {
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🩵 Prevents hydration mismatch

  return (
    <section className="relative">
      <Separator className="my-8 md:my-12" />

      <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
        Ad Placement
      </h2>
      <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
        Explore reviews, demos, and live action.
      </p>

      <Carousel className="w-[90%] mx-auto lg:mr-0 lg:ml-auto">
        <CarouselContent>
          {adPlacements.map((ad, i) => (
            <CarouselItem
              key={i}
              className="basis-full lg:basis-[90%]"
            >
              <Image
                src={ad.image}
                width={1400}
                height={700}
                alt={ad.title}
                className="size-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute right-12 md:right-14 lg:right-28 -top-8 md:-top-10">
          <CarouselPrevious className="rounded-sm border-none bg-white ml-3 hover:bg-amber-50" />
          <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
        </div>
      </Carousel>

      {
        isDesktop &&
        <div className="absolute right-12 xl:right-28 -bottom-26 2xl:-bottom-30 z-10 -rotate-15">
          <Image
            src="/images/dashboard/spaceman5.webp"
            width={250}
            height={250}
            alt="Picture of the author"
            className="size-56 2xl:size-64 object-contain"
          />
        </div>
      }
      <Separator className="my-8 md:mb-12 lg:mb-20 lg:mt-14 xl:mt-16 2xl:mt-20" />

    </section>
  );
}
