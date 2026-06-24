import SectionHeading from "./sectionheading";
import Image from "next/image";
export default function Howwework() {
  return (
    <section className="max-w-6xl mx-auto md:mx-auto py-20 mb-10 ">
      <div className="max-w-6xl mx-auto px-6 text-center leading-relaxed">
        <SectionHeading
          label="How We Work"
          title="Our approach simplifies digital execution through a  structured, collaborative, and growth-focused process."
          labelClass=" text-[#1D252D]"
          titleClass="text-[44px] text-[#1D252D] font-poppins gap-4font-normal "
        />
      </div>
      <div className="max-w-6xl bg-[#f2f6f9] mx-auto mt-10 rounded-2xl  grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="text-black">x,a wmkxmlxkd</div>
        <div className="text-black ml-auto w-fit p-4">
          <Image src="/home1.svg" alt="Home" width={400} height={400} />
        </div>
      </div>

      <div className="max-w-6xl bg-[#f2f6f9] mx-auto mt-10 rounded-2xl  grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="text-black mr-auto w-fit p-5">
          <Image src="/home2.svg" alt="Home" width={400} height={400} />
        </div>
        <div className="text-black">x,a wmkxmlxkd</div>
      </div>

      <div className="max-w-6xl bg-[#f2f6f9] mx-auto mt-10 rounded-2xl  grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="text-black">x,a wmkxmlxkd</div>
        <div className="text-black ml-auto w-fit p-4">
          <Image src="/home 3.svg" alt="Home" width={400} height={400} />
        </div>
      </div>

      <div className="max-w-6xl bg-[#f2f6f9] mx-auto mt-10 rounded-2xl  grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="text-black mr-auto w-fit p-4">
          <Image src="/home4.svg" alt="Home" width={400} height={400} />
        </div>
        <div className="text-black">x,a wmkxmlxkd</div>
      </div>
    </section>
  );
}
