import Projects from "@/components/projects";
import Resume from "@/components/resume";
import SkillsPage from "@/components/skills";
import Header from "@/components/header";

function Home() {
  return (
    <>
      <Header />
      <Resume />
      <SkillsPage />
      <Projects />
    </>
  );
}

export default Home;
