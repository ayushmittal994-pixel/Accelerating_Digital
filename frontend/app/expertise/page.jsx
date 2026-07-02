import { PiGreaterThan } from "react-icons/pi";
import SectionHeading from "@/components/sections/sectionheading";

import Link from "next/link";
import ExpertiseFrame from "./ExpertiseFrame";
import Cta from "@/components/sections/cta";
import Breadcrumb from "@/components/breadcrumb";

export default function Expertise() {
  return (
    <main>
      <section
        className={`font-poppins py-34 bg-linear-to-b from-[#050709] to-[#2C3845] mx-auto  `}
        style={{
          marginTop: "-150px",
          paddingTop: "200px",
        }}
      >
        <SectionHeading
          label="Our Expertise"
          title="Solutions That Drive Growth"
          summary="We offer a full suite of digital services tailored to your needs, blending strategic insight with technical excellence to deliver meaningful business outcomes: "
          titleClass="!text-[64px] text-white "
          summaryClass="text-white !text-[16px]"
          badgeBgClass="bg-white"
          labelClass="text-[16px]"
        />
      </section>

      <Breadcrumb />

      <ExpertiseFrame />
      <Cta />
    </main>
  );
}
