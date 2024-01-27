import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetailsPage.css';

// --------- Import JSON data ------------//
import jobs from '../../data/jobs.json';
import DetailsPageContent from '../DetailsPageContent/DetailsPageContent';

const JobDetailsPage = () => {

    const params = useParams();   //--------- Getting URL parameter (:id) from  " /job-details/:id " by using  useParams() hook.

     const urlId = parseInt(params.id)  ;

     
     const detailsPageData = jobs.filter((job) => job.id === urlId )   //---- Filtering JSON data according to params (or, URL id)..

    

    



    return (
        <div className='my-9'>
            {/* --------- Details Page Header ------ */}
            <div className='details_page_header h-56 flex justify-center items-center'>
                  <h1 className='text-3xl text-white italic font-semibold'>Job Details</h1>   
            </div>


             {
                detailsPageData.map((data)=> <DetailsPageContent key={data.id}  data={data}></DetailsPageContent>)
             }             
        </div>
    );
};

export default JobDetailsPage;