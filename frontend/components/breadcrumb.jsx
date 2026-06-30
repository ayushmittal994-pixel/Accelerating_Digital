"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiGreaterThan } from "react-icons/pi";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  return (
    <div className="max-w-7xl mx-auto py-8 px-6 flex items-center">
      <Link href="/" className="text-[#137cc1] text-[16px]">
        Home
      </Link>

      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const label = segment.replace(/-/g, " ");
        const isLast = index === segments.length - 1;

        return (
          <span key={href} className="flex items-center">
            <span className="text-black px-2">
              <PiGreaterThan />
            </span>
            {isLast ? (
              <span className="text-[#566470] font-poppins capitalize">
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="text-[#137cc1] font-poppins capitalize text-[16px]"
              >
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
