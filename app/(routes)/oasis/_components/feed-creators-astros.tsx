import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface IFeedCreatorsAstros {
    title: string;
    image: string;
    person: string;
    avatar: string;
}

const data = [
    {
        title: "Hugo Kovacek",
        image: "/images/oasis/feed-creator-1.webp",
        person: "Hugo Kovacek",
        avatar: "/images/oasis/creator-1.webp"
    },
    {
        title: "Vivian Kuhic",
        image: "/images/oasis/feed-creator-2.webp",
        person: "Vivian Kuhic",
        avatar: "/images/oasis/creator-2.webp"
    },
    {
        title: "Rodolfo Kozey",
        image: "/images/oasis/feed-creator-3.webp",
        person: "Rodolfo Kozey",
        avatar: "/images/oasis/creator-3.webp"
    },
    {
        title: "Jeannie Kerluke",
        image: "/images/oasis/feed-creator-4.webp",
        person: "Jeannie Kerluke",
        avatar: "/images/oasis/creator-4.webp"
    },
    {
        title: "Hugo Kovacek",
        image: "/images/oasis/feed-creator-5.webp",
        person: "Hugo Kovacek",
        avatar: "/images/oasis/creator-1.webp"
    },
    {
        title: "Vivian Kuhic",
        image: "/images/oasis/feed-creator-6.webp",
        person: "Vivian Kuhic",
        avatar: "/images/oasis/creator-2.webp"
    },
    {
        title: "Rodolfo Kozey",
        image: "/images/oasis/feed-creator-7.webp",
        person: "Rodolfo Kozey",
        avatar: "/images/oasis/creator-3.webp"
    },
    {
        title: "Jeannie Kerluke",
        image: "/images/oasis/feed-creator-8.webp",
        person: "Jeannie Kerluke",
        avatar: "/images/oasis/creator-4.webp"
    },
    {
        title: "Rodolfo Kozey",
        image: "/images/oasis/feed-creator-9.webp",
        person: "Rodolfo Kozey",
        avatar: "/images/oasis/creator-3.webp"
    },
    {
        title: "Jeannie Kerluke",
        image: "/images/oasis/feed-creator-10.webp",
        person: "Jeannie Kerluke",
        avatar: "/images/oasis/creator-4.webp"
    },
    {
        title: "Hugo Kovacek",
        image: "/images/oasis/feed-creator-1.webp",
        person: "Hugo Kovacek",
        avatar: "/images/oasis/creator-1.webp"
    },
    {
        title: "Vivian Kuhic",
        image: "/images/oasis/feed-creator-2.webp",
        person: "Vivian Kuhic",
        avatar: "/images/oasis/creator-2.webp"
    },
    {
        title: "Rodolfo Kozey",
        image: "/images/oasis/feed-creator-3.webp",
        person: "Rodolfo Kozey",
        avatar: "/images/oasis/creator-3.webp"
    },
    {
        title: "Jeannie Kerluke",
        image: "/images/oasis/feed-creator-4.webp",
        person: "Jeannie Kerluke",
        avatar: "/images/oasis/creator-4.webp"
    },
    {
        title: "Hugo Kovacek",
        image: "/images/oasis/feed-creator-5.webp",
        person: "Hugo Kovacek",
        avatar: "/images/oasis/creator-1.webp"
    },
    {
        title: "Vivian Kuhic",
        image: "/images/oasis/feed-creator-6.webp",
        person: "Vivian Kuhic",
        avatar: "/images/oasis/creator-2.webp"
    },
    {
        title: "Rodolfo Kozey",
        image: "/images/oasis/feed-creator-7.webp",
        person: "Rodolfo Kozey",
        avatar: "/images/oasis/creator-3.webp"
    },
    {
        title: "Jeannie Kerluke",
        image: "/images/oasis/feed-creator-8.webp",
        person: "Jeannie Kerluke",
        avatar: "/images/oasis/creator-4.webp"
    },
    {
        title: "Rodolfo Kozey",
        image: "/images/oasis/feed-creator-9.webp",
        person: "Rodolfo Kozey",
        avatar: "/images/oasis/creator-3.webp"
    },
    {
        title: "Jeannie Kerluke",
        image: "/images/oasis/feed-creator-10.webp",
        person: "Jeannie Kerluke",
        avatar: "/images/oasis/creator-4.webp"
    },
]

const MasonryGrid = ({ data }: { data: IFeedCreatorsAstros[] }) => {
    return (
        <div className="columns-1 md:columns-4 lg:columns-4 xl:columns-5 gap-4">
            {data.map((item, index) => (
                <div key={index} className="break-inside-avoid">
                    <div className="h-60 md:h-auto  rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="size-full object-cover"
                        />
                    </div>
                    <div className="flex items-center gap-x-2 my-3">
                        <Avatar>
                            <AvatarImage src={item.avatar} alt={item.person} />
                            <AvatarFallback>{item.person}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-medium text-sm">{item.person}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function FeedCreatorsAstros() {
    return (
        <section className="w-[90%] mx-auto">
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">Creators & Astros</h2>
            <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3">Explore reviews, demos, and live action.</p>
            <div className="mt-12">
                <MasonryGrid data={data} />
            </div>
            <div className="flex items-center justify-center mt-8">
                <Button variant="outline" fullWidth className="w-[35%] mx-auto">See More <ArrowRight /></Button>
            </div>
        </section>
    )
}