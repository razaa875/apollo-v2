"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

import { apiService } from "@/common/services";

import { ICategories } from "@/common/models/interface";
import Link from "next/link";

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
            <section className="pt-16 md:pb-4 xl:pt-20 w-[90%] mx-auto">
                <h1 className="font-medium text-4xl lg:text-6xl text-center mb-16 xl:mb-20">Browse By Cateogery</h1>
                {loadingCategories ? (
                    <div className="flex flex-wrap gap-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Skeleton key={i} className="h-32 xl:h-40 w-full rounded-xl" />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                        {categories.map((cat, i) => (
                            <Link key={i} href="/products" className="relative group overflow-hidden rounded-xl w-full md:w-[48%] lg:w-[23%] xl:w-[18.5%] 2xl:w-[19%] cursor-pointer" >
                                <div className="w-full h-32 xl:h-40">
                                    <Image
                                        src={cat.image_url}
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
                            </Link>
                        ))}
                    </div>
                )}

            </section>
            <Separator className="my-8 md:my-16" />
            <section className="">
                <Image src="/images/explore/banner.webp" alt="Banner Image" title="Banner Image" height={700} width={1400} className="size-full object-cover" />
            </section>
            <Separator className="my-8 md:my-16" />
        </>
    )
}