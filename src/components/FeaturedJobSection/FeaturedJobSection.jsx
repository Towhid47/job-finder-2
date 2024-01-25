import React from 'react';
import { useContext } from 'react';
import { searchContext } from '../Layouts/Main';

// ----------- Import JSON data file ----------------//
import jobs from '../../data/jobs.json';
import FeaturedJobCard from '../FeaturedJobCard/FeaturedJobCard';

const FeaturedJobSection = () => {

    const inputSearch = useContext(searchContext);

    const [search] = inputSearch;

    return (
        <div className='my-24'>
              <h1 className='text-3xl font-semibold mt-4'>Featured Jobs</h1>
             <p className='text-gray-400 mt-2 w-11/12 mx-auto'>Explore thousands of job opportunities with all the information you need. Its your future</p>
             
             <div className='grid sm:grid-cols-2 gap-5 mt-9'>
                  {
                     search === ''? jobs.map((job)=> <FeaturedJobCard key={job.id} job={job}></FeaturedJobCard>)
                     :
                     jobs.filter((job)=> job.category_name.toLowerCase().includes(search)).map((job)=> <FeaturedJobCard key={job.id} job={job}></FeaturedJobCard>) 
                  }
             </div>
        </div>
    );
};

export default FeaturedJobSection;