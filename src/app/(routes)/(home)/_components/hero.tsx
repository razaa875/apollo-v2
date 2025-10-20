"use client";

import { useMediaQuery } from "usehooks-ts";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  });

  useEffect(() => {
    // Simulate loading time (e.g. fetching images or data)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="relative h-90 lg:h-110 2xl:h-130 flex justify-center items-center">
        <Skeleton className="w-full h-[80%]" />
      </section>
    );
  }

  return (
    <section className="relative h-90 lg:h-110 2xl:h-130 px-[5%] flex flex-col justify-center items-center bg-[url(/images/dashboard/squareBackground.webp)] bg-bottom bg-cover">
      {isDesktop && (
        <div className="absolute top-0 xl:top-[5%] left-0 h-40 lg:h-50 xl:h-72">
          <Image
            src="/images/dashboard/spaceman.webp"
            width={454}
            height={463}
            alt="Picture of the author"
            className="size-full object-contain"
          />
        </div>
      )}
      <h1 className="text-6xl lg:text-7xl font-medium text-center">
        Welcome <br className="md:hidden" /> To <br className="md:hidden" />
        Apollo
      </h1>
      <p className="text-lg lg:text-xl font-normal text-center mt-8 md:mt-4 text-black/50">
        Every product tested. Every brand vetted. Every decision earned.
      </p>
      {isDesktop && (
        <div className="absolute bottom-0 lg:bottom-[8%] right-0 h-40 lg:h-50 xl:h-72">
          <Image
            src="/images/dashboard/spaceman2.webp"
            width={454}
            height={463}
            alt="Picture of the author"
            className="size-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
