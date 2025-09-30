import { Metadata } from "next";
import { ProfileMain } from "./_components/main";

export const metadata: Metadata = {
  title: "Profile",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/profile`,
  },
};

export default function Page() {
  return <ProfileMain />;
}
