import { Suspense } from "react";
import ForgotPassword from "./_components/forgot-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  alternates: {
    canonical: `${process.env.SITE_URL}/forgot-password`,
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPassword />
    </Suspense>
  );
}
