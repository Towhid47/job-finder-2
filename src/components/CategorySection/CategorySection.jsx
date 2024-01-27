import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

//============ Import JSON data ------------------// 
import categoriesData from '../../data/categories.json';

const CategorySection = () => {
    return (
        <div className='my-9 text-center'>
             <h1 className='text-3xl font-semibold mt-4'>Job Category List</h1>
             <p className='text-gray-400 mt-2 w-11/12 mx-auto'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             
             <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mt-7 lg:mx-3 mx-5'>
                {
                   categoriesData.map((categoryData) => <CategoryCard key={categoryData.id}   categoryData={categoryData}></CategoryCard>)
                }
             </div>
        </div>
    );
};

export default CategorySection;