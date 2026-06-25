import Image from "next/image";
import HowweworkReusable from "../../components/sections/HowweworkReusbale";

const data = [
  {
    title: "Digital Experience (DX)",
    text: `At Accelerating Digital, we create high-impact digital experiences that are fast, intuitive, and built to convert. From responsive websites and mobile apps to headless CMS platforms, we design seamless user journeys tailored to your audience’s needs. Our team leverages the latest technologies like SPAs, PWAs, and modular frameworks such as React.js and AEM to deliver scalable solutions with minimal friction and maximum performance. We integrate real-time personalization, behavioral analytics, and accessibility standards to ensure every experience is not only engaging but also inclusive and compliant. Backed by ongoing optimization and UX testing, our digital solutions are crafted to drive measurable growth, improve engagement, and boost your brand’s online presence.`,
    items: [
      "Lightning-fast, mobile-optimized digital platforms that increase engagement and lower bounce rates.",

      "Scalable, modular architecture for easy content management and faster go-to-market.",

      "Personalized user experiences powered by real-time data and behavior insights.",
    ],
    imageElement: (
      <Image
        src="/exp1.svg"
        alt="Collaborate illustration"
        width={584}
        height={584}
        className="h-full w-full object-contain"
      />
    ),
    imageside: "left",
  },
  {
    title: "MarTech : Data-Driven Marketing at Scale",
    text: `We transform marketing into a data-driven powerhouse by integrating intelligent MarTech solutions that deliver the right message to the right audience at the right time. Whether you're building a new stack or optimizing an existing one, we tailor your marketing ecosystem to drive performance across every digital touchpoint. Our expertise spans implementation of tools like Adobe Analytics, GTM, Segment, and Datorama, allowing us to automate campaigns, personalize customer journeys, and turn raw data into actionable insights that boost ROI and scale impact.`,
    items: [
      "Custom-built MarTech ecosystems with automation, segmentation, and real-time personalization.",

      "Accurate analytics and testing frameworks that drive smarter, data-backed marketing decisions.",

      "Easy-to-use dashboards and training programs to empower your internal marketing teams.",
    ],

    imageElement: (
      <Image
        src="/exp2.svg"
        alt="Collaborate illustration"
        width={584}
        height={584}
        className="h-full w-full object-contain"
      />
    ),
    imageside: "right",
  },

  {
    title: "Commerce – Seamless Shopping, Scalable Growth",
    text: `We build modern commerce solutions that go beyond online transactions to create seamless, customer-first shopping experiences that convert and scale. From intuitive product discovery and dynamic pricing to optimized checkout flows and omnichannel integrations, we craft high-performance storefronts tailored to your business goals. Leveraging platforms like Shopify, Magento, Salesforce Commerce Cloud, and commercetools, we deliver flexible, secure, and scalable architectures that support personalized shopping journeys and drive measurable growth across every touchpoint.`,
    items: [
      "Conversion-focused commerce platforms with real-time personalization and loyalty features.",

      "End-to-end solutions covering catalog, checkout, fulfillment, and backend integrations.",

      "Omnichannel experiences that unify online and offline shopping for consistent brand engagement.",
    ],

    imageElement: (
      <Image
        src="/exp3.svg"
        alt="Collaborate illustration"
        width={584}
        height={584}
        className=" h-full w-full object-contain"
      />
    ),
    imageside: "left",
  },
  {
    title: "Search & Discovery – Findability that Drives Conversions",
    text: `We design smart, intuitive Search & Discovery systems that go far beyond basic search bars to enhance user experience and boost conversions. Whether you're managing an eCommerce store, media library, or content-heavy platform, we optimize every step of the discovery journey—from metadata structuring to semantic search and AI-driven recommendations. Using tools like Algolia, Nosto, and Dynamic Yield, we build fast, scalable, and personalized solutions that help users effortlessly find what they need—and what they didn’t know they were looking for.`,
    items: [
      "Intelligent, high-speed search with autocomplete, typo tolerance, and semantic matching.",

      "Personalized discovery experiences with AI-powered recommendations and trending content.",

      "Scalable solutions integrated with your CMS, app, or commerce engine across all devices and regions.",
    ],
    imageElement: (
      <Image
        src="/exp4.svg"
        alt="Collaborate illustration"
        width={584}
        height={584}
        className="h-full w-full object-contain"
      />
    ),
    imageside: "right",
  },
  {
    title: "Adobe Specialization – Powering Experience-Driven Growth",
    text: `We help brands unlock the full potential of Adobe Experience Cloud by delivering fast, flexible, and scalable implementations that power personalized customer journeys. From AEM Sites and Assets to Adobe Target, Campaign, and Analytics, we specialize in connecting the entire Adobe ecosystem to drive real-time engagement, seamless content delivery, and measurable business growth. Whether you're building global content hubs, running omnichannel campaigns, or adopting headless architecture, we ensure your Adobe tools work smarter, faster, and in sync with your digital goals..`,
    items: [
      "End-to-end Adobe Experience Cloud implementation including AEM, Target, Campaign, and Analytics.",

      "Real-time personalization, A/B testing, and omnichannel campaign orchestration across web and mobile.",

      "Scalable, modular, and headless-ready architecture with governance and training for in-house teams.",
    ],

    imageElement: (
      <Image
        src="/exp5.svg"
        alt="Collaborate illustration"
        width={584}
        height={584}
        className="h-full w-full object-contain"
      />
    ),
    imageside: "left",
  },
  {
    title:
      "Salesforce Specialization – Build Smarter, Sell Faster, Serve Better",
    text: `We design Salesforce solutions that streamline operations, personalize engagement, and accelerate business growth across every customer touchpoint. From Sales Cloud and Service Cloud to Marketing Cloud, Pardot, and Experience Cloud, we architect scalable ecosystems tailored to your workflows, goals, and future roadmap. Our expertise covers lead automation, campaign personalization, custom portals, and real-time analytics using tools like Datorama—ensuring your Salesforce investment delivers measurable results and long-term value.`,
    items: [
      "End-to-end Salesforce implementation across sales, marketing, service, and experience layers.",

      "Automated campaigns, personalized journeys, and integrated analytics for smarter decision-making.",

      "Scalable solutions with training, governance, and high user adoption across teams.",
    ],
    imageElement: (
      <Image
        src="/exp6.svg"
        alt="Collaborate illustration"
        width={584}
        height={584}
        className="h-full w-full object-contain"
      />
    ),
    imageside: "right",
    contentbg: "p-5",
  },
];
export default function ExpertiseFrame() {
  return (
    <div className="max-w-7xl mx-auto md:mx-auto py-30">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 items-center ">
        {data.map((datas) => {
          return (
            <HowweworkReusable
              key={datas.title}
              title={datas.title}
              text={datas.text}
              items={datas.items}
              imageElement={datas.imageElement}
              imageside={datas.imageside}
              centerContent={true}
              contentbg={datas.contentbg}
            />
          );
        })}
      </div>
    </div>
  );
}
