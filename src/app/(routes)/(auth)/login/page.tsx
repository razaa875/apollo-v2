import { Suspense } from "react";
import Login from "./_components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  alternates: {
    canonical: `${process.env.SITE_URL}/login`,
  },
};

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login />
    </Suspense>
  );
}
