"use client";

import { IUser } from "@/common/models/interface";
import React, { createContext, useContext, useState, useEffect } from "react";
interface ProfileContext {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  updateUser: (user: Partial<IUser>) => void;
}

const userProfileKey = "apollo_user_cache";

const ProfileContext = createContext<ProfileContext | null>(null);

interface ProfileProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      const profileString = localStorage.getItem(userProfileKey);
      const user = profileString ? JSON.parse(profileString) : null;
      if (user) {
        setUserData(user);
      }
    })();
  }, []);

  const setUser = (user: IUser | null) => {
    setUserData(user);
    localStorage.setItem(userProfileKey, JSON.stringify(user));
  };

  const updateUser = (data: Partial<IUser>) => {
    if (userData) {
      const obj = { ...userData, ...data };
      setUserData(obj);
      localStorage.setItem(userProfileKey, JSON.stringify(obj));
    }
  };

  return <ProfileContext.Provider value={{ user: userData, setUser, updateUser }}>{children}</ProfileContext.Provider>;
};

export const useProfile = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) {
    throw new Error("useProfile must be used within an AuthProvider");
  }
  return ctx;
};
