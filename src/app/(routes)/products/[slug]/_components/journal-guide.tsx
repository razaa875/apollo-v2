"use client";

import { IProduct } from "@/common/models/interface";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function JournalGuide({ product }: { product: IProduct }) {
  const data = [
    {
      id: 1,
      title: "Space stocks soar into orbit",
      name: "Space: The Final Frontier Is Open For Business",
      company: "17 Companies",
      status: "Open",
      img: "/images/product-detail/space.png",
    },
    {
      id: 2,
      title: "Crypto Stocks",
      name: "The Rise of the Crypto Economy",
      company: "14 Companies",
      status: "Open",
      img: "/images/product-detail/crypto.png",
    },
    {
      id: 3,
      title: "Space stocks soar into orbit",
      name: "Robotics: The Power Behind Industry Evolution",
      company: "28 Companies",
      status: "Open",
      img: "/images/product-detail/robots.png",
    },
    {
      id: 4,
      title: "The Next Frontier of Technology",
      name: "AI - Boom or Bust?",
      company: "42 Companies",
      status: "Open",
      img: "/images/product-detail/man.png",
    },
    {
      id: 5,
      title: "A new era looms",
      name: "Rising Global Conflict",
      company: "12 Companies",
      status: "Open",
      img: "/images/product-detail/global.png",
    },
  ];

  return (
    <>
      <Separator className="mb-8 md:mb-12 mt-4 md:mt-8" />
      <div className="w-[90%] mx-auto">
        <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
          Journals, Guides, Lists
        </h2>
        <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
          Looking for more information? Check out some of our articles!
        </p>
        <div className="flex flex-wrap gap-y-4 lg:justify-between">
          {data.map((item) => (
            <div key={item.id} className="w-full lg:w-[18%] relative drop-shadow-2xl">
              <Image
                src={item.img}
                alt={product.title}
                height={200}
                width={400}
                loading="lazy"
                className="w-full h-[350px] object-cover rounded-[20px] drop-shadow-xl"
              />
              <div className="absolute bottom-4 px-4">
                <p className="text-white/90 text-sm">{item.title}</p>
                <p className="text-white text-xl mt-1">{item.name}</p>
                <div className="flex justify-between mt-3">
                    <p className="text-white/90 text-sm">{item.company}</p>
                    <p className="bg-white/10 text-white px-4 py-1 text-sm rounded-full">{item.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
