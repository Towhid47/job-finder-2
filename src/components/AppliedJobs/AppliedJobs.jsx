import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { jobApplyContext } from '../Layouts/Main';

const AppliedJobs = () => {

    const [appliedJobs] = useContext(jobApplyContext);

    console.log(appliedJobs);


    return (
        <div>
              {/* --------- Applied Jobs Page Banner ----------- */}
              <div className='details_page_header h-56 flex justify-center items-center'>
                  <h1 className='text-3xl text-white  font-semibold'>Applied Jobs</h1>   
            </div>

              {/* ---------- Applied Job items ---------------------*/}
            <div className='my-9'>
                {
                   appliedJobs.map((appliedJob) =>  <div className='bg-gray-100 border-2 border-gray-200 lg:p-7 p-5 md:w-3/5 md:mx-auto mb-9 flex flex-col md:flex-row md:items-center justify-around items-start gap-5 mx-3'>
                           <div>
                              <img src={appliedJob.logo} alt="" />
                           </div> 
                           <div>
                                <p className='text-md font-semibold'>{appliedJob.job_title}</p>
                                <p className='text-gray-600'>{appliedJob.company_name}</p>
                    
                                <div className='flex gap-3 mt-3'>
                                        <div className='job-type'>{appliedJob.remote_or_onsite}</div>
                                        <div className='job-type'>{appliedJob.job_type}</div>
                                </div>
                    
                                <div className='flex justify-between items-center w-72 mt-3'>
                                        <div className='flex items-center'><img src="icons/Location.png" alt="" /> {appliedJob.location}</div>
                                        <div className='flex items-center'><img src="icons/money.png" alt=""/> {appliedJob.salary}</div>
                                </div>
                           </div>
            
                         <Link to={`/job-details/${appliedJob.id}`}><button className='btn'>View Details</button></Link>
                    </div>
                   )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;