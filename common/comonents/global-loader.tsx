"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "@/components/ui/spinner"; // ✅ Shadcn Spinner

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
          >
            {/* ✅ Shadcn Spinner */}
            <Spinner className="size-12 text-primary" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content fades in after loader */}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
        {children}
      </div>
    </>
  );
}
