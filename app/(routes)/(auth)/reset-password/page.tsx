import { Metadata } from "next";
import ResetPassword from "./_components/reset-password";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'Reset Password',
    alternates: {
        canonical: `${process.env.SITE_URL}/reset-password`
    }
};

export default function resetpassword() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResetPassword />
        </Suspense>
    );
}