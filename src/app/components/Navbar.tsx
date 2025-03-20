
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "@/app/client";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import thirdwebIcon from "@public/thirdweb.svg";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const account = useActiveAccount();

  const navLinks = [

    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "/products",
      dropdown: [
        { name: "Lending", path: "/lending", badge: "New" },
        { name: "Borrowing", path: "/borrowing" },
        { name: "Staking", path: "/staking" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Resources", path: "/resources" },
    
  ];

  return (
    <nav className="w-full border-b border-zinc-800 bg-gray-900/95 backdrop-blur-md fixed top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-14">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-300 hover:text-purple-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={thirdwebIcon}
              alt="CryptoLend Logo"
              width={50}
              height={50}
              className="hover:scale-105 transition-transform"
            />
            <span className="text-2xl font-bold text-white hidden md:block">
              CryptoLend
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative group"
              onMouseEnter={() => link.dropdown && setIsProductsOpen(true)}
              onMouseLeave={() => link.dropdown && setIsProductsOpen(false)}
            >
              <Link
                href={link.path}
                className={`text-lg font-medium px-4 py-3 ${
                  pathname === link.path
                    ? "text-purple-400"
                    : "text-zinc-300 hover:text-purple-400"
                } transition-colors`}
              >
                {link.name}
                {link.dropdown && (
                  <>
                    <ChevronDownIcon className="h-5 w-5 inline-block ml-2" />
                    {link.dropdown.some((item) => item.badge) && (
                      <span className="absolute -top-2 right-0 bg-red-500 text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </>
                )}
              </Link>

              {link.dropdown && isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-zinc-700">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-zinc-300">{item.name}</span>
                      {item.badge && (
                        <span className="bg-purple-500 text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          {/* Connect Button */}
          <div className="bg-purple-600 hover:bg-purple-700 transition-colors rounded-xl shadow-sm">
            <ConnectButton
              client={client}
              appMetadata={{
                name: "CryptoLend",
                url: "https://crypto-lend.com",
              }}
              theme="dark"
              style={{ padding: "1rem 2rem", fontSize: "1rem" }}
            />
          </div>

          {/* Dashboard Button (Conditionally Rendered) */}
          {account && (
            <Link
              href="/dashboard"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors text-lg ml-4"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/95 z-50 pt-20">
            <div className="container mx-auto px-4">
              {navLinks.map((link) => (
                <div key={link.path} className="border-b border-zinc-800">
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-4 text-xl ${
                      pathname === link.path
                        ? "text-purple-400"
                        : "text-zinc-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown?.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 pl-8 text-zinc-400 hover:text-purple-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}