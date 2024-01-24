import React, { createContext } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';


   export const searchContext = createContext([]);

    


const Main = () => {

       
    const [search , setSearch] = useState('');
  




    return (
        <div>
            <searchContext.Provider value={[search , setSearch]}>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer> 
            </searchContext.Provider>  
        </div>
    );
};

export default Main;