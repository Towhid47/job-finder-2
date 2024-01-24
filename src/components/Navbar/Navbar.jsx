import React from 'react';
import { useState } from 'react';
import logo from '../../image/logo.png';
import { FiX } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [isOpen , setIsOpen] = useState(false);

    const handleNavbarOpen = () =>{

        setIsOpen(!isOpen);
    }


    return (
        <div className='p-3 lg:flex lg:justify-between '>
               
               {/* //////// Section 1 : Logo & Menu Bar icon Container //////// */}
               <div className='flex items-center justify-between'>
                     {/* ---------- Logo ------------------------ */}
                     <div>
                           <img src={logo} alt="" className='lg:w-52 w-48'/>
                     </div>

                     {/* ------------ Menu Bar icon ------------- */}
                     <div className='text-3xl lg:hidden' onClick={handleNavbarOpen}>
                        {
                            isOpen === true? <FiX></FiX> : <FiMenu></FiMenu>
                        }
                     </div>
               </div>



               {/* ////// Section 2 : Navbar Items container ////////////////////// */}
               <div className={`${isOpen === true? 'block' : 'hidden'} mt-9 lg:mt-0 lg:flex lg:w-4/12  lg:justify-evenly items-center`}>
                    <NavLink to='/'  className={`${({ isActive}) => isActive ? "active" : ""} block mb-6 lg:mb-0`}>Home</NavLink>
                    <NavLink to='/applied-jobs' className="block mb-6 lg:mb-0">Applied Jobs</NavLink>
                    <NavLink to='/about-us' className='block mb-6 lg:mb-0'>About Us</NavLink>
               </div>
              

        </div>
    );
};

export default Navbar;