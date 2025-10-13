import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider, UserProvider } from "@/providers";
import { cookies } from "next/headers";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "../../common/comonents/header";
import { Footer } from "../../common/comonents/footer";
import GlobalLoader from "@/common/comonents/global-loader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Apollo',
    default: 'Apollo'
  },
  alternates: {
    canonical: `${process.env.SITE_URL}`
  }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const cookie = await cookies();
  const token = cookie.get("apollo_auth_token")?.value || null;
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${inter.className} antialiased bg-no-repeat bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100`}>
        <GlobalLoader>
          <UserProvider>
            <AuthProvider token={token}>
              <Header />
              {children}
              <Footer />
              <Toaster richColors position="top-center" />
            </AuthProvider>
          </UserProvider>
        </GlobalLoader>
      </body>
    </html>
  );
}
