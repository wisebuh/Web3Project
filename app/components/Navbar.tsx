'use client';

import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../../images/logo.png";

interface NavbarItemsProps {
  title: string;
  classProps?: string;
}

const NavbarItems = ({ title, classProps }: NavbarItemsProps) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
};

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image 
          src={logo} 
          alt="logo" 
          className="w-32 cursor-pointer" 
          width={128} 
          height={32}
        />
      </div>
      
      {/* Desktop Menu */}
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavbarItems title={item} key={index + item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="flex relative">
        {toggleMenu ? (
          ""
        ) : (
          <HiMenuAlt4 
            fontSize={28} 
            className="text-white md:hidden cursor-pointer" 
            onClick={() => setToggleMenu(true)} 
          />
        )}
        
        {toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[30vw] text-white h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose 
                className="cursor-pointer" 
                onClick={() => setToggleMenu(false)} 
              />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavbarItems title={item} key={index + item} classProps="my-2 text-lg" />
            ))}
            <li className="bg-[#2952e3] py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Login
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}