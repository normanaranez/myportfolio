"use client";

import Container from "@/components/Container";
import Image from "next/image";



import Banner from "@/components/Banner";

const Home: React.FC = () => {
  
  return (
    <div className="flex flex-col w-full relative">
        
        <Banner />

        {/* <section className="flex">
          <Container className="flex ">
            <h3>Tech Stack</h3>
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