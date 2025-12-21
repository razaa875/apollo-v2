import { Metadata } from "next";
import SignUp from "./_components/signup";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Sign Up",
  alternates: {
    canonical: `${process.env.SITE_URL}/sign-up`,
  },
};

export default function signup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUp />
    </Suspense>
  );
}
