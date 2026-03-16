import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectLumina from "@/components/ProjectLumina";
import TechStack from "@/components/TechStack";
import ProjectVanguard from "@/components/ProjectVanguard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProjectLumina />
      <TechStack />
      <ProjectVanguard />
      <Footer />
    </main>
  );
}
