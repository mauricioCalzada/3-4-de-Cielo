import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/store">Store</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/account">My Account</Link></li>
      </ul>
    </nav>
  );
}