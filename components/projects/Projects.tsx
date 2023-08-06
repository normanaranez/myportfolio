'use client';

import { cn } from '@/lib/utils';
import Container from '../Container';
import { Tab } from '@headlessui/react';
import { projects } from '@/constants';

const Projects: React.FC = () => {
    
    return (
        <section className="flex py-[50px] bg-gradient-to-r from-blue-500 to-blue-900">
            <Container>
                <div className="text-center w-full py-10">
                    <h4 className="font-bold text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">Transforming Visions: My Projects Portfolio</h4>
                    <p className="mt-6 text-lg tracking-tight text-blue-100">
                        Transforming Visions: My Projects Portfolio features innovative creations, showcasing my expertise and transformative approach.
                    </p>
                </div>

                <div className="flex flex-1 items-center">
                    <Tab.Group>
                        <Tab.List className="flex md:flex-col">
                            {projects.map((project) => (
                                <Tab
                                    key={project.title}
                                    className={({ selected }: any) =>
                                        cn(
                                            'text-white rounded-tl-[10px] rounded-bl-[10px] py-5 min-w-[200px] max-w-[400px] text-left p-5',
                                            selected ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10' : 'hover:bg-white hover:bg-white/10 hover:ring-1 hover:ring-inset hover:ring-white/10'
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
                </div>
            </Container>
        </section>
    );
};

export default Projects;
