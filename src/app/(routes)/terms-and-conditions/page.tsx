import { Metadata } from "next";
import TermsAndCondition from "./_components/terms_and_condition";


export const metadata: Metadata = {
    title: 'Terms and Conditions',
    alternates: {
        canonical: `${process.env.SITE_URL}/terms-and-condition`
    }
};

export default function terms() {
    return (
        <main className="">
            <TermsAndCondition />
        </main>
    );
}