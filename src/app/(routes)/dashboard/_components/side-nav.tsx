"use client";

import { usePathname } from "next/navigation";

import { Lock, LogOut, UserCog } from "lucide-react";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import LogoutModal from "@/common/comonents/logout-modal";

export const SideNav = () => {
  const path = usePathname();

  const normalizedPath = path ? "/" + path.split("/").slice(2).join("/") : "";

  const List = [
    {
      name: "Account Info",
      href: "/dashboard/profile",
      Icon: <UserCog className="size-7" strokeWidth={1.5} />,
    },
    {
      name: "Change Password",
      href: "/dashboard/change-password",
      Icon: <Lock className="size-7" strokeWidth={1.5} />,
    },
  ];

  return (
    <>
      <AlertDialog>
        <div className="flex flex-col gap-y-4 w-full">
          <h3 className="text-[24px] font-bold px-10 lg:px-6 xl:px-8">
            User Dashboard
          </h3>
          {List.map((item) => (
            <div key={item.name} className="relative">
              <Link
                href={item.href}
                className={`w-fit flex gap-x-4 items-center px-10 lg:px-6 xl:px-8 ${
                  normalizedPath === item.href ? "text-primary" : ""
                }`}
              >
                <Button
                  type="button"
                  variant="link"
                  className={`${
                    normalizedPath === item.href
                      ? "text-white bg-primary"
                      : "text-black bg-primary/10"
                  } size-16 grid place-items-center rounded-full`}
                >
                  {item.Icon}
                </Button>
                <span
                  className={`text-base font-semibold transition-colors xl:whitespace-nowrap`}
                >
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
          <AlertDialogTrigger className="flex items-center gap-x-4 px-10 lg:px-6 xl:px-8 mt-[115%] cursor-pointer">
            <div className="size-16 bg-primary/10 text-foreground rounded-full flex items-center justify-center">
              <LogOut className="size-7 text-black" strokeWidth={1.5} />
            </div>
            <span className="text-lg font-semibold">Logout</span>
          </AlertDialogTrigger>
        </div>
        <LogoutModal />
      </AlertDialog>
    </>
  );
};
