"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

const banners = [
    {
        id: 1,
        title: "Smart Watches",
        img: "/images/home/add-1.webp",
    },
    {
        id: 2,
        title: "Jewelry",
        img: "/images/home/add-2.webp",
    },
    {
        id: 3,
        title: "Western Dresses",
        img: "/images/home/add-3.webp",
    },
    {
        id: 4,
        title: "Perfume Collection",
        img: "/images/home/add-4.webp",
    },
];

export default function Adds() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // 🩵 Prevents hydration mismatch

    return (
        <section className="w-[90%] mx-auto flex flex-col gap-10 lg:gap-20">
            {banners.map((banner, i) => (
                <div
                    key={i}
                    className="overflow-hidden rounded-2xl shadow-[0px_12px_32px_0px_#0000001A]"
                >
                    <div className="size-full rounded-2xl overflow-hidden">
                        <Image
                            src={banner.img}
                            alt={banner.title}
                            width={1400}
                            height={700}
                            className="size-full object-cover rounded-2xl"
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}