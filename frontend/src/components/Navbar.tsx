"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon

export default function Navbar() {
  const { cart } = useCart();

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="/store" className="hover:text-gray-300">Store</Link>
        <Link href="/account" className="hover:text-gray-300">My Account</Link>
      </div>

      {/* Cart Icon with Counter */}
      <Link href="/cart" className="relative hover:text-gray-300 flex items-center">
        <FaShoppingCart className="text-2xl" /> {/* Shopping cart icon */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
}