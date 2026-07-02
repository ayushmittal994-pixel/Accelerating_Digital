import { PiGreaterThan } from "react-icons/pi";
import Link from "next/link";
import SectionHeading from "@/components/sections/sectionheading";
import Image from "next/image";
import TestimonialCard from "@/components/sections/TestimonialCard";
import Cards from "@/components/cards";
import HowweworkReusable from "@/components/sections/HowweworkReusbale";
import Cta from "@/components/sections/cta";
import Breadcrumb from "@/components/breadcrumb";

const blocks = [
  {
    label: `✦ Our Mission`,
    title: "Empowering Digital Progress",
    text: "At Accelerating Digital, we live by one mantra: move fast, stay future-ready. We’re not just a consultancy — we’re your digital growth partner. Our team of strategists, engineers, and marketers work with a singular mission: accelerate transformation without the friction.",
    imageElement: (
      <Image
        src="/AD.png"
        alt="Empowering Digital Progress"
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

export default function About() {
  return (
    <main>
      <Breadcrumb />
      <div className="max-w-7xl mx-auto md:mx-auto   mt-14">
        <div>
          <SectionHeading
            label="About Us"
            title="Accelerating Digital is a digital consulting and technology solutions company focused on delivering modern, scalable, and data-driven digital experiences."
            titleClass="!text-[40px] !text-[#1d252d]"
            wrapperClass="!max-w-7xl mx-auto md:mx-auto"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto md:mx-auto flex items-center">
        <Image
          src="/about.jpg"
          height={600}
          width={1020}
          alt="about"
          className="mx-auto rounded-3xl mt-14"
        />
      </div>
      <div className="mx-auto bg-[#1D252D] py-6 flex justify-around my-10">
        <TestimonialCard
          quote="12 + "
          name="Years in Business"
          nameClass="text-[#e5e7eb] text-[16px] text-center !text-[#C3CCD2] "
          bgclass="!bg-[#1D252D] border-0 "
          quoteclass="text-[40px] text-white "
        />
        <TestimonialCard
          quote="150 +"
          name="Experts Onboard"
          nameClass="text-[#e5e7eb] text-[16px] !text-[#C3CCD2] "
          bgclass="!bg-[#1D252D] border-0 "
          quoteclass="text-[40px] text-white "
        />
        <TestimonialCard
          quote="300 +"
          name="Projects Accelerated Globally"
          nameClass="text-[#e5e7eb] text-[16px] !text-[#C3CCD2] "
          bgclass="!bg-[#1D252D] border-0 "
          quoteclass="text-[40px] text-white  "
        />
      </div>

      <div className="max-w-7xl mx-auto md:mx-auto">
        <SectionHeading
          label="Awards and Partnership"
          title="We collaborate with top-tier brands in the industry."
          titleClass="!text-[40px] !text-[#1d252d] leading-relaxed"
          wrapperClass="!max-w-7xl mx-auto md:mx-auto"
        />
      </div>
      <div className="mt-12 flex flex-row justify-around gap-5 ">
        <Cards
          items={[
            { icon: "/Adobe_Corporate_logo 1.svg", name: "Adobe" },
            { icon: "/Google.svg", name: "Google" },
            { icon: "/salesforce logo.svg", name: "salesforce" },
            { icon: "/algolia.png", name: "algolia" },
            { icon: "/mix-panel.png", name: "mix panel" },
            { icon: "/Jahia.png", name: "Jahia" },
          ]}
          imageSize={200}
          imageClass="w-auto h-auto p-4"
          single={true}
        />
      </div>
      <section className="max-w-7xl mx-auto md:mx-auto font-poppins py-20">
        <div className="max-w-7xl mx-auto md:mx-auto">
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
                showButton={false}
              />
            );
          })}
        </div>
      </section>
      <div className=" mx-auto py-20 font-poppins ">
        <SectionHeading
          label="Our Team"
          title="A team of passionate experts building impactful digital experiences."
          titleClass="text-[44px]"
        />
        <Cards
          vertical
          items={[
            {
              icon: "/people.png",
              title: "Ethan Carter Johnson",
              subtitle: "CEO, Founder",
            },
            {
              icon: "/people.png",
              title: "Sophie Mitchell",
              subtitle: "Co-Founder",
            },
            {
              icon: "/people.png",
              title: "Noah Benjamin Smith",
              subtitle: "Product Manager",
            },
            {
              icon: "/people.png",
              title: "Emma Johnson",
              subtitle: "Lead Software Developer",
            },
          ]}
        />
      </div>
      <Cta />
    </main>
  );
}
