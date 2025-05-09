import { navItems } from "../constants";
import ButtonGradient from "./ButtonGradient";
import ButtonTrans from "./ButtonTrans";
import logo from '/logo.png'
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <nav className="sticky transition duration-300 backdrop-blur-lg py-3 top-0 z-50 border-b border-neutral-700">
            <div className="px-16 lg:px-12 relative">
                <div className="flex relative justify-between items-center">
                    <a className="flex items-center gap-2" href="#">
                        <div className="">
                            <img src={logo} alt="logo" width={45} />
                        </div>
                        <span className="font-semibold text-2xl text-zinc-200">VirtualR</span>
                    </a>

                    <ul className="ml-14 space-x-10 hidden lg:flex ">
                        {navItems.map(item => (
                            <li key={item.label} className="hover:text-green-400">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="space-x-5 hidden lg:flex ">
                        <ButtonTrans label="Sign In" />
                        <ButtonGradient label='Create an account' />
                    </div>

                    <div className="flex lg:hidden ">
                        <button onClick={() => setMenuToggle(!menuToggle)} className=" transition duration-300 ease-in-out cursor-pointer">
                            {menuToggle ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {menuToggle && (
                    <div className="bg-[#1b1a1a] w-full fixed lg:hidden right-0 p-12 transition duration-300 ease-in-out shadow-inner">
                        <div className="w-fit m-auto flex flex-col gap-5" >
                            <ul className="gap-5 flex flex-col">
                                {navItems.map(item => (
                                    <li key={item.name} className="hover:text-green-400">
                                        <a href={item.href} onClick={() => setMenuToggle(false)}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col gap-5">
                                <ButtonTrans label="Sign In" />
                                <ButtonGradient label='Create an account' />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;