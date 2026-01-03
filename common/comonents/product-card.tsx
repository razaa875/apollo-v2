import Image from "next/image"

import { ArrowUpRight, ExternalLink, Heart } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { IExploreProducts } from "../models/interface"

export const ProductCard = ({ data }: { data: IExploreProducts }) => {
    return (
        <Card className="w-full rounded-3xl border-none shadow-none bg-white/50 drop pt-0 gap-5 cursor-pointer overflow-hidden">
            <CardContent className="p-0">
                <Image
                    src={data.image}
                    width={1200}
                    height={800}
                    alt={data.title}
                    className={`w-full h-60 object-cover object-top`}
                />
                <div className="flex flex-col gap-2 items-center mt-4">
                    <h3 className="font-medium text-lg line-clamp-1">{data.title}</h3>
                    {data.price && <p className="font-medium text-sm">${data.price}</p>}
                </div>
            </CardContent>

            <CardFooter className="justify-between xl:px-3">
                <Button variant="outline" size="lg" className="w-[65%] xl:w-[55%] border-white hover:bg-primary/5">Add to Cart <ArrowUpRight /></Button>
                <Button variant="ghost" size="lg" className="hover:bg-primary/5 rounded-lg"><Heart className="size-6 xl:size-4.5" /></Button>
                <Button size="lg" className="border-white text-white rounded-lg xl:has-[>svg]:p-3"><ExternalLink className="size-5 xl:size-3.5"/></Button>
            </CardFooter>
        </Card>
    )
}