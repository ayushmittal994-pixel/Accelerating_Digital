import Link from "next/link";
import SectionHeading from "../sections/sectionheading";
import Image from "next/image";

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto md:mx-auto font-poppins  py-28 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex flex-col justify-center ">
        <div className="max-w-4xl  px-6">
          <SectionHeading
            label="Our Tech Stack"
            title="Key Technologies & Platforms"
            summary="We work with leading platforms and technologies that empower digital transformation, accelerate delivery, and drive measurable business results."
            center={false}
            titleClass="font-poppins"
            summaryClass="text-[16px] "
          />
        </div>
        <Link href="/tech-stack">
          <button className="bg-black text-white py-4 px-8 rounded-2xl m-4 mt-8 font-semibold cursor-pointer">
            {" "}
            Explore Tech Stack
          </button>
        </Link>
      </div>

      <div>
        <Image src="/home5.svg" alt="Tech Stack" height={500} width={500} />
      </div>
    </section>
  );
}
