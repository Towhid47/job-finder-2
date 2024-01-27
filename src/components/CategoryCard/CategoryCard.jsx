import React from 'react';

const CategoryCard = (props) => {


    const {logo, category_name} = props.categoryData;



    return (
        <div className='border-2 border-slate-400 flex flex-col justify-center items-center p-4 rounded-md '>
             <img src={logo} alt="" className='w-2/12'/>
             <p className='text-xl'>{category_name}</p>
        </div>
    );
};

export default CategoryCard;