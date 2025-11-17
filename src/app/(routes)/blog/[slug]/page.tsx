import Image from "next/image";
import { notFound } from "next/navigation";

import { blogsData } from "../constants/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = blogsData.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.descp?.slice(0, 150) + "...",
    openGraph: {
      title: blog.title,
      description: blog.descp?.slice(0, 150),
      images: [{ url: blog.img }],
      url: `/blog/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.descp?.slice(0, 150),
      images: [blog.img],
    },
  };
}

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;

  const blog = blogsData.find((item) => item.slug === slug);

  if (!blog) return notFound();

  return (
    <section className="w-[90%] mx-auto pt-36 pb-16">
      <Image
        src={blog.img}
        alt={blog.title}
        title={blog.title}
        width={1586}
        height={1248}
        quality={75}
        className="rounded-xl object-cover mb-8 w-full h-100"
      />
      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{blog.descp}</p>
    </section>
  );
}
