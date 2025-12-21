import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

const guarantees = [
    {
        title: "Innovative Products",
        desc: "Tesla's innovative products, such as the Model 3 and Cybertruck, drive growth and customer loyalty.",
    },
    {
        title: "Innovative Products",
        desc: "Tesla's innovative products, such as the Model 3 and Cybertruck, drive growth and customer loyalty.",
    },
    {
        title: "Innovative Products",
        desc: "Tesla's innovative products, such as the Model 3 and Cybertruck, drive growth and customer loyalty.",
    },
    {
        title: "Innovative Products",
        desc: "Tesla's innovative products, such as the Model 3 and Cybertruck, drive growth and customer loyalty.",
    },
];

export default function Guarantees() {
    return (
        <div className="">
            <h2 className="font-medium text-4xl lg:text-6xl lg:leading-18">
                Product Guarantees
            </h2>
            <p className="font-normal text-base text-primary/60 mt-2 lg:mt-4 xl:w-[70%]">
                These scores compare a companys growth, valuation, profitability, and financial health to the overall market.
                <br /> <br />
                Higher scores indicate better performance and show the company&apos;s percentile in these areas. Compare scores across different stocks to identify more attractive investments!
            </p>
            <div className="my-8 md:my-16 xl:my-20 2xl:my-24 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                {guarantees.map((item, i) => (
                    <div key={i} className="flex gap-x-6 ">
                        {/* icon */}
                        <div>
                            <div className="flex size-12 items-center justify-center rounded-xl bg-green-500 shadow-2xl shadow-[#2ECC718F]">
                                <div className="bg-white/20 p-1 rounded-md">
                                    <BadgeCheck className="size-4 text-white" />
                                </div>
                            </div>
                        </div>

                        <Card className="rounded-3xl bg-white/50 backdrop-blur-xl shadow-xl border-0">
                            <CardContent className="">
                                <h4 className="text-lg font-medium">
                                    {item.title}:
                                </h4>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}