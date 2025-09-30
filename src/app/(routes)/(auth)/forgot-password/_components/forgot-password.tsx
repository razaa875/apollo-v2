'use client';

import { useState } from "react";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { apiService } from "@/common/services";

const FormSchema = z.object({
    email: z.email({ message: "Please enter a valid email address." })
});

export default function ForgotPassword() {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        setLoading(true);
        apiService.httpPostRequest<{ status: string; message: string }>('user/forgot-password', {
            email: data.email,
        })
            .subscribe({
                next: (res) => {
                    if (res.status === 'success') {
                        toast.success(res.message);
                        form.reset();
                    } else {
                        toast.error(res.message);
                    }
                    setLoading(false);
                },
                error: (err) => {
                    toast.error(err.message);
                    setLoading(false);
                },
            });
    }
    return (
        <main className="w-[85%] mx-auto mt-20">
            <h1 className="text-lg lg:text-4xl">Forgot Password?</h1>
            <p className="font-light text-base mt-2">An email will be sent on your email to reset your password.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                    {/* Email Field */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="email" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button variant="pill" loading={loading} disabled={loading} type="submit" fullWidth className="mt-4">Send Email</Button>
                    <div className="flex items-center justify-center font-bold text-base mt-4">
                        <Link href='/login'>Login with a different account</Link>
                    </div>
                </form>
            </Form>
        </main>
    )

}