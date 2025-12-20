import { Metadata } from "next";
import Hero from "./_components/hero";
import Switch from "./_components/main-switch";

export const metadata: Metadata = {
    title: "Oasis",
    alternates: {
        canonical: `${process.env.SITE_URL}/oasis`,
    },
};

export default function Page() {
    return (
        <main className="pt-28 md:pt-32">
            <Hero />
            <Switch />
        </main>
    )
}
