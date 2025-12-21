"use client";

import { IProduct } from "@/common/models/interface";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Comparison({ product }: { product: IProduct }) {
  return (
    <>
      <Separator className="mb-8 md:mb-12 mt-4 md:mt-8" />
      <div className="w-[90%] mx-auto">
        <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
          Comparisons
        </h2>
        <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
          Comparing the growth and profit of Tesla to similar companies in its
          industry.
        </p>
        <Image
          src={"/images/product-detail/Container.png"}
          alt={product.title}
          height={200}
          width={400}
          loading="lazy"
          className="size-full object-cover"
        />
      </div>
    </>
  );
}
