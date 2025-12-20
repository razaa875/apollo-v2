'use client'

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { ArrowDown01, ArrowUp01, Search, Sparkles, Star } from "lucide-react";

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Spinner } from "@/components/ui/spinner";

import { apiService } from "@/common/services";

import { ICategories, IPagination, IProductByCategory } from "@/common/models/interface";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

const ITEMS_PER_PAGE = 12;

export default function Products() {
    const [products, setProducts] = useState<IProductByCategory[]>([]);
    const [pagination, setPagination] = useState<IPagination | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState<boolean>(true);

    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const [categories, setCategories] = useState<ICategories[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const [sortBy, setSortBy] = useState<string>("");

    const topRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search.trim());
            setCurrentPage(1); // 🔥 search change → page reset
        }, 500);

        return () => clearTimeout(timer);
    }, [search]);

    useEffect(() => {
        setLoading(true);

        const query = new URLSearchParams({
            page: currentPage.toString(),
            limit: ITEMS_PER_PAGE.toString(),
        });

        if (debouncedSearch) {
            query.append("search", debouncedSearch);
        }

        if (selectedCategory !== "all") {
            query.append("category", selectedCategory);
        }

        if (sortBy) {
            query.append("sort", sortBy);
        }

        apiService.httpGetRequest<{ status: string; data: IProductByCategory[]; pagination: IPagination }>(`products?${query.toString()}`, ``, { setCache: false }).subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setProducts(res.data)
                    setPagination(res.pagination);
                }
                setLoading(false);
            },
            error: (err) => {
                console.log(err.message);
                setLoading(false);
            },
        });
    }, [currentPage, debouncedSearch, selectedCategory, sortBy]);

    useEffect(() => {
        topRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [currentPage]);

    useEffect(() => {
        apiService
            .httpGetRequest<{ status: string; data: ICategories[] }>(
                "categories",
                "",
                { setCache: true }
            )
            .subscribe({
                next: (res) => {
                    if (res.status === "success") {
                        setCategories(res.data);
                    }
                },
                error: (err) => {
                    console.log(err.message);
                },
            });
    }, []);


    const handlePageChange = (page: number) => {
        if (!pagination) return;
        if (page < 1 || page > pagination.totalPages) return;
        setCurrentPage(page);
    };


    return (
        <section ref={topRef} className="w-[90%] mx-auto">
            <h1 className="font-medium text-4xl lg:text-6xl text-center mt-8 mb-16 pt-28 md:pt-32">Products</h1>
            <div className="">
                <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                    <div className="relative w-full">
                        <Input onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search Product" />
                        <Search size={28} className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer" />
                    </div>
                    <div className="w-full md:w-[15%]">
                        <Select
                            value={selectedCategory}
                            onValueChange={(value) => {
                                setSelectedCategory(value);
                                setCurrentPage(1);
                            }}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">
                                    All Categories
                                </SelectItem>
                                {categories.map((cat, i) => (
                                    <SelectItem key={i} value={String(cat.id)}>
                                        {cat.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full md:w-[15%]">
                        <Select
                            value={sortBy}
                            onValueChange={(value) => {
                                setSortBy(value);
                                setCurrentPage(1); // 🔥 sort change → page reset
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="newest">
                                    <div className="flex items-center gap-2">
                                        <Sparkles className="size-4" />
                                        Newest
                                    </div>
                                </SelectItem>

                                <SelectItem value="rating_desc">
                                    <div className="flex items-center gap-2">
                                        <Star className="size-4" />
                                        High to Low Ratings
                                    </div>
                                </SelectItem>

                                <SelectItem value="rating_asc">
                                    <div className="flex items-center gap-2">
                                        <Star className="size-4 rotate-180" />
                                        Low to High Ratings
                                    </div>
                                </SelectItem>

                                <SelectItem value="price_desc">
                                    <div className="flex items-center gap-2">
                                        <ArrowUp01 className="size-4" />
                                        Price: High to Low
                                    </div>
                                </SelectItem>

                                <SelectItem value="price_asc">
                                    <div className="flex items-center gap-2">
                                        <ArrowDown01 className="size-4" />
                                        Price: Low to High
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                </div>
                {
                    loading ?
                        <div className="h-[55dvh] flex justify-center items-center">
                            <Spinner className="size-13" />
                        </div>
                        :
                        <div className="">
                            {
                                products.length > 0 ?
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                        {
                                            products.map((item, i) => (
                                                <Link
                                                    key={i}
                                                    href={`/products/${item.slug}`}
                                                >
                                                    <div className="w-full h-50 mb-4">
                                                        <Image
                                                            src={item.image || '/images/no-data/no-data.svg'}
                                                            alt={item.title}
                                                            height={200}
                                                            width={400}
                                                            loading="lazy"
                                                            className="size-full object-cover rounded-[20px] drop-shadow-xl"
                                                        />
                                                    </div>
                                                    <h4 className="text-xl xl:text-lg font-semibold line-clamp-1 mb-1">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-medium text-lg xl:text-base text-primary/60">${item.price}</p>
                                                        {/* Rating */}
                                                        <div className="flex items-center gap-1 text-yellow-500">
                                                            <Star
                                                                size={16}
                                                                fill="#eab308"
                                                                stroke="#eab308"
                                                            />
                                                            <span className="text-gray-500 xl:text-sm">
                                                                {item.rating}
                                                            </span>
                                                            <span className="text-gray-400 text-sm xl:text-xs ml-1">
                                                                ({item.reviews})
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                    :
                                    <div className="bg-[url('/images/no-data/no-data-bg.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-y-8 py-8 h-125 rounded-[20px] drop-shadow-2xl">
                                        <h3 className="font-medium text-3xl xl:text-4xl text-white text-center">No Products Found</h3>
                                        <Image src="/images/no-data/no-data.svg" alt="No Data Image" title="No Data Image" height={566} width={566} className="size-60 mx-auto object-contain" />
                                    </div>
                            }
                        </div>
                }
                {pagination && pagination.totalPages > 1 && (
                    <Pagination className="my-16">
                        <PaginationContent>

                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>

                            {Array.from({ length: pagination.totalPages }).map((_, i) => {
                                const page = i + 1;
                                return (
                                    <PaginationItem key={page}>
                                        <PaginationLink
                                            isActive={page === currentPage}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    className={
                                        currentPage === pagination.totalPages
                                            ? "pointer-events-none opacity-50"
                                            : ""
                                    }
                                />
                            </PaginationItem>

                        </PaginationContent>
                    </Pagination>
                )}
            </div>
        </section>
    )
}