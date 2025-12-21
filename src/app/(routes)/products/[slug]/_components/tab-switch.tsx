"use client";

import { BriefcaseBusiness, Users, Signal } from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductDetail from "./product-detail";
import CompanyNarrative from "./company-narrative";
import Guarantees from "./gurantees";
import Overview from "./overview";

export default function TabsSwitch() {
    return (
        <>
            <Tabs orientation="horizontal" defaultValue="product-detail" className="w-full">
                <TabsList className="h-13 w-[90%] mx-auto bg-white/40 rounded-2xl px-1.5 drop-shadow-2xl mb-8 flex justify-start flex-nowrap overflow-x-auto no-scrollbar">
                    <TabsTrigger value="product-detail" className="rounded-xl h-10 data-[state=active]:bg-primary/4 data-[state=active]:text-black">
                        <BriefcaseBusiness className="size-4" /> Product Details
                    </TabsTrigger>
                    <div className="border border-primary/10 h-8 mx-3"></div>
                    <TabsTrigger value="company-narrative" className="rounded-xl h-10 data-[state=active]:bg-primary/4 data-[state=active]:text-black">
                        <Users className="size-4" />  Company Narrative
                    </TabsTrigger>
                    <div className="border border-primary/10 h-8 mx-3"></div>
                    <TabsTrigger value="guarantees" className="rounded-xl h-10 data-[state=active]:bg-primary/4 data-[state=active]:text-black">
                        <Signal className="size-4" />  Guarantees
                    </TabsTrigger>
                    <div className="border border-primary/10 h-8 mx-3"></div>
                    <TabsTrigger value="testing-overview" className="rounded-xl h-10 data-[state=active]:bg-primary/4 data-[state=active]:text-black">
                        <Signal className="size-4" />  Testing Overview
                    </TabsTrigger>
                </TabsList>

                <div className="w-[90%] mx-auto">
                    <TabsContent value="product-detail">
                        <ProductDetail />
                    </TabsContent>

                    <TabsContent value="company-narrative">
                        <CompanyNarrative />
                    </TabsContent>

                    <TabsContent value="guarantees">
                        <Guarantees />
                    </TabsContent>

                    <TabsContent value="testing-overview">
                        <Overview />
                    </TabsContent>
                </div>
            </Tabs>
        </>
    );
}
