import Image from "next/image";
import SectionHeading from "./sectionheading";
import ServiceCard from "./servicecard";
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

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <SectionHeading
        label="Our Services"
        title="We offer a full suite of digital services tailored to your needs"
      />
      <div className="  grid grid-cols-1 md:grid-cols-3 px-8 py-12 gap-6 mt-10">
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
