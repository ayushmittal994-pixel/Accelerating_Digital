// components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";
import Button from "./button";
import WeatherWidet from "./weather";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about-us" },
  ];
  return (
    <div className="px-4 py-4 z-50 ">
      <header className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm">
        <nav className="px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logos.svg"
              alt="Accelerating Digital"
              width={170}
              height={44}
              priority
            />
          </Link>
          <ul className=" hidden md:flex items-center gap-2 text-[16px]">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "Poppins, sans-serif ",
                    }}
                    className={`px-4 py-2 rounded-lg  text-[#1D252D] transition-colors ${
                      active
                        ? "bg-gray-100 text-gray-900 font-medium"
                        : " hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button
            title="Contact Us"
            href="/contact-us"
            titleClass="px-8 py-3"
          />
          <button
            className="md:hidden text-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  className={`px-4 py-2 rounded-lg text-[#1D252D] transition-colors ${
                    active ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="bg-black text-white font-semibold text-sm px-6 py-3 rounded-xl text-center mt-2 hover:bg-gray-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
