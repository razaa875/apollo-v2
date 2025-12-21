"use client";

import { IProduct } from "@/common/models/interface";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Star } from "lucide-react";

export default function Hero({ product }: { product: IProduct }) {
    const review = [
        {
            id: 1,
            rating: 4,
            title: "Cillian Russell",
            name: "Our wide All Mountain ski, designed for a wide range of adventures.",
            desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm."
        },
        {
            id: 2,
            rating: 4,
            title: "Cillian Russell",
            name: "Our wide All Mountain ski, designed for a wide range of adventures.",
            desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm."
        },
        {
            id: 3,
            rating: 4,
            title: "Cillian Russell",
            name: "Our wide All Mountain ski, designed for a wide range of adventures.",
            desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm."
        },
        {
            id: 4,
            rating: 4,
            title: "Cillian Russell",
            name: "Our wide All Mountain ski, designed for a wide range of adventures.",
            desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm."
        },
        {
            id: 5,
            rating: 4,
            title: "Cillian Russell",
            name: "Our wide All Mountain ski, designed for a wide range of adventures.",
            desc: "This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm."
        },
    ]
    return(
        <div>
             <Carousel className="mt-5">
            <CarouselContent>
              {review.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full md:basis-[40%] lg:basis-[30%] xl:basis-[22%] xl:mr-3 bg-white"
                >
                 <div className="flex">
                    <Star size={14}/>
                    <p>{item.title}</p>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                 </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            </Carousel>
        </div>
    )
}