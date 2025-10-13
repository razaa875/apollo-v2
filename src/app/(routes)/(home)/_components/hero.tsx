"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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
