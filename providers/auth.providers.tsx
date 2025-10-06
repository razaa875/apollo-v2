"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { useProfile } from "@/providers";

import { clearAuthCookie, setAuthCookie } from "@/lib/cookies";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  signout: (path?: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signin: (token: string, user: any, path?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ token: defaultValue, children }: { token: string | null; children: React.ReactNode }) {
  const router = useRouter();
  const { setUser } = useProfile();
  const [initialToken, setToken] = useState<string | null>(defaultValue);

  useEffect(() => {
    if (defaultValue) {
      setToken(defaultValue);
    }
  }, [defaultValue]);

  const signin = async (
    token: string | null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any = null,
    path: string = "/dashboard/profile"
  ) => {
    if (token) {
      setToken(token);
      setUser(user);
      await setAuthCookie(token);
      router.replace(path);
    }
  };

  const signout = async (path?: string) => {
    if (initialToken) {
      await clearAuthCookie();
      setToken(null);
      setUser(null);
      if (path) {
        router.replace(path);
      }
    }
  };

  const value: AuthContextType = {
    token: initialToken,
    signin,
    signout,
    isAuthenticated: !!initialToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
