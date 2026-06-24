// components/Footer.jsx
"use client";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhone } from "react-icons/md";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Expertise", href: "/expertise" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <footer className="bg-[#1d242c] p-10 w-full font-sans">
      <div className=" max-w-6xl mx-auto">
        <div className=" flex flex-col md:flex-row  justify-between gap-10 pt-12  pb-5 border-b border-gray-600">
          <div className=" flex flex-col gap-5 max-w-xs">
            <Link href="/">
              <Image
                src="/Logos.svg"
                alt="logo"
                width={170}
                height={44}
                priority
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-[14px] font-poppins text-[#E1E4E8]">
              Driving digital growth through strategy, design, and technology.
            </p>

            <div className="flex items-center gap-3 mt-10">
              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <FaLinkedin />
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:pl-12">
            <h3 className="text-white font-semibold font-poppins  text-[16px]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 font-poppins text-[14px] ">
              {links.map((link) => {
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[#E1E4E8]  hover:text-gray-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:pl-12">
            <h3 className="text-white font-semibold text-[14px]">
              Get in Touch
            </h3>
            <li className="flex items-center font-poppins  gap-3">
              <IoIosMail className="h-6 w-6" />
              <a
                href="mailto:info@accelerating.digital"
                className="text-[14px] text-[#E1E4E8]  hover:text-gray-400 transition-colors"
              >
                info@accelerating.digital
              </a>
            </li>
            <li className="flex items-center font-poppins font-poppins  gap-3">
              <MdOutlinePhone className="h-6 w-6" />
              <a
                href="tel:+917982740028"
                className="text-[#E1E4E8]  hover:text-gray-400 transition-colors text-[14px]"
              >
                +91-798-274-0028
              </a>
            </li>
            <li className="flex items-center gap-3 font-poppins text-[#E1E4E8]  hover:text-gray-400 text-[14px]">
              <IoLocationOutline className="h-6 w-6" />
              US, UAE, India | Serving Clients Worldwide
            </li>
          </div>
        </div>
        <p className="text-center text-xs font-poppins text-[14px] pb-10 text-gray-500 pt-6">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
