"use client"

import Container from "../Container";
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { BiLogoGraphql, BiLogoReact } from 'react-icons/bi';
import { SiApollographql, SiExpress, SiLaravel, SiPrisma } from 'react-icons/si';

const Stack: React.FC = () => {
    return (
        <section className="flex py-[50px]">
            <Container className="text-center">
                <h3>Tech that i a m confortable to build</h3>
                <div>
                <div>
                    <h3 className="font-bold pb-10">Stack</h3>
                    <div className="flex gap-4 items-center flex-wrap justify-center">
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <TbBrandNextjs />
                      </div>
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <BiLogoReact />
                      </div>
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <TbBrandTypescript />
                      </div>
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <BiLogoGraphql />
                      </div>
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <SiExpress />
                      </div>
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <SiPrisma />
                      </div>
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <SiApollographql />
                      </div>
                      <div className="rounded-full shadow-md flex items-center justify-center text-4xl p-4">
                        <SiLaravel />
                      </div>
                      {/* <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <BiLogoVuejs />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <SiMysql />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <SiPostgresql />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <SiMicrosoftsqlserver />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <BiLogoMongodb />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <SiDotnet />
                      </div> */}
                    </div>
                  </div>
                </div>
            </Container>
        </section>
    )
}

export default Stack;