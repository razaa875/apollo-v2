import { Metadata } from "next";
import RefundPolicy from "./_components/refund_policy";


export const metadata: Metadata = {
    title: 'Refund Policy',
    alternates: {
        canonical: `${process.env.SITE_URL}/refund-policy`
    }
};

export default function Page() {
    return <RefundPolicy />
}