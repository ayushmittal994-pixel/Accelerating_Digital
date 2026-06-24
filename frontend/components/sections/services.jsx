import Image from "next/image";
import SectionHeading from "./sectionheading";
const services = [
  {
    title: "Digital Consulting",
    text: "Don't just transform — accelerate. We craft clear roadmaps, evaluate the right platforms, and unlock strategies that put you ahead of the curve.",
    images: "/consulting.svg",
    gradient: "bg-gradient-to-b from-[#F2F9FF] to-white border-[#D6EDFF]",

  },
  {
    title: "Platform Implementation",
    text: "From AEM to Salesforce, Strapi to Jahia — we implement enterprise platforms with speed and precision. Scalable, secure, and ready for tomorrow.",
    images: "/platform.svg",
    gradient: "bg-gradient-to-b from-[#FFF2FA] to-white border-[#FFE3F5]",
  },
  {
    title: "Custom Engineering",
    text: "Your business is unique. So why settle for cookie-cutter solutions? We design tailor-made apps, headless setups, and integrations that move as fast as you do.",
    images: "/custom.svg",
    gradient: "bg-gradient-to-b from-[#F2FFF6] to-white border-[#D9FFE3]",
  },
  {
    title: "MarTech Enablement",
    text: "Turn data into decisions — instantly. With Adobe Analytics, Target, Campaign, and Salesforce Marketing Cloud, we supercharge your marketing to deliver experiences that truly stick.",
    images: "/martech.svg",
    gradient: "bg-gradient-to-b from-[#FFF5F5] to-white border-[#FFE5E5]",
  },
  {
    title: "Commerce Solutions",
    text: "Because shopping shouldn't be slow. From Adobe Commerce to Shopify and BigCommerce, we build fast, frictionless buying experiences that convert.",
    images: "/commerce.svg",
    gradient: "bg-gradient-to-b from-[#FFFDF0] to-white border-[#FFFAC2]",
  },
  {
    title: "Managed Services",
    text: "Relax, we've got your back. 24/7 support, upgrades, and optimization — so your platforms keep accelerating while you focus on growth.",
    images: "/managed.svg",
    gradient: "bg-gradient-to-b from-[#F5F5FF] to-white border-[#E6E6FF]",
  },
];

function ServiceCard({ title, text, images, gradient }) {
  return (
    <div
      className={`bg-linear-to-br ${gradient} border-4 border-slate-100 shadow-lg  bg-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow h-[412px] flex flex-col`}
    >
      <div className="w-12 h-12  bg-white flex items-center  rounded-2xl justify-center text-[#1D252D] text-xl mb-4">
        <Image src={images} alt={title} width={44} height={44} />
      </div>

      <div className="mt-auto">
        <h3 className="text-[28px] font-normal text-[#1D252D]">{title}</h3>
        <p className="text-[16px] text-gray-600 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <SectionHeading
        label="Our Services"
        title="We offer a full suite of digital services tailored to your needs"
      />
      <div className="  grid grid-cols-1  md:grid-cols-3 px-8 py-12 gap-6  mt-10">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            title={s.title}
            text={s.text}
            images={s.images}
            gradient={s.gradient}
          />
        ))}
      </div>
    </section>
  );
}
