"use client"

import Image from "next/image";

import Container from "@/components/Container";
import { Button } from "../ui/button";
import { GrMenu, GrClose } from 'react-icons/gr';
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const NavBar: React.FC = () => {

	const menus: string[] = ['Home', 'About', 'Projects', 'Contacts'];

    const [toggle, setToggle] = useState<boolean>(false);

	return (
		<header className="fixed flex w-full items-center py-8 shadow-lg dark:bg-transparent">
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
                    
                    {/* desktop */}
                    <div className="hidden md:flex justify-center gap-12">
                        {menus.map((menu) => (
                            <a 
                                key={menu} href={`#${menu}`} 
                                className="text-[14px] font-bold md:text-[16px] cursor-pointer hover"
                            >
                                {menu}
                            </a>
                        ))}
                    </div>

                    {/* mobile */}
                    <div className="flex md:hidden">
                        <DropdownMenu
                            open={toggle}
                            onOpenChange={(open: boolean) => setToggle(open)}
                            
                        >
                            <DropdownMenuTrigger asChild>
                                <Button variant="default" size="icon" >
                                    {toggle ? <GrClose className="h-4 w-4" /> : <GrMenu className="h-4 w-4" />}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-auto px-[15px] py-[15px]">
                                <div className="flex flex-col flex-1 gap-8">
                                    {menus.map((menu) => (
                                        <div 
                                            key={menu} 
                                            className="text-[14px] font-bold md:text-[16px] cursor-pointer hover:text-[#808080"
                                            onClick={() => setToggle((prevToogle) => !prevToogle)}
                                        >
                                            {menu}
                                        </div>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </Container>
		</header>
	);
}

export default NavBar;
