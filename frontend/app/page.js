import Services from "../components/sections/services";
import Herosection from "../components/sections/herosection";
import About from "../components/sections/About";
import Howwework from "@/components/sections/howwework";
import TechStack from "@/components/sections/techStack";

export default function Home() {
  return (
    <>
      <main>
        <Herosection />
        <Services />
        <About />
        <Howwework />
        <TechStack />
      </main>
    </>
  );
}
