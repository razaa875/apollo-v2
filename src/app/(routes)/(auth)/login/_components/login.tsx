'use client';
import { useState } from "react";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

import { useAuth } from "@/providers";
import { apiService } from "@/common/services";

import { IUser } from "@/common/models/interface";

const FormSchema = z.object({
    email: z.email({ message: "Please enter a valid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long." }),
});

export default function Login() {
    const { signin } = useAuth();

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        const body = {
            email: data.email,
            password: data.password,
        };

        apiService.httpPostRequest<{ message: string; token: string; user: IUser }>("user/login", body)
            .subscribe({
                next: (res) => {
                    if (res.user?.role.toLowerCase() === "user" && res.user?.status.toLowerCase() === "enabled") {
                        signin(res.token, res.user);
                        setIsLoading(false);
                    } else {
                        toast.error("You've been blocked by Apollo!. Please Contact Apollo Support Center in this regard.");
                        setIsLoading(false);
                    }
                },
                error: (err) => {
                    toast.error(err.response?.data?.message || err.message);
                    setIsLoading(false);
                },
            });
    };

    return (
        <main className="w-[85%] mx-auto mt-20">
            <h1 className="text-lg lg:text-4xl">Log in</h1>
            <p className="font-light text-base mt-2">Welcome back, Please put your login credentials below to start using the dashboard.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
                    {/* Email Field */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password Field */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="mt-4">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-end text-[#218FDA] font-medium text-base mt-2">
                        <Link href='/forgot-password'>Forgot Password?</Link>
                    </div>
                    <Button loading={isLoading} disabled={isLoading} variant="pill" type="submit" fullWidth className="mt-4">Login</Button>
                    <div className="flex items-center justify-center text-[#218FDA] hover:text-white hover:bg-[#218FDA] rounded-full transition font-medium text-base mt-2">
                        <Link href='/sign-up' className="w-full border border-primary px-4 h-10 text-center flex items-center justify-center rounded-full">Sign Up</Link>
                    </div>
                </form>
            </Form>
        </main>
    )

}