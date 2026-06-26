import Cards from "@/components/cards";
import Image from "next/image";

const frontendTechs = [
  { name: "React.js", icon: "/react.svg" },
  { name: "Next.js", icon: "/next.js.png" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
];

const cloudDevops = [
  { name: "AWS", icon: "/aws.svg" },
  { name: "Azure", icon: "/azure.svg" },
  { name: "Graph QL", icon: "/graph.svg" },
  { name: "REST APIs", icon: "/api.png" },
];

const DigitalPlatforms = [
  { name: "Adobe Experience Manager (AEM)", icon: "/adobe.svg" },
  { name: "Jahia", icon: "/jahia.svg" },
  { name: "Strapi", icon: "/strapi.svg" },
];

const CommercePlatforms = [
  { name: "Adobe Commerce (Magento)", icon: "adobecommerce.svg" },
  { name: "Shopify", icon: "/shopify.svg" },
  { name: "BigCommerce", icon: "/bigcommerce.svg" },
];

const MarTechAnalytics = [
  { name: "Adobe Analytics", icon: "/adobe (2).svg" },
  { name: "Google Analytics", icon: "/google-.png" },
  { name: "Salesforce Marketing Cloud", icon: "/salesforce.png" },
  { name: "Adobe Journey Optimizer", icon: "/adobe (2).svg" },
  { name: "Adobe Target", icon: "/adobetarget.svg" },
  { name: "Adobe Compaign", icon: "/adobe (2).svg" },
];

const CRM_CX = [{ name: "Salesforce Core", icon: "/salesforce.svg" }];
export default function TechStackComp() {
  return (
    <div className="max-w-7xl mx:auto  md:mx-auto mb-20">
      <div className="max-w-7xl mx:auto  md:mx-auto gap-6">
        <Cards title="Front-end Frameworks" items={frontendTechs} />
        <Cards title="Cloud & DevOps" items={cloudDevops} />
        <Cards
          title="Digital Experience Platforms (DXPs)"
          items={DigitalPlatforms}
        />
        <Cards title="Commerce Platforms" items={CommercePlatforms} />
        <Cards title="MarTech & Analytics" items={MarTechAnalytics} />
        <Cards title="CRM & CX" items={CRM_CX} />
      </div>
    </div>
  );
}
