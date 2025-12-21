"use client";

import { useEffect, useState } from "react";

import { apiService } from "@/common/services";

import { INewArrivals } from "@/common/models/interface";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewArrival() {
  const [data, setData] = useState<INewArrivals[]>([]);

  useEffect(() => {
    apiService
      .httpGetRequest<{ status: string; data: INewArrivals[] }>(
        "new-arrivals-products"
      )
      .subscribe({
        next: (res) => {
          if (res.status === "success") {
            setData(res.data);
          }
        },
        error: (err) => {
          console.log(err.message);
        },
      });
  }, []);

  return (
    <section className="w-[90%] mx-auto mt-40">
      <h2 className="font-medium text-4xl lg:text-6xl text-center">
        Winter Essentials
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-y-12 gap-x-12 my-8 md:my-16 xl:my-20">
        {data.map((product, i) => (
          <div key={i} className="w-full md:w-[46%] xl:w-[30%] 2xl:w-[22%]">
            <div className="w-full h-64">
              <Image
                src={product.image || "/images/no-data/no-data.svg"}
                alt={product.title}
                height={200}
                width={400}
                loading="lazy"
                className="size-full object-cover rounded-[20px] drop-shadow-xl"
              />
            </div>
            <div className="flex items-center gap-1 text-[#2C2C2C80] text-[14px] mt-4 mb-2">
              Saghun Martinez
            </div>
            <h4 className="text-xl xl:text-lg font-semibold line-clamp-1 my-2">
              {product.title}
            </h4>
            <p className="font-medium text-lg xl:text-base text-primary/60">
              ${product.price}
            </p>
            <div className="flex gap-4 mt-2 xl:mt-4">
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
        ))}
      </div>
    </section>
  );
}
