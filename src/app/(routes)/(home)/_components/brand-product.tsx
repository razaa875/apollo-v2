"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { Loader2, Star } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

import { apiService } from "@/common/services";

import { ICategories, IProductByCategory } from "@/common/models/interface";

export default function BrandProduct() {

  const [categories, setCategories] = useState<ICategories[]>([]);
  const [products, setProducts] = useState<IProductByCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const fetchProductByCategory = (id: number) => {
    setLoading(true);

    apiService.httpGetRequest<{ status: string; data: IProductByCategory[] }>(`categories/${id}/products`).subscribe({
      next: (res) => {
        if (res.status === "success") {
          setProducts(res.data);
          setLoading(false);
        }
      },
      error: (err) => {
        console.log(err.message);
        setLoading(false);
      },
    });
  }

  useEffect(() => {
    setMounted(true);

    apiService.httpGetRequest<{ status: string; data: ICategories[] }>('categories').subscribe({
      next: (res) => {
        if (res.status === "success") {
          setCategories(res.data);
          if (res.data.length > 0) {
            const firstCategory = res.data[0];
            setActiveCategory(String(firstCategory.id));
            fetchProductByCategory(firstCategory.id);
          }
        }
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }, []);

  if (!mounted) {
    // Render nothing on the server — avoids mismatch
    return null;
  }

  return (
    <>
      <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
        Brands And Products
      </h2>
      <div className="w-[90%] mx-auto mt-4 md:mt-8 lg:mt-16">
        {
          isDesktop ?
            <div className="flex justify-between">
              <div className="w-[26%]">
                <h3 className="text-xl xl:text-2xl font-medium mb-4">Shop By Activity</h3>
                <ScrollArea className="h-123 xl:h-100 2xl:h-120 pr-4">
                  <Tabs
                    orientation="vertical"
                    value={activeCategory}
                    onValueChange={(val) => {
                      setActiveCategory(val);
                      fetchProductByCategory(Number(val));
                    }}
                  >
                    <TabsList className="flex flex-col gap-3 size-full bg-transparent p-0">
                      {categories.map((cat) => (
                        <TabsTrigger
                          key={cat.id}
                          value={String(cat.id)}
                          className="relative group overflow-hidden rounded-xl p-0 w-full"
                        >
                          <div className="w-full h-32 xl:h-40">
                            <Image
                              src={"/images/home/product.webp"}
                              alt={cat.title}
                              width={300}
                              height={120}
                              className="size-full object-cover rounded-xl"
                            />
                          </div>
                          <span className="absolute bottom-4 left-4 font-medium text-white text-base z-10">
                            {cat.title}
                          </span>
                          <div className="absolute inset-0 size-full bg-gradient-to-b to-primary from-primary/10"></div>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </ScrollArea>
              </div>

              <div className="w-[70%]">
                <h3 className="text-xl xl:text-2xl font-medium mb-4">
                  {
                    categories.find((c) => String(c.id) === activeCategory)
                      ?.title || "Products"
                  }
                </h3>

                {loading ? (
                  <div className="flex justify-center items-center h-120">
                    <Loader2 className="size-12 animate-spin text-primary" />
                  </div>
                ) : products.length > 0 ? (
                  <ScrollArea className="h-120 pr-4">
                    <div className="grid grid-cols-2 xl:grid-cols-3 gap-8">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className=""
                        >
                          <div className="w-full h-50">
                            <Image
                              src={product.image}
                              alt={product.title}
                              height={200}
                              width={400}
                              className="size-full object-cover rounded-[20px] drop-shadow-xl mb-4"
                            />
                          </div>
                          <h4 className="text-xl xl:text-lg font-semibold line-clamp-1 mb-1">
                            {product.title}
                          </h4>
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-lg xl:text-base text-primary/60">${product.price}</p>
                            {/* Rating */}
                            <div className="flex items-center gap-1 text-yellow-500">
                              <Star
                                size={16}
                                fill="#eab308"
                                stroke="#eab308"
                              />
                              <span className="text-gray-500 xl:text-sm">
                                {product.rating}
                              </span>
                              <span className="text-gray-400 text-sm xl:text-xs ml-1">
                                ({product.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="bg-[url('/images/no-data/no-data-bg.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-y-8 py-8 h-120 lg:h-122 xl:h-100 2xl:h-120 rounded-[20px] drop-shadow-2xl">
                    <h3 className="font-medium text-3xl text-white text-center">No Product Found</h3>
                    <Image src="/images/no-data/no-data.svg" alt="No Data Image" title="No Data Image" height={566} width={566} className="size-60 mx-auto object-contain" />
                  </div>
                )}
              </div>
            </div>
            :
            <Tabs
              value={activeCategory}
              onValueChange={(val) => {
                setActiveCategory(val);
                fetchProductByCategory(Number(val));
              }}
            >
              <TabsList className="h-10 md:h-13 flex gap-x-2 overflow-x-auto justify-start w-full my-4">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={String(cat.id)}
                    className="whitespace-nowrap text-sm py-4 md:px-8 font-medium data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {cat.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {
                loading ?
                  <div className="flex justify-center items-center h-100">
                    <Loader2 className="size-12 animate-spin text-primary" />
                  </div>
                  :
                  <>
                    {categories.map((cat) => (
                      <TabsContent key={cat.id} value={String(cat.id)}>
                        {products.length > 0 ? (
                          <Carousel>
                            <CarouselContent>
                              {products.map((product) => (
                                <CarouselItem
                                  key={product.id}
                                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                                >
                                  <div className="flex flex-col">
                                    <div className="h-84 w-full">
                                      <Image
                                        src={product.image}
                                        alt={product.title}
                                        height={200}
                                        width={400}
                                        className="size-full object-cover rounded-[20px] mb-3 drop-shadow-md"
                                      />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold md:mt-2 line-clamp-1">
                                      {product.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-1 md:mt-3">
                                      <p className="font-medium">
                                        ${product.price}
                                      </p>
                                      <div className="flex items-center gap-1 text-sm text-yellow-500">
                                        <Star
                                          size={16}
                                          fill="#eab308"
                                          stroke="#eab308"
                                        />
                                        <span className="text-gray-700">
                                          {product.rating}
                                        </span>
                                        <span className="text-gray-400 text-xs ml-1 capitalize">
                                          ({product.reviews})
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                          </Carousel>
                        ) : (
                          <div className="bg-[url('/images/no-data/no-data-bg.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-y-8 py-8 h-100 rounded-[20px] drop-shadow-2xl">
                            <h3 className="font-medium text-3xl text-white text-center">No Product Found</h3>
                            <Image src="/images/no-data/no-data.svg" alt="No Data Image" title="No Data Image" height={566} width={566} className="size-60 mx-auto object-contain" />
                          </div>
                        )}
                      </TabsContent>
                    ))}
                  </>
              }
            </Tabs>
        }
      </div>
    </>
  );
}
