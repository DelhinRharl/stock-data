import React from 'react';
import { IoIosArrowBack, IoIosSettings, IoIosMic } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="flex bg-[#0e128a]  w-full h-40 pt-4">
    <NavLink to="/">
      <IoIosArrowBack className="text-[#cf3355] text-[2rem]" />
    </NavLink>
    <div className="flex justify-end w-full">
      <span className=" text-[#cf3355]  text-[2rem] justify-center font-bold">Stocks Details</span>
    </div>
    <div className="flex justify-end w-full pr-2 gap-6 ">
      <div>
        <IoIosMic className="text-[#cf3355] text-[2rem] cursor-pointer" />
      </div>
      <div>
        <IoIosSettings className="text-[#cf3355] text-[2rem] cursor-pointer" />
      </div>
    </div>
  </div>

);

export default Navbar;
