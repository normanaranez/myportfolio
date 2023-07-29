import Container from "./Container";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { BiLogoGraphql, BiLogoMongodb, BiLogoReact, BiLogoVuejs } from 'react-icons/bi';
import { SiApollographql, SiDotnet, SiExpress, SiLaravel, SiMicrosoftsqlserver, SiMysql, SiPostgresql, SiPrisma } from 'react-icons/si';
import Image from "next/image";
import { useLottie } from "lottie-react";
import { CSSProperties } from "react";
import hiManAnimation from '@/public/background_animcation.json';
import Typewriter, { Options } from 'typewriter-effect';

const Banner: React.FC = () => {

    const options = {
        animationData: hiManAnimation,
        loop: true
    };
    
    const lottieStyles: CSSProperties  = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.2,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    };
      
    const hiMan = useLottie(options, lottieStyles);

    const typeWriterOption: Options = {
        autoStart: true,
        loop: true,
    };

    return (
        <section className="flex h-screen relative">
            {hiMan.View}
            <Container className="flex">
              <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
                <div className="relative flex flex-col justify-center flex-1">
                  <div className="w-full pb-10">
                    <h2 className="text-xl font-bold">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Hi!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Hello!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Are you looking for?")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("You're not in a wrong place")
                                    .start()
                            }}
                            options={typeWriterOption}
                        />
                    </h2>
                    <h1 className="text-6xl font-bold pb-10">
                        Full Stack Web Developer
                    </h1>
                    <p className="text-lg">
                        Hi, {`I'm`} <strong className="text-lg font-bold">Norman Aranez</strong>, a passionate full-stack developer based in the Philippines with a keen interest in modern
                        technology. My expertise lies in a wide range of skills, including <strong className="text-lg font-bold"> React</strong>,
                        <strong className="text-lg font-bold"> TypeScript</strong>, <strong className="text-lg font-bold"> Next.js</strong>, the
                        <strong className="text-lg font-bold"> MERN stack (MongoDB, Express.js, React, Node.js)</strong> ,
                        <strong className="text-lg font-bold"> GraphQL</strong>, and <strong className="text-lg font-bold"> Node.js</strong>. With my
                        strong foundation in these technologies, I enjoy building robust and innovative web applications that deliver
                        exceptional user experiences. I thrive on staying up-to-date with the latest trends and best practices in the
                        development world, always seeking new challenges to expand my knowledge and skills. {`Let's`} bring your next project to
                        life and create something extraordinary together!
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold pb-10">Stack</h3>
                    <div className="flex gap-4 items-center flex-wrap">
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <TbBrandNextjs />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <BiLogoReact />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <TbBrandTypescript />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <BiLogoGraphql />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <SiExpress />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <SiPrisma />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
                        <SiApollographql />
                      </div>
                      <div className="rounded-full shadow-2xl flex items-center justify-center text-4xl p-4">
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
                <div className="flex justify-center items-center flex-1">
                  <div className="relative w-96 h-96">
                    <Image 
                        fill
                        className="rounded-full"
                        alt="logo"
                        src={'/logo.jpg'}
                    />
                  </div>
                </div>
              </div>
          </Container>
        </section>
    );
};

export default Banner;