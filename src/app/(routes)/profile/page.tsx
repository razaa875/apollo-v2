import { Metadata } from "next";
import ProfileHero from "./_components/hero";
import YourImpact from "./_components/impact";
import Earnings from "./_components/earnings";

export const metadata: Metadata = {
    title: 'Profile',
    alternates: {
        canonical: `${process.env.SITE_URL}/profile`
    }
};

export default function Page() {
    return (
        <>
            <ProfileHero />
            <YourImpact />
            <Earnings />
        </>
    );
}
