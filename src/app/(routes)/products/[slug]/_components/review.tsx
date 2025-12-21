"use client";

import { IProduct } from "@/common/models/interface";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export default function ProductReview({ product }: { product: IProduct }) {
  const review = [
    {
      id: 1,
      rating: 5,
      title: "Cillian Russell",
      name: "Our wide All Mountain ski, designed for a wide range of adventures.",
      desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm.",
    },
    {
      id: 2,
      rating: 4,
      title: "Cillian Russell",
      name: "Our wide All Mountain ski, designed for a wide range of adventures.",
      desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm.",
    },
    {
      id: 3,
      rating: 3,
      title: "Cillian Russell",
      name: "Our wide All Mountain ski, designed for a wide range of adventures.",
      desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm.",
    },
    {
      id: 4,
      rating: 4,
      title: "Cillian Russell",
      name: "Our wide All Mountain ski, designed for a wide range of adventures.",
      desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm.",
    },
    {
      id: 5,
      rating: 2,
      title: "Cillian Russell",
      name: "Our wide All Mountain ski, designed for a wide range of adventures.",
      desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm.",
    },
  ];
  return (
    <div className="w-[90%] mx-auto">
      <Carousel className="mt-5">
        <CarouselContent>
          {review.map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-full md:basis-[40%] lg:basis-[30%] xl:basis-[22%] xl:mr-3 bg-white p-4 rounded-xl shadow"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="font-bold text-lg mt-1">{item.title}</p>
              <h2 className="font-medium text-xl mt-1">{item.name}</h2>
              <p className="font-medium text-sm mt-2">{item.desc}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
