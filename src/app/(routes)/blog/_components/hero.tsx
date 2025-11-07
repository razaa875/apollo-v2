"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="xl:min-h-screen">
      <Image
        src="/images/blog/hero.webp"
        alt="Hero Image"
        title="Hero Image"
        height={700}
        width={1400}
        className="size-full object-cover"
      />
    </section>
  );
}
