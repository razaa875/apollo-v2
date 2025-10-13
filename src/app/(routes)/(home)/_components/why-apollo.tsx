"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function WhyApollo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🩵 Prevents hydration mismatch

  return (
    <>
      <section className="w-[90%] mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-[49%] space-y-6 xl:space-y-9">
          <h2 className="text-4xl lg:text-6xl font-medium">
            Why Apollo?
          </h2>
          <h3 className="text-2xl lg:text-3xl">
            Our Wide All Mountain Ski, Designed For A Wide Range Of
            Adventures.
          </h3>
          <p className="font-normal text-base lg:text-lg text-black/40">
            This is our carving ski. Inspired by the dynamic world of free
            skiing and made for groomed slopes and sporadic off-piste
            adventures. Featuring a 93mm waist and a 15m turning radius at
            175cm. Should be mounted using 4.1 × 9mm drill bit. There is a
            typo on the skis themselves so make sure you give this information
            to the shop mounting your bindings.
          </p>

          <Button fullWidth variant="outline" className="w-[70%] uppercase border-2 border-white py-7 font-medium text-base lg:text-lg drop-shadow-2xl">Chat With Us Now <ArrowUpRight className="size-5 ml-4" /></Button>
        </div>

        {/* Right Video Card */}
        <video
          controls
          muted
          className="w-full lg:w-[47%] h-120 rounded-2xl object-cover"
          poster="/images/home/why-apollo.webp" // optional thumbnail
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <Separator className="my-8 md:mb-12 lg:mb-20 lg:mt-16" />

      <section className="w-[90%] mx-auto flex flex-col md:flex-row-reverse justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-[49%] space-y-6 xl:space-y-9">
          <h2 className="text-4xl lg:text-6xl font-medium">
            Become An Astronaut
          </h2>
          <h3 className="text-2xl lg:text-3xl">
            Our wide All Mountain ski, designed for a wide range of adventures.
          </h3>
          <p className="font-normal text-base lg:text-lg text-black/40">
            This is our carving ski. Inspired by the dynamic world of free skiing and made for groomed slopes and sporadic off-piste adventures. Featuring a 93mm waist and a 15m turning radius at 175cm. Should be mounted using 4.1 x 9mm drill bit. There is a typo on the skis themselves so make sure you give this information to the shop mounting your bindings.
          </p>
          <Link href="/sign-up">
            <Button fullWidth variant="outline" className="w-[70%] uppercase border-2 border-white py-7 font-medium text-base lg:text-lg drop-shadow-2xl">Sign up now <ArrowUpRight className="size-5 ml-4" /></Button>
          </Link>
        </div>

        {/* Right Video Card */}
        <Image src="/images/home/astronaut.webp" alt="Astronaut" height={1024} width={1024} className="w-full lg:w-[47%] h-120 rounded-2xl object-cover" />
      </section>

      <Separator className="my-8 md:mb-12 lg:mb-20 lg:mt-16" />

    </>
  );
}
