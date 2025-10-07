'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const authRoutes = ["/login", "/sign-up", "/forgot-password", "/reset-password"];

export const Footer = () => {
    const path = usePathname();

    return (
        <>
            {!Boolean(path && authRoutes.includes(path)) && (
                <footer className="w-[93%] mx-auto border-t-2 border-[#2C2C2C40] py-4 mt-8 flex flex-col-reverse gap-y-6 md:flex-row items-center justify-center md:justify-between text-[#2C2C2C80] text-sm font-normal">
                    <span>© Apollo {new Date().getFullYear()}</span>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-y-2 gap-x-2">
                        <Link href="/sitemaps" className="hover:text-black transition-colors ease-in-out">Sitemaps</Link>
                        <Link href="/terms-and-conditions" className="md:border-l md:border-[#2C2C2C40] pl-2 hover:text-black transition-colors ease-in-out">Terms and conditions</Link>
                        <Link href="/refund-policy" className="md:border-l md:border-[#2C2C2C40] pl-2 hover:text-black transition-colors ease-in-out">Refund Policy</Link>
                        <Link href="/privacy-policy" className="md:border-l md:border-[#2C2C2C40] pl-2 hover:text-black transition-colors ease-in-out">Privacy Policy</Link>
                    </div>
                </footer>
            )}
        </>
    )
}