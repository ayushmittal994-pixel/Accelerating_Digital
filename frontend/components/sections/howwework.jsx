import SectionHeading from "./sectionheading";
import HowweworkReusable from "./HowweworkReusbale";
import Image from "next/image";

const blocks = [
  {
    label: "Optimize",
    title: "Driving continuous improvement.",
    text: `Analytics + experimentation = continuous acceleration. We refine what works and evolve what doesn’t.`,
    items: [
      "A/B testing & behavioral analytics",

      "Performance tuning and UX enhancements",

      "Iterative feature releases & dashboard reporting",
    ],
    image: "/home2.svg",
    imageside: "left",
  },

  {
    label: "Innovate",
    title: "Shaping ideas into digital realities.",
    text: `Brainstorm. Strategize. Roadmap. We co-create bold ideas and align them with real business impact.`,
    items: [
      "Ideation workshops & stakeholder discovery",

      "Rapid prototyping & user journey mapping",

      "Digital product strategy & roadmap development",
    ],
    image: "/home 3.svg",
    imageside: "right",
  },

  {
    label: "Collaborate",
    title: "Working as an extension of your team.",
    text: `We become part of your team — working transparently, moving agile, and keeping results front and center.`,
    items: [
      "Regular sync-ups, reviews & shared documentation",

      "Embedded teams with delivery leads & engineers",

      "Agile sprints with clear deliverables and feedback loops",
    ],
    image: "/home4.svg",
    imageside: "left",
  },
];

export default function Howwework() {
  return (
    <section className=" mx-w-6xl mx-auto md:mx-auto py-28 ">
      <div className=" max-w-6xl mx-auto  ">
        <SectionHeading
          label="How We Work"
          title="Our approach simplifies digital execution through a structured, collaborative, and growth-focused process."
        />
        </div>

        <div className=" max-w-6xl  md:mx-auto flex flex-col gap-12 mt-14  ]">
          {blocks.map((block) => {
            return (
              <HowweworkReusable
                key={block.label}
                label={block.label}
                title={block.title}
                text={block.text}
                items={block.items}
                image={block.image}
                imageside={block.imageside}
              />
            );
          })}
        </div>
  
    </section>
  );
}
