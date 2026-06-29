import { PiGreaterThan } from "react-icons/pi";
import SectionHeading from "@/components/sections/sectionheading";
import Link from "next/link";
import Form from "./form";

export default function Contact() {
  return (
    <main>
      <section
        className={`font-poppins py-34 bg-linear-to-b from-[#050709] to-[#2C3845] mb-20 `}
        style={{
          marginTop: "-150px",
          paddingTop: "200px",
        }}
      >
        <SectionHeading
          label="Contact Us"
          title="Let’s Talk"
          summary="Have a project in mind or just exploring ideas? We’re here to help you take the next step in your digital journey."
          titleClass="!text-[64px] text-white "
          summaryClass="text-white !text-[16px] block !pt-5"
          badgeBgClass="bg-white"
          labelClass="text-[16px]"
        ></SectionHeading>
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
      <Form />
    </main>
  );
}
