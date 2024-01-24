import React from 'react';
import './Banner.css';
import { FaSearch } from "react-icons/fa";
import { useContext } from 'react';
import { searchContext } from '../Layouts/Main';

const Banner = () => {

     const inputSearch = useContext(searchContext);

     const [search , setSearch] = inputSearch;



    const handleSearch = (e) =>{
       
         setSearch(e.target.value);
       
    }



    return (
        <div className='banner-image h-96'>
           
             <div className='flex items-center h-full justify-center flex-col banner-text text-white'>
                  <h1 className='md:text-5xl  text-2xl'>Find Your Perfect Dream Job</h1><br />
                  <p className='w-52 md:w-full'>Job Finder lets you find out your preferred job very easily  </p>
                  <br /><br />
                 
                  {/* ///////// Input Search Bar /////////////// */}

                  <div className='p-3 searchBar-container lg:w-4/12 flex justify-between items-center'>
                        <FaSearch className='inline text-xl me-5'/> 
                        <input type="text"  onChange={(e)=>handleSearch(e)}   placeholder='Search by Category' className='w-full placeholder:text-yellow-300'/>
                  </div>
             </div>
                   
        </div>
    );
};

export default Banner;