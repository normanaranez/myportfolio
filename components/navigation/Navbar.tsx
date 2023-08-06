"use client"

import Image from "next/image";

import Container from "@/components/Container";
import { Button } from "../ui/button";
import { GrMenu, GrClose } from 'react-icons/gr';
import { useState } from "react";
import { menus } from "@/constants";

const NavBar: React.FC = () => {

    const [toggle, setToggle] = useState<boolean>(false);

    const onToggle = () => {

        console.log('toggle', toggle);

        setToggle((prevToggle) => !prevToggle);
    };

	return (
		<header className="fixed z-50 flex w-full items-center py-8 shadow-lg bg-inherit">
			<Container>
                <div className="flex flex-1 gap-4 justify-between">
                    <div className="flex items-center">
                        <div className="relative w-8 h-8 mr-4 rounded-full">
                            <Image 
                                fill
                                className="rounded-full"
                                alt="logo"
                                src={'/logo.jpg'}
                            />
                        </div>
                        <h3 className="text-[14px] font-bold md:flex md:text-[16px]">Norman Aranez</h3>
                    </div>
                    
                    <div className="flex">
                        {/* desktop */}
                        <div className="flex justify-center gap-2">
                            {menus.map((menu) => (
                                <a 
                                    
                                    key={menu.label}
                                    href={`#${menu.label}`}
                                    className="hidden md:flex text-[14px] md:text-[16px] cursor-pointer py-2 px-4 rounded-[20px] justify-center items-center hover:bg-gray-100"
                                >
                                    {menu.label}
                                </a>
                            ))}
                            <Button 
                                variant="default" 
                                onClick={(e) => console.log('test')}
                                className="text-[14px] font-bold md:text-[16px] cursor-pointer"
                            >
                                Contact Now
                            </Button>
                        </div>

                        {/* mobile */}
                        <div className="flex md:hidden">
                            <Button variant="ghost" size="icon" onClick={(e) => console.log('test')}>
                                {toggle ? <GrClose className="h-4 w-4" /> : <GrMenu className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
		</header>
	);
}

export default NavBar;
