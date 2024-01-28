import React from 'react';
import moneyIcon from '/icons/money.png';
import calendarIcon from '/icons/calendar.png';
import phoneIcon from '/icons/phone.png';
import emailIcon from '/icons/email.png';
import locationIcon from '/icons/location2.png';
import { useContext } from 'react';
import { jobApplyContext } from '../Layouts/Main';
import Swal from 'sweetalert2';

const DetailsPageContent = (props) => {

    const { company_name, job_title , remote_or_onsite , location , job_type , salary , job_description , educational_requirements , experiences , contact_information , job_responsibility  } = props.data;
    
    
    const [appliedJobs , setAppliedJobs] = useContext(jobApplyContext);
    
    
    
    const handleApply = (data) =>{
          
       const isExist = appliedJobs.find((appliedJob)=> appliedJob.id === data.id)

       if(isExist){
          Swal.fire({
               icon: "error",
               text: "You can't apply at the same job !",
             });
       }
       else{
          setAppliedJobs( [...appliedJobs, data] );
          Swal.fire({
               icon: "success",
               text: "Applied Successfully",
             });
          
       }
    }

    console.log(appliedJobs);

    

    return (
        <div className='mt-6 grid md:grid-cols-2 gap-2 lg:w-3/4 mx-auto p-9'>
                 {/* ///// Left Side Content /////// */}
                 <div className='flex flex-col text-left'>
                            <div>
                                 <span className='font-semibold text-lg'>Job Description:</span> <span className='text-gray-400'>{job_description}</span>
                            </div> <br />
                            <div>
                                <span className='font-semibold text-lg'>Job Responsibility:</span> <span className='text-gray-400'>{job_responsibility}</span>
                            </div> <br />
                            <div>
                                <span className='font-semibold text-lg'>Educational Requirements:</span><p className='text-gray-400'>{educational_requirements}</p>
                            </div> <br />
                            <div>
                            <span className='font-semibold text-lg'>Experiences:</span> <p className='text-gray-400'>{experiences}</p>
                            </div>
                </div>

                       {/* /////////// Right Side Content /////////// */}
                <div className='bg-gray-100 border-gray-200 border-2 p-5 mt-3 md:mt-0'>
                           <p className='font-semibold text-lg text-center'>Job Details</p> <br /><hr />
                           <div className='flex gap-1 mb-3'>
                                <img src={moneyIcon} alt="" className=''/>
                                <p className='font-semibold'>Salary:</p> <p className='text-gray-400'>{salary} (Per Month)</p>
                           </div>
                           <div className='my-3 gap-1 flex gap-1 '>
                                <img src={calendarIcon} alt="" className=''/> 
                                <p className='font-semibold '>Job Title: </p> <p className='text-gray-400 '>{job_title}</p>
                           </div><br />
                           <div>
                                 <p className='font-semibold text-lg'>Contact information</p><hr /> <br />

                                 <div>
                                      <div className='flex justify-start mb-3 gap-1'>
                                           <img src={phoneIcon} alt="" />
                                           <p className='font-semibold'>Phone:</p> <p className='text-gray-400'>{contact_information.phone}</p>
                                      </div>
                                      <div className='flex justify-start mb-3 gap-1'>
                                           <img src={emailIcon} alt="" />
                                           <p className='font-semibold'>Email:</p> <p className='text-gray-400'>{contact_information.email}</p>
                                      </div>
                                      <div className='flex justify-start mb-3 gap-1'>
                                          
                                          <div className='w-14 sm:w-6 '><img src={locationIcon} alt="" className='w-full'/></div> 
                                           <p className='font-semibold'>Address:</p> <p className='text-gray-400'>{contact_information.address}</p>
                                      </div>

                                      <button className='btn mt-6 w-full' onClick={()=> handleApply(props.data) }>Apply Now</button>
                                 </div>


                           </div>
                 </div>
        </div>
    );
};

export default DetailsPageContent;