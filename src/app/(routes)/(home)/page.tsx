import HomeMain from "./_components/main";
import Community from "./_components/community";
import RecentTest from "./_components/recent-test";
import { Metadata } from "next";
import BrandProduct from "./_components/brand-product";
import AddPlacement from "./_components/add-placement";
import ApolloCreators from "./_components/apollo-creator";
import WhatsNew from "./_components/whats-new";
import Journals from "./_components/journals";
import WhyApollo from "./_components/why-apollo";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: `${process.env.SITE_URL}`,
  },
};

export default function Page() {
  return (
    <>
      <HomeMain />
      <Community />
      <RecentTest />
      <BrandProduct />
      <AddPlacement />
      <ApolloCreators />
      <WhatsNew />
      <Journals />
      <WhyApollo />
      <WhyApollo />
    </>
  );
}
