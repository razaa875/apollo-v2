import { Metadata } from "next";
import Hero from "./_components/hero";
import NewArrival from "./_components/new-arrival";
import MidBanner from "./_components/mid-banner";
import AboutApollo from "./_components/about-apollo";

import JournalsGuides from "./_components/journals-guides";
export const metadata: Metadata = {
  title: "Blog",
  alternates: {
    canonical: `${process.env.SITE_URL}/blog`,
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <AboutApollo />
      <MidBanner />
      <JournalsGuides />
      <NewArrival />
    </>
  );
}
