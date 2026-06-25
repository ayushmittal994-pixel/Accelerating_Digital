import SectionHeading from "./sectionheading";

export default function About() {
  return (
    <section
      className={`bg-linear-to-b from-[#050709] to-[#2C3845] py-20 max-w-6xl mx-auto md:mx-auto rounded-4xl mb-30`}
    >
      <div className="max-w-6xl mx-auto md:mx-auto px-6 text-center">
        <SectionHeading
          label="A little about us"
          title="Who we are?"
          labelClass="bg-white"
          titleClass="text-white"
          badgeBgClass="bg-white"
        />
        <p className=" text-[25px] leading-relaxed text-white mx-auto max-w-3xl mt-4 font-poppins">
          We're a team of{" "}
          <span className="italic font-semibold">
            digital experts, engineers,
          </span>{" "}
          and strategists helping companies accelerate their digital journeys.
          With over 5 years of experience, 200+ professionals, and 85+
          successful projects, we specialize in delivering{" "}
          <span className="italic font-semibold">
            {" "}
            innovative, high-performance digital solutions
          </span>{" "}
          that create real business impact.
        </p>
      </div>
    </section>
  );
}
