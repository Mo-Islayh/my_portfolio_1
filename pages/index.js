import Header from "../components/header"
import About from "../components/about"
import Projects from "../components/projects"
import Footer from "../components/footer"
import Skills from "../components/skills"

const Container = ({ children }) => {
  return (
    <div className=" text-slate-300 flex flex-col justify-center w-full gap-16">
      {children}
    </div>
  )
}
const Section = ({ children }) => {
  return <section className="mx-4 sm:mx-20">{children}</section>
}

export default function Index() {
  return (
    <div className="flex justify-center">
      <div className="container ">
        <Container>
          <Section>
            <Header />
          </Section>
          <Section>
            <Skills />
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section>
            <About />
          </Section>
          <Section>
            <Footer />
          </Section>
        </Container>
      </div>
    </div>
  )
}
