"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import WalletConnectButton from "./WalletButton";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navitems = [
    { label: "Home", link: "/" },
    { label: "Explore", link: "/explore" },
    { label: "More", link: "/more" },
  ];

  return (
    <div>
      <header className="fixed mx-auto w-full top-0 z-10 border-b border-gray-100 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="https://hey.xyz/logo.png"
                alt="Hey Mascot"
                width={40}
                height={40}
              />
            </Link>
            <div className="flex gap-10 items-center justify-center">
              <div className="relative">
                {/* <Search className=" h-4 w-4 absolute  -translate-y-1/2 text-gray-400" /> */}
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-full border hidden md:block border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-pink-300 focus:ring-1 focus:ring-pink-300"
                />
              </div>
              <div className="relative hidden sm:flex gap-5 items-center justify-between">
                {navitems.map((nav) => (
                  <Link
                    key={nav.label}
                    href={nav.link}
                    className={`rounded-4xl px-4 py-2 text-black ${
                      pathname === nav.link ? "bg-gray-400" : ""
                    }`}
                  >
                    {nav.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <nav className="flex items-center gap-4">
            <WalletConnectButton />
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t mt-16 absolute w-full  border-gray-100">
          <div className="flex flex-col items-center">
            {navitems.map((nav) => (
              <Link
                key={nav.label}
                href={nav.link}
                className={`block px-4 py-2 text-black ${
                  pathname === nav.link ? "bg-gray-400" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on item click
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
