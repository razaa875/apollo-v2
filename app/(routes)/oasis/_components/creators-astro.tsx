import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const products = [
    {
        mainImage: "/images/oasis/creator-1.webp",
        thumbnails: [
            "/images/oasis/creator-1.webp",
            "/images/oasis/creator-1.webp",
            "/images/oasis/creator-1.webp",
        ],
        author: "Saghun Martinez",
        title: "Horizonx Smartwatch",
    },
    {
        mainImage: "/images/oasis/creator-2.webp",
        thumbnails: [
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
        ],
        author: "Ava Collins",
        title: "Aurora Fitness Band",
    },
    {
        mainImage: "/images/oasis/creator-3.webp",
        thumbnails: [
            "/images/oasis/creator-3.webp",
            "/images/oasis/creator-3.webp",
            "/images/oasis/creator-3.webp",
        ],
        author: "Liam Brooks",
        title: "PulseX Pro Watch",
    },
    {
        mainImage: "/images/oasis/creator-4.webp",
        thumbnails: [
            "/images/oasis/creator-4.webp",
            "/images/oasis/creator-4.webp",
            "/images/oasis/creator-4.webp",
        ],
        author: "Olivia Jensen",
        title: "Echo Series Tracker",
    },
    {
        mainImage: "/images/oasis/creator-1.webp",
        thumbnails: [
            "/images/oasis/creator-1.webp",
            "/images/oasis/creator-1.webp",
            "/images/oasis/creator-1.webp",
        ],
        author: "Ethan Wright",
        title: "WaveFit SmartBand",
    },
    {
        mainImage: "/images/oasis/creator-2.webp",
        thumbnails: [
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
        ],
        author: "Mia Torres",
        title: "Orbit Chrono",
    },
    {
        mainImage: "/images/oasis/creator-3.webp",
        thumbnails: [
            "/images/oasis/creator-3.webp",
            "/images/oasis/creator-3.webp",
            "/images/oasis/creator-3.webp",
        ],
        author: "Noah Reed",
        title: "TimeMax Active",
    },
    {
        mainImage: "/images/oasis/creator-4.webp",
        thumbnails: [
            "/images/oasis/creator-4.webp",
            "/images/oasis/creator-4.webp",
            "/images/oasis/creator-4.webp",
        ],
        author: "Ella Brown",
        title: "SkyTrack Neo",
    },
    {
        mainImage: "/images/oasis/creator-1.webp",
        thumbnails: [
            "/images/oasis/creator-1.webp",
            "/images/oasis/creator-1.webp",
            "/images/oasis/creator-1.webp",
        ],
        author: "James Carter",
        title: "FitSync Plus",
    },
    {
        mainImage: "/images/oasis/creator-2.webp",
        thumbnails: [
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
        ],
        author: "Sophia White",
        title: "ChronoZen Watch",
    },
    {
        mainImage: "/images/oasis/creator-2.webp",
        thumbnails: [
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
        ],
        author: "Sophia White",
        title: "ChronoZen Watch",
    },
    {
        mainImage: "/images/oasis/creator-2.webp",
        thumbnails: [
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
            "/images/oasis/creator-2.webp",
        ],
        author: "Sophia White",
        title: "ChronoZen Watch",
    },
];


type ProductCardProps = {
    mainImage: string;
    thumbnails: string[];
    author: string;
    title: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ mainImage, thumbnails, author, title }) => {
    return (
        <div className="w-full mb-24 cursor-pointer">
            <div className="flex flex-col gap-3">
                {/* Left - Main Image */}
                <div className="flex-1">
                    <div className="relative w-full h-59 xl:h-100 rounded-xl overflow-hidden">
                        <Image
                            src={mainImage || "/images/no-data/no-data.svg"}
                            alt={title}
                            height={630}
                            width={473}
                            className="size-full object-cover"
                        />
                    </div>
                </div>

                {/* Right - Thumbnails */}
                <div className="flex gap-3">
                    {thumbnails.map((thumb, i) => (
                        <div
                            key={i}
                            className="relative w-full h-28 xl:h-23 rounded-xl overflow-hidden"
                        >
                            <Image
                                src={thumb || "/images/no-data/no-data.svg"}
                                alt={`thumbnail-${i}`}
                                height={630}
                                width={473}
                                className="object-cover size-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Text Info */}
            <div className="mt-4">
                <p className="text-sm text-gray-500">{author}</p>
                <h3 className="text-xl xl:text-lg font-semibold line-clamp-1">{title}</h3>
                <Button
                    variant="outline"
                    type="submit"
                    className="w-full mt-4 border-white border-2 bg-white/50 hover:bg-transparent drop-shadow-2xl uppercase"
                >
                    follow
                </Button>
            </div>
        </div>
    );
};

export default function CreatersAndAstros() {
    return (
        <section className="relative">
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
                Creators & Astros
            </h2>
            <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
                Explore reviews, demos, and live action.
            </p>

            <Carousel className="w-[90%] mx-auto md:w-[95%] md:mr-0 md:ml-auto">
                <CarouselContent>
                    {products.map((product, i) => (
                        <CarouselItem
                            key={i}
                            className="basis-full md:basis-[40%] lg:basis-[30%] xl:basis-[22%] 2xl:basis-[17.5%] xl:mr-3"
                        >
                            <ProductCard
                                mainImage={product.mainImage}
                                thumbnails={product.thumbnails}
                                author={product.author}
                                title={product.title}
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