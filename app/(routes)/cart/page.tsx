import { Metadata } from "next";
import MainCart from "./_components/main-cart";

export const metadata: Metadata = {
    title: "Cart",
    alternates: {
        canonical: `${process.env.SITE_URL}/cart`,
    },
};

export default function Page() {
    return (
        <MainCart/>
    );
}
