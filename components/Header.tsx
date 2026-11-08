"use client";
import { Badge } from "@/components/tailgrids/core/badge";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, isLoggedIn } = useAuth();

  return (
    <div className="mt-4 text-center">
      {/* code */}
      <div className="flex justify-center gap-4">
        <Badge className="text-3xl rounded-lg py-1 px-3 bg-red-600 text-gray-100 rotate-15">
          C
        </Badge>
        <Badge className="text-3xl rounded-lg py-1 px-3 bg-green-800 text-gray-100 -rotate-15">
          S
        </Badge>
        <Badge className="text-3xl rounded-lg py-1 px-3 bg-blue-700 text-gray-100 rotate-15">
          I
        </Badge>
        <Badge className="text-3xl rounded-lg py-1 px-3 bg-cyan-500 text-gray-100 -rotate-15">
          2
        </Badge>
        <Badge className="text-3xl rounded-lg py-1 px-3 bg-yellow-500 text-gray-100 rotate-15">
          0
        </Badge>
        <Badge className="text-3xl rounded-lg py-1 px-3 bg-gray-600 text-gray-100 -rotate-15">
          5
        </Badge>
      </div>

      {/* name */}
      <div className="mt-4">
        <Badge className="text-2xl font-bold text-white bg-black rounded-lg py-2 px-4">
          FRONT END SOFTWARE DEVELOPMENT
        </Badge>
      </div>

      {/* User Status Bar */}
      {isLoggedIn && user && (
        <div className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold">
          <span className="text-gray-900">ROLE:</span>
          <span className="text-red-500 font-bold uppercase">{user.role}</span>
          <span className="text-gray-900 ml-2">NAME:</span>
          <span className="text-green-600">{user.name}</span>
          <span className="text-gray-900 ml-2">EMAIL:</span>
          <span className="bg-gray-100 border border-gray-200 text-gray-600 px-3 py-0.5 rounded-full text-xs font-normal">
            {user.email}
          </span>
        </div>
      )}
    </div>
  );
}
