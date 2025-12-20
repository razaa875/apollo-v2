"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

import { apiService } from "@/common/services";

import { IShippingAddress } from "@/common/models/interface";

const AddressSchema = z.object({
    full_name: z.string().min(2, "Name is required"),
    phone: z.string().min(5, "Phone is required"),
    city: z.string().min(2, "City is required"),
    state: z.string().min(2, "State is required"),
    postal_code: z.string().min(2, "Postal code required"),
    country: z.string().min(2, "Country required"),
    address_line1: z.string().min(5, "Address line 1 required"),
    address_line2: z.string().optional(),
    is_default: z.number().optional(),
});

type TAddressForm = z.infer<typeof AddressSchema>;

interface Props {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    defaultValues?: Partial<IShippingAddress>;
    mode?: "edit" | "view";
}

export const ShippingAddressFormDialog = ({
    open,
    onClose,
    onSuccess,
    defaultValues,
    mode = "edit",
}: Props) => {

    const form = useForm<TAddressForm>({
        resolver: zodResolver(AddressSchema),
        defaultValues: {
            full_name: "",
            phone: "",
            city: "",
            state: "",
            postal_code: "",
            country: "",
            address_line1: "",
            address_line2: "",
            is_default: 0,
            ...defaultValues,
        },
    });

    const isView = mode === "view";

    // Reset fields whenever modal opens
    useEffect(() => {
        if (open) {
            form.reset(defaultValues || {});
        }
    }, [open, defaultValues, form]);

    const onSubmit = (data: TAddressForm) => {
        if (isView) return;

        const payload = {
            full_name: data.full_name,
            address_line1: data.address_line1,
            address_line2: data.address_line2,
            city: data.city,
            state: data.state,
            postal_code: data.postal_code,
            country: data.country,
            phone: data.phone,
            is_default: data.is_default
        }

        apiService
            .httpPostRequest<{ status: string; message: string }>(
                "user/shipping-addresses",
                payload,
                "",
                { setCache: false, config: { requireAuth: true } }
            )
            .subscribe({
                next: (res) => {
                    if (res.status === "success") {
                        toast.success(res.message);
                        onSuccess();
                        onClose();
                    }
                },
                error: (err) => {
                    console.log(err.message);
                    toast.error(err.message);
                },
            });
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="lg:max-w-4xl max-h-[85dvh] lg:max-h-max overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add Shipping Address</DialogTitle>
                </DialogHeader>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* NAME + PHONE */}
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label>Full Name</Label>
                            <Input disabled={isView} {...form.register("full_name")} placeholder="Enter Name" />
                            {form.formState.errors.full_name && (
                                <p className="text-red-500 text-sm">{form.formState.errors.full_name.message}</p>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label>Phone</Label>
                            <Input disabled={isView} {...form.register("phone")} placeholder="Enter Phone" />
                            {form.formState.errors.phone && (
                                <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    {/* CITY STATE POST CODE COUNTRY */}
                    <div className="grid lg:grid-cols-4 gap-4">
                        <div className="grid gap-2">
                            <Label>City</Label>
                            <Input disabled={isView} {...form.register("city")} placeholder="Enter City" />
                        </div>

                        <div className="grid gap-2">
                            <Label>State</Label>
                            <Input disabled={isView} {...form.register("state")} placeholder="Enter State" />
                        </div>

                        <div className="grid gap-2">
                            <Label>Postal Code</Label>
                            <Input disabled={isView} {...form.register("postal_code")} placeholder="Postal Code" />
                        </div>

                        <div className="grid gap-2">
                            <Label>Country</Label>
                            <Input disabled={isView} {...form.register("country")} placeholder="Enter Country" />
                        </div>
                    </div>

                    {/* ADDRESS 1 */}
                    <div className="grid gap-2">
                        <Label>Address Line 1</Label>
                        <Textarea disabled={isView} {...form.register("address_line1")} placeholder="Address line 1" />
                    </div>

                    {/* ADDRESS 2 */}
                    <div className="grid gap-2">
                        <Label>Address Line 2</Label>
                        <Textarea disabled={isView} {...form.register("address_line2")} placeholder="Address line 2" />
                    </div>

                    {/* DEFAULT CHECKBOX */}
                    <div className="flex gap-3 items-center">
                        <Checkbox disabled={isView}
                            checked={form.watch("is_default") === 1}
                            onCheckedChange={(value) => form.setValue("is_default", value ? 1 : 0)}
                        />
                        <Label>Set as default address</Label>
                    </div>

                    {/* FOOTER */}
                    {
                        !isView &&
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline" type="button">Cancel</Button>
                            </DialogClose>

                            <Button type="submit">Save</Button>
                        </DialogFooter>
                    }

                </form>
            </DialogContent>
        </Dialog>
    );
};
