import React from "react";
import Nav from "./nav";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className=" text-slate-300 flex flex-col justify-center w-full gap-14">
      {children}
    </div>
  );
};
const Section = ({ children }: Props) => {
  return (
    <section className="px-4 sm:px-14 flex flex-col gap-14 justify-center w-full ">
      {children}
    </section>
  );
};

const PageContainer = ({ children }: Props) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="container ">
        <Container>
          <Section>
            <Nav />
            {children}
          </Section>
        </Container>
      </div>
    </div>
  );
};

export default PageContainer;
