import Image from "next/image";
import Menu from "./Menu";

import Container from "@/components/Container";

const NavBar: React.FC = () => {

	const menus: string[] = ['Home', 'About', 'Projects', 'Contacts'];

	return (
		<header className="bg-white fixed flex w-full items-center py-8 shadow-lg shadow-black-500/50 dark:bg-transparent shadow-slate-500/5 z-50">
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
                        <h3 className="text-xl font-bold">Norman Aranez</h3>
                    </div>
                    <Menu options={menus}/>
                </div>
            </Container>
		</header>
	);
}

export default NavBar;
