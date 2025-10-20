"use client";

import { AlignLeft } from "lucide-react";
import Link from "next/link";

export default function SitemapMain() {
  return (
    <main className="pt-28 md:pt-32">
      <div className="w-[90%] lg:w-[80%] mx-auto mb-6 lg:mb-14">
        <div className="text-center ">
          <h1 className="font-medium text-4xl lg:text-6xl text-center mt-8">Sitemaps</h1>
          <p className="text-black/60 font-normal text-sm lg:text-base mt-2 mb-16">
            Mapping the Path to Better Website Structure
          </p>
        </div>
        <div className="flex flex-wrap justify-between mt-16">
          <div className="w-full lg:w-[30%]">
            <header className="flex items-center w-full mb-2">
              <AlignLeft className="text-primary" />
              <h4 className="font-bold text-xl ml-6">Landing Page</h4>
            </header>

            <section className="flex items-end">
              <div className="w-fit flex items-center flex-col">
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
                <div className="border-l-2 border-[#555555] border-dashed h-[260px]"></div>
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
              </div>
              <div className="h-[250px] flex flex-col justify-between items-start -mb-[6px]">
                <Link
                  href={"/"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Home
                </Link>
                <Link
                  href={"/services"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Our Services
                </Link>
                <Link
                  href={"/gallery"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Gallery
                </Link>
                <Link
                  href={"/pricing"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Prices
                </Link>
                <Link
                  href={"/contact-us"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Contact Us
                </Link>
              </div>
            </section>
          </div>
          <div className="w-full lg:w-[30%] mt-16 lg:mt-0">
            <header className="flex items-center w-full mb-2">
              <AlignLeft className="text-primary" />
              <h4 className="font-bold text-xl ml-6">Our Services</h4>
            </header>

            <section className="flex items-end">
              <div className="w-fit flex items-center flex-col">
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
                <div className="border-l-2 border-[#555555] border-dashed h-[260px]"></div>
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
              </div>
              <div className="h-[250px] flex flex-col justify-between items-start -mb-[6px]">
                <Link
                  href={"/chenille-embroidery-digitizing"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Embroidery Digitizing
                </Link>
                <Link
                  href={"/applique-embroidery-digitizing"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Applique Digitizing
                </Link>
                <Link
                  href={"/puff-embroidery-digitizing"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  3D Puff Digitizing
                </Link>
                <Link
                  href={"/chenille-embroidery-digitizing"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Chenille Digitizing
                </Link>
                <Link
                  href={"/vector-tracing-services"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Vector Tracing/Raster to Vector
                </Link>
              </div>
            </section>
          </div>
          <div className="w-full lg:w-[30%] lg:pl-10 mt-16 lg:mt-0">
            <header className="flex items-end mb-2">
              <AlignLeft className="text-primary" />
              <h4 className="font-bold text-xl ml-6">General Links</h4>
            </header>

            <section className="flex items-end">
              <div className="w-fit flex items-center flex-col">
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
                <div className="border-l-2 border-[#555555] border-dashed h-[310px]"></div>
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
              </div>
              <div className="h-[300px] flex flex-col justify-between items-start -mb-[6px]">
                <Link
                  href={"/premium-design"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary mr-5 bg-primary"></div>
                  Premium Designs
                </Link>
                <Link
                  href={"/free-design"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Free Designs
                </Link>
                <Link
                  href={"/"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Size Guideline
                </Link>
                <Link
                  href={"/blogs"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Blogs
                </Link>
                <Link
                  href={"/login"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Register/Login
                </Link>
                <Link
                  href={"/vector-tracing-services"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Order Now
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-16 lg:mb-24">
          <div className="w-full lg:w-[30%]">
            <header className="flex items-end mb-2">
              <AlignLeft className="text-primary" />
              <h4 className="font-bold text-xl ml-6">Policies</h4>
            </header>

            <section className="flex items-end">
              <div className="w-fit flex items-center flex-col">
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
                <div className="border-l-2 border-[#555555] border-dashed h-[160px]"></div>
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
              </div>
              <div className="h-[150px] flex flex-col justify-between items-start -mb-[6px]">
                <Link
                  href={"/refund-policy"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary mr-5 bg-primary"></div>
                  Refund Policy
                </Link>
                <Link
                  href={"/terms-condition"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Terms & Conditions
                </Link>
                <Link
                  href={"/privacy-policy"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Privacy Policy
                </Link>
              </div>
            </section>
          </div>
          <div className="w-full lg:w-[30%] mt-16 lg:mt-0">
            <header className="flex items-end mb-2">
              <AlignLeft className="text-primary" />
              <h4 className="font-bold text-xl ml-6">Social Media</h4>
            </header>

            <section className="flex items-end">
              <div className="w-fit flex items-center flex-col">
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
                <div className="border-l-2 border-[#555555] border-dashed h-[160px]"></div>
                <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary"></div>
              </div>
              <div className="h-[150px] flex flex-col justify-between items-start -mb-[6px]">
                <Link
                  href={"/refund-policy"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary mr-5 bg-primary"></div>
                  Instagram
                </Link>
                <Link
                  href={"/terms-condition"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  Facebook
                </Link>
                <Link
                  href={"/privacy-policy"}
                  className="font-normal group flex items-center justify-center cursor-pointer"
                >
                  <div className="border-t-2 border-[#555555] border-dashed w-10 transition-all ease-in duration-300 group-hover:w-14"></div>
                  <div className="h-3 w-3 rounded-full border-[1.5px] border-primary bg-primary mr-5"></div>
                  YouTube
                </Link>
              </div>
            </section>
          </div>
          <div className="w-[30%] mt-16 lg:mt-0"></div>
        </div>
      </div>
    </main>
  );
}
