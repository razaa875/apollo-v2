import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Sales() {

    const data = [
        "/images/oasis/sale-1.webp",
        "/images/oasis/sale-2.webp",
        "/images/oasis/sale-3.webp",
        "/images/oasis/sale-4.webp",
        "/images/oasis/sale-1.webp",
        "/images/oasis/sale-2.webp",
        "/images/oasis/sale-3.webp",
        "/images/oasis/sale-4.webp",
    ]

    return (
        <section>
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
                Sales
            </h2>
            <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
                Explore reviews, demos, and live action.
            </p>

            <Carousel className="w-[90%] 2xl:w-[95%] mx-auto md:mr-0 md:ml-auto">
                <CarouselContent>
                    {data.map((item, i) => (
                        <CarouselItem
                            key={i}
                            className="basis-full md:basis-[40%] lg:basis-[30%] xl:basis-[22%] 2xl:basis-[17.5%] xl:mr-3"
                        >
                            <Image
                                src={item}
                                width={540}
                                height={360}
                                alt="cover"
                                quality={75}
                                className="size-full object-cover rounded-xl"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute right-12 md:right-24 -top-8 md:-top-10">
                    <CarouselPrevious className="rounded-sm border-none bg-white ml-3 hover:bg-amber-50" />
                    <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
                </div>
            </Carousel>
        </section>
    )
}