import Link from "next/link";
import SectionHeading from "../sections/sectionheading";
import Image from "next/image";
import HowweworkReusable from "./HowweworkReusbale";
import { FaAsterisk } from "react-icons/fa";

const blocks = [
  {
    label: `✦ Our Tech Stack`,
    title: "Key Technologies & Platforms",
    text: "We work with leading platforms and technologies that empower digital transformation, accelerate delivery, and drive measurable business results.",
    imageElement: (
      <Image
        src="/Home5.svg"
        alt="Key Technologies & Platforms"
        width={584}
        height={584}
        className="h-full w-full object-contain"
      />
    ),
    imageside: "right",
    bgcontent: "!bg-white",
    labelclass: "!px-0 border-1 !px-4 !py-1",
    titleclass: "text-[44px] font-poppins",
    textclass: "text-[16px]",
  },
];
export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto md:mx-auto font-poppins  py-28  gap-5 ">
      <div className="max-w-7xl mx:auto md:mx-auto px-6">
        {blocks.map((block) => {
          return (
            <HowweworkReusable
              key={block.label}
              label={block.label}
              title={block.title}
              text={block.text}
              imageElement={block.imageElement}
              bgcontent={block.bgcontent}
              labelclass={block.labelclass}
              titleclass={block.titleclass}
              textclass={block.textclass}
            />
          );
        })}
      </div>
    </section>
  );
}
