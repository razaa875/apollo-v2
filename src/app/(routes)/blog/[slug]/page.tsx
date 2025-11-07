// blog/[slug]/page.tsx
import { blogsData } from "../constants/data";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default function BlogDetails({ params }: Props) {
  const blog = blogsData.find((item) => item.slug === params.slug);

  if (!blog) return notFound();

  return (
    <section className="w-[90%] mx-auto py-16">
      <Image
        src={blog.img}
        alt={blog.title}
        width={1000}
        height={500}
        className="rounded-xl object-cover mb-8 w-full"
      />
      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{blog.descp}</p>
    </section>
  );
}
