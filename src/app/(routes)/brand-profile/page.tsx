import { Metadata } from "next";
import CreatorProfileHero from "./_components/hero";
import NewArrival from "../explore/_components/new-arrival";
import Section from "./_components/section";
import WinterEssentials from "./_components/winter-esseantial";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Brand Profile",
    alternates: {
        canonical: `${process.env.SITE_URL}/brand-profile`,
    },
};

export default function Page() {
    return (
        <>
            <CreatorProfileHero />
            <div className="mt-12 xl:mt-16"></div>
            <NewArrival />
            <Section />
            <div className="mt-12 xl:mt-16"></div>
            <WinterEssentials />
            <div className="w-[90%] mx-auto flex flex-col md:flex-row md:justify-between gap-y-6">
                <Image src="/images/brand-profile/shoes-1.webp" alt="Image" height={829} width={829} className="w-full md:w-[49%] h-100 md:h-125 object-cover object-bottom rounded-2xl" />
                <Image src="/images/brand-profile/shoes-2.webp" alt="Image" height={450} width={800} className="w-full md:w-[49%] h-100 md:h-125 object-cover object-bottom rounded-2xl" />

            </div>
        </>
    );
}
