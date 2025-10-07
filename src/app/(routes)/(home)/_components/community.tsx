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

export default function Community() {
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
      <div className="my-5 py-16">
        <h1 className="text-center text-6xl font-medium">Community Voting</h1>
        <p className="text-center text-2xl font-normal mt-3">
          Explore reviews, demos, and live action.
        </p>
      </div>

      <div className="flex justify-end overflow-x-hidden">
        <div className="w-[90%] pt-5 mb-5">
          <Carousel orientation="horizontal">
            <div className="pt-10 ">
              <CarouselContent className="pl-10 pb-10 bg-transparent">
                <CarouselItem className="pl-1 ml-3 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white rounded-2xl h-[516px] shadow-[0px_12px_32px_0px_#0000001A]">
                    <Card className="w-full border-none shadow-none h-28">
                      <CardHeader>
                        <CardTitle className="text-3xl font-medium text-center">
                          Which Category Should We Test Next?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ScrollArea className="h-[300px]">
                          <form>
                            <Table>
                              <TableHeader>
                                <TableRow>
                                  <TableHead className="w-80">
                                    Lorem Ipsum Dio Dollar
                                  </TableHead>
                                  <TableHead>1st</TableHead>
                                  <TableHead>2nd</TableHead>
                                  <TableHead>3rd</TableHead>
                                  <TableHead>4rd</TableHead>
                                  <TableHead>5rd</TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {tableData.map((ele, index) => (
                                  <TableRow key={index}>
                                    <TableCell className="font-medium">
                                      <div className="flex items-center gap-3">
                                        <Avatar>
                                          <AvatarImage src="https://github.com/shadcn.png" />
                                          <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <p className="p-0 m-0">{ele.name}</p>
                                      </div>
                                    </TableCell>

                                    {[...Array(5)].map((_, i) => (
                                      <TableCell key={i}>
                                        <input
                                          type="radio"
                                          name={`same-${index}`} // unique per row if you want per-row selection
                                          value={`option-${i + 1}`}
                                          className="appearance-none w-5 h-5 border-2 border-gray-500 rounded-full checked:bg-gray-700 checked:border-gray-700 transition-all cursor-pointer"
                                        />
                                      </TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </form>
                        </ScrollArea>
                      </CardContent>
                      <CardFooter className="flex-col gap-2">
                        <Button
                          variant="outline"
                          type="submit"
                          fullWidth
                          className="mt-4"
                        >
                          SUBMIT
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 ml-3 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white rounded-2xl h-[516px] shadow-[0px_12px_32px_0px_#0000001A]">
                    <PollCard />
                  </div>
                </CarouselItem>
                <CarouselItem className="pl-1 ml-3 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white rounded-2xl h-[516px] shadow-[0px_12px_32px_0px_#0000001A]"></div>
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
    </>
  );
}
