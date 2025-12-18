import { Metadata } from "next";
import Products from "./_components/products";

export const metadata: Metadata = {
    title: "Products",
    alternates: {
        canonical: `${process.env.SITE_URL}/products`,
    },
};

export default function Page() {
    return <Products />;
}
