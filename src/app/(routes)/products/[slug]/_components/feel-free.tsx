"use client";

import { useEffect, useState } from "react";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function FeelFree() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🩵 Prevents hydration mismatch

  return (
    <>
      <Separator className="my-8 md:mb-12 lg:mb-20 lg:mt-16" />
      <section className="w-[90%] mx-auto flex flex-col lg:items-center gap-y-12 lg:flex-row justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-[49%] space-y-6 xl:space-y-9">
          <h3 className="text-2xl lg:text-3xl">
            Feel Free to ask (Specific Company Name), Apollo Staff, or past purchasers!
          </h3>
          <p className="font-normal text-base lg:text-lg text-black/40">
            This is our carving ski. Inspired by the dynamic world of free
            skiing and made for groomed slopes and sporadic off-piste
            adventures. Featuring a 93mm waist and a 15m turning radius at
            175cm. Should be mounted using 4.1 × 9mm drill bit. There is a typo
            on the skis themselves so make sure you give this information to the
            shop mounting your bindings.
          </p>

          <Button
            fullWidth
            variant="outline"
            className="w-[70%] uppercase border-2 border-white py-7 font-medium text-base lg:text-lg drop-shadow-2xl"
          >
            Chat With Us Now <ArrowUpRight className="size-5 ml-4" />
          </Button>
        </div>

        {/* Right Video Card */}
        <video
          controls
          muted
          className="w-full lg:w-[47%] h-100 rounded-2xl object-cover"
          poster="/images/home/why-apollo.webp" // optional thumbnail
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}
