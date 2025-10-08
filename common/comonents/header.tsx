'use client'
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { ChevronDown, Lock, LogIn, LogOut, Maximize, Menu, Search, ShoppingBag, User2, UserCog, UserRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import { Button } from "@/components/ui/button";

import { useAuth, useProfile } from "@/providers";

import LogoutModal from "./logout-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";

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
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        setOpen(false);
        if (!isAuthenticated || !isDesktop) {
            setLogoutDialog(false);
            setUserOpen(false);
        }
    }, [path, isAuthenticated, isDesktop]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const screenHeight = window.innerHeight;

            // shrink header when scrolled beyond viewport height
            if (scrollY > screenHeight && !isShrunk) {
                setIsShrunk(true);
            } else if (scrollY <= screenHeight && isShrunk) {
                setIsShrunk(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isShrunk]);


    return (
        <>
            {!Boolean(path && authRoutes.includes(path)) && (
                <header className="pt-28 md:pt-32">
                    {
                        isDesktop ?
                            <motion.div
                                layout
                                animate={{
                                    width: isShrunk ? "50%" : "93%",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 14,
                                }}
                                className="fixed z-20 inset-x-0 mx-auto top-8 bg-white/50 border-2 border-white shadow-xl backdrop-blur-md drop-shadow-2xl rounded-lg pl-[2%] pr-[1%] overflow-hidden"
                            >

                                <div className="flex items-center justify-between py-2">
                                    <Link href="/" title="Home" className="w-fit">
                                        <Image
                                            src="/logo/logo.svg"
                                            alt="Apollo"
                                            title="Apollo"
                                            width={115}
                                            height={50}
                                            priority
                                            className="w-fit mx-auto h-4 object-contain"
                                        />
                                    </Link>
                                    {!isShrunk && (
                                        <div className="flex items-center gap-x-6 font-semibold text-xs tracking-widest uppercase text-[#2C2C2CCC]">
                                            <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 py-1.5 after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/" title="Home">Home</Link>
                                            <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 py-1.5 after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/oasis" title="Oasis">Oasis</Link>
                                            <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 py-1.5 after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/explore" title="Explore">Explore</Link>
                                            <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 py-1.5 after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/about" title="About">About</Link>
                                            <Link className="relative hover:text-[#2C2C2CCC] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 py-1.5 after:w-0 after:bg-[#2C2C2CCC] after:transition-all after:duration-300 hover:after:w-full" href="/live-commerce" title="Live Commerce">Live Commerce</Link>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-x-3 bg-white/80 border border-white rounded px-2">
                                        <Link href="/cart">
                                            <ShoppingBag className="size-5" />
                                        </Link>
                                        <Link href="/product" className="border-x border-black px-2">
                                            <Search className="size-5" />
                                        </Link>
                                        {isAuthenticated ? (
                                            <UserMenu />
                                        ) : (
                                            <Link href="/login">
                                                <Button variant="ghost" type="button" className="p-0 h-auto has-[>svg]:px-0 hover:bg-transparent">
                                                    <LogIn className="size-5" />
                                                </Button>
                                            </Link>
                                        )}
                                        {isShrunk && (
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setIsShrunk(false)}
                                                title="Expand Header"
                                                className="h-auto p-0"
                                            >
                                                <Maximize className="size-5" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                            :
                            <div className="fixed z-20 inset-x-0 w-[93%] mx-auto top-4 bg-white/50 border-2 border-white shadow-xl backdrop-blur-md drop-shadow-2xl rounded-2xl px-[5%] overflow-hidden">
                                <div className="flex items-center justify-between py-6">
                                    <button
                                        onClick={() => {
                                            if (userOpen) setUserOpen(false);
                                            setOpen((prev) => !prev);
                                        }}
                                    >
                                        <Menu className="size-5 md:size-6 cursor-pointer" />
                                    </button>

                                    <Link href="/" title="Home" className="w-fit mx-auto h-5">
                                        <Image
                                            src="/logo/logo.svg"
                                            alt="Apollo"
                                            title="Apollo"
                                            width={115}
                                            height={50}
                                            priority
                                            className="size-full object-contain"
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
                                                <Avatar>
                                                    <AvatarImage src={user?.profile_picture_url} alt="@shadcn" />
                                                    <AvatarFallback>{user?.name}</AvatarFallback>
                                                </Avatar>
                                            ) : (
                                                <User2 className="size-5 md:size-6 cursor-pointer" />
                                            )}
                                        </Button>
                                    ) : (
                                        <Link href="/login">
                                            <LogIn className="size-5 md:size-6" />
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
    const router = useRouter();
    const { user } = useProfile();

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

    return (
        <>
            <Menubar className="bg-transparent border-0 shadow-none cursor-pointer rounded-full w-fit">
                <MenubarMenu>
                    <MenubarTrigger asChild className="p-0">
                        {user?.profile_picture_url ? (
                            <div className="flex items-center gap-x-1">
                                <Avatar className="lg:size-6.5">
                                    <AvatarImage src={user?.profile_picture_url} alt={user?.name} />
                                    <AvatarFallback>{user?.name}</AvatarFallback>
                                </Avatar>
                                <ChevronDown className="size-4" />

                            </div>
                        ) : (
                            <User2 className="size-6 text-white" />
                        )}
                    </MenubarTrigger>


                    <MenubarContent className="pt-3 pb-1 mt-4 xl:mt-2 2xl:mt-4 mr-8 xl:mr-10 2xl:mr-13">
                        <div className="pb-2 px-1">
                            <div className="flex items-center ml-2">
                                <div className="rounded-full">
                                    {user?.profile_picture_url ? (
                                        <Avatar>
                                            <AvatarImage src={user?.profile_picture_url} alt={user?.name} />
                                            <AvatarFallback>{user?.name}</AvatarFallback>
                                        </Avatar>
                                    ) : (
                                        <UserRound className="size-4 text-black" />
                                    )}
                                </div>
                                <div className="ml-3">
                                    <h2 className="text-sm font-bold">{user?.name}</h2>
                                    <p className="text-xs text-muted-foreground">{user?.email}</p>
                                </div>
                            </div>
                        </div>
                        <MenubarSeparator />
                        <div className="px-1 my-2">
                            {list.map((item) => (
                                <MenubarItem
                                    key={item?.href}
                                    onClick={() => {
                                        router.push(item.href);
                                    }}
                                    className="flex items-center gap-x-2 mt-1 cursor-pointer"
                                >
                                    {item.icon}
                                    {item.name}
                                </MenubarItem>
                            ))}
                        </div>
                        <MenubarSeparator />
                        <MenubarItem
                            onClick={() => {
                                setLogout(true);
                            }}
                        >
                            <div className="flex w-full items-center font-medium gap-x-2  cursor-pointer text-red-600 px-1">
                                <LogOut className="size-4 text-black" />
                                <span>Logout</span>
                            </div>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            {/* Logout Dialog */}
            <LogoutModal open={logout} onOpenChange={setLogout} />
        </>
    );
};
