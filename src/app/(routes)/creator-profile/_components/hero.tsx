"use client";

import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

const data = [
    "Bernadette", "Andres", "Geoffrey", "Edith", "Forrest Dooley", "Minnie", "Julie Gleason", "Belinda Blanda", "Frankie Davis"
]

export default function CreatorProfileHero() {

    return (
        <>
            <section className="relative mt-28 md:mt-32">
                <div className="w-[90%] mx-auto h-125 xl:h-150 2xl:h-160">
                    <Image src="/images/creator-profile/hero.webp" alt="Olivia Martin" title="Olivia Martin" width={3000} height={1941} className="size-full object-cover rounded-2xl xl:object-top" />
                </div>
                <div className="absolute top-4 lg:top-[4%] left-8 md:left-14 lg:left-[7%] bg-background/40 rounded-lg py-1 px-2 flex items-center gap-x-2">
                    <Avatar>
                        <AvatarImage src="/images/creator-profile/person.webp" alt="Olivia Martin" title="Olivia Martin" />
                        <AvatarFallback>Olivia Martin</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-white">
                        <h3 className="font-medium text-base">@Olivia Martin</h3>
                        <p className="font-normal text-xs text-white/60">Personal Storylines</p>
                    </div>
                </div>
                <div className="absolute bottom-16 lg:bottom-[25%] xl:bottom-[20%] inset-x-8 md:inset-x-16 lg:inset-x-[7%]">
                    <p className="font-medium text-sm md:text-base lg:text-lg text-white lg:w-[80%]">Lorem ipsum dolor sit amet consectetur gnissim sit ac varius. At in tincidunt et interdum ultricies nisi non quis. Ipsum pharetra egestas eu mus fermentum.</p>
                </div>
                <Carousel className="absolute bottom-4 inset-x-8 md:inset-x-16 lg:hidden">
                    <CarouselContent>
                        {data.map((item, i) => (
                            <CarouselItem key={i} className="basis-1/2 md:basis-1/4">
                                <p className="bg-background/50 border border-white rounded-md px-3 py-1 font-medium text-sm text-center">{item}</p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="hidden lg:flex absolute bottom-[5%] inset-x-[7%] flex-wrap gap-4 w-[70%] xl:w-[50%]">
                    {data.map((item, i) => (
                        <p key={i} className="bg-background/70 border border-white rounded-md px-3 py-1 font-medium text-sm text-center">{item}</p>
                    ))}
                </div>
            </section>

            <Separator className="my-12 xl:my-16" />

            <section className="w-[90%] mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between gap-y-6 mt-12">
                    <div className="relative h-70 lg:h-100 xl:w-[32%]">
                        <Image src="/images/oasis/explore-1.webp" alt="Explore Image" title="Explore Image" height={533} width={800} className="size-full object-cover rounded-2xl" />
                        <p className="absolute inset-x-0 bottom-4 w-[90%] mx-auto text-white font-medium text-sm text-center lg:text-base z-10">Lorem ipsum dolor sit amet consectetur. Sit pellentesque quisque aliquet.</p>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/10 rounded-2xl"></div>
                    </div>
                    <div className="relative h-70 lg:h-100 xl:w-[32%]">
                        <Image src="/images/oasis/explore-2.webp" alt="Explore Image" title="Explore Image" height={800} width={1540} className="size-full object-cover rounded-2xl" />
                        <p className="absolute inset-x-0 bottom-4 w-[90%] mx-auto text-white font-medium text-sm text-center lg:text-base z-10">Lorem ipsum dolor sit amet consectetur. Sit pellentesque quisque aliquet.</p>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/10 rounded-2xl"></div>
                    </div>
                    <div className="relative h-70 lg:h-100 xl:w-[32%]">
                        <Image src="/images/oasis/explore-3.webp" alt="Explore Image" title="Explore Image" height={800} width={600} className="size-full object-cover rounded-2xl" />
                        <p className="absolute inset-x-0 bottom-4 w-[90%] mx-auto text-white font-medium text-sm text-center lg:text-base z-10">Lorem ipsum dolor sit amet consectetur. Sit pellentesque quisque aliquet.</p>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/10 rounded-2xl"></div>
                    </div>
                </div>
            </section>
        </>
    )
}