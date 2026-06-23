// components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about-us" },
  ];
  return (
    <div className="px-4 py-4">
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
          <ul className="flex items-center gap-2 text-[16px]">
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
          <Link
            href="/contact-us"
            className="bg-black text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gray-600 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </header>
    </div>
  );
}
