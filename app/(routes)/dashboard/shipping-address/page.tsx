import { Metadata } from "next";
import { ShippingAddressMain } from "./_components/main";

export const metadata: Metadata = {
  title: "Shipping Address",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/shipping-address`,
  },
};

export default function Page() {
  return <ShippingAddressMain />;
}
