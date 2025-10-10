"use client";
import Image from "next/image";
import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function ApolloCreators() {
  const brandData = [
    {
      id: "1",
      company: "Saghun Martinez",
      productName: "Horizonx Smartwatch",
      price: "$330.00",
      img: "/images/dashboard/product.png",
    },
    {
      id: "2",
      company: "Saghun Martinez",
      productName: "Horizonx Smartwatch",
      price: "$330.00",
      img: "/images/dashboard/product2.png",
    },
    {
      id: "3",
      company: "Saghun Martinez",
      productName: "Horizonx Smartwatch",
      price: "$330.00",
      img: "/images/dashboard/product3.png",
    },
    {
      id: "4",
      company: "Saghun Martinez",
      productName: "Horizonx Smartwatch",
      price: "$330.00",
      img: "/images/dashboard/product4.png",
    },
    {
      id: "5",
      company: "Saghun Martinez",
      productName: "Horizonx Smartwatch",
      price: "$330.00",
      img: "/images/dashboard/product5.png",
    },
    {
      id: "6",
      company: "Saghun Martinez",
      productName: "Horizonx Smartwatch",
      price: "$330.00",
      img: "/images/dashboard/product6.png",
    },
  ];

  return (
    <>
      <div className="my-5 py-16 border-t border-[#2C2C2C26]">
        <h1 className="text-center text-6xl font-medium">Apollo Creators</h1>
      </div>

      <div className="flex w-[90%] mx-auto  gap-6">
        <Tabs
          defaultValue="watches"
          className="grid grid-cols-[30%_60%] items-center w-full bg-transparent border-none"
        >
          <div className="w-full">
            <ScrollArea className="h-[600px] w-[full] rounded-md  p-4 bg-red">
              <p className="text-4xl font-medium">Filter By Activity</p>

              <TabsList className="flex flex-col gap-3 w-full p-3 h-auto bg-transparent">
                <TabsTrigger
                  value="hikers"
                  className="w-[380px] h-[191px] cursor-pointer rounded-2xl text-white font-medium text-[20px]  flex-none flex justify-start items-end bg-[linear-gradient(180deg,rgba(36,33,33,0)_0%,#242121_100%)], bg-[url('/images/dashboard/watch.jpg')] bg-cover bg-center bg-no-repeat"
                >
                  Hikers
                </TabsTrigger>
                <TabsTrigger
                  value="climbers"
                  className="w-[380px] h-[191px] cursor-pointer rounded-2xl text-white font-medium text-[20px]  flex-none flex justify-start items-end bg-[linear-gradient(180deg,rgba(36,33,33,0)_0%,#242121_100%)], bg-[url('/images/dashboard/clothing.jpg')] bg-cover bg-center bg-no-repeat"
                >
                  Climbers
                </TabsTrigger>
                <TabsTrigger
                  value="perfumes"
                  className="w-[380px] h-[191px] cursor-pointer rounded-2xl text-white font-medium text-[20px]  flex-none flex justify-start items-end bg-[linear-gradient(180deg,rgba(36,33,33,0)_0%,#242121_100%)], bg-[url('/images/dashboard/perfumes.webp')] bg-cover bg-center bg-no-repeat"
                >
                  Ski
                </TabsTrigger>
                <TabsTrigger
                  value="jewelry"
                  className="w-[380px] h-[191px] cursor-pointer rounded-2xl text-white font-medium text-[20px]  flex-none flex justify-start items-end bg-[linear-gradient(180deg,rgba(36,33,33,0)_0%,#242121_100%)], bg-[url('/images/dashboard/Jewelry.jpg')] bg-cover bg-center bg-no-repeat"
                >
                  Jewelry
                </TabsTrigger>
              </TabsList>
            </ScrollArea>
          </div>
          <div>
            <TabsContent value="hikers">
              <p className="text-4xl font-medium">Hikers</p>
              <div className="grid grid-cols-3">
                {brandData.map((item) => (
                  <Card
                    key={item.id}
                    className="w-[333px] bg-transparent shadow-none border-none"
                  >
                    <CardContent className="pl-0">
                      <Image
                        src={item.img}
                        width={333}
                        height={500}
                        alt="Picture of the author"
                        className="w-60 h-full object-cover rounded-2xl"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="climbers">climbers</TabsContent>
            <TabsContent value="perfumes">
              <p>Ski</p>
            </TabsContent>
            <TabsContent value="jewelry">
              <p>jewelry</p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </>
  );
}
