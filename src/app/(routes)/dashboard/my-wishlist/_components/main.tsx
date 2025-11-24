"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";

import { useAuth } from "@/providers";

import { apiService } from "@/common/services";

import { IWishList } from "@/common/models/interface";

export const WishlistMain = () => {
    const { signout } = useAuth();

    const [wishlists, setWishLists] = useState<IWishList[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        apiService.httpGetRequest<{ status: string; data: IWishList[] }>("user/wishlist", "", { config: { requireAuth: true } }).subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setWishLists(res.data);
                }
                setLoading(false);
            },
            error: (err) => {
                if (err.status === 401 || err.status === 403) {
                    signout("/login");
                }
                console.log(err.message);
                setLoading(false);
            },
        });
    }, [signout]);

    const handleRemoveWishlist = (id: number) => {
        apiService.httpDeleteRequest<{ message: string }>(`user/wishlist/${id}`, { config: { requireAuth: true } }).subscribe({
            next: (res) => {
                toast.success(res.message);
                setWishLists(prev => prev.filter(item => item.product_id !== id));
            },
            error: (err) => {
                if (err.status === 401 || err.status === 403) {
                    signout("/login");
                }
            }
        });
    };

    return (
        <div className="w-[90%] mx-auto p-6 min-h-dvh">
            <h1 className="text-[24px] lg:text-[38px] xl:text-[42px] my-6 font-bold text-center">
                My Wishlist
            </h1>
            {
                loading ?
                    <div className="h-screen flex items-center justify-center">
                        <Spinner className="size-8" />
                    </div>
                    :
                    <div className="">
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent">
                                    <TableHead>Wishlist ID</TableHead>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {wishlists.map((item, i) => (
                                    <TableRow
                                        key={i}
                                        className="hover:bg-muted/40 transition-colors cursor-pointer"
                                    >
                                        <TableCell className="font-medium">{item.wishlist_id}</TableCell>

                                        <TableCell className="flex items-center gap-x-4">
                                            <Image src={item.image_url} alt={item.name} height={100} width={100} className="size-16 rounded-lg object-cover" />
                                            {item.name}
                                        </TableCell>

                                        <TableCell className=" font-semibold">
                                            ${item.price}
                                        </TableCell>
                                        <TableCell>
                                            <Trash2 className="size-5" onClick={() => handleRemoveWishlist(item.product_id)} />
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>

                            {/* <TableFooter>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink isActive href="#">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </TableFooter> */}
                        </Table>
                    </div>
            }


        </div>
    )
}