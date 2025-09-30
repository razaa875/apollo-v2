import { Metadata } from "next";
import { ChangePasswordMain } from "./_components/form";

export const metadata: Metadata = {
  title: "Change Password",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/change-password`,
  },
};

export default function ChangePassword() {
  return <ChangePasswordMain />;
}
