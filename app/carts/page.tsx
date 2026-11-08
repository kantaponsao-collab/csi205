"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function CartsPage() {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems
    .reduce((sum, item) => sum + Number(item.price), 0)
    .toFixed(2);

  return (
    <div className="mx-auto mt-4 max-w-5xl px-2">
      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-300 bg-white p-1 shadow-sm"
          >
            {/* Image container */}
            <div className="relative h-32 w-full overflow-hidden rounded bg-gray-100">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Price Tag (Top-right) */}
              <span className="absolute top-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white">
                ${typeof item.price === "number" ? item.price.toFixed(2) : item.price}
              </span>

              {/* Title overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-1 text-[11px] text-white truncate">
                {item.title}
              </div>
            </div>

            {/* Remove Button */}
            <div className="mt-1.5">
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-full rounded border border-red-400 py-1 text-center text-xs font-medium text-red-500 hover:bg-red-50 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer Badges */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <span className="rounded-full bg-yellow-500 px-4 py-1.5 text-xs font-bold text-white shadow">
          Count: {cartItems.length} Items
        </span>
        <span className="rounded-full bg-red-500 px-4 py-1.5 text-xs font-bold text-white shadow">
          Price: ${totalPrice}
        </span>
      </div>
    </div>
  );
}
