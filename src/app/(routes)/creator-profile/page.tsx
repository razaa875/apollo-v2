import { Metadata } from "next";
import CreatorProfileHero from "./_components/hero";
import { Separator } from "@/components/ui/separator";
import Grid from "./_components/grid";
import ExploreAlternatives from "../oasis/_components/explore-alternatives";

export const metadata: Metadata = {
    title: "Creator Profile",
    alternates: {
        canonical: `${process.env.SITE_URL}/creator-profile`,
    },
};

export default function Page() {
    return (
        <>
            <CreatorProfileHero />
            <Separator className="my-12 xl:my-16" />
            <Grid />
            <Separator className="my-12 xl:my-16" />
            <ExploreAlternatives />
        </>
    );
}
