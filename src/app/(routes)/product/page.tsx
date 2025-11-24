import { Metadata } from "next";
import ProductsMain from "./_components/main";

export const metadata: Metadata = {
    title: "Products",
    alternates: {
        canonical: `${process.env.SITE_URL}/product`,
    },
};

export default function Page() {
    return (
        <>
            <ProductsMain />
        </>
    );
}
