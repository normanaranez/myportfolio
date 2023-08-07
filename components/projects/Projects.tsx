'use client';

import { cn } from '@/lib/utils';
import Container from '../Container';
import { Tab } from '@headlessui/react';
import { projects } from '@/constants';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { Button } from '../ui/button';

const Projects: React.FC = () => {
    
    const renderArrowNext = (clickHandler: () => void, hasPrev: boolean, label: string) => {
        return  (
            <Button 
                variant="secondary" 
                onClick={clickHandler} 
                disabled={!hasPrev}
                className="w-[40px] h-[40px] rounded-full p-0 flex justify-center items-center absolute right-0 z-10"
            >
                <GrNext />
            </Button>
        );
    };

    const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean, label: string) => {
        return  (
            <Button 
                variant="secondary" 
                onClick={clickHandler} 
                disabled={!hasPrev}
                className="w-[40px] h-[40px] rounded-full p-0 flex justify-center items-center absolute left-0 z-10"
            >
                 <GrPrevious />
            </Button>
        );
    };

    return (
        <section className="flex py-[50px] bg-gradient-to-r from-blue-500 to-blue-900">
            <Container>
                <div className="text-center w-full pt-10 pb-20">
                    <h4 className="font-bold text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">Transforming Visions: My Projects Portfolio</h4>
                    <p className="mt-6 text-lg tracking-tight text-blue-100">
                        Transforming Visions: My Projects Portfolio features innovative creations, showcasing my expertise and transformative approach.
                    </p>
                </div>

                {/* <div>
                    <Tab.Group vertical={true}>
                        <Tab.List>
                            {projects.map((project) => (
                                <Tab
                                    key={project.title}
                                    className={({ selected }: any) =>
                                        cn(
                                            'text-white rounded-tl-[10px] rounded-bl-[10px] py-5 min-w-[200px] max-w-[400px] text-left p-5',
                                            selected ? 'bg-white bg-white/10 outline-transparent' : 'hover:bg-white hover:bg-white/10'
                                        )
                                    }
                                >
                                    <div className="uppercase font-bold pb-2 whitespace-break-spaces">{project.title}</div>
                                    <p className="whitespace-break-spaces">{project.description}</p>
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            {projects.map((project, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={cn(
                                        'rounded-tr-xl rounded-br-lg bg-white p-3 flex-1',
                                        'ring-white ring-opacity-60 ring-offset-2'
                                    )}
                                >
                                    {project.title}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div> */}
                <div>
                    <Carousel
                        showIndicators={false}
                        // animationHandler="fade"
                        showStatus={false}
                        // infiniteLoop={true}
                        autoPlay={true}
                        // dynamicHeight={true}
                        showArrows={true}
                        swipeable={true}
                        interval={5000}
                        renderArrowNext={renderArrowNext}
                        renderArrowPrev={renderArrowPrev}
                        className="project-slider relative"
                    >
                        {projects.map((project) => (
                            <div 
                                key={project.title}
                                className="max-w-[1200px] m-auto relative"                                
                            >
                                <div className="hidden hover:flex absolute top-0 right-0 bottom-0 left-0 justify-center items-center bg-black bg-black/60">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    // width={1200}
                                    // height={100}
                                    // width={100}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                {/* <div className="flex flex-wrap gap-4 justify-center">
                    {projects.map((project) => (
                        <div 
                            key={project.title}
                            className="bg-white bg-white/10 outline-transparent text-white p-[20px] rounded-[20px] w-1/4"
                        >
                            {project.logo ? (
                                <div className="pb-[10px]">
                                    <Image 
                                        src={project.logo}
                                        alt={project.title}
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            ) : undefined}
                            <div>
                                <div className="uppercase font-bold pb-2 whitespace-break-spaces">{project.title}</div>
                                <p className="whitespace-break-spaces">{project.description}</p>
                            </div>
                            <div>
                                content here
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* <div className="flex flex-col md:flex-1 md:items-center md:flex-row">
                    <Tab.Group vertical={true}>
                        <Tab.List className="flex md:flex-col">
                            {projects.map((project) => (
                                <Tab
                                    key={project.title}
                                    className={({ selected }: any) =>
                                        cn(
                                            'text-white rounded-tl-[10px] rounded-bl-[10px] py-5 min-w-[200px] max-w-[400px] text-left p-5',
                                            selected ? 'bg-white bg-white/10 outline-transparent' : 'hover:bg-white hover:bg-white/10'
                                        )
                                    }
                                >
                                    <div className="uppercase font-bold pb-2 whitespace-break-spaces">{project.title}</div>
                                    <p className="whitespace-break-spaces">{project.description}</p>
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="flex md:flex-col flex-1 min-h-[500px]">
                            {projects.map((project, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={cn(
                                        'rounded-tr-xl rounded-br-lg bg-white p-3 flex-1',
                                        'ring-white ring-opacity-60 ring-offset-2'
                                    )}
                                >
                                    {project.title}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div> */}
            </Container>
        </section>
    );
};

export default Projects;
