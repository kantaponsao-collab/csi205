"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/tailgrids/core/button";

export default function LoginModal() {
  const { isLoggedIn, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (isLoggedIn) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return;
    login(username);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative border border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Who are you?
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative flex items-center border rounded-xl border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 px-3 py-2.5">
            <svg
              className="w-5 h-5 text-gray-400 mr-2 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="text"
              placeholder="user | admin | manager"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-gray-700 outline-none text-sm pr-2"
              required
            />
            <span className="text-sm text-gray-400 font-medium shrink-0">
              @company.com
            </span>
          </div>

          <div className="relative flex items-center border rounded-xl border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 px-3 py-2.5">
            <svg
              className="w-5 h-5 text-gray-400 mr-2 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a10.12 10.12 0 013.682-.863c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21f-3-3m-9.543-7a9.97 9.97 0 011.563-3.029"
              />
            </svg>
            <input
              type="password"
              placeholder="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-gray-700 outline-none text-sm"
              required
            />
          </div>

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              variant="primary"
              size="sm"
              appearance="outline"
              className="px-5 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
