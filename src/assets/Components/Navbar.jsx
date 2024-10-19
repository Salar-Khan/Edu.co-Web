import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { navItems } from '../Data/Data';
import React from 'react';
import Signup from '../../Pages/Signup';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-20 mx-auto px-8 text-blue-600 w-full z-40">
      
      <h1 className="text-blue-800 w-full md:text-5xl text-3xl font-bold">Educ.co</h1>

      {/* DESKTOP NAVIGATION */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li key={item.id} className="m-2 p-4 active:bg-blue-500 font-bold hover:bg-blue-400 hover:text-black duration-500">
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>
     <Link to={"/signup"}><button className="p-2 secondary-btn m-2 border-none">Register</button> </Link>  

      {/* Mobile navigation toggle */}
      <div onClick={handleNavToggle} className="block md:hidden relative z-30 ">
        {nav ? <MdClose size={20}  /> : <IoMenu size={20} />}
      </div>

      {/* Mobile navigation */}
      <ul className={`fixed md:hidden left-0 top-0 w-1/2 bg-blue-600 text-white duration-500 ease-in-out h-3/4 ${nav ? 'top-0' : 'left-[-100%]'}`}>
        {navItems.map((item) => (
          <li key={item.id} className="active:border-b p-3  border-b border-blue-100 hover:bg-blue-400 duration-500 m-3">
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
