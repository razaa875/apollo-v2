"use client";

import { IProduct } from "@/common/models/interface";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ApolloIndex({ product }: { product: IProduct }) {
  return (
    <>
      <Separator className="mb-8 md:mb-12 mt-4 md:mt-8" />
      <div className="w-[90%] mx-auto">
        <Image
          src={"/images/product-detail/apollo-index.png"}
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
