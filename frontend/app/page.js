import Services from "../components/sections/services";
import Herosection from "../components/sections/herosection";
import About from "../components/sections/About";
import Howwework from "../components/sections/howwework";
import TechStack from "../components/sections/techStack";
import Testimonialss from "../components/sections/testimonialss";
import Faqs from "../components/sections/faqs";
import Cta from "../components/sections/cta";

export default function Home() {
  return (
    <>
      <main>
        <Herosection />
        <Services />
        <About />
        <Howwework />
        <TechStack />
        <Testimonialss />
        <Faqs />
        <Cta />
      </main>
    </>
  );
}
