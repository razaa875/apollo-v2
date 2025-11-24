import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    alternates: {
        canonical: `${process.env.SITE_URL}/about`,
    },
};

export default function Page() {
    return (
        <>

        </>
    );
}
