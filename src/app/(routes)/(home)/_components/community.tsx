"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const tableData = [
  { id: "1", name: "John Doe", imageUrl: "/images/home/1.jpg" },
  { id: "2", name: "Olivia Martin", imageUrl: "/images/home/2.jpg" },
  { id: "3", name: "Emily Brown", imageUrl: "/images/home/3.jpg" },
  { id: "4", name: "Sarah Williams", imageUrl: "/images/home/4.jpg" },
  { id: "5", name: "Joseph Martinez", imageUrl: "/images/home/5.jpg" },
];

export default function Community() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!mounted) return null;

  return (
    <section className="pt-8 lg:pt-12 xl:pt-20">
      <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
        Community Voting
      </h2>
      <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
        Explore reviews, demos, and live action.
      </p>

      <Carousel className="w-[90%] mx-auto lg:mr-0 lg:ml-auto">
        <CarouselContent>
          {/* === 5 CARDS LOOP === */}
          {[...Array(5)].map((_, idx) => (
            <CarouselItem key={idx} className="basis-full lg:basis-[60%] mb-8">
              <Card className="w-full bg-white/50 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-2xl xl:text-3xl font-medium text-center">
                    Which Category Should We Test Next? #{idx + 1}
                  </CardTitle>
                </CardHeader>

                <CardContent className="shadow-none">
                  <form>
                    {isDesktop ? (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-center">1st</TableHead>
                            <TableHead className="text-center">2nd</TableHead>
                            <TableHead className="text-center">3rd</TableHead>
                            <TableHead className="text-center">4th</TableHead>
                            <TableHead className="text-center">5th</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tableData.map((item, i) => (
                            <TableRow key={i}>
                              <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                  <Avatar>
                                    <AvatarImage src={item.imageUrl} />
                                    <AvatarFallback>{item.name[0]}</AvatarFallback>
                                  </Avatar>
                                  <p>{item.name}</p>
                                </div>
                              </TableCell>
                              {[...Array(5)].map((_, j) => (
                                <TableCell key={j} className="text-center">
                                  <input
                                    type="radio"
                                    name={`vote-${item.id}-${idx}`}
                                    value={`option-${j + 1}`}
                                    className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-gray-700 checked:border-gray-700 transition-all cursor-pointer"
                                  />
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <ScrollArea className="h-70">
                        {tableData.map((item, i) => (
                          <Card key={i} className="p-4 mb-4">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={item.imageUrl} />
                                <AvatarFallback>{item.name}</AvatarFallback>
                              </Avatar>
                              <p className="font-medium text-lg">{item.name}</p>
                            </div>

                            <div className="flex justify-between mt-2">
                              {[...Array(5)].map((_, j) => (
                                <label
                                  key={j}
                                  className="flex flex-col items-center text-xs text-gray-500"
                                >
                                  <input
                                    type="radio"
                                    name={`vote-mobile-${item.id}-${idx}`}
                                    value={`option-${j + 1}`}
                                    className="appearance-none size-5 border-2 border-gray-400 rounded-full checked:bg-gray-700 checked:border-gray-700 transition-all cursor-pointer"
                                  />
                                  <span className="mt-1">{j + 1}</span>
                                </label>
                              ))}
                            </div>
                          </Card>
                        ))}
                      </ScrollArea>
                    )}
                  </form>
                </CardContent>

                <CardFooter className="flex-col gap-2">
                  <Button
                    variant="outline"
                    type="submit"
                    className="w-full mt-4 border-white border-2 bg-white/50 hover:bg-transparent drop-shadow-2xl"
                  >
                    SUBMIT
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* === CONTROLS === */}
        <div className="absolute right-12 md:right-14 lg:right-28 -top-8 md:-top-10">
          <CarouselPrevious className="rounded-sm border-none bg-white ml-3 hover:bg-amber-50" />
          <CarouselNext className="rounded-sm border-none bg-white hover:bg-amber-50" />
        </div>
      </Carousel>
    </section>
  );
}
