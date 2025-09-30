import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button";
import { Eye, EyeOff } from "lucide-react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);

  const isPasswordType = type === "password";

  const inputType =
    isPasswordType && showPassword
      ? "text"
      : isPasswordType
        ? "password"
        : "text";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 🔑 PASSWORD TYPE
  if (isPasswordType) {
    return (
      <div className="relative">
        <input
          type={inputType}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#D2D3D9] border-2 h-9 md:h-12 w-full min-w-0 rounded-[20px] bg-transparent px-3 py-1 text-base font-light shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className

          )}
          {...props}
        />
        <Button
          type="button"
          onClick={togglePasswordVisibility}
          size="icon"
          className={
            "absolute top-1/2 -translate-y-1/2 hover:text-foreground transition-colors bg-transparent text-[#BABABA] right-2"
          }
          tabIndex={-1}
        >
          {showPassword ? (
            <Eye className="size-6" color="#BABABA" />
          ) : (
            <EyeOff className="size-6" color="#BABABA" />
          )}
        </Button>
      </div>
    );
  }
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-[#D2D3D9] border-2 h-9 md:h-12 w-full min-w-0 rounded-[20px] bg-transparent px-3 py-1 text-base font-light shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
