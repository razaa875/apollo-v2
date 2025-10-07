'use client'
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Lock, LogIn, LogOut, Menu, User2, UserCog, UserRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { useAuth, useProfile } from "@/providers";

import LogoutModal from "./logout-modal";

const authRoutes = ["/login", "/sign-up", "/forgot-password", "/reset-password"];

export const Header = () => {
    const path = usePathname();
    const { isAuthenticated } = useAuth();
    const { user } = useProfile();

    const isDesktop = useMediaQuery("(min-width: 1024px)", {
        initializeWithValue: false,
    });

    const [open, setOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const [logoutDialog, setLogoutDialog] = useState(false);


    useEffect(() => {
        setOpen(false);
        if (!isAuthenticated || isDesktop) {
            setLogoutDialog(false);
            setUserOpen(false);
        }
    }, [path, isAuthenticated, isDesktop]);

    return (
        <>
            {!Boolean(path && authRoutes.includes(path)) && (
                <header>
                    {
                        isDesktop ?
                            <div className="fixed z-20 inset-x-0 w-[93%] mx-auto top-4 bg-background border-2 border-white shadow-xl backdrop-blur-3xl rounded-2xl px-[5%] overflow-hidden">
                                <div className="flex items-center justify-between py-6">
                                    <Link href="/" title="Home" className="w-fit">
                                        <Image
                                            src="/logo/logo.svg"
                                            alt="FalconPack"
                                            title="FalconPack"
                                            width={115}
                                            height={50}
                                            className="w-fit mx-auto h-6 object-contain"
                                        />
                                    </Link>
                                    <div className="flex items-center gap-x-6 font-semibold text-base uppercase text-[#2C2C2CCC]">
                                        <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-[2.5px] after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/" title="Home">Home</Link>
                                        <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-[2.5px] after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/oasis" title="Oasis">Oasis</Link>
                                        <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-[2.5px] after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/explore" title="Explore">Explore</Link>
                                        <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-[2.5px] after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/about" title="About">About</Link>
                                        <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-[2.5px] after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/live-commerce" title="Live Commerce">Live Commerce</Link>
                                    </div>
                                    {isAuthenticated ? (
                                        <UserMenu />
                                    ) : (
                                        <Link href="/login">
                                            <LogIn className="size-6 md:size-7" />
                                        </Link>
                                    )}
                                </div>

                            </div>
                            :
                            <div className="fixed z-20 inset-x-0 w-[93%] mx-auto top-4 bg-background border-2 border-white shadow-xl backdrop-blur-3xl rounded-2xl px-[5%] overflow-hidden">
                                <div className="flex items-center justify-between py-6">
                                    <button
                                        onClick={() => {
                                            if (userOpen) setUserOpen(false);
                                            setOpen((prev) => !prev);
                                        }}
                                    >
                                        <Menu className="size-6 md:size-7 cursor-pointer" />
                                    </button>

                                    <Link href="/" title="Home" className="w-fit mx-auto">
                                        <Image
                                            src="/logo/logo.svg"
                                            alt="FalconPack"
                                            title="FalconPack"
                                            width={115}
                                            height={50}
                                            className="w-fit mx-auto h-6 object-contain"
                                        />
                                    </Link>

                                    {isAuthenticated ? (
                                        <Button
                                            variant="ghost"
                                            type="button"
                                            className="rounded-full w-fit p-0"
                                            onClick={() => {
                                                if (open) setOpen(false);
                                                setUserOpen((prev) => !prev);
                                            }}
                                        >
                                            {user?.profile_picture_url ? (
                                                <Image
                                                    src={user?.profile_picture_url}
                                                    height={36}
                                                    width={36}
                                                    alt={user?.name}
                                                    className="size-9 md:size-11 rounded-full object-cover"
                                                />
                                            ) : (
                                                <User2 className="size-6 md:size-7 cursor-pointer" />
                                            )}
                                        </Button>
                                    ) : (
                                        <Link href="/login">
                                            <LogIn className="size-6 md:size-7" />
                                        </Link>
                                    )}
                                </div>

                                {/* Menu Routes */}
                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 140, damping: 12 }}
                                            className="flex flex-col justify-center items-center gap-y-4 font-medium text-base md:text-lg border-t border-black/40"
                                        >
                                            <Link className="w-fit mt-6" href="/" title="Home">Home</Link>
                                            <Link className="w-fit" href="/oasis" title="Oasis">Oasis</Link>
                                            <Link className="w-fit" href="/explore" title="Explore">Explore</Link>
                                            <Link className="w-fit" href="/about" title="About">About</Link>
                                            <Link className="w-fit mb-6" href="/live-commerce" title="Live Commerce">Live Commerce</Link>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* User Routes */}
                                <AnimatePresence initial={false}>
                                    {userOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 140, damping: 12 }}
                                            className="flex flex-col justify-center items-center gap-y-4 font-medium text-base md:text-lg border-t border-black/40"
                                        >
                                            <Link className="w-fit mt-6" href="/dashboard/profile">Account Info</Link>
                                            <Link className="w-fit" href="/dashboard/change-password">Change Password</Link>
                                            <Button
                                                type="button"
                                                variant="link"
                                                onClick={() => setLogoutDialog(true)}
                                                className="text-destructive md:h-auto md:py-0 mb-6"                                    >
                                                Logout
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <LogoutModal open={logoutDialog} onOpenChange={setLogoutDialog} />
                            </div>
                    }
                </header>
            )}

        </>
    )
}

