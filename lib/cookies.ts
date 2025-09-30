"use server";

import { cookies as nextCookies } from "next/headers";

const AUTH_COOKIE = "apollo_auth_token";

export const setAuthCookie = async (token: string) => {
  const cookies = await nextCookies();
  cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
};

export const getAuthCookie = async () => {
  const cookies = await nextCookies();
  return cookies.get(AUTH_COOKIE)?.value || null;
};

export const clearAuthCookie = async () => {
  const cookies = await nextCookies();
  cookies.delete(AUTH_COOKIE);
};
