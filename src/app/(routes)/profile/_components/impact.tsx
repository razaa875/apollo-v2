'use client';

import Image from "next/image";

export default function YourImpact() {
    return (
        <>
            <section className="w-[90%] mx-auto border-y border-black/15 py-[5%] my-8 lg:mb-16">
                <h2 className="font-medium text-4xl lg:text-6xl text-center mb-5">Your Impact</h2>
                <p className="opacity-50 font-normal text-base lg:text-xl text-center">Explore Product Life Expectancy</p>
                <Image src="/images/profile/impact.svg" alt="Impact bar" height={180} width={1300} className="size-full object-contain my-8 lg:my-16" />
                <p className="opacity-50 font-normal text-base lg:text-xl text-center">Money Has been sent</p>
            </section>
            <section className="w-[90%] mx-auto my-8 lg:my-16">
                <h2 className="font-medium text-4xl lg:text-6xl text-center mb-5">Your Spaceman</h2>
                <Image src="/images/profile/spaceman.webp" alt="Spaceman" height={180} width={1300} className="size-full object-contain my-8 lg:my-16" />
            </section>
        </>
    )
}