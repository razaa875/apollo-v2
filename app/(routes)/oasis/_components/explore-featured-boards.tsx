import Image from "next/image";

const products = [
    {
        mainImage: "/images/oasis/featured-1.webp",
        thumbnails: [
            "/images/oasis/featured-1.webp",
            "/images/oasis/featured-1.webp",
        ],
        author: "Saghun Martinez",
        title: "Horizonx Smartwatch",
    },
    {
        mainImage: "/images/oasis/featured-2.webp",
        thumbnails: [
            "/images/oasis/featured-2.webp",
            "/images/oasis/featured-2.webp",
        ],
        author: "Ava Collins",
        title: "Aurora Fitness Band",
    },
    {
        mainImage: "/images/oasis/featured-3.webp",
        thumbnails: [
            "/images/oasis/featured-3.webp",
            "/images/oasis/featured-3.webp",
        ],
        author: "Liam Brooks",
        title: "PulseX Pro Watch",
    },
    {
        mainImage: "/images/oasis/featured-4.webp",
        thumbnails: [
            "/images/oasis/featured-4.webp",
            "/images/oasis/featured-4.webp",
        ],
        author: "Olivia Jensen",
        title: "Echo Series Tracker",
    },
    {
        mainImage: "/images/oasis/featured-1.webp",
        thumbnails: [
            "/images/oasis/featured-1.webp",
            "/images/oasis/featured-1.webp",
        ],
        author: "Ethan Wright",
        title: "WaveFit SmartBand",
    },
    {
        mainImage: "/images/oasis/featured-2.webp",
        thumbnails: [
            "/images/oasis/featured-2.webp",
            "/images/oasis/featured-2.webp",
        ],
        author: "Mia Torres",
        title: "Orbit Chrono",
    },
    {
        mainImage: "/images/oasis/featured-3.webp",
        thumbnails: [
            "/images/oasis/featured-3.webp",
            "/images/oasis/featured-3.webp",
        ],
        author: "Noah Reed",
        title: "TimeMax Active",
    },
    {
        mainImage: "/images/oasis/featured-4.webp",
        thumbnails: [
            "/images/oasis/featured-4.webp",
            "/images/oasis/featured-4.webp",
        ],
        author: "Ella Brown",
        title: "SkyTrack Neo",
    },
    {
        mainImage: "/images/oasis/featured-1.webp",
        thumbnails: [
            "/images/oasis/featured-1.webp",
            "/images/oasis/featured-1.webp",
        ],
        author: "James Carter",
        title: "FitSync Plus",
    },
    {
        mainImage: "/images/oasis/featured-2.webp",
        thumbnails: [
            "/images/oasis/featured-2.webp",
            "/images/oasis/featured-2.webp",
        ],
        author: "Sophia White",
        title: "ChronoZen Watch",
    },
    {
        mainImage: "/images/oasis/featured-2.webp",
        thumbnails: [
            "/images/oasis/featured-2.webp",
            "/images/oasis/featured-2.webp",
        ],
        author: "Sophia White",
        title: "ChronoZen Watch",
    },
    {
        mainImage: "/images/oasis/featured-2.webp",
        thumbnails: [
            "/images/oasis/featured-2.webp",
            "/images/oasis/featured-2.webp",
        ],
        author: "Sophia White",
        title: "ChronoZen Watch",
    },
];


type ProductCardProps = {
    mainImage: string;
    thumbnails: string[];
    author: string;
    title: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ mainImage, thumbnails, author, title }) => {
    return (
        <div className="w-full md:w-[47%] xl:w-[22%] 2xl:w-[14.5%]">
            <div className="flex gap-3">
                {/* Left - Main Image */}
                <div className="flex-1">
                    <div className="relative w-full h-59 xl:h-49 rounded-xl overflow-hidden">
                        <Image
                            src={mainImage || "/images/no-data/no-data.svg"}
                            alt={title}
                            height={630}
                            width={473}
                            className="size-full object-cover"
                        />
                    </div>
                </div>

                {/* Right - Thumbnails */}
                <div className="flex flex-col gap-3 w-[30%]">
                    {thumbnails.map((thumb, i) => (
                        <div
                            key={i}
                            className="relative w-full h-28 xl:h-23 rounded-xl overflow-hidden"
                        >
                            <Image
                                src={thumb || "/images/no-data/no-data.svg"}
                                alt={`thumbnail-${i}`}
                                height={630}
                                width={473}
                                className="object-cover size-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Text Info */}
            <div className="mt-4">
                <p className="text-sm text-gray-500">{author}</p>
                <h3 className="text-xl xl:text-lg font-semibold line-clamp-1">{title}</h3>
            </div>
        </div>
    );
};

export default function ExploreFeaturedBoard() {
    return (
        <section className="w-[90%] mx-auto">
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">Explore Featured Boards</h2>
            <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3">Explore reviews, demos, and live action.</p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 mt-8 md:mt-16 xl:mt-20">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        mainImage={product.mainImage}
                        thumbnails={product.thumbnails}
                        author={product.author}
                        title={product.title}
                    />
                ))}
            </div>
        </section>
    )
}
