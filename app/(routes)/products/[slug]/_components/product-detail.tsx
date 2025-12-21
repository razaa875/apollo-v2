import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

export default function ProductDetail() {
    const [activeItem, setActiveItem] = useState<string>("item-1");

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-8">
            <div className="lg:w-[30%] xl:w-[35%]">
                <h2 className="font-medium text-4xl lg:text-6xl lg:leading-18">
                    Product Details
                </h2>
                <p className="font-normal text-base text-primary/60 mt-2 lg:mt-4">Our wide All Mountain ski, designed for a wide range of adventures.</p>
                <div className="mt-4 flex-col gap-y-4 hidden lg:flex">
                    <p className={`w-fit cursor-pointer text-base pl-4 transition-all ease border-l-2 ${activeItem === "item-1" ? 'border-black text-black font-medium' : 'text-primary/60 border-transparent font-normal'}`} onClick={() => setActiveItem("item-1")}>Specifications</p>
                    <p className={`w-fit cursor-pointer text-base pl-4 transition-all  ease border-l-2 ${activeItem === "item-2" ? 'border-black text-black font-medium' : 'text-primary/60 border-transparent font-normal'}`} onClick={() => setActiveItem("item-2")}>Sizing</p>
                    <p className={`w-fit cursor-pointer text-base pl-4 transition-all  ease border-l-2 ${activeItem === "item-3" ? 'border-black text-black font-medium' : 'text-primary/60 border-transparent font-normal'}`} onClick={() => setActiveItem("item-3")}>Materials</p>
                    <p className={`w-fit cursor-pointer text-base pl-4 transition-all  ease border-l-2 ${activeItem === "item-4" ? 'border-black text-black font-medium' : 'text-primary/60 border-transparent font-normal'}`} onClick={() => setActiveItem("item-4")}>Sustainability</p>
                </div>
            </div>
            <div className="lg:w-[60%] xl:w-[50%]">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    value={activeItem}
                    onValueChange={setActiveItem}
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Specifications</AccordionTrigger>
                        <AccordionContent className="text-balance flex flex-col gap-y-4">
                            <p className="text-sm lg:text-base font-normal">
                                Tesla makes money by selling electric vehicles, battery energy storage
                                systems, solar panels, and solar roof tiles, along with related products and services.
                            </p>
                            <p className="text-[#2C2C2C80] text-sm lg:text-base font-normal">
                                Tesla&apos;s largest sources of revenue come from electric vehicle sales, which consistently
                                account for the biggest chunk of their income, thanks to the popularity and high price points of their devices. Additionally, their energy generation and storage products, including the Powerwall and solar panels, have become a major growth driver, generating recurring revenue and high margins.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Sizing</AccordionTrigger>
                        <AccordionContent className="text-balance flex flex-col gap-y-4">
                            <p className="text-sm lg:text-base font-normal">
                                Tesla makes money by selling electric vehicles, battery energy storage
                                systems, solar panels, and solar roof tiles, along with related products and services.
                            </p>
                            <p className="text-[#2C2C2C80] text-sm lg:text-base font-normal">
                                Tesla&apos;s largest sources of revenue come from electric vehicle sales, which consistently
                                account for the biggest chunk of their income, thanks to the popularity and high price points of their devices. Additionally, their energy generation and storage products, including the Powerwall and solar panels, have become a major growth driver, generating recurring revenue and high margins.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Materials</AccordionTrigger>
                        <AccordionContent className="text-balance flex flex-col gap-y-4">
                            <p className="text-sm lg:text-base font-normal">
                                Tesla makes money by selling electric vehicles, battery energy storage
                                systems, solar panels, and solar roof tiles, along with related products and services.
                            </p>
                            <p className="text-[#2C2C2C80] text-sm lg:text-base font-normal">
                                Tesla&apos;s largest sources of revenue come from electric vehicle sales, which consistently
                                account for the biggest chunk of their income, thanks to the popularity and high price points of their devices. Additionally, their energy generation and storage products, including the Powerwall and solar panels, have become a major growth driver, generating recurring revenue and high margins.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Sustainability</AccordionTrigger>
                        <AccordionContent className="text-balance flex flex-col gap-y-4">
                            <p className="text-sm lg:text-base font-normal">
                                Tesla makes money by selling electric vehicles, battery energy storage
                                systems, solar panels, and solar roof tiles, along with related products and services.
                            </p>
                            <p className="text-[#2C2C2C80] text-sm lg:text-base font-normal">
                                Tesla&apos;s largest sources of revenue come from electric vehicle sales, which consistently
                                account for the biggest chunk of their income, thanks to the popularity and high price points of their devices. Additionally, their energy generation and storage products, including the Powerwall and solar panels, have become a major growth driver, generating recurring revenue and high margins.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}