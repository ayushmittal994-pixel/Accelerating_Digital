import Link from "next/link";

export default function Herosection() {
  return (
    <section className="max-w-5xl mx-auto md:pt-[180px] pb-[280px] py-28 text-center ">
      <h1 className="text-base text-[#1D252D] text-[64px] font-poppins-1 font-medium leading-[80px] ">
        ⚡ Accelerating Ideas into , Impactful Digital Experience
      </h1>
      <p className=" md:text-lg text-gray-600 mt-6 max-w-5xl mx-auto leading-relaxed">
        From Content to Commerce, Analytics to Automation — we help ambitious
        brands move faster, smarter, and stronger in the digital age.
      </p>
      <div className="flex justify-center items-center gap-4 mt-10">
        <Link href="/expertise">
          <button className="px-16 font-semibold rounded-3xl py-4 bg-black border-[4px] text-white border-[#e5e7eb] cursor-pointer">
            Explore
          </button>
        </Link>

        <Link href="/contact-us">
          <button className="  text-black font-semibold rounded-3xl px-14 py-4 bg-white border-[4px] border-[#e5e7eb] cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
