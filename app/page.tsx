import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroSec from "@/components/heroSec";
import NavBar from "@/components/navBar";
import Projects from "@/components/projects";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSec />
      <Statistics />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
