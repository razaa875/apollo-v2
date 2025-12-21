import { Metadata } from "next";
import SitemapMain from "./_components/main";

export const metadata: Metadata = {
  title: "Sitemap",
  alternates: {
    canonical: `${process.env.SITE_URL}/sitemap`,
  },
};

export default function Page() {
  return <SitemapMain />;
}
