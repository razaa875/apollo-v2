import { Metadata } from "next";
import Hero from "./_components/hero";
import BrowseByCategory from "./_components/browse-by-category";
import ShopByActivity from "./_components/shop-by-activity";
import NewArrival from "./_components/new-arrival";

export const metadata: Metadata = {
    title: "Explore",
    alternates: {
        canonical: `${process.env.SITE_URL}/explore`,
    },
};

export default function Page() {
    return (
        <>
            <Hero />
            <BrowseByCategory />
            <ShopByActivity />
            <NewArrival />
        </>
    );
}
