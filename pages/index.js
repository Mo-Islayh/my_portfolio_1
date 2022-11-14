import Title from "../components/title"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Resume from "../components/resume"
import PageContainer from "../components/PageContainer"

export default function Index() {
  return (
    <PageContainer>
      <Title />
      <Resume />
      <Skills />
      <Projects />
    </PageContainer>
  )
}
