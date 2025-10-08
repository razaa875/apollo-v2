'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const transactions = [
    {
        id: 1,
        name: "Allbirds",
        message: "you made a climate friendly purchase:",
        date: "Oct 11, 2024",
        points: "+30",
        image: "/images/profile/person-1.webp",
    },
    {
        id: 2,
        name: "Allbirds",
        message: "you made a climate friendly purchase:",
        date: "Oct 11, 2024",
        points: "+30",
        image: "/images/profile/person-2.webp",
    },
    {
        id: 3,
        name: "Allbirds",
        message: "you made a climate friendly purchase:",
        date: "Oct 11, 2024",
        points: "+30",
        image: "/images/profile/person-3.webp",
    },
    {
        id: 4,
        name: "Allbirds",
        message: "you made a climate friendly purchase:",
        date: "Oct 11, 2024",
        points: "+30",
        image: "/images/profile/person-4.webp",
    },
    {
        id: 5,
        name: "Allbirds",
        message: "you made a climate friendly purchase:",
        date: "Oct 11, 2024",
        points: "+30",
        image: "/images/profile/person-5.webp",
    },
];

export default function Earnings() {
    return (
        <section className="w-[90%] mx-auto border-t border-black/15 py-[5%] mt-8">
            <h2 className="font-medium text-4xl lg:text-6xl text-center mb-5">Your Earnings</h2>
            <Card className="rounded-[20px] drop-shadow-2xl px-6 py-4 backdrop-blur-2xl bg-background mt-8 lg:mt-16 xl:mt-24">
                <CardContent className="p-0 divide-y divide-white/20">
                    {transactions.map((t, i) => (
                        <div
                            key={t.id}
                            className={`flex items-center justify-between py-[4%] lg:py-[3%] hover:bg-white/10 transition-colors ${i !== transactions.length - 1 ? "border-b border-black/15" : ""
                                }`}                        >
                            <div className="flex items-center gap-4 lg:gap-x-8">
                                <Avatar className="size-12 lg:size-20">
                                    <AvatarImage src={t.image} alt={t.name} />
                                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                                </Avatar>

                                <div>
                                    <p className="text-sm lg:text-lg font-medium text-black/40">{t.date}</p>
                                    <p className="text-base lg:text-2xl font-medium mt-1">
                                        {t.message}
                                        <span className="ml-1">
                                            {t.name}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-base lg:text-xl font-medium text-green-600">
                                    {t.points}
                                </span>
                                <Heart className="h-4 w-4 text-black/40 hover:text-red-500 transition-colors cursor-pointer" />
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </section>
    )
}