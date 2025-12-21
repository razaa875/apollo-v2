"use client";

import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  label: string;
  color: string;
  position: string;
};

const stats: Stat[] = [
  {
    value: 64,
    label: "Growth",
    color: "from-green-400 to-green-600",
    position: "-top-10 left-1/2 -translate-x-1/2",
  },
  {
    value: 19,
    label: "Profit",
    color: "from-red-500 to-red-700",
    position: "top-1/2 -right-10 -translate-y-1/2",
  },
  {
    value: 29,
    label: "Valuation",
    color: "from-sky-400 to-sky-600",
    position: "-bottom-10 left-1/2 -translate-x-1/2",
  },
  {
    value: 58,
    label: "Financial Health",
    color: "from-neutral-300 to-neutral-400 text-black",
    position: "top-1/2 -left-10 -translate-y-1/2",
  },
];

export default function Overview() {
  return (
    <section className="flex flex-col gap-y-8 lg:flex-row justify-between pb-8 lg:py-16">
      {/* LEFT CONTENT */}
      <div className="lg:w-[40%]">
        <h2 className="font-medium text-4xl lg:text-6xl lg:leading-18">
          Strengths & Weaknesses
        </h2>
        <p className="font-normal text-base text-primary/60 mt-2 lg:mt-4 xl:w-[70%]">
          These scores compare a company’s growth, valuation, profitability, and
          financial health to the overall market.
        </p>
      </div>

      {/* RIGHT VISUAL */}
      <div className="lg:w-[60%] flex items-center justify-center">
        <div className="relative group size-70 xl:size-100">
          {/* Orbit Ring */}
          <div
            className="
              absolute inset-0 rounded-full border-2 border-black
              transition-all duration-700

              opacity-100 scale-100
              lg:opacity-0 lg:scale-75
              lg:group-hover:opacity-100 lg:group-hover:scale-100
            "
          />

          {/* Center Circle */}
          <div
            className="
              absolute inset-1/4 z-10
              rounded-full
              bg-gradient-to-br from-yellow-400 to-yellow-600
              flex items-center justify-center
              text-white text-2xl xl:text-4xl font-semibold
              transition-transform duration-500

              lg:group-hover:scale-105
            "
          >
            Apollo
          </div>

          {/* Stats Circles */}
          {stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                `
                absolute z-20
                size-24 rounded-full
                bg-gradient-to-br ${stat.color}
                flex flex-col items-center justify-center
                text-white
                transition-all duration-700

                opacity-100 scale-100
                lg:opacity-0 lg:scale-50
                lg:group-hover:opacity-100 lg:group-hover:scale-100
                `,
                stat.position
              )}
              style={{
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <span className="text-2xl font-semibold">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-wide text-white/80 text-center px-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
