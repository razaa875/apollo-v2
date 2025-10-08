/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Maximize, Minimize, Pause, PlayIcon, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function LiveCommerceMain() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [targetDate] = useState(() => {
        const date = new Date();
        date.setDate(date.getDate() + 7); // fixed target 7 days from now
        return date;
    });

    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const difference = +targetDate - +now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft, targetDate]);

    const formatTime = (time: number) => String(time).padStart(2, "0");

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            setCurrentTime(video.currentTime);
            setDuration(video.duration);
            setProgress((video.currentTime / video.duration) * 100);
        }
    };

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = videoRef.current;
        if (!video) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * video.duration;
        video.currentTime = newTime;
    };

     const toggleFullscreen = async () => {
        const container = containerRef.current;
        if (!container) return;

        try {
            if (!document.fullscreenElement) {
                if (container.requestFullscreen) await container.requestFullscreen();
                // Safari support
                else if ((container as any).webkitRequestFullscreen)
                    (container as any).webkitRequestFullscreen();
                setIsFullscreen(true);
            } else {
                if (document.exitFullscreen) await document.exitFullscreen();
                else if ((document as any).webkitExitFullscreen)
                    (document as any).webkitExitFullscreen();
                setIsFullscreen(false);
            }
        } catch (err) {
            console.error("Fullscreen error:", err);
        }
    };

    const videoFormatTime = (time: number) => {
        if (isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) video.addEventListener("timeupdate", handleTimeUpdate);
        return () => video?.removeEventListener("timeupdate", handleTimeUpdate);
    }, []);

    return (
        <>
            <h1 className="font-medium text-4xl lg:text-6xl text-center mt-8 mb-16">Live Commerce</h1>
            <div className="w-[90%] mx-auto flex flex-col items-center justify-center rounded-[20px] drop-shadow-2xl px-6 py-[4%] text-center backdrop-blur-2xl border-3 border-white bg-background mb-16">
                <h2 className="text-xl lg:text-5xl font-medium mb-4">
                    Don’t Miss Glen Powell’s Top 15 Favorite Products!
                </h2>

                <div className="flex items-center lg:gap-x-4 lg:mt-12">
                    {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                        <div key={unit} className="flex items-center lg:gap-x-4">
                            <div className="bg-black text-white rounded-md size-12 lg:w-28 lg:h-36 flex items-center justify-center text-lg lg:text-5xl font-bold">
                                {formatTime(
                                    unit === "days"
                                        ? timeLeft.days
                                        : unit === "hours"
                                            ? timeLeft.hours
                                            : unit === "minutes"
                                                ? timeLeft.minutes
                                                : timeLeft.seconds
                                )}
                            </div>
                            {idx < 3 && <span className="text-gray-600 mx-2 text-3xl">:</span>}
                        </div>
                    ))}
                </div>
            </div>

            <div ref={containerRef} className="relative w-[90%] mx-auto rounded-[20px] overflow-hidden shadow-md bg-black/10 backdrop-blur-2xl drop-shadow-2xl">
                {/* Video */}
                <video
                    ref={videoRef}
                    className="w-full aspect-square lg:h-150 object-cover"
                    poster="/images/live-commerce/poster.webp"
                    loop
                    // playsInline
                // muted={isMuted}
                >
                    <source src="/video/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Play/Pause Center Button */}
                <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                >
                    {isPlaying ? (
                        <Pause className="w-14 h-14 text-white opacity-90" />
                    ) : (
                        <PlayIcon className="w-14 h-14 text-white opacity-90" />
                    )}
                </button>

                {/* Bottom Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-2 flex flex-col gap-2">
                    {/* Progress Bar */}
                    <div
                        className="h-1.5 bg-white/30 rounded cursor-pointer"
                        onClick={handleProgressClick}
                    >
                        <div
                            className="h-1.5 bg-white rounded transition-all"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Time and Volume Controls */}
                    <div className="flex items-center justify-between text-sm text-white/90">
                        <span>{videoFormatTime(currentTime)}</span>
                        <div className="flex items-center gap-3">
                            <span>{videoFormatTime(duration)}</span>
                            <button className="cursor-pointer" onClick={toggleMute}>
                                {isMuted ? (
                                    <VolumeX className="w-5 h-5 text-white" />
                                ) : (
                                    <Volume2 className="w-5 h-5 text-white" />
                                )}
                            </button>
                            <button className="cursor-pointer" onClick={toggleFullscreen}>
                                {isFullscreen ? (
                                    <Minimize className="w-5 h-5 text-white" />
                                ) : (
                                    <Maximize className="w-5 h-5 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}