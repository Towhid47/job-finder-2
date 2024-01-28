import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

import logo from '../../../src/image/logo.png';

const Footer = () => {
    return (
        <div className='text-black bg-slate-50 border-t-2 border-black'>
         <div className='mt-5 p-5 flex gap-8  footer-section flex-col md:flex-row'>
             <div className='flex items-start w-4/5 md:w-1/4'>
                  <img src={logo} alt="" className='w-full'/>
             </div>
             <div className='mt-5'>
                  <p className='text-lg'>Need any support ? </p> <p className='text-lg my-3 footer-text'> call us to : <FaPhone className='text-3xl inline '></FaPhone> <span className='text-2xl  font-bold'>0178005002001</span></p>
                  <div className='text-lg'>
                       <div className='flex gap-3 mt-4 '>
                            <Link className='social-link text-5xl' to=""><FaFacebook></FaFacebook></Link>{"  "}
                            <Link className='social-link text-5xl' to=""><FaLinkedin></FaLinkedin></Link>{"  "} 
                            <Link className='social-link text-5xl' to=""><FaGithub></FaGithub></Link> 
                       </div>
                       
                       <br/> <br /><hr /><span className='text-lg'>&copy; Copyright 2022 All Rights Reserved</span>
                  </div>
             </div>
        </div>
        </div>
    );
};

export default Footer;