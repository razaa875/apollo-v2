'use client';

import Link from 'next/link';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { apiService } from '@/common/services';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const FormSchema = z.object({
    newPassword: z.string().min(6, 'Password must be at least 8 characters'),
    confirmNewPassword: z.string().optional(),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

export default function ResetPassword() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get('token');

    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            newPassword: "",
            confirmNewPassword: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        const body = {
            newPassword: data.newPassword,
            token: token
        };

        apiService.httpPostRequest<{ status: string; message: string }>("user/reset-password", body)
            .subscribe({
                next: (res) => {
                    if (res.status === "success") {
                        toast.success(res.message);
                        form.reset();
                        router.push('/login')
                    } else {
                        toast.error(res.message);
                    }
                    setIsLoading(false);
                },
                error: (err) => {
                    toast.error(err.response?.data?.message || err.message);
                    setIsLoading(false);
                },
            });
    };

    return (
        <main className="w-[85%] mx-auto mt-20">
            <h1 className="text-lg lg:text-2xl">Reset Your Password</h1>
            <p className="font-light text-base mt-2">Enter your new password below.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 lg:mt-4">
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem className="mt-4">
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="New Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmNewPassword"
                        render={({ field }) => (
                            <FormItem className="mt-4">
                                <FormLabel>Confirm New Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Confirm New Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button loading={isLoading} disabled={isLoading} variant="pill" type="submit" fullWidth className="mt-4">Reset Password</Button>
                    <div className="flex items-center justify-center text-[#218FDA] hover:text-white hover:bg-[#218FDA] rounded-full transition font-medium text-base mt-2">
                        <Link href='/login' className="w-full border border-primary px-4 h-8 md:h-10 text-center flex items-center justify-center rounded-full">Back to Login</Link>
                    </div>
                </form>
            </Form>
        </main>
    );
}
