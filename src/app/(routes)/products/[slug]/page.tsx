"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { apiService } from "@/common/services";
import { IProduct } from "@/common/models/interface";
import Hero from "./_components/hero";
import ProductReview from "./_components/review";
import LifeExpectency from "./_components/life-expectency";
import JournalGuide from "./_components/journal-guide";
import WhatsThink from "./_components/whats-think";
import FeelFree from "./_components/feel-free";
import ApolloIndex from "./_components/apollo-index";

export default function ProductDetailPage() {
  const params = useParams(); // Get slug from route
  const slug = params?.slug;

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    apiService
      .httpGetRequest<{ status: string; data: IProduct }>(
        `products/slug/${slug}`,
        "",
        { setCache: false }
      )
      .subscribe({
        next: (res) => {
          if (res.status === "success") {
            setProduct(res.data);
          } else {
            setProduct(null);
          }
          setLoading(false);
        },
        error: () => setLoading(false),
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center text-xl">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return notFound();
  }

  return (
    <main className="pt-28 md:pt-32">
      <Hero product={product} />
      <WhatsThink />
      <ProductReview product={product} />
      <LifeExpectency product={product} />
      <ApolloIndex product={product}/>
      {/* <Comparison product={product} /> */}
      <FeelFree />
      <JournalGuide product={product} />
    </main>
  );
}
