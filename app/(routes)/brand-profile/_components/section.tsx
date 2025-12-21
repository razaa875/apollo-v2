import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Section() {
    return (
        <section className="w-[90%] mx-auto rounded-2xl h-140 bg-[url(/images/brand-profile/section.webp)] bg-no-repeat bg-cover bg-bottom flex items-center justify-center relative">
            <div className="absolute inset-0 bg-white/50 rounded-2xl"></div>
            <div className="w-[90%] mx-auto flex flex-col relative z-1">
                <h1 className="font-medium text-3xl xl:text-6xl lg:w-[60%] xl:w-[80%]">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="font-normal text-base xl:text-lg lg:w-[60%] xl:w-[90%] 2xl:w-[60%] mt-2 xl:mt-6">Our wide All Mountain ski, designed for a wide range of adventures. For a lighter weight skier it works perfect as a powder ski as well. Featuring a 106mm waist and a 19m turning radius at 178cm.</p>
                <Button variant="outline" fullWidth className="mt-6 xl:mt-10 border-white md:w-[50%] xl:w-[25%]">Shop Now <ArrowRight /></Button>
            </div>
        </section>
    )
}