import Link from "next/link";
import Button from "../button";

export default function Herosection() {
  return (
    <section className="max-w-5xl mx-auto md:pt-[180px] pb-[280px] py-28 text-center ">
      <h1 className="text-base text-[#1D252D] text-[64px] font-poppins font-medium leading-[80px] ">
        ⚡ Accelerating Ideas into , Impactful Digital Experience
      </h1>
      <p className=" md:text-lg text-gray-600 mt-6 max-w-5xl mx-auto leading-relaxed">
        From Content to Commerce, Analytics to Automation — we help ambitious
        brands move faster, smarter, and stronger in the digital age.
      </p>
      <div className="flex justify-center items-center gap-4 mt-10">
        <Button
          title="Explore"
          href="/expertise"
          titleClass="px-16 py-4 bg-white !text-black"
        />
        <Button
          title="Contact Us"
          href="/contact-us"
          titleClass="px-12 py-4"
        />
      </div>
    </section>
  );
}
