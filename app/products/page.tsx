"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
  const { products, addToCart } = useCart();

  return (
    <div className="mx-auto mt-4 max-w-5xl px-2">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 bg-white p-1 shadow-sm"
          >
            {/* Image container with price pill and title overlay */}
            <div className="relative h-32 w-full overflow-hidden rounded bg-gray-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-cover"
              />

              {/* Price Tag (Top-right) */}
              <span className="absolute top-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white">
                ${typeof product.price === "number" ? product.price.toFixed(2) : product.price}
              </span>

              {/* Title overlay at the bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-1 text-[11px] text-white truncate">
                {product.title}
              </div>
            </div>

            {/* Add to Carts button */}
            <div className="mt-1.5">
              <button
                onClick={() => addToCart(product)}
                className="w-full rounded border border-green-500 py-1 text-center text-xs font-medium text-green-600 hover:bg-green-50 transition"
              >
                Add to Carts
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
