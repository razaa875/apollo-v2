"use client";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
export default function HomeMain() {
  const isDesktop = useMediaQuery("(min-width: 768px)", {
    initializeWithValue: false,
  });
  return (
    <>
      <section className="relative h-[80dvh] md:h-[90dvh] xl:h-[80dvh] md:w-[90%] mx-auto flex md:flex-col justify-center items-center bg-[url(/images/dashboard/squareBackground.webp)] bg-bottom bg-cover">
        {isDesktop && (
          <div className="absolute top-[1%] left-0 h-84 lg:h-64 xl:h-72">
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
          Welcome <br className="md:hidden" /> To <br className="md:hidden" />{" "}
          Apollo
        </h1>
        <p className="text-2xl font-normal text-center mt-8 md:mt-2">
          Every product tested. Every brand vetted. Every decision earned.
        </p>
        {isDesktop && (
          <div className="absolute bottom-[1%] right-0 h-84 lg:h-64 xl:h-72">
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
    </>
  );
}
