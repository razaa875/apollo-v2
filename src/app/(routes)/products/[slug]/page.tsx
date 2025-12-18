"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Star } from "lucide-react";
import { apiService } from "@/common/services";
import { IProduct } from "@/common/models/interface";

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
    <section className="w-[90%] mx-auto pt-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={product.image || "/images/no-data/no-data.svg"}
            alt={product.title}
            width={800}
            height={800}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-semibold mb-4">{product.title}</h1>

          <p className="text-2xl font-medium text-primary mb-4">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <Star size={18} fill="#eab308" stroke="#eab308" />
            <span>{product.rating}</span>
            <span className="text-gray-400">({product.reviews.length} reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </section>
  );
}
