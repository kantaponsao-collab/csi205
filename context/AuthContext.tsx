"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>(null);

  // ดึงสถานะเดิมจาก localStorage เมื่อโหลดหน้าเว็บขึ้นมา
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setIsLoggedIn(true);
      setUser(savedUser);
    }
  }, []);

  // บันทึกข้อมูลลง localStorage เมื่อทำการล็อกอิน
  const login = (username: string) => {
    setIsLoggedIn(true);
    setUser(username);
    localStorage.setItem("user", username);
  };

  // ลบข้อมูลจาก localStorage เมื่อทำการล็อกเอาต์
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
