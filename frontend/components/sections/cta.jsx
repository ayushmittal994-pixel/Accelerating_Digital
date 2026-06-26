import Link from "next/link";
import Button from "../button";

export default function Cta() {
  return (
    <section className="max-w-6xl mx-auto md:mx-auto font-poppins py-28">
      <div
        className="max-w-6xl mx-auto md:mx-auto text-center flex flex-col items-center justify-center rounded-3xl overflow-hidden relative"
        style={{
          background:
            "radial-gradient(circle at center, #3a4250 0%, #2a303a 35%, #1a1f27 70%, #0d1015 100%)",
        }}
      >
        <h3 className="text-[40px] text-white mt-12 p-4 relative font-semibold ">
          Ready to transform your digital journey?
        </h3>
        <p className="text-[20px] m-auto px-4 py-4 text-white">
          Let's connect and make it happen.
        </p>

        <Button
          href="/contact-us"
          title="Contact Us"
          titleClass="px-12 py-4 mb-20 mt-10"
        />
      </div>
    </section>
  );
}
