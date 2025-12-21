'use client';

import Image from "next/image";

export default function ProfileHero() {
    return (
        <section className="w-[90%] mx-auto mt-8 mb-8 lg:mb-16">
            <h1 className="font-medium text-4xl lg:text-6xl text-center mb-16">What in the world?</h1>
            <div className="flex flex-col lg:flex-row-reverse gap-8">
                <Image src="/images/profile/cash.webp" alt="Apollo Cash" title="Apollo Cash" height={621} width={793} className="w-full lg:w-[48%] h-full lg:h-100 2xl:h-120 object-cover rounded-xl" />
                <div className=" lg:w-[48%] rounded-[20px] drop-shadow-2xl backdrop-blur-2xl bg-background font-medium text-3xl lg:text-5xl 2xl:text-4xl text-center py-[8%] xl:py-[5%] flex flex-col items-center justify-center gap-3 xl:gap-5 2xl:gap-8">
                    <p>Apollo Cash</p>
                    <p className="font-bold text-5xl lg:text-8xl 2xl:text-9xl">2500</p>
                    <p className="opacity-50">$16.00 Value</p>
                </div>
            </div>
        </section>
    )
}