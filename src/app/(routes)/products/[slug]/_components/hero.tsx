"use client";

import { IProduct } from "@/common/models/interface";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowUpRight,
  ChevronDown,
  ExternalLink,
  Heart,
  Star,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Hero({ product }: { product: IProduct }) {
  const videoUrl = [
    "/images/blog/midBanner.webp",
    "/images/blog/midBanner.webp",
    "/images/blog/midBanner.webp",
    "/images/blog/midBanner.webp",
  ];
  return (
    <section className="w-[90%] mx-auto pt-32 pb-20">
      <div className="flex justify-between">
        <div className="w-[40%]">
          <h1 className="font-medium text-4xl lg:text-6xl">All Mountain SKI</h1>
          <p className="font-normal text-base text-primary/60 mt-5">
            Our wide All Mountain ski, designed for a wide range of adventures.
            For a lighter weight skier it works perfect as a powder ski as well.
            Featuring a 106mm waist and a 19m turning radius at 178cm.
          </p>
          <div className="flex gap-x-8 mt-8">
            <Button
              type="button"
              variant="ghost"
              className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
            >
              Carve
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
            >
              All Mountain
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
            >
              Single Ski
            </Button>
          </div>
          <div className="mt-10">
            <p className="text-primary/60 font-medium">All Mountain</p>
            <p className="font-medium text-4xl mt-2">$1.077,00</p>
            <div className="flex gap-x-4 mt-3">
              <div className="flex items-center font-medium gap-x-2 text-primary/60">
                <p>171 CM</p>
                <ChevronDown size={20} />
              </div>
              <p className="text-[#27AE60] font-medium">Instant Shipping</p>
            </div>
          </div>
          <div className="flex gap-4 mt-2 xl:mt-12">
            <Button
              type="button"
              variant="outline"
              className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 text-sm shadow-lg hover:shadow-lg w-[60%] xl:w-[58%] py-6"
            >
              Add To Cart <ArrowUpRight className="size-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
            >
              <Heart strokeWidth={2} className="size-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="rounded-xl bg-primary hover:bg-primary shadow-lg hover:shadow-lg border-2 border-primary py-6"
            >
              <ExternalLink strokeWidth={2} className="size-5 text-white" />
            </Button>
          </div>
        </div>
        {/* <Separator className="my-8 md:my-16" /> */}
        <div className="w-[58%]">
          <Image
            src={"/images/blog/midBanner.webp"}
            alt={product.title}
            height={200}
            width={400}
            loading="lazy"
            className="w-full h-[250px] object-cover rounded-[20px] drop-shadow-xl"
          />
          <Carousel className="mt-5">
            <CarouselContent>
              {videoUrl.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full md:basis-[40%] lg:basis-[30%] xl:basis-[22%] xl:mr-3"
                >
                  <Image
                    src={"/images/blog/midBanner.webp"}
                    alt={product.title}
                    height={200}
                    width={400}
                    loading="lazy"
                    className="w-full h-[100px] object-cover rounded-[20px] drop-shadow-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-5">
            <div>
              <p className="font-medium text-base">Market Benchmark Scores</p>
              <p className="text-primary/60 mt-1">Tesla vs overall market</p>
            </div>
            <div className="flex">
              <div className="w-[70%] flex">
                <div className="w-[25%] text-center">
                  <p className="font-medium text-lg">64</p>
                  <p className="font-medium text-primary/60 text-sm">GROWTH</p>
                </div>
                <div className="w-[25%] text-center">
                  <p className="font-medium text-lg">19</p>
                  <p className="font-medium text-primary/60 text-sm">PROFIT</p>
                </div>
                <div className="w-[25%] text-center">
                  <p className="font-medium text-lg">29</p>
                  <p className="font-medium text-primary/60 text-sm">VALUE</p>
                </div>
                <div className="w-[25%] text-center">
                  <p className="font-medium text-lg">58</p>
                  <p className="font-medium text-primary/60 text-sm">HEALTH</p>
                </div>
              </div>
              <div className="w-[30%] flex">
                <Image
                  src={"/images/product-detail/mark.svg"}
                  alt={product.title}
                  height={50}
                  width={50}
                  loading="lazy"
                  className="size-[50px] object-cover rounded-[20px] drop-shadow-xl"
                />
                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
                >
                  <Image
                    src={"/images/product-detail/award.svg"}
                    alt={product.title}
                    height={50}
                    width={50}
                    loading="lazy"
                    className="size-[50px] object-cover rounded-[20px] drop-shadow-xl"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
