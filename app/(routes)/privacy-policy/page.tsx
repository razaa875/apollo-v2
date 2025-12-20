import { Metadata } from "next";
import PrivacyPolicy from "./_components/privacy_policy";


export const metadata: Metadata = {
    title: 'Privacy Policy',
    alternates: {
        canonical: `${process.env.SITE_URL}/privacy-policy`
    }
};

export default function Page() {
    return <PrivacyPolicy />

}