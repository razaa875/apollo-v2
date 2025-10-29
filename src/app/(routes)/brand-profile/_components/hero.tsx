import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CreatorProfileHero() {
    return (
        <section className="bg-[url(/images/brand-profile/hero.webp)] bg-no-repeat bg-cover min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="w-[90%] mx-auto flex flex-col relative z-1">
                <h1 className="font-medium text-3xl xl:text-6xl text-white lg:w-[60%] xl:w-[80%]">Lorem ipsum dolor sit amet consectetur.</h1>
                <p className="font-normal text-base xl:text-lg text-white/80 lg:w-[60%] xl:w-[90%] 2xl:w-[70%] mt-2">Our wide All Mountain ski, designed for a wide range of adventures. For a lighter weight skier it works perfect as a powder ski as well. Featuring a 106mm waist and a 19m turning radius at 178cm.</p>
                <Button variant="outline" fullWidth className="bg-background/20 backdrop-blur-xs mt-6 border-white text-white md:w-[50%] xl:w-[25%]">Shop Now <ArrowRight /></Button>
            </div>
        </section>
    )
}