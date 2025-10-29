import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="bg-[url('/images/no-data/no-data-bg.webp')] bg-no-repeat bg-cover flex flex-col items-center justify-center gap-y-8 h-screen drop-shadow-2xl pt-[6%]">
            <h3 className="font-medium text-3xl text-white text-center">404 Error Page Not Found!</h3>
            <Image src="/images/no-data/no-data.svg" alt="No Data Image" title="No Data Image" height={566} width={566} className="size-100 mx-auto object-contain" />
            <Link href="/" className="">
                <Button variant="destructive">
                    Go Back Home
                </Button>
            </Link>
        </div>
    );
}
