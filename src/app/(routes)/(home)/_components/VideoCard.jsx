import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function VideoCard({ videoUrl, cover }) {
  const [play, setPlay] = useState(false);

  return (
    <Card className="overflow-hidden w-[277px] h-[499px] p-0">
      <CardContent className="relative p-0 h-full">
        {!play ? (
          <div
            className="relative cursor-pointer h-full"
            onClick={() => setPlay(true)}
          >
            <img
              src={`${cover}`}
              alt="Video thumbnail"
              className="w-full object-cover h-full"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className=" ">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <foreignObject
                    x="-26.5225"
                    y="-26.7256"
                    width="106.772"
                    height="106.771"
                  >
                    <div xmlns="http://www.w3.org/1999/xhtml"></div>
                  </foreignObject>
                  <g data-figma-bg-blur-radius="26.7647">
                    {" "}
                    <rect
                      x="0.242188"
                      y="0.0390625"
                      width="53.2416"
                      height="53.2416"
                      rx="26.6208"
                      fill="white"
                      fillOpacity="0.21"
                    />{" "}
                    <rect
                      x="0.601928"
                      y="0.398803"
                      width="52.5221"
                      height="52.5221"
                      rx="26.261"
                      stroke="white"
                      strokeOpacity="0.16"
                      strokeWidth="0.719481"
                    />{" "}
                    <path
                      d="M35.4012 25.256C36.4467 25.8968 36.4467 27.4145 35.4012 28.0553L23.5298 35.0702C22.4506 35.711 21.1016 34.9353 21.1016 33.6537V19.6238C21.1016 18.2411 22.5518 17.6678 23.5298 18.2411L35.4012 25.256ZM22.7204 33.3165C22.7204 33.4851 22.889 33.5525 23.0239 33.4851L34.2883 26.8411C34.4232 26.74 34.4232 26.5713 34.2883 26.4702L23.0239 19.8262C22.889 19.725 22.7204 19.8262 22.7204 19.9948V33.3165Z"
                      fill="white"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath
                      id="bgblur_0_40000951_7370_clip_path"
                      transform="translate(26.5225 26.7256)"
                    >
                      <rect
                        x="0.242188"
                        y="0.0390625"
                        width="53.2416"
                        height="53.2416"
                        rx="26.6208"
                      />{" "}
                    </clipPath>
                  </defs>{" "}
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <video controls autoPlay className="w-full">
            <source src={`${videoUrl}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </CardContent>
    </Card>
  );
}
