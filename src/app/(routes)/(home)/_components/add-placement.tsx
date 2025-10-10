import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PollCard from "@/src/app/(routes)/(home)/_components/pollcard";

export default function AddPlacement() {
  const tableData = [
    {
      id: "1",
      name: "John Doe",
      img: "url",
    },
    {
      id: "2",
      name: "Olivia Martin",
      img: "url",
    },
    {
      id: "3",
      name: "Emily Brown",
      img: "url",
    },
    {
      id: "4",
      name: "Sarah Williams",
      img: "url",
    },
    {
      id: "5",
      name: "Joseph Martinez",
      img: "url",
    },
    {
      id: "6",
      name: "Joseph Martinez",
      img: "url",
    },
    {
      id: "7",
      name: "Joseph Martinez",
      img: "url",
    },
  ];

  return (
    <>
      <div className="my-5 py-16 border-t border-[#2C2C2C26]">
        <h1 className="text-center text-6xl font-medium">Ad Placement</h1>
        <p className="text-center text-2xl font-normal mt-3">
          Explore reviews, demos, and live action.
        </p>
      </div>

      <div className="flex justify-center overflow-x-hidden">
        <div className="w-[90%] pt-5 mb-5">
          <Carousel orientation="horizontal">
            <div className="pt-10 ">
              <CarouselContent className="pl-10 pb-10 bg-transparent">
                <CarouselItem className="pl-1 ml-3 overflow-hidden md:basis-1/2 lg:basis-[90%]">
                  <div className="rounded-2xl h-[700px] shadow-[0px_12px_32px_0px_#0000001A] bg-[url(/images/dashboard/smartWatchBanner.png)] bg-cover bg-no-repeat bg-center"></div>
                </CarouselItem>
                <CarouselItem className="pl-1 ml-3 overflow-hidden md:basis-1/2 lg:basis-[90%]">
                  <div className="rounded-2xl h-[700px] w-full shadow-[0px_12px_32px_0px_#0000001A] bg-[url(/images/dashboard/banner2.png)] bg-cover bg-no-repeat bg-center"></div>
                </CarouselItem>
              </CarouselContent>
            </div>
            <div className="absolute right-28 top-0">
              <CarouselPrevious className="rounded-sm border-none bg-white ml-5 hover:bg-amber-50" />
              <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="relative flex justify-end">
        <Image
          src="/images/dashboard/spaceman5.webp"
          width={333}
          height={500}
          alt="Picture of the author"
          className="w-60 h-[313px] object-cover rounded-2xl absolute -top-32 right-24"
        />
      </div>
    </>
  );
}
