import React, { use } from 'react';
import JobCard from './JobCard'

const HotJobs = ({jobs}) => {
  // const jobs = use(jobPromise)
  console.log(jobs);
  return (
    <div className='grid grid-cols-3 gap-6'>
      {
        jobs.map(job => <JobCard key={job._id} job={job} />)
      }
    </div>
  );
};

export default HotJobs;