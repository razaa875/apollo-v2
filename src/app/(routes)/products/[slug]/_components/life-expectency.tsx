"use client";

import { IProduct } from "@/common/models/interface";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function LifeExpectency({ product }: { product: IProduct }) {
  return (
    <>
      <Separator className="mb-8 md:mb-12 mt-4 md:mt-8" />
      <div className="w-[90%] mx-auto">
        <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
          Life Expectancy
        </h2>
        <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
          Explore Product Life Expectancy
        </p>
        <div className="w-[80%] mx-auto">
          <Image
            src={"/images/product-detail/life.png"}
            alt={product.title}
            height={200}
            width={400}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <p className="font-medium text-primary/60 text-center mt-3">YEARS</p>
      </div>
    </>
  );
}
