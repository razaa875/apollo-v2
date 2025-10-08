import HomeMain from "./_components/main";
import Community from "./_components/community";
import RecentTest from "./_components/recent-test";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
  alternates: {
    canonical: `${process.env.SITE_URL}`
  }
};

export default function Page() {
  return (
    <>
      <HomeMain />
      <Community />
      <RecentTest />
    </>
  );
}
