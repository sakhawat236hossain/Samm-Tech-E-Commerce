"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Cart (0)", href: "/cart" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-zinc-800/50 w-full sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 relative ${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }`}
              >
                {link.label}
                {/* Active indicator */}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 absolute ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-zinc-800">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
