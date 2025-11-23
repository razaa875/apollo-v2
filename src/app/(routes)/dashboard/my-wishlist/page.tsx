import { Metadata } from "next";
import { WishlistMain } from "./_components/main";

export const metadata: Metadata = {
  title: "My Wishlist",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/my-wishlist`,
  },
};

export default function Page() {
  return <WishlistMain />;
}
