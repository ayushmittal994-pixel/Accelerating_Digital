"use client";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import SectionHeading from "@/components/sections/sectionheading";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CaseStudiesPage() {
  const [caseStudies, SetCaseStudies] = useState([]);
  const [loading, SetLoading] = useState(false);

  const url = "http://localhost:4000/api/case-studies";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetCaseStudies(data);
        SetLoading(false);
      })
      .catch(() => SetLoading(false));
  }, []);

  return (
    <main>
      <section
        className="font-poppins py-34 bg-linear-to-b from-[#050709] to-[#2C3845] mb-10"
        style={{ marginTop: "-150px", paddingTop: "200px" }}
      >
        <SectionHeading
          label="Case Studies"
          title="Real Results, Real Impact"
          summary="Explore how we've helped leading brands solve complex challenges, accelerate growth, and deliver digital excellence across industries."
          titleClass="!text-[64px] text-white"
          summaryClass="text-white !text-[16px] block !pt-5"
          badgeBgClass="bg-white"
          labelClass="text-[16px]"
        />
      </section>

      <Breadcrumb />

      <div className="max-w-7xl mx-auto md:mx-auto mb-20">
        {loading ? (
          <p className="text-[#12252d] text-[32px]">Loading...</p>
        ) : caseStudies.length === 0 ? (
          <h3>No Case Studies Found!!</h3>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudies.map((cs) => (
              <div
                className="border rounded-3xl p-6 flex flex-col inline"
                key={cs.id}
              >
                <Image
                  src={cs.cover_image || "/about.jpg"}
                  alt={cs.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <h3 className="text-[18px] font-poppins text-[#1d252d] mt-6">
                  {cs.title}
                </h3>
                <Button href={`/case-studies/${cs.slug}`} title="Read More" />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
