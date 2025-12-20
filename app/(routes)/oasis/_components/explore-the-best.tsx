import Image from "next/image";

export default function ExploreTheBest() {
    return (
        <section className="w-[90%] mx-auto">
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium capitalize">Explore the best</h2>
            <div className="flex flex-col xl:flex-row xl:justify-between gap-y-6 mt-12">
                <div className="relative h-70 lg:h-100 xl:w-[32%]">
                    <Image src="/images/oasis/explore-1.webp" alt="Explore Image" title="Explore Image" height={533} width={800} className="size-full object-cover rounded-2xl" />
                    <p className="absolute inset-x-0 bottom-4 w-[90%] mx-auto text-white font-medium text-sm text-center lg:text-base z-10">Lorem ipsum dolor sit amet consectetur. Sit pellentesque quisque aliquet.</p>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/10 rounded-2xl"></div>
                </div>
                <div className="relative h-70 lg:h-100 xl:w-[32%]">
                    <Image src="/images/oasis/explore-2.webp" alt="Explore Image" title="Explore Image" height={800} width={1540} className="size-full object-cover rounded-2xl" />
                    <p className="absolute inset-x-0 bottom-4 w-[90%] mx-auto text-white font-medium text-sm text-center lg:text-base z-10">Lorem ipsum dolor sit amet consectetur. Sit pellentesque quisque aliquet.</p>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/10 rounded-2xl"></div>
                </div>
                <div className="relative h-70 lg:h-100 xl:w-[32%]">
                    <Image src="/images/oasis/explore-3.webp" alt="Explore Image" title="Explore Image" height={800} width={600} className="size-full object-cover rounded-2xl" />
                    <p className="absolute inset-x-0 bottom-4 w-[90%] mx-auto text-white font-medium text-sm text-center lg:text-base z-10">Lorem ipsum dolor sit amet consectetur. Sit pellentesque quisque aliquet.</p>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary/10 rounded-2xl"></div>
                </div>
            </div>
        </section>
    )
}