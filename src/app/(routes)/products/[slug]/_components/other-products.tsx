"use client";

import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { apiService } from "@/common/services";

import { ProductCard } from "@/common/comonents/product-card";

import { IExploreProducts } from "@/common/models/interface";

export default function OtherProducts() {
    const [products, setProducts] = useState<IExploreProducts[]>([]);
    const [loadingproducts, setLoadingProducts] = useState<boolean>(true);

    useEffect(() => {
        setLoadingProducts(true);

        apiService.httpGetRequest<{ status: string; data: IExploreProducts[] }>('explore-products').subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setProducts(res.data);
                }
                setLoadingProducts(false);
            },
            error: (err) => {
                console.log(err.message);
                setLoadingProducts(false);
            },
        });
    }, []);

    return (
        <section className="">
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">Other Products</h2>
            <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3">Check out similar companies to Tesla based on industry and performance.</p>
            <div className="mt-8 lg:mt-12 xl:mt-20">
                {loadingproducts ? (
                    <div className="flex flex-wrap gap-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} className="h-32 xl:h-40 w-full rounded-xl" />
                        ))}
                    </div>
                ) : (
                    <Carousel className="w-[90%] xl:w-[96%] mx-auto lg:mr-0 lg:ml-auto mt-20">
                        <CarouselContent>
                            {products.map((item, i) => (
                                <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-[40%] xl:basis-[22%]">
                                    <ProductCard data={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute right-12 md:right-24 -top-8 md:-top-10">
                            <CarouselPrevious className="rounded-sm border-none bg-white ml-3 hover:bg-amber-50" />
                            <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
                        </div>
                    </Carousel>
                )}
            </div>
        </section>
    )
}