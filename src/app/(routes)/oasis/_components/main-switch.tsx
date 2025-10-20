"use client";

import React from "react";

import { Telescope, Rss } from "lucide-react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ExploreTheBest from "./explore-the-best";
import { Separator } from "@/components/ui/separator";
import BrowseByCategory from "./browse-by-category";
import ExploreFeaturedBoard from "./explore-featured-boards";
import WhatsNew from "./whats-new";
import CreatersAndAstros from "./creators-astro";

export default function Switch() {
    return (
        <>
            <Tabs defaultValue="discover" className="w-full">
                <TabsList className="h-13 w-[90%] md:w-[50%] mx-auto bg-white/40 rounded-2xl px-1.5 drop-shadow-2xl my-12">
                    <TabsTrigger value="discover" className="rounded-xl h-10 data-[state=active]:bg-primary/4 data-[state=active]:text-black">
                        <Telescope className="size-4" /> Discover
                    </TabsTrigger>
                    <div className="border border-primary/10 h-8 mx-3"></div>
                    <TabsTrigger value="personal-feed" className="rounded-xl h-10 data-[state=active]:bg-primary/4 data-[state=active]:text-black">
                        <Rss className="size-4" />  Personal Feed
                    </TabsTrigger>
                </TabsList>

                <div className="w-[90%] mx-auto">
                    <TabsContent value="discover">
                        <ExploreTheBest />
                        <Separator className="my-12 xl:my-16" />
                        <BrowseByCategory />
                        <Separator className="my-12 xl:my-16" />
                        <ExploreFeaturedBoard />
                        <WhatsNew />
                        <Separator className="my-12 xl:my-16" />
                        <CreatersAndAstros />
                    </TabsContent>

                    <TabsContent value="personal-feed">

                    </TabsContent>
                </div>
            </Tabs>
        </>
    );
}
