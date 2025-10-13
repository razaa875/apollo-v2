"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

import { useMediaQuery } from "usehooks-ts";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  {
    id: "1",
    title: "Hikers",
    image: "/images/home/category-1.webp",
    products: [
      { id: "1", title: "Anna Walker", image: "/images/home/product-1.webp" },
      { id: "2", title: "John Beach", image: "/images/home/product-2.webp" },
      { id: "3", title: "Ryan Brooks", image: "/images/home/product-3.webp" },
      { id: "4", title: "Anna Walker", image: "/images/home/product-1.webp" },
      { id: "5", title: "John Beach", image: "/images/home/product-2.webp" },
      { id: "6", title: "Ryan Brooks", image: "/images/home/product-3.webp" },
    ],
  },
  {
    id: "2",
    title: "Climbers",
    image: "/images/home/category-2.webp",
    products: [
      { id: "1", title: "Ryan Brooks", image: "/images/home/product-3.webp" },
      { id: "2", title: "Anna Walker", image: "/images/home/product-1.webp" },
      { id: "3", title: "John Beach", image: "/images/home/product-2.webp" },
    ],
  },
  {
    id: "3",
    title: "Ski",
    image: "/images/home/category-3.webp",
    products: [
      { id: "1", title: "John Beach", image: "/images/home/product-2.webp" },
      { id: "2", title: "Anna Walker", image: "/images/home/product-1.webp" },
      { id: "3", title: "Ryan Brooks", image: "/images/home/product-3.webp" },
    ],
  },
  {
    id: "4",
    title: "Footballers",
    image: "/images/home/category-5.webp",
    products: [
      { id: "1", title: "Anna Walker", image: "/images/home/product-1.webp" },
      { id: "2", title: "John Beach", image: "/images/home/product-2.webp" },
    ],
  },
  {
    id: "5",
    title: "Watchers",
    image: "/images/home/category-5.webp",
    products: [
      { id: "1", title: "Ryan Brooks", image: "/images/home/product-3.webp" },
      { id: "2", title: "Anna Walker", image: "/images/home/product-1.webp" },
      { id: "3", title: "John Beach", image: "/images/home/product-2.webp" },
      { id: "4", title: "Anna Walker", image: "/images/home/product-1.webp" },
      { id: "5", title: "John Beach", image: "/images/home/product-2.webp" },
    ],
  },
];

export default function ApolloCreators() {

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const activeData = categories.find((cat) => cat.id === activeCategory)?.products || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
        Apollo Creators
      </h2>
      <div className="w-[90%] mx-auto mt-4 md:mt-8 lg:mt-16">
        {
          isDesktop ?
            <div className="flex justify-between gap-8">
              {/* ✅ Sidebar */}
              <div className="w-[26%]">
                <h3 className="text-xl xl:text-2xl font-medium mb-4">
                  Filter By Activity
                </h3>

                <ScrollArea className="h-123 xl:h-100 2xl:h-120 pr-4">
                  <Tabs
                    orientation="vertical"
                    value={activeCategory}
                    onValueChange={setActiveCategory}
                  >
                    <TabsList className="flex flex-col gap-3 size-full bg-transparent p-0">
                      {categories.map((cat) => (
                        <TabsTrigger
                          key={cat.id}
                          value={cat.id}
                          className="relative group overflow-hidden rounded-xl p-0 w-full border border-transparent data-[state=active]:border-primary"
                        >
                          <Image
                            src={cat.image}
                            alt={cat.title}
                            width={300}
                            height={120}
                            className="w-full h-32 xl:h-40 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                          />
                          <span className="absolute bottom-3 left-4 font-medium text-white text-base z-10">
                            {cat.title}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/10"></div>
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </ScrollArea>
              </div>

              {/* ✅ Main Content Grid */}
              <div className="w-[70%]">
                <h3 className="text-xl xl:text-2xl font-medium mb-6">
                  {categories.find((cat) => cat.id === activeCategory)?.title}
                </h3>
                <ScrollArea className="h-123 xl:h-100 2xl:h-120 pr-4">
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                    {activeData.map((person) => (
                      <div key={person.id} className="rounded-2xl overflow-hidden">
                        <Image
                          src={person.image}
                          alt={person.title}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            :
            <Tabs
              value={activeCategory}
              onValueChange={(val) => setActiveCategory(val)}
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
              {categories.map((cat) => (
                <TabsContent key={cat.id} value={String(cat.id)}>
                  {activeData.length > 0 ? (
                    <Carousel>
                      <CarouselContent>
                        {activeData.map((person) => (
                          <CarouselItem
                            key={person.id}
                            className="basis-full sm:basis-1/2 lg:basis-1/4"
                          >
                            <div key={person.id} className="rounded-2xl overflow-hidden">
                              <Image
                                src={person.image}
                                alt={person.title}
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover rounded-2xl shadow-md hover:scale-[1.02] transition-transform duration-300"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  ) : (
                    <div className="bg-[url('/images/no-data/no-data-bg.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-y-8 py-8 h-100 rounded-[20px] drop-shadow-2xl">
                      <h3 className="font-medium text-3xl text-white text-center">No Creator Found</h3>
                      <Image src="/images/no-data/no-data.svg" alt="No Data Image" title="No Data Image" height={566} width={566} className="size-60 mx-auto object-contain" />
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
        }
      </div>
    </>
  );
}
