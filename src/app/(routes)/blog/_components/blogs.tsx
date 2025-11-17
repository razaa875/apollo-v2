"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { blogsData } from "../constants/data";



export default function Blogs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🩵 Prevents hydration mismatch

  return (
    <>
      {
        blogsData.map((data, i) => (
          <div key={i} className={`w-[90%] mx-auto flex flex-col-reverse ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 justify-between items-center mt-24 xl:mt-44`}>
            {/* Left Content */}
            <div className="w-full lg:w-[49%] space-y-6 xl:space-y-9">
              <h2 className="text-3xl lg:text-3xl font-medium">
                {data.title}
              </h2>

              <p className="font-normal text-base lg:text-lg text-black/40">
                {data.descp}
              </p>
              <Link
                href={`/blog/${data.slug}`}
              >
                <Button
                  fullWidth
                  variant="outline"
                  className="w-[70%] uppercase border-2 border-white py-7 font-medium text-base lg:text-lg drop-shadow-2xl"
                >
                  Read More <ArrowUpRight className="size-5 ml-4" />
                </Button>
              </Link>
            </div>

            {/* Right Video Card */}
            <Image
              src={data.img}
              alt="Astronaut"
              height={1024}
              width={1024}
              className="w-full lg:w-[47%] h-120 rounded-2xl object-cover"
            />
          </div>
        ))
      }

    </>
  );
}
