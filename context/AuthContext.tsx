"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserType {
  username?: string;
  name?: string;
  email?: string;
  role?: string;
  [key: string]: any;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: UserType | string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserType | string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsLoggedIn(true);
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        setUser(savedUser);
      }
    }
  }, []);

  const login = (username: string) => {
    setIsLoggedIn(true);
    const userData: UserType = {
      username,
      name: username.split("@")[0] || "User",
      email: username.includes("@") ? username : `${username}@company.com`,
      role: username.startsWith("admin") ? "admin" : "user",
    };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};