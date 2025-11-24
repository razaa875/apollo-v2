"use client";
import { IProduct } from "@/common/models/interface";
import { apiService } from "@/common/services";
import { Skeleton } from "@/components/ui/skeleton";
import { ListFilter, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

import {
    NativeSelect,
    NativeSelectOption,
} from "@/components/ui/native-select"

export default function ProductsMain() {
    const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [categories, setCategories] = useState<IProduct[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const [loading, setLoading] = useState<boolean>(true);
    const [sortBy, setSortBy] = useState("");
    const [search, setSearch] = useState("");

    const isDesktop = useMediaQuery("(max-width: 768px)");

    useEffect(() => {
        apiService.httpGetRequest<{ status: string; data: IProduct[] }>('products').subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setProducts(res.data);
                    setOriginalProducts(res.data);
                }
                setLoading(false);
            },
            error: (err) => {
                console.log(err.message);
                setLoading(false);
            },
        });

        apiService.httpGetRequest<{ status: string; data: IProduct[] }>('categories').subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setCategories(res.data);
                }
                setLoading(false);
            },
            error: (err) => {
                console.log(err.message);
                setLoading(false);
            },
        });
    }, []);

    const handleSort = () => {
        let sorted = [...products]; // yahan hamesha current filtered list sort hogi

        if (sortBy === "atoz") sorted.sort((a, b) => a.title.localeCompare(b.title));
        if (sortBy === "ztoa") sorted.sort((a, b) => b.title.localeCompare(a.title));
        if (sortBy === "lowtohigh") sorted.sort((a, b) => Number(a.price) - Number(b.price));
        if (sortBy === "hightolow") sorted.sort((a, b) => Number(b.price) - Number(a.price));
        if (sortBy === "rating1to5") sorted.sort((a, b) => a.rating - b.rating);
        if (sortBy === "rating5to1") sorted.sort((a, b) => b.rating - a.rating);

        setProducts(sorted);
    };


    const handleSearch = (value: string) => {
        setSearch(value);

        if (!value.trim()) {
            setProducts(originalProducts); // empty search → original return
            return;
        }

        const filtered = originalProducts.filter((p) =>
            p.title.toLowerCase().includes(value.toLowerCase())
        );

        setProducts(filtered);
    };

    return (
        <section className="w-[90%] mx-auto mt-40 mb-20">
            <h1 className="text-center text-4xl lg:text-6xl font-medium mb-8 lg:mb-16">
                Products
            </h1>
            {
                isDesktop ? <>
                    <div className="flex items-cent justify-between mb-5">
                        <div>
                            <Input placeholder="Search Product" value={search}
                                onChange={(e) => handleSearch(e.target.value)} />
                        </div>
                        <Drawer direction="right">
                            <DrawerTrigger>
                                <ListFilter />
                            </DrawerTrigger>
                            <DrawerContent>
                                <DrawerHeader>
                                    <DrawerTitle>Apply Filter</DrawerTitle>
                                    <div className="mt-3">
                                        <label htmlFor="">Sort by:</label>
                                        <NativeSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                            <NativeSelectOption value="">Select status</NativeSelectOption>
                                            <NativeSelectOption value="atoz">a to z</NativeSelectOption>
                                            <NativeSelectOption value="ztoa">z to a</NativeSelectOption>
                                            <NativeSelectOption value="lowtohigh">low to high price</NativeSelectOption>
                                            <NativeSelectOption value="hightolow">high to low</NativeSelectOption>
                                            <NativeSelectOption value="rating1to5">Rating 1 to 5</NativeSelectOption>
                                            <NativeSelectOption value="rating5to1">Rating 5 to 1</NativeSelectOption>
                                        </NativeSelect>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="">Sort by Category:</label>
                                        <NativeSelect onChange={(e) => setSelectedCategory(e.target.value)}>
                                            <NativeSelectOption value="">Select status</NativeSelectOption>
                                            {
                                                categories.map((ele, i) => (
                                                    <NativeSelectOption value={ele.title}>{ele.title}</NativeSelectOption>

                                                ))
                                            }
                                        </NativeSelect>
                                    </div>
                                </DrawerHeader>
                                <DrawerFooter>
                                    <DrawerClose>
                                        <Button onClick={handleSort}>Submit</Button>

                                        <Button>Cancel</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </> : ''
            }
            {/* filter */}
            {/* Input field ka sath ek Field ka icon on Mobile Ui */}
            {/* onclik filter icon Drawer | Sortby Dropdown (a to z | z to a | low to high price | high to low | Rating  1 to 5 & 5 to 1 ) dropdown Category pa base krega  */}
            {
                loading ?
                    <div className="w-[90%] mx-auto">
                        <Skeleton className="h-10 w-2/3 mx-auto mb-8" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <Skeleton className="h-48 w-full rounded-xl" />
                                    <Skeleton className="h-4 w-3/4" />
                                    <Skeleton className="h-4 w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <>
                        {
                            products && products.length > 0 ?
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {
                                        products.map((product, i) => (
                                            <div
                                                key={i}
                                                className=""
                                            >
                                                <div className="w-full h-50 mb-4">
                                                    <Image
                                                        src={product.image || '/images/no-data/no-data.svg'}
                                                        alt={product.title}
                                                        height={200}
                                                        width={400}
                                                        loading="lazy"
                                                        className="size-full object-cover rounded-[20px] drop-shadow-xl "
                                                    />
                                                </div>
                                                <h4 className="text-xl xl:text-lg font-semibold line-clamp-1 mb-1">
                                                    {product.title}
                                                </h4>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-medium text-lg xl:text-base text-primary/60">${product.price}</p>
                                                    {/* Rating */}
                                                    <div className="flex items-center gap-1 text-yellow-500">
                                                        <Star
                                                            size={16}
                                                            fill="#eab308"
                                                            stroke="#eab308"
                                                        />
                                                        <span className="text-gray-500 xl:text-sm">
                                                            {product.rating}
                                                        </span>
                                                        <span className="text-gray-400 text-sm xl:text-xs ml-1">
                                                            ({product.reviews})
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                <div className="bg-[url('/images/no-data/no-data-bg.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-y-8 py-8 h-120 lg:h-122 xl:h-100 2xl:h-120 rounded-[20px] drop-shadow-2xl">
                                    <h3 className="font-medium text-3xl text-white text-center">No Product Found</h3>
                                    <Image src="/images/no-data/no-data.svg" alt="No Data Image" title="No Data Image" height={566} width={566} className="size-60 mx-auto object-contain" />
                                </div>
                        }
                    </>
            }
        </section>
    )
}