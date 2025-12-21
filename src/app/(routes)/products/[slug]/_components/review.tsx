"use client";

import { IProduct, IReview } from "@/common/models/interface";
import { apiService } from "@/common/services";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { format } from "date-fns";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductReview({ product }: { product: IProduct }) {
 

  const [review, setReview] = useState<IReview[]>([])

  

  useEffect(() => {
    apiService
      .httpGetRequest<{ status: string; data: IReview[] }>(
        `products/${product.id}/reviews`,
        "",
        { setCache: false }
      )
      .subscribe({
        next: (res) => {
          if (res.status === "success") {
            setReview(res.data);
          }
        },
        error: () => console.log(''),
      });
  }, [product.id]);

  return (
    <div className="w-[90%] mx-auto">
      <Carousel className="mt-5">
        <CarouselContent>
          {review.map((item, i) => (
            <CarouselItem
              key={i}
              className="basis-full md:basis-[40%] lg:basis-[30%] xl:basis-[22%] xl:mr-3 bg-white p-4 rounded-xl shadow"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <h2 className="font-medium text-xl mt-3">{item.userName}</h2>
              <p className="font-medium text-sm mt-2 line-clamp-2">{item.comment}</p>
              <p className="text-primary/60 text-sm mt-2"> {format(new Date(item.createdAt), "dd MMM yyyy")}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
