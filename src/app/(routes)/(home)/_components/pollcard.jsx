// PollCard.js

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

// Data structure for the poll options
const pollOptions = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Sodales urna ac lorem ornare non.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Sodales urna ac lorem ornare non.",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet sit. Sodales urna ac lorem ornare non.",
  },
  { id: 4, text: "Lorem ipsum dolor sit amet consectetur." },
];

const avatars = [
  "https://github.com/shadcn.png", // Replace with actual paths to your avatar images
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
];

const PollCard = () => {
  return (
    <div className="p-5 ">
      {/* Poll Header */}
      <h1 className="text-2xl font-semibold mb-6 pr-10 text-gray-800 capitalize text-center">
        what makes it hard for you to quit fast fashion?
      </h1>

      {/* Avatars and Vote Count */}
      <div className="flex items-center mb-6">
        <div className="flex -space-x-2">
          {avatars.map((src, index) => (
            <img
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white"
              src={src}
              alt={`Avatar ${index + 1}`}
            />
          ))}
        </div>
        <span className="ml-3 text-lg font-medium text-gray-700">
          200+ people voted
        </span>
      </div>

      {/* Poll Options List */}
      <ScrollArea className="h-[400px]">
        <div className="space-y-4">
          {pollOptions.map((option, index) => (
            <div
              key={option.id}
              className="flex items-start justify-between border-b border-l-4 border-l-transparent pb-4"
            >
              {/* Option Text Box (The main content box) */}
              <div
                className={`p-4 rounded-xl ${
                  index === 2 ? "w-4/5" : "w-full"
                } bg-gray-50 border border-gray-200 shadow-sm`}
              >
                <p className="text-base text-gray-800">{option.text}</p>
              </div>

              {/* Simulated Vertical Separator/Line (The dotted blue line on the right) */}
              <div className="flex-shrink-0 w-2 h-full border-l border-dashed border-blue-300 ml-4">
                {/* This div is left empty, its purpose is just the border-l style */}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PollCard;
