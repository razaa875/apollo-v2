"use client";
import Image from "next/image";
import VideoCard from "./video-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PollCard from "@/src/app/(routes)/(home)/_components/pollcard";
export default function WhyApollo() {
  return (
    <>
      <section className="py-16 border-t border-[#2C2C2C26] ">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Apollo?
            </h2>
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Our Wide All Mountain Ski, Designed For A Wide Range Of
              Adventures.
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              This is our carving ski. Inspired by the dynamic world of free
              skiing and made for groomed slopes and sporadic off-piste
              adventures. Featuring a 93mm waist and a 15m turning radius at
              175cm. Should be mounted using 4.1 × 9mm drill bit. There is a
              typo on the skis themselves so make sure you give this information
              to the shop mounting your bindings.
            </p>

            <button className="bg-white text-gray-800 px-6 py-3 rounded-xl font-medium shadow-sm border border-gray-200 hover:bg-gray-50 flex items-center gap-2 transition">
              CHAT WITH US NOW
              <span className="text-lg">↗</span>
            </button>
          </div>

          {/* Right Video Card */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
              <video
                controls
                className="w-full h-full rounded-2xl"
                poster="/images/video-thumbnail.jpg" // optional thumbnail
              >
                <source src="/videos/apollo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
