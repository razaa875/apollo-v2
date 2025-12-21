"use client";

import { IProduct } from "@/common/models/interface";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, ExternalLink, Heart } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { apiService } from "@/common/services";
import { toast } from "sonner";
import { useAuth } from "@/providers";
import { useRouter } from "next/navigation";

export default function Hero({ product }: { product: IProduct }) {
  const { isAuthenticated } = useAuth();
  const [selectedImage, setSelectedImage] = useState(
    "/images/blog/midBanner.webp"
  );

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const videoUrl = [
    "/images/blog/midBanner.webp",
    "/images/blog/midBanner.webp",
    "/images/blog/midBanner.webp",
    "/images/blog/midBanner.webp",
  ];

  const AddWishlist = () => {
    if(!isAuthenticated){
      toast.info("Please login first!");
      router.push('/login');
      return;
    }

    setLoading(true);
    apiService
      .httpPostRequest<{ status: string; message: string }>(
        `/user/wishlist/${product.id}`,
        "",
        ""
      )
      .subscribe({
        next: (res) => {
          if (res.status === "success") {
            toast.success(res.message);
            setLoading(false);
          }
        },
        error: (err) => {
          console.log(err.message);
          toast.error(err.message);
          setLoading(false);
        },
      });
  };

  return (
    <section className="w-[90%] mx-auto lg:pt-8 pb-20">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
        <div className="lg:w-[47%]">
          <h1 className="font-medium text-4xl lg:text-6xl">{product.title}</h1>
          <p className="font-normal text-base text-primary/60 mt-5">
            {product.description}
          </p>
          {product.categories.length > 0 && (
            <div className="flex flex-wrap gap-x-2 gap-y-4 lg:gap-x-8 mt-8">
              {product.categories.map((item, i) => (
                <Button
                  key={i}
                  type="button"
                  variant="ghost"
                  className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
                >
                  {item}
                </Button>
              ))}
            </div>
          )}
          <div className="mt-10">
            <p className="text-primary/60 font-medium">Price</p>
            <p className="font-medium text-2xl lg:text-4xl mt-2">
              ${product.price}
            </p>
          </div>
          <div className="flex gap-x-4 mt-3">
            <div className="flex items-center font-medium gap-x-2 text-primary/60">
              <p>171 CM</p>
              <ChevronDown size={20} />
            </div>
            <p className="text-[#27AE60] font-medium">Instant Shipping</p>
          </div>
          <div className="flex gap-4 mt-2 xl:mt-6">
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
              onClick={AddWishlist}
              disabled={loading}
              className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
            >
              <Heart
                strokeWidth={2}
                className={`size-5 ${
                  product.is_wishlisted ? "fill-black" : ""
                }`}
              />
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
        <div className="w-[2%]">
          <div className="w-px h-full bg-[#2C2C2C26]"></div>
        </div>
        <div className="lg:w-[47%] mt-8 lg:mt-0">
          <Image
            src={selectedImage}
            alt={product.title}
            height={1248}
            width={3240}
            loading="lazy"
            quality={75}
            className="w-full h-100 object-cover object-center rounded-[20px] drop-shadow-xl"
          />
          <Carousel className="mt-5">
            <CarouselContent>
              {videoUrl.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="basis-[33%] md:basis-[22%] lg:basis-[22%] xl:basis-[17%] xl:mr-3 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={"/images/blog/midBanner.webp"}
                    alt={product.title}
                    height={1248}
                    width={3240}
                    loading="lazy"
                    quality={75}
                    className="w-full h-25 object-cover rounded-[20px]"
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
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:items-center mt-4">
              <div className="lg:w-[70%] flex">
                <div className="w-[24%] text-center">
                  <p className="font-medium text-lg">64</p>
                  <p className="font-medium text-primary/60 text-sm">GROWTH</p>
                </div>
                <div className="w-[1%]">
                  <div className="w-px h-full bg-[#2C2C2C26]"></div>
                </div>
                <div className="w-[24%] text-center">
                  <p className="font-medium text-lg">19</p>
                  <p className="font-medium text-primary/60 text-sm">PROFIT</p>
                </div>
                <div className="w-[1%]">
                  <div className="w-px h-full bg-[#2C2C2C26]"></div>
                </div>
                <div className="w-[24%] text-center">
                  <p className="font-medium text-lg">29</p>
                  <p className="font-medium text-primary/60 text-sm">VALUE</p>
                </div>
                <div className="w-[1%]">
                  <div className="w-px h-full bg-[#2C2C2C26]"></div>
                </div>
                <div className="w-[24%] text-center">
                  <p className="font-medium text-lg">58</p>
                  <p className="font-medium text-primary/60 text-sm">HEALTH</p>
                </div>
              </div>
              <div className="lg:w-[30%] flex mt-5 lg:mt-0 gap-x-5 items-center">
                {/* <Image
                  src={"/images/product-detail/mark.svg"}
                  alt={product.title}
                  height={50}
                  width={50}
                  loading="lazy"
                  className="size-[50px] object-cover rounded-[20px] drop-shadow-xl"
                /> */}
                <Button
                  type="button"
                  variant="ghost"
                  className="rounded-xl border-white hover:border-white hover:bg-transparent border-2 shadow-lg hover:shadow-lg py-6"
                >
                  <Image
                    src={"/images/product-detail/Awards.svg"}
                    alt={product.title}
                    height={50}
                    width={50}
                    loading="lazy"
                    className="size-7 object-cover rounded-[20px] drop-shadow-xl"
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
