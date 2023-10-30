"use client"
import { useState } from "react";
import { FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import Image from "next/image";
export const navLinks = [
    {
        id: "inicio",
        title: "Inicio",
    },
    {
        id: "proyectos",
        title: "Proyectos",
    },
    {
        id: "about",
        title: "Sobre mi",
    },
    {
        id: "blog",
        title: "Blog",
    },
    {
        id: "contacto",
        title: "Contacto",
    },
];

const Navbar = () => {
    const [active, setActive] = useState("Inicio");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            {/* Logo */}
            <a href="/" className="text-white flex items-center sm:mb-0">
                <Image src="/logo.png" alt="Logo" width={100} height={100} className="h-14 w-auto mr-2" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AlphaBit</span>
            </a>
            {/* Desktop Navigation */}
            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[#01C14B] ${active === nav.title ? "text-white" : "text-dimWhite"
                            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation */}
            <div className="md:hidden flex flex-1 justify-end items-center">
                {
                    toggle ? <MdClose className="text-4xl" onClick={() => setToggle(!toggle)}></MdClose> : <FiMenu className="text-4xl" onClick={() => setToggle(!toggle)}></FiMenu>
                }

                {/* Sidebar */}
                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-[#545F65]`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[22px] hover:text-[#01C14B] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;