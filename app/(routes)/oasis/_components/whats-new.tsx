import Image from "next/image";

  const images = [
    "/images/oasis/featured-1.webp",
    "/images/oasis/featured-2.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
    "/images/oasis/featured-1.webp",
    "/images/oasis/featured-2.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
    "/images/oasis/featured-1.webp",
    "/images/oasis/featured-2.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
    "/images/oasis/featured-1.webp",
    "/images/oasis/featured-2.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
    "/images/oasis/featured-1.webp",
    "/images/oasis/featured-2.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
    "/images/oasis/featured-1.webp",
    "/images/oasis/featured-2.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
    "/images/oasis/featured-1.webp",
    "/images/oasis/featured-2.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
    "/images/oasis/featured-3.webp",
    "/images/oasis/featured-4.webp",
  ];

interface MasonryGridProps {
    images: string[];
}

const MasonryGrid = ({ images }: MasonryGridProps) => {
    return (
        <div className="columns-2 md:columns-4 lg:columns-4 xl:columns-5 2xl:columns-6 gap-4 min-h-screen">
            {images.map((img, index) => (
                <div key={index} className="mb-4 h-auto break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <Image
                        src={img}
                        alt={`pinterest-${index}`}
                        width={400}
                        height={400}
                        className="size-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}

export default function WhatsNew() {
    return (
        <section className="w-[90%] mx-auto mt-12 xl:mt-16">
            <h2 className="w-[90%] mx-auto text-center text-4xl lg:text-6xl font-medium">What’s New</h2>
            <p className="w-[90%] mx-auto text-center text-base lg:text-xl text-black/50 font-normal mt-3">Explore reviews, demos, and live action.</p>
            <div className="mt-12">
                <MasonryGrid images={images} />
            </div>
        </section>
    )
}