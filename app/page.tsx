"use client";

import Container from "@/components/Container";
import Image from "next/image";


import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";

const Home: React.FC = () => {
  
  return (
    <div className="flex flex-col w-full relative">
        
        {/* <Banner /> */}

        <Hero />

        <Projects />
        
        {/* <section>
          skills
        </section>
        <section>
          projects
        </section>
        <section>
          testimonials
        </section>
        <section>
          contacts
        </section> */}
        {/* <section className="flex">
          <Container className="flex ">
            <h3>Tech Projects</h3>
            <div className="flex  gap-4 ">
              <div className="">
                test
              </div>
              <div className="">
                <div>

                </div>
              </div>
            </div>
          </Container>
        </section> */}
    </div>
  );
};

export default Home;