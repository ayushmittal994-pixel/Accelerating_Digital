import SectionHeading from "./sectionheading";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Accelerating Digital helped us power up our eCommerce journey. Adobe Commerce + Salesforce integration = 25% more conversions in 6 months. Lightning fast results.",
    name: "Client",
    role: "eCommerce",
  },
  {
    quote:
      "We went from slow campaigns to real-time personalization. Their MarTech expertise doubled our engagement — and halved our execution time.",
    name: "Client",
    role: "Marketing",
  },
  {
    quote:
      "From concept to launch, they were true partners. The user experience they crafted significantly increased engagement on our platform.",
    name: "James Ortega",
    role: "Product Manager, EcoChain",
  },
  {
    quote:
      "Their Adobe expertise helped us unify content, design, and personalization across regions — something we struggled with for years before.",
    name: "Ravi Mehra",
    role: "VP of Technology, CartWise",
  },
  {
    quote:
      "The search & discovery experience they built transformed our on-site navigation. Bounce rates dropped and conversions went up — immediately noticeable.",
    name: "Lucia Fernández",
    role: "Head of Digital, NovaMart",
  },
  {
    quote:
      "Accelerating Digital gave our SaaS product a fresh, scalable digital experience. We've doubled our trial-to-subscription rate since launch.",
    name: "Ethan Blake",
    role: "Founder, LeanLegalTech",
  },
];

export default function Testimonialss() {
  return (
    <section className="max-w-6xl mx-auto md:mx-auto font-poppins  py-28 mb-10">
      <div className="mx-w-6xl mx-auto font-poppins">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          centre={true}
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mt-10">
        {testimonials.map((t, i) => {
          return (
            <TestimonialCard
              key={i}
              quote={t.quote}
              name={t.name}
              role={t.role}
            />
          );
        })}
      </div>
    </section>
  );
}