const UserMenu = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { user } = useProfile();

    const [open, setOpen] = useState(false);

    const [logout, setLogout] = useState(false);

    const list = [
        {
            name: "Account Info",
            icon: <UserCog className="text-black" size={28} />,
            href: "/dashboard/profile",
        },
        {
            name: "Change Password",
            icon: <Lock className="text-black" size={28} />,
            href: "/dashboard/change-password",
        },
    ];

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <div className="flex justify-between items-center bg-secondary-light/10 rounded-full p-1">
                        <div className="size-9 md:size-11 flex justify-center items-center rounded-full cursor-pointer">
                            {user?.profile_picture_url ? (
                                <Image
                                    key={user?.profile_picture_url}
                                    src={user?.profile_picture_url}
                                    height={36}
                                    width={36}
                                    alt={user?.name}
                                    className="size-full rounded-full"
                                />
                            ) : (
                                <User2 className="size-6 text-white" />
                            )}
                        </div>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56 z-70 pt-3 pb-1 mr-4">
                    <div className="pb-2 px-1">
                        <div className="flex items-center ml-2">
                            <div className="rounded-full">
                                {user?.profile_picture_url ? (
                                    <Image
                                        key={user?.profile_picture_url}
                                        src={user?.profile_picture_url}
                                        height={40}
                                        width={40}
                                        alt="user Profile"
                                        className="rounded-full"
                                    />
                                ) : (
                                    <UserRound className="size-4 text-black" />
                                )}
                            </div>
                            <div className="ml-2">
                                <h2 className="text-sm font-bold">{user?.name}</h2>
                                {/* <p className="text-xs text-foreground">{user?.email}</p> */}
                            </div>
                        </div>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="px-1 my-2">
                        {list.map((item) => (
                            <DropdownMenuItem
                                key={item?.href}
                                onClick={() => {
                                    setOpen(false);
                                    router.push(item.href);
                                }}
                                className="flex items-center gap-x-2 mt-1"
                            >
                                {item.icon}
                                {item.name}
                            </DropdownMenuItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => {
                            setOpen(false);
                            setLogout(true);
                        }}
                    >
                        <div className="flex w-full items-center font-medium gap-x-2 my-1 cursor-pointer text-red-600 px-1">
                            <LogOut className="size-4 text-black" />
                            <span>Logout</span>
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* Logout Dialog */}
            <LogoutModal open={logout} onOpenChange={setLogout} />
        </>
    );
};
