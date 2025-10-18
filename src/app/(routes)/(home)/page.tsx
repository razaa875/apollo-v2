import { Metadata } from "next";

import Hero from "./_components/hero";
import Community from "./_components/community";
import RecentTest from "./_components/recent-test";
import BrandProduct from "./_components/brand-product";
import AddPlacement from "./_components/add-placement";
import ApolloCreators from "./_components/apollo-creator";
import WhatsNew from "./_components/whats-new";
import Journals from "./_components/journals";
import WhyApollo from "./_components/why-apollo";
import Adds from "./_components/adds";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: `${process.env.SITE_URL}`,
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Community />
      <RecentTest />
      <Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}>
        <BrandProduct />
      </Suspense>
      <AddPlacement />
      <ApolloCreators />
      <WhatsNew />
      <Journals />
      <WhyApollo />
      <Adds />
    </>
  );
}
