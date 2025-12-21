"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { apiService } from "@/common/services";
import { IProduct } from "@/common/models/interface";
import Hero from "./_components/hero";
import ProductReview from "./_components/review";

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
    return (
      <div className="h-[60vh] flex justify-center items-center text-xl text-red-500">
        Product not found
      </div>
    );
  }

  return (
    <>
    <Hero product={product}/>
    <ProductReview product={product}/>
    </>
  );
}
