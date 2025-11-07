// components/HeroBanner.jsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function MidBanner() {
  return (
    <section className="relative w-[90%] mx-auto h-[624px] rounded-2xl overflow-hidden flex items-center mt-24 xl:mt-44">
      {/* Background Image */}
      <Image
        src="/images/blog/midBanner.webp" // <-- replace with your image path
        alt="Skiing Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 text-white px-8 sm:px-16 md:px-24 w-full xl:w-[50%]">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 leading-tight">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-sm font-normal sm:text-base text-gray-200 mb-6">
          Our wide All Mountain ski, designed for a wide range of adventures.
          For a lighter weight skier it works perfect as a powder ski as well.
          Featuring a 106mm waist and a 19m turning radius at 178cm.
        </p>
        {/* <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all">
          SHOP NOW →
        </button> */}
        <Button
          fullWidth
          //   variant="outline"
          variant="default"
          className="w-[70%] bg-[#FFFFFF80] rounded-[20px] text-black uppercase border-2 border-white py-7 font-medium text-base lg:text-lg drop-shadow-2xl hover:text-white"
        >
          Shop Now <ArrowUpRight className="size-5 ml-4" />
        </Button>
      </div>
    </section>
  );
}
