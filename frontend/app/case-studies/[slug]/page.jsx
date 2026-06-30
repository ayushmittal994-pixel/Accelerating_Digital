"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "@/components/breadcrumb";

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/api/case-studies/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then((data) => {
        setCaseStudy(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;
  if (notFound)
    return (
      <p className="text-center mt-20 text-gray-500">Case study not found.</p>
    );

  return (
    <main>
      <Breadcrumb />

      <div className="max-w-6xl mx-auto md:mx-auto px-6 mt-6 text-center mb-20">
        <h1 className="text-[40px] font-medium text-[#1d252d] leading-tight">
          {caseStudy.title}
        </h1>

        {caseStudy.summary && (
          <p className="text-[18px] text-[#566470] mt-6">{caseStudy.summary}</p>
        )}

        <Image
          src={caseStudy.cover_image || "/about.jpg"}
          alt={caseStudy.title}
          width={600}
          height={300}
          className="w-full rounded-3xl mt-10"
        />

        <div
          className="prose  max-w-5xl mx-auto md:mx-auto mt-10 text-[#485661] text-left
          [&>h2]:text-[24px] [&>h2]:font-normal [&>h2]:text-[#1d252d] [&>h2]:mt-10 [&>h2]:mb-3
            [&>p]:mb-6 [&>p]:leading-relaxed"
          //   dangerouslySetInnerHTML tells React: "don't escape this — render it as real HTML."
          dangerouslySetInnerHTML={{ __html: caseStudy.body }}
        />
      </div>
    </main>
  );
}
