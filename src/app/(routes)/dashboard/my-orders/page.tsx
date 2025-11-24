import { Metadata } from "next";
import { MyOrdersMain } from "./_components/main";

export const metadata: Metadata = {
  title: "My Orders",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/my-orders`,
  },
};

export default function Page() {
  return <MyOrdersMain />;
}
