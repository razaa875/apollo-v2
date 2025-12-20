"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";



export default function AboutApollo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🩵 Prevents hydration mismatch

  return (
    <>
      <section className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row-reverse gap-8 justify-between items-center mt-24 xxl:mt-44">
        {/* Left Content */}
        <div className="w-full lg:w-[49%] space-y-6 xl:space-y-9">
          <h2 className="text-3xl lg:text-3xl font-medium">
            Our wide All Mountain ski, designed for a wide range of adventures.
          </h2>

          <p className="font-normal text-base lg:text-lg text-black/40">
            Our wide All Mountain ski, designed for a wide range of adventures.
            For a lighter weight skier it works perfect as a powder ski as well.
            Featuring a 106mm waist and a 19m turning radius at 178cm.
          </p>
        </div>

        {/* Right Video Card */}
        <Image
          src="/images/blog/skates.webp"
          alt="Astronaut"
          height={1024}
          width={1024}
          className="w-full lg:w-[47%] h-120 rounded-2xl object-cover"
        />
      </section>

      <section className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row gap-8 justify-between items-center mt-24 xxl:mt-44">
        {/* Left Content */}
        <div className="w-full lg:w-[49%] space-y-6 xl:space-y-9">
          <h2 className="text-3xl lg:text-3xl font-medium">
            Our wide All Mountain ski, designed for a wide range of adventures.
          </h2>

          <p className="font-normal text-base lg:text-lg text-black/40">
            Our wide All Mountain ski, designed for a wide range of adventures.
            For a lighter weight skier it works perfect as a powder ski as well.
            Featuring a 106mm waist and a 19m turning radius at 178cm.
          </p>

          <Button
            fullWidth
            variant="outline"
            className="w-[70%] uppercase border-2 border-white py-7 font-medium text-base lg:text-lg drop-shadow-2xl"
          >
            Shop Now <ArrowUpRight className="size-5 ml-4" />
          </Button>
        </div>

        {/* Right Video Card */}
        <Image
          src="/images/blog/mountain.webp"
          alt="Astronaut"
          height={1024}
          width={1024}
          className="w-full lg:w-[47%] h-120 rounded-2xl object-cover"
        />
      </section>

      <section className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row-reverse gap-8 justify-between items-center mt-24 xxl:mt-44">
        {/* Left Content */}
        <div className="w-full lg:w-[49%] space-y-6 xl:space-y-9">
          <h2 className="text-3xl lg:text-3xl font-medium">
            Our wide All Mountain ski, designed for a wide range of adventures.
          </h2>

          <p className="font-normal text-base lg:text-lg text-black/40">
            Our wide All Mountain ski, designed for a wide range of adventures.
            For a lighter weight skier it works perfect as a powder ski as well.
            Featuring a 106mm waist and a 19m turning radius at 178cm.
          </p>
        </div>

        {/* Right Video Card */}
        <Image
          src="/images/blog/skigirl.webp"
          alt="Astronaut"
          height={1024}
          width={1024}
          className="w-full lg:w-[47%] h-120 rounded-2xl object-cover"
        />
      </section>
    </>
  );
}
