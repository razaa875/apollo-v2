import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    alternates: {
        canonical: `${process.env.SITE_URL}/products`,
    },
};

export default function Page() {
    return (
        <>
            <h1 className="font-medium text-4xl lg:text-6xl text-center mt-8 mb-16 pt-28 md:pt-32">Products</h1>

        </>
    );
}
