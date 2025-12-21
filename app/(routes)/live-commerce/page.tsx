import { Metadata } from "next";
import LiveCommerceMain from "./_components/main";

export const metadata: Metadata = {
    title: 'Live Commerce',
    alternates: {
        canonical: `${process.env.SITE_URL}/live-commerce`
    }
};

export default function Page() {
    return <LiveCommerceMain />;
}
