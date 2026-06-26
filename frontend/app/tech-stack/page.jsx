import { PiGreaterThan } from "react-icons/pi";
import SectionHeading from "@/components/sections/sectionheading";
import Link from "next/link";
import TechStackComp from "./tech-stackcomp";
import Cta from "@/components/sections/cta";

const items = [
  {
    title: "Front-end Frameworks",
  },
];

export default function TechStack() {
  return (
    <main>
      <section
        className={`font-poppins py-34 bg-linear-to-b from-[#050709] to-[#2C3845]  `}
        style={{
          marginTop: "-150px",
          paddingTop: "200px",
        }}
      >
        <SectionHeading
          label="Our Tech Stack"
          title="Our Technology Ecosystem"
          summary="A powerful stack of modern tools, platforms, and frameworks that fuel performance, scalability, and innovation across every solution we deliver. "
          titleClass="!text-[64px] text-white "
          summaryClass="text-white !text-[16px] block !pt-5"
          badgeBgClass="bg-white"
          labelClass="text-[16px]"
        />
      </section>
      <div className=" max-w-7xl mx-auto py-8 flex items-center">
        <Link href="/" className="text-[#137cc1] text-[16px]">
          Home
        </Link>
        <p className="text-black pl-2">
          <PiGreaterThan />
        </p>
        <p className="text-black pl-2 font-normal ">Tech Stack</p>
      </div>
      <TechStackComp />
      <Cta />
    </main>
  );
}
