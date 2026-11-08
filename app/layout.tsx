"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { Button } from "@/components/tailgrids/core/button";
import { CartProvider, useCart } from "@/context/CartContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import LoginModal from "@/components/LoginModal";

function Navigation() {
  const pathname = usePathname();
  const { products, cartItems } = useCart();
  const { isLoggedIn, logout } = useAuth();
  const cartCount = cartItems.length;

  return (
    <nav className="mt-4 flex justify-center gap-4 flex-wrap items-center">
      <Link href="/">
        <Button
          variant="primary"
          size="sm"
          appearance={pathname === "/" ? "fill" : "outline"}
        >
          Home
        </Button>
      </Link>
      <Link href="/animation">
        <Button
          variant="primary"
          size="sm"
          appearance={pathname === "/animation" ? "fill" : "outline"}
        >
          Animation
        </Button>
      </Link>
      <Link href="/calculator">
        <Button
          variant="primary"
          size="sm"
          appearance={pathname === "/calculator" ? "fill" : "outline"}
        >
          Calculator
        </Button>
      </Link>
      <Link href="/todos">
        <Button
          variant="primary"
          size="sm"
          appearance={pathname === "/todos" ? "fill" : "outline"}
        >
          Todos
        </Button>
      </Link>
      <Link href="/products">
        <Button
          variant="primary"
          size="sm"
          appearance={pathname === "/products" ? "fill" : "outline"}
        >
          Products ({products.length || 111})
        </Button>
      </Link>
      <Link href="/carts" className="relative inline-flex items-center">
        <Button
          variant="primary"
          size="sm"
          appearance={pathname === "/carts" ? "fill" : "outline"}
        >
          Carts
        </Button>

        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
          {cartCount}
        </span>
      </Link>
      {isLoggedIn && (
        <Button
          variant="primary"
          size="sm"
          appearance="outline"
          onClick={logout}
          className="border-red-400 text-red-500 hover:bg-red-50"
        >
          Logout
        </Button>
      )}
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <CartProvider>
            <Header />
            <Navigation />
            <LoginModal />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
