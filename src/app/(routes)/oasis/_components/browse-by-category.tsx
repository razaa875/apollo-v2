"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

import { apiService } from "@/common/services";

import { ICategories } from "@/common/models/interface";

export default function BrowseByCategory() {
    const [categories, setCategories] = useState<ICategories[]>([]);
    const [loadingCategories, setLoadingCategories] = useState<boolean>(true);

    useEffect(() => {
        setLoadingCategories(true);

        apiService.httpGetRequest<{ status: string; data: ICategories[] }>('categories').subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setCategories(res.data);
                }
                setLoadingCategories(false);
            },
            error: (err) => {
                console.log(err.message);
                setLoadingCategories(false);
            },
        });
    }, []);

    return (
        <>
            <h2 className="font-medium text-4xl lg:text-6xl text-center mb-16 xl:mb-20">Browse By Cateogery</h2>
            {loadingCategories ? (
                <div className="flex flex-wrap gap-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Skeleton key={i} className="h-32 xl:h-40 w-full rounded-xl" />
                    ))}
                </div>
            ) : (
                <ScrollArea className="h-70 lg:h-84 pr-2">
                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                        {categories.map((cat) => (
                            <div key={cat.id} className="relative group overflow-hidden rounded-xl w-full md:w-[48%] lg:w-[23%] xl:w-[18.5%] 2xl:w-[19%] cursor-pointer" >
                                <div className="w-full h-32 xl:h-40">
                                    <Image
                                        src={"/images/home/product.webp"}
                                        alt={cat.title}
                                        width={300}
                                        height={120}
                                        priority
                                        className="size-full object-cover rounded-xl"
                                    />
                                </div>
                                <span className="absolute bottom-4 left-4 font-medium text-white text-base z-10">
                                    {cat.title}
                                </span>
                                <div className="absolute inset-0 size-full bg-gradient-to-b to-primary from-primary/10"></div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            )}
        </>
    )
}