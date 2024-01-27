import React, { createContext } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from './Footer';


   export const searchContext = createContext([]);

   export const jobApplyContext = createContext([]);    


const Main = () => {

       
    const [search , setSearch] = useState('');
  

    const [appliedJobs , setAppliedJobs] = useState([]);


    return (
        <div>
            <jobApplyContext.Provider value={[appliedJobs , setAppliedJobs]}>
            <searchContext.Provider value={[search , setSearch]}>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer> 
            </searchContext.Provider>  
            </jobApplyContext.Provider>
        </div>
    );
};

export default Main;