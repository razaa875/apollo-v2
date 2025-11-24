"use client";

import { useCallback, useEffect, useState } from "react";

import { Eye, Plus, Star, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

import { useAuth } from "@/providers";

import { apiService } from "@/common/services";

import { IShippingAddress } from "@/common/models/interface";
import { ShippingAddressFormDialog } from "./ShippingAddressFormDialog";

export const ShippingAddressMain = () => {
    const { signout } = useAuth();

    const [address, setAddress] = useState<IShippingAddress[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewData, setViewData] = useState<IShippingAddress | null>(null);
    const [viewOpen, setViewOpen] = useState(false);

    const fetchDataMethods = useCallback(() => {
        setLoading(true);

        apiService.httpGetRequest<{ status: string; data: IShippingAddress[] }>("user/shipping-addresses", "", { setCache: false, config: { requireAuth: true } }).subscribe({
            next: (res) => {
                if (res.status === "success") {
                    const filteredData = res.data.filter((item) => item.status === "enabled");
                    setAddress(filteredData);
                    setLoading(false);
                }
            },
            error: (err) => {
                if (err.status === 401) {
                    signout();
                }
                console.log(err.message);
                setLoading(false);
            },
        });
    }, [signout]);

    useEffect(() => {
        fetchDataMethods();
    }, [fetchDataMethods]);

    const handleDisable = useCallback((id: number) => {
        apiService.httpPutRequest<{ status: string; message: string; }>(`user/shipping-addresses/${id}/disable`, '', '', { setCache: false, config: { requireAuth: true } }).subscribe({
            next: (res) => {
                if (res.status === "success") {
                    toast.success(res.message);
                    fetchDataMethods(); // ✅ refresh manually by refetching
                }
            },
            error: (err) => {
                console.log(err.message);
                toast.error(err.message);
                if (err.status === 401 || err.status === 403) signout();
            },
        });
    }, [fetchDataMethods, signout]);

    const handleViewAddress = (item: IShippingAddress) => {
        setViewData(item);
        setViewOpen(true);
    };


    const handleSetDefault = useCallback((id: number) => {
        apiService.httpPutRequest<{ status: string; message: string; }>(`user/shipping-addresses/${id}/default`, '', '', { setCache: false, config: { requireAuth: true } }).subscribe({
            next: (res) => {
                if (res.status === "success") {
                    toast.success(res.message);
                    fetchDataMethods(); // ✅ refresh manually by refetching
                }
            },
            error: (err) => {
                console.log(err.message);
                toast.error(err.message);
                if (err.status === 401 || err.status === 403) signout();
            },
        });
    }, [fetchDataMethods, signout]);

    return (
        <>
            <div className="w-[90%] mx-auto p-6 min-h-dvh">
                <h1 className="text-[24px] lg:text-[38px] xl:text-[42px] my-6 font-bold text-center">
                    Shipping Address
                </h1>
                <div className="flex justify-end items-center mb-4">
                    <Button type="button" variant="link" onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 cursor-pointer">
                        Add Shipping Address
                        <span className="bg-primary/5 rounded-lg p-2">
                            <Plus size={18} />
                        </span>
                    </Button>
                </div>
                {
                    loading ?
                        <div className="h-screen flex items-center justify-center">
                            <Spinner className="size-8" />
                        </div>
                        :
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent">
                                    <TableHead>S#</TableHead>
                                    <TableHead>Shipped To</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Addresses</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {address.map((item, i) => (
                                    <TableRow key={i} className="hover:bg-muted/40 transition-colors cursor-pointer">
                                        <TableCell className="font-medium">{i + 1}</TableCell>
                                        <TableCell className="flex items-center gap-2">
                                            {item.full_name}
                                            {item.is_default === 1 && <span className="rounded-full bg-green-400 text-green-200 text-xs px-2 py-0.5">{item.is_default ? 'Default' : null}</span>}
                                        </TableCell>
                                        <TableCell>{item.phone}</TableCell>
                                        <TableCell>{item.address_line1}</TableCell>
                                        <TableCell className="flex gap-2 items-center">
                                            <Eye onClick={() => handleViewAddress(item)} size={20} className=" cursor-pointer" />
                                            <Star onClick={() => handleSetDefault(item.id)} size={18} className={`cursor-pointer ${item.is_default === 1 ? 'fill-primary stroke-primary' : ''}`} />
                                            <Trash2 onClick={() => handleDisable(item.id)} size={18} className=" cursor-pointer" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                }
            </div>

            <ShippingAddressFormDialog
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={fetchDataMethods}
            />

            <ShippingAddressFormDialog
                open={viewOpen}
                onClose={() => setViewOpen(false)}
                onSuccess={fetchDataMethods}
                defaultValues={viewData || {}}
                mode="view"
            />

        </>
    )
}