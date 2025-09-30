import { getAuthCookie } from "@/lib/cookies";
import { NextRequest, NextResponse } from "next/server";

const authRoutes = ["/login", "/sign-up", "/forgot-password"];

export async function middleware(req: NextRequest) {
const pathname = req.nextUrl.pathname;
const token = await getAuthCookie();

if (!token && pathname.startsWith("/dashboard")) {
return NextResponse.redirect(new URL("/login", req.url));
}

if (token && authRoutes.includes(pathname)) {
return NextResponse.redirect(new URL("/dashboard/profile", req.url));
}

return NextResponse.next();
}

export const config = {
matcher: [
"/((?!api|_next|.*\..*).*)",
"/dashboard/:path*",
],
};
