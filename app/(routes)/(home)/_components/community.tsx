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
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const tableData = [
  { id: "1", name: "John Doe", imageUrl: "/images/home/1.jpg" },
  { id: "2", name: "Olivia Martin", imageUrl: "/images/home/2.jpg" },
  { id: "3", name: "Emily Brown", imageUrl: "/images/home/3.jpg" },
  { id: "4", name: "Sarah Williams", imageUrl: "/images/home/4.jpg" },
  { id: "5", name: "Joseph Martinez", imageUrl: "/images/home/5.jpg" },
];

type Option = {
  id: number;
  label: string;
  votes: number;
};


const initialOptions: Option[] = [
  {
    id: 1,
    label: "Affordable prices make fast fashion an easy and budget-friendly choice compared to sustainable brands",
    votes: 94,
  },
  {
    id: 2,
    label: "Trendy styles and frequent new collections that are always available and easy to access",
    votes: 36,
  },
  {
    id: 3,
    label: "Limited availability and higher cost of sustainable or ethical fashion alternatives",
    votes: 10,
  },
  {
    id: 4,
    label: "Long-standing shopping habits and the difficulty of changing personal buying behavior",
    votes: 1,
  },
];

export default function Community() {
  const [mounted, setMounted] = useState(false);
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const [selected, setSelected] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const totalVotes = options.reduce((acc, o) => acc + o.votes, 0);

  const handleVote = (id: number) => {
    if (hasVoted) return;
    setSelected(id);
    setOptions((prev) =>
      prev.map((o) => (o.id === id ? { ...o, votes: o.votes + 1 } : o))
    );
    setHasVoted(true);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="pt-8 lg:pt-12 xl:pt-20">
      <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">
        Community Voting
      </h2>
      <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3 mb-20">
        Explore reviews, demos, and live action.
      </p>

      <Carousel className="w-[90%] 2xl:w-[95%] mx-auto lg:mr-0 lg:ml-auto">
        <CarouselContent>
          <CarouselItem className="basis-full lg:basis-[60%] mb-8 mr-3">
            <Card className="w-full bg-white/50 cursor-pointer lg:h-145">
              <CardHeader>
                <CardTitle className="text-2xl xl:text-3xl font-medium text-center">
                  Which Category Should We Test Next?
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
                                  name={`vote-${item.id}`}
                                  value={`option-${j + 1}`}
                                  className="appearance-none size-4 border-2 border-gray-400 rounded-full checked:bg-gray-700 checked:border-gray-700 transition-all cursor-pointer"
                                />
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <>
                      {tableData.map((item, i) => (
                        <Card key={i} className="p-4 mb-4">
                          <div className="flex gap-x-4 items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={item.imageUrl} />
                                <AvatarFallback>{item.name}</AvatarFallback>
                              </Avatar>
                              <p className="font-medium text-sm">{item.name}</p>
                            </div>
                            <div className="flex gap-x-2 mt-2">
                              {[...Array(5)].map((_, j) => (
                                <label
                                  key={j}
                                  className="flex flex-col items-center text-xs text-gray-500"
                                >
                                  <input
                                    type="radio"
                                    name={`vote-mobile-${item.id}`}
                                    value={`option-${j + 1}`}
                                    className="appearance-none size-5 border-2 border-gray-400 rounded-full checked:bg-gray-700 checked:border-gray-700 transition-all cursor-pointer"
                                  />
                                  <span className="mt-1">{j + 1}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </>
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
          <CarouselItem className="basis-full lg:basis-[60%] mb-8 mr-3">
            <Card className="w-full bg-white/50 cursor-pointer lg:h-145">
              <CardHeader>
                <CardTitle className="text-2xl xl:text-3xl font-medium text-center">
                  What Make It Hard For You to Quit Fast Fashion ?
                </CardTitle>
              </CardHeader>

              <CardContent className="shadow-none">
                <div className="flex items-center gap-x-4 mt-4">
                  <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-medium text-lg xl:text-xl">200+ People voted</h3>
                </div>
                <Separator orientation="horizontal" className="my-4 lg:mt-6" />
                <div className={`flex flex-col gap-y-4 ${hasVoted ? 'lg:mt-10 mb-2' : 'lg:mt-12 mb-8'}`}>
                  {options.map((option) => {
                    const percentage = Math.round((option.votes / totalVotes) * 100);

                    return (
                      <div
                        key={option.id}
                        onClick={() => handleVote(option.id)}
                        className={cn(
                          "cursor-pointer rounded-xl border border-[#2C2C2C26] p-4 transition",
                          selected === option.id && " bg-transparent",
                          hasVoted && "cursor-default"
                        )}
                      >
                        <div className="flex items-center justify-between gap-x-3 mb-2">
                          <span className="text-sm font-medium">{option.label}</span>
                          {hasVoted && (
                            <span className="text-sm font-semibold">{percentage}%</span>
                          )}
                        </div>

                        {hasVoted && (
                          <Progress value={percentage} className="h-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-full lg:basis-[60%] mb-8 mr-3">
            <Card className="w-full bg-white/50 cursor-pointer lg:h-145">
              <CardHeader>
                <CardTitle className="text-2xl xl:text-3xl font-medium text-center">
                  What Brands Should we invite to Apollo ?
                </CardTitle>
              </CardHeader>

              <CardContent className="shadow-none">
                <h3 className="font-medium text-lg xl:text-xl mt-4">Out standing mentions</h3>
                <Separator orientation="horizontal" className="my-4 lg:mt-6" />
                <div className="mt-10 space-y-4">
                  <Input name="name" placeholder="Your Name" className="h-15 md:h-15 " />
                  <Input name="email" placeholder="Your Email" className="h-15 md:h-15 " />
                </div>
              </CardContent>

              <CardFooter className="flex-col gap-2 mt-6">
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
