import React from 'react';
import { Link } from 'react-router-dom';


const FeaturedJobCard = (props) => {

    const {id, logo, job_title , company_name, remote_or_onsite, location, salary, job_type} = props.job;

    return (
        <div className='bg-gray-100 border-2 border-gray-200 lg:p-7 p-5 lg:mx-9 mx-4 flex flex-col items-start gap-5'>
             <img src={logo} alt="" />
             <p className='text-md font-semibold'>{job_title}</p>
             <p className='text-gray-600'>{company_name}</p>

             <div className='flex gap-3'>
                    <div className='job-type'>{remote_or_onsite}</div>
                    <div className='job-type'>{job_type}</div>
             </div>

             <div className='flex justify-between items-center xl:w-3/5 w-full '>
                    <div className='flex items-center'><img src="icons/Location.png" alt="" /> {location}</div>
                    <div className='flex items-center'><img src="icons/money.png" alt=""/> {salary}</div>
             </div>

             <Link to={`/job-details/${id}`}><button className='btn'>View Details</button></Link>
        </div>
    );
};

export default FeaturedJobCard;