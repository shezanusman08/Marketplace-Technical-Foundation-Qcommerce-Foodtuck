"use client";

import { ShoppingCart, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search



  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-orange-500">
          Food<span className="text-white">tuck</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {[
            { label: "Home", path: "/" },
            { label: "Menu", path: "/menu" },
            { label: "Blog", path: "/blog" },
            { label: "Team", path: "/team" },
            { label: "About", path: "/about" },
            { label: "Shop", path: "/shop" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="hover:text-orange-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search & Cart Icons */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border border-orange-500 text-white px-4 py-1 rounded-full focus:outline-none"
          />
          <button >
            <span className="text-orange-500 text-lg">
              <Search />
            </span>
          </button>
          <button>
            <Link href="/cart" className="text-orange-500 text-lg">
              <ShoppingCart />
            </Link>
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden text-orange-500 text-2xl">
              <FiMenu />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white p-4">
            <nav className="flex flex-col gap-4">
              {[
                { label: "Home", path: "/" },
                { label: "Menu", path: "/menu" },
                { label: "Blog", path: "/blog" },
                { label: "Team", path: "/team" },
                { label: "About", path: "/about" },
                { label: "Shop", path: "/shop" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="hover:text-orange-500"
                  onClick={() => setOpen(false)} // Close sidebar on click
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
