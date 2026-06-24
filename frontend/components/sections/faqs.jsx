"use client";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import SectionHeading from "./sectionheading";

const faqs = [
  {
    q: "Why 'Accelerating Digital'?",
    a: "Because speed matters. We focus on reducing time-to-market without compromising quality.",
  },
  {
    q: "Can you handle global rollouts?",
    a: "Absolutely. Our distributed teams support enterprises across geographies and industries.",
  },
  {
    q: "What if we already have platforms in place?",
    a: "Even better. We specialize in integrating, optimizing, and future-proofing your existing ecosystem.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Our managed services are designed to keep you running fast — and ahead.",
  },
];

export default function Faqs() {
  const [openIndex, SetOpenIndex] = useState(null);

  function toggle(index) {
    SetOpenIndex(openIndex === index ? null : index);
  }
  return (
    <section className="max-w-6xl mx-auto md:mx-auto py-28 font-poppins">
      <div className="max-w-6xl mx-auto md:mx-auto">
        <SectionHeading label="FAQs" title="Your Questions, Answered." />
      </div>
      <div className="flex flex-col gap-4 mt-12">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-[#D6EDFF] bg-[#F2F9FF]/30"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-[#1D252D] hover:bg-gray-50/50 transition-colors"
              >
                <span className="text-[16px]">{faq.q}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 text-gray-500 ${
                    isOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                  size={14}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 text-[15px] text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
