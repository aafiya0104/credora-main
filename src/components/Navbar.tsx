import React from 'react';
import logoImage from "../assets/images/logosaas.png";
import Image from 'next/image';
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className=" bg-black">
    <div className="px-4">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to-right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(252, 214, 255, 0.7)] blur-md"></div>
          <Image src={logoImage} alt="SaaS Logo" className="h-12 w-12 relative"/>  
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 flex justify-center items-center rounded-lg sm:hidden">
          <MenuIcon className="text-white" />
        </div>
        <nav className="text-white gap-6 items-center hidden sm:flex">
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
          <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>

          <button className="bg-white text-black py-2 px-4 rounded-lg">Get for free</button>
        </nav>
      </div>
    </div>
    </div>
  );
};