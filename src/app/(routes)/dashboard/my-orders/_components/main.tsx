"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { format, parseISO } from "date-fns";
import { Loader2 } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge";

import { apiService } from "@/common/services";

import { IOrderDetail } from "@/common/models/interface";

export const MyOrdersMain = () => {
    const [orders, setOrders] = useState<IOrderDetail[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingDetail, setLoadingDetail] = useState(false);
    const [orderDetail, setOrderDetail] = useState<IOrderDetail | null>(null);

    useEffect(() => {
        apiService.httpGetRequest<{ status: string; data: IOrderDetail[] }>("user/orders", "", { config: { requireAuth: true } }).subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setOrders(res.data);
                }
                setLoading(false);
            },
            error: (err) => {
                console.log(err.message);
                setLoading(false);
            },
        });
    }, []);

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "delivered":
                return "bg-emerald-100 text-emerald-700 border-emerald-300";
            case "pending":
                return "bg-yellow-100 text-yellow-700 border-yellow-300";
            case "cancelled":
                return "bg-red-100 text-red-700 border-red-300";
            default:
                return "bg-gray-100 text-gray-700 border-gray-300";
        }
    };

    const openOrderDetail = (id: number) => {
        setOpenModal(true);
        setLoadingDetail(true);

        apiService.httpGetRequest<{ status: string; data: IOrderDetail }>(`user/orders/${id}`, "", { config: { requireAuth: true } }).subscribe({
            next: (res) => {
                if (res.status === "success") {
                    setOrderDetail(res.data);
                }
                setLoadingDetail(false);
            },
            error: () => {
                setLoadingDetail(false);
            },
        });
    };

    return (
        <div className="w-[90%] mx-auto p-6 min-h-dvh">
            <h1 className="text-[24px] lg:text-[38px] xl:text-[42px] my-6 font-bold text-center">
                My Orders
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
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead className="text-right">Date</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {orders.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        className="hover:bg-muted/40 transition-colors cursor-pointer"
                                        onClick={() => openOrderDetail(item.id)}
                                    >
                                        <TableCell className="font-medium">{item.id}</TableCell>

                                        <TableCell>
                                            <Badge
                                                className={`rounded-full px-3 py-1 border text-xs font-medium capitalize ${getStatusColor(
                                                    item.status
                                                )}`}
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>

                                        <TableCell className=" font-semibold">
                                            ${item.total_amount}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            {item.created_at
                                                ? format(parseISO(item.created_at), "MMMM dd, yyyy • hh:mm a")
                                                : ""}
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

            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogContent className="h-[90dvh] overflow-y-auto sm:max-w-xl p-6 rounded-2xl shadow-xl border bg-background/80 backdrop-blur-xl ">
                    <DialogHeader className="gap-0">
                        <DialogTitle className="text-xl font-bold">
                            Order Summary
                        </DialogTitle>
                        <DialogDescription>
                            Complete details for your order.
                        </DialogDescription>
                    </DialogHeader>

                    {loadingDetail && (
                        <div className="flex justify-center py-10">
                            <Loader2 className="w-8 h-8 animate-spin" />
                        </div>
                    )}

                    {!loadingDetail && orderDetail && (
                        <div className="space-y-6">

                            {/* TOP SUMMARY CARD */}
                            <div className="rounded-xl border p-4 bg-muted/40">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Order ID</p>
                                        <p className="text-lg font-semibold">{orderDetail.id}</p>
                                    </div>

                                    <Badge
                                        className={`px-3 py-1 text-sm rounded-full capitalize ${getStatusColor(
                                            orderDetail.status
                                        )}`}
                                    >
                                        {orderDetail.status}
                                    </Badge>
                                </div>

                                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">Order Date</p>
                                        <p className="font-medium">
                                            {format(parseISO(orderDetail.created_at!), "MMMM dd, yyyy • hh:mm a")}
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-muted-foreground">Total Amount</p>
                                        <p className="font-semibold text-lg">${orderDetail.total_amount}</p>
                                    </div>
                                </div>
                            </div>

                            {/* PRODUCT ITEM LIST */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">Items</h3>
                                <Carousel className="w-full max-w-xl mx-auto mt-4">
                                    <CarouselContent>
                                        {orderDetail.items.map((item, i) => (
                                            <CarouselItem key={i}>
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-4 p-4 border rounded-xl bg-background/80 shadow-sm hover:shadow-md transition"
                                                >
                                                    <Image
                                                        src={item.image_url}
                                                        alt={item.product_name}
                                                        height={100}
                                                        width={200}
                                                        className="w-20 h-20 rounded-lg object-cover border"
                                                    />

                                                    <div className="flex-1">
                                                        <p className="font-semibold">{item.product_name}</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            {item.product_description}
                                                        </p>

                                                        <div className="mt-2 flex justify-between">
                                                            <p className="text-sm">Qty: {item.quantity}</p>
                                                            <p className="font-semibold">${item.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>

                            {/* SHIPPING ADDRESS */}
                            <div className="rounded-xl border p-4 bg-muted/40">
                                <h3 className="font-semibold text-lg mb-2">Shipping Address</h3>

                                <div className="text-sm leading-5">
                                    <p className="font-medium">{orderDetail.shippingAddress.full_name}</p>
                                    <p>{orderDetail.shippingAddress.address_line1}</p>
                                    {orderDetail.shippingAddress.address_line2 && (
                                        <p>{orderDetail.shippingAddress.address_line2}</p>
                                    )}
                                    <p>
                                        {orderDetail.shippingAddress.city}, {orderDetail.shippingAddress.state}{" "}
                                        {orderDetail.shippingAddress.postal_code}
                                    </p>
                                    <p>{orderDetail.shippingAddress.country}</p>

                                    <p className="font-medium mt-2">Phone: {orderDetail.shippingAddress.phone}</p>
                                </div>
                            </div>

                            {/* ORDER TIMELINE */}
                            <div className="rounded-xl border p-4 bg-muted/40">
                                <h3 className="font-semibold text-lg mb-3">Order Progress</h3>

                                <div className="relative border-l pl-4 space-y-5">
                                    <div className="relative">
                                        <span className="absolute -left-5.5 top-1.5 size-3 bg-emerald-500 rounded-full"></span>
                                        <p className="font-medium">Order Placed</p>
                                        <p className="text-sm text-muted-foreground">
                                            {format(parseISO(orderDetail.created_at!), "MMM dd, yyyy • hh:mm a")}
                                        </p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-5.5 top-1.5 size-3 bg-blue-500 rounded-full"></span>
                                        <p className="font-medium">Processing</p>
                                        <p className="text-sm text-muted-foreground">Preparing your order</p>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-5.5 top-1.5 size-3 bg-primary rounded-full"></span>
                                        <p className="font-medium opacity-50">Shipped</p>
                                        <p className="text-sm text-muted-foreground opacity-50">Waiting for dispatch...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    );
};
